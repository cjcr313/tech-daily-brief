---
title: "Tenable y OpenAI crean un inspector para auditar agentes IA de la comunidad antes de desplegarlos"
author: Carlos
pubDatetime: 2026-09-05T16:00:00Z
slug: tenable-openai-cyberagents-exchange-inspector
featured: false
draft: false
tags:
  - IA
  - Seguridad
  - DevOps
description: "CyberAgents Exchange AI Inspector combina los modelos GPT ciber de OpenAI, Tenable One y revisión de investigadores para auditar agentes, skills y servidores MCP antes de usarlos en producción."
---

![Inspector de seguridad para agentes IA de la comunidad](../../assets/images/2026-09-05-tenable-openai-cyberagents-exchange-inspector.jpg)

Tenable anunció que está colaborando con OpenAI para lanzar el **CyberAgents Exchange AI Inspector** (o simplemente *Exchange Inspector*), un proceso de revisión de seguridad para agentes IA, skills, servidores MCP y playbooks multi-agente que circulan por su **CyberAgents Exchange**. El anuncio se hizo en pleno *Intelligence at Work: Cyber Summit* de OpenAI.

## El problema que ataca

La IA agéntica no va a despegar en la empresa si los equipos de seguridad no pueden confiar en los componentes que están metiendo a sus entornos. Ese es el resumen directo que dio Eric Doerr, CPO de Tenable. Y tiene sentido: el Exchange —un registry open source lanzado en agosto— ya suma **más de 100 componentes de IA enviados por la comunidad**, y nadie con dos dedos de frente despliega un agente, un skill o un MCP server random sin revisarlo.

## Cómo funciona el Inspector

La fórmula combina tres capas:

- **Evaluación frontier** usando los modelos GPT ciber de OpenAI.
- **Inspección de skills** apoyada en **Tenable One AI Exposure**.
- **Revisión de expertos** de los investigadores de Tenable.

El objetivo es darle a los equipos de seguridad una forma más rigurosa de inspeccionar componentes construidos por la comunidad *antes* de que entren a entornos enterprise. Disponibilidad esperada: **septiembre de 2026**.

## Contexto: venía del programa Daybreak

La colaboración no nace de la nada. Crece de la participación de Tenable en el **OpenAI Daybreak Defense Network**, el programa que OpenAI armó para que los defensores tengan acceso temprano a sus modelos ciber (el mismo canal por el que llegó GPT-6 Astra primero a defensores aprobados).

También viene después del **SWARM build event** que Tenable organizó en Black Hat USA 2026, donde se construyeron varios de los componentes que hoy están en el Exchange.

## Lo importante para DevOps/Plataforma

Esto es una señal más de que el ecosistema agéntico está madurando hacia **gobernanza y supply chain de agentes**. Mientras más equipos adopten agentes, skills y MCP servers de terceros, más va a importar tener un "CI/CD de seguridad" que los revise antes de que toquen producción. El movimiento de Tenable + OpenAI apunta justo ahí: convertir la revisión de componentes comunitarios en un paso formal, no en una apuesta a ciegas.

**Fuentes:** [Tenable](https://www.tenable.com/press-releases/tenable-uses-openai-gpt-cyber-models-to-help-defenders-inspect-community-built-ai-components), [Taiwan News](https://www.taiwannews.com.tw/news/6433821), [Citybiz](https://www.citybiz.co/article/899007/tenable-openai-launch-security-review-for-community-built-ai-components/)
