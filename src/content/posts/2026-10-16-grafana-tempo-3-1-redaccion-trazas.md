---
title: "Tempo 3.1: redacta trazas con una query TraceQL y métricas que entienden de sampling"
author: Carlos
pubDatetime: 2026-10-16T21:05:00Z
slug: grafana-tempo-3-1-redaccion-trazas
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "Grafana lanzó Tempo 3.1: redacción de trazas por consulta TraceQL, cliente Kafka con TLS y métricas que corrigen por sampling. Queries de métricas casi 2x más rápidas."
---

![Ilustración editorial de trazas distribuidas siendo filtradas y redactadas sobre un panel de observabilidad, con líneas de datos que se transforman](../../assets/images/2026-10-16-grafana-tempo-3-1-redaccion-trazas.jpg)

Grafana Labs liberó **Tempo 3.1**, la primera actualización menor de la arquitectura 3.0 (la de Project Rhythm, con Kafka como columna vertebral). No es un release de relleno: ataca tres dolores reales de quien opera tracing a escala — **Kafka seguro y barato, redacción de datos sensibles, y métricas que no mienten con sampling**.

## El cliente Kafka que faltaba

En Tempo 3.0, el cliente Kafka solo soportaba SASL PLAIN sin encriptación. O sea: cualquier broker que exigiera TLS te rechazaba. En 3.1 esto se arregla:

- **TLS, incluido mTLS opcional**
- Nuevos mecanismos SASL: **SCRAM-SHA-256/512, OAUTHBEARER y AWS_MSK_IAM**
- `client_rack` con rack-aware fetching (KIP-392): los block-builders leen de réplicas en su misma zona de disponibilidad y **evitan los cargos de transferencia cross-zone**, que a escala de tracing duelen
- `producer_compression` configurable (gzip, snappy, lz4, zstd). Con gzip habilitado, **Azure Event Hubs queda usable como backend**

Detalle que gusta: los tres cambios vinieron de contribuidores de la comunidad.

## Redactar trazas sin listar trace IDs a mano

La redacción de trazas (`tempo-cli redact`) antes exigía enumerar trace IDs uno por uno. El problema: cuando un token o número de cuenta se filtró en cientos de trazas, esa lista es imposible de mantener.

Ahora la redacción acepta **una consulta TraceQL** con `--dry-run` (cuenta coincidencias sin tocar nada) y ventanas de tiempo con `--start`/`--end`. Ojo con las letra chica:

- La sintaxis está limitada a un filtro de spanset con comparaciones de igualdad sobre atributos `resource.*` y `span.*`
- Es **irreversible** (el rewrite no se puede deshacer)
- Los workers viejos **ignoran la ventana de tiempo** y borran todo lo que coincida, sin error. Primero actualiza todos los schedulers y workers a 3.1, después usa las flags
- La compactación del tenant se pausa mientras corre la redacción

## Métricas que entienden el sampling

TraceQL metrics (GA desde 3.0) gana tres mejoras:

1. **Hint experimental `with (extrapolate=true)`**: escala los resultados según la tasa de sampling en el `tracestate`, siguiendo las reglas de probability sampling de OpenTelemetry. Con sampling al 50%, cada span almacenado cuenta como dos. Aplica a `rate`, `count_over_time`, `sum_over_time` y demás — pero no a `min_over_time` ni `max_over_time` (tiene sentido: no puedes extrapolar un mínimo).
2. **Aritmética entre queries y escalares**: `+`, `-`, `*`, `/` — ahora una tasa de error es una sola consulta.
3. El **span-only fetch path** (experimental en 3.0) queda por defecto para bloques vParquet5. Con vParquet5 como formato default, las queries de métricas simples corren **casi el doble de rápidas**.

## Un guiño a los agentes de IA

El nuevo endpoint experimental `POST /api/v2/traces/diff` compara dos trazas y puede devolver un resumen compacto en vez de un patch span por span. Está expuesto vía `gcx`, `tempo-cli` y el **Tempo MCP server** — y Grafana lo dice explícitamente: el payload más chico ayuda a **investigaciones dirigidas por LLM**. La observabilidad se está diseñando pensando en que el que "mira" los datos no siempre va a ser humano.

También llegan pruning experimental de spans similares en el endpoint trace-by-ID v2 (colapsa spans hoja parecidos en un span resumen) y mejoras del metrics-generator como buffers de labels reutilizados que llevan las asignaciones por span a cero en benchmarks del service graph.

**El resumen**: si corres Tempo con la arquitectura Kafka, 3.1 es de esos upgrades que se justifican solos — menos cuenta de cloud por transferencias, compliance más rápido, y métricas honestas con head sampling.
