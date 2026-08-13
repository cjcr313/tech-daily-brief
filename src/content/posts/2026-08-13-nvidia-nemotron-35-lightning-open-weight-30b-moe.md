---
title: "Nvidia Nemotron 3.5 Lightning: el modelo open-weight de 30B que se entrena en una H100"
author: Carlos
pubDatetime: 2026-08-13T04:00:00Z
slug: nvidia-nemotron-35-lightning-open-weight-30b-moe
featured: false
draft: false
tags:
  - IA
description: "Nvidia lanzó Nemotron 3.5 Lightning, un modelo MoE de 30B parámetros open-weight que promete 4x velocidad de output y fine-tuning barato. También presentó NeMo Switchyard, un router para agentes IA."
---

![Ilustración editorial de un rayo de luz azul simbolizando un modelo IA ligero y veloz sobre un fondo de circuitos, estilo tech editorial](../../assets/images/2026-08-13-nvidia-nemotron-35-lightning-open-weight-30b-moe.jpg)

Nvidia no se queda solo fabricando chips. Esta semana lanzó **dos productos** que apuntan directo al corazón del problema enterprise: ¿cómo elijo el modelo correcto para cada tarea?

## Nemotron 3.5 Lightning: el workhorse open-weight

Es un modelo **mixture-of-experts (MoE) de 30 mil millones de parámetros**, y según Nvidia entrega:

- **4x más velocidad de output** comparado con modelos de su clase
- **30% más rápido en tareas agentic** (completitud de tareas autónomas)
- **Fine-tuning accesible**: un partner lo entrenó en **una sola H100** por ~US$85 en ~2 horas

La clave aquí es que es **verdaderamente open**: pesos, datasets de entrenamiento, datasets de post-training y las recipes/frameworks para reproducirlo. Nada de "open-wash".

Un ejecutivo de Nvidia (Kari Briski, VP de GenAI) contó que CodeRabbit usó la recipe estándar, entrenó por una epoch, y produjo un router agent funcional en una tarde. Otro partner simplemente lo dejó corriendo overnight y recogió los resultados en la mañana.

**Esto es post-training nivel "cargar el lavaplatos y apretar el botón"**.

## NeMo Switchyard: el router inteligente

El segundo anuncio es **NeMo Switchyard**, una librería open-source para **routear prompts entre modelos** según la tarea.

La idea es simple: no todos los pasos de un agente necesitan GPT-5. Algunos necesitan un modelo rápido y barato; otros necesitan razonamiento profundo. Switchyard evalúa qué modelos están disponibles y enruta cada paso al **mejor balance de costo y capacidad**.

Esto es algo que muchos equipos ya construían internamente (routing ad-hoc), pero tener una librería estándar y open-source cambia las reglas.

## Nemotron 4 viene en camino

Reuters también reveló que Nvidia está desarrollando **Nemotron 4**, una familia de modelos cuyo versión más grande tendría **al menos 1 trillón de parámetros**. La estrategia de Nvidia es clara: no competir directamente con OpenAI/Anthropic en el frontier cerrado, sino **dominar el ecosistema open-weight** y aumentar la demanda de GPUs.

Si los modelos son buenos, baratos y corren en hardware de Nvidia... todos ganan (menos la competencia).

## ¿Por qué te debería importar?

Si estás construyendo productos con IA, Nemotron 3.5 Lightning + NeMo Switchyard es básicamente tu **estrategia de cost-reduction**: modelo barato para el 80% de las tareas, router que decide cuándo escalar a algo más caro, y todo open para customizar.
