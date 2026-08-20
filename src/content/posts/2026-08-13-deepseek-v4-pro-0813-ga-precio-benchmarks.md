---
title: "DeepSeek V4-Pro-0813 llega GA: baratísimo, a 1M de contexto y pisándole los talones a Anthropic"
author: Carlos
pubDatetime: 2026-08-13T10:00:00Z
slug: deepseek-v4-pro-0813-ga-precio-benchmarks
featured: false
draft: false
tags:
  - IA
description: "DeepSeek lanzó V4-Pro-0813 con 1.6T parámetros, contexto de 1M tokens y precios que son la fracción de la competencia. Ya es el segundo mayor consumidor de tokens del mundo, solo detrás de Anthropic."
---

![Ilustración editorial de un cohete rojo despegando con elementos de datos y tokens flotando alrededor, estilo tech editorial](../../assets/images/placeholder.jpg)

DeepSeek no para. El lab chino acaba de mandar V4-Pro-0813 a producción general (GA) y los números son una locura.

## El modelo

V4-Pro-0813 es un **MoE de 1.6T de parámetros totales** con **49B activados por token**. Eso significa que cada token que genera solo "enciende" 49B de los 1.6T, lo que lo hace absurdamente eficiente para su tamaño.

Especificaciones clave:
- **Contexto:** 1,048,576 tokens (1M)
- **Output máximo:** 384,000 tokens
- **Razonamiento configurable:** low / high / xhigh (ajustás cuánto "piensa" por request)

## Pricing: la guerra de precios se pone seria

DeepSeek precios:
- **Input (cache miss):** $0.435 / 1M tokens
- **Input (cache hit):** $0.003625 / 1M tokens (sí, casi gratis)
- **Output:** $0.87 / 1M tokens

Para ponerlo en perspectiva: el blended cost de V4-Pro es **~46 veces más barato que Fable 5** según kingy.ai. Y recordemos que OpenAI hace pocos días cortó precios de GPT-5.6 Luna hasta 80% ($0.20/M input, $1.20/M output). DeepSeek respondió con V4-Flash-0731 a **$0.14/M input**.

La guerra de precios de tokens está al rojo vivo.

## Benchmarks: ¿qué tan bueno es?

Los resultados preliminares que están circulando en WeChat muestran que V4-Pro-0813:
- **Supera a Opus 4.8** en Terminal Bench 2.1, Cybergym, DeepSWE y AutomationBench
- **Subió 15.8%** en Terminal Bench comparado con el Preview de abril
- Ofrece rendimiento nivel Fable 5 a una fracción del costo

Ojo: los benchmarks de agentes son **vendor-reported** por ahora. Hay que esperar confirmación independiente.

## El dato que más impresiona

DeepSeek fue **el segundo mayor consumidor de tokens del mundo en julio**, solo detrás de Anthropic. Y eso fue ANTES de que salieran V4-Flash-0731 y V4-Pro-0813. Si la tendencia continúa, en agosto podrían ser #1.

Todo esto con apenas **~20,000 GPUs H100** en su infraestructura. Una fracción de lo que tienen OpenAI, Google o Anthropic.

## ¿Por qué importa para DevOps/Infra?

El model de pricing de DeepSeek cambia el cálculo de **costo por inferencia** para cualquier equipo que esté corriendo LLMs en producción. Si tu workload hace sentido con un modelo open-weight de este nivel, los números hacen que self-hosting o usar la API de DeepSeek sean dramáticamente más baratos que las alternativas cerradas.

La pregunta es si la infraestructura de DeepSeek va a aguantar la demanda. Ya hay reportes de inference speeds que bajan significativamente en horas peak. Con V4-Pro en GA, ese problema probablemente se agrave antes de mejorar.

### Update: 13 de agosto, 2026 — DeepSeek sube precios de V4 hasta 1.100%

Pocas horas después del lanzamiento, DeepSeek anunció que **subirá los precios de API de V4-Pro y V4-Flash desde 50% hasta 1.100%** dependiendo del modelo, tipo de token y horario. Las nuevas tarifas entran en vigor el **17 de agosto a las 16:00 UTC**.

Lo más notable: introducen **pricing peak y off-peak**, marcando un cambio fundamental en la estrategia de costos agresivamente bajos que caracterizó a DeepSeek.

¿Por qué importa? La demanda de inferencia no es uniforme — hay horas donde el tráfico explota y otras donde está tranquilo. El pricing variable incentiva a mover workloads no críticos a horarios más baratos, ayudando a DeepSeek a gestionar la carga de infraestructura.

Pero para equipos corriendo grandes volúmenes de agentes en horario laboral, un alza de 1.100% puede **cambiar dramáticamente la economía** que hacía a DeepSeek atractivo en primer lugar. La pregunta que quedó flotando en el lanzamiento —¿aguantará la infraestructura?— acaba de conseguir su respuesta parcial: sí, pero vas a pagar más por ello.

### Update: 15 de agosto, 2026 — Llega la tarifa oficial: peak/off-peak desde el 16 de agosto a las 16:00 UTC

DeepSeek publicó la **rate card completa** del alza anunciada, y confirma que el billing peak/off-peak arranca el **16 de agosto a las 16:00 UTC**. Los números exactos (USD por 1M tokens):

| Modelo | Período | Input | Cache hit | Output | Alza vs. actual |
|--------|---------|-------|-----------|--------|-----------------|
| V4-Flash-0731 | Actual | $0.14 | $0.0028 | $0.28 | — |
| V4-Flash-0731 | Off-peak | $0.22 | $0.0070 | $0.66 | +57% / +136% |
| V4-Flash-0731 | **Peak** | **$0.44** | $0.014 | **$1.32** | +214% / +371% |
| V4-Pro-0813 | Actual | $0.435 | $0.0036 | $0.87 | — |
| V4-Pro-0813 | Off-peak | $0.66 | $0.022 | $1.98 | +52% / +128% |
| V4-Pro-0813 | **Peak** | **$1.32** | $0.044 | **$3.96** | +203% / +355% |

Las **ventanas peak** son 01:00–04:00 y 06:00–10:00 UTC; el resto es off-peak. Dato relevante para Chile: esas horas peak cubren buena parte de la tarde-noche local (21:00–00:00 y 02:00–06:00 CLT), así que los workloads en horario laboral chileno corren mayormente en off-peak. Menos mal.

El detalle fino: el off-peak es la mitad del peak, pero **sigue estando por encima del precio actual en todas las categorías**. O sea, no hay escenario donde pagues menos que antes. Aun así, V4-Pro peak a $1.32/$3.96 sigue siendo varias veces más barato que Opus 5 ($5/$25) o Fable 5 — la frase "baratísimo" del título sobrevive, pero con menos margen.
