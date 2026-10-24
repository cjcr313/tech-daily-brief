---
title: "OpenAI revela cómo escala 500 PB de almacenamiento para 1.000 millones de usuarios"
author: Carlos
pubDatetime: 2026-10-24T13:07:00Z
slug: openai-habitat-almacenamiento-mil-millones-usuarios
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "La segunda parte del deep dive de OpenAI sobre Habitat: el viaje circular por la multi-tenancy en Azure Cosmos DB, 20M de QPS y por qué los managed services dejan de ser managed a escala extrema."
---

![Ilustración editorial de una red global de bóvedas de almacenamiento de datos iluminadas conectadas entre regiones](../../assets/images/2026-10-24-openai-habitat-almacenamiento-mil-millones-usuarios.jpg)

OpenAI publicó la **Parte II** de su serie sobre Habitat, la plataforma de almacenamiento online que le da soporte a todos sus productos: más de **1.000 millones de usuarios**, 40 regiones geográficas y **más de 500 petabytes** de datos respondiendo en milisegundos. Y la historia es una perlita para cualquiera que opera bases de datos a escala: **el viaje circular de la multi-tenancy en Azure Cosmos DB**.

## El círculo completo: multi-tenant → single-tenant → multi-tenant

**Fase 1: confiar en los primitivos.** Al inicio, todo vivía en un contenedor multi-tenant de Cosmos DB, confiando en el límite documentado de 10K RU/s por partition key. Problema: los límites reales se aplican en la partition *física*, no la lógica. Resultado: noisy neighbors arruinando flujos críticos como login y signup, y "weak partitions" donde el throughput efectivo por partición **baja solo porque crecen los datos**, sin que cambie el tráfico.

**Fase 2: aislar todo.** La solución obvia: contenedores separados por caso de uso. Funcionó para el aislamiento, pero el capacity planning se volvió un infierno organizacional: equipos lanzando features a producción sin pre-escalar, y el equipo de plataforma sentado en salas de SEV el día del lanzamiento escalando contenedores a última hora. Con equipos de producto haciendo su propio provisioning, la calidad era... inconsistente.

**Fase 3: multi-tenancy con músculo.** Volvieron al contenedor compartido, pero esta vez con ingeniería conjunta con el equipo de Azure: **hot key throttling** (los vecinos ruidosos se frenan primero), **QoS por prioridad de request** (los bulk inserts no ahogan a los usuarios reales) y un **serverless mejorado** con splits por uso de RU, no solo por storage. Desde entonces: cero incidentes de provisioning o noisy neighbors.

## Las cifras que duelen

- Su cuenta más grande de Cosmos DB almacena **decenas de petabytes y sirve más de 20 millones de QPS**
- Según OpenAI, son **la única empresa operando Cosmos DB a esta escala**

## La lección de fondo: "managed" deja de ser managed

Lo más interesante del post es la parte humana/operacional. Un par de caídas regionales en 2024 (failovers de horas, un connection stampede que tumbó el gateway de una región completa) les mostró que a su escala, el servicio manejado requiere otra relación con el proveedor: **tests compartidos, dashboards compartidos, canales directos de ingeniería y hasta paging directo entre equipos, sin pasar por soporte**. Hoy operan y testean contra una cuenta de Cosmos DB del tamaño de producción (pero no de producción) en conjunto con Azure.

La moraleja aplica a cualquiera que escala en la nube: los managed services te dan velocidad hasta cierto punto. Después de ese punto, **tú eres parte del equipo de operaciones del proveedor**, te guste o no.

**Link original:** [Rapidly scaling online storage to serve over 1 billion ChatGPT users (Part II)](https://openai.com/index/scaling-storage-one-billion-users-part-two/)
