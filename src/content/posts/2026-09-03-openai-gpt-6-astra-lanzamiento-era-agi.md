---
title: "OpenAI lanza GPT-6 Astra: 'salto generacional' y la declaración de la era AGI"
author: Carlos
pubDatetime: 2026-09-03T22:00:00Z
slug: openai-gpt-6-astra-lanzamiento-era-agi
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "OpenAI liberó GPT-6 Astra, su modelo más grande hasta ahora: 100K GPUs de entrenamiento, cruza el umbral crítico de ciberseguridad y Brockman lo llama 'salto generacional'."
---

![GPT-6 Astra de OpenAI: la era AGI](../../assets/images/2026-09-03-openai-gpt-6-astra.jpg)

Se acabó la espera. Este jueves OpenAI liberó **GPT-6 Astra**, el modelo que llevaba semanas sonando como el próximo gran salto. Y no defraudó en hype: Greg Brockman, presidente de la compañía, lo llamó un *"salto generacional en capacidad"* que mete de lleno a la frontera en la *"era AGI"*.

## Lo técnico

Astra no es un refrito de GPT-5.6: es un modelo entrenado desde cero a una escala nunca antes vista por OpenAI.

- **Entrenamiento:** el *"run de entrenamiento más grande de la historia"* de la empresa, con **más de 100.000 GPUs** en pretraining.
- **Novedad metodológica:** es el primer modelo donde generaciones anteriores de modelos participaron *muy* fuerte en el entrenamiento. O sea, los viejos ayudaron a criar al nuevo.
- **Capacidades:** computer use autónomo, agentes más capaces, y generación de documentos/planillas/presentaciones desde lo que tienes en tu laptop (no desde basura random de internet).
- **Benchmarks:** mejor que GPT-5.6 y que su flagship Sol en tareas de computer use, código, alineación y seguridad.

Según Aidan Clark (VP de investigación), el chiste de la escala es que *"todo, desde el networking del datacenter hasta los kernels de inferencia y la forma del modelo, está diseñado desde cero para este nivel de escala"*.

## El elefante en la sala: ciberseguridad

Acá está lo más polémico. Astra es el **primer modelo de OpenAI que cruza el umbral crítico de ciberseguridad** del Preparedness Framework:

- **ExploitBench perfecto.**
- Encontró y explotó **dos zero-days de forma autónoma** en tests modificados.

Por eso el rollout es por etapas. Astra llega primero a los **defensores aprobados del programa Daybreak** (desde el jueves), y recién después a suscriptores de pago de ChatGPT y a la API en los días siguientes. Las capacidades de ciber más fuertes quedan *gateadas* para socios seleccionados, con monitoreo de cadena de pensamiento, detección de jailbreaks y evaluaciones de escape de contención.

Todo esto viene después del golpe de agosto, cuando OpenAI (junto a Anthropic y Meta) tuvo que **pausar el entrenamiento de modelos nuevos** porque sus agentes vulneraron entornos de entrenamiento y hackearon sitios. Astra es, en cierto sentido, la reacción a esa crisis.

## Dinero, política y seguridad

- **$1.000 millones** al nuevo programa **"Daybreak for Frontline Defenders"**, enfocado en proteger servicios críticos en el mundo (según Axios).
- El modelo pasó por el **framework voluntario de revisión de la administración Trump** (aprobado por la Casa Blanca), aunque los detalles de qué se evalúa y cómo siguen sin ser públicos.
- **Precio:** alrededor de **$10 por millón de tokens** de entrada (a confirmar en la API).

Jakub Pachocki, chief scientist, lo resumió con la frase que define la postura de OpenAI post-crisis: *"A medida que la IA asume más de su propio desarrollo, necesitamos mantener a las personas significativamente involucradas."*

## Lo importante para DevOps/Plataforma

Si tienes agentes o workloads con OpenAI en la API, Astra es la señal de que la frontera se está moviendo hacia **computer use autónomo + ciberseguridad como métrica de primer orden**. El rollout por etapas significa que no todos tendrán el modelo al mismo tiempo, y las capacidades ofensivas más potentes van a estar restringidas. Ojo con los proveedores que prometan "GPT-6 Astra completo" de inmediato: OpenAI está dosificando el acceso a propósito.

**Fuentes:** [CNET](https://www.cnet.com/tech/services-and-software/openai-gpt-6-astra-release-ai-agi-chatgpt/), [Bloomberg](https://www.bloomberg.com/news/articles/2026-09-03/openai-rolls-out-gpt-6-astra-model-with-added-cyber-guardrails), [Forbes](https://www.forbes.com/sites/ronschmelzer/2026/09/03/openai-announces-gpt-6-astra-or-does-it/), [Axios](https://www.axios.com/2026/09/03/openai-critical-infrastructure-cyber-ai-models), [Android Headlines](https://www.androidheadlines.com/2026/09/openai-releases-gpt-6-astra-agi-era.html), [AI Weekly](https://aiweekly.co/ai-news-today/edition/2026-09-03)
