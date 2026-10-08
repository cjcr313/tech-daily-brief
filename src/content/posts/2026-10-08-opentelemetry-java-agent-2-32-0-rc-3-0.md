---
title: "OpenTelemetry Java agent 2.32.0: el ensayo general antes del salto a 3.0"
author: Carlos
pubDatetime: 2026-10-08T03:05:00Z
slug: opentelemetry-java-agent-2-32-0-rc-3-0
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "La versión 2.32.0 del agente Java de OpenTelemetry es el release candidate de la 3.0: convenciones semánticas estables, Kafka cambia los nombres de los spans y Zipkin desaparece en modo preview."
---

![Ilustración editorial tech de instrumentos de medición y flujos de telemetría convergiendo en un panel central luminoso, líneas de datos azul turquesa fluyendo por tubos hacia un dashboard abstracto, estilo flat profesional, sin texto](../../assets/images/2026-10-08-opentelemetry-java-agent-2-32-0-rc-3-0.jpg)

Salió el [agente Java de OpenTelemetry 2.32.0](https://www.developer-tech.com/news/opentelemetry-java-agent-2-32-0-previews-3-0-telemetry-defaults/) y no es un release más: es el **release candidate de la versión 3.0**, apuntada para octubre de 2026. La gracia es que podís previsualizar todos los cambios de convenciones y defaults *antes* de que sean el comportamiento obligatorio. Si tenís apps Java instrumentadas con el agente automático, este es el momento de probar — no cuando la 3.0 caiga de golpe en producción.

## Lo que cambia (y va a doler si no lo mirái)

**Convenciones semánticas de base de datos y código pasan a estables por defecto:**

- `db.name` → `db.namespace` (y ahora incluye el schema: `orders|public` en el ejemplo de PostgreSQL JDBC).
- `db.system: "mssql"` → `db.system.name: "microsoft.sql_server"`.
- `code.namespace` y `code.function` se consolidan en `code.function.name`.
- Las métricas de duración de connection pool **cambian de milisegundos a segundos** — ojo con las alertas y thresholds, que hay que convertirlas o van a dispararse para arriba (o para abajo).

**Kafka cambia la fisonomía de los traces:** las convenciones de messaging saltan de v1.24 a v1.43. Los spans `orders publish` / `orders receive` / `orders process` pasan a ser `send orders` / `poll orders` / `process orders`, y `messaging.operation` se parte en nombre + tipo de operación. Además cambian las relaciones de parentesco: en el modo preview, el span de proceso puede quedar hijo de un span de aplicación y solo *linkeado* al producer. Si tenís service graphs o dashboards construidos sobre la topología anterior, se van a ver distintos.

**Capture y exporters:** el preview exporta campos structured key-value de SLF4J sin configuración extra, `enduser.id` pasa a ser `user.name` (y `enduser.role` se vuelve array), mientras que **Hibernate, Hystrix y Twilio quedan apagados por defecto** y hay que rehabilitarlos explícitos. Y el golpe más directo: **el exportador Zipkin se elimina en modo preview** — las configs que lo usan pueden botar la inicialización del agente. Migración a OTLP, sin plan B.

## El método de migración (cortesía de Grafana Labs)

Jay DeLuca, de Grafana Labs, publicó un proceso sensato que vale la pena copiar:

1. **Captura telemetría baseline** con la versión actual, antes de tocar nada.
2. Activa emisión dual con `OTEL_SEMCONV_STABILITY_OPT_IN=database/dup,code/dup` y `OTEL_SEMCONV_STABILITY_PREVIEW=messaging/dup` — el agente emite atributos viejos y nuevos en simultáneo.
3. Compara **valores y unidades, no solo nombres de atributos** (el tema ms→s otra vez).
4. Recién entonces prende el paraguas completo con `OTEL_INSTRUMENTATION_COMMON_V3_PREVIEW=true`.

Un detalle fino del modo dup: los spans conservan un solo nombre y kind (el de la convención nueva), y las métricas de connection pool adoptan nombres/units nuevos incluso en dual emission. La comparación no es 1:1 en todo.

## El punto mayor

OpenTelemetry ya se graduó en CNCF y es el estándar de facto de telemetría — pero la 3.0 del agente Java es la prueba de que ser estándar no te salva del trabajo de mantención. Los atributos que hoy alimentan tus dashboards de Grafana/Datadog/lo-que-sea van a mutar de nombre y unidad, y los que no planifiquen la transición con dual emission van a descubrirlo en el peor momento: con la 3.0 estable y el pipeline silenciosamente inconsistente.

Fecha objetivo: octubre 2026. O sea, ahora mismo. A probar se ha dicho.
