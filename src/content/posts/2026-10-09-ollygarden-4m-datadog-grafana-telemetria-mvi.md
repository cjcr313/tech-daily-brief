---
title: "OllyGarden levanta US$4M con Datadog, Grafana Labs y Dash0 detrás: la apuesta es limpiar la telemetría antes de que llegue a tu backend"
author: Carlos
pubDatetime: 2026-10-09T09:05:00Z
slug: ollygarden-4m-datadog-grafana-telemetria-mvi
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "La startup berlinesa OllyGarden cerró US$4M con inversiones estratégicas de Datadog, Grafana Labs y Dash0. Su misión: eliminar la telemetría basura (cada vez más generada por IA) directo en el código, y de yapa lanzó Minimum Viable Instrumentation."
---

![Ilustración editorial tech de un jardín de datos donde flujos de telemetría ordenados son podados y filtrados antes de llegar a un backend de observabilidad, con herramientas de jardinero digitales, estilo ilustración editorial profesional en tonos verdes y azules](../../assets/images/2026-10-09-ollygarden-4m-datadog-grafana-telemetria-mvi.jpg)

Si tres de los jugadores más grandes de observabilidad ponen plata en la misma startup pequeña, es porque ven un problema que les está pasando la cuenta a todos: **la telemetría basura**. OllyGarden, startup de Berlín, anunció hoy un round de **US$4 millones** liderado por Next Frontier Capital, Grand Ventures y ACTAI Ventures, con DIG Ventures repitiendo, y — acá lo interesante — **inversiones estratégicas de Datadog, Grafana Labs y Dash0**.

## El problema: más instrumentación no es mejor instrumentación

El pitch de OllyGarden suena contraintuitivo en la era del "instrumenta todo": su plataforma **evalúa continuamente la calidad de la telemetría, detecta lo que está mal o sobrando, y convierte esos hallazgos en fixes en el código fuente**, antes de que los datos lleguen a cualquier backend de observabilidad.

¿Por qué importa? Porque con el auge del código generado por IA, el volumen de telemetría se disparó — y mucha es ruido que encarece storage y procesamiento, y encima **esconde la información crítica entre basura**. Los números que muestra la empresa no son menores: en el último año han ayudado a clientes a reducir volúmenes de logs hasta en un **85%**.

Su fundador, **Juraci Paixão Kröhling** (nombre conocido del ecosistema OpenTelemetry, ojo), lo resume claro:

> "Más instrumentación no es mejor instrumentación. Se trata de mostrar solo la información útil y accionable: ni más, ni menos."

## La novedad: Minimum Viable Instrumentation (MVI)

Junto con el anuncio del financiamiento, OllyGarden lanzó **Minimum Viable Instrumentation**, una nueva capacidad de su "AI OpenTelemetry Engineer" llamado **Rose**:

- Antes, Rose solo analizaba instrumentación existente y recomendaba mejoras.
- Ahora, con MVI, **detecta dónde falta instrumentación** y guía cómo establecer un baseline mínimo.
- El objetivo: prácticas de instrumentación consistentes entre equipos, repos y pull requests, sin generar datos innecesarios.

## Por qué esto es una señal de mercado

- **Los backends de observabilidad están internalizando el problema del "garbage in".** Datadog, Grafana y Dash0 invirtieron estratégicamente: les conviene que la calidad se arregle aguas arriba, porque el ruido les costará (a ellos y a sus clientes) storage, ingest y confianza.
- **El código generado por IA cambió la ecuación.** Si un agente te escupe 10.000 líneas, también te puede escupir 10.000 logs inútiles. La telemetría mínima y de calidad pasa de "nice to have" a necesidad económica.
- **OpenTelemetry como pegamento.** Todo el stack de OllyGarden se construye sobre OTel, el estándar de facto, lo que lo hace agnóstico del backend que uses después.

En resumen: la observabilidad está pasando de "recolectar todo lo que se pueda" a **"recolectar solo lo que sirve"**. Y con los grandes financiando a quien resuelve eso en el código, la tendencia quedó oficialmente en el radar.

**Fuentes:** [Tech.eu](https://tech.eu/2026/10/09/ollygarden-bags-4m-to-improve-telemetry-quality) · [TechFundingNews](https://techfundingnews.com/ollygarden-raises-4m-datadog-grafana-dash0-telemetry-waste/) · [RuntimeWire](https://runtimewire.com/article/ollygarden-4m-telemetry-quality-rose-mvi)
