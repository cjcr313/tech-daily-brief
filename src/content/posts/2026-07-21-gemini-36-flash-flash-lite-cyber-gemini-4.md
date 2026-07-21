---
title: "Google lanza Gemini 3.6 Flash, 3.5 Flash-Lite y 3.5 Flash Cyber — y ya calienta Gemini 4"
author: Carlos
pubDatetime: 2026-07-21T22:15:00Z
slug: gemini-36-flash-flash-lite-cyber-gemini-4
featured: false
draft: false
tags:
  - IA
  - Modelos
description: "Google DeepMind sacó tres modelos nuevos hoy: Flash más eficiente, Flash-Lite más barato, y Flash Cyber para seguridad. Además, ya empezaron el pre-entrenamiento de Gemini 4."
---

Google DeepMind tuvo un lanzamiento cargado hoy. Tres modelos nuevos de la familia Gemini Flash, enfocados en eficiencia, costo y seguridad. Y de yapa, confirmaron que Gemini 4 ya está en pre-entrenamiento.

## Gemini 3.6 Flash — el workhorse que gastó dieta

La actualización del Flash que todos usan. Las mejoras clave:

- **17% menos tokens de output** comparado con 3.5 Flash (según Artificial Analysis Index)
- Menos pasos de reasoning y tool calls para tareas multi-step
- **Precio:** $1.50/1M input, $7.50/1M output (vs $9/1M output del anterior)
- Knowledge cutoff adelantado a **marzo 2026** (era enero 2025)

En código, los números hablan solos: DeepSWE subió de 37% a **49%**, y MLE Bench de 49.7% a **63.9%**. En computer use (OSWorld-Verified): de 78.4% a **83%**.

## Gemini 3.5 Flash-Lite — para los que disparan a volumen

Pensado para alto throughput y baja latencia: search agentico, procesamiento de documentos. Precios agresivos:

- **$0.30/1M input, $2.50/1M output**
- Terminal-Bench 2.1: 54% (vs 31% del 3.1 Flash-Lite anterior)
- Supera al 3 Flash en SWE-Bench Pro (54.2% vs 49.6%) y OSWorld (74% vs 65.1%)

Básicamente ofrece calidad de modelo anterior-generation-full a precio de gallina muerta.

## Gemini 3.5 Flash Cyber — finding vulnerabilities at scale

Modelo especializado en **detectar y parchear vulnerabilidades de código**. Fine-tuneado sobre Flash para costo eficiente. La herramienta CodeMender de Google usa múltiples agentes con este modelo.

Eso sí: acceso inicial solo para **gobiernos y partners de confianza** en un programa piloto de acceso limitado. La idea es dar ventaja a los defensores antes de que los attackers abusen del modelo.

## ¿Y Gemini 3.5 Pro?

Ahí está el elefante en la habitación. Pro sigue **sin lanzarse**. Bloomberg reportó la semana pasada que Google enfrenta retrasos internos porque el modelo no cumple sus metas de performance. Logan Kilpatrick confirmó que están testeando con partners y esperan "land soon".

Mientras tanto, la competencia no espera: OpenAI ya tiene GPT-5.6 Sol en GA, Anthropic lanzó Fable 5 y Claude Sonnet 5. Google se está quedando atrás en el segmento flagship.

## Gemini 4 — ya calentando motores

La noticia que más ruido hizo: DeepMind confirmó que **empezaron su pre-entrenamiento más ambicioso hasta la fecha** para Gemini 4. Sin timeline, pero saber que ya está en marcha es señal de que la guerra de modelos no va a bajar.

**Fuentes:** [9to5Google](https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/), [TechCrunch](https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/)
