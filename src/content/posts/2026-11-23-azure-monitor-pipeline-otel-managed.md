---
title: "Azure Monitor pipeline: Microsoft ahora administra tu collector de OpenTelemetry"
author: "Nauta Lab"
pubDatetime: 2026-11-23T21:10:00Z
slug: azure-monitor-pipeline-otel-managed
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
  - Open Source
description: "Azure Monitor pipeline llega en preview como capa de recolección OpenTelemetry administrada: reglas centrales, mTLS automático y filtrado con KQL antes de pagar por la ingesta."
---

![Ilustración editorial de un pipeline de telemetría administrado: flujos de datos ordenados atravesando tuberías luminosas hacia un lago de dashboards](../../assets/images/azure-monitor-pipeline-otel-managed.jpg)

Instrumentaste todo con OpenTelemetry, cumpliste la parte difícil de la tarea... y te quedaste con la que nadie pone en el roadmap: operar el gateway de collectors que va entre tus apps y el backend. Microsoft escuchó ese reclamo y hoy respondió: **Azure Monitor pipeline** está en public preview como collector de OpenTelemetry administrado.

## Qué hace exactamente

La pieza recibe, procesa y exporta logs, métricas y trazas OTLP — el trabajo que hoy haces con tus propios collectors en modo gateway — pero corriendo como extensión administrada por Azure sobre clusters Kubernetes habilitados para Arc, pegada a tus workloads. Lo destacable:

- **Configuración centralizada**: las data collection rules (DCR) definen listeners, procesamiento y routing. Cambias una regla y todos los pipelines asociados se actualizan; nada de rodar configuración gateway por gateway.
- **Seguro por default**: el listener OTLP usa mTLS con certificados aprovisionados automáticamente, y la managed identity resuelve la autenticación hacia Azure Monitor.
- **Filtrar antes de pagar**: transformaciones en KQL recortan logs ruidosos antes de que salgan de tu entorno. En observabilidad, donde la factura es el enemigo público número uno, esto es carne y papas.
- **Construido para tu peor día**: almacenamiento persistente que bufferiza telemetría durante reinicios y cortes, con backfill automático cuando todo vuelve.

## Sabor open source bajo el capó

El detalle técnico más interesante es que el pipeline está construido sobre el **OpenTelemetry Arrow Dataflow Engine**, un motor en Rust desarrollado abiertamente dentro del proyecto OTel por ingenieros de F5, Microsoft y la comunidad: arquitectura thread-per-core, colas acotadas con backpressure y memory safety justamente en el componente que toca cada byte de tu telemetría.

Los datos aterrizan en las tablas nativas de OpenTelemetry en Azure Monitor (`OTelLogs`, `OTelSpans`, `OTelEvents`, `OTelResources`), listos para consultar sin traducción intermedia. Y el precio de la cañería en sí: cero. El cobro sigue siendo por el destino, no por el viaje.

La jugada es la clásica de Microsoft en esta era: en vez de empujar un SDK propietario, adopta el estándar y compite por administrarte la operación. Si tu stack ya habla OTLP no cambias nada del lado de las apps; solo apuntas el exporter a un endpoint que ahora tiene alguien más despierto de noche.

**Fuentes:** [Microsoft Tech Community](https://techcommunity.microsoft.com/blog/azureobservabilityblog/looking-for-a-managed-opentelemetry-collector-azure-monitor-pipeline-now-does-th/4576014) · [OpenTelemetry Arrow](https://github.com/open-telemetry/otel-arrow)
