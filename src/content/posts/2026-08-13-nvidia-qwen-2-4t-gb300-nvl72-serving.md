---
title: "NVIDIA sirve Qwen3.8-2.4T en GB300 NVL72: 4K tokens/s por GPU con razonamiento configurable"
author: Carlos
pubDatetime: 2026-08-13T10:00:00Z
slug: nvidia-qwen-2-4t-gb300-nvl72-serving
featured: false
draft: false
tags:
  - IA
  - Infraestructura
description: "NVIDIA publicó un recipe técnico para servir Qwen3.8-Max (2.4T parámetros, 95B activos) en GB300 NVL72 con +4K tokens/s por GPU. Arquitectura MoE híbrida, contexto de 1M y razonamiento ajustable."
---

![Ilustración editorial de un rack de servidores GPU procesando flujos de datos masivos, estilo tech editorial azul y naranjo](../../assets/images/2026-08-13-nvidia-qwen-2-4t-gb300-nvl72-serving.jpg)

NVIDIA publicó un blog técnico detallando cómo servir **Qwen3.8-2.4T-A95B** (también conocido como Qwen3.8-Max) en su hardware GB300 NVL72. Los números son impresionantes y la arquitectura del modelo es una clase magistral de diseño para inferencia.

## El modelo: Qwen3.8-Max

Alibaba liberó los pesos abiertos de su modelo más grande hasta la fecha:
- **2.4T parámetros totales**, 95B activados por token (MoE fine-grained)
- **Contexto:** hasta 1 millón de tokens
- **Output:** hasta 128K tokens
- **Arquitectura híbrida:** full-attention + linear-attention

La clave del diseño es la combinación de **MoE fine-grained** con **atención híbrida**. En las capas full-attention, cada token atiende a todos los demás (como siempre). En las capas linear-attention, el KV cache creciente se reemplaza por un **estado recurrente acotado**. Esto mantiene compute y memoria controlados incluso cuando el contexto escala a 1M tokens.

## Los números en GB300 NVL72

El GB300 NVL72 integra **72 GPUs NVIDIA Blackwell Ultra** en una sola plataforma rack-scale, con un dominio NVLink de 130 TB/s para comunicación all-to-all.

Resultados Day-0 en FP8:
- **+4,000 tokens/s por GPU** (throughput pico)
- **+350 tokens/s por usuario** (latencia)

Esto es sin tuning adicional. NVIDIA menciona que optimizaciones futuras con **NVFP4** deberían mejorar aún más el rendimiento.

## Razonamiento configurable

El modelo incluye controles nativos de razonamiento con tres niveles:
- **low:** para procesamiento de documentos high-throughput
- **high:** para tareas generales
- **xhigh:** para razonamiento multi-step complejo

Esto permite ajustar cuánto compute gastar por request. No es lo mismo un chat simple que un workflow agentico de 50 pasos.

## Stacks de serving soportados

NVIDIA ofrece múltiples paths para deployment:
- **SGLang** (open-source)
- **vLLM** (open-source, con recipe oficial)
- **NVIDIA Dynamo** (distribuido)
- **NVIDIA NIM** (container model-free, descargas pesos y sirves)

Además, soporta fine-tuning via **NVIDIA NeMo AutoModel**, con soporte Day-0 para checkpoints de Hugging Face.

## ¿Por qué es relevante?

Este post demuestra que **los modelos open-weight de escala masiva ya son servibles en producción**. Hace un año, un modelo de 2.4T parámetros habría parecido un experimento académico. Hoy hay recipes documentados para correrlo a throughput comercial.

Para equipos considerando self-hosting de modelos frontier-grade, Qwen3.8-Max + GB300 NVL72 es probablemente la combinación open-weight más potente disponible ahora. El único "pero": necesitas un rack completo de Blackwell Ultra, lo que no es exactamente barato.
