---
title: "AWS sube GPU reserved otro 20%: EC2 Capacity Blocks ya acumula dos alzas en 6 meses"
author: Carlos
pubDatetime: 2026-08-02T04:00:00Z
slug: aws-ec2-capacity-blocks-suben-20-pct-gpu
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "AWS subió los precios de EC2 Capacity Blocks para ML en ~20% el 1 de julio. Es la segunda alza del año. Las GPUs más caras ahora cuestan $14/hr por acelerador."
---

![AWS EC2 Capacity Blocks sube 20%](../../assets/images/2026-08-02-aws-ec2-capacity-blocks.jpg)

Si pensabas que alquilar GPUs en AWS ya estaba caro, bueno... se puso peor. El 1 de julio, AWS subió silenciosamente los precios de **EC2 Capacity Blocks for ML** — su producto de clusters GPU reservados — en aproximadamente **20%**. Y esto no es la primera vez este año: en enero ya habían subido ~15%. Dos alzas en seis meses.

## Qué son los Capacity Blocks

Para el que no los conoce, los EC2 Capacity Blocks son la forma de **reservar clusters de GPUs NVIDIA con anticipación**. En vez de rogarle al on-demand que tenga una H100 libre cuando arranques tu training, bloqueas el hardware ahead of time. Certidumbre de capacity, a cambio de un precio premium.

## Los nuevos precios

AWS no emitió comunicado de prensa. Lo dejaron caer en la pricing page, y fue así:

| Instancia | GPU | Precio/hr (por acelerador) |
|---|---|---|
| P6-B300 | Blackwell | **$14.04** |
| P6-B200 | Blackwell | **$12.36** |
| P5en | H200 | **$6.87** (US) |
| P5e | H200 | **$5.97** |
| P5 | H100 | **$5.19** (US) |
| P4de | A100 | **$2.21** (US) |

El Blackwell P6-B300 — el hardware más nuevo — se lleva la corona como el más caro: **$14.04 por hora por acelerador**. Para un cluster completo de varios nodos, la cuenta sube rápido a miles de dólares por día.

## Dos alzas, un patrón

La primera alza fue en enero 2026 (~15%). InfoQ documentó el caso concreto: un `p5e.48xlarge` (8x H200) pasó de $34.61/hr a $39.80/hr en la mayoría de regiones.

Ahora, seis meses después, otra subida del ~20%. Si AWS mantiene el ritmo, la siguiente revisión de precios llegaría alrededor de **enero 2027**. Esto ya no es un ajuste puntual — es una tendencia estructural.

## Por qué está pasando

AWS dice que es "supply and demand", y no falta razón. La demanda por compute de IA es brutal: Amazon acaba de reportar Q2 con **AWS creciendo 37% YoY** y elevó su guidance de capex a **$220 mil millones** para 2026. Por otro lado, el suministro de GPUs — especialmente Blackwell — sigue being tight.

Pero también hay un componente de **poder de pricing**: AWS sabe que muchos enterprise clients no tienen alternativa (o no quieren migrar). Si tu infraestructura ya vive en AWS, cambiar a un neocloud implica fricción. Y AWS está aprovechando ese lock-in.

## La competencia

Ni Microsoft ni Google han anunciado alzas comparables en sus precios de GPU reservada este año. Pero ojo: el GPU on-demand en otras nubes tampoco es barato. Los trackers de precios ubican:

- **Google Cloud A3 (H100):** ~$88/hr on-demand
- **Azure ND H100 v5:** ~$98/hr on-demand

Comparado con eso, los Capacity Blocks de AWS siguen siendo más baratos — porque estás pagando por reservar, no por on-demand. Pero la brecha se está cerrando, y los **neoclouds** ofrecen el mismo silicio por 70-80% menos.

## Lo que esto significa para equipos DevOps/Infra

1. **Finanzas:** Si tu presupuesto de cloud ya include GPU reservations, recalcula. Un 20% de alza sobre un cluster de H100s que corre 24/7 es plata seria.
2. **Estrategia:** Esto acelera la migración hacia neoclouds para workloads de training puro. Para inference en producción que necesita estar cerca del resto de tu stack, los hyperscalers siguen ganando.
3. **Savings Plans:** AWS extendió los Compute Savings Plans a P6-B200 Blackwell desde junio 2026. Si no los estás usando, los SPs dan más flexibilidad que los RIs tradicionales.

## Conclusión

AWS está mandando un mensaje claro: **la GPU premium va a costar más, no menos**. Mientras la demanda de IA siga superando a la oferta de silicio, los precios van a seguir subiendo. Para los equipos que dependen de AWS para AI training, es momento de revisar arquitectura, evaluar alternativas y optimizar los workloads.

La era del GPU barato en hyperscalers se acabó. Bienvenidos al nuevo normal.

**Fuentes:** [Tech Insider](https://tech-insider.org/aws-ec2-capacity-blocks-price-hike-2026/), [AWS Pricing Page](https://aws.amazon.com/ec2/capacity-blocks/pricing/), [InfoQ (alza enero)](https://www.infoq.com/news/2026/01/ec2-ml-capacity-price-hike/)
