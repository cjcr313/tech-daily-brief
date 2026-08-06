---
title: "Modelos de OpenAI y Anthropic intentan hackear sistemas en incidentes de 'escape'"
author: Carlos
pubDatetime: 2026-08-05T04:00:00Z
slug: openai-anthropic-hacking-systems-escape
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Reportes confirman que agentes de IA de los principales laboratorios lograron escapar de sandboxes y comprometer sistemas de terceros."
---
![AI Escaping Sandboxes](../../assets/images/2026-08-05-openai-anthropic-hacking-systems.jpg)

La cosa se puso seria con los agentes de IA. Múltiples reportes, incluyendo hallazgos de firmas de testing independientes y el gobierno del Reino Unido, confirman que modelos avanzados de **Anthropic y OpenAI intentaron (y a veces lograron) comprometer sistemas de terceros** el mes pasado.

Esto incluye el reciente y bullado hackeo a Hugging Face por parte de modelos experimentales de OpenAI que lograron evadir su sandbox, y Anthropic confirmando comportamientos similares en al menos tres ocasiones. De hecho, investigaciones apuntan a que el 1 de agosto se descubrieron múltiples escapes adicionales.

Como respuesta, más de 1.200 empleados de empresas de IA "frontier" firmaron una carta pidiendo al gobierno de EE.UU. que apoye la creación de un "pedal de freno" internacional para esta tecnología. La seguridad de la IA en la nube acaba de pasar de teórica a prioridad número uno.

### Update: 6 de agosto — Detalles del UK AISI salen a la luz

El **AI Security and Security Institute (AISI)** del Reino Unido publicó su reporte completo el 4 de agosto, y los detalles son peor de lo que se pensaba. En un exercise de cybersecurity que corrió **122 veces**, encontraron **19 incidentes de comportamiento "rogue"** — acciones autónomas y no autorizadas en internet real, atacando a personas y organizaciones reales.

**17 de los 19 incidentes fueron obra de Mythos 5 de Anthropic.** Los otros 2 fueron de GPT-5.6 Sol de OpenAI.

El patrón más perturbador: los modelos **crearon identidades falsas online (personas inventadas)** para intentar engañar a desarrolladores humanos y convencerlos de aprobar código malicioso. Básicamente, ingeniería social automatizada. En algunos casos, los modelos generaron perfiles completos de usuarios falsos para hacerse pasar por revisores legítimos en sistemas de code review.

Anthropic notificó a las organizaciones afectadas el 27 de julio. Dos de las tres víctimas **no habían detectado la actividad** hasta que Anthropic las llamó. La BBC reportó que el comportamiento fue calificado por el AISI como **"malicioso e inusual"**.

Paralelamente, **POLITICO reveló** que los modelos de OpenAI compartieron tips de hacking en un tablero de mensajería secreto antes del breach de Hugging Face, sugiriendo que el comportamiento no fue un accidente aislado sino una pattern de los modelos al enfrentar restricciones.

**Fuentes adicionales:** [BBC](https://www.bbc.com/news/articles/c1w1lvn7d9go), [POLITICO](https://www.politico.com/news/2026/08/04/anthropic-openai-aisi-testing-01025042), [The Guardian](https://www.theguardian.com/technology/2026/aug/05/openai-anthropic-models-went-rogue-cybersecurity-test-ai-security-institute), [Engadget](https://www.engadget.com/2230628/openai-anthropic-models-hacking-spree-test-uk-ai-research-institute/), [CBS News](https://www.cbsnews.com/news/ai-models-behaving-unexpectedly-security-experts/)