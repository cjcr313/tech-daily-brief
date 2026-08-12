---
title: "Cloudflare lanza 'Agents Week' y plantea la visión de un Agent Cloud"
author: Carlos
pubDatetime: 2026-08-02T18:30:00Z
slug: cloudflare-agents-week-agent-cloud
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Infraestructura
description: "Cloudflare anunció Agents Week, explorando cómo debe evolucionar la infraestructura cloud para servir a agentes autónomos en vez de humanos. El Agent Cloud ya no es ciencia ficción."
---

![Cloudflare lanza Agents Week](../../assets/images/2026-08-02-cloudflare-agents-week.jpg)

Cloudflare acaba de iniciar **Agents Week** con una pregunta provocadora: ¿qué significa construir un cloud para agentes de IA y no para humanos? La respuesta corta de Rita Kozlov (Directora de Producto de Cloudflare) es: *todo cambia*.

## La tesis del Agent Cloud

El cloud actual — y todo el web encima de él — **fue diseñado para humanos**. Cada capa asume que hay una persona mirando: páginas hechas para retener atención, dashboards para hacer click, interfaces tuneadas para cómo leemos y decidimos.

Los agentes no funcionan así. No se distraen, no se cansan y tienen necesidades completamente distintas: velocidad, estructura y acceso programático.

El Agent Cloud tiene que hacer dos cosas simultáneamente:

1. **Preparar para un futuro agent-native** — primitivas construidas desde cero para agentes, no retrofitadas de herramientas humanas
2. **Servir como translation layer hoy** — actuando como puente entre el web actual (con forma humana) y el web que viene (con forma de agente)

## Qué vamos a ver esta semana

Agents Week va a cubrir cinco áreas, una por día:

- **Primitivas y execution layer** — qué necesitas para correr agentes en escala (storage, compute, scheduling)
- **ADLC (Agent Development Lifecycle)** — como el SDLC pero sacando al humano del loop
- **Seguridad y controles** — cómo las organizaciones pueden dejar que empleados y agentes interactúen con sistemas internos de forma segura
- **Agentic Web** — discovery, acceso, pagos y identidad para agentes
- **Grounding en la realidad** — lo que es posible hoy con agentes y humanos coexistiendo

## El contexto mayor

Cloudflare viene posicionándose como **la capa de infraestructura para el mundo agentil** desde hace meses. Ya tienen:
- **Workers AI** corriendo modelos en el edge (incluyendo Kimi K2.7 con 1T parámetros)
- **Durable Objects** para estado distribuido
- **QuePaxa/Meerkat** para consenso global fuerte (cubrimos esto hace unos días)
- **Cloudflare Sandboxes** para ejecución aislada de código agentil
- Controles de bots de IA granulares

Agents Week es la consolidación narrativa: Cloudflare no quiere ser solo un CDN o un proveedor edge — **quiere ser la plataforma donde viven los agentes**.

## Por qué es relevante

Si los agentes de IA van a ser tan ubicuos como los pronósticos sugieren (y los earnings de AWS/Azure/GCP esta semana lo confirman), alguien tiene que proveer la infraestructura para que corran. Los hyperscalers ofrecen compute crudo. Cloudflare ofrece algo distinto: **un edge global distribuido en 330+ ciudades** con storage, compute y seguridad integrados.

La jugada de Cloudflare es inteligente: en vez de competir con AWS en GPUs (donde pierden), compiten en **latencia, distribución y developer experience para workloads agentiles**. Si un agente necesita responder en 50ms desde cualquier parte del mundo, Cloudflare es más natural que un EC2 en us-east-1.

Agents Week va a traer anuncios concretos durante los próximos días. Mantengan los ojos abiertos.

### Update: 12 de agosto — Agents Week cerró con todo lo que se lanzó

Agents Week terminó y Cloudflare publicó el **recap oficial** con todo lo anunciado. Aquí va el resumen de lo importante:

**Lunes (Fundaciones de runtime):**
- **`@cloudflare/computer`** — un nuevo runtime diseñado para agentes que puede elegir el entorno correcto para cada tarea (no un container genérico)
- **Workers RPC entre Python y JavaScript** — los Workers de ambos lenguajes ahora se comunican directamente
- Soporte para **Kimi K2.7 y GLM** corriendo a escala en el edge de Cloudflare
- **Billable Usage API** — visibilidad programática de costos para self-serve
- **Workers + Containers con TCP inbound y gRPC** — ideal para voice AI backends

**Martes (Agent Development Lifecycle):**
- **ADLC** — Cloudflare formaliza el ciclo de vida de desarrollo de agentes como sucesor del SDLC
- **Cloudflare Agents** — build, trace, replay y human-in-the-loop approvals en producción
- **Local tracing** — distributed tracing en dev local para que los agentes debugueen antes de producción
- **Cloudflare Wallets** — wallet programable para que agentes hagan transacciones en la economía agentil

**Lo relevante:** la jugada de Cloudflare es clara — no quieren competir en GPUs, quieren ser **la capa edge donde viven los agentes**. Con 330+ ciudades, tracing integrado, wallets para transacciones agentiles y un runtime diseñado desde cero para workloads autónomos, se están posicionando como la infraestructura del "Agentic Internet".

*Fuentes: [Cloudflare Blog - Agents Week Recap](https://blog.cloudflare.com/agents-week-review-august-2026/), [Cloudflare Blog - Welcome to Agents Week](https://blog.cloudflare.com/agents-week-welcome/)*
