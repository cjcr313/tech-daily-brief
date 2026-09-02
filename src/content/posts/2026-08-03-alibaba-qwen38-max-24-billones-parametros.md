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

---

### Update: 4 de agosto, 2026 — Qwen3.8-Max programó solo durante 16 días seguidos y el audit trail es público

El equipo de Qwen publicó tres case studies demostrando capacidades de **codificación autónoma de larga duración** con Qwen3.8-Max, y a diferencia de los típicos demos de vendor, **el repositorio está público en GitHub** (`qwen-code-dev-bot/oh-my-cli`).

**Caso 1 — CLI autónomo (16 días):** El modelo tomó requests de usuarios, los convirtió en GitHub issues, se los auto-asignó, escribió código, corrió tests y mejoró iterativamente. Resultado: **265 commits, 127 pull requests y 151 issues** al 30 de julio, **cero intervención humana**.

**Caso 2 — Reproducción de paper científico (~5 días, 125 hrs de compute):** Le entregaron el paper "Unified Data Selection for LLM Reasoning" sin código base. El modelo escribió **7,600 líneas de código**, corrió **33 jobs de entrenamiento en GPU**, reprodujo los 6 resultados principales del paper y luego **mejoró el método original** superándolo por 2.7 puntos en el benchmark AIME24 de matemáticas. Probó 18 ideas propias en 4 rondas.

**Caso 3 — Diseño de chips:** Le pidieron diseñar un bloque criptográfico. Empezó con un diseño funcional pero inflado de **8,298 puertas lógicas** y lo redujo a **678 puertas** en ~500 iteraciones. Tras el pase de layout con OpenROAD, el área del chip bajó de 106×106 a **46×46 micrómetros** — una reducción del **81%**.

**Caso 4 — Competiciona contra humanos:** En el challenge WWW2025 Multimodal Dialogue Intent Recognition (526 equipos humanos), el modelo fine-tuneó varios modelos chinos + Qwen2.5-VL-7B, armó un sistema de voting, y en 24 horas y 45 submissions logró **0.853 de accuracy** — superando a **458 de los 526 equipos humanos**.

Lo notable: el modelo sigue haciendo **cambios estructurales profundos** incluso después de cientos de iteraciones, en vez de conformarse con tweaks superficiales. Esto sugiere que los LLMs ya entraron en la fase de **agentic coding real** — no son solo copilotos que autocompletan, sino agentes que pueden sostener un proyecto complejo durante días.

**Fuentes adicionales:** [The New Stack](https://thenewstack.io/qwen-autonomous-coding-audit/), [The Decoder](https://the-decoder.com/alibabas-open-weight-qwen3-8-max-takes-on-long-horizon-ai-tasks-with-2-4-trillion-parameters/), [Apidog](https://apidog.com/blog/qwen-3-8-for-coding/), [Developer Tech](https://www.developer-tech.com/news/alibaba-qwen3-8-max-claims-16-day-autonomous-coding-run/)

### Update: 2 de septiembre — Qwen3.8-Max-0902: upgrade silencioso, mismo precio, mucho mejor código

Alibaba le metió mano al flagship sin hacer ruido. El **1 de septiembre** el equipo de Qwen lanzó **Qwen3.8-Max-0902**, un *in-place upgrade* del mismo modelo de 2.4T de parámetros: **misma arquitectura, mismo contexto de 1M, mismo precio** ($2 / $6 por millón de tokens). La diferencia está en los benchmarks de código, que pegan un salto enorme.

Los números del salto (checkpoint viejo → 0902):

- **Terminal-Bench 3.0:** 11.3% → **29.0%**
- **DeepSWE 1.1:** 56.6% → **69.3%**
- **NL2Repo-Bench:** 55.9% → **64.9%**
- **QwenSWEBench V2:** mejora en su propio set interno, el más difícil

El dato clave: **los 8 benchmarks de programación mejoraron**, y en tres (MLS-Bench-Lite, SWE-Atlas QnA y QwenSWEbench V2) le gana a Claude Opus 5. Ojo, que en el resto todavía va por detrás — la prensa lo resume bien: "mejor que su versión anterior, pero aún detrás de Opus 5".

Para los que ya usan Qwen3.8-Max vía API, esto es **drop-in**: mismo endpoint, mismo model ID, cero migración. Alibaba sigue la jugada que ya vimos con Google y Anthropic: en vez de anunciar un modelo nuevo a los cuatro vientos, va puliendo el mismo checkpoint y lo relanza con mejoras de coding/agentic. La guerra por el trono del código (Gemini 3.8 Flash, Opus 5, Qwen3.8-Max-0902) se está peleando con upgrades silenciosos y benchmarks cada vez más específicos.

**Fuentes del update:** [AI Release Tracker](https://aireleasetracker.com/model/qwen/qwen3.8-max-0902), [OpenRouter](https://openrouter.ai/qwen/qwen3.8-max), [CellCog](https://cellcog.ai/blog/qwen3-8-max-0902/), [Lookonchain](https://lookonchain.com/feeds/71037)
