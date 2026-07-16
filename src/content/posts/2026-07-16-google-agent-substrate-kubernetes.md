---
title: "Google dice que Kubernetes no fue diseñado para AI agents y presenta Agent Substrate"
author: Carlos
pubDatetime: 2026-07-16T16:15:00Z
slug: google-agent-substrate-kubernetes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - Arquitectura
description: "Google reconoce que el Kubernetes control plane no fue diseñado para el comportamiento de AI agents. Su respuesta: Agent Substrate, un runtime que se superpone a K8s."
---

The New Stack publicó un artículo brutal: **Google está construyendo un nuevo runtime sobre Kubernetes porque admite que el API server de K8s nunca fue diseñado para cómo se comportan los AI agents.** Se llama Agent Substrate, y viene a cambiar la conversación sobre infraestructura para AI.

## El problema

Kubernetes ganó la década de contenedores. Pero los AI agents no se comportan como microservicios tradicionales:

- **Spawns impredecibles:** Un agent puede generar docenas de sub-tareas en segundos
- **Ciclos de vida complejos:** Agents que se pausan, se reanudan, se multiplican
- **Patrones de scheduling distintos:** No es "un pod por servicio", sino flotas de agents efímeros
- **Estado distribuido:** Los agents mantienen contexto que no encaja en el modelo de K8s

El API server de Kubernetes, diseñado para declarative reconciliation, se ahoga con estos patrones.

## La respuesta de Google: dos capas

Google ya hizo disponible **GKE Agent Sandbox** en mayo 2026 (GA), y ahora presenta **Agent Substrate**:

- **Agent Sandbox:** Entorno seguro para ejecutar código no confiable de agents
- **Agent Substrate:** Capa de scheduling que **rutea alrededor del Kubernetes control plane**, gestionando el lifecycle de agents directamente

La idea es que K8s siga siendo la base, pero las decisiones de scheduling de agents pasen por Substrate, que sí entiende los patrones de comportamiento agentiles.

## Por qué esto importa

Esto es Google —la empresa que creó Kubernetes— diciendo que **K8s no es suficiente para la próxima década**. No lo están reemplazando, pero le están poniendo una capa encima que reconoce que el modelo original tiene límites.

Implicancias:

1. **El stack de infra para AI agents va a necesitar nuevas primitivas.** Kubernetes solo no basta.
2. **Los operadores de K8s van a tener que aprender conceptos nuevos.** Agent scheduling no es lo mismo que pod scheduling.
3. **Se abre espacio para competencia.** Si Google reconoce el gap, otros vendors pueden construir runtimes alternativos.
4. **El ecosistema CNCF va a reaccionar.** Ya hay proyectos como `kagent` en incubación. Esto va a acelerar.

## El contexto mayor

Esto enmarca una conversación más amplia: **la infraestructura para AI no es solo "correr modelos en GPU"**. Es todo el stack de execution: cómo orquestas agents, cómo manejas su estado, cómo los aíslas, cómo los escalas. Kubernetes resolvió la orquestación de contenedores. La orquestación de agents es un problema abierto.

Google está posicionándose para ser quien lo defina, igual que hizo con K8s hace una década. La pregunta es si esta vez la comunidad irá con ellos o surgirá una alternativa open-source independiente.
