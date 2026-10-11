---
title: "REA conecta Claude Code y Cursor con Ghidra e IDA Pro para ingeniería inversa autónoma"
author: Carlos
pubDatetime: 2026-10-11T21:25:00Z
slug: rea-reverse-engineer-anything-mcp-ghidra
featured: false
draft: false
tags:
  - DevOps
  - Seguridad
description: "Reverse Engineer Anything es un proyecto open source que usa MCP para darle a los agentes de código acceso a pseudocódigo, ensamblador y símbolos de binarios nativos, firmware, .NET y Android. Su caso de estudio reconstruyó la matemática de audio de DX-Ball y pasó 3.205 tests contra el código original."
---

![Ilustración editorial de un robot de seguridad desensamblando un cubo binario brillante en capas de bloques de ensamblador y símbolos, con lupas y diagramas de flujo flotando alrededor, paleta oscura con acentos cian y verde, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-11-rea-reverse-engineer-anything-mcp-ghidra.jpg)

Los agentes de código ya escriben, migran y refactorizan. Ahora también quieren desensamblar. **REA (Reverse Engineer Anything)** es un proyecto open source que actúa como **puente MCP entre agentes de código — Claude Code, Cursor, Codex, Gemini CLI y Grok Build — y las herramientas clásicas de ingeniería inversa: Ghidra, IDA Pro y Hopper**. La idea: que un agente pueda pedir análisis de un binario, seguir el código que le interesa y recibir hallazgos **con evidencia y límites declarados**, en vez de alucinar a partir de strings.

## Qué hace exactamente

REA levanta un **servidor MCP local** al que los agentes consultan. Para binarios nativos devuelve **pseudocódigo, instrucciones de ensamblador, strings, símbolos, llamadas a funciones y referencias** — el material con el que un analista reconectaría una feature visible con el código que la implementa. Desde ahí el agente puede seguir haciendo preguntas o **escribir y probar una implementación** basada en lo que encontró.

El alcance no es solo binarios nativos:

- **JavaScript y Electron**: mapea módulos, imports, source maps, rutas y comunicación entre procesos.
- **.NET**: inspección estática de metadata, instrucciones de lenguaje intermedio (IL) y dependencias nativas declaradas.
- **Android, firmware, sitios web y algo de actividad en runtime**, todo sin motor de análisis nativo para los casos no-binarios.
- Los flujos también están disponibles **vía terminal** para los que prefieren scripting puro.

## El caso de estudio que convence

En su showcase de DX-Ball (el clásico de 1996), REA **reconstruyó la matemática de posicionamiento de sonido del juego original**: la implementación recuperada **pasó 3.205 tests contra el código x86 original y reprodujo los 63 bytes compilados de la función** exactos. Ese es el estándar de "ingeniería inversa con evidencia" que el proyecto quiere demostrar — no adivinar, sino reconstruir verificable.

## Lo práctico para tu toolkit

- **Instalación**: `npx rea-agents setup` con Node.js — el setup pregunta qué agentes configurar, **respalda la configuración existente** y pide reinicio del agente. Otros clientes MCP pueden registrarse manualmente.
- **Requisito**: el análisis nativo profundo necesita Ghidra, IDA o Hopper instalados (Hopper puede instalarse desde el setup con tu aprobación).
- **El repositorio** está en [github.com/morluto/rea](https://github.com/morluto/rea).

Para equipos de seguridad y DevSecOps, esto apunta a un cambio de flujo real: el análisis de un CVE en un binario sin fuente, la verificación de una dependencia sospechosa o el triage de malware empiezan a ser tareas donde **el agente hace el trabajo sucio y el analista valida la evidencia**. Como todo con agentes autónomos: la confianza se gana con trazabilidad, y por ahora REA parece haber entendido la tarea.

**Fuente:** [Cyber Security News](https://cybersecuritynews.com/reverse-engineer-anything-tool/) · [Repositorio REA](https://github.com/morluto/rea)
