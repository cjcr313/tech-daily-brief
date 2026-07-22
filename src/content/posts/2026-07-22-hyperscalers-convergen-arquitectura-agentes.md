---
title: "AWS, Microsoft y Google convergen en la misma arquitectura de agentes: el fin de Vertex AI"
author: Carlos
pubDatetime: 2026-07-22T04:00:00Z
slug: hyperscalers-convergen-arquitectura-agentes-ia
featured: false
draft: false
tags:
  - Cloud
  - Arquitectura
description: "Los tres hyperscalers llegaron al mismo diseño: runtime, memoria, tool gateway, identidad, observabilidad y gobernanza. Google jubiló Vertex AI. La plataforma de agentes es el nuevo OS."
---

The New Stack publicó ayer un análisis que dejó clara una cosa: **Amazon, Microsoft y Google independently llegaron a la misma arquitectura para agentes enterprise**. Y no es coincidencia — es que el problema los forzó a la misma respuesta.

## La arquitectura convergente

Los tres ahora ofrecen los mismos componentes básicos:

| Componente | AWS | Microsoft | Google |
|-----------|-----|-----------|--------|
| Runtime | Bedrock AgentCore | AI Foundry | Gemini Agent Platform |
| Memory | Memory Bank | Sessions | Memory |
| Agent Registry | ✅ | ✅ | ✅ |
| Tool Gateway | ✅ | ✅ | ✅ |
| Identity & Policies | ✅ | ✅ | ✅ |
| Observability | ✅ | ✅ | ✅ |

El patrón: **runtime + memoria + tools + identidad + observabilidad + gobernanza**. Cuando tres empresas con billones de dólares de R&D llegan solos al mismo diseño, es porque la arquitectura es la correcta.

## Google jubila "Vertex AI"

El dato más simbólico: **Google retiró el nombre "Vertex AI" en Cloud Next 2026** y lo foldió dentro de **Gemini Enterprise Agent Platform**. Lo que era *Agent Engine* pasó a ser *Deployments*. Memory Bank, Sessions, Agent Registry, Policies y Gateways quedaron como ciudadanos de primera clase junto a los modelos.

El mensaje es claro: la unidad básica de la nube ya no es la app ni el contenedor — **es el agente**.

## Microsoft va por la misma ruta

Forbes lo articuló bien ayer: *"Microsoft's Next AI Bet Isn't Better Models — It's The Platform"*. En Build 2026 dejaron entrever una arquitectura donde:

- **Claude (Anthropic) y GPT (OpenAI) conviven dentro de Microsoft Foundry** — multi-modelo nativo
- Comprometieron **$2.5 billones y miles de empleados** a una nueva unidad de implementación de AI agentic
- Capex guide 2026: **~$190 billones**, up sharply YoY

## AWS no se queda atrás

Amazon Bedrock AgentCore replica el mismo patrón. Y AWS también creó su unidad de implementación agentic, siguiendo el movimiento de Microsoft.

## Qué significa para equipos de infra

1. **Los agentes son los nuevos workloads.** Si Kubernetes orchestraba contenedores, las nuevas plataformas orchestrant agentes con memoria, tools y políticas.
2. **Vendor lock-in 2.0.** Las APIs son similares conceptualmente, pero migrar agentes entre hyperscalers va a ser tan complejo como migrar microservicios.
3. **Observabilidad de agentes es primera clase.** No es un add-on — viene integrado en las tres plataformas. Esto valida la tesis de que observar agentes es fundamentalmente distinto a observar apps tradicionales.

> 💡 **Para DevOps/SRE:** Las plataformas de agentes van a requerir los mismos cuidados que cualquier plataforma crítica: CI/CD, policies, monitoring, cost management. Pero con una vuelta de tuerca: los agentes toman decisiones autónomas, así que la gobernanza y los guardrails son no-negociables.
