---
title: "Splunk libera Token Meter, su herramienta open source para vigilar el gasto de los agentes de código"
author: Carlos
pubDatetime: 2026-09-19T21:00:00Z
slug: splunk-token-meter-open-source
featured: false
draft: false
tags:
  - Observabilidad
  - Open Source
  - IA
description: "Splunk open-sourceó Token Meter, un dashboard local que lee los logs de Claude Code y Codex para mostrar en vivo el costo y la actividad de las sesiones de agentes de IA."
---

![Ilustración editorial de un dashboard local de observabilidad monitoreando el gasto de agentes de código IA: paneles con métricas de tokens y costos flotando sobre líneas de código brillantes, tonos azul profundo y ámbar sobre fondo oscuro](../../assets/images/2026-09-19-splunk-token-meter-open-source.jpg)

Splunk (el brazo de Cisco) acaba de abrir una pieza que va directo al bolsillo de los equipos que ya están corriendo agentes de código a diario. **Token Meter** es una herramienta open source que lee los *trace logs* que Claude Code, Codex y otros agentes dejan en disco, y los convierte en una vista en vivo de **cuántos tokens se gastan, cuánto cuesta la sesión y en qué se fue el tiempo**.

## De "cuánto me cuesta" a "en qué se me va"

La idea es simple y duele: hoy la mayoría de los desarrolladores no tiene idea de cuánto le está saliendo una sesión de agente hasta que llega la factura del proveedor. Token Meter lee los logs locales de **Claude, Codex, Cursor, OpenCode, Kiro y Pi**, los cruza con las tarifas públicas de cada modelo, y te muestra el costo estimado y la actividad en tiempo real —todo local, sin mandar nada a servidores externos.

En el fondo es un dashboard de observabilidad **local-first y sin dependencias** para agentes de IA. Convierte la evidencia de la sesión (qué se hizo, cuánto costó, dónde se fue el tiempo) en una sola pantalla para decidir si el agente está rindiendo o si te está drenando el presupuesto.

## Por qué importa ahora

Esto calza con la tesis que el propio Splunk plantó en su **.conf26** la semana pasada: la telemetría de la era agéntica ya no se mira con las herramientas de siempre. Si la semana pasada era el LLM para logs y el Universal Collector, ahora es la pieza del día a día del desarrollador: **el costo del agente como señal operacional**, no como una sorpresa a fin de mes.

Es un guiño claro a que el gasto en agentes de código está pasando de ser una línea opaca en la cuenta del proveedor a una métrica que los equipos quieren ver en tiempo real. Y que la observabilidad de IA no es solo para plataformas enterprise: también se resuelve con una herramienta local de código abierto.

Para el que ya vive en Claude Code o Codex, la movida es directa: una forma barata y sin nube de saber si el agente trabaja o solo consume.

Fuente: [DevOps.com](https://devops.com/splunk-open-sources-token-meter-tool-for-application-developers/) y el repo [splunk/token-meter](https://github.com/splunk/token-meter).
