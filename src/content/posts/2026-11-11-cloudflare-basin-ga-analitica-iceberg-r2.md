---
title: "Cloudflare Basin llega a GA: analítica serverless sobre Apache Iceberg y R2, sin pagar egress"
author: Carlos
pubDatetime: 2026-11-11T21:30:00Z
slug: cloudflare-basin-ga-analitica-iceberg-r2
featured: false
draft: false
tags:
  - Cloud
  - Datos
  - Open Source
description: "Cloudflare sacó de beta a Basin, su plataforma de analítica serverless construida sobre Apache Iceberg y R2: ingesta, catálogo y SQL distribuido en un solo servicio."
---

![Ilustración editorial de un embudo de datos vertiendo streams hacia una cuenca de lagos de datos helados rodeada de servidores edge](../../assets/images/cloudflare-basin-ga-analitica-iceberg-r2.jpg)

Cloudflare confirmó la disponibilidad general de **Basin**, su plataforma de analítica serverless construida sobre **Apache Iceberg y R2 Object Storage**. Después de meses en beta, la apuesta de Cloudflare por el mundo de los datos ya es producto: ingesta, transformación y consulta SQL distribuida, todo encima del formato de tablas abierto que se convirtió en el estándar de facto del lakehouse moderno.

## Los tres componentes

Basin no es un solo servicio sino un trío que cubre el ciclo completo:

- **Basin Pipelines** (antes Cloudflare Pipelines): ingesta de eventos desde Workers, endpoints HTTP y Logpush, con transformaciones SQL aplicadas al vuelo antes de escribir a tablas Iceberg o R2.
- **Basin Catalog**: gestiona los metadatos Iceberg y automatiza el mantenimiento de tablas (compaction, snapshots, todo ese cariño que nadie quiere hacer a mano).
- **Basin SQL**: motor SQL serverless y distribuido para consultar las tablas Iceberg directamente.

## Lo importante: open format, cero egress

Dos decisiones de diseño marcan la diferencia. Primero, **todo vive en Apache Iceberg**, formato abierto que soporta cualquier herramienta compatible — DuckDB, Snowflake y el ecosistema completo pueden leer las mismas tablas. Segundo, el storage es R2, que ya sabemos: **sin cobros de egress**. La combinación golpea directo donde más duele de los warehouses tradicionales: el costo de sacar tus propios datos.

El pitch de Cloudflare es que Basin sea la capa de datos analíticos del edge: ingesta masiva de eventos, transformación cerca de donde se generan, y consulta desde wherever. Para equipos que ya viven en el ecosistema Workers/Logpush, esto convierte a Cloudflare en candidato serio para workloads de analítica que antes aterrizaban forzosamente en AWS o GCP.

## El contexto competitivo

Basin entra a pelear en un mercado caliente: Snowflake, BigQuery, Databricks y los lakehouses self-managed sobre Iceberg (Trino, ClickHouse, DuckDB) compiten por la misma carga de trabajo. El diferencial de Cloudflare es estructural — su red global y la política de cero egress — pero la madurez del SQL engine y el ecosistema de integraciones recién se va a probar en producción masiva. Con GA, al menos, ya se puede tomar en serio.
