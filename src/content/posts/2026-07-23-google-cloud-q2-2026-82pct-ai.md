---
title: "Google Cloud se disparó 82% en Q2 2026: US$24.8B gracias a la IA"
author: Carlos
pubDatetime: 2026-07-23T04:01:00Z
slug: google-cloud-q2-2026-82pct-ai
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Infraestructura
description: "Alphabet reportó ingresos de US$24.8B en Google Cloud para Q2 2026, un crecimiento del 82% YoY impulsado por demanda de infraestructura IA. Ya es el 21% de los ingresos de Alphabet."
---

Google Cloud dejó de ser el chiste de los hyperscalers. Las cifras de Q2 2026 de Alphabet son una paliza completa:

- **Ingresos: US$24.8 mil millones** (vs US$13.6B el mismo trimestre del año anterior)
- **Crecimiento: +82% YoY**
- **Ingreso operativo: US$8.8 mil millones** (más del triple que los US$2.8B de Q2 2025)
- **Ingresos totales de Alphabet: US$119.8B** (+24% YoY)

Google Cloud ahora representa el **21% de los ingresos** y el **22% del ingreso operativo** de todo Alphabet. De ser el tercer puesto distante a ser el motor de crecimiento de la empresa.

## ¿Qué está pasando?

Alphabet atribuye el crecimiento a **"demanda de infraestructura IA y soluciones de IA empresarial"**. Básicamente, las empresas están pagando premium por correr sus modelos en GCP en vez de on-premise o en otros clouds.

La estrategia de Gemini está funcionando: Google lo ha metido en cada producto que tiene (Search, Workspace, Cloud), dándole una exposición que ni OpenAI ni Anthropic pueden igualar en términos de distribución.

## El contexto importante

Según The Register, **Claude de Anthropic sigue siendo el modelo frontier preferido para enterprise**, y hay empresas rotando entre modelos según costo-efectividad. Pero Google tiene una ventaja que nadie más tiene: **distribución masiva y profundidad de pockets**.

Si la burbuja de IA explota, OpenAI y Anthropic son los más expuestos. Google, como bien dice The Register, *"será el conserje al final del universo que recoge los pedazos —y el talento—."*

## ¿Por qué importa para infra?

- Google Cloud está capturando **workloads de IA entrenamiento e inferencia** que antes iban a AWS
- El growth no es solo IA: también es migración de enterprises que se están saliendo de Oracle y on-premise
- Para equipos DevOps, esto significa más clusters GKE, más Cloud Run, más BigQuery — y más presupuesto lock-in con Google

## Los números que importan

| Métrica | Q2 2025 | Q2 2026 | Δ |
|---------|---------|---------|---|
| Revenue Cloud | $13.6B | $24.8B | +82% |
| Operating Income | $2.8B | $8.8B | +214% |
| % Revenue Alphabet | ~14% | 21% | +7pp |
| Capex Alphabet | — | en alza | +26% QoQ |

El capex subió 26% trimestralmente, lo que dice claramente que Google está metiendo plata a lo bombero en datacenters. La apuesta: si van a ser la infraestructura de la IA, necesitan los GPUs/TPUs y los datacenters para correrlos.

---

### Update: 24 julio 2026 — Capex sube a US$195-205B y Google rentará capacidad a terceros

Los detalles post-earnings son aún más brutales que el reporte inicial:

- **Capex anual alzado a US$195-205 mil millones** (antes US$180-190B). Solo en Q2 gastaron **US$44.9B** en capex, +107% YoY.
- **Free cash flow negativo: -US$5.9 mil millones**. Google está quemando más caja de la que genera.
- Aproximadamente **60% del capex se va en servidores** — principalmente aceleradores de IA incluyendo TPUs propios.
- **Backlog de Cloud: US$514 mil millones**. Eso es visibilidad de ingresos multi-año garantizada.
- Thomas Kurian confirmó que Google **rentará capacidad a terceros** (CoreWeave, Nebius) para suplir la demanda. Sí, Google pagándole a neoclouds para no perder clientes por falta de GPU.
- **Las acciones cayeron 7.1%** post-anuncio. El mercado castiga el gasto, aunque los ingresos vuelen.

Kurian dijo que los clientes existentes gastan **~50% más de lo comprometido**. O sea, contratan X y consumen 1.5X. La demanda está ahí; el problema es la infraestructura para atenderla.

La pregunta abierta: ¿cuándo se traduce ese backlog en márgenes? Mientras tanto, Alphabet se ve más como una empresa de infraestructura que casualmente hace búsqueda y publicidad.

---

**Fuentes:** [Alphabet Q2 2026 earnings (PDF)](https://s206.q4cdn.com/479360582/files/doc_financials/2026/q2/2026q2-alphabet-earnings-release.pdf), [The Register](https://www.theregister.com/paas-and-iaas/2026/07/22/google-cloud-is-killing-it/5276632), [CNBC](https://www.cnbc.com/2026/07/22/google-earnings-q2-goog-live-updates.html), [Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/alphabet-q2-2026-earnings-revenue-203058727.html), [MLQ.ai](https://mlq.ai/news/alphabet-raises-2026-capex-guidance-to-195-205b-cloud-revenue-surges-82/), [BusinessModelAnalyst](https://businessmodelanalyst.com/google-capex-cloud-backlog-q2-2026/)
