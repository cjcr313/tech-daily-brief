---
title: "La guerra de los modelos de decisión: Cloudflare abre Clef y Amazon responde con Strands Decider"
author: Carlos
pubDatetime: 2026-10-01T21:00:00Z
slug: guerra-modelos-decision-clef-strands-decider
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Cloudflare open-sourcea Clef y Clef-flash (líderes del Jev Decision Index) y Amazon suelta Strands Decider 2B. La categoría de modelos de decisión pasó de experimento a guerra abierta en dos semanas."
---

![Ilustración editorial tech de dos pequeños nodos brillantes tomando decisiones instantáneas en un cruce de caminos de datos, compitiendo en velocidad, estilo ilustración editorial con paleta naranja y azul](../../assets/images/2026-10-01-guerra-modelos-decision-clef-strands-decider.jpg)

Hace dos semanas TypeSafe AI lanzó Jev y nadie sabía bien si "modelo de decisión" era una categoría real o un buzzword de temporada. Ayer te contamos del Simple Jev de Featherless. Hoy la pregunta quedó respondida a lo grande: **Cloudflare y Amazon entraron a la pelea el mismo día**, cada uno con un modelo open source propio.

## Cloudflare Clef: el primero entrenado por la gente de Workers AI

Cloudflare lanzó **Clef y Clef-flash**, los primeros modelos entrenados por su equipo de Workers AI, disponibles hosted en Workers AI y con **pesos abiertos en Hugging Face bajo Apache 2.0**. Son modelos de decisión: reciben un estado de entrada y un conjunto de preguntas tipadas, y devuelven una **probabilidad por cada respuesta permitida**, en vez de generar texto.

Los números que importan:

- **Lideran 7 de los 10 benchmarks del Jev Decision Index**, incluyendo routing de herramientas (BFCL), selección de contexto y clasificación bancaria.
- Hasta **13x más rápidos que Jev** en las evaluaciones de latencia que corrieron.
- **Encoder de visión**: clasifican imágenes, cosa que Jev todavía no hace (es solo texto).
- **Contexto de 64k** versus los 32k de Jev.
- **Compatibles con la API de Jev**, así que migrar es prácticamente cambiar el endpoint.
- De yapa, debutó su plataforma de **fine-tuning por refuerzo (RL)** para adaptar Clef a tus datos.

Y no es teoría de laboratorio: el equipo de Threat Intelligence de Cloudflare ya lo usa para clasificar sitios web (fetch + render + clasificación en 2,2 segundos, versus 4,7 segundos de su LLM más rápido). La mitad del tiempo, el doble de las categorías.

## Amazon Strands Decider 2B: el guardián de tus agentes

Por su parte, Amazon salió con **Strands Decider 2B** desde Strands Labs, su proyecto experimental de desarrollo agéntico. Es un modelo de ~2 mil millones de parámetros fino-tuneado desde Qwen3.5-2B, con un giro de arquitectura interesante: le sacaron el componente que predice la próxima palabra y le pusieron un "pointer head" que **puntúa directamente las opciones de respuesta** (le pusieron "Hobson" a la arquitectura, por si el nombre suena raro en los papers).

- **Apache 2.0**, gratis en Hugging Face, con datos de entrenamiento y scripts incluidos.
- Latencia mediana de **106 ms (y p95 de 296 ms) en una RTX 3090 local**, incluyendo el round trip HTTP.
- El caso de uso estrella: actuar de **checkpoint antes de que un agente ejecute una tool** — ¿la ciudad la pidió el usuario o la inventó el agente? ¿es demasiado temprano para llamar esta API? — y mandar de vuelta al agente a preguntar si hace falta.

## Por qué esto importa

- **Los agentes deciden más de lo que escriben.** Rutear, elegir herramienta, evaluar salida, aprobar acción: cada uno de esos pasos paga el precio de un LLM conversacional cuando en realidad solo necesita una etiqueta con probabilidad. Es el argumento del tanque y la pizza, ahora con gigantes fabricando scooters.
- **El precio de "decidir" se derrumbó.** Con OpenAI teniendo ya su Decisions API, Jev en el mercado, y ahora Clef y Strands Decider gratis y open source, la decisión dejó de ser un costo de razonamiento frontier.
- **Apache 2.0 en todos lados** significa que puedes auto-hospedar el cerebro de guardrails de tus agentes sin mandar cada micro-decisión a una API de terceros.

Dos semanas, cuatro jugadores. A este ritmo, para fines de mes "decision model" va a ser un ítem estándar en el stack de cualquier equipo que haga agentes serios.

**Fuentes:** [Cloudflare Blog](https://blog.cloudflare.com/clef-decision-models/) · [Strands Agents](https://strandsagents.com/blog/introducing-strands-decider/) · [VentureBeat](https://venturebeat.com/technology/amazon-unveils-a-free-fast-open-source-jev-killer-strands-decider-2b-makes-decisions-in-fractions-of-a-second)
