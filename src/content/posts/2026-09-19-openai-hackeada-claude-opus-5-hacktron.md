---
title: "White hats usaron Claude Opus 5 para hackear a OpenAI en menos de 72 horas"
author: Carlos
pubDatetime: 2026-09-19T09:00:00Z
slug: openai-hackeada-claude-opus-5-hacktron
featured: false
draft: false
tags:
  - IA
  - Seguridad
  - DevOps
description: "Un equipo de tres personas de Hacktron AI usó Claude Opus 5 para encadenar dos vulnerabilidades y llegar hasta el monorepo interno de OpenAI, gastando menos de US$3.000 en tokens."
---

![Ilustración editorial tech: cadena de nodos que conecta una red neuronal con un candado roto y un repositorio de código, tonos azul profundo y rojo sobre fondo oscuro, concepto de explotación de vulnerabilidades asistida por IA](../../assets/images/2026-09-19-openai-hackeada-claude-opus-5-hacktron.jpg)

Un equipo de **tres personas** de la startup **Hacktron AI** gastó menos de **US$3.000 en tokens de Claude Opus 5** y 72 horas para hackear a OpenAI. No es un sketch: es un caso real de bug bounty, reportado en julio y revelado esta semana, que muestra cómo los agentes de IA están cambiando la economía de la explotación de vulnerabilidades.

## La cadena del ataque

Los white hats encadenaron **dos fallas** para llegar hasta el repositorio interno de OpenAI:

- **HEIF upload → heap overflow en libheif → RCE** en Discourse, la plataforma del foro de la comunidad de OpenAI.
- Un **flaw de SSO** que les permitió tomar control de la cuenta de ChatGPT/Codex de un empleado.
- Esa cuenta tenía **Codex conectado al GitHub corporativo**, lo que abrió la puerta al monorepo interno.

Como prueba —y para no revisar código sensible—, hicieron que Codex abriera un **pull request inofensivo (el #1186742)** en el repo privado `openai/openai`. Ahí pararon, actualizaron el reporte en Bugcrowd y avisaron a seguridad de OpenAI.

## Por qué importa

El caso junta tres fronteras de seguridad que antes se miraban por separado: **infraestructura de terceros vulnerable, identidad federada y agentes de IA conectados a sistemas de negocio**. Un solo eslabón débil (un foro comunitario) alcanzó para llegar al código privado de una compañía de frontera.

Hacktron enmarcó esto dentro de una campaña de investigación sobre **libheif** que, según ellos, se extiende a Slack, Meta, Zoom, Shopify y GitHub Enterprise. El detalle jugoso: con **Opus 4.8** les costaba horas armar el exploit; la llegada de **Opus 5** acortó el trabajo drásticamente. "Cada modelo nuevo es cada vez más capaz", resumieron.

La lectura para infra y DevOps es directa: los **coding agents** no solo aceleran el desarrollo, también bajan el costo de atacar. La superficie expuesta —foros, plugins, herramientas de terceros— se convierte en el eslabón que más rápido hay que endurecer.
