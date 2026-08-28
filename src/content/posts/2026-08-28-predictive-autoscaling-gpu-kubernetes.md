---
title: "Autoscaling predictivo para GPUs en Kubernetes: por qué el HPA reactivo llega tarde"
author: Carlos
pubDatetime: 2026-08-28T16:00:00Z
slug: predictive-autoscaling-gpu-kubernetes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud Native
  - IA
description: "Dos ingenieros de Adobe construyeron un controlador que predice demanda 10 minutos antes y pre-provisiona GPUs, después de que el autoscaling reactivo los dejara con 20% de errores en producción."
---

![Ilustración editorial de una granja de GPUs con nodos encendiéndose en olas ordenadas antes de una ola de tráfico, estilo tech editorial, sin texto](../../assets/images/2026-08-28-predictive-autoscaling-gpu-kubernetes.jpg)

Se repite en todas partes: el pager suena de madrugada, un servicio se cae bajo tráfico y el autoscaling, que se supone debía salvarte, llega tarde. Dos ingenieros de Adobe (Ramkumar Nagaraj y Bingi Narasimha Karthik, ambos Golden Kubestronaut) contaron en el blog del CNCF cómo les pasó exactamente eso con workloads de GPU, y qué construyeron para que no volviera a pasar.

## El incidente de las 3 AM

El timeline fue brutal de lo predecible: el spike de tráfico llegó a las 06:00, el HPA cruzó el umbral a las 06:05, los pods nuevos empezaron a agendarse a las 06:15, y los primeros nodos GPU terminaron de provisionar a las 06:45. Para entonces el spike ya había pasado y los usuarios llevaban rato viendo **15-20% de error rate**. El autoscaling intentó escalar, pero la física de la infraestructura no cooperó.

El root cause no fue un bug: fue un desajuste entre lo que pide el workload y la velocidad de aprovisionamiento. Escalar servicios CPU toma minutos. Escalar nodos GPU toma **3 a 5 veces más**: firmware, drivers, inicialización de CUDA. El HPA reactivo, por definición, espera a que la demanda aparezca antes de pedir capacidad. Para GPU, eso es reactivo en el peor sentido.

## La idea: ver el spike antes de que llegue

Los datos ya estaban ahí —Prometheus recogiendo CPU, memoria, latencia, RPS y utilización de GPU (NVIDIA DCGM) sin parar—. La pregunta no era si podían predecir demanda, sino si podían predecirla *lo suficientemente bien* como para pre-provisionar capacidad. Hipótesis: un controlador corriendo cada 60 segundos, mirando la última hora de métricas, que proyecte la demanda 10 minutos hacia adelante.

## Las tres piezas: Predict, Provision, Absorb

**1. El predictor (Bi-LSTM).** Evaluaron ARIMA (rápido pero sufre con bursts), Prophet (bueno para estacionalidad, overkill para 10 min) y LSTM. Se quedaron con un **Bi-LSTM de 2 capas (64 → 32 unidades)** porque los patrones de GPU no eran lineales: micro-bursts, valles de recuperación, mesetas anómalas. El modelo corre *dentro* del controlador: TensorFlow Lite embebido en un binario Go, sin plataforma de ML externa ni capa de serving. Se re-entrena semanalmente. Su propio trade-off: mejor accuracy a cambio de peor explicabilidad ("¿por qué predijo 150 pods?" no se responde tan fácil como con ARIMA).

**2. Detección de bursts (red de seguridad).** En paralelo corre un detector de anomalías que mantiene un umbral adaptativo sobre la desviación estándar móvil de predicciones vs. reales. Si la demanda real supera la predicción por cierto intervalo de confianza, dispara y sube la agresividad del scale-out. Es una heurística, no un modelo: su mensaje es "tu modelo no sabe lo que viene, escala más rápido".

**3. Scaler graduado (estabilidad).** La lección dura: si le dices a Kubernetes que escale 100 pods por segundo, descubres cuántos ciclos de scheduler aguanta tu cluster (spoiler: no tantos). Lo limitan a **20 pods por minuto**, en olas. Suena lento, pero es lo correcto: los nodos se asientan antes de la siguiente ola, etcd no trilla con mil updates de Deployment, kubelet arranca contenedores en vez de encolarlos, y los hooks de inicio (init containers, sidecar de service mesh) terminan antes de que llegue el siguiente lote. Además apuntan a **70% de utilización, no 100%**, para dejar headroom y margen de error.

## Los números

Validaron en modo shadow (prediciendo sin escalar) con más de 500 horas de datos:

- **85% de precisión** dentro de ±10% de la demanda real a T+10min
- Detección de bursts: **9 de 10 spikes reales**, con 2 falsos positivos (aceptable)
- **23 de 23 checks de validación** pasados, cero cascadas, cero oscilación
- En simulaciones, el predictor atrapó los spikes **11 minutos antes**

La parte más honesta del post: admiten que un ARIMA bien afinado probablemente logra el 80% del resultado con 10% de la infraestructura, que deberían re-entrenar tras cada incidente (no solo semanalmente), y que un enfoque híbrido (LSTM + SHAP para explicar) habría valido la pena.

## Lo que lo hace interesante

Lo construyeron sin extensiones propietarias: sin CRDs (el controlador parchea replicas del Deployment igual que el HPA), sin plataforma de ML externa, con telemetría estándar, y convive con el HPA v2 en vez de pelearlo. Traducción: lo puedes correr en cualquier cluster con Prometheus, sin infra nueva ni vendor nuevo.

Eso sí, no es para todos: brilla cuando el aprovisionamiento es lento (GPU, bare-metal, >2-3 min), el tráfico es medianamente predecible y la estabilidad importa más que el costo. Es overkill si tus nodos suben en 30 segundos o si la demanda es aleatorio puro.

Fuente: [Scale before the spike: Predictive autoscaling for GPU workloads on Kubernetes](https://www.cncf.io/blog/2026/08/28/scale-before-the-spike-predictive-autoscaling-for-gpu-workloads-on-kubernetes/) (CNCF Blog, 28-08-2026).
