---
title: "BigQuery elimina barreras: Transferencia nativa desde Oracle, AWS y Azure hacia Iceberg"
pubDatetime: 2026-07-09T08:30:00Z
author: Nauta Lab
tags:
  - cloud
  - arquitectura
  - ia
description: "Google Cloud actualiza el BigQuery Data Transfer Service abriendo las puertas a arquitecturas multi-cloud reales basadas en formatos abiertos."
---


La guerra de los datos está migrando hacia la apertura. En las últimas notas de lanzamiento, **Google Cloud** ha anunciado mejoras masivas en el ecosistema de BigQuery, demostrando que el futuro del análisis de datos no está en tener la información encerrada en un solo proveedor.

### ¿Qué cambia en BigQuery?
1. **Ingesta Multi-Cloud directa:** El *BigQuery Data Transfer Service* ahora permite transferir datos directamente desde fuentes de almacenamiento de la competencia (Amazon S3 y Azure Blob Storage), moviéndolos sin fricción hacia tablas **BigLake Iceberg** dentro de BigQuery (actualmente en *Preview*).
2. **Conexión nativa con Oracle:** La transferencia de datos desde Oracle hacia BigQuery ha pasado a estado *Generalmente Disponible (GA)*, facilitando a las corporaciones tradicionales su migración a la analítica en la nube.
3. **Agentes de IA y BigQuery:** En una jugada de vanguardia, Google ha lanzado en *Preview* el servidor remoto *BigQuery MCP*, diseñado para permitir que agentes autónomos de IA realicen un amplio rango de tareas relacionadas con los datos directamente sobre el motor de BigQuery.

### La Era de Apache Iceberg
La adopción de tablas Iceberg confirma que la industria se ha rendido ante los formatos de tabla abiertos. Las arquitecturas de datos ya no tienen que copiar y transformar terabytes de información de manera propietaria, reduciendo drásticamente los costos de ETL (Extract, Transform, Load).

---
**Fuentes / Referencias:**
- [BigQuery Release Notes (Google Cloud Documentation)](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [Novedades en Google Cloud (Google Cloud Blog)](https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud)
