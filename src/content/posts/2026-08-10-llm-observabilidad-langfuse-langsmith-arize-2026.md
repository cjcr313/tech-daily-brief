---
title: "Observabilidad para LLMs en 2026: Langfuse vs LangSmith vs Braintrust vs Arize"
author: Carlos
pubDatetime: 2026-08-10T04:00:00Z
slug: llm-observabilidad-langfuse-langsmith-arize-2026
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "El mercado de observabilidad para LLMs llega a US$2.69 mil millones en 2026. Cuatro plataformas dominan: Langfuse, LangSmith, Braintrust y Arize. Esta es la guía práctica."
---

![Ilustración editorial de dashboards de monitoring con trazas de agentes de IA, gráficos de tokens y métricas de calidad](../../assets/images/placeholder.jpg)

La observabilidad de LLMs dejó de ser opcional. Según Gartner, para 2028 el **50% de los deployments de GenAI** tendrán inversión dedicada en observabilidad (hoy apenas 15%). Y el mercado ya refleja la presión: **US$2.69 mil millones en 2026**, con proyección de US$9.26 mil millones para 2030.

Una encuesta de LangChain a 1.300+ profesionales reveló que **89% ya implementa observabilidad para sus agentes**. Pero la evaluación va más lenta: solo 37% hace online evals y un preocupante 29.5% **no evalúa nada**.

## Los cuatro campamentos del mercado

### 1. Plataformas AI-native (Langfuse, LangSmith, Braintrust, Arize)

Tratan el trace del LLM como objeto principal. Capturan spans anidadas de agentes, retrievers y tools, y adjuntan scores de calidad al tráfico de producción.

- **Langfuse**: open-source, self-hostable. La opción más popular para equipos que quieren control total. Soporta OpenTelemetry GenAI.
- **LangSmith**: de los creadores de LangChain. Integración nativa con LangGraph y LangChain. Buenísimo si ya vives en ese ecosistema.
- **Braintrust**: foco en eval automation y experimentación. Fuerte en CI/CD para prompts.
- **Arize**: dual play con Phoenix (open-source) y plataforma cloud. Destaca en LLM-as-a-judge y detección de hallucinations.

### 2. Librerías de evaluación (Phoenix, DeepEval, MLflow, RAGAS)

Se enfocan en scorear outputs: faithfulness, hallucination, answer relevance. Usan LLM-as-a-judge extensivamente.

### 3. AI Gateways (Helicone, Portkey, LiteLLM)

Se sientan como proxy entre tu app y los model providers. Agregan logging, caching, cost tracking y routing con cambios mínimos de código.

### 4. Extensiones APM (Datadog, New Relic, Dynatrace)

Boltean LLM tracing al monitoring de infraestructura que ya tienes. La ventaja: correlacionar señales de IA con CPU, memoria y red.

## El estándar que conecta todo: OpenTelemetry GenAI

Las **semantic conventions GenAI de OpenTelemetry** definen atributos `gen_ai.*` vendor-neutral para model calls, token usage, agent steps y tool executions. Adoptadas por Google Cloud, AWS, Azure y Datadog. Si tu plataforma soporta OTel GenAI, puedes cambiar de vendor sin perder trazas.

## ¿Cuál elegir?

- **¿Recién empezando con agentes?** Langfuse open-source es el camino más barato.
- **¿Vives en LangChain?** LangSmith, sin pensarlo.
- **¿Necesitas eval automation en CI?** Braintrust.
- **¿Ya pagas Datadog/New Relic?** Usa su LLM observability module antes de agregar otro vendor.
- **¿Muchos modelos, mucho cost tracking?** Un gateway como LiteLLM o Portkey primero.

La conclusión es simple: si tienes LLMs en producción y **no tienes observabilidad dedicada**, estás volando a ciegas. Las hallucinations no aparecen como error 500.

---

**Fuentes:** [MarkTechPost](https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/), [Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-03-30-gartner-predicts-by-2028-explainable-ai-will-drive-llm-observability-investments-to-50-percent-for-secure-genai-deployment), [LangChain State of Agent Engineering](https://www.langchain.com/state-of-agent-engineering), [The Business Research Company](https://www.thebusinessresearchcompany.com/report/large-language-model-llm-observability-tools-global-market-report)
