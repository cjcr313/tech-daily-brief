---
title: "Anthropic revela que Claude ya ayuda a construir su propia próxima versión: el camino a la automejora recursiva"
author: Carlos
pubDatetime: 2026-09-19T03:00:00Z
slug: anthropic-claude-autoconstruccion-recursiva
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "Anthropic publicó datos inéditos mostrando que Claude lidera una parte creciente del desarrollo del próximo modelo, con los ingenieros despachando 8x más código por trimestre. La automejora recursiva dejó de ser teoría."
---

![Ilustración editorial de un modelo de IA construyéndose a sí mismo, un bucle recursivo de código y circuitos neuronales](../../assets/images/2026-09-19-anthropic-claude-autoconstruccion-recursiva.jpg)

Anthropic acaba de soltar una confesión que suena a ciencia ficción pero viene con datos duros: **Claude ya está ayudando a construir su propia próxima versión**. La empresa publicó este jueves un informe del Anthropic Institute ("When AI builds itself") donde reconoce que una fracción creciente del desarrollo de sus modelos la está haciendo la propia IA.

## Lo que dicen los datos

La cifra que más ruido hace: **los ingenieros de Anthropic despachan en promedio 8x más código por trimestre** que en el período 2021-2025. No es que hayan contratado un ejército: es que los agentes de Claude escriben, editan y ejecutan código cada vez más solos.

La parte de trabajo que Claude "lidera" —o hace en gran parte bajo supervisión humana— **era cero en febrero**. Hoy es una porción relevante del pipeline de R&D, y la tendencia apunta hacia lo que ellos mismos llaman **automejora recursiva** (*recursive self-improvement*): un sistema capaz de diseñar y desarrollar a su propio sucesor de forma autónoma.

## La línea de tiempo que publicaron

Anthropic dividió su historia interna en etapas, y es ilustrativa:

- **2021-2023**: humanos escribiendo código y docs en laptops. La primera versión de Claude.
- **2023-2025**: chatbots ayudando con snippets de código.
- **2025-2026**: coding agents que editan archivos completos solos.
- **Hoy**: agentes autónomos que ejecutan código y **delegan horas de trabajo a otros agentes**.
- **20XX?**: "cerrar el loop" — agentes capaces de entrenar modelos por sí mismos.

El ritmo de mejora respalda la proyección: la duración de las tareas que un modelo completa confiablemente solo **se duplica cada ~4 meses** (antes era cada 7). En marzo de 2024, Claude Opus 3 resolvía tareas de software de ~4 minutos de humano. Un año después, Sonnet 3.7 hacía tareas de hora y media. La curva sigue subiendo.

## El contrapunto de riesgo

Anthropic es explícito en que **la automejora recursiva no es inevitable** y que todavía no llegamos ahí. Pero también advierte que "podría llegar antes de lo que la mayoría de las instituciones están preparadas".

El informe va de la mano de su tesis de seguridad: si un sistema puede construir a su propio sucesor, **la forma en que lo aseguramos, monitoreamos y moldeamos su comportamiento se vuelve muchísimo más importante**. Es el mismo argumento que Dario Amodei viene empujando con sus ensayos sobre la "adolescencia de la tecnología".

## Por qué importa para DevOps y plataforma

Esto no es solo una anécdota de laboratorio. Si la velocidad de los coding agents se está duplicando a ese ritmo, el cuello de botella de los equipos de infraestructura deja de ser "escribir código" y pasa a ser **gobernanza, revisión y seguridad de código generado por agentes**. El propio dato de "8x más código" es un arma de doble filo: más throughput también significa más superficie para bugs, deuda y vectores de ataque.

Para los que operan plataformas: prepárense para pipelines donde la pregunta no es *cuánto* produce tu equipo, sino *quién (o qué) revisó y firmó* cada commit.

**Fuentes:** [Anthropic Institute — When AI builds itself](https://www.anthropic.com/institute/recursive-self-improvement), [AP News](https://apnews.com/article/anthropic-claude-ai-model-self-improvement-4d3a7430f57cbc7c39e1c5f2b7d7e132), [NBC News](https://www.nbcnews.com/tech/tech-news/anthropic-says-model-claude-helping-build-next-version-rcna598494)
