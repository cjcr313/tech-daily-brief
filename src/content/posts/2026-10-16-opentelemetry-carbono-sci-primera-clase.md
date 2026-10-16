---
title: "El carbono como señal de primera clase: OpenTelemetry quiere estandarizar el SCI"
author: Carlos
pubDatetime: 2026-10-16T09:05:00Z
slug: opentelemetry-carbono-sci-primera-clase
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
  - Kubernetes
description: "La Green Software Foundation y la comunidad OpenTelemetry avanzan en convertir la intensidad de carbono del software (SCI) en una señal de observabilidad estandarizada."
---

![Ilustración de observabilidad de carbono en infraestructura cloud](../../assets/images/opentelemetry-carbono-sci-primera-clase.jpg)

Si en tu dashboard de Grafana tienes CPU, memoria, latencia y errores… pero ni una sola métrica de emisiones de CO₂, no estás solo. Ese es justamente el hueco que quiere tapar la iniciativa que presentó Diana Todea (CNCF Ambassador y maintainer de Kepler) en la keynote *Carbon as a First-Class Signal* del Observability Summit Europe 2026 en Praga: llevar el **Software Carbon Intensity (SCI)** al mundo OpenTelemetry con convenciones semánticas estandarizadas.

## ¿Qué es el SCI y por qué importa?

El SCI es una especificación de la **Green Software Foundation** que mide las emisiones de carbono asociadas a software, pero con un giro interesante: no mide emisiones totales, sino **emisiones por unidad funcional de trabajo** (una request, una transacción, un usuario).

La fórmula: **(E × I) + M, dividido por R**, donde E es la energía consumida, I la intensidad de carbono de la electricidad, M las emisiones incorporadas del hardware y R la unidad funcional.

¿Por qué es más útil así? Ejemplo simple: la versión A de una app emite 100 kg CO₂e procesando 1 millón de transacciones; la versión B emite 110 kg procesando 2 millones. B contamina más en total, pero su SCI por transacción es casi la mitad. Optimizar no es solo consumir menos: es hacer más trabajo útil por gramo de carbono.

## El problema: todos miden distinto

Ya existen herramientas — como **Kepler**, que expone métricas de energía desde Kubernetes — pero hoy cada una reporta consumo energético, intensidad eléctrica o emisiones estimadas con **nombres, unidades y granularidades distintas**. Y conectar esas cifras con un workload, servicio o deploy específico es un dolor. Justo el tipo de problema que OTel ya resolvió para traces, métricas y logs.

La iniciativa [SCI for OpenTelemetry](https://github.com/Green-Software-Foundation/sci-otel) busca representar el SCI usando **convenciones semánticas de OpenTelemetry**, definiendo un vocabulario común para energía, intensidad de carbono, emisiones incorporadas y unidades funcionales.

## Fase 1 cerrada: tres casos de uso priorizados

La Asamblea SCI-OTel ya cerró su primera fase (alcance y casos de uso) con consenso comunitario. Las prioridades:

- **1. Medir el impacto de tus cambios**: que devs, platform engineers y SREs puedan saber si un release, cambio de config o decisión de arquitectura redujo la energía/emisiones **por la misma cantidad de trabajo** — e identificar qué componente es el responsable cuando algo sube.
- **2. Comparar entre servicios y proveedores**: comparar carbono entre proveedores de infraestructura o opciones de migración, siempre que los límites de medición estén documentados (declarar una unidad funcional no garantiza que dos sistemas hagan trabajo equivalente).
- **3. Decisiones automatizadas carbon-aware**: que schedulers, autoscalers y colocación de workloads usen esta telemetría para decidir en tiempo real. Ojo: acá se necesitan pronósticos y estimaciones, y el consenso es claro en que **un forecast nunca debe presentarse igual que una medición directa**.

## Lo que viene

Las próximas fases de la Asamblea definirán el namespace SCI y la representación de energía operacional, emisiones incorporadas y unidades funcionales, para llegar a propuestas de convenciones semánticas que la comunidad OpenTelemetry pueda revisar. Importante: **aún no son convenciones oficiales de OTel** — es trabajo en progreso.

Para los equipos cloud-native que ya reportan sostenibilidad (o que ven venir regulación tipo CSRD en Europa), esto es relevante: pronto podrías tener el carbono junto a tus traces y métricas, con el mismo pipeline OTel que ya ocupas. Ese "dashboard verde" dejaría de ser un Excel aparte.

**Fuente:** [CNCF Blog](https://www.cncf.io/blog/2026/10/15/carbon-as-a-first-class-signal-bringing-software-carbon-intensity-to-opentelemetry/)
