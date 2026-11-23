---
title: "Claude Ship: Anthropic le entrega la aprobación de pull requests a sus agentes"
author: "Nauta Lab"
pubDatetime: 2026-11-23T21:05:00Z
slug: claude-ship-anthropic-aprueba-prs
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "Anthropic lanzó Claude Ship en beta: tres agentes que revisan, arreglan y aprueban pull requests según políticas que define cada equipo. El cuello de botella del review humano tiene fecha."
---

![Ilustración editorial de agentes de IA revisando y aprobando el flujo de pull requests en una línea de ensamble de código](../../assets/images/claude-ship-anthropic-aprueba-prs.jpg)

Anthropic lanzó hoy **Claude Ship**, disponible en beta, y el nombre lo dice casi todo: mover el ciclo completo del pull request — review, fixes y aprobación — hacia agentes de Claude, bajo políticas que cada equipo define en su propio repositorio. La validación interna ya la tenían: en el equipo de Claude Code, donde Claude escribe la mayoría del código, los PRs mergeados **más que se duplicaron entre junio y septiembre** mientras los cambios revertidos caían más de 40%.

## El trío que compone Ship

Claude Ship no es un producto monolítico sino tres piezas encadenadas:

- **Code Review (ya en GA)**: revisa PRs contra el código completo desde múltiples ángulos, verifica adversarialmente los hallazgos y los publica en el PR. Tres niveles por repositorio: Quick, Standard y Deep.
- **PR Steward (beta)**: el conserje. Salta sobre checks de CI fallidos, conflictos de merge y feedback de review, y después de cada push comenta qué cambió y cómo deshacerlo. Se conduce con `@claude` más una instrucción, y se retira con `@claude stop`.
- **Claude Approvals (beta)**: la pieza polémica. Aplica una política de aprobación escrita como archivo dentro del repo — "un CODEOWNERS más inteligente", en palabras de Anthropic — y puede aprobar cambios rutinarios por cuenta propia o exigir sign-off humano según el escenario.

## Poder de merge, pero con correa

Lo rescatable es la arquitectura de confianza: nada de "apruébalo todo, Claude". La política vive en el repositorio, los admins deciden dónde corre cada pieza, y la recomendación oficial es partir en modo *observe-only* antes de configurar branch protection para exigir el visto bueno del agente. Para desarrolladores individuales existe el comando `/ship` en Claude Code, que empuja el cambio, abre el PR y trabaja el feedback hasta dejarlo listo para merge.

De yapa comercial: las organizaciones elegibles de Claude Enterprise pueden reclamar al menos US$10.000 en créditos de Ship antes del 15 de enero de 2027.

La pregunta de fondo queda servida para cualquier equipo que ya delega la escritura de código: si un agente escribe la mayoría de las líneas, ¿qué sentido tiene que un humano firme cada merge? La apuesta de Anthropic es que la respuesta correcta es "política, no persona".

**Fuentes:** [Anthropic](https://claude.com/resources/articles/introducing-claude-ship) · [The New Stack](https://thenewstack.io/anthropic-claude-ship-approvals/)
