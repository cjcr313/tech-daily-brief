---
title: "OpenAI mete voz en Codex: coding agéntico manos-libres con GPT-Live y GPT-5.6 Terra"
author: Carlos
pubDatetime: 2026-07-26T16:03:00Z
slug: openai-voice-codex-coding-mano-libre-gpt-live
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "OpenAI integró ChatGPT Voice en la app de desktop, conectada directo a Codex. Ahora puedes hablarle, lanzar agentes de coding en paralelo y coordinarlos sin tocar el teclado."
---

El 23 de julio, OpenAI hizo algo que suena simple pero cambia la forma de trabajar con code agents: **metió ChatGPT Voice dentro de la app de desktop** (macOS y Windows), conectada directo a Codex y ChatGPT Work. El resultado: puedes hablarle a tus coding agents y coordinarlos sin tocar el teclado.

## Qué se lanzó exactamente

La capa de voz es **GPT-Live**, el modelo full-duplex que OpenAI lanzó el 8 de julio. Full-duplex significa que escucha y habla al mismo tiempo — no hay que esperar a que termine de hablar para interrumpirlo.

Pero la voz es solo la capa de conversación. El modelo que realmente coordina las tareas en desktop es **GPT-5.6 Terra** (no GPT-5.5 como en mobile/web). La arquitectura es:

- **GPT-Live** → capa de voz, maneja la conversación en tiempo real
- **GPT-5.6 Terra** → modelo backend que arranca y coordina las tareas de Codex
- En mobile/web, la delegación va a GPT-5.5; en desktop, subieron al 5.6 Terra

Esto es un detalle que la mayoría de la cobertura pasó por alto, pero importa: OpenAI está usando el modelo más nuevo (GPT-5.6 GA fue el 9 de julio) como motor de coordinación en desktop.

## Tres patrones de workflow que cambian

**1. Fan-out:** Hablas una instrucción y Codex lanza múltiples threads en paralelo. Ejemplo: "investiga este bug de auth" → un agente revisa logs, otro tracea el código, otro busca en Slack.

**2. Steering en vivo:** Mientras los agentes trabajan, puedes hablarles para redirigir. "No, busca primero en el servicio de pagos" → el agente ajusta sobre la marcha sin que pierdas el contexto.

**3. Review hablado:** Los agentes te presentan resultados y tú respondes por voz. Aprobas, rechazas o pides cambios sin cambiar de ventana.

## Lo que falta

- **No hay API.** Voice en Codex es exclusivo de la app de desktop. No se puede programar contra esto.
- **Android:** iOS ya tiene Remote pairing (controlar Codex desde el celular), pero Android todavía no.
- **Multi-folder projects:** La misma actualización (build 26.715) trajo soporte para proyectos locales multi-carpeta con detección automática de `AGENTS.md`, skills y `config.toml`.

## Por qué importa

La jugada de OpenAI es clara: los developers son uno de los segmentos más lucrativos del mercado de IA, y Codex con voz es un lock-in play. Si te acostumbras a dirigir agentes por voz, migrar de tool se vuelve mucho más difícil.

Además, el patrón de arquitectura — una capa conversacional lightweight que delega a un modelo frontier — es el mismo que Cursor está automatizando con su Router. La decisión de qué modelo hace el trabajo pesado la está tomando el producto, no el usuario.

---

*Fuentes: OpenAI, VentureBeat, Fortune, Digital Applied, Codex Releases*
