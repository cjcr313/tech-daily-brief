---
title: "Rafay Systems lanza MCP Server para gobernar IA en operaciones de infraestructura"
author: Carlos
pubDatetime: 2026-07-15T16:00:00Z
slug: rafay-mcp-server-infra-ops
featured: false
draft: false
tags:
  - DevOps
  - Kubernetes
  - IA
description: "Rafay introduce un servidor MCP que conecta asistentes de IA con contexto operativo de Kubernetes, con RBAC y gobernanza integrada."
---

Rafay Systems acaba de anunciar un **Model Control Protocol (MCP) Server** para su plataforma de orquestación de infraestructura. La idea es simple pero poderosa: dar a los asistentes de IA acceso gobernado al contexto operativo de tu infraestructura — clusters, namespaces, políticas, health, costos — sin exportar datos ni construir integraciones one-off.

## Los dos primeros workflows

**Fleet Intelligence y Cost Attribution:** Un platform engineer puede pedirle a un asistente MCP-compatible que:

- Inventarie clusters across projects
- Resuma health y configuration status
- Identifique environments stale o underutilized
- Correlacione placement de workloads con specs de nodos y costos

En vez de juntar cloud bills, estado de Kubernetes e inventory de Rafay a mano, le preguntas directamente: *"¿qué clusters tienen mayor costo por workload?"* o *"¿qué environments son candidatos para consolidación?"*

**Incident Diagnosis:** Para incident response, puedes preguntar qué clusters o namespaces están degradados, hacer drill down en recursos unhealthy, y recibir un diagnóstico estructurado para issues comunes: image-pull errors, pods unschedulable, crash loops, deployments fallidos, servicios sin endpoints, storage sin bound.

## Gobernanza primero

Lo clave aquí es que el MCP Server opera **dentro del mismo modelo de RBAC** que los equipos ya usan en Rafay. El acceso es **read-only** en esta primera versión. Nada de changes autónomos todavía — el engineer sigue al control.

MCP es un protocolo open-source originalmente introducido por Anthropic y ahora bajo el **Agentic AI Foundation** de la Linux Foundation. Rafay no es el primero en adoptarlo, pero sí es de los primeros en aplicarlo específicamente a **infraestructura cloud-native con gobernanza enterprise**.

> "The value of MCP is not that an assistant can answer a question faster. The value is that the assistant can finally operate with the right infrastructure context, inside the same governance model the customer already trusts." — Haseeb Budhani, CEO de Rafay Systems

Esto es parte de una tendencia más grande: los equipos SRE y platform ya están usando IA, pero los asistentes no tienen contexto de la infraestructura. Rafay está cerrando ese gap de forma controlada. La pregunta es si este patrón de "MCP gobernado para ops" se convierte en standard.

**Fuente:** [Rafay Systems / PR Newswire](https://www.prnewswire.com/news-releases/rafay-systems-introduces-a-managed-mcp-server-offering-to-bring-governed-ai-assistance-to-infrastructure-operations-302825892.html)
