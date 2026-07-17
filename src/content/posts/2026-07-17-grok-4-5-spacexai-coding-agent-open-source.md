---
title: "Grok 4.5 y Grok Build: xAI libera su modelo coding y lo hace open source"
author: Carlos
pubDatetime: 2026-07-17T04:05:00Z
slug: grok-4-5-spacexai-coding-agent-open-source
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "SpaceXAI lanzó Grok 4.5 (#1 en uso agéntico) y abrió el código de Grok Build, su agente de coding tipo Claude Code."
---

xAI (ahora SpaceXAI) acaba de hacer dos movimientos pesados esta semana: lanzó **Grok 4.5** — su modelo enfocado en coding y tareas agénticas — y abrió el código de **Grok Build**, su agente de programación para terminal.

## Grok 4.5: eficiente y barato

El modelo está basado en la fundación V9 de 1.5 trillones de parámetros, entrenada en el cluster Colossus. Lo interesante: fue entrenado con **datos de sesiones reales de Cursor** (recordemos que xAI compró Cursor por $60 mil millones). Eso significa que aprendió de cómo los desarrolladores navegan y editan código en sesiones largas.

Los benchmarks independientes de **Artificial Analysis** lo colocan:

- **#4 global** en el Intelligence Index (score 54), detrás de Fable 5, GPT-5.5 y Opus 4.8
- **#1 en uso agéntico de herramientas** — la métrica que más importa para coding agents
- SWE Bench Pro resolve rate: **64.7%** (vs Fable 80.4%, Opus 4.8 69.2%)
- Terminal Bench 2.1: **83.3%** (competitivo con Fable 84.3% y GPT-5.5 83.4%)

Pero donde mata es en precio: **$2/$6 por millón de tokens** (input/output), vs los $5/$25 de Claude Opus 4.8. Y es eficiente con tokens: usa ~14K tokens de output por tarea vs ~67K de Opus. Eso hace que el costo real por tarea sea mucho menor.

Context window de **500K tokens** con dial de razonamiento ajustable por llamada.

## Grok Build: open source y en Rust

Junto con el modelo, abrieron **[grok-build](https://github.com/xai-org/grok-build)** en GitHub. Es el agente de coding que usa xAI internamente, escrito en Rust:

- TUI fullscreen interactivo con mouse
- Edita archivos, ejecuta comandos, busca en la web
- Soporta modo headless para CI/scripting
- Compatible con **Agent Client Protocol (ACP)** para integrarse con editores
- Binarios precompilados para macOS, Linux y Windows
- Licencia Apache 2.0

Esto lo pone directo contra **Claude Code** y **OpenAI Codex CLI** en la guerra de harnesses de coding. La diferencia es que el código está abierto.

Instalación rápida:

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
```

## La guerra de los harnesses

Lo de fondo acá es estructural. Cada laboratorio de IA está construyendo su propio harness (Cursor/xAI, Codex/OpenAI, Claude Code/Anthropic) porque el harness **genera los datos de entrenamiento** para el siguiente modelo. No es un producto separado — es la máquina que produce el signal.

Grok 4.5 demuestra la tesis: entrenó en traces de Cursor y quedó #1 en agentic tool use. No es coincidencia.

## Precios comparados

| Modelo | Input/M tokens | Output/M tokens |
|--------|---------------|-----------------|
| Grok 4.5 | $2 | $6 |
| Claude Opus 4.8 | $5 | $25 |
| GPT-5.5 | ~$10 | ~$30 |

Para equipos que están gastando fuerte en APIs de coding, Grok 4.5 cambia bastante la ecuación de costos.

---

🔗 [Anuncio oficial](https://x.ai/news/grok-4-5) · [Grok Build en GitHub](https://github.com/xai-org/grok-build) · [Artificial Analysis](https://artificialanalysis.ai/)
