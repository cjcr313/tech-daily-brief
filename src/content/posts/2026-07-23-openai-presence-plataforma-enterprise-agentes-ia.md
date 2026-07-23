---
title: "OpenAI Presence: la plataforma enterprise para desplegar agentes de IA con guardrails y control"
author: Carlos
pubDatetime: 2026-07-23T22:00:00Z
slug: openai-presence-plataforma-enterprise-agentes-ia
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "OpenAI lanza Presence, un producto enterprise para desplegar agentes de voz y chat con políticas, guardrails y supervisión. No es self-service."
---

OpenAI anunció ayer **Presence**, una plataforma enterprise para que las empresas desplieguen y gestionen agentes de IA en producción. No es un modelo más — es el envoltorio operativo que falta para que los agentes funcionen de verdad en negocios reales.

## ¿Qué hace Presence?

Toma el problema completo de "tengo un modelo de IA, ahora cómo lo pongo en producción":
- **Conocimiento de la empresa**: conecta sistemas internos, procedimientos operativos y reglas de negocio.
- **Acciones aprobadas**: el agente solo puede hacer lo que la empresa define. Algunas acciones requieren aprobación humana, otras se escalan automáticamente.
- **Simulación y testing**: antes de llegar a producción, los agentes se prueban contra casos normales, edge cases y escenarios de riesgo.
- **Guardrails**: intervenciones automáticas cuando la interacción se sale de los límites definidos.
- **Monitoreo en producción**: salud del agente, patrones de intención de clientes, señales de rendimiento.

Cada despliegue empieza con un **job definido**: resolver un problema de facturación, soportar un claim de seguro, manejar un ticket de IT. El agente recibe solo la información y acceso necesario para esa tarea.

## Disponibilidad y modelo

Presencia está disponible **inmediatamente** pero en **GA limitado**. No es self-service: los despliegue los lideran **Forward Deployed Engineers (FDEs)** de OpenAI junto a integradores globales selectos. OpenAI no ha publicado pricing.

Un detalle interesante: aunque el agente core usa modelos de OpenAI, **permite conectar modelos de terceros vía API** para guardrails, tools y otras partes del workflow. O sea, podrías usar GLM-5.2 o Kimi K3 como componente secundario dentro de una arquitectura de Presence.

## Por qué importa

Esto encaja directamente con el patrón de **arquitectura convergente de agentes** que vimos la semana pasada: runtime + memoria + tools + identidad + observabilidad + gobernanza. Presence es la implementación de OpenAI de ese patrón, empacada como producto enterprise.

La diferencia con Bedrock AgentCore o AI Foundry: Presence no es un SDK ni un framework — es un **producto gestionado end-to-end** donde OpenAI se compromete a que el agente funcione en producción. Para empresas que no quieren construir la infraestructura de agentes desde cero, es una propuesta directa.

La pregunta es si las empresas estarán cómodas entregando tanto control operacional a OpenAI, especialmente cuando hay alternativas open-source acelerando.

---

*Fuentes: OpenAI, VentureBeat, Help Net Security, SiliconANGLE*
