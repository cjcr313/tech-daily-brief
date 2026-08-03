---
title: "Alibaba lanza Qwen3.8-Max: 2.4 billones de parámetros y la apuesta más agresiva de China en IA"
author: Carlos
pubDatetime: 2026-08-03T16:00:00Z
slug: alibaba-qwen38-max-24-billones-parametros
featured: false
draft: false
tags:
  - IA
description: "Alibaba sacó Qwen3.8-Max con 2.4 billones de parámetros MoE, contexto de 1M y pesos abiertos la próxima semana. Más grande, más barato y más multimodal que nunca."
---

![Alibaba Qwen3.8-Max 2.4 billones de parámetros](../../assets/images/2026-08-03-alibaba-qwen38-max-24-billones-parametros.jpg)

Alibaba no se anda con chiquitas. Mientras DeepSeek le pegaba al costo con V4 Flash, la gente de Qwen salió con todo: **Qwen3.8-Max**, un modelo Mixture-of-Experts de **2.4 billones (trillones en inglés) de parámetros**, con contexto de **1 millón de tokens** y capacidades multimodales (texto, imagen y video como input).

## Lo técnico

Qwen3.8-Max es un MoE (Mixture of Experts), lo que significa que no activa todos sus parámetros en cada inferencia — pero aún así es un bicho masivo. Los detalles clave:

- **Contexto:** 1M de tokens (991K input, 131K output)
- **Pricing:** $2.00 por 1M tokens de entrada, $6.00 por 1M de salida
- **Cache implícita:** $0.25 por 1M tokens (8x más barato que input fresco)
- **Rate limits:** 2M tokens/min, 15K requests/min
- **Tools nativas:** code_interpreter, web_search, web_extractor, t2i_search, i2i_search
- **Compatible con API de OpenAI y DashScope**

También lanzaron **Qwen3.8-27B**, un checkpoint más chico que es el realistic para on-premise (el de 2.4T pide datacenter multi-nodo).

## ¿Y en benchmarks?

El modelo es fuerte, pero con matices:

- **Terminal-Bench 2.1:** 86.6 (le pega a Claude Opus 4.8 y Fable 5 que tienen 84.6, pero GPT-5.6 Sol sigue arriba con 88.8)
- **GPQA Diamond:** 92.6
- **PaperBench:** 93.0 (lidera)
- **FrontierSWE:** 73.5 (detrás de Fable 5 con 88.8)
- **OSWorld-Verified:** 86.1 (multimodal top)

El salto generacional vs Qwen3.7 es grande: DeepSWE 1.1 saltó de 21.6 a 56.6, FrontierSWE de 40.7 a 73.5. Pero ojo: algunos benchmarks comparan contra Qwen3.7-Plus (no Max), lo que infla la diferencia.

## Contexto: la ofensiva china

Esto viene en la misma semana que DeepSeek V4 Flash dejó el mercado temblando con precios 100x más baratos que Anthropic. El mensaje de China es claro:

- **Alibaba** va por **capacidad**: el modelo más grande y multimodal posible
- **DeepSeek** va por **costo**: mismo rendimiento al 1% del precio
- **Moonshot (Kimi K3)** ya había marcado precedent con 1M de contexto

Las empresas chinas están compitiendo sin seguir el mismo playbook económico de OpenAI/Anthropic/Google. Y mientras EE.UU. discute si regular los pesos abiertos, Alibaba anuncia que los de Qwen3.8-Max salen **la próxima semana**.

## Lo importante para DevOps/Plataforma

Si usas modelos vía API, Qwen3.8-Max es drop-in compatible con OpenAI. Cambias la base URL y el model ID y listo. Si quieres on-premise, el modelo de 27B es el que cabe en hardware razonable. El de 2.4T es para quienes tienen datacenter de verdad.

**Fuentes:** [MarkTechPost](https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/), [TechNode](https://technode.com/2026/08/03/alibaba-launches-qwen3-8-with-2-4-trillion-parameters/), [CNBC](https://www.cnbc.com/2026/08/03/alibaba-ai-model-qwen-rival-anthropic.html), [CryptoBriefing](https://cryptobriefing.com/alibaba-unveils-qwen38-max-ai-model-with-24t-parameters-2/)
