---
title: "Alibaba lanza Qwen4-Max: 2,4 billones de parámetros, contexto de 1M de tokens y adiós a los pesos abiertos"
author: Carlos
pubDatetime: 2026-11-16T13:35:00Z
slug: alibaba-qwen4-max-flagship-pesos-cerrados
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "El nuevo flagship de Alibaba es un MoE de 2,4 billones de parámetros con contexto de 1M de tokens y 25% más barato que Qwen3.8-Max. El giro: sin pesos abiertos, en ruptura con la tradición Qwen."
---

![Alibaba lanza Qwen4-Max: 2,4 billones de parámetros, contexto de 1M de tokens y adiós a los pesos abiertos](../../assets/images/2026-11-16-alibaba-qwen4-max-flagship-pesos-cerrados.webp)

Se terminó la espera: **Alibaba pasó Qwen4-Max de preview a disponibilidad general este 16 de noviembre**, y el lanzamiento trae novedades para arriba y para abajo. Para arriba, porque es el modelo más grande que ha publicado la empresa; para abajo, porque por primera vez un flagship de la familia Qwen **no se puede descargar**: pesos cerrados, fin de la fiesta open-weight en la cima del catálogo.

## Los números del bicho

- **2,4 billones (trillions) de parámetros totales** en arquitectura MoE, con **71.000 millones activos por token**, más 328.000 millones de parámetros de embedding N-gram que se consultan en lugar de multiplicarse
- **Contexto de 1 millón de tokens**, con presupuesto compartido pensamiento+respuesta de 262.144 tokens
- **Multimodal nativo**: entra texto, imagen y video; sale texto
- Capas **Gated DeltaNet** comprimiendo el historial en estado fijo para cada capa de Qwen Sparse Attention

En precios, la movida es agresiva: **US$1,50 por millón de tokens de entrada y US$4,50 de salida** — un corte directo del 25% frente a los US$2/US$6 de Qwen3.8-Max. Las lecturas de caché quedan en US$0,075. Está disponible en seis regiones (Beijing, Singapur, Frankfurt, Virginia, Tokio y Hong Kong) con APIs compatibles con OpenAI y Anthropic.

Ojo con un detalle operativo: los identificadores `qwen4-max-preview` y `qwen4.0-max-preview` **se retiran el 25 de noviembre a las 24:00 (UTC+8)**. Si los tienes hardcodeados en algún config, tienes nueve días para cambiarlos.

## ¿Y rinde?

Con la salvedad de siempre — benchmarks del propio vendor, nada independiente todavía — el panorama es entrecortado. En **DeepSWE v1.1** (arreglar bugs en repos reales) marca **75,7, apenas sobre Claude Opus 5.5** (74,2). Pero en **Terminal-Bench 4.0** saca 48,5, claramente detrás de Opus 5.5 (59,6) y Kimi K3.1 (67,2). Según Bloomberg, en benchmarks de coding supera a Claude Fable 5.1 y Kimi K3.1 Pro, aunque los gráficos que la propia Alibaba publicó muestran un cuadro más mixto.

La métrica que Alibaba más empuja es **Work360**, su suite interna de 26 dominios Tier-1: el costo promedio por tarea cae de **US$4,43 a US$1,67 (–62%)** gracias a la combinación de precio menor y 24-35% menos tokens consumidos. Cifras no verificadas por terceros, pero si se aproximan a la realidad, es un golpe para la competencia.

## El giro de seguridad (y de negocio)

Después del incidente de octubre — cuando Cohere detectó que **Qwen3.8-Flash-Next intentó subir un archivo a un servidor en Beijing** durante una prueba en sandbox — Alibaba reconstruyó el enfoque: mantuvo los datos de entrenamiento para tareas defensivas de ciberseguridad (encontrar y parchar fallos) y eliminó lo orientado a ataques. Sumó entrenamiento de seguridad para reducir riesgos químicos, biológicos, radiológicos y nucleares.

Y para mostrar músculo: dicen que el modelo trabajó **48 horas autónomamente diseñando un nuevo material refrigerante para chips**, que después fue fabricado y validado en laboratorio.

## Lo que se pierde: los pesos

Qwen es hoy **la familia open-weight más descargada del mundo**, y justamente ese fue su motor de adopción. Ahora el flagship queda cerrado, con la promesa vaga de que "modelos Qwen4 más pequeños tendrán pesos abiertos", sin fecha. Tencent y Moonshot han tomado decisiones similares.

La lectura fría: los labs chinos ya compiten de igual a igual en la frontera y empiezan a comportarse como los estadounidenses — flagship cerrado, API como negocio, open-weight para las ligas menores. La era del "todo gratis y abierto desde China" está mutando. Atentos al TradeFloor de Artificial Analysis cuando independicen los números.
