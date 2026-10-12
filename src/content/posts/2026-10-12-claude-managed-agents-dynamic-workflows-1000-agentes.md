---
title: "Claude Managed Agents estrena 'dynamic workflows': un agente que escribe su propio programa y lanza hasta 1.000 subagentes"
author: Carlos
pubDatetime: 2026-10-12T03:10:00Z
slug: claude-managed-agents-dynamic-workflows-1000-agentes
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "Anthropic puso en beta pública los dynamic workflows de Claude Managed Agents: un agente lead escribe un programa, lo ejecuta por fases y coordina hasta 1.000 agentes. En pruebas de caza de bugs encontró 66 fallas donde un agente solo detecta 27."
---

![Ilustración editorial de un agente de IA central brillante orquestando una malla de cientos de nodos-agentes más pequeños organizados en fases, conexiones luminosas estilo diagrama de flujo, paleta violeta y cian sobre fondo oscuro, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-12-claude-managed-agents-dynamic-workflows-1000-agentes.jpg)

Se acabó la época en que un "multi-agente" era un loop con tres herramientas y mucha fe. Anthropic metió a beta pública (release notes del 9 de octubre) los **dynamic workflows** dentro de Claude Managed Agents, y la apuesta es agresiva: **un agente lead escribe su propio programa, lo lanza él solo y coordina hasta 1.000 agentes** que trabajan por fases y combinan resultados.

## Qué es exactamente un "workflow" acá

No es un YAML que escriben tus devs. El agente lead **genera el código del workflow** — un programa que ejecuta muchos agentes en etapas, junta sus salidas y sigue adelante — y después **arranca la corrida por su cuenta**. Las permission policies son las que deciden qué puede tocar sin preguntar y dónde frena a esperarte.

Los números de la documentación (tipo `multiagent_20261001`): **una corrida puede levantar hasta 1.000 agentes a lo largo de su vida, con 64 hilos corriendo en paralelo**. Subagentes y workflows vienen activados por defecto, y cada uno se puede apagar por separado si tu caso de uso no lo justifica.

## El benchmark que duele: 66 bugs vs 27

La cobertura más reciente trae el dato que le importa a cualquier equipo de plataforma: en pruebas de caza de vulnerabilidades sobre **116.000 líneas de código**, un equipo dedicado armado con dynamic workflows encontró **66 vulnerabilidades**, mientras que **un agente solo detecta máximo 27** en el mismo código. Ojo con el detalle: los 66 bugs corresponden al total de tres corridas del workflow, no a una sola pasada mágica.

La diferencia no es magia, es cobertura: distintos agentes revisan distintas partes y fases del código, y el lead consolida. Es el mismo principio de un equipo de revisión humano, pero corriendo en minutos.

## El pero obvio: la factura

Anthropic ya advierte lo que cualquier que haya operado fleets de agentes sospecha: **mide el costo por token antes de lanzar 1.000 agentes a nada**. Todo lo que consume la sesión se cobra a tarifa estándar del modelo (con multiplicadores de prompt caching incluidos), y la recomendación oficial es empezar en pequeño y escalar cuando tengas números reales. Un workflow mal calibrado es la receta perfecta para un-incidente-de-costo.

## Para qué sirve esto en la práctica

Los casos claros: auditorías de código masivas, migraciones, triage de backlogs gigantes, baterías de tests/verificaciones sobre repos grandes. Para eso el salto de "un agente con suerte" a "un equipo coordinado" es real. Para tareas chicas, sigue siendo matar moscas a cañonazos — y caros.

**Fuentes:** [The Decoder](https://the-decoder.com/anthropics-claude-can-now-orchestrate-up-to-1000-ai-agents-in-parallel-through-dynamic-workflows/) · [36kr (benchmark 66 bugs)](https://eu.36kr.com/en/p/4020977816539010) · [Docs de Claude Platform](https://platform.claude.com/docs/en/about-claude/pricing)
