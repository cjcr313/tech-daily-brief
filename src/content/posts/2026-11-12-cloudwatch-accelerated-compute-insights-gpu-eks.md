---
title: "AWS CloudWatch lanza 'accelerated compute insights': visibilidad por workload para tus GPUs en EKS, y el fin del acelerador caro e invisible"
author: Carlos
pubDatetime: 2026-11-12T21:00:00Z
slug: cloudwatch-accelerated-compute-insights-gpu-eks
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "AWS presentó en KubeCon la nueva capa de CloudWatch que muestra cada acelerador del fleet con atribución por workload: visibilidad a nivel de dispositivo GPU en EKS para cortar el desperdicio de cómputo."
---

![Ilustración editorial tech de racks de servidores con chips de GPU luminosos en gradas, algunos brillando intensamente y otros tenues, con una lupa gigante de observabilidad enfocando uno de los chips, paleta naranja cálido y azul oscuro, estilo ilustración profesional sin texto](../../assets/images/cloudwatch-accelerated-compute-insights-gpu-eks.jpg)

La paradoja del boom de IA: las empresas gastan fortunas en aceleradores (GPUs, Trainium) y luego se enteran de lo que pasa con ellos... más o menos nunca. **Amazon CloudWatch accelerated compute insights**, lanzado en KubeCon North America 2026, ataca exactamente ese punto ciego: **una vista operacional única de cada acelerador del fleet, con visibilidad a nivel de dispositivo en Amazon EKS**.

## El problema en una frase

Aceleradores carísimos, cero visibilidad por workload. Puedes tener una GPU muriéndose lentamente en un nodo mientras el dashboard general sonríe en verde. Con atribución por workload, **arreglas una GPU mala en vez de pelear con el cluster completo** — y de paso descubres el cómputo que nadie está usando pero que igual aparece en la boleta.

## Sobre qué se construye

No es una herramienta aislada: se apoya en la base de observabilidad que AWS lleva un par de años despachando para EKS — **OTel Container Insights para métricas de infraestructura y APM para la capa de aplicación**. La capa nueva agrega la dimensión que faltaba: el estado y uso de cada acelerador, correlacionado con quién lo está usando.

La activación para EKS pasa por el **CloudWatch Observability add-on en su versión 7.0.1**, así que si ya corres el add-on, la actualización es del tipo "dos clics y a mirar dashboards".

## Por qué importa

La inferencia en producción convirtió el costo de aceleradores en línea de presupuesto propia, y sin telemetría por dispositivo es imposible distinguir entre capacidad bien usada y plata quemada. Que CloudWatch lo resuelva nativo (sin instrumentar nada del lado de la app) baja la barrera para equipos que ya viven en el ecosistema AWS.

Entre esto, lo que mostró Jaeger con su troubleshooting con IA y la apuesta eBPF de groundcover, el mensaje de la semana es consistente: **la observabilidad de la era de IA se juega en el plano de la infraestructura** — GPUs, red, runtime — no solo en las métricas de la aplicación.
