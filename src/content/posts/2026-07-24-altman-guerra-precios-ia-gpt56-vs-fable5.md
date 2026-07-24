---
title: "Altman desafía a Anthropic: GPT-5.6 Sol a un cuarto del precio de Fable 5"
author: Carlos
pubDatetime: 2026-07-24T04:03:00Z
slug: altman-guerra-precios-ia-gpt56-vs-fable5
featured: false
draft: false
tags:
  - IA
description: "Sam Altman dijo estar dispuesto a ofrecer GPT-5.6 Sol a 1/4 del precio de Claude Fable 5. Mientras los modelos chinos bajan los costos, la guerra de precios se acelera."
---

La guerra de precios en IA entró en otra fase. Sam Altman dijo públicamente que OpenAI estaría dispuesto a ofrecer **GPT-5.6 Sol a un cuarto del precio de Claude Fable 5** de Anthropic. La frase suena contundente, pero hay un detalle: **la tarifa publicada de Sol sigue siendo $5/$30 por millón de tokens** (input/output). El descuento prometido aún no se materializa en la rate card.

## Lo que dijo Altman

> "GPT-5.6 Sol is half the price and ~twice as token efficient as Fable in many cases for accomplishing the same task. Happy to deliver at one-quarter of the price."

La cuenta más o menos cuadra en benchmarks: en el **Artificial Analysis Intelligence Index**, Sol cuesta aproximadamente la mitad que Fable 5 para tareas similares. En **Agents' Last Exam** (medium reasoning), baja a un cuarto. Pero los benchmarks no son tu workload de producción.

## El contexto que importa

Mientras Altman lanza el desafío, los modelos chinos siguen comprimiendo precios:

- **GLM 5.2** (Zhipu AI): $1.40 input / $4.40 output por millón de tokens. Open-weight.
- **DeepSeek V4-Pro**: $0.44 input / $0.87 output. Sí, leíste bien.
- **Kimi K3** (Moonshot AI): 2.8T parámetros, a la mitad del precio de Sol.

Fable 5 de Anthropic cuesta **$10 input / $50 output**. Aunque su performance está un punto arriba en benchmarks, la diferencia ya no justifica el premium para muchos use cases.

## La trampa del "precio por token"

Como bien dijo Aravind Srinivas (CEO de Perplexity): *"The model alone is no longer the product"*. Un token más barato no sirve de nada si:

- El modelo necesita más intentos para completar la tarea
- El contexto exige prompts más largos
- La integración con tools falla y hay reintentos
- Los costos de infraestructura (orquestación, monitoreo, seguridad) se comen el ahorro

El **TCO real** (costo total por tarea completada) es lo que está decidiendo el mercado, no el precio por millón de tokens.

## ¿Guerra real o posture?

Altman está mandando dos señales: (1) a clientes enterprise diciendo "no se vayan a los chinos, podemos bajar los precios", y (2) a inversores mostrando que OpenAI puede competir en precio sin destruir márgenes... eventualmente.

El problema es que **OpenAI no ha publicado la tarifa reducida**. Mientras tanto, los desarrolladores ya están testeando GLM 5.2 y Kimi K3 en producción. La ventana para que el desafío de Altman se traduzca en algo concreto se está cerrando.

---

*Fuentes: WinBuzzer, Artificial Analysis, CNBC, OpenAI*
