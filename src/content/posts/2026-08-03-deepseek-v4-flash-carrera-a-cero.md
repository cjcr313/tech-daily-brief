---
title: "DeepSeek V4 Flash y la carrera a cero: el mismo output que Opus 4.8 al 1% del precio"
author: Carlos
pubDatetime: 2026-08-03T04:00:00Z
slug: deepseek-v4-flash-carrera-a-cero
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "DeepSeek lanzó V4 Flash con pricing de $0.14/$0.28 por millón de tokens. En Arena.ai superó a Opus 4.8 en coding front-end. La guerra de precios se acelera."
---

![DeepSeek V4 Flash y la carrera a cero](../../assets/images/2026-08-03-deepseek-v4-flash.jpg)

Ya lo veníamos venir. DeepSeek lanzó **V4 Flash** el 31 de julio y los números son una bofetada para la industria: **$0.14 por millón de tokens de input, $0.28 de output**. Para ponerlo en perspectiva, lo que te cuesta **$25 en Anthropic Opus 4.8 te cuesta 28 centavos en DeepSeek**. Un 99% de descuento.

## Los datos

DeepSeek V4 Flash debuted en el leaderboard de Arena.ai para coding front-end **por encima de Opus 4.8** — o sea, no es solo barato, es competitivo en benchmarks reales.

| Modelo | Input (por 1M tokens) | Output (por 1M tokens) | Contexto |
|---|---|---|---|
| **DeepSeek V4 Flash** | $0.14 | $0.28 | 1M |
| **DeepSeek V4 Pro** | TBD (agosto) | TBD | 1M |
| **Anthropic Opus 4.8** | ~$15 | ~$75 | 200K |
| **OpenAI GPT-5.6** | ~$5 | ~$15 | 256K |

El pricing blended de DeepSeek (7:2:1 cache hit/input/output) sale a **$0.06 por millón de tokens**. Es literalmente gratis comparado con cualquier alternativa gringa.

## El upgrade agentic

V4 Flash no es solo otro modelo barato. DeepSeek habilitó la **Responses API** (similar a la de OpenAI) que soporta tool use nativo, function calling y workflows agénticos. El modelo está diseñado específicamente para:

- Asistentes de coding
- Sistemas de chat
- **Agent workflows** donde responsividad y costo importan

V4 Pro (el modelo más capaz) todavía no tiene soporte en la Responses API, pero DeepSeek confirmó que llegará **a principios de agosto**.

## La carrera a cero

Axios bautizó el fenómeno perfecto: **"AI's race to zero"**. Lo que estamos viendo:

1. **Modelos chinos igualando performance frontier a fracción del costo.** Kimi K3, DeepSeek V4 Flash, LongCat-2.0 de Meituan — todos compitiendo en el mismo ballpark que OpenAI/Anthropic pero con estructuras de costos radicalmente menores.
2. **OpenAI recortando precios** la semana pasada para retener developers.
3. **Anthropic acusando a DeepSeek** (febrero 2026) de usar miles de cuentas fraudulentas para generar millones de conversaciones con Claude y entrenar sus propios modelos.
4. **Microsoft** desarrollando su familia MAI y chips Maya 200 para reducir dependencia de OpenAI.

## ¿Qué significa para tu stack?

- **Si estás pagando $15+ por millón de tokens, estás pagando demasiado.** Salvo que necesites capacidades muy específicas de Opus/GPT-5.6, DeepSeek V4 Flash cubre el 90% de los use cases a 1% del costo.
- **Model routing deja de ser opcional.** La estrategia de usar modelos diferentes según el task (DeepSeek para tareas rutinarias, Opus/GPT para razonamiento complejo) es la única arquitectura que hace sentido económico.
- **El costo de IA tiende a cero.** Cada release china empuja los precios hacia abajo. Construye tu arquitectura asumiendo que el próximo modelo será más barato, no más caro.
- **La soberanía de datos es la única barrera real.** Si tu empresa no puede mandar datos a China por compliance, vas a seguir pagando premium por modelos occidentales. Esa es la única razón de peso.

La pregunta ya no es si los modelos chinos van a alcanzar a los gringos — ya lo hicieron. La pregunta es cuánto tiempo más los laboratorios occidentales pueden justificar sus precios antes de que el mercado se vaya completo.

---

### Update: 3 de agosto — Artificial Analysis publica benchmarks completos y Alibaba lanza Qwen3.8-Max

Hoy Reuters publicó datos de **Artificial Analysis** que ponen los números en perspectiva real. No es solo que DeepSeek sea barato por token: es barato **por tarea completa**. La firma calculó el costo promedio por evaluación:

| Modelo | Costo promedio por tarea | Intelligence Index (0-100) |
|---|---|---|
| **DeepSeek V4-Flash** | **$0.03** | 50 |
| **Kimi K3** (Moonshot) | $0.86 | 57 |
| **GPT-5.6 Sol** (OpenAI) | $1.86 | ~59+ |
| **Claude Fable 5** (Anthropic) | **$3.15** | ~59+ |
| **Gemini 3.6 Flash** (Google) | — | 50 |
| **GLM-5.2** (Z.AI/Zhipu) | — | 51 |

El dato brutal: **V4-Flash cuesta 100 veces menos por tarea que Claude Fable 5**. Y empata en intelligence index con Gemini 3.6 Flash de Google.

Claro, los modelos frontier (Opus 5, Fable 5, GPT-5.6) siguen siendo **9+ puntos más altos** en el Intelligence Index. Si necesitas razonamiento de élite, DeepSeek no está ahí todavía. Pero para el 80% de los use cases (coding rutina, chat, extracción, tool use), el score de 50 es perfectamente usable.

**Lo otro que pasó hoy:** Alibaba lanzó **Qwen3.8-Max**, su modelo más grande y capaz hasta la fecha, compitiendo directamente con Kimi K3 de Moonshot en tamaño. La carrera china no se desacelera — se acelera.

DeepSeek también estaría preparando una **potencial IPO** según fuentes de Reuters, y tiene V4-Pro en camino (sin fecha confirmada todavía).

La conclusión se refuerza: la carrera a cero no es una anécdota, es la tendencia estructural de 2026. Construye tu arquitectura asumiendo que cada trimestre habrá un modelo más barato y competitivo.

---

**Fuentes:** [Axios](https://www.axios.com/2026/08/01/deepseek-model-cheap-ai-price-war), [Artificial Analysis vía Reuters/CNA](https://www.channelnewsasia.com/business/deepseeks-new-ai-model-far-cheapest-well-known-models-run-research-firm-says-6294731), [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4-flash), [DeepSeek API Docs](https://api-docs.deepseek.com/quick_start/pricing/)
