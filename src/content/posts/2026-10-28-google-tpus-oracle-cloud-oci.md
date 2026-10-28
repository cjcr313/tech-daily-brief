---
title: "Google lleva sus TPUs a Oracle Cloud: OCI será el primer hyperscaler externo en ofrecerlos"
author: Carlos
pubDatetime: 2026-10-28T13:10:00Z
slug: google-tpus-oracle-cloud-oci
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - IA
description: "Google y Oracle cerraron un acuerdo para llevar TPUs a OCI desde 2027: el primer hyperscaler fuera de Google que ofrecerá el chip. Hasta 12,6 PFLOPS FP4 por chip, 97% de goodput sostenido y TorchTPU open source de por medio."
---

![Ilustración editorial tech isométrica de tarjetas de aceleradores de IA con disipadores rojos en un data center de refrigeración líquida, conectadas entre sí por rutas de luz óptica que se re-enrutan alrededor de un nodo dañado, con dos nubes corporativas entrelazadas al fondo enlazando sus redes, paleta azul y roja estilo Cloud, ilustración tecnológica profesional limpia, sin texto](../../assets/images/google-tpus-oracle-cloud-oci.jpg)

Noticia de infraestructura que hace unos años habría sonado a ciencia ficción: **Google va a instalar sus TPUs dentro de Oracle Cloud Infrastructure**. OCI se convierte en el **primer hyperscaler fuera de Google en ofrecer Tensor Processing Units**, con capacidad desplegándose a partir del calendario 2027. Sí: el mismo Oracle que compite de tú a tú con Google Cloud en cloud enterprise, ahora va a hostear su silicio.

## Por qué importa (más allá del headline)

La demanda global de cómputo para IA supera la capacidad de cualquier nube individual — esa es la razón de negocio. Pero el movimiento tiene varias capas técnicas que lo hacen interesante:

- **Diseño de data centers para densidad de IA**: los sistemas TPU están diseñados para refrigeración líquida directa a nivel de rack, y los data centers de próxima generación de OCI están construidos justo para ese perfil. Capacidad flexible que puede rotar entre entrenamiento de modelos frontier e inferencia en producción según demanda.
- **Red de alto rendimiento**: el tráfico chip-a-chip va por ICI y Optical Circuit Switching (OCS) de Google; Oracle aporta su red Acceleron para el resto del path. Las dos stacks tienen que convivir sin convertir el cluster en un cuello de botella.
- **Portabilidad de software**: este es el punto que más le sirve al dev promedio. **TorchTPU, el stack nativo de PyTorch para TPUs, ya es open source**, con soporte para vLLM, SGLang, llm-d, TorchTitan, Ray, TorchRec, Hugging Face y LiteRT. La promesa: mover workloads entre GCP y OCI **sin reescribir el código del modelo**.

## Los números del chip

La octava generación de TPU entrega hasta **12,6 PFLOPS de cómputo FP4 nativo por chip** — más de 100x los 92 TFLOPS del TPU v1 original, y hasta 2x el performance por watt de la generación anterior. Pero Google insiste en que el FLOPS bruto no define la economía real:

- Para **entrenamiento**, la métrica que manda es el **goodput**: el porcentaje de tiempo que el cluster pasa haciendo cómputo productivo. Con OCS re-enrutando rutas ópticas en tiempo real alrededor de fallas **sin reiniciar jobs**, Google reporta sobre **97% de goodput sostenido** en entrenamientos a gran escala con miles de chips.
- Para **inferencia**, mandan latencia y costo por token. Más SRAM en chip, más HBM y una topología de interconexión que corta los saltos de red en más de 50% se traducen en hasta **80% mejor performance por dólar** en serving de baja latencia, según Google.

## La lectura de arquitecto

Dos lecturas rápidas:

1. **El silicium propio se volvió producto**. Google pasó una década defendiendo que el TPU era diferenciador interno. Ahora lo licencia a otro hyperscaler — señal de que en la era de la escasez de GPU, **la capacidad de cómputo dedicada es el activo estratégico**, más que la exclusividad del chip.
2. **Multicloud de IA deja de ser slides**. Si puedes correr el mismo workload de TPU en dos nubes con la misma toolchain, la negociación de costos por token y time-to-train cambia bastante. Para equipos fintech o regulados que necesitan soberanía de datos, tener TPUs *dentro* de OCI con sus certificaciones es una puerta nueva.

Y ojo con el timing: el anuncio cae en plena semana de **Oracle AI World**, donde también se destapó OpenAI+Oracle metiendo apps empresariales en ChatGPT. Oracle está jugando sus cartas para ser el hyperscaler "neutral" donde todos los laboratorios de IA tienen cabida.

## El takeaway

2027 suena lejos, pero los acuerdos de capacidad se cierran ahora. La infraestructura de IA se está consolidando en pocas manos con chips propios — y por primera vez, **esos chips cruzarán la barda del hyperscaler que los creó**. Si tu estrategia de IA asume una sola nube o una sola clase de acelerador, es buen momento para repensarla.
