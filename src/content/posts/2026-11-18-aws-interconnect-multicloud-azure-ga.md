---
title: "AWS Interconnect llega a GA con Azure: el triángulo multicloud AWS–Azure–Google queda cerrado"
author: Carlos
pubDatetime: 2026-11-18T21:10:00Z
slug: aws-interconnect-multicloud-azure-ga
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "AWS Interconnect - multicloud con Azure ya está GA (Google Cloud y OCI venían antes): circuitos privados administrados entre nubes con la Connection Coordinator API como contrato común. Se acabó la era del DIY con cross-connects."
---

![AWS Interconnect llega a GA con Azure: el triángulo multicloud AWS–Azure–Google queda cerrado](../../assets/images/2026-11-18-aws-interconnect-multicloud-azure-ga.webp)

Después de años de multicloud "a la pinta", donde conectar AWS con Azure significaba pedir cross-connects físicos, configurar BGP en ambos lados y coordinar a tres equipos distintos, hoy el asunto se puso serio: **AWS Interconnect - multicloud con Microsoft Azure ya está generalmente disponible**.

## Qué salió a GA

Lo importante: **se largaron las dos mitades**. Del lado AWS, la conectividad con Azure está GA y se provisiona desde consola, CLI o API, con la misma experiencia que ya existía para Google Cloud y OCI. Del lado Microsoft, Azure también marcó GA para su conexión con AWS, con las conexiones hacia Google Cloud en public preview.

La pieza técnica clave es la **Connection Coordinator API**, la especificación abierta que hace posible esto: cada nube que se suma "se ve" igual que la anterior en el plano de control, en vez de requerir una integración artesanal por proveedor. Con Azure arriba, **el triángulo entre las tres nubes más grandes queda cerrado sobre un contrato compartido**.

## Regiones y detalles finos

Las parejas de regiones en GA:

- **us-east-1 (N. Virginia) ↔ East US**
- **eu-central-1 (Frankfurt) ↔ Germany West Central**
- **ap-southeast-2 (Sydney) ↔ Australia East**

Ojo: la preview tenía cuatro pares y la costa oeste estadounidense no aparece en la lista GA. Si tu diseño depende de US West, revisa la documentación antes de asumir. En precio, ancho de banda y SLA el anuncio dice poco: esos números viven en los docs, aunque el blog de agosto de Microsoft prometía **hasta 100 Gbps desde el día uno**.

## Google también movió ficha

El mismo día, **Google Cloud extendió su partner Cross-Cloud Interconnect a Azure en preview**, soportado en conjunto por Google y Microsoft: conexión privada de alto ancho de banda entre entornos Google Cloud y Azure, provisionada programáticamente en minutos y sin infraestructura física que administrar. Con testimonios de Nestlé y Walmart, la señal es clara: la demanda por multicloud administrado ya no es teórica.

## La lectura

Por años el multicloud fue una torre de Babel de interconexiones artesanales. Que las tres hyperscalers converjan en una especificación abierta significa que **el multicloud dejó de ser un proyecto de networking y pasó a ser un feature de consola**. Para equipos chicos sin equipo de red dedicado, esto baja una barrera enorme.

**Fuentes:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-announces-AWS-interconnect-multicloud-azure-ga/), [Simon Painter](https://www.simonpainter.com/aws-azure-interconnect-goes-ga/), [Google Cloud Blog](https://cloud.google.com/blog/products/networking/cross-cloud-interconnect-for-microsoft-azure).
