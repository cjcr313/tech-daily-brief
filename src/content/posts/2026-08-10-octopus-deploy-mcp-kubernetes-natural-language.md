---
title: "Octopus Deploy + MCP: despliega en Kubernetes hablando en lenguaje natural"
author: Carlos
pubDatetime: 2026-08-10T12:00:00Z
slug: octopus-deploy-mcp-kubernetes-natural-language
featured: false
draft: false
tags:
  - DevOps
  - Kubernetes
description: "Octopus Deploy demostró que su MCP server puede crear deployments completos de Kubernetes desde cero usando solo lenguaje natural con agentes de IA."
---

![Octopus Deploy MCP Server Kubernetes](../../assets/images/2026-08-10-octopus-deploy-mcp-kubernetes-natural-language.jpg)

Octopus Deploy acaba de demostrar algo bastante goloso: su **MCP server** ya puede crear un pipeline completo de deployment en Kubernetes **desde cero, usando solo lenguaje natural**. Sin tocar la UI, sin un solo click en el portal web.

## El desafío

La idea era simple pero ambiciosa: tomar una instancia vacía de Octopus Deploy y construir un flujo de deployment completo para Kubernetes usando únicamente un agente de IA conectado vía MCP. El resultado fue un pipeline de principio a fin: desde el código fuente en GitHub, pasando por GitHub Actions (build + container image al registry), hasta el deploy en el cluster.

## ¿Cómo funciona?

El MCP server de Octopus Deploy ya existía desde el año pasado, pero hasta ahora era principalmente para **consultar** estado de deployments. Lo nuevo es que ahora puede **crear** toda la estructura:

- Lifecycles y promotion paths (dev → QA → staging → prod)
- Deployment targets conectados al cluster K8s
- Releases y procesos de deploy
- Variables y configuración

Todo descrito en lenguaje natural al agente (probaron con Claude Code). El agente crea los objetos y los puedes verificar en el portal, pero nunca necesitas editarlo a mano.

## Permisos y seguridad

El MCP server tiene tres modos de acceso:

- **Read-only**: solo consulta, no toca nada
- **Default**: lectura/escritura, sin deletes
- **Full access**: incluye deletes con `--allow-deletes`

Las acciones de escritura siempre muestran confirmación. Para uso desatendido se puede desactivar con `OCTOPUS_SKIP_ELICITATION`, pero obviamente con cuidado.

Además, recomiendan crear un **agent service account** dedicado, para separar las acciones del agente de las de humanos en la auditoría.

## Por qué es relevante

Esto es parte de una tendencia más grande: el protocolo **MCP (Model Context Protocol)** se está convirtiendo en el estándar de facto para que agentes de IA interactúen con herramientas de DevOps. Ya vimos cómo AWS, HashiCorp y otros están apostando por MCP. Que Octopus Deploy lo lleve al punto de poder **onboardear un ambiente completo con natural language** es un paso importante.

Para equipos que ya usan Octopus Deploy, esto significa que pueden prototipar y configurar environments nuevos MUCHO más rápido. Y para los que no lo usan todavía, es un argumento de venta bastante convinante: *"describe tu deployment y nosotros lo construimos"*.

La pregunta es si Argo CD, Flux u otras herramientas GitOps seguirán el mismo camino con MCP, o si se quedarán atrás. Por ahora, Octopus se adelantó.
