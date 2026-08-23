---
title: "MCP publica su nuevo roadmap: cinco frentes para consolidarse como la capa de transporte de los agentes de IA"
author: Carlos
pubDatetime: 2026-08-23T16:05:00Z
slug: mcp-nuevo-roadmap-2026
featured: false
draft: false
tags:
  - IA
  - Arquitectura
description: "El equipo detrás de Model Context Protocol define sus prioridades: mensajería agentic, transporte HTTP-native, identidad de agentes y discovery progresivo de herramientas."
---

![Ilustración editorial de una red de nodos y conectores convergiendo en carreteras estructuradas de datos](../../assets/images/2026-08-23-mcp-nuevo-roadmap-2026.jpg)

El blog oficial de Model Context Protocol publicó su **nuevo roadmap**, y es una lectura obligada para cualquiera construyendo integraciones de agentes. Después de un primer semestre frenético (la spec 2026-07-28 fue una overhaul a full), los Core Maintainers cerraron el fin de semana con una hoja de ruta de **cinco áreas prioritarias**, cada una con mantenedores responsables y Working Groups detrás.

## Lo que ya estaba en la cancha

El balance de los últimos cinco meses es sustancioso:

- **MCP es stateless:** las sesiones a nivel de protocolo y el handshake de inicialización se eliminaron, así que un servidor puede escalar horizontal sin guardar estado (SEP-2575/2567).
- **Tasks** se movió a extensión oficial y el patrón **Multi Round-Trip Requests** reemplazó las server-initiated requests, para que flujos de elicitation funcionen en servidores sin estado.
- **Autorización enterprise:** validación de issuer, issuer-bound client credentials, Client ID Metadata Documents, y Enterprise-Managed Authorization ya estable.
- **Gobernanza de adulto:** Contributor Ladder formal, triage de SEPs por Working Group y política de lifecycle/deprecación de features.

## Los cinco frentes nuevos

1. **Primitivas de mensajería agentic:** los workloads de agentes ya no calzan en request-response. Viene trabajo en **eventos iniciados por el servidor (webhooks y canales)** para que los clientes no queden polleando, y en madurar Tasks para que entre a la spec formal.
2. **Unificación y endurecimiento del transporte HTTP-native:** un servidor MCP remoto ya no debería distinguirse de cualquier otro servicio HTTP. Ahora se trata de blindarlo.
3. **Identidad de agentes y seguridad enterprise:** los agentes necesitan identidad propia y controles listos para corporaciones — el eslabón que faltaba para adopción seria.
4. **Primitivas mejoradas:** dos golpes finos. Primero, estandarizar el contrato de resultados de `tools/call` (hoy el mismo output puede llegar en más de una forma y el desarrollador del server no sabe cuál verá el modelo). Segundo, y más interesante: **progressive discovery**. Conectarse a un servidor con cien herramientas significa que el modelo paga todo ese contexto antes de que el usuario pregunte algo, y la selección de herramientas empeora a medida que crece la lista. La idea es un entry point pequeño que va revelando el catálogo según la conversación.
5. **Mejor experiencia de SDK:** ergonomía, conformance con la spec y documentación decente — con el detalle delicioso de que ahora muchos construyen clientes y servidores MCP *pointeando un agente a las librerías*, así que las APIs claras definen si el código funciona o no.

## Por qué importa

MCP ya es el estándar de facto para conectar modelos con herramientas y datos — lo vemos todos los días en este blog, del marketplace de Datadog a los CVEs en servidores populares. Este roadmap muestra un protocolo madurando rápido hacia infraestructura seria: stateless, HTTP-native, con identidad y gobernanza. Si estabas esperando señales de estabilidad para invertir en MCP, este es un buen indicio. Y si los SEPs son tu cosa: las propuestas dentro de estas áreas tienen review expeditado.

> **Fuente:** [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/)
