---
title: "NVIDIA abre Nemotron-Labs-Sigma: 14 checkpoints de modelos de lenguaje por difusión continua (3B y 8B)"
author: Carlos
pubDatetime: 2026-11-21T13:15:00Z
slug: nvidia-nemotron-labs-sigma-difusion-abierta
featured: false
draft: false
tags:
  - IA
  - Open Source
  - Infraestructura
description: "NVIDIA publicó 14 checkpoints abiertos (3B/8B) de LLMs por difusión continua: generan bloques de 64 tokens en paralelo, decodifican hasta 3.46x más rápido y la licencia permite uso comercial. Ejecutable con vLLM o SGLang en tu propia GPU."
---

![NVIDIA abre Nemotron-Labs-Sigma: 14 checkpoints de modelos de lenguaje por difusión continua (3B y 8B)](../../assets/images/2026-11-21-nvidia-nemotron-labs-sigma-difusion-abierta.webp)

NVIDIA soltó **Nemotron-Labs-Sigma**, una familia abierta de **modelos de lenguaje por difusión continua**. Nada de autoregresión token a token: acá el modelo **des-ruidiza representaciones en un espacio de embedding de 16 dimensiones y genera texto en bloques de 64 tokens**, con varios pasos de denoising por bloque antes de emitirlo.

## Qué trae el release

- **14 checkpoints** en dos tamaños (3B y 8B): base, instruct, variantes destiladas de pocos pasos (NFE 2, 4, 8 y 16) y una variante self-speculative por tamaño
- Pesos en Hugging Face bajo **NVIDIA Nemotron Open Model License, con uso comercial permitido**
- Entrenamiento curioso: warm-start desde un checkpoint autoregresivo (~1T tokens) + ~0.3T tokens de entrenamiento en difusión

## Números (auto-reportados, leer con pinza)

- Sigma-8B base promedia **71.16** en el suite de 6 tareas de NVIDIA, vs 68.91 de Qwen3-8B autoregresivo, 58.74 de Dream-7B y 41.78 de LLaDA-8B
- El instruct 8B llega a **91.96 en GSM8K**; el punto flaco es AIME25 (17.00): las mates de competencia siguen siendo su talón de Aquiles
- **120-140 tokens/seg** en una sola H100 en bfloat16
- La variante self-speculative 8B decodifica **hasta 3.46x más rápido** que el promedio autoregresivo en GB200 con SGLang (pico 4.20x)
- Contexto corto: 4.096 tokens (8.192 en el instruct 8B)

## Por qué importa

Los LLMs por difusión generan **bloques completos en paralelo** en vez de ir de izquierda a derecha: menos round-trips de red, mejor control del presupuesto de latencia. Para stacks de inferencia self-hosted eso es carne fresca. Y como NVIDIA no ofrece API de primera parte para Sigma, todo corre **en tu propia infra** vía vLLM, SGLang o Docker Model Runner. Si ya tienes fleet de GPUs, cero dependencia de endpoints externos.

Contexto extra: según The Decoder, NVIDIA está apostando al menos US$500M por los modelos de difusión de Inception para reforzar justamente su línea Nemotron open source. La apuesta por difusión no es un experimento de fin de semana.

**Fuentes:** [MarkTechPost](https://www.marktechpost.com/2026/11/20/nvidia-nemotron-labs-sigma-continuous-diffusion-language-model/) · [Hugging Face / dev.to](https://dev.to/delimitter/nvidia-releases-nemotron-labs-sigma-an-open-continuous-diffusion-language-model-family-504i) · [The Decoder](https://the-decoder.com/nvidia-bets-at-least-500-million-on-inceptions-diffusion-models-to-strengthen-its-open-source-nemotron-lineup/)
