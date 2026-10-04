---
title: "Uber Eats reconstruyó su pipeline de búsqueda y partió la latencia en dos: la lección es hacer menos, no hacerlo más rápido"
author: Carlos
pubDatetime: 2026-10-04T03:10:00Z
slug: uber-eats-busqueda-latencia-50-por-ciento
featured: false
draft: false
tags:
  - Arquitectura
  - DevOps
description: "Uber cambió su métrica de latencia por 'Above-the-Fold', mató estrategias de retrieval de baja value, separó hydration de ranking y redisenñó el path de ads: -50% de latencia end-to-end en la búsqueda de Uber Eats."
---

![Ilustración editorial tech de un cronómetro optimizado junto a un pipeline de datos estilizado por donde corre a velocidad un scooter de reparto, paleta teal y naranja, sin texto](../../assets/images/2026-10-04-uber-eats-busqueda-latencia-50-por-ciento.jpg)

Uber publicó el detalle de cómo recontruyó grandes partes del pipeline de búsqueda de **Uber Eats** y logró reducir **50% la latencia end-to-end**. Y la receta no fue un rewrite con una tecnología nueva: fue una seguidilla de decisiones cuidadosas a lo largo de todo el stack.

## Primero cambió la métrica (la jugada clave)

En vez de mirar el tiempo de respuesta del backend API, Uber pasó a medir **Above-the-Fold completion**: el tiempo hasta que la primera pantalla de resultados queda renderizada **con las imágenes**. Con paginación + caching server-side y render asíncrono de los items, ahí solito se ganaron más de **200 ms**.

## Hacer menos trabajo, no hacerlo más rápido

El hallazgo más caro: se hidrataban **decenas de miles de candidatos** antes del ranking, para luego botar gran parte. Los números del despiece:

- Eliminar estrategias de retrieval de baja value: **-120 ms**
- Embeddings a nivel de producto (100x menos lookups de datos): **-50 ms**
- Separar la hydration de ranking de los datos de presentación: **-100 ms**
- Remover dependencias: **-35 ms**; request hedging: **-40 ms**
- Path de publicidad redisenñado (datos de bids columnares, acceso in-memory, menos serialización): **-130 ms**

A eso se sumaron cambios de infraestructura poco glamorosos pero efectivos: encoding paralelo, embeddings más chicos, mejor manejo de conexiones y ajustes de estructuras de datos en Go para bajar la presión del garbage collector.

## El twist agéntico

Parte de la identificación, benchmark y validación de optimizaciones se hizo con un **workflow de coding agéntico** — el propio equipo destaca el loop *Medir, Identizar, Arreglar, Validar* como modelo de optimización continua. Ingenieros que comentaron el trabajo público lo resumieron en tres principios que valen pegar en la pared: **hacer menos trabajo, empezar antes y remover dependencias**.

La lección para cualquiera operando pipelines de búsqueda o APIs pesadas: la latencia no se gana con hardware, se gana dejando de hidratar basura que ibas a descartar igual.

## Enlaces
- [Uber Engineering: Uber Eats search pipeline](https://www.uber.com/us/en/blog/uber-eats-search-pipeline/)
- [InfoQ: Uber Eats Rebuilds Search Pipeline to Cut End-to-End Latency by 50%](https://www.infoq.com/news/2026/10/uber-eats-search-latency/)
