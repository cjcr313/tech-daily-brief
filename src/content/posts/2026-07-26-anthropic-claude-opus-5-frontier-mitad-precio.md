---
title: "Anthropic lanza Claude Opus 5: inteligencia casi frontier a la mitad del precio que Fable 5"
author: Carlos
pubDatetime: 2026-07-26T18:00:00Z
slug: anthropic-claude-opus-5-frontier-mitad-precio
featured: false
draft: false
tags:
  - IA
description: "Claude Opus 5 llega a US$5/$25 por millón de tokens, con benchmarks que duplican a Opus 4.8 y rozan Fable 5. Contexto de 1M, Fast mode y cache mid-conversation."
---

![Placeholder](../../assets/images/placeholder.jpg)


Anthropic terminó la semana con un lanzamiento que cambia las cuentas de cualquier equipo que use LLMs en producción: **Claude Opus 5**, disponible desde el 24 de julio. El mensaje es simple — inteligencia casi frontier a la mitad del precio del modelo más caro de la familia.

## Precios y posicionamiento

- **Input:** US$5 por millón de tokens
- **Output:** US$25 por millón de tokens
- **Context window:** 1 millón de tokens

Esto es **exactamente el mismo precio que Opus 4.8** (el modelo que reemplaza) y **la mitad de Fable 5** ($10/$50). La movida es clara: Anthropic está diciendo "no necesitan pagar Fable 5 para tener calidad frontier en el día a día".

Opus 5 es ahora el **default en Claude Max** y el modelo más fuerte disponible en Claude Pro.

## Lo que dicen los benchmarks

Los números más relevantes:

- **Frontier-Bench v0.1** (coding agéntico en terminal): Opus 5 saca **43.3%**, más del doble que Opus 4.8 (18.7%) y por encima de Fable 5 (33.7%). Y a menor costo por tarea.
- **CursorBench 3.2:** A effort máximo, queda a **0.5% de Fable 5** pero a la mitad del costo por tarea.
- **ARC-AGI 3** (resolución de problemas novedosos): **3x el score del segundo mejor modelo**.
- **Zapier AutomationBench** (tareas business end-to-end): ~1.5x el siguiente modelo al mismo costo. Incluso en effort mínimo pasa más tareas que cualquier otro.
- **OSWorld 2.0** (computer use): supera a todos los modelos a cualquier costo dado, incluyendo Fable 5 a un tercio del precio.

Donde **no** gana: tareas de cybersecurity, donde **Mythos 5** sigue siendo el modelo gated de referencia.

## Features que importan para devs

Más allá de los benchmarks, hay un par de detalles que se agradecen:

1. **Effort toggle (low/medium/high/max):** Permite controlar cuánto "piensa" el modelo. Ideal para optimizar costo vs. complejidad por request.
2. **Fast mode:** Corre ~2.5x más rápido al doble del precio base. Para cuando necesitas velocidad sobre economía.
3. **Mid-conversation tool changes sin invalidar prompt cache:** Cambiar tools a mitad de conversación ya no rompe el cache. Suena chico, pero si estás construyendo agentes, esto es oro.
4. **Fallback routing automático en la API:** Si los clasificadores de seguridad flaggean contenido, enruta automáticamente.
5. **No data retention** para general access.

## Anécdotas de early access que valen la pena

- En un task de Frontier-Bench, le dieron un dibujo de una pieza mecánica y le pidieron reconstruirla en 3D FreeCAD — **sin darle forma de ver el dibujo directamente**. Opus 5 escribió su propio pipeline de computer vision para extraer la geometría desde los pixeles crudos y reconstruyó la pieza. Lo hizo repetidamente. Ningún modelo competidor lo logró en 5 intentos.
- Un ingeniero de una trading firm le pidió construir un market data feed para un nuevo exchange en una sola sesión. Modelos anteriores simplemente no podían completar la tarea. Opus 5 incluso se construyó su propio test harness para validar el parsing.
- En un bug real de un package manager open-source popular, Opus 5 encontró el root cause y fixeó un edge case que el patch de la comunidad había pasado por alto. El modelo competidor solo fixeó el síntoma.

## Disponibilidad

Claude Opus 5 está disponible como `claude-opus-5` en:
- Claude API nativa
- Amazon Bedrock
- Google Cloud
- Microsoft Foundry
- Herramientas como Kiro, Lovable, Cursor, Devin

## El mensaje de fondo

La guerra de modelos ya no es solo sobre quién es más inteligente. Es sobre **cuánto cuesta usar esa inteligancia todos los días**. Anthropic está posicionando a Opus 5 como el "daily driver" que roza la frontier sin cobrar como tal. Con el IPO a la vuelta de la esquina (ver nuestro post anterior sobre los números de Anthropic), el timing no es casualidad.

Para equipos que están pagando Fable 5 o GPT-5.6 Sol para todo, vale la pena evaluar si Opus 5 cubre el 90% de los casos a la mitad del costo.
