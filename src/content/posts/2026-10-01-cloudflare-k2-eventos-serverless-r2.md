---
title: "Cloudflare K2: event streaming serverless construido sobre R2, sin Kafka ni brokers que administrar"
author: Carlos
pubDatetime: 2026-10-01T15:16:00Z
slug: cloudflare-k2-eventos-serverless-r2
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "Cloudflare lanzó K2 en beta pública: un log de eventos durable, ordenado y particionado que corre sobre R2. Kafka-style, pero serverless y pensado para el edge."
---

![Ilustración editorial de flujos de eventos luminosos convergiendo en un log ordenado dentro de contenedores de almacenamiento en la nube, paleta naranja y azul eléctrico](../../assets/images/2026-10-01-cloudflare-k2-eventos-serverless-r2.jpg)

Birthday Week sigue y Cloudflare sacó hoy una pieza de infraestructura que va a hacer ruido en el mundo DevOps: **K2, un servicio de event streaming serverless en beta pública**. La idea es el clásico problema de desacoplar productores y consumidores: mandas eventos a un stream, quedan almacenados como **log ordenado y durable**, y cada consumidor lee a su pacer — repartiendo lecturas entre un grupo de consumidores o entregando todo a todos.

## Kafka-style, pero sin el cluster

La parte interesante es la arquitectura. K2 **no usa brokers tradicionales: el log particionado está construido directamente sobre R2**, el object storage de Cloudflare.

¿Por qué? Porque Pipelines (el producto de stream processing con motor Arroyo) corre en el edge de Cloudflare — más de 335 ciudades — donde las máquinas son slices pequeños y efímeros y la red suele ser Internet pública. **Correr Kafka ahí es directamente inviable**, así que rediseñaron el problema: delegan replicación y consenso a R2 (11 nueves de durabilidad, APIs fuertemente consistentes), y la capa de aplicación queda radicalmente más simple.

El truco técnico: R2 no soporta appends (la operación natural de un log), entonces K2 acumula escrituras en memoria en un edge service y baja **segmentos completos** a R2. Los offsets estrictamente incrementales se logran con operaciones atómicas de R2, sin servicio de coordinación aparte. Bonus: compute y storage quedan separados, con escala independiente y retención larga a bajo costo.

## El trade-off honesto

Escribir a object storage es más lento que a disco local, así que **las latencias de producción son más altas** que en un cluster de Kafka dedicado. No es un reemplazo drop-in para casos de latencia ultra baja; es un buffer durable y masivo para movimiento de datos y retención de largo plazo, donde ningún consumidor caído significa pérdida de eventos.

## La tanda del día

K2 no vino solo: hoy Cloudflare también dejó en GA **Basin** (su plataforma de datos serverless y abierta), lanzó **KV Instant** sobre Quicksilver, presentó **Cloudflare OS** como workspace de agentes empresarial y hasta tiró el guante para construir "la próxima plataforma de Git" sobre su Developer Platform. Semana de cumpleaños en todas sus dimensiones.

Fuentes: [Cloudflare Blog — Announcing Cloudflare K2](https://blog.cloudflare.com/cloudflare-k2-streams/), [Cloudflare Blog](https://blog.cloudflare.com/).

### Update: 10 de octubre de 2026 — La beta habla: latencia real, precios y la pelea del object storage

Una semana después del lanzamiento, [InfoQ recapituló](https://www.infoq.com/news/2026/10/cloudflare-k2-serverless-streams/) cómo va la beta pública, y la conversación en Hacker News dejó datos jugosos:

- **La latencia real es mayor a la prometida.** Cloudflare habla de ~1 segundo p99 en *produce*, pero un tester de la beta reportó entrega end-to-end de **p95 2,5s y p99 7,5s**. El propio equipo reconoció que la **Consume API** tiene trabajo pendiente de rendimiento, con mejoras prometidas "en aproximadamente una semana".
- **Precios confirmados**: US$0,04/GB producidos + **US$0,04/GB consumidos** (ojo: el fan-out de consumidores puede encarecer esto rápido), y retención a US$0,02/GB/mes. Nada se cobra durante la beta.
- **El tech lead de K2** (que participó del thread de HN) confirmó la tesis de fondo: todo sistema de datos que no necesite latencia sub-100ms está migrando a object storage, y su equipo trabaja pegado al equipo de R2 para co-evolucionar ambos productos.
- **La competencia respondió**: un engineer de s2.dev (streaming rival sobre el mismo patrón) alegó que con procesos stateful y tiers rápidos tipo S3 Express se puede bajar a ~50ms p99 sin arruinar la unit economics. También salieron las comparaciones con AutoMQ, WarpStream y los topics diskless de Kafka.

La conclusión práctica se mantiene: K2 no es para latencia baja, es un buffer durable y barato. Pero ahora con números de producción reales sobre la mesa.
