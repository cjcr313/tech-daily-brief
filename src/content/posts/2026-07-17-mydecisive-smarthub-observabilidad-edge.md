---
title: "MyDecisive levanta US$12M y lanza SmartHub: observabilidad open source que procesa en el edge"
author: Carlos
pubDatetime: 2026-07-17T16:00:00Z
slug: mydecisive-smarthub-observabilidad-edge
featured: false
draft: false
tags:
  - Observabilidad
  - Open Source
description: "Startup fundada por Ari Zilka (ex-Hortonworks CTO) lanza SmartHub, plataforma open source que procesa telemetría cerca de la fuente en vez de mandar todo a un vendor. US$12M seed liderado por Copper Sky Capital."
---

El mercado de observabilidad sigue calentándose. **MyDecisive**, startup fundada por **Ari Zilka** (ex-CTO de Hortonworks y fundador de Terracotta), acaba de levantar **US$12M en ronda seed** liderada por Copper Sky Capital, y lanzó **SmartHub**, su plataforma open source.

## La tesis: procesar en el edge, no en el vendor

La idea es simple pero potente: en vez de forwardar cada log, métrica y trace a un vendor externo (Datadog, Splunk, New Relic, etc.), **SmartHub procesa la telemetría cerca de donde corren las aplicaciones**. Los teams pueden filtrar, asegurar y routear datos antes de que salgan de su infraestructura.

Con workloads de IA generando volúmenes de telemetría cada vez mayores, esto tiene sentido financiero: menos data que viaja = menos costos de storage = decisiones operacionales más rápidas.

## Qué ofrece SmartHub

Construido sobre **Kubernetes, OpenTelemetry y Prometheus**, SmartHub incluye:

- **Log processing** nativo
- **Trace sampling** configurable
- **Runtime controls** sin redeploy
- **Automated workflows** para operaciones
- Desplegable en un día, según la empresa

El approach open source significa que los developers pueden deployar y customizar sin vendor lock-in.

## Octant: la versión enterprise

Junto a SmartHub, MyDecisive lanzó **Octant**, su plataforma comercial para enterprise. Añade:

- Governance y security
- Automated runbooks
- Anomaly detection
- Cloud auto-scaling

MyDecisive claims que la plataforma combinada puede reducir costos de producción hasta **90%**. Esos son estimates de la empresa, así que tómalo con granos de sal.

## Contexto del mercado

El timing es interesante. La observabilidad open source está viviendo un momento:

- **OpenObserve** acaba de pasar los 20K stars en GitHub con un approach similar en Rust
- **Apple adquirió SigScalr** (SigLens) para uso interno
- Los costs de Datadog y similares siguen siendo una queja constante en la industria

MyDecisive se posiciona como la alternativa para orgs que quieren **control sobre sus datos de telemetría** sin el precio premium de los vendors comerciales. Ya tiene adoption en financial services, healthcare, retail y telecom.

Con Zilka al mando — que ya escaló Hortonworks a un IPO — hay que vigilar este espacio. La observabilidad está madura para disrupción, y US$12M es un seed nada despreciable para construir la alternativa.
