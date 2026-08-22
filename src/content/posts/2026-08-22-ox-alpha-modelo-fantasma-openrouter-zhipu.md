---
title: "Ox Alpha: el modelo fantoma de OpenRouter que tiene a la comunidad IA haciendo laburo forense"
author: Carlos
pubDatetime: 2026-08-22T16:10:00Z
slug: ox-alpha-modelo-fantasma-openrouter-zhipu
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "Un modelo stealth gratuito con contexto de 1M tokens apareció en OpenRouter y saca resultados de frontier. Las huellas dactilares del tokenizer apuntan a Zhipu y su GLM-5.3. Nadie ha confirmado nada."
---

![Ilustración de un misterioso modelo de inteligencia artificial oculto tras una silueta de toro, rodeado de huellas digitales digitales y lupa, estilo editorial tech](../../assets/images/2026-08-22-ox-alpha-modelo-fantasma-openrouter-zhipu.jpg)

La comunidad de IA anda en modo detective desde el 20 de agosto, cuando apareció en OpenRouter un modelo listado como **`stealth/ox-alpha`**, desarrollado por un **tercero anónimo**, **gratuito durante una semana de preview** y con specs de primera línea:

- Contexto de **1.048.576 tokens** y hasta 131k tokens de salida
- Entrada de **texto, imágenes y video**, con tool calling y salida JSON
- Resultados que, según los primeros testers, **superan a modelos frontier en benchmarks de SWE**

OpenRouter solo hace de pipe: el modelo lo opera un proveedor anónimo. Y ahí empezó el cacerío de teorías.

## La evidencia forense: esto huele a GLM

El análisis más serio viene de kingy.ai, que revisó la evidencia pública con escepticismo sano. Lo establecido por los testers de la comunidad:

- **Tokenizer estilo GLM**: los conteos de tokens con offsets fijos en strings multilingües y Unicode raros calzan con la familia GLM.
- **Error 1210 y contrato de razonamiento low/high/max**: idéntico al que Z.ai documenta oficialmente para **GLM-5.3** (que se lanzó el 14 de agosto, enfocado en coding, agentes de largo horizonte y ciberseguridad, a US$1,40/US$4,40 por millón de tokens).
- **Precedente jugado**: OpenRouter ya confirmó que "Pony Alpha", otro stealth anterior, era una versión temprana de GLM-5. Z.ai tiene historial de hacer esto.

El veredicto defendible según kingy.ai: **alta confianza en que es de la familia GLM-5.x, probablemente un derivado multimodal o de eficiencia de GLM-5.3. El nombre "GLM-5.3 Flash" es un rumor creíble, no un producto confirmado.**

## Lo que NO está confirmado

- Quién es el desarrollador (Z.ai no ha dicho ni pío)
- Si es un checkpoint público de GLM-5.3, un derivado, o algo posterior
- Parámetros, licencia, precio o fecha de release real
- Si los benchmarks vistosos sobreviven a una reproducción controlada

Hay un detalle que complica la teoría simple: Ox Alpha acepta **video como entrada**, mientras el anuncio público de GLM-5.3 no lo presenta como el modelo multimodal nativo (Z.ai documenta GLM-5V-Turbo para ese rol). Y el tokenizer compartido no distingue GLM-5.2 de GLM-5.3, porque comparten base.

## Por qué importa

Más allá del misterio, el fenómeno Ox Alpha confirma dos tendencias: los labs chinos (Zhipu incluida) están usando lanzamientos stealth como estrategia de marketing y benchmarking gratis, y la brecha con los labs estadounidenses se sigue cerrando — GLM-5.3, por ejemplo, casi igualó a Anthropic en pruebas de ciberdefensa según reportes recientes. La reacción de los labs gringos debería llegar la próxima semana.

**Fuentes:** [kingy.ai](https://kingy.ai/blog/ox-alpha-glm-5-3-flash-evidence/) · [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1vu620d/new_stealth_model_ox_alpha_look_like_glm_or_mimo/) · [r/singularity](https://www.reddit.com/r/singularity/comments/1vu87p5/a_stealth_model_called_oxalpha_has_been_released/)
