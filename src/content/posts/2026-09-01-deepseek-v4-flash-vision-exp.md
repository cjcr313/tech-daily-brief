---
title: "DeepSeek libera V4-Flash-Vision-Exp: su primer modelo multimodal abierto"
author: Carlos
pubDatetime: 2026-09-01T10:00:00Z
slug: deepseek-v4-flash-vision-exp
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "DeepSeek publicó en Hugging Face los pesos de V4-Flash-Vision-Exp, su primer modelo multimodal experimental de la familia V4, bajo licencia MIT."
---

![Ilustración editorial de un modelo multimodal abierto que procesa imagen y texto](../../assets/images/2026-09-01-deepseek-v4-flash-vision-exp.jpg)

Diez días después de lanzarlo por API, **DeepSeek** soltó los pesos de **V4-Flash-Vision-Exp** en Hugging Face, bajo licencia **MIT**. Es su primer modelo multimodal experimental dentro de la familia V4, construido sobre la arquitectura de **V4-Flash** (284B parámetros, 13B activos) con un encoder de visión agregado.

La jugada es un guiño directo a la comunidad open source: no solo entregan el checkpoint original, sino que ya hay versiones **GGUF** (vía Unsloth) y builds en **NVFP4** listas para correr en hardware B200, lo que baja la barrera para self-hosting.

### Qué es exactamente

V4-Flash-Vision-Exp es, como su nombre lo dice, **experimental**. No viene con la promesa de producción, sino como una muestra temprana de hacia dónde va la línea multimodal de DeepSeek. El modelo combina el motor de lenguaje de V4-Flash con capacidades de visión, apuntando a tareas donde hay que razonar sobre imágenes además de texto.

Para el que ya conoce la familia: V4-Pro (1.6T parámetros, 49B activos) y V4-Flash (284B, 13B activos) ya venían con contexto de un millón de tokens. La variante Vision es el primer paso de DeepSeek en llevar esa capacidad a lo multimodal.

### Por qué importa

Que DeepSeek libere esto bajo MIT —no una licencia restrictiva— es otra señal de que la guerra de modelos chinos abiertos se pelea por adopción, no por lock-in. Viene justo después de los movimientos de Tencent (Hy4), Z.ai (GLM-5.3) y Alibaba (Qwen3.8), todos con pesos abiertos en las últimas dos semanas.

Eso sí, conviene el clásico "con pinzas": es un modelo experimental, sin benchmarks públicos contundentes todavía, y la API oficial sigue sujeta a la regulación china. La ruta limpia para jugar con él es bajar los pesos y correrlo local.
