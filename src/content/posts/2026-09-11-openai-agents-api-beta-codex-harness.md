---
title: "OpenAI abre en beta pública su Agents API: el harness de Codex detrás de una sola llamada"
author: Carlos
pubDatetime: 2026-09-11T09:00:00Z
slug: openai-agents-api-beta-codex-harness
featured: false
draft: false
tags:
  - IA
  - DevOps
  - Cloud
description: "La Agents API entrega el mismo harness que corre Codex: manejo de contexto, subagentes, sandboxes hosteados y sesiones largas, manteniendo OpenAI la infraestructura."
---

![Ilustración editorial de agentes de IA en la nube: múltiples nodos autónomos conectados por líneas brillantes ejecutando tareas en paralelo, tonos púrpura y cian, concepto abstracto de orquestación sobre fondo oscuro](../../assets/images/2026-09-11-openai-agents-api-beta-codex-harness.jpg)

OpenAI sigue empujando la orquestación de agentes y ahora lo empaquetó como producto. El miércoles abrió en **beta pública** su **Agents API**, que pone a disposición de cualquier desarrollador el mismo harness e infraestructura que corren **Codex**, su agente de software.

## Qué resuelve de verdad

Hasta ahora, armar un agente en producción era un dolor: mantener la sesión viva, compactar el contexto cuando se llena, recuperarse de fallos, coordinar subagentes, gestionar tools y sandboxes. Todo eso lo hacía Codex de forma interna. Con la Agents API, **OpenAI se queda con el harness** y el desarrollador solo aporta las instrucciones, las tools y los servidores **MCP**.

En concreto, la API combina llamadas al modelo con **manejo de contexto, ejecución de herramientas, acceso a sandboxes, coordinación de subagentes y control de sesiones de larga duración**. Es la misma pieza que OpenAI venía usando para sus propios agentes, ahora expuesta detrás de una sola llamada.

## Lo nuevo que acompaña

Junto con la API llegaron los **hosted sandboxes**: entornos aislados y administrados por OpenAI donde el agente puede ejecutar código sin que el desarrollador tenga que parar su propia infraestructura. La combinación apunta directo a casos de **agentes cloud de larga duración**, con orquestación en tiempo real y uso de herramientas a escala.

Está disponible desde el **10 de septiembre de 2026** para todos los desarrolladores. Para los equipos de DevOps y plataforma, la señal es clara: la capa de orquestación de agentes se está volviendo un servicio administrado, y la pelea por quién la hostea recién empieza.
