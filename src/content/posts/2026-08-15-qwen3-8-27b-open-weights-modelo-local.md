---
title: "Qwen3.8-27B: Alibaba abre los pesos de un modelo local que le pisa los talones a Opus 4.6 Max en coding"
author: Carlos
pubDatetime: 2026-08-15T10:30:00Z
slug: qwen3-8-27b-open-weights-modelo-local
featured: false
draft: false
tags:
  - IA
description: "Alibaba lanzó Qwen3.8-27B con open weights Apache 2.0: 262K de contexto, multimodal, y benchmarks que superan a Muse Glimmer 30B y hasta a Opus 4.6 Max en coding real."
---

![Ilustración editorial de un modelo de IA compacto corriendo localmente en una GPU, estilo tech editorial](../../assets/images/2026-08-15-qwen3-8-27b-open-weights-modelo-local.jpg)

La guerra de los modelos locales tiene un nuevo contendiente, y esta vez viene con todo: **Qwen3.8-27B**, lanzado ayer por Alibaba a las 15:00 UTC, con **open weights desde el día uno bajo licencia Apache 2.0**. Nada de "esperen unas semanas": los pesos ya están en Hugging Face (incluidos los GGUF de Unsloth).

## ¿Qué trae?

- **27B denso, multimodal nativo** — no es un MoE recortado, es el modelo completo
- **262K tokens de contexto nativo**, extendible a **1M con YaRN**
- Pensado para correr en **una sola GPU** (con quants NVFP4 corre ~1.5x más rápido que BF16 en 24GB de VRAM, y el FP8 KV cache duplica el contexto efectivo)
- **Day 0 en AMD**: soporte inmediato en Ryzen AI Max y Radeon vía LM Studio y Lemonade

## Los números que importan

La comparación directa es con **Muse Glimmer 30B** de Meta (que publicamos hace un par de días acá), y no le hace ni un poco de gracia:

- **Terminal Bench 2.1**: 73.0 vs 51.7 — más de 20 puntos de ventaja en coding agéntico
- **GPQA Diamond**: 89.2 vs 83.5
- **IFBench**: 79.5 vs 77.0
- Y en todos los benchmarks donde ambos corrieron, Qwen ganó

Pero el dato más salvaje es contra **Opus 4.6 Max** de Anthropic, un modelo frontier varias veces más grande: Qwen3.8-27B lo **gana en SWE-bench Pro (61.7 vs 53.4)**, QwenSWEBench (79.0 vs 63.8), IFBench (79.5 vs 62.5) y LiveCodeBench v6 (90.3 vs 88.8). Opus se mantiene adelante en reasoning duro (GPQA, HLE) y NL2Repo, pero que un modelo de 27B diseñado para tu GPU local gane en coding del mundo real es una señal de dónde va esto.

También le gana a su hermano mayor **Qwen3.7-Plus** en la mayoría de los tests. Básicamente el modelo "chico" de la familia está canibalando al plus.

## El contexto

Alibaba además abrió los pesos de **Qwen3.8-2.4T-A95B** (la versión Max de la misma generación), o sea, ahora tienes el paquete completo: un modelo local liviano y uno frontier, ambos abiertos. Claramente una respuesta a la movida de Meta con Muse Glimmer y a la estrategia local-first de Google con Gemma.

Para los que andan viendo correr agentes IA en hardware propio, esto recalibra el estándar: la pelea local de 2026 ya no es "¿puede un modelo pequeño ser útil?", sino "¿puede pegarle a los frontier en las tareas que importan?". Por lo menos en coding, la respuesta empieza a ser sí.

**Fuentes:** anuncio oficial de Qwen, Hugging Face (unsloth/Qwen3.8-27B-GGUF), officechai, unsloth.ai, blog AMD.
