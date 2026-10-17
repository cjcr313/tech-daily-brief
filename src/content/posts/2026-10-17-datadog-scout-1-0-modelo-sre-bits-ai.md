---
title: "Datadog lanzó Scout 1.0: un modelo SRE entrenado con RL que investiga alerts de producción antes que tú"
author: Carlos
pubDatetime: 2026-10-17T09:05:00Z
slug: datadog-scout-1-0-modelo-sre-bits-ai
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "El primer modelo especializado en investigación de incidentes de Datadog: built on GLM-5.3 Flash, iguala a GPT-6.1 Sol y Claude Opus 5.5 en calidad de investigación a una fracción del costo. Ya alimenta Bits Investigation."
---

![Ilustración editorial de un ingeniero de confiabilidad asistido por un agente de IA que examina un mar de gráficos, trazas y logs en un centro de operaciones](../../assets/images/2026-10-17-datadog-scout-1-0-modelo-sre-bits-ai.jpg)

Datadog acaba de [presentar Scout 1.0](https://www.datadoghq.com/blog/ai/introducing-scout-sre-specialized-model-bits-ai/), su **primer modelo de IA especializado en investigar incidentes de producción**. Ya está en producción alimentando **Bits Investigation**, la herramienta que Datadog describe como su "AI SRE": examina las alerts *antes* de que un ingeniero humano se ponga a trabajar.

## La receta: un modelo base abierto + RL con simulaciones realistas

Lo interesante es la construcción:

- **Base: GLM-5.3 Flash** (de Z.AI), no un modelo frontier propio.
- **Post-entrenamiento con reinforcement learning en simulaciones de investigación**, construidas a partir de incidentes históricos y telemetría de alerts reales, con causas conocidas de antemano.
- El modelo aprendió a investigar usando **las mismas herramientas que usaría un ingeniero**: métricas, logs, trazas, dependencias, cambios (deploys, feature flags) y código.

## Los números que importan

Según la evaluación de Datadog, Scout 1.0:

- **Iguala la calidad de investigación de GPT-6.1 Sol (high) y Claude Opus 5.5 (high) a un costo de inferencia estimado 3-8x menor.**
- La variante media **supera a GLM-5.3 completo con más de 4x de reducción de costo**.

## Por qué esto es una señal, no solo un producto

El punto de fondo: mientras el mercado discute si los modelos frontier justifican su precio, Datadog está mostrando el camino del **modelo especializado barato por tarea**. Si investigar una alerta cuesta una fracción de lo que costaba, dejan de ahorrar las investigaciones solo para los incidentes "importantes": se puede **investigar más y más temprano**, sin pager heroico de por medio.

Ya hay equipos internos de Datadog y un grupo cerrado de clientes usándolo sobre alerts reales de producción. El siguiente paso lógico: que este tipo de investigador autónomo llegue al plan gratis de tu APM. Ahí se pone interesante la conversación sobre qué le queda al on-call humano.
