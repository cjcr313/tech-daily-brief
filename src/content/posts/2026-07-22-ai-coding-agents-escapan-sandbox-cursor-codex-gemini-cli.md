---
title: "Cursor, Codex, Gemini CLI y Antigravity: todos tienen sandbox escapes por el mismo flaw estructural"
author: Carlos
pubDatetime: 2026-07-22T22:00:00Z
slug: ai-coding-agents-escapan-sandbox-cursor-codex-gemini-cli
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
  - IA
description: "Pillar Security encontró que los 4 AI coding agents más populares comparten el mismo flaw: el agent no rompe el sandbox, solo escribe archivos que herramientas del host ejecutan después. Múltiples CVEs asignados."
---

Pillar Security publicó esta semana una serie que llamaron **"Week of Sandbox Escapes"** — siete vulnerabilidades en los cuatro AI coding agents más usados del mercado. Y todas comparten el mismo patrón estructural.

## El patrón: no rompes el sandbox, solo escribes lo correcto

La idea central es brillante y aterradora: **el agent nunca rompe las reglas del sandbox**. Se queda adentro, obediente. El problema es que los archivos que escribe **no son inerte** — herramientas del host que corren fuera del sandbox los leen, los ejecutan o los procesan.

> Cualquier agent que pueda escribir archivos puede escapar, porque la ejecución es diferida a herramientas del host que están fuera del boundary del sandbox.

Los cuatro modos de falla que identificaron:

1. **Denylists que no siguen el ritmo del OS** — lo que no estaba bloqueado hoy se bloquea mañana, pero el agent ya encontró la grieta
2. **Config del workspace que es código ejecutable disfrazado** — un archivo de configuración que el host ejecuta
3. **Allowlists de comandos "seguros" que confían en el nombre, no en los argumentos** — `git show` suena inofensivo, pero los argumentos pueden hacer cualquier cosa
4. **Daemons privilegiados locales fuera del sandbox** — sockets de Docker, integraciones de Git, extensiones de Python

## Los CVEs y los fixes

| Tool | Flaw | CVE | Fix |
|------|------|-----|-----|
| Cursor | `.claude` hook config → ejecución no-sandboxed | CVE-2026-48124 | v3.0.0 |
| Cursor | Virtualenv interpreter editado por agent | Segundo CVE | v3.0.0 |
| Cursor | Git metadata fuera de `.git` burla path rules | CVE pendiente | v3.0.0 |
| Codex CLI | Allowlist confiaba en `git show` por nombre | CVE pendiente | v0.95.0 |
| Cursor + Codex + Gemini CLI | Docker socket accesible → ejecución remota | GHSA-v4xv-rqh3-w9mc | Fixeado |
| Antigravity | macOS Seatbelt denylist bypass | Sin CVE | Google downgraded |
| Antigravity | `.vscode` task-config bypass Secure Mode | Sin CVE | Google downgraded |

## Google no se la creyó

La respuesta de Google a las dos findings de Antigravity fue **tibia**: las clasificó como "Other valid security vulnerabilities" y aplicó un downgrade, argumentando que requieren social engineering o que el usuario confíe en un repo malicioso.

Pillar contraargumenta que la calidad de los reports fue "excepcional" según el propio equipo de Google. Pero el punto es que **Google no ve los sandbox escapes de Antigravity como criticidad alta** por el vector de entrada.

## Por qué esto es importante

Esto viene arrastrándose desde abril, cuando **Cymulate** documentó el mismo patrón (que llamó "Configuration-Based Sandbox Escape") en Claude Code, Gemini CLI y Codex CLI. Ahora Pillar amplía la muestra y muestra que **es un flaw de clase, no de implementación individual**.

La lección para equipos de DevOps y plataforma: **confiar en que el agent está sandboxed no es suficiente**. Necesitas controlar qué herramientas del host consumen archivos que el agent puede tocar. El modelo de seguridad tiene que cubrir toda la cadena, no solo el boundary del sandbox.

Si tu equipo usa Cursor, actualizar a v3.0.0 es **no negociable**. Si usa Codex CLI, v0.95.0+. Y si usa Antigravity... bueno, Google no parece muy apurado por ti.

**Fuentes:** [BleepingComputer](https://www.bleepingcomputer.com/news/security/cursor-codex-gemini-cli-antigravity-hit-by-sandbox-escapes/), [Pillar Security](https://www.pillar.security/blog/the-week-of-sandbox-escapes), [The Next Web](https://thenextweb.com/news/ai-coding-agents-sandbox-escapes-pillar), [CSO Online](https://www.csoonline.com/article/4199408/ai-agents-can-escape-sandboxes-without-ever-breaking-them.html)
