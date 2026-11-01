---
title: "Cloudflare Observability pasa a cobro por uso desde el 1 de diciembre: logs y trazas bajo un solo modelo"
author: Carlos
pubDatetime: 2026-11-01T21:00:00Z
slug: cloudflare-observability-pricing-por-uso-diciembre
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "Desde el 1 de diciembre Cloudflare unifica el precio de todos sus logs y trazas: 50 GB de ingesta incluidos en planes pagados y $0,25 por GB extra. Se acabó el cobro por evento."
---

![Ilustración editorial tech de un medidor de flujo de datos con corrientes de logs y trazas entrando a un solo contenedor de medición unificado, estilo geométrico minimalista, paleta naranja y azul profundo, profesional, sin texto](../../assets/images/cloudflare-observability-pricing-por-uso-diciembre.jpg)

Cloudflare confirmó que desde el **1 de diciembre de 2026 todos sus logs y trazas usan el mismo modelo de precios**: cobro por GB ingerido y GB-mes almacenado, reemplazando el esquema por cantidad de eventos. La documentación oficial ya está publicada y el cambio es automático — nadie tiene que hacer nada, salvo revisar su factura.

## Los números, sin vueltas

- **Free:** 0,5 GB de ingesta al día con retención de 7 días. Al llegar al tope, Cloudflare simplemente deja de ingerir hasta las 00:00 UTC.
- **Planes pagados:** 50 GB de ingesta y 10 GB-mes de almacenamiento incluidos por ciclo; el excedente se cobra a **$0,25 por GB ingerido** y **$0,10 por GB-mes**.
- **Log Explorer (legacy)** queda aparte: $1 por GB, retención de 30 días, y no consume los allowances compartidos.

El ejemplo de la propia documentación: una cuenta paid que ingiere 75 GB y almacena 20 GB-mes paga $6,25 de ingesta + $1 de almacenamiento = **$7,25**. Nada mal comparado con lo que cuesta el mismo volumen en herramientas tradicionales.

## Qué entra al pool común

La parte interesante es la lista de productos que comparten allowances a nivel de cuenta: **Workers Logs, Workers Traces, Cloudflare Traces, logs de Containers, R2 Data Access Logs, AI Gateway logs e Issues**. O sea, la telemetría de casi toda la plataforma developer converge a un solo medidor. Queries, dashboards, alerts y analytics no tienen costo adicional.

Ojos con los detalles finos:

- La ingesta se mide **pre-compresión** e incluye el cuerpo del evento más los atributos enriquecidos y custom.
- Ingesta y almacenamiento son **medidores separados** — el saldo de uno no compensa al otro, y los allowances no se arrastran al ciclo siguiente.
- Enterprise migra **al renovar contrato**, no el 1 de diciembre.
- El uso anterior al 1 de diciembre no se cobra retroactivamente.

## Por qué importa

Esto es Cloudflare metiéndose de lleno a la pelea del costo de observabilidad, donde Datadog, Dynatrace y compañía son históricamente criticados por sus facturas sorpresa. Con **$0,25/GB todo-incluido** (queries y alertas gratis) más retención configurable de 30/90/365 días en camino, la propuesta es directa: telemetría de plataforma a precio de commodity.

Para equipos que ya corren Workers o Containers en Cloudflare, se vuelve serio candidato a ser la capa de observabilidad por defecto. Para los demás, es otra señal de que el pricing por evento está muerto y el futuro es el GB ingerido — conviene hacer las cuentas antes de que llegue diciembre.

**Fuentes:** [Cloudflare Docs — Observability Pricing](https://developers.cloudflare.com/observability/pricing/), [Workers Logs → Cloudflare Observability pricing (DeepInspect)](https://www.deepinspect.ai/blog/cloudflare-ai-gateway-pricing).
