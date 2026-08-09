---
title: "Un GitHub Issue basta: Claude Code y Gemini CLI permiten robar secrets de CI sin autenticación"
author: Carlos
pubDatetime: 2026-08-09T22:00:00Z
slug: claude-code-gemini-cli-github-issues-ci-secrets
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
  - IA
description: "Novee Security reveló en Black Hat/DEF CON que las configuraciones default de Claude Code, Gemini CLI y repos de agentes de OpenAI permiten que un GitHub Issue sin auth ejecute código en CI y acceda a secrets."
---

![Claude Code Gemini CLI CI Secrets Vulnerability](../../assets/images/2026-08-09-claude-code-gemini-cli-github-issues-ci-secrets.jpg)

Si usas **Claude Code**, **Gemini CLI** o los **agent repos de OpenAI** en tus pipelines de CI, lee esto con atención. La firma **Novee Security** reveló en el contexto de **Black Hat / DEF CON 2026** una vulnerabilidad que afecta las configuraciones por defecto de las tres herramientas principales de coding agents.

## El problema

Las configuraciones por defecto de estos agentes permiten que un **GitHub Issue sin autenticar** dispare la ejecución de código en los **CI runners** y acceda a los **workflow secrets** del repositorio.

En palabras simples: alguien externo abre un issue en tu repo, y tu agente de IA automáticamente lo procesa, ejecuta código y potencialmente expone tus tokens, API keys y credenciales.

## ¿Cómo funciona?

El patrón es el mismo en los tres casos:

1. El agente (Claude Code, Gemini CLI, OpenAI agent) está configurado para responder automáticamente a issues o PRs
2. Un atacante crea un issue cuidadosamente elaborado con instrucciones maliciosas
3. El agente procesa el issue como si fuera una instrucción legítima
4. El código se ejecuta en el runner de CI con acceso a los secrets del workflow

Esto es básicamente **prompt injection remoto vía GitHub Issues**, pero con consecuencias reales en CI.

## ¿Por qué es grave?

- **No requiere autenticación**: cualquiera puede abrir un issue público
- **Acceso a secrets de CI**: tokens de cloud, API keys, credenciales de deploy
- **Es la config por defecto**: los equipos no necesitan haber hecho nada malo para ser vulnerables
- **Los tres vendors principales están afectados**: Anthropic, Google, OpenAI

## El contexto mayor

Esto viene a sumarse a una semana brutal para la seguridad de agentes de IA:

- **CoreBreak** (AWS Bedrock, Google ADK, Vercel AI SDK) — ejecución de tools sin autorización
- **SCTPhantom** — escape de contenedores en Linux
- **npm provenance** — attestations usadas como camuflaje
- **DEF CON 34** demostró que los agentes de IA son sustancialmente menos seguros de lo que se vende

La narrativa de "los agentes de IA ya están listos para producción sin supervisión" se desmorona a cada nueva investigación.

## Qué hacer

1. **Revisa la configuración de tu CI**: si tienes Claude Code, Gemini CLI o agentes de OpenAI respondiendo automáticamente a issues/PRs, desactívalo o restringe quién puede crearlos
2. **Usa `pull_request_target` con cuidado**: los secrets no deberían estar accesibles en workflows que procesan input externo
3. **Filtra los triggers**: solo procesa issues de colaboradores autenticados
4. **Sanitiza el input**: trata cualquier contenido de issues/PRs como no confiable
5. **Monitorea los logs de CI**: busca ejecuciones inusuales

Anthropic respondió que el comportamiento es "by design" (diseñado así intencionalmente), lo que es... cuestionable. Pero ya hay fixes disponibles en las versiones más recientes.

---

**Fuentes:** [Develeap News](https://www.develeap.com/news/five-ai-rivals-just-backed-a-shared-plugin-standard-here-s-w/), [The Hacker News](https://thehackernews.com), [Wikitree](https://www.wikitree.co.kr/articles/1151154), [WindowsForum](https://windowsforum.com/windows-news.4/claude-code-cursor-copilot-permissions-drive-ai-security-risk.442087/)
