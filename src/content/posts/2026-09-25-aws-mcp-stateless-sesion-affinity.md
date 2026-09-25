---
title: "MCP se vuelve stateless: AWS elimina la afinidad de sesión en los despliegues de servidores MCP"
author: Carlos
pubDatetime: 2026-09-25T15:00:00Z
slug: aws-mcp-stateless-sesion-affinity
featured: false
draft: false
tags:
  - Arquitectura
  - Cloud
  - IA
description: "La nueva especificación de MCP elimina las sesiones a nivel de protocolo, simplificando el escalado horizontal y el enrutamiento de servidores MCP en AWS."
---

![Ilustración editorial tech de un load balancer repartiendo peticiones de agentes de IA entre múltiples servidores MCP sin estado, con flujos de datos paralelos y sin conexiones pegajosas, tonos cian y púrpura](../../assets/images/2026-09-25-aws-mcp-stateless-sesion-affinity.jpg)

El **Model Context Protocol (MCP)** acaba de dar un paso arquitectónico importante: la nueva especificación **elimina las sesiones a nivel de protocolo**, y AWS salió a explicar qué significa eso para quienes despliegan servidores MCP a escala.

## Qué cambió en el wire

La versión actualizada del spec remueve el **handshake `initialize`/`initialized`** y el header **`Mcp-Session-Id`**. Traducido: ya no hay un estado de sesión que mantenga "pegada" una conexión a un servidor específico. Las peticiones pueden enrutarse de forma independiente a **cualquier instancia disponible detrás de un load balancer convencional**.

Antes, desplegar un servidor MCP remoto implicaba mantener sticky sessions y un store compartido de sesiones solo para sostener el estado del protocolo. Eso se acaba.

## Qué implica para AWS

Los autores del AWS Architecture Blog lo mapean directamente al **Well-Architected Agentic AI Lens**:

- **Adiós a la infraestructura de sesiones:** se elimina el enrutamiento session-affine y el almacenamiento usado únicamente para estado de protocolo.
- **Lambda encaja natural:** al no requerir conexiones persistentes, el modelo request-response de Lambda se vuelve la opción obvia para muchos despliegues.
- **Gateway como punto de control:** los nuevos headers `Mcp-Method` y `Mcp-Name` permiten enrutar y throttlear en el gateway, y W3C Trace Context habilita tracing distribuido.

## El matiz que nadie puede ignorar

La frase que resume la comunidad es directa: **"El protocolo es stateless. Tu aplicación no tiene por qué serlo."** El estado de aplicación —retries, observabilidad, idempotencia— se traslada a las capas que lo rodean.

Y hay costos: se removió la reanudación de streams, así que los clientes deben reintentar operaciones interrumpidas. Eso eleva la importancia de la **idempotencia en tool calls con efectos secundarios**. Para despliegues con clientes MCP viejos, AWS recomienda trackear versiones de protocolo en el gateway y mantener la infraestructura de sesión hasta eliminar el tráfico legacy.

## La lectura

MCP está madurando de "protocolo de herramientas para un IDE" a "protocolo de infraestructura para flotas de agentes". Volverse stateless es exactamente el tipo de cambio que un protocolo necesita para escalar horizontal sin fricción — y es una señal más de que el ecosistema de agentes se está tomando en serio el despliegue en producción.

**Fuente:** AWS Architecture Blog (vía InfoQ) — "MCP went stateless: Is your AWS MCP server deployment well-architected?".
