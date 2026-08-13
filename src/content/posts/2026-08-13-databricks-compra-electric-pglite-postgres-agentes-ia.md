---
title: "Databricks compra Electric (PGlite): Postgres WASM para agentes de IA"
author: Carlos
pubDatetime: 2026-08-13T22:00:00Z
slug: databricks-compra-electric-pglite-postgres-agentes-ia
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Databricks adquirió Electric, los creadores de PGlite (Postgres en WASM con 13M descargas semanales), para llevar Postgres distribuido a sandboxes de agentes IA."
---

Databricks sigue en modo shopping spree. Esta vez se metió en el bolsillo a **Electric** (antes ElectricSQL), el equipo detrás de **PGlite** — esa belleza de Postgres que corre en WASM dentro del navegador, apps locales y ahora, lo que más interesa: **sandboxes de agentes IA**.

## ¿Por qué importa?

La idea es simple pero poderosa: cada agente de IA corre su propia instancia local de Postgres via PGlite, y **Electric sincroniza el estado en tiempo real** hacia un Lakebase Postgres central en Databricks. Los agentes dejan de pelear con datos stale o duplicarse en tareas.

El argumento de Databricks es que **una sola base de datos centralizada ya no sirve para aplicaciones agentic**. Los agentes necesitan:
- Datos gobernados y durables (centralizado)
- Contexto local que cambia rápido (local, en el sandbox)

PGlite resuelve el lado local. Electric resuelve la sincronización. Lakebase/Neon resuelve el lado central.

## Los números hablan

PGlite pasó de **1 millón a 13 millones de descargas semanales** en solo 12 meses. No es un proyecto niche — es infraestructura que ya está en producción en millones de proyectos.

Stas Kelvich (co-founder de Neon, ahora parte de Databricks) construyó los cimientos de PGlite como un build WASM de Postgres radicalmente más pequeño y rápido que los intentos anteriores basados en VMs.

## ¿Qué pasa con Electric Cloud?

- **Todo lo open source queda open source**: Postgres Sync, PGlite, TanStack DB, Durable Streams
- **Electric Cloud se apaga** — los usuarios tienen que self-host o migrar
- El equipo se integra con **Neon** dentro de Databricks para construir Lakebase

## La jugada estratégica

Esto consolida la apuesta de Databricks por **Postgres como capa de datos para IA**:

| Capa | Tecnología |
|------|-----------|
| Lakehouse | Databricks (ya existente) |
| Postgres central (OLTP) | Lakebase / Neon |
| Postgres local (agentes) | PGlite |
| Sync en tiempo real | Electric Sync |

La guerra por la infraestructura de agentes IA apenas está empezando. Todos se pelean por modelos y orquestación, pero **el manejo de estado y sincronización entre agentes** es el nuevo frente de batalla.

Y Databricks lo acaba de atacar con todo.

> 💬 _"The world is building a new era of agentic applications which require distributed state and real-time data synchronisation"_ — Databricks
