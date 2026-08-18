---
title: "OpenAI le mete un turbo a GPT-5.6 Sol: modo Ultrafast llega a 750 tokens/seg de la mano de Cerebras"
author: Carlos
pubDatetime: 2026-08-18T16:00:00Z
slug: openai-ultrafast-cerebras-gpt-56-sol-750-tokens
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "OpenAI anticipó Ultrafast, un tier de API que corre GPT-5.6 Sol sobre hardware de Cerebras hasta 14x más rápido: 750 tokens de salida por segundo. La velocidad se vuelve característica del producto."
---

![Ilustración editorial de un motor de cohete azul brillante acoplado a un orbe de datos, con estelas de luz que sugieren velocidad extrema, estilo tech editorial](../../assets/images/2026-08-18-openai-ultrafast-cerebras-gpt-56-sol-750-tokens.jpg)

La guerra de modelos ya no se pega solo por calidad ni por precio: ahora también por **velocidad pura**. OpenAI anunció en preview el modo **Ultrafast** para GPT-5.6 Sol, y el número llama la atención: **hasta 750 tokens de salida por segundo**, un máximo de **14x más rápido** que el modo Standard.

## La jugada: Cerebras adentro

El detalle más interesante no es el número, sino el socio: Ultrafast corre **sobre hardware de Cerebras**, la empresa de los wafer-scale processors (chips gigantes del tamaño de una oblea completa). O sea, OpenAI está yéndose fuera del stack clásico de GPUs NVIDIA para su tier de velocidad — o al menos complementándolo.

Para contexto: los modelos frontier típicos generan en el orden de 50–150 tokens/seg en modo estándar. Pasar a 750 tokens/seg cambia el tipo de workload que tiene sentido construir: agentes que iteran decenas de veces, generación de documentos largos en tiempo casi real, y experiences donde el usuario espera respuesta instantánea.

## Por qué importa (y por qué ahora)

- **La guerra de precios ya estaba al rojo**: Gemini 3.7 Flash a mitad de precio hasta diciembre, DeepSeek V4-Pro con peak/off-peak. Cuando el precio se comprime, la diferenciación se mueve a latencia y throughput.
- **Agentes = volumen**: un agente que hace 40 llamadas encadenadas sufre multiplicado cada segundo de espera. 14x de velocidad puede traducirse directo en ciclos de agente más rápidos y baratos de operar.
- **La infraestructura de inferencia se vuelve multi-vendor**: Cerebras compitiendo por correr modelos frontier es señal de que el cuello de botella de cómputo está abriendo un mercado de silicio alternativo (same vibe que Groq hace un tiempo, pero ahora con OpenAI de cliente).

## El "catch"

Por ahora es **preview**: acceso limitado y capacidad restringida. OpenAI habilitó un formulario de interés para avisar cuando expandan capacidad y acceso. No hay precios públicos definitivos para el tier tampoco, así que conviene esperar el detalle fino antes de mover workloads.

**Fuentes:** OpenAI (openai.com/form/ultrafast), AI-Weekly issue 230, BeingGuru.
