---
title: "OpenTelemetry y el impacto del Continuous Profiling"
pubDatetime: 2026-06-22T10:00:00Z
author: Nauta Lab
tags:
  - observabilidad
  - devops
  - arquitectura
description: "Cómo el soporte oficial para profiling está consolidando a OpenTelemetry como el rey de la observabilidad."
---

*🌐 [Read this article in English](/tech-daily-brief/posts/2026-06-22-opentelemetry-profiling-en)*

La observabilidad ha evolucionado. Ya no basta con saber *cuándo* falla algo (Métricas), *dónde* falla (Trazas) o *qué* falló (Logs). Ahora necesitamos saber exactamente *qué línea de código* causó el cuello de botella de CPU o Memoria.

### La llegada del Profiling
Con la estabilización del Continuous Profiling en OpenTelemetry, los equipos pueden correlacionar un *spike* de CPU directamente con una traza específica. Esto elimina la necesidad de tener herramientas de profiling separadas.

### Impacto en la Arquitectura
Esto permite a los arquitectos consolidar agentes. Un solo agente de OTel puede recolectar todas las señales. ¡Menos consumo de recursos y menos complejidad operativa!
