---
title: "Harness lanza su propio repo de código: un GitHub 'agent-ready' para la era de los agentes IA"
author: Carlos
pubDatetime: 2026-08-31T10:00:00Z
slug: harness-code-repository-agentes-ia
featured: false
draft: false
tags:
  - DevOps
  - IA
  - Arquitectura
description: "Harness lanzó un repositorio de código y un code review con IA pensados para el volumen de PRs y commits que generan los agentes de IA a velocidad de máquina."
---

![Harness Code Repository para agentes IA](../../assets/images/2026-08-31-harness-code-repository-agentes-ia.jpg)

**Harness** —sí, la misma de CI/CD y la "Software Delivery Platform"— se mandó con un movimiento que apunta directo al corazón de GitHub: lanzó su **propio repositorio de código**, diseñado desde cero para equipos que ya están dejando que **agentes de IA** les generen código.

## El argumento de fondo

Martin Reynolds, Field CTO de Harness, lo dice sin pelos en la lengua: herramientas como GitHub **no fueron diseñadas** para el volumen de pull requests y commits que producen los agentes operando a velocidad de máquina. ¿El resultado? Más outages, search e historial que se arrastran porque el indexado queda atrás, y PRs que se acumulan más rápido de lo que cualquier humano puede leer.

El supuesto de las herramientas legacy de source code management es simple: *un humano escribió el código y abrió un PR que otro humano revisará después*. Ese supuesto se cae a pedazos cuando tienes agentes mergeando código por su cuenta.

## Qué trae el Harness Code Repository

- **Escala para miles de PRs y commits simultáneos** de agentes y devs humanos, con search, historial y diffs que siguen funcionando en repos gigantes (hasta decenas de miles de branches).
- **Permisos para agentes**: puedes asignarles permisos específicos o heredarlos del equipo que los desplegó, con RBAC y políticas **OPA** (Open Policy Agent, de la CNCF) para definir qué puede acceder, mergear o deployear cada agente.
- **AI Code Review** que lee el PR, revisa los gates obligatorios y bloquea cualquier merge que falle. Además agrupa los diffs **por riesgo** en vez de por archivo, para que un cambio crítico de comportamiento no se pierda entre un montón de renames.
- **Accesible por MCP server o CLI**: puedes revisar PRs, ver todos los PRs abiertos y responder hilos de comentarios sin abrir el navegador.

Migrar desde GitHub, GitLab, Bitbucket o Azure DevOps toma "un par de clicks", y el plan base es gratis.

## El contexto que importa

Mitch Ashley (Futurum Group) resume bien el momento: **el cuello de botella del desarrollo asistido por IA se movió a la revisión y aprobación**. Los agentes producen código más rápido de lo que los equipos pueden verificarlo, y esa "deuda de verificación" crece más rápido de lo que se pueden contratar revisores.

La apuesta de Harness es clara: que commits, review, builds, tests, seguridad y deploys salgan de una sola secuencia, mapeada en un **SDLC Knowledge Graph** que le da contexto a cada revisión. Según sus early testers, eso ya significó ahorros de **10.000 horas** en un mes.

No es que GitHub vaya a desaparecer mañana, pero la señal es potente: la capa de *code hosting* que dábamos por sentada ya no da abasto con la velocidad de los agentes. Y alguien está feliz de cobrar por ese problema.

---

**Fuente:** [DevOps.com — Harness Unfurls Source Code Repository Alternative to GitHub](https://devops.com/harness-unfurls-source-code-repository-alternative-to-github/)
