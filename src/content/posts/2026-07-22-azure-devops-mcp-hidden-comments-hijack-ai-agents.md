---
title: "Comentarios invisibles en Azure DevOps pueden secuestrar tu AI coding agent via MCP"
author: Carlos
pubDatetime: 2026-07-22T22:00:00Z
slug: azure-devops-mcp-hidden-comments-hijack-ai-agents
featured: false
draft: false
tags:
  - DevOps
  - Seguridad
  - IA
description: "Un flaw en el MCP server oficial de Azure DevOps permite que comentarios HTML ocultos en PRs secuestren agentes de IA con los permisos del revisor. Microsoft ya tenía la fix pero no la aplicó en este endpoint."
---

Si tu equipo usa AI agents para revisar pull requests en Azure DevOps, lee esto antes de tu próxima review.

## El hallazgo

Manifold Security (una firma de Agentic Runtime Security) descubrió un **confused-deputy bug** en el **Azure DevOps MCP server oficial de Microsoft**. El vector es elegantemente simple:

1. Un atacante abre un PR normal en un proyecto donde tiene acceso
2. En la descripción del PR, esconde instrucciones usando **comentarios HTML** (`<!-- ... -->`)
3. En la UI web, eso se ve como texto vacío — el reviewer humano no ve nada raro
4. Pero la **API REST devuelve el texto crudo**, y el MCP server se lo pasa directo al AI agent
5. Cuando el reviewer le pide a su agent que revise el PR, **las instrucciones ocultas reescriben el objetivo del agent**

## Por qué es grave

El agent está corriendo con **los permisos del reviewer**, que típicamente son más altos que los del atacante. En el proof of concept de Manifold, un PR malicioso logró:

- Disparar un pipeline en **otro proyecto** al que el atacante no tiene acceso
- Leer una **wiki page confidencial**
- **Postear el contenido** de vuelta como comentario en el PR, donde el atacante lo lee

Reproducido con **Copilot CLI y Claude Code** — no es específico de un solo agent.

## Microsoft tenía la solución pero no la aplicó

Acá lo más cringeworthy: **Microsoft ya había implementado un defensa para esto**. El MCP server usa *spotlighting* (una técnica de su propia guía anti prompt injection) que envuelve contenido no confiable en delimitadores para que el modelo sepa qué es data y qué es instrucción.

El problema: **solo se aplicó en las tools de wiki y build logs**. La tool que retorna los PRs (`repo_get_pull_request_by_id`) **nunca llamó al helper de sanitización**. O sea, el PR description se entrega crudo al modelo.

The Hacker News confirmó que **el código sigue sin la fix** al 21 de julio.

## El detalle técnico

- **Versión afectada:** v2.7.0 del Azure DevOps MCP server
- **CVE:** Pendiente
- **Requisitos del ataque:** el atacante necesita acceso a algún proyecto en la organización de Azure DevOps, un workflow que use AI agents para review, y que el reviewer tenga permisos elevados
- **Principio:** la brecha entre lo que el humano ve (Markdown renderizado) y lo que el modelo recibe (raw text con HTML comments) es el mecanismo de entrega

## Lección para DevOps/SRE

Si usas **MCP servers con AI agents**, esto es un recordatorio brutal: **todo endpoint que recibe contenido de usuarios necesita sanitización contra prompt injection**. No basta con aplicarlo en algunos tools y olvidar otros.

El patrón de "el agent actúa con mis permisos" es exactamente lo que hace que esto escale: el atacante no necesita hackear credenciales, solo necesita **prestar instrucciones en un lugar que el agent va a leer**.

**Fuentes:** [The Hacker News](https://thehackernews.com/2026/07/microsoft-azure-devops-mcp-flaw-lets.html), [Manifold Security](https://www.manifold.security/blog/azure-devops-mcp-server-vulnerability), [Cybersecurity News](https://cybersecuritynews.com/azure-devops-mcp-flaw/)
