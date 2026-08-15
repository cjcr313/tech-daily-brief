---
title: "Cloudflare migra cdnjs a su propia plataforma: 9 mil millones de peticiones al día en Workers"
author: Carlos
pubDatetime: 2026-08-15T04:00:00Z
slug: cloudflare-cdnjs-migracion-developer-platform
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "Cloudflare migró cdnjs —el CDN open source de JS/CSS usado por el 12% de los sitios web— completamente a su Developer Platform: Workers, R2, Workflows, Queues y Containers."
---

![Ilustración editorial de una red global de distribución de contenido conectando nodos en todo el mundo](../../assets/images/2026-08-15-cloudflare-cdnjs-migracion-developer-platform.jpg)

¿El mejor caso de estudio de dogfooding reciente? Cloudflare migró **cdnjs**, su CDN open source de librerías JavaScript y CSS, completamente a su propia Developer Platform. Nada de infra dedicada: todo corre sobre Workers, R2, Workflows, Queues, Durable Objects, KV y Containers.

## Los números

- **~9 mil millones de peticiones diarias**, promediando 108.000 peticiones por segundo
- Más de **330 data centers** de Cloudflare
- **98,6% de cache hit rate**
- Lo usa aproximadamente el **12% de los sitios web** del mundo

O sea, no es un demo de fin de semana: es infraestructura crítica del ecosistema web corriendo íntegramente en la plataforma de productos de Cloudflare.

## Qué cambió en la arquitectura

La infraestructura de publicación de cdnjs estaba repartida entre Cloudflare y Google Cloud Platform. Ahora todo vive en la Developer Platform, y **R2 pasó a ser la fuente de verdad** para los archivos publicados de cada paquete.

Lo mejor del asunto: la migración preservó las URLs existentes, el contenido de los paquetes y los hashes de **Subresource Integrity (SRI)**. Si tienes un `<script src>` a cdnjs en producción, no te enteraste de nada — que es exactamente como debe sentirse una migración de este calibre.

Esto además construye sobre un cambio de 2020, cuando Cloudflare ya había movido el serving de archivos a Workers y Workers KV, reemplazando máquinas de origen dedicadas para el tráfico normal.

## Por qué importa

Cuando un proveedor de plataforma corre su propio servicio masivo arriba de esa misma plataforma, tienes dos lecturas posibles: la marketing ("mira lo que puedes hacer") y la práctica ("los límites reales se prueban con 108k req/s sostenidos"). Las dos son válidas.

Para cualquiera evaluando arquitecturas serverless a escala —o buscando argumentos para convencer a la jefatura de que Workers y compañía son seria cosa— este es un antecedente de peso.

El detalle completo está en [InfoQ](https://www.infoq.com/news/2026/08/cloudflare-cdnjs-migration/).
