---
title: "AWS Q2 2026: US$42.2B de ingresos, backlog de US$496B y Andy Jassy diciendo 'no damos abasto'"
author: Carlos
pubDatetime: 2026-08-02T15:00:00Z
slug: aws-q2-2026-earnings-backlog-496b-capex
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Infraestructura
description: "AWS creció 37% YoY llegando a US$42.2B trimestrales. Backlog saltó a US$496B. Amazon subió capex a US$220B y dice que la capacidad aún es insuficiente."
---

![AWS Q2 2026: US$42.2B de ingresos, backlog de US$496B y Andy Jassy diciendo 'no damos abasto'](../../assets/images/2026-08-02-aws-q2-earnings.jpg)

Las grandes tech reportaron resultados esta semana y AWS mandó un mensaje claro al mercado: **la demanda por cloud e IA es tan brutal que literalmente no pueden construirla suficientemente rápido**.

## Los números

Amazon reportó Q2 2026 (trimestre terminado en junio) el 30 de julio después de cierre. Los key highlights de AWS:

| Métrica | Q2 2025 | Q2 2026 | Δ |
|---|---|---|---|
| Revenue AWS | ~$30.7B | **$42.2B** | +37% |
| Operating Income | ~$9.3B | **$16.6B** | +78% |
| Backlog | $364B (Q1) | **$496B** | +36% QoQ |
| % Revenue Amazon total | — | ~21% | — |

- **EPS total de Amazon:** $5.75 (vs $1.82 esperado) — boosteado por una ganancia no realizada de **$53.4 mil millones** ligada a su stake en Anthropic
- **Revenue total Amazon:** $200.6B (+20% YoY)
- La acción **subió ~15%** el viernes post-earnings

## "La capacidad es insuficiente"

Andy Jassy fue explícito: **la capacidad de AWS para 2026 sigue siendo insuficiente** frente a la demanda. El backlog saltó de $364B a **$496 mil millones** en un solo trimestre — un incremento de $132 mil millones en tres meses. Eso es visibilidad de ingresos multi-año garantizada.

Amazon subió su guidance de capex anual a **$220 mil millones**, arriba de los ~$200B anteriores. La mayor parte se va en datacenters y aceleradores de IA (Trainium, Graviton, GPUs NVIDIA).

## El contexto: la carrera de los tres grandes

AWS no fue el único que reportó. Esta semana se cerró el earnings season de los hyperscalers:

| Proveedor | Revenue Cloud Q2 2026 | Crecimiento YoY | Capex anual |
|---|---|---|---|
| **AWS** | $42.2B | +37% | $220B |
| **Azure** (Microsoft) | ~$12.5B/mes | +43% | "Hold" (sin subir guidance) |
| **Google Cloud** | $24.8B | +82% | $195-205B |

Juntos, los tres representan el **67% de todo el revenue cloud global** según The Register.

Algunos datos clave de la semana:
- **Microsoft Azure** cruzó **$100 mil millones en revenue anual** por primera vez en su historia (fiscal 2026 terminó en junio). Tuvo su **mejor día de trading desde 2008** (+15%).
- **Google Cloud** mantiene el crecimiento más acelerado (+82%), pero con free cash flow negativo de -$5.9B.
- **AWS** tiene el revenue más alto y el backlog más grande de la industria, pero Jassy admite que la demanda sigue superando la oferta.

## ¿Qué está impulsando todo esto?

Según los análisis post-earnings, los drivers son consistentes entre los tres:

1. **Migración enterprise a cloud:** todavía hay empresas migrando workloads legacy
2. **IA training e inference:** la razón #1 de crecimiento nuevo. Empresas pagando premium por GPUs y TPUs
3. **Adopción de chips propios:** AWS con Trainium y Graviton; Google con TPU
4. **IA agentil:** nuevas workloads que no existían hace 12 meses, consumiendo compute de forma exponencial

## Lo que significa para equipos de infra

- **No esperes que bajen los precios de GPU en hyperscalers.** La demanda estructuralmente supera a la oferta. AWS ya subió Capacity Blocks ~20% en julio (segunda alza del año).
- **Los neoclouds ganan relevancia.** Si AWS admite que no puede satisfacer la demanda, los clientes van a buscar capacity donde sea — CoreWeave, Nebius, Thunder Compute.
- **FinOps más crítico que nunca.** Con $496B de backlog, AWS tiene power de pricing absoluto. Los equipos necesitan tooling de cost optimization o van a sangrar.
- **Multi-cloud deja de ser opcional.** Ningún proveedor individual tiene la capacity para soportar workloads de IA a escala sola.

## Conclusión

El earnings season de Q2 2026 confirma lo que veníamos viendo: **la IA está reescribiendo la economía del cloud**. AWS, Azure y GCP están creciendo a rates que no se veían hace años, quemando decenas de miles de millones en infraestructura, y todavía no alcanza. La pregunta no es si esto se desacelera — es cuándo los márgenes empiezan a reflejarse. Mientras tanto, la capacity sigue siendo el bottleneck.

---

**Fuentes:** [Reuters](https://www.reuters.com/business/retail-consumer/amazon-jumps-aws-growth-soothes-fears-over-rising-ai-spending-2026-07-31/), [Fortune](https://fortune.com/2026/08/01/amazon-andy-jassy-cloud-trillion-pga-tour/), [The Register](https://www.theregister.com/off-prem/2026/08/01/enterprise-cloud-infrastructure-uptake-shows-no-sign-of-slowing/5281835), [The Daily Upside](https://www.thedailyupside.com/technology/artificial-intelligence/booming-aws-revenue-saves-amazon-from-meta-sized-backlash/), [Cloud Computing News](https://www.cloudcomputing-news.net/news/aws-cloud-capacity-ai-demand/)
