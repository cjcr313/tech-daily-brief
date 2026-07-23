---
title: "Observabilidad con IA: ¿realidad o puro marketing? Solo el 4% la tiene productiva"
author: Carlos
pubDatetime: 2026-07-23T10:00:00Z
slug: observabilidad-ai-realidad-o-marketing-madurez
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "Un análisis brillante de Glancer AI destapa la brecha: todos los vendors tienen AI story, pero solo 4% de organizaciones la ha operationalizado. MCP fue la verdadera revolución de 2026."
---

Hay un artículo de Glancer AI que vale su peso en oro y que vale la pena destapar. La pregunta es simple: **¿la observabilidad realmente adoptó IA, o solo se rebrandeó alrededor de ella?**

## El número que lo cambia todo

- **4%** de las organizaciones han operationalizado IA en IT operations
- **49%** sigue en pilotos limitados
- **22%** ni siquiera ha empezado
- **62%** ha "implementado IA en alguna forma" sin escalarla en ningún lado

Esto describe un mercado donde **el supply side está años adelante del demand side**. Los vendors entregaron la capability. Los clientes no logran ponerla en producción.

## Todos tienen algo que vender

Camina por cualquier booth en 2026 y no encontrarás una sola plataforma de observabilidad sin un AI story:

- **Dynatrace:** Davis + Davis CoPilot
- **Datadog:** Watchdog, Bits AI y un SRE agent cobrado por investigación
- **New Relic:** NRAI + SRE Agent que vive en Slack
- **Grafana:** Assistant
- **Splunk, Elastic, Honeycomb, Chronosphere, IBM Instana, LogicMonitor:** todos tienen algo con nombre y launch blog

Pero la pregunta real no es si tienen AI. Es si **un ingeniero on-call a las 3 AM notaría si desaparece**.

## Los 5 niveles de madurez (y dónde está cada uno realmente)

| Nivel | Capability | Estado real |
|-------|-----------|-------------|
| 1 | Detección estadística de anomalías y forecasting | Maduro, universal. Resuelto desde ~2020 |
| 2 | Correlación de alerts y reducción de ruido | Maduro pero calidad varía. Funciona con metadata limpia |
| 3 | Query en lenguaje natural y resumen | Shipped everywhere, superficial. Ahorra tiempo pero no es load-bearing |
| 4 | Investigación agentica (root cause analysis autónomo) | GA en 2026. Genuinamente nuevo |
| 5 | Remediación autónoma | Mayormente demo |

El insight clave: **la detección de anomalías es aburrida y resuelta**. La investigación agentica es la novedad real de 2026. Y la remediación autónoma es, en su mayoría, humo.

## MCP: la verdadera revología de 2026

Y aquí viene el punto más interesante del artículo. **El MCP (Model Context Protocol) fue la verdadera historia de 2026**, no cualquier assistant individual.

Para Q1, la mayoría de plataformas grandes expusieron su telemetría como **tool calls**. Esto silenciosamente convirtió a **cada vendor de observabilidad en un data source para el agent de alguien más**.

¿La implicancia? Tu AI agent de turno puede ahora consultar Datadog, Grafana y Splunk en el mismo flujo. Los vendors perdieron el lock-in del assistant. Ganaron los protocolos abiertos.

## o11y-bench: el primer scoreboard neutral

Grafana lanzó **o11y-bench**, el primer benchmark neutral para capacidades de AI en observabilidad. Los resultados son humillantes:

- El **mejor modelo llega a 79.4%** en runs repetidos
- Cae a **57%** cuando la tarea involucra **modificar un dashboard** en vez de solo leer datos
- La mayoría de los "AI assistants" de vendors scorean bajo cuando se les pide algo más allá de query y summarize

## Por qué los clientes no adoptan

Las razones son estructurales y aburridas — justo por eso son reales:

1. **Telemetría fragmentada:** vive en 4 tools que no comparten identidad
2. **Metadata ausente:** la mitad de los servicios no tiene owner tag, así que un correlator que agrupa por ownership... agrupa por nada
3. **Gobernanza:** nadie en operaciones va a dejar que software toque producción sin approval workflow y audit trail — y la mayoría de estos features se shipped sin eso
4. **Black box:** output sin explicación no se adopta, se ignora educadamente

## Conclusión práctica

Si estás evaluando plataformas de observabilidad con AI en 2026:

- **No compres por el AI story.** Todos lo tienen. Pregunta por casos de uso concretos a las 3 AM
- **Prioriza MCP support.** Que tu plataforma exponga telemetría como tool calls es más valioso que cualquier assistant propietario
- **Limpia tu metadata primero.** Ningún AI va a salvar un entorno sin owner tags ni service identity
- **Investigación agentica > detección de anomalías.** Una es commodity, la otra es donde está el valor real

Los dashboards se pusieron más inteligentes. Las organizaciones alrededor de ellos, mayoritariamente, no. Esa es la brecha que define 2026 en observabilidad.
