---
title: "CrowdStrike comprará Fiddler y Dreadnode por US$495M: observabilidad de agentes IA llega a Falcon"
author: Carlos
pubDatetime: 2026-11-04T13:05:00Z
slug: crowdstrike-fiddler-dreadnode-observabilidad-agentes-ia
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "En Fal.Con Europe 2026, CrowdStrike anunció la compra de Fiddler AI (US$400M) y Dreadnode (US$95M) para sumar observabilidad de agentes IA y testing de seguridad a Falcon, junto con un AI Kill Switch en runtime."
---

![Ilustración editorial tech de un panel de control de ciberseguridad con tarjetas de grabadora de vuelo digital flotantes monitorizando agentes de IA representados como drones luminosos, paleta azul y ámbar sobre fondo oscuro, estilo ilustración tecnológica profesional, sin texto](../../assets/images/2026-11-04-crowdstrike-fiddler-dreadnode-observabilidad-agentes-ia.jpg)

Si el 2026 fue el año en que las empresas dejaron salir agentes de IA a producción, alguien tenía que encargarse de vigilarlos. **CrowdStrike firmó acuerdos definitivos para comprar Fiddler AI y Dreadnode**, dos startups de seguridad para IA, en anuncios hechos en su conferencia Fal.Con Europe 2026 de Barcelona. Según el Wall Street Journal, el paquete suma **US$495 millones**: US$400M por Fiddler y US$95M por Dreadnode.

## Qué compra exactamente CrowdStrike

- **Fiddler AI** se especializa en observabilidad y explicabilidad de agentes de IA, y se convertirá en **Falcon Observe** dentro de la plataforma Falcon. Su tecnología evalúa agentes antes de que lleguen a producción, traza decisiones y razonamiento a través de sistemas multi-agente, detecta comportamiento drift y respuestas inventadas, y genera registros auditables. Funciona con frameworks populares como LangGraph, Amazon Bedrock y Google ADK.
- **Dreadnode** trabaja más arriba en el ciclo: corre **más de 100 métodos de ataque conocidos** (jailbreaks, prompt injection) contra modelos y agentes, rankea los problemas por severidad y los mapea a estándares como el OWASP Top 10 para LLMs y el NIST AI Risk Management Framework.

## Por qué importa

El problema que atacan es real y relativamente nuevo: un agente de IA puede tener credenciales válidas, herramientas aprobadas y permisos correctos... y aun así tomar malas decisiones, ignorar instrucciones o afirmar trabajo que nunca hizo. La seguridad tradicional, diseñada para código predecible, simplemente no alcanza la capa del modelo ni el proceso de razonamiento del agente.

La frase de George Kurtz, CEO de CrowdStrike, resume la propuesta de valor: *"Cuando un regulador o tu directorio pregunta qué hizo un agente, decir 'lo hizo el modelo' no es una respuesta"*. Y bautizó a Fiddler como **"la grabadora de vuelo de cada agente"**.

Junto con las compras, CrowdStrike anunció **Falcon Guardian** con un **AI Kill Switch**: un control que permite a un humano detener cualquier agente desde fuera del modelo, en runtime — "donde el agente no puede discutirlo, reescribirlo ni esperarlo", según Kurtz. Su lógica: mientras más segura sea la frenada, más agentes puedes poner a trabajar.

Ambos productos estarían generalmente disponibles en el cuarto trimestre fiscal 2027 de CrowdStrike, con cierres de las operaciones en ese mismo período. El pago sería mayormente en efectivo, con una parte en acciones con vesting condicionado.

**Fuentes:** [CyberScoop](https://cyberscoop.com/crowdstrike-acquires-fiddler-dreadnode-ai-security/) · [SecurityWeek](https://www.securityweek.com/crowdstrike-reportedly-paying-495-million-for-ai-security-firms-fiddler-dreadnode/) · [TechCrunch](https://techcrunch.com/2026/11/03/crowdstrike-to-shell-out-nearly-500m-for-2-ai-security-startups-as-the-market-for-securing-agents-takes-off/)
