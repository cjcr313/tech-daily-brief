---
title: "DuckDB embebido en Aurora PostgreSQL: consulta Iceberg y Parquet directo desde tu base operacional"
author: Carlos
pubDatetime: 2026-09-30T21:05:00Z
slug: aurora-postgresql-duckdb-iceberg-parquet
featured: false
draft: false
tags:
  - Cloud
  - Datos
description: "Aurora PostgreSQL ahora consulta Apache Iceberg y Parquet en S3 sin ETL, gracias a DuckDB embebido dentro del motor: datos operacionales y data lake en una sola query con sintaxis PostgreSQL."
---

![Ilustración editorial de un cilindro de base de datos junto a un lago con icebergs de capas de datos, consultas fluyendo como líneas de luz entre ambos sin tuberías, paleta turquesa y azul noche, estilo ilustración tech, sin texto](../../assets/images/2026-09-30-aurora-postgresql-duckdb-iceberg-parquet.jpg)

Esta es de esas que marca tendencia: **Aurora PostgreSQL ahora puede consultar directamente datos en Apache Iceberg y Parquet** en tu data lake (S3, S3 Tables y catálogos compatibles con Iceberg REST Catalog, incluido AWS Glue), usando tus mismas aplicaciones, herramientas y sintaxis PostgreSQL. Sin ETL, sin duplicar datos, sin pipelines reverse-ETL para sincronizar histórico con operacional.

## La pieza clave: DuckDB adentro del motor

Acá viene lo interesante: la implementación es **DuckDB embebido directamente dentro de Aurora PostgreSQL**. Si recuerdan, DuckLabs —el equipo detrás de DuckDB— se unió a Amazon hace unas semanas, y esta es la primera muestra concreta de esa integración. El query processing queda dentro de Aurora, sin saltos de red adicionales, y puedes combinar datos operacionales en vivo (incluyendo escrituras no commiteadas) con el data lake en una sola query.

AWS además deja caer que las mejoras futuras del engine open source seguirán llegando a Aurora y otros servicios. Traducción: DuckDB se está transformando en el motor analítico embebido de facto de la nube.

## Cómo se activa

- Disponible en **Aurora PostgreSQL 17.11+ y 18.6+**.
- IAM role con la feature `AuroraAnalytics` (es lo que da acceso a S3 y Glue Data Catalog).
- Habilitar la extensión `aurora_analytics` y crear foreign tables apuntando a tus datos Iceberg/Parquet. De ahí en adelante, SELECT y JOIN como si fuera otra tabla más.

Los casos de uso que menciona AWS son bastante reales: dashboards en tiempo real que mezclan transaccional con histórico, enriquecer transacciones con contexto archivado, y — la más del momento — **agentes de IA que razonan sobre datos vivos y archivados a la vez**, donde es imposible predecir y pre-replicar cada dataset que el agente podría necesitar.

**El punto:** otro muro entre lo operacional y lo analítico acaba de caer. La saga zero-ETL sigue comiéndose el mundo, y con DuckDB embebido en servicios gestionados, la pregunta "¿ETL o query directa?" ya tiene respuesta obvia en cada vez más escenarios.

**Fuentes:** [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/)
