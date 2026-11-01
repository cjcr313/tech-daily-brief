---
title: "Extensión oficial de Claude Code troyanizada en el marketplace de Cursor: backdoor SSH y hasta 5.000 devs afectados"
author: Carlos
pubDatetime: 2026-11-01T13:11:00Z
slug: claude-code-extension-troyano-ssh-cursor
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
description: "Versiones 2.1.312 y 2.1.313 de la extensión oficial de Claude Code fueron comprometidas en el marketplace de Cursor, instalando un backdoor SSH persistente. Si la instalaste, asume máquina comprometida."
---

![Ilustración editorial tech de un caballo de Troya de madera disfrazado de caja de paquete de software entrando a una terminal de desarrollo con resplandor de alerta e ícono de llave SSH, paleta rojo oscuro y pizarra, estilo revista de ciberseguridad, sin texto](../../assets/images/2026-11-01-claude-code-extension-troyano-ssh-cursor.jpg)

Supply chain attack de los que duelen: el 29 de octubre, **versiones troyanizadas (2.1.312 y 2.1.313) de la extensión oficial `anthropic.claude-code` de VS Code fueron publicadas en el marketplace de Cursor**, haciéndose pasar por actualización legítima. Estuvieron disponibles unas **11 horas** (≈09:27 a 20:35 UTC) y su payload intentaba instalar un **backdoor SSH persistente**. Cursor estima un blast radius de **"a lo más 5.000 usuarios"**.

## Qué hacía el payload

Según los análisis de Phorion y StepSecurity, el paquete malicioso:

- Agregaba una **llave SSH controlada por el atacante** etiquetada `svc-telemetry` a `~/.ssh/authorized_keys`.
- Levantaba un **túnel SSH reverso** hacia un servidor externo, más un beacon HTTP en el puerto 8099.
- Instalaba **persistencia**: un scheduled task "SysMon" en Windows y un LaunchAgent `com.apple.sysmond` en macOS.

La ironía amarga: la extensión tenía **badge de publisher verificado**. El caballo entró con credenciales en regla. Cómo el atacante logró publicar la versión en el marketplace de Cursor todavía no está aclarado; lo que sí está claro es que el origen fue ese marketplace, no Open VSX ni el marketplace de Microsoft.

## Remediación, sin crema

Si instalaste o actualizaste Claude Code en Cursor el 29 de octubre:

1. **Revisa `~/.ssh/authorized_keys`** buscando la llave `svc-telemetry`. Si está, Cursor recomienda tratar la máquina como comprometida.
2. Busca persistencia: LaunchAgents/cron en macOS, scheduled tasks en Windows.
3. **Rota todo credencial que haya vivido en variables de entorno o archivos de config** del proyecto — tokens de API, llaves de deploy, todo.
4. Instala la versión limpia: Anthropic publicó la **2.1.314** el 30 de octubre en Open VSX y VS Code Marketplace, y el servidor C2 ya fue bajado por su hosting.

## La lección de arquitectura

Esto golpea justo donde más confiamos: la actualización automática de extensiones es una feature de seguridad… hasta que la actualización **es** el atacante. Para equipos de plataforma, el incidente refuerza tres cosas: auditar qué marketplaces permiten sus IDEs gestionados (Cursor usa el suyo propio, con superficie distinta a Open VSX), monitorear `authorized_keys` y LaunchAgents como parte del baseline del host, y asumir que el badge de publisher verificado no es garantía de integridad del artifact. El developer laptop es perimeter, y esta vez lo probaron con un caso real.

**Fuentes:** [aviso de seguridad de Cursor](https://cursor.com/blog/claude-code-extension-security-notice), [The Hacker News](https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html), [Help Net Security](https://www.helpnetsecurity.com/2026/10/30/claude-code-extension-ssh-backdoor/), [StepSecurity](https://www.stepsecurity.io/blog/claude-code-extension-trojanized).
