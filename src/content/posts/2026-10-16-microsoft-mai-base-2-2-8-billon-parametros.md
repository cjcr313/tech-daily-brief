---
title: "Microsoft completa el pre-training de MAI-Base-2: 2,8 billones de parámetros con obsesión por la eficiencia"
author: Carlos
pubDatetime: 2026-10-16T21:10:00Z
slug: microsoft-mai-base-2-2-8-billon-parametros
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Microsoft AI cerró el pre-training de MAI-Base-2: MoE de 2,8 billones de parámetros (80.000M activos), 16.000 GPUs GB200 durante 38 días y un entrenamiento 12x más eficiente que el comparable de DeepSeek, según Suleyman."
---

![Ilustración editorial de un clúster masivo de GPUs entrenando un modelo de IA, nodos interconectados formando una red de expertos, estilo ilustración tech profesional](../../assets/images/2026-10-16-microsoft-mai-base-2-2-8-billon-parametros.jpg)

Microsoft AI —el laboratorio de Mustafa Suleyman— anunció que completó el pre-training de **MAI-Base-2**, su nuevo modelo fundacional state-of-the-art. Los números de la ficha técnica: **MoE con 2,8 billones (trillions) de parámetros totales y 80.000 millones activos por token**, entrenado sobre **16.000 GPUs NVIDIA GB200 durante 38 días**, en el orden de los 50 billones de tokens.

Pero el número que Suleyman quiere que recuerdes no es el de parámetros: es el de la eficiencia.

## La narrativa: ganar gastando menos

El CEO de Microsoft AI declaró que el nuevo modelo **le gana al comparable de OpenAI usando menos cómputo**, y que el pre-training usó **"12 veces menos cómputo que DeepSeek"** — específicamente en comparación con DeepSeek-V4-Pro-Base, según el blog público. Ojo: es autoreportado, sin benchmarks independientes aún, y Suleyman no detalló la metodología exacta. Pero la dirección es clara: después de que DeepSeek avergonzara al establishment con modelos baratos, **la eficiencia de entrenamiento se volvió el argumento de venta estrella**.

## La parte técnica (que es lo interesante del post)

El blog de ingeniería detalla cómo entrenaron un modelo gigante sin derretir el cluster:

- **Muon a escala**: adoptaron el optimizador Muon (que ortogonaliza el momentum con Newton–Schulz) en vez de AdamW para su modelo más grande, reportando dinámicas de entrenamiento más estables y ganancias de eficiencia grandes. El problema: Newton–Schulz necesita la matriz completa, lo que choca con el sharding de ZeRO. La solución fue un **resharding del momentum durante el paso del optimizador** (dos all-to-all, con kernels symmetry-aware en BF16). Resultado: Muon consume solo el **2,1% del tiempo de iteración (165 ms)**.
- **Agrupación de expertos con rondas múltiples**: los expertos por rank se agrupan con capacidad de tokens fija; los expertos sobrecargados piden capacidad libre a otros expertos del grupo, y dispatch/compute/collect se pipelinan. La memoria queda estática sin importar el desbalance de tokens.
- **Clipping de gradientes de activaciones**: en vez de clipear la norma global del batch (donde un outlier castiga a todo el lote), clipean gradientes de activaciones en puntos seleccionados de la red. Junto con Muon, el gradiente norm queda en un rango mucho más acotado que en MAI-Base-1.

## Qué viene

El modelo se ofrecerá vía **licenciamiento en Azure AI Foundry**. Contexto útil: en junio Microsoft ya había lanzado MAI-Thinking-1 (post-entrenado sobre MAI-Base-1 con foco en razonamiento), así que lo esperable es una línea "Thinking" sobre esta nueva base.

Para el mundo infra/DevOps, la señal de fondo es que **la carrera ya no es solo "más grande" sino "más barato por token de calidad"** — y eso, con modelos que presumen de entrenarse con menos cómputo, termina bajando el precio de inferencia para todos los que construimos encima.
