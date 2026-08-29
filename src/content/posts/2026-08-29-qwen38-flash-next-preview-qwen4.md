---
title: "Alibaba libera Qwen3.8-Flash-Next: el ensayo general de la arquitectura de Qwen4"
author: Carlos
pubDatetime: 2026-08-29T16:06:00Z
slug: qwen38-flash-next-preview-qwen4
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "MoE multimodal de 125B open weight con 6B activos por token, contexto nativo de 262K y 1/9 de los recursos de entrenamiento: la antesala arquitectónica de Qwen4."
---

![Ilustración editorial de una flor de loto geométrica formada por engranajes y circuitos que se abre en capas luminosas, tonos violeta y teal, estilo ilustración tech editorial](../../assets/images/2026-08-29-qwen38-flash-next-preview-qwen4.jpg)

Alibaba lanzó esta semana **Qwen3.8-Flash-Next**, y el nombre es casi una declaración de intenciones: es un modelo open weight que funciona como **"early preview de la arquitectura que usará Qwen4"**. La misma jugada que hicieron con Qwen3-Next antes de la familia 3.5: liberar los cambios estructurales antes para que la comunidad les meta mano antes del release mayor.

## Los números

- **125B de parámetros** principales en MoE multimodal, más 51B en N-gram embeddings, con solo **6B activos por token**.
- Contexto nativo de **262.144 tokens**, extensible a **1 millón con YaRN**.
- Entrenado con **~1/9 de los recursos** de Qwen3.7-Plus, un modelo tres veces más grande. Alibaba promete costo de entrenamiento e inferencia significativamente menor.

En benchmarks auto-reportados le va bien: **62,5 en SWE-bench Pro** (coding agéntico), superando a Qwen3.8-27B (61,7), DeepSeek-V4-Flash (56,0) y Claude-Opus-4.6 Max (53,4). También mide en CoWorkBench (tareas de oficina de largo plazo), Toolathlon Verified, MathVision, AndroidWorld y ERQA (inteligencia encarnada). Como siempre: benchmarks del propio laboratorio, a tomar con sal de mar.

## Qué cambia en la arquitectura

El upgrade es sistemático en cuatro ejes, que es lo interesante porque esto es literalmente el prototipo de Qwen4:

- **Atención**: híbrido entre Gated DeltaNet (que comprime información histórica) y **Qwen Sparse Attention**, un diseño nuevo que usa un indexer comprimido liviano para seleccionar el contexto relevante y bajar el costo de atención en secuencias largas.
- **Residual**: mecanismo **Gated Residual** que amplía las rutas de datos entre capas.
- **Embeddings**: los 51B adicionales en N-gram embeddings mejoran capacidad sin tocar el costo por token.
- **Optimización**: mejoras de estabilidad de entrenamiento y eficiencia computacional.

## Flash-Next vs Flash

Nomenclatura confusa pero simple: **Flash-Next** es la versión research-frontier open weight, disponible en Hugging Face y ModelScope. **Flash** es la versión productiva, servida vía API en QwenCloud con 1 millón de tokens de contexto por defecto y herramientas integradas.

## Por qué importa

Más allá del benchmark, el patrón es el punto: Alibaba está **publicando abiertamente los planos estructurales** de su próxima generación para que desarrolladores road-testeen los componentes antes de que exista el modelo completo. Si corres inferencia propia (vLLM, SGLang), conviene ir mirando el soporte de QSA y GDN ahora, porque todo lo que pruebes te sirve para Qwen4. Y para los presupuestos: un MoE de 6B activos con este rendimiento es una mala noticia para los precios de la competencia.

Fuentes: [The New Stack](https://thenewstack.io/qwen38-flash-previews-qwen4/), blog de releases de Qwen (28-08-2026).
