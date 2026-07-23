---
title: "Bloomberg metió 48 ingenieros a OpenTelemetry por 10 semanas: 118 PRs y lecciones para el open source"
author: Carlos
pubDatetime: 2026-07-23T22:00:00Z
slug: bloomberg-opentelemetry-cohort-118-prs-graduated
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "El CNCF y Bloomberg ejecutaron un cohort de 10 semanas con 48 ingenieros en OpenTelemetry. 118 PRs, 70 mergeeados, 842 horas voluntarias."
---

El CNCF, el proyecto OpenTelemetry y el Open Source Program Office de Bloomberg publicaron hoy los resultados de un **cohort estructurado de contribuidores** que ejecutaron entre abril y junio de 2026. Los números son notables.

## Resultados del cohort

- **48 ingenieros** de Bloomberg participaron (la mayoría sin experiencia previa en open source)
- **118 pull requests** enviadas al ecosistema OpenTelemetry
- **70 PRs mergeeadas** — aceptadas por maintainers de la comunidad global
- **842 horas voluntarias** registradas
- **11 repositorios** tocados: Collector, Python SDK, Go SDK, Rust SDK, Erlang SDK, OTel Demo, opentelemetry.io, instrumentation libraries, Ecosystem Explorer, y más

## El trabajo que se hizo

El cohort no fue de "fix de typos". Se metieron en mantenimiento de alta palanca — exactamente el tipo de trabajo donde los maintainers no tienen bandwidth.

**Caso destacado**: Florian Bourgey del Quant Research team de Bloomberg hizo una campaña sistemática de renombrado de atributos de telemetría en el OTel Demo. Envió **23 PRs — todas mergeeadas** — que estandarizaron el naming de atributos across todo el proyecto (issue #3267). Al final del cohort era el **contribuidor #2 más prolífico** del OTel Demo.

Esto es relevante porque el rename de atributos es exactamente el tipo de trabajo tedioso, de alta precisión y bajo glamour que los maintainers nunca tienen tiempo de hacer, pero que mejora la calidad del proyecto entero.

## Contexto: OTel ya es graduated

Durante el cohort, OpenTelemetry alcanzó **estatus Graduated en el CNCF** (mayo 2026), colocándolo al mismo nivel que Kubernetes como uno de los proyectos open source más confiables del mundo. Todos los major platforms (Datadog, New Relic, Dynatrace, Grafana, Elastic) ya soportan ingestión OTLP.

## ¿Por qué importa para la comunidad?

La conclusión del CNCF y Bloomberg es que este modelo de **cohorts estructurados** funciona mejor que los hackathones tradicionales o los programas de "open source day". La diferencia:

1. **Duración**: 10 semanas, no un día. Tiempo para que los ingenieros entiendan el proyecto.
2. **Mentoría structurada**: no se lanzó a la gente al vacío.
3. **Trabajo real**: no era educativo — era maintenance que el proyecto necesitaba.
4. **Escala**: 48 ingenieros en paralelo, no uno a la vez.

Es un playbook replicable. Si tu empresa usa OpenTelemetry (y probablemente sí), un programa así genera goodwill, entrenamiento interno y mejoras concretas al stack de observabilidad que usas todos los días.

---

*Fuente: CNCF Blog — "Sustaining OpenTelemetry: What a 10-week contributor cohort actually looks like"*
