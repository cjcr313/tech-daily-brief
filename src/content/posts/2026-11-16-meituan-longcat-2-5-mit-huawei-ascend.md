---
title: "Meituan libera LongCat-2.5: 1,6 billones de parámetros bajo licencia MIT y entrenado sin una sola GPU de NVIDIA"
author: Carlos
pubDatetime: 2026-11-16T13:35:00Z
slug: meituan-longcat-2-5-mit-huawei-ascend
featured: false
draft: false
tags:
  - IA
  - Infraestructura
description: "El gigante chino del delivery publicó los pesos de LongCat-2.5 (MoE de 1,6 billones de parámetros, MIT) entrenado íntegramente en aceleradores Huawei Ascend. El ángulo político es tan grande como el modelo."
---

![Ilustración editorial de un clúster de servidores con chips de silicio rojos y dorados alimentando una red neuronal brillante, cables de fibra óptica entrelazados, paleta azul profundo y cobre, estilo ilustración tech profesional](../../assets/images/2026-11-16-meituan-longcat-2-5-mit-huawei-ascend.jpg)

Meituan — sí, la empresa del delivery chino — soltó esta semana los pesos de **LongCat-2.5**, un MoE de **1,6 billones (trillions) de parámetros** con ~48.000 millones activos por token, bajo la permisiva **licencia MIT**. Anunciado el 2 de noviembre y con pesos públicos desde el 9, la cobertura internacional de los últimos días destaca el dato que más duele en Washington: **fue entrenado sin una sola GPU de NVIDIA**.

## Diseñado para agentes, no para charlar

LongCat-2.5 está construido para trabajo multi-paso autónomo, especialmente coding: recorrer un codebase, arreglar bugs, verificar sus propios resultados. Es multimodal desde el origen — convierte imágenes a tokens y las procesa junto al texto, así un agente puede mirar el screenshot de una página rota y transformarlo en un fix. Por la API acepta **1 millón de tokens de contexto** con respuestas de hasta 128K.

## El ángulo de hardware, en cristiano

- El predecesor LongCat-2.0 se entrenó a fines de junio **en un clúster de más de 50.000 chips chinos**
- La guía de self-hosting describe un clúster de **194 aceleradores Huawei Ascend de la serie Atlas A2**: dos para procesamiento de imagen, 64 para ingesta de prompts, 128 para generación
- **No hay guía para GPUs NVIDIA. Ninguna.**
- Los pesos de los experts van cuantizados a **4 bits** — algo que los chips chinos manejan nativamente — con +43,3% de throughput en prompts y +42,8% en generación frente a la versión de 8 bits, sin pérdida de precisión relevante

Esto es exactamente lo que los controles de exportación estadounidenses querían evitar: un modelo de clase frontera entrenado y servido en silicio doméstico chino. Y de paso vuelve a los aceleradores de Huawei más atractivos para compradores fuera de China.

## Benchmarks: potente, con letra chica

Números de Meituan, así que ojo con el grano de sal:

- **Terminal Bench v2.1**: 88,4 — casi empatando a Claude Opus 5 (89,1), GPT-5.6 Sol (88,8) y DeepSeek-V4.1-Flash (90,6)
- **Terminal Bench v4.0** (la variante dura): 38,5 — sobre GPT-5.6 Sol (37,3) pero bien abajo de Opus 5 (53,9)
- **DeepSWE**: 64,6, un salto brutal desde el 9,7 de LongCat-2.0 (DeepSeek-V4.1-Flash lidera con 74,2)
- **BrowseComp**: 91,9, el más alto de su tabla… pero corrido en el entorno propio de Meituan

La letra chica: benchmarkearon contra GPT-5.6 Sol y Opus 5 cuando sus sucesores — GPT-6.1 Sol y Opus 5.5 — ya estaban en la calle desde septiembre y puntúan más alto. La lectura honesta: **compite con la generación anterior de modelos premium, a una fracción del precio**. Que igual es noticia, viniendo de la empresa del almuerzo.

## Cómo probarlo

Chat gratis en longcat.ai, o API con endpoint compatible con Anthropic y pricing promocional de US$0,30/US$1,20 por millón de tokens. Y si tienes 194 Ascend dando vueltas, te lo self-hosteas entero. Pieza única del nuevo tablero de la IA abierta.
