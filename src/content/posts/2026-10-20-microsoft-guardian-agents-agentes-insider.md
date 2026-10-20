---
title: "Microsoft lanza Guardian Agents: \"los modelos frontier no pueden ser confiables\", y hay que vigilar a los agentes como insiders"
author: Carlos
pubDatetime: 2026-10-20T13:07:00Z
slug: microsoft-guardian-agents-agentes-insider
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Microsoft presentó Guardian Agents para monitorear los agentes IA que las empresas ya desplegaron: Defender detecta 60 tipos de agentes (incluido Claude Code, Codex y OpenClaw) y Nadella pide separar la provisión de inteligencia de la autoridad sobre ella."
---

![Ilustración editorial tech de un guardián robótico corporativo con visor luminoso vigilando una sala de servidores donde múltiples agentes IA pequeños trabajan en terminales, uno de ellos con llaves y candados flotantes cerca, paleta azul profundo con acentos rojo alerta y verde neón, atmósfera de centro de operaciones de seguridad, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-20-microsoft-guardian-agents-agentes-insider.jpg)

Microsoft dejó la ambigüedad de lado: ayer presentó un paquete de funciones de seguridad pensado para proteger a las empresas de **sus propios agentes IA**, tratándolos como lo que en seguridad se llama *insider threat* — la amenaza que ya tiene credenciales y está adentro.

## Guardian Agents: el guardia para tus agentes

La pieza central es **Guardian Agents**, una función para monitorear los agentes IA que una empresa usa, parte de **Project Perception**, el producto que Microsoft lanzó en junio como respuesta a modelos hacker tipo Mythos/Fable de Anthropic y Daybreak de OpenAI. Perception originalmente traía tres equipos de agentes: rojo (ataca), azul (detecta y evalúa) y verde (remenda). El diseño asumía que el hacker IA venía de afuera. El giro ahora: el enemigo puede ser el agente que tú mismo contrataste y pagas.

La frase más citable quedó a cargo de Hayete Gallot, jefa del negocio de seguridad de Microsoft:

> "Lamentablemente, los modelos frontier, sin importar su origen, no pueden ser confiables."

No porque sean maliciosos ni hackeados, explica, sino porque son **impredecibles**: fueron entrenados para completar tareas, no para seguir las normas ni el criterio de tu organización. Y encima les entregamos las llaves del reino.

## Qué trae el paquete concreto

- **Guardian Agents**: monitoreo dedicado del comportamiento de los agentes desplegados.
- **Defender detecta hasta 60 tipos de agentes** que los empleados meten al puesto de trabajo — la lista incluye Claude Code, Codex y OpenClaw. Sí, el detector conoce a los favoritos de todos.
- **Permisos dinámicos**: límites de acceso a datos y sistemas que se ajustan según la tarea, con **aprobación humana obligatoria** si el agente parece tomar decisiones riesgosas.

## El argumento de Nadella: separar inteligencia de autoridad

La movida se apoya en un post que Satya Nadella publicó a principios de mes en su blog personal: hay que **dejar de confiar en los proveedores de modelos**, aunque ofrezcan garantías de seguridad. La frase-resumen: *"Necesitamos separar la provisión de inteligencia de la autoridad sobre ella"* — igual que un auditor debe ser independiente de la organización que audita.

TechCrunch nota la ironía completa: Microsoft es cercano a OpenAI y Anthropic (inversiones incluidas), así que está sembrando desconfianza contra sus propios socios... mientras te vende el producto para vigilarte. Intereses cruzados aparte, la lógica es difícil de rebatir.

## No es solo Microsoft

La idea del agente-como-insider-no-confiable está cuajando en toda la industria: Microsoft fue miembro fundador de la **Open Agent Safety Platform de NVIDIA** (más de 100 empresas), que aísla agentes en entornos seguros con kill switch por hardware. Le siguió el anuncio de las Surface Laptop Ultra con chips NVIDIA y controles de agentes incluidos de fábrica.

## La lectura

Para equipos de plataforma y SRE, el mensaje operacional es directo: si tus agentes tienen acceso a producción, necesitas **observabilidad y control separados del proveedor que te vendió el agente**. La convergencia seguridad-observabilidad ya no es discurso — es requisito de compra. Y como bonus del día: el mismo día que Splunk publica su informe sobre vigilar a los agentes, Microsoft lanza el producto para hacerlo. La semana se pone buena.

Fuentes: TechCrunch, Microsoft Blog.
