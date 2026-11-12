---
title: "Jaeger le mete IA al troubleshooting: Ask Jaeger, herramientas MCP nativas y visualización de traces GenAI"
author: Carlos
pubDatetime: 2026-11-12T13:05:00Z
slug: jaeger-ia-troubleshooting-genai-opentelemetry
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "Jaeger v2.22 estrena preview de troubleshooting asistido por IA: asistente en lenguaje natural, endpoint MCP con 9 herramientas y vistas de traces con convenciones GenAI de OpenTelemetry."
---

![Ilustración editorial tech de un gran flujo de trazas distribuidas representadas como hebras de luz entrelazadas siendo examinadas por una lupa luminosa con destellos de IA, tonos índigo y teal, estilo ilustración profesional sin texto](../../assets/images/jaeger-ia-troubleshooting-genai-opentelemetry.jpg)

KubeCon NA 2026 está dejando titulares de IA por todas partes, pero este es de los que marcan tendencia en observabilidad: **Jaeger, el proyecto graduado de tracing distribuido de la CNCF, está presesteando su primera experiencia integrada de troubleshooting asistido por IA y observabilidad GenAI**, disponible como capacidades experimentales en **Jaeger v2.22**.

## Qué trae el preview

- **Ask Jaeger**: un asistente experimental en lenguaje natural, dentro del producto. Investigas traces conversando, con respuestas que llegan en streaming y — lo importante — **tool calls visibles**, para que veas cómo llegó a cada conclusión y no te quedes confiando ciegamente.
- **Integración MCP nativa**: un endpoint opt-in con **9 herramientas enfocadas** para descubrir servicios y traces, examinar errores, mapear topología de servicios, identificar el critical path e inspeccionar spans individuales. Cualquier agente compatible puede usarlas.
- **Skills de diagnóstico reutilizables**: análisis de causa raíz de errores y **detección de queries N+1** como workflows repetibles que los agentes siguen al investigar.
- **Visualización de traces GenAI**: vistas especializadas construidas sobre las **convenciones semánticas GenAI de OpenTelemetry** para examinar interacciones con modelos, actividad de agentes, operaciones de retrieval, consumo de tokens, system instructions y ejecución de tools — todo dentro del trace distribuido de siempre.

## El diseño que vale la pena destacar

El principio central es **progressive disclosure**: los agentes de IA recuperan **solo la evidencia necesaria para cada paso** de la investigación, en vez de mandar el trace completo al LLM. Traducción práctica: menos tokens quemados, menos ruido y — crucial para los desconfiados — **los ingenieros pueden inspeccionar la evidencia detrás de cada respuesta**.

Yuri Shkuro, creador y maintainer de Jaeger, lo resume bien: los traces contienen la evidencia que el ingeniero necesita, pero en traces grandes esa evidencia queda enterrada entre cientos o miles de spans. Las herramientas de IA le dan al agente foco para buscar, mapear topología y encontrar el critical path, mientras el humano ve las tool calls detrás de la respuesta.

## Observabilidad para apps que son agentes

El punto de fondo: las aplicaciones con IA agregan llamadas a modelos, uso de tokens, retrieval y ejecución de tools encima de una arquitectura distribuida que ya era compleja. Diagnosticar por qué un agente se fue por la ramita equivocada **exige ver esas interacciones junto al resto del sistema**, no en un silo aparte con telemetría propia.

La arquitectura es abierta por diseño: **MCP + Agent Client Protocol (ACP) + AG-UI + OpenTelemetry**, con componentes reemplazables y sin casarse con un modelo o framework propietario. Jonah Kowall, maintainer del proyecto, insiste en extender la práctica de observabilidad existente en vez de crear otro silo de datos.

**Lectura rápida**: si tu stack ya usa Jaeger y OpenTelemetry, este preview es el camino más corto para llevar observabilidad a workloads de IA sin adoptar otro producto. Actualiza a v2.22, activa el endpoint MCP y prueba — experimental, pero con una dirección de diseño mucho más seria que el típico "chatbot encima del dashboard".
