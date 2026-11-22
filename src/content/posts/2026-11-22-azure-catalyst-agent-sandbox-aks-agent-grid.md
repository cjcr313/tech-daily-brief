---
title: "Azure Catalyst: Microsoft le suelta agentes IA al legado, y AKS estrena Agent Sandbox y Agent Grid"
author: "Nauta Lab"
pubDatetime: 2026-11-22T13:15:00Z
slug: azure-catalyst-agent-sandbox-aks-agent-grid
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Kubernetes
  - DevOps
description: "Microsoft anunció Azure Catalyst para modernizar apps, datos e infraestructura con agentes IA, más Agent Sandbox para AKS, Agent Grid y Windows Server 2028 en preview pública."
---

![Ilustración editorial de modernización de aplicaciones legacy guiada por agentes de IA en la nube](../../assets/images/azure-catalyst-agent-sandbox-aks-agent-grid.jpg)

Microsoft cerró la semana con un paquete de anuncios que mezcla dos cosas: **Azure Catalyst**, una solución de modernización guiada por agentes IA, y una tanda de innovaciones de infraestructura pensada para correr agentes en producción. La tesis de fondo ya no sorprende a nadie que lea este blog: el agente es el workload que redefine la nube.

## Azure Catalyst: deuda técnica como camino a IA

La apuesta central: usar **agentes IA para modernizar aplicaciones, datos e infraestructura "en una fracción del tiempo y costo de los métodos tradicionales"**. Es decir, décadas de COBOL, monolitos y bases heredadas dejaron de ser el lastre del cloud y pasaron a ser el mayor mercado disponible. El pitch es convertir la deuda técnica en la ruta más rápida hacia IA — lo que antes se llamó "lift & shift" ahora se vende como modernización agéntica.

## Lo que le importa a quien opera Kubernetes

- **Agent Sandbox para AKS**: una extensión para que el código generado por agentes corra en sandboxes gestionados con **aislamiento a nivel de VM por sesión**, pools pre-calentados para arranque rápido y una opción serverless sin infra que administrar.
- **Agent Grid**: conectividad entre agentes, modelos, tools, datos y servicios Azure mediante **conexiones autenticadas y cifradas**, con políticas basadas en identidad y aislamiento de red **default-deny**.
- **Contexto persistente**: agentes de contexto largo reutilizan el prompt ya procesado en vez de recomputarlo en GPU (más rápido y más barato), y ese cache queda **durable y bajo tu control en tu tenant**.
- **Camino conectado Foundry → AKS**: modelos open-weight y agentes se mueven de la experiencia gestionada de Microsoft Foundry a clusters AKS custom, del cloud al edge, con infraestructura, seguridad y gobernanza consistentes.

## El borde también cuenta

Completa el anuncio **Windows Server 2028 en preview pública**, junto a Azure Local y los flex nodes para AKS y Foundry, todo gobernado vía Azure Arc: IA corriendo cerca de las apps, los datos y los usuarios, con argumentos regulatorios y de costo de por medio.

## Lectura rápida

Con esto, los tres hyperscalers ya tienen su stack agéntico con nombre propio: **AWS con Bedrock AgentCore, Google con Agent Compute Engine (que actualizamos hoy mismo) y ahora Microsoft con el combo Agent Sandbox + Agent Grid**. El diferencial declarado de Azure es la integración vertical — del modelo al silicio al cluster en una sola jugada — y su obsesión por el mercado heredado. Que los agentes modernicen el legado mejor que un ejército de consultores es exactamente el tipo de promesa que habrá que exigir con métricas, no con demos.

**Fuentes:** [Microsoft Azure Blog](https://azure.microsoft.com/en-us/blog/introducing-azure-catalyst-agentic-modernization-and-new-ai-infrastructure-innovations/) · [Microsoft Ignite 2026: novedades en Azure](https://azure.microsoft.com/en-us/blog/microsoft-ignite-2026-whats-new-in-azure-the-platform-purpose-built-for-ai/)
