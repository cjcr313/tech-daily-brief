---
title: "Grafana 13 llega con Git Sync: tus dashboards ahora viven en Git"
author: Carlos
pubDatetime: 2026-08-08T18:00:00Z
slug: grafana-13-git-sync-dashboards-como-codigo
featured: false
draft: false
tags:
  - Observabilidad
  - DevOps
description: "Grafana 13 trae Git Sync bidireccional, Dynamic Dashboards, Saved Queries y templates. Dashboards as code finalmente easy mode."
---

![Grafana 13 Git Sync dashboards](../../assets/images/2026-08-08-grafana-13-git-sync-dashboards-como-codigo.jpg)

Grafana 13 llegó y la feature que todos estaban esperando está acá: **Git Sync**. Sí, tus dashboards finalmente pueden vivir en un repo de Git con sincronización bidireccional. Dashboards as code de verdad, no con scripts hacky de export/import.

## ¿Qué trae Grafana 13?

### 🔀 Git Sync bidireccional

Esta es la estrella del show. Los dashboards se almacenan como **archivos JSON en un repositorio Git**, y los cambios fluyen en ambas direcciones:

- **Grafana → Git**: cambios hechos en la UI se commitean automáticamente al repo
- **Git → Grafana**: cambios en el repo se sincronizan a Grafana

¿Por qué importa? Porque finalmente puedes:
- **Versionar** cambios de dashboards con source control
- **Reviewar** actualizaciones via pull requests
- **Integrar** deploy de dashboards en pipelines CI/CD
- **Colaborar** en desarrollo de dashboards con workflows Git estándar

La configuración se hace desde la UI de Grafana, con autenticación via **GitHub App** o **Personal Access Token**. Para los teams que ya tienen infraestructura como código, esto encaja naturalmente.

### 📊 Dynamic Dashboards

Dashboards más inteligentes que se pueden reutilizar y adaptar dinámicamente. Menos duplicación, más consistencia entre entornos.

### 💾 Saved Queries

Consultas reutilizables. Una sola query, múltiples dashboards. Si cambiás una métrica o label, se actualiza en todos lados. Adiós al copy-paste de PromQL.

### 🎨 Dashboard Templates

Plantillas para estandarizar la creación de dashboards across teams. Útil para organizaciones grandes que necesitan consistencia.

## El cambio en Prometheus data source

Ojo con esto: **a partir de Grafana 13, la autenticación de Azure ya no es soportada en el datasource estándar de Prometheus open-source**. En su lugar, se usa exclusivamente a través del plugin de **Azure Monitor Managed Service for Prometheus**.

Los dashboards existentes siguen funcionando sin cambios. La compatibilidad visual se mantiene. Pero la autenticación de Azure para Prometheus ahora vive en el plugin dedicado.

## Disponibilidad

- **Azure Managed Grafana** ya soporta Grafana 13 desde hoy
- **AWS Managed Grafana** debería seguir pronto
- **Grafana Cloud** y self-hosted probablemente con la release oficial de Grafana Labs

## Por qué importa

Git Sync es una de esas features que parecen obvias pero que nadie había implementado bien. Los teams de platform engineering llevan años pidiendo tratar dashboards como código de primera clase — no como artefactos exportados, sino como ciudadanos de pleno derecho en el repo.

Si combine esto con Saved Queries y Dynamic Dashboards, Grafana 13 es la versión más orientada a **escala organizacional** hasta la fecha. Ya no es solo "hazte un dashboard bonito" — es "gestiona observabilidad como un engineering practice de verdad".
