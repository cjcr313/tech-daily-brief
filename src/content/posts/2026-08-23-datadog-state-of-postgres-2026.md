---
title: "Datadog 'State of Postgres': 60% de las organizaciones ya corren Postgres en producción y la IA acelera la toma"
author: Carlos
pubDatetime: 2026-08-23T16:05:00Z
slug: datadog-state-of-postgres-2026
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "La telemetría de decenas de miles de bases productivas confirma que 'Postgres for everything' dejó de ser meme: 60% de adopción, Python y Node pasando a Java, y pgvector como la extensión que más crece."
---

![Ilustración editorial de un elefante de base de datos conectando servicios en la nube](../../assets/images/2026-08-23-datadog-state-of-postgres-2026.jpg)

Datadog publicó su informe **State of Postgres**, construido sobre telemetría real de decenas de miles de bases de datos productivas de sus clientes. Y el dato headline no es marketing: **la fracción de organizaciones con al menos una instancia de Postgres en producción creció de 54% a 60% entre julio 2024 y mayo de este año**, consolidándolo como la base transaccional más usada con ventaja creciente sobre MySQL y MongoDB.

## Los números que importan

- **La nube se come el deployment:** 65% de las organizaciones con Postgres productivo tienen al menos una instancia cloud (venían de 62% en junio 2025), mientras el self-hosted cayó de 47,6% a 44,6%.
- **Python y Node.js pasaron a Java:** ~20% de las organizaciones acceden a Postgres desde Python y 17% desde Node.js, con crecimientos de 33% y 20% en dos años respectivamente. Datadog proyecta que la brecha sigue ampliándose, en parte porque los asistentes de código con IA **scaffoldean por defecto con Postgres** cuando generan aplicaciones nuevas.
- **Extensiones por todos lados:** la mitad de las instancias productivas corren al menos una extensión no incluida en el core. **pg_cron** lidera con 17% (scheduling dentro de la base), **postgis** sigue fuerte con 8%, y el resto del top 10 es puro management operacional: pgaudit, pg_repack, pg_partman, hypopg, pglogical.

## El guiño de la IA

La extensión de mayor crecimiento es **pgvector**, que convierte Postgres en un vector store viable para aplicaciones de IA. Conecta perfecto con lo que veníamos comentando por acá: el boom de agentes y RAG está empujando a los equipos a no agregar otra base especializada si Postgres ya está en el stack. "Postgres for everything" dejó de ser chiste de arquitecto para ser una estrategia de simplificación real.

## La letra chica incómoda

El informe también detecta oportunidades generalizadas de mejora: optimizaciones del **lado de la aplicación** que los equipos ignoran, configuraciones de **timeout** mal puestas y **tipos de índices** subóptimos. O sea, el clásico: la base crece más rápido que la madurez operacional alrededor de ella.

Para los equipos decidiendo stack este año, el reporte es un argumento duro a favor de no over-engineering: Postgres, con sus extensiones, cubre transaccional, geo, jobs y vectores. Y para los que ya lo corren, la lectura fina de timeouts e índices es ganancia gratis.

> **Fuente:** [Datadog - State of Postgres](https://www.datadoghq.com/state-of-postgres/)
