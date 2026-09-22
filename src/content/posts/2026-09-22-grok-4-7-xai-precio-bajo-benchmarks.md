---
title: "xAI lanza Grok 4.7 a precio de ganga, pero los benchmarks revelan una brecha con Claude y GPT-6"
author: Carlos
pubDatetime: 2026-09-22T09:00:00Z
slug: grok-4-7-xai-precio-bajo-benchmarks
featured: false
draft: false
tags:
  - IA
  - Modelos
description: "Grok 4.7 llegó el 21 de septiembre con $2 por millón de tokens de entrada, pero queda a mitad de tabla en el índice de Artificial Analysis y muy lejos en coding agéntico."
---

![Comparación de benchmarks de modelos de IA con barras de diferentes alturas y un ícono de precio](../../assets/images/2026-09-22-grok-4-7-xai-precio-bajo-benchmarks.jpg)

xAI metió su nuevo modelo frontera el 21 de septiembre y apostó por una carta distinta a la de siempre: **precio**. Grok 4.7 sale a **$2 por millón de tokens de entrada y $6 por millón de salida**, tarifas que se parecen más a los modelos chinos que a los frontera occidentales. Y hay una razón para eso.

Según la propia empresa, Grok 4.7 es su modelo más capaz para coding y trabajo de conocimiento: base más grande, más reinforcement learning y mejor verificación de su propia salida. Además trae un stack de salvaguardas nuevo que, según xAI, lo convierte en el modelo más resistente a jailbreaks que han probado.

## Los benchmarks no acompañan del todo

En el **Índice de Inteligencia de Artificial Analysis (v4.3.2)**, que combina diez benchmarks, Grok 4.7 saca **46 puntos** y queda en la mitad de la tabla. Arriba, empatados en **53**, están **Claude Fable 5.1** y **GPT-6**.

La brecha se agranda en coding agéntico. En **Terminal-Bench 4.0**, Grok 4.7 apenas llega al **26%**, contra el **60% de GPT-6 Astra** y el **55% de Claude Fable 5.1**. Lo más doloroso: hasta el más barato **DeepSeek V4.1 Flash** lo pasa por un pelo, con **27%**.

En la otra cara, xAI publica sus propios números de mejora: Terminal-Bench 4.0 sube de 20.3% (en 4.6) a 38% según su medición interna, y el benchmark legal de Harvey sube de 15.8% a 19.6%.

## Dónde sí brilla

El punto fuerte del lanzamiento está en la mezcla **costo/seguridad**. Grok 4.7 lidera el benchmark de bioseguridad de LatchBio con un **62.4%**, balanceando utilidad en tareas benignas con rechazo seguro en dominios peligrosos como ciberseguridad y biología.

El modelo ya está disponible vía la **API de Grok**, **Cursor** y **Grok Build**. Y de regalo, **Grok 4.6 llegó a Amazon Bedrock** el mismo fin de semana.

La lectura es clara: xAI no está peleando por ser el número uno del benchmark, está peleando por ser el "bueno, bonito y barato" de los agentes. La pregunta es si ese discurso aguanta cuando GPT-6 Astra te saca más del doble en coding agéntico.
