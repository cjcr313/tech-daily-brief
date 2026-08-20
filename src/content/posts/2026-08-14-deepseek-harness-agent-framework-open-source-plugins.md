---
title: "DeepSeek Harness: el framework open-source donde todo es un plugin (incluyendo el modelo)"
author: Carlos
pubDatetime: 2026-08-14T04:00:00Z
slug: deepseek-harness-agent-framework-open-source-plugins
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "DeepSeek liberó Harness (dsh), un runtime para agentes IA donde el modelo, las tools, el loop y hasta la UI son plugins intercambiables. Licencia MIT, disponible via npx."
---

![Ilustración editorial de un sistema modular tipo puzzle donde cada pieza es un plugin intercambiable, estilo tech editorial](../../assets/images/placeholder.jpg)

Ayer posteanos que DeepSeek estaba reclutando un equipo para competir con Claude Code. Hoy ya tienen algo más concreto: **DeepSeek Harness (dsh)**, un framework open-source para construir agentes IA donde absolutamente todo es un plugin.

## ¿Qué es DeepSeek Harness?

Es un runtime para agentes IA liberado bajo licencia **MIT** (o sea, haz lo que quieras). La idea central es radicalmente modular:

- **Model adapter**: plugable (no estás amarrado a DeepSeek, puedes usar cualquier modelo)
- **Tool registry**: plugable
- **Agent loop**: plugable
- **Sessions, sandboxes, storage, scheduling**: todos plugables
- **Hasta la Web UI es un plugin**

Literalmente todo se puede intercambiar o recomponer. Es como si alguien tomó el concepto de microkernel y lo aplicó a agentes IA.

## Cómo empezar

```bash
npx @deepseek-ai/dsh web
```

Eso levanta una Web UI en `http://127.0.0.1:3080`. También puedes clonar el repo y correr desde source con pnpm.

El proyecto está construido sobre **Cordis**, un framework de programación que implementa un paradigma de "composabilidad espaciotemporal" (suena fancy, pero básicamente es about managing async lifecycle de forma limpia).

## Estado actual

Está en **developer preview** y lo dicen con mayúsculas: habrá breaking changes. Es un proyecto que está iterando rápido. Aún así, ya tiene:
- Web UI funcional
- Sistema de plugins con descubrimiento (tag `dsh-plugin` en GitHub)
- Discord comunitario
- Documentación de arquitectura y desarrollo

## Por qué importa

Esto es interesante por tres razones:

1. **No te amarra a un modelo**: a diferencia de Claude Code o Codex, el model adapter es un plugin. Puedes usar GPT, Claude, Qwen, lo que sea.
2. **Open-source de verdad**: MIT, no una licencia "source available" con restricciones. Fork it, ship it.
3. **Ecosistema de plugins**: si la comunidad adopta el formato `dsh-plugin`, podría convertirse en un estándar de facto para componer agentes, igual que MCP se volvió el estándar para tools.

DeepSeek está jugando una partida distinta a Anthropic y OpenAI. En vez de construir el mejor agente cerrado, está construyendo **el mejor riel para que cualquiera arme el suyo**. Si funciona, podría hacer para los agentes lo que Kubernetes hizo para la infra: estandarizar la plataforma.

## Enlaces
- [Repo en GitHub](https://github.com/deepseek-ai/deepseek-harness)
- [Sitio oficial](https://deepseek.com/harness/en/)
- [Cobertura de The New Stack](https://thenewstack.io/deepseek-harness-open-source-plugins/)
