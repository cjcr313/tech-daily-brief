---
title: "Cloudflare Basin llega a GA: la plataforma de datos serverless sobre Apache Iceberg y R2 (y sin egress)"
author: Carlos
pubDatetime: 2026-10-02T03:05:00Z
slug: cloudflare-basin-plataforma-datos-serverless-ga
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "La Cloudflare Data Platform se graduó con nombre propio: Basin. Ingesta, catálogo y SQL serverless sobre Apache Iceberg y R2, sin costo de egress y con pricing por uso. Otra pieza del stack completo que Cloudflare está armando."
---

![Ilustración editorial de ríos de datos luminosos convergiendo hacia un lago cristalino formado por tablas geométricas flotantes, paleta azul profundo con acentos naranja, estilo ilustración tech editorial](../../assets/images/2026-10-02-cloudflare-basin-plataforma-datos-serverless-ga.jpg)

Durante su Birthday Week 2025, Cloudflare anunció la "Cloudflare Data Platform" en beta abierta. Ayer se graduó a **general availability** y estrenó nombre: **Cloudflare Basin**. Y no es un rename cosmético — es la apuesta de Cloudflare por comerse el stack analítico completo, con la misma receta con la que ya atacó compute (Workers), objetos (R2) y streaming de eventos (K2): **serverless, open standards y cero egress**.

## Qué es Basin (en una frase)

Una plataforma de datos analíticos construida sobre **Apache Iceberg** (el estándar abierto de table format que ya adoptaron todos) y **R2 Object Storage**, donde ingieres, catalogas y consultas datos sin administrar un solo servidor.

La familia son tres productos que ya existían en beta, ahora rebautizados y maduros:

- **Basin Pipelines** (ex Cloudflare Pipelines): recibe eventos desde Workers, HTTP o Logpush, los transforma con SQL y los escribe como tablas Iceberg o archivos en R2.
- **Basin Catalog** (ex R2 Data Catalog): gestiona los metadatos Iceberg y mantiene las tablas automáticamente (compaction, estadísticas) para que sigan rápidas y baratas a medida que crecen.
- **Basin SQL** (ex R2 SQL): motor SQL serverless y distribuido que consulta las tablas Iceberg directo en la red de Cloudflare, partiendo las queries en tareas más chicas que corren sobre Workers.

## Por qué esto importa (y no es "otro warehouse más")

Tres razones concretas:

- **Iceberg como moneda común.** Basin lee y escribe con cualquier engine compatible: PyIceberg, DuckDB, Snowflake, Spark. Tus datos no quedan presos — el formato es tuyo. Es exactamente la tesis que vimos con DuckDB embebido en Aurora PostgreSQL: el ecosistema entero se está alineando detrás de Iceberg, y Cloudflare no quiso quedar fuera.
- **Egress gratis cambia la economía.** El punto de entrada de la tesis fue ver a developers trayendo sus datos analíticos a R2 justo porque sin cargo de salida resulta práctico consultarlos desde cualquier tool, equipo, región o cloud. En data platforms tradicionales, el egress es el impuesto silencioso que te encierra.
- **Pricing por uso puro.** Pagas solo cuando Basin ingiere, procesa o consulta. Sin cargos por hora, sin infraestructura dedicada. Un proyecto hobby puede operar casi gratis, y el caso enterprise escala con la economía de siempre: la arquitectura serverless de Workers debajo.

## Adoption real, no slideware

Desde la beta se crearon **decenas de miles de Pipelines**, y los equipos internos de billing e infraestructura de Cloudflare ya corren sus propios workloads encima. Los quotes de GA traen dos casos que pegan duro:

- **Anomaly** (Dax Raad) movió el pipeline completo de la compañía a Basin, reemplazando un setup de **AWS S3 + Athena** por "una arquitectura serverless más limpia" que maneja todos sus eventos.
- **Bobsled**, plataforma de data products, destaca poder distribuir datos accesibles desde cualquier región de las plataformas de datos e IA mayores, "a producción y una fracción del costo, gracias al egress cero".

El nombre, por si te preguntabas: una cuenca es donde convergen los ríos. Pipelines trae los datos, Catalog los junta, SQL los hace consultables. Y el dato curioso que Cloudflare mismo tiró: ~20% de la tierra del planeta drena hacia cuencas endorreicas — casi el mismo porcentaje de la web que está detrás de su red.

## La jugada completa

Con Basin (datos), K2 (eventos), Containers y sandboxes (compute aislado), Workers (compute) y R2 (objetos), Cloudflare está armando un **PaaS full-stack para la era de los agentes**: apps que generan datos, agentes que los consumen, y todo sin que arques un servidor. La visión declarada del equipo es que la infraestructura de datos termine completamente abstracta — "storage formats, products y resources son detalles de implementación".

Ojo también con el timing: mientras AWS integra DuckDB en Aurora y todos los hyperscalers abrazan Iceberg, Cloudflare entra por el lado que mejor conoce — el developer que parte chico y no quiere montar Kafka, Spark ni un warehouse. La pregunta abierta es la madurez para workloads pesados de BI corporativo. Pero como punto de entrada analítico serverless con datos que son tuyos de verdad, hoy no hay mucho que se le parezca.

**Fuentes:** [Cloudflare Blog — Introducing Cloudflare Basin](https://blog.cloudflare.com/cloudflare-basin/) · [SiliconANGLE](https://siliconangle.com/2026/10/01/cloudflare-moves-into-analytics-workloads-with-a-serverless-alternative-that-doesnt-require-dedicated-servers-or-data-movement/) · [Techzine](https://www.techzine.eu/news/devops/144699/cloudflare-basin-brings-serverless-data-analysis-to-developers/)
