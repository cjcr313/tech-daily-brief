---
title: "Cloudflare ahorra 100 TB de RAM optimizando la caché DNS de 1.1.1.1"
author: Carlos
pubDatetime: 2026-09-23T15:00:00Z
slug: cloudflare-ahorra-100tb-ram-cache-dns-1111
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - Performance
description: "Cinco optimizaciones en Rust recortaron en 56% la huella de memoria por entrada del resolver 1.1.1.1 y liberaron ~100 TB a nivel global."
---

![Ilustración de una caché DNS compacta: bloques de memoria apilados que se encogen y liberan espacio, con el resolutor 1.1.1.1 al centro](../../assets/images/2026-09-23-cloudflare-ahorra-100tb-ram-cache-dns-1111.jpg)

Cloudflare acaba de publicar un post de esos que dan gusto: **ahorraron 100 terabytes de RAM** optimizando cómo guardan las entradas en la caché DNS de **1.1.1.1**. Nada de hardware nuevo, puro trabajo fino de representación de datos en Rust.

## El contexto: Big Pineapple a escala brutal

Todo corre sobre **Big Pineapple**, la plataforma detrás de 1.1.1.1, Gateway DNS, DNS Firewall y AS112. En cualquier momento guarda **más de 250 mil millones de entradas** de caché DNS. A esa escala, desperdiciar un solo byte por entrada cuesta más de 250 GB de memoria en toda la flota.

## Cinco cambios, una idea

El equipo aplicó cinco optimizaciones sucesivas a cómo se guarda cada entrada en memoria. El resultado: la huella por entrada cayó de **953 a 420 bytes**, un **56% menos**, lo que se traduce en ~100 TB de RAM liberada a nivel global (equivalente a la RAM de unos 130 de sus servidores Gen 13).

Entre los trucos:

- Reemplazar `Vec` y `String` por `Box<[T]>` y `Box<str>` para datos que no cambian después de insertar: 64 bytes menos por entrada y más de 15 TB ahorrados.
- Combinar los registros de answer, authority y additional en una sola lista con offsets compactos.
- Empaquetar booleanos en `bitflags` y omitir los owner names que coinciden con el dominio consultado (se reconstruyen desde la clave).
- El desafío más grande fueron los `enum` de Rust: boxear las variantes grandes agregaba indirección y mataba la localidad de memoria. La solución final guarda los datos en un **buffer contiguo en formato DNS wire**, eliminando el enum y la sobrecarga de asignaciones por registro.

## Más rápido, no solo más flaco

La optimización no fue solo cosmética: el **throughput de inserción subió 43%** y la **latencia de lookup bajó 19%**. Y de paso, Cloudflare puede meter más capacidad de caché sin agregar memoria.

Un comentarista de Reddit resumió bien el tradeoff: estos trucos de memoria solo pagan a la escala de Cloudflare; en volúmenes chicos, la indirección extra de boxear variantes puede perjudicar más la localidad de caché que lo que ayuda.

La lección de fondo: en infraestructura de este calibre, **los bytes cuentan**, y una serie de micro-optimizaciones bien pensadas suman más que comprar fierro.
