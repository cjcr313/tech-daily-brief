---
title: "Claude Code Mods: ahora puedes reprogramar el agente desde adentro con TypeScript"
author: Carlos
pubDatetime: 2026-10-02T09:05:00Z
slug: claude-code-mods-typescript-agentes
featured: false
draft: false
tags:
  - DevOps
  - IA
description: "Anthropic lanzó Mods para Claude Code: funciones TypeScript que interceptan cada evento del agente, reescriben prompts, bloquean tool calls y hasta redibujan la UI."
---

![Ilustración editorial de módulos tipo puzzle conectándose a una tubería de código en una terminal, con piezas brillantes reconfigurando el flujo](../../assets/images/2026-10-02-claude-code-mods-typescript-agentes.jpg)

Anthropic le abrió las entrañas de Claude Code. El 1 de octubre lanzó **Mods**, pequeñas funciones en **TypeScript/JavaScript** que se cuelgan de los eventos internos del agente y pueden cambiar lo que hace, cómo lo hace y cómo se ve: reescribir prompts antes de que salgan, bloquear o reintentar tool calls, aprobar solicitudes de permisos automáticamente, redactar secretos, modificar elementos de la UI y hasta agregar botones propios.

## ¿Cómo funcionan?

Por debajo, los mods son **hooks** que viajan dentro de **plugins**. Cada mod es un módulo TS/JS que corre dentro de tu sesión y **ve cada evento en tiempo real** a medida que pasa por el pipeline del agente. Se instalan con el comando `/plugin`, lo que convierte a Claude Code en algo mucho más cercano a una plataforma extensible que a un CLI cerrado.

La lista de cosas que un mod puede tocar es larga:

- Reescribir o **reemplazar lo que hace Claude Code** por completo
- Interceptar y filtrar tool calls (adiós comandos peligrosos en producción)
- Auto-aprobar permisos según reglas propias de la organización
- Redactar secretos antes de que lleguen al modelo
- Dibujar **UI custom** dentro de la terminal

Anthropic dice que ellos mismos ya usaron mods internamente para construir features como `/diff` y el soporte de `AGENTS.md`. Buena señal: comen su propia comida.

## La letra chica

Los mods corren **sin sandbox, con acceso completo a la máquina**. Anthropic lo dice sin anestesia: instala mods solo de fuentes confiables. Es el mismo trade-off de siempre con plugins de editor y extensiones de browser, pero ahora el plugin puede ejecutar acciones de un agente con permisos. Para equipos enterprise, esto va a requerir una política clara de qué mods se permiten, igual que ya hacen con extensiones de VS Code.

El lanzamiento viene en **Claude Code 2.1.287**, junto con 106 cambios en el CLI. Y la comunidad no perdió tiempo: en las primeras 24 horas ya había alguien corriendo un Tetris dibujado con mods en la UI del agente. Clásico.

## Por qué importa

La guerra de los agentes de código se estaba peleando en modelos y precios. Con mods, Anthropic mueve la pelea al **terreno de la extensibilidad**: si cada equipo puede adaptar el agente a sus flujos, políticas y hasta a su branding interno, el lock-in se vuelve pegajoso a favor del que tiene la plataforma más hackeable. Es la misma jugada que hizo VS Code con las extensiones — y ya sabemos cómo terminó eso.

## Enlaces
- [Claude.dev: Getting started with Claude Code mods](https://claude.dev/blog/getting-started-with-claude-code-mods/)
- [Runtimewire: Anthropic lets Claude Code mods rewrite prompts](https://runtimewire.com/article/anthropic-claude-code-mods-typescript-permissions)
