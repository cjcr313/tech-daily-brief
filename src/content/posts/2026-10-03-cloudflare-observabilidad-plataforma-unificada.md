---
title: "Cloudflare unifica su observabilidad: 8 cambios que juntan logs, trazas, alertas y dashboards en una sola plataforma"
author: Carlos
pubDatetime: 2026-10-03T15:35:00Z
slug: cloudflare-observabilidad-plataforma-unificada
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "Cloudflare lanzó 8 actualizaciones que consolidan logs, tracing extremo a extremo, SQL unificado, alertas, dashboards y exportación en una sola plataforma de observabilidad, con pricing por volumen."
---

![Ilustración editorial tech de una plataforma unificada de observabilidad: paneles de control con gráficos, trazas y logs convergiendo en un solo tablero central sobre un mapa de red global, paleta naranja y azul oscura, estilo ilustración editorial profesional](../../assets/images/2026-10-03-cloudflare-observabilidad-plataforma-unificada.jpg)

Cloudflare dio un paso largo hacia consolidar su historia de observabilidad: **ocho actualizaciones mayores** que reúnen logs, trazas, analítica, alertas, dashboards, querying y exportación de telemetría en **una sola plataforma**, con pricing más simple y predecible.

El diagnóstico de fondo es conocido por cualquiera que haya debugueado en su edge: entender un problema suele requerir datos de más de un producto Cloudflare, pero hoy hay que saber qué producto es dueño de cada señal y cómo consultarla. Un spike de 5xx puede venir de un Worker, del origen o de un fallo de conexión regional — y hoy investigarlo es un tour por consolas distintas.

## Los 8 lanzamientos

1. **Un solo lugar para explorar logs**: nuevo *Logs home* que combina Workers Observability con logs del resto de los productos Cloudflare.
2. **Tracing extremo a extremo (open beta)**: trazas de requests desde el edge hasta tu origen, a través de toda la plataforma.
3. **Una API SQL unificada**: consulta todos los datos Cloudflare desde una sola SQL API — pensada también para que **tu agente de IA consulte la observabilidad** por ti.
4. **Un solo pricing**: suscripción unificada de observabilidad para logs y trazas ingeridos/almacenados (detalle abajo).
5. **Alertas custom en beta**: configurables sobre tus datos de observabilidad.
6. **Analítica del dominio en un lugar**: 30 días de retención.
7. **Dashboards custom**: construidos desde tus datos de observabilidad.
8. **Logpush en self-serve**: exportación de datos disponible en todos los planes self-serve.

## El pricing nuevo, en tabla

Desde el **1 de diciembre de 2026**, el modelo pasa a basarse en **volumen ingerido y almacenado** (no en conteo de eventos), cubriendo logs de la Developer Platform —Workers, Containers, AI Gateway— y toda la data de tracing:

- **Free**: 0,5 GB/día de ingesta, 7 días de retención, sin uso adicional.
- **Paid/Enterprise**: 50 GB de ingesta + 10 GB-mes de storage por ciclo incluidos, retención hasta 1 año (pronto); extra a **US$0,25/GB ingerido** y **US$0,10/GB-mes almacenado**.

## Por qué importa

Cloudflare viene armando una plataforma completa para el desarrollo agéntico (K2, Basin, containers, sandboxes) y la observabilidad era el eslabón suelto: señales dispersas por producto. Unificar logs + trazas + una SQL API consulta-para-agentes apunta al mismo patrón que ya vimos en NETSCOUT o Grafana con MCP: **la observabilidad del futuro se consulta también con agentes, no solo con dashboards**. Y el pricing por volumen —con 0,5 GB gratis para todos— baja la barrera de entrada para equipos chicos.

La promesa es que en los próximos meses más productos y datasets se sumen a esta plataforma compartida. Con Datadog, Dynatrace y Grafana peleando el mismo terreno, la consolidación del edge como plataforma de observabilidad de punta a punta recién está empezando.

**Fuente:** [Cloudflare Blog](https://blog.cloudflare.com/one-observability-platform/)
