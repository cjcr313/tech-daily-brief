---
title: "AWS crece 39% y DuckDB será el dialecto SQL universal de todo su stack analítico"
author: Carlos
pubDatetime: 2026-11-01T13:05:00Z
slug: aws-q3-duckdb-dialecto-sql-universal
featured: false
draft: false
tags:
  - Cloud
  - AWS
  - Bases de Datos
description: "Resultados Q3 de Amazon: AWS acelera por sexto trimestre seguido, la acción igual cae, y Jassy confirma que DuckDB será el dialecto SQL universal de storage y analytics."
---

![Ilustración editorial tech de un cubo de base de datos SQL brillante fusionándose con racks de servidores en la nube, flujos de datos unificados entre ambos, paleta azul profundo y naranja, estilo portada de revista profesional, sin texto](../../assets/images/2026-11-01-aws-q3-duckdb-dialecto-sql-universal.jpg)

Los resultados del tercer trimestre de Amazon trajeron un dato técnico que se robó la conversación más que los números: con la compra de **DuckLabs** (la empresa detrás de DuckDB, anunciada en agosto), **DuckDB se convertirá en el dialecto SQL universal de AWS Storage and Analytics**. Traducción: escribes tu query analítica una vez y la ejecutas en cualquier servicio de analytics de AWS, con — según Jassy en la llamada — **cero costos de migración o portabilidad** por primera vez en analytics.

## Los números del trimestre

- **AWS creció 39% interanual, llegando a unos US$46.000 millones** trimestrales, su sexta aceleración consecutiva.
- A Wall Street igual no le bastó: el buy-side esperaba 40%+ y la acción cayó tras el anuncio.
- La **inferencia ya representa más de la mitad del revenue de IA de AWS**, y los agentes desplegados vía **Bedrock AgentCore más que duplicaron** lo acumulado en los tres trimestres previos combinados.
- El matiz incómodo: Amazon está **financiando el build-out de IA con deuda**, y eso ya le está pasando la cuenta al mercado (más abajo enlazo la historia de los CDS).

## Qué significa el movimiento DuckDB para los equipos

Esto es lo interesante para quienes operan datos en AWS. Hoy el stack analítico es un zoológico de dialectos: Athena por acá, Redshift por allá, cada engine con sus mañas SQL. La promesa de Jassy es consolidar todo bajo el dialecto de DuckDB — un motor open source, embebido, que ya se había convertido en el estándar de facto para analytics local y que [vimos integrarse en Aurora PostgreSQL con soporte Iceberg/Parquet](/posts/2026-09-30-aurora-postgresql-duckdb-iceberg-parquet/).

El caso obvio: **portabilidad real entre engines**. El query que corres en tu laptop con DuckDB local sería el mismo que corre en el lakehouse productivo. Menos reescritura, menos glue code, menos "funciona en dev, explota en prod".

El matiz escéptico: el "dialecto universal" lo define un solo proveedor que ahora es dueño de la compañía detrás del motor. DuckDB sigue siendo open source, lo que amortigua el lock-in, pero la implementación universal con garantías será la de AWS. Historia conocida.

## El contexto que une todo

El trimestre deja una tensión clara: demanda de nube e IA acelerando más rápido que en casi cinco años, mientras el mercado empieza a cobrarle el riesgo a la deuda que financia esa expansión. Buena semana para revisar qué tan amarrado está tu stack analítico a dialectos propietarios — porque si esta jugada funciona, el SQL portable se vuelve el default, no la excepción.

**Fuentes:** [comunicado de resultados de Amazon](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/default.aspx), [The Stack — 7 takeaways de los earnings](https://www.thestack.technology/from-bedrock-to-duckdb-to-leo-7-key-takeaways-from-amazons-earnings/), [CNBC](https://www.cnbc.com/2026/10/30/amazon-earnings-analysts-stock.html).
