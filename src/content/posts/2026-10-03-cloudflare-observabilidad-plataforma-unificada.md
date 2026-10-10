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

### Update: 10 de octubre, 2026 — Traces convierte el proxy completo en spans de OpenTelemetry

La beta abierta de Tracing que anunciábamos en el punto 2 ya tiene detalles técnicos completos, y son más jugosos de lo que sonaba: **todo el camino del request a través del proxy ahora se exporta como spans OTel**, sin escribir una línea de instrumentación.

- **Spans para lo que antes era caja negra**: reglas de seguridad, transform rules, decisiones de caché, routing, ejecución de Workers y manejo del origen aparecen con su timing, resultado y atributos en una sola línea de tiempo por request. Responde las preguntas que generan tickets: ¿qué regla bloqueó el request?, ¿un transform reescribió la URL antes de llegar a la app?, ¿dónde se fue el tiempo? (su ejemplo: un cache miss donde 527 ms de un request de 539 ms se fueron en el origen).
- **Propagación de contexto W3C**: Traces acepta el header `traceparent` entrante (con política de propagación configurable, porque aceptar trace IDs de cualquier cliente abre la puerta al ruido) y puede reenviar uno nuevo al origen para que tus servicios instrumentados continúen la traza.
- **Sampling con el mismo rules engine** del resto de Cloudflare: un baseline (ej. 1%) y **Trace Rules** que lo pisan por hostname, IP, header, path o geografía — trazar el 100% del tráfico de un solo cliente o de un header de debug temporal mientras el resto queda en baseline.
- **Export por OTLP** a cualquier backend compatible (Datadog, Grafana, Honeycomb, lo que sea), con destino a nivel de cuenta y elección de dominios por enviar.
- **Ángulo agéntico**: vía el MCP server de observabilidad de Cloudflare, un coding agent consulta trazas con la SQL API y compara trazas fallidas contra exitosas para encontrar dónde divergen — telemetría que lee un agente, no solo un dashboard.
- **Pricing**: confirma el cambio que detallamos arriba — el modelo por span que iba a partir el 1 de octubre se reemplaza desde el **1 de diciembre** por cobro por volumen ingerido y retenido.

Con esto, el "eslabón suelto" del que hablábamos queda bastante más apretado: la vista edge-to-origin completa, portable vía OpenTelemetry, y conectable a tu backend de observabilidad existente.

**Fuentes:** [InfoQ](https://www.infoq.com/news/2026/10/cloudflare-traces-open-beta/) · [Cloudflare Blog — Cloudflare Tracing](https://blog.cloudflare.com/cloudflare-tracing/)
