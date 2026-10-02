---
title: "Anthropic abre la caja negra: métricas para medir el ritmo de desarrollo de IA dentro de los labs frontier"
author: Carlos
pubDatetime: 2026-10-02T21:10:00Z
slug: anthropic-metricas-ritmo-desarrollo-ia
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Anthropic publicó métricas concretas de su operación interna: Claude ya 'lidera' el 26% del I+D de IA, 30.000 agentes corriendo en paralelo y solo 6% del compute de investigación va a seguridad."
---

![Ilustración editorial de paneles de monitoreo y gráficos iluminando el interior de un laboratorio de IA futurista con servidores, paleta azul y naranja](../../assets/images/2026-10-02-anthropic-metricas-ritmo-desarrollo-ia.jpg)

Mientras la industria debate si frenar o no el desarrollo de IA frontier — con la FTC investigando, California citando a OpenAI y Amodei pidiendo "pacear" la frontera — Anthropic hizo algo que nadie había hecho con este nivel de detalle: **publicar números concretos de lo que pasa adentro de su casa**. El [post del Anthropic Institute](https://www.anthropic.com/institute/measuring-pace-of-ai-development) propone tres familias de métricas y entrega un snapshot interno. La idea es simple: si el mundo va a discutir el ritmo de la IA, mejor que la discusión sea con datos y no con vibes.

## 1. ¿Cuánta IA está construyendo IA?

Anthropic construyó un prototipo de índice — el **R&D Automation Index** — que cataloga cada tipo de trabajo de I+D y lo califica con la escala de automatización de Epoch AI (AL0 a AL5, donde AL5 es autonomía total). Los números, a agosto 2026:

- **Claude "lidera" (AL4) el 26% del I+D de IA de Anthropic**: hace la mayor parte de la tarea end-to-end desde un prompt de alto nivel, con un humano supervisando.
- **Más del 90% del trabajo está en nivel "colabora" (AL3) o superior**.
- **Ningún subconjunto del trabajo opera con autonomía total** (AL5).

O sea: la recurseividad no es ciencia ficción ni realidad — está en el punto incómodo del medio. Y Anthropic reconoce el problema metodológico: usan sus propios modelos para autoevaluarse, así que el juez podría cometer los mismos errores que el evaluado. Por eso proponen verificación por terceros.

## 2. ¿Cómo se vigila a 30.000 agentes?

El dato que más impresiona: **en agosto 2026 había ~30.000 agentes de Claude haciendo trabajo de investigación e ingeniería simultáneamente** en su plataforma interna más usada. ¿Cómo se controla eso?

- **Monitores online**: 100% de las acciones de los agentes pasan por un monitor en tiempo real antes de ejecutarse. De más de mil millones de decisiones analizadas en agosto, **0,002% fueron bloqueadas (~1 de cada 47.000)**.
- **Monitores offline**: revisan después, flaggeando ~100.000 transcripciones por semana; los clasificadores resuelven la mayoría y solo **~50 por semana llegan a revisión humana**.
- METR ya hizo red-teaming independiente de la plataforma de monitoreo offline.

El argumento es directo: los agentes rara vez se portan mal individualmente, pero con millones operando en la economía, "eventos raros" dejan de ser raros. La métrica pública (cobertura, latencia de revisión, tasa de escalación) permitiría verificar si el oversigth va al paso de la automatización.

## 3. ¿En qué se gasta el compute?

Snapshot de una semana de julio 2026: **~6% del compute destinado a I+D de IA fue a trabajo de seguridad, y ~12% del compute de I+D hecho por IA** (sí: los agentes gastan proporcionalmente más en seguridad que los humanos). Anthropic admite que son estimaciones deliberadamente conservadoras y que safety usa naturalmente menos compute que un training run frontier — el valor está en poder comparar manzanas con manzanas entre labs y en el tiempo.

## Por qué importa

Esto no es un paper más: es la primera vez que un frontier lab publica **métricas operativas internas verificables en teoría** — automatización del I+D, oversigth de agentes, asignación de compute — con metodología y apéndice incluidos. Anthropic dice que seguirá publicándolas y que instalará **evaluadores externos independientes embebidos**, con acceso comparable al de sus equipos internos de riesgo.

El contexto importa: esto llega dos semanas después del ensayo de Amodei pidiendo coordinar el ritmo, y días después de que OpenAI despidiera a tres miembros de su equipo de seguridad. Si otros labs (OpenAI, Google, Meta, los chinos) replican el formato, el debate sobre pacing pasa de discursos a dashboards. Y si no lo replican, la ausencia también es información.

*Fuentes: [Anthropic Institute](https://www.anthropic.com/institute/measuring-pace-of-ai-development), [August 2026 Risk Report](https://www.anthropic.com/aug-2026-risk-report)*
