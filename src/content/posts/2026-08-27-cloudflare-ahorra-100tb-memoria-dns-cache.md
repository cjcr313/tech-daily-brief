---
title: "Cloudflare ahorra 100 TB de memoria optimizando el cache DNS de 1.1.1.1"
author: Carlos
pubDatetime: 2026-08-27T22:00:00Z
slug: cloudflare-ahorra-100tb-memoria-dns-cache
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
  - DevOps
description: "Cinco optimizaciones en Rust recortaron 56% la memoria por entrada del cache DNS de 1.1.1.1, liberando ~100 TB en toda la flota."
---

![Ilustración de un servidor DNS optimizado con memoria liberada](../../assets/images/2026-08-27-cloudflare-ahorra-100tb-memoria-dns-cache.jpg)

Cloudflare acaba de publicar un postazo de ingeniería mostrando cómo optimizaron el cache DNS de 1.1.1.1 y ahorraron unos **100 terabytes de memoria** en toda su flota. Nada de magia: cinco cambios quirúrgicos a nivel de Rust en cómo se guardan las entradas en memoria.

## El contexto

El cache corre sobre **Big Pineapple**, la plataforma detrás de 1.1.1.1, Gateway DNS, DNS Firewall y AS112. En un momento dado, este sistema mantiene más de **250 mil millones de entradas** de cache DNS. Con ese volumen, desperdiciar un solo byte por entrada ya te cuesta más de 250 GB en toda la flota.

## Qué hicieron

Cinco ajustes sucesivos a la estructura de las entradas en memoria recortaron el footprint por entrada en más de un 50% (56% para ser exactos). El resultado neto: **~100 TB de memoria liberada**, equivalente a la RAM de 130 de sus servidores Gen 13.

Lo mejor: no fue a costa de rendimiento. Todo lo contrario:

- **+43%** de throughput de inserción
- **-19%** de latencia de lookup

Menos asignaciones y mejor localidad de memoria hicieron que ganaran espacio *y* velocidad al mismo tiempo.

## El detalle técnico

Cada entrada es un par clave-valor. La clave (`CacheKey`) y el valor (`CacheEntry`) tenían campos con overhead innecesario una vez que la entrada ya está almacenada. Ajustando tipos y el layout de esos structs lograron recortar el uso de memoria sin perder información.

Un dato interesante: los data centers con **ECS (EDNS Client Subnet)** activo son los que más se benefician, porque cachean múltiples versiones de la misma consulta según la red del cliente, inflando tanto el número de entradas como la memoria que consume cada una.

## Por qué importa

A esta escala, las optimizaciones de memoria no son vanity metrics: son plata directamente (menos servidores, menos costo) y latencia real para los usuarios. Un buen recordatorio de que el diablo —y el ahorro— está en los detalles de bajo nivel.

Fuente: [Cloudflare Blog](https://blog.cloudflare.com/dns-cache-memory-optimization-1111/)
