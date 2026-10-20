---
title: "DeepSeek abre DeepInfer, su stack de inferencia: la guerra de precios de la IA se le declara a la factura"
author: Carlos
pubDatetime: 2026-10-20T21:05:00Z
slug: deepseek-deepinfer-inferencia-open-source
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "DeepSeek liberó en GitHub DeepInfer, su stack interno de inferencia (por ahora para V4.1-Flash), con decodificación especulativa para bajar costos de cómputo y energía. Con V4.1-Flash a $0.035 por millón de tokens de entrada vs $10 de GPT-6 Astra, la presión sobre OpenAI y Anthropic es directa."
---

![Ilustración editorial tech de una gran turbina de inferencia futurista hecha de luz azul que procesa ríos de tokens brillantes, con etiquetas de precio digitáinéndose y disolviéndose a su paso, siluetas de ingenieros observando de espaldas, paleta azul profundo con acentos naranjas y rojos, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/deepseek-deepinfer-inferencia-open-source.jpg)

La era del "token-maxxing" quedó oficialmente enterrada. Cuando la factura de la IA empezó a doler — la consultora Accenture, que a inicios de año amenazaba con frenar promociones a quien no usara IA, ahora le puso tope a sus empleados de **US$29 al mes en gasto de Claude**, según 404 Media — el mercado cambió de pregunta: ya no es "¿cuánta IA puedes meter?" sino "¿a cuánto la metes?".

Y ahí aparece DeepSeek, que hoy le metió más presión al asunto: liberó **DeepInfer**, su stack de inferencia interno, **open source en GitHub** (github.com/deepseek-ai/DeepInfer).

## Qué es DeepInfer

- Es el **stack de producción** que DeepSeek usa para servir sus propios modelos. "Lo compartimos para ayudar a la comunidad a bajar costos de cómputo, reducir uso de energía y hacer la IA más asequible", dijo la empresa.
- Por ahora corre solo **V4.1-Flash**, la versión rápida y barata de su modelo insignia. Los modelos futuros se irán sumando al framework.
- Usa técnicas como la **decodificación especulativa** para reducir el costo por salida. Y ojo con el timing: la inferencia — el proceso de generar salidas, no el de entrenar — es la parte más cara del ciclo de vida de la IA. McKinsey estima que para fines de década la mayoría del cómputo de los data centers irá a inferencia, no a entrenamiento.

## Los números que duelen

La comparación de precios vía OpenRouter es de esas que hacen mover la silla:

- **DeepSeek V4.1-Flash**: $0.035 por millón de tokens de entrada / $0.12 por millón de salida.
- **OpenAI GPT-6 Astra**: $10 / $50 por lo mismo.

No es un gap — es un abismo de dos órdenes de magnitud. Y con agentic AI multiplicando las llamadas por workflow (flotas de subagentes incluidas), ese abismo se paga mensualmente.

## El elefante geopolítico

Todo esto pasa mientras el gobierno de Trump **prohibió el lunes el uso de DeepSeek en agencias federales civiles** de EE.UU. (Estado y similares), por vía administrativa. Eso sí: la regla no prohíbe que empresas privadas lo usen — y mientras la regulación alcanza para el discurso, la boleta manda: los modelos open source chinos cada vez más baratos de correr son la alternativa más concreta para quien quiere frontier-ish sin hipotecar el presupuesto.

**La lectura**: la ventaja competitiva se movió del modelo al stack. Si el modelo es commodity, la diferencia la hace quién lo sirve más barato — y DeepSeek acaba de regalarle su receta al mundo. Tu turno, OpenAI y Anthropic.

Fuentes: Gizmodo, 404 Media, OpenRouter, McKinsey.
