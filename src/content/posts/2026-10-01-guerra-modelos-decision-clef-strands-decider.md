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

### Update: 2 de octubre de 2026 — OpenAI formaliza su entrada con la Decision API (sobre Luna)

Mencionamos de pasada que OpenAI ya tenía su Decisions API; ahora tenemos los detalles. En el DevDay (1 de octubre), OpenAI presentó su **Decision API construida sobre Luna**, su modelo chico y barato. La propuesta:

- Devuelves un conjunto de preguntas con **respuestas predefinidas**, y la API responde con la opción elegida más un **confidence score** — no genera prosa conversacional.
- Latencia de **~150 ms**, apuntando a clasificación de contenido, routing de requests y selección de acciones de agentes.
- Acepta **texto e imagen** como contexto (acá Clef de Cloudflare también tiene encoder de visión, ojo).
- El pricing **todavía no se conoce** — la gran incógnita frente a Jev, Clef y Strands Decider, donde dos de los cuatro son gratis y open source.

Con esto quedan **cuatro jugadores formales en menos de un mes**: TypeSafe (Jev, el que encendió la categoría), Cloudflare (Clef/Clef-flash, Apache 2.0), Amazon (Strands Decider 2B, Apache 2.0) y OpenAI (Decision API, cerrado, sobre Luna). La pregunta deja de ser si los decision models son cosa seria y pasa a ser **qué distribución gana**: ¿open weights auto-hospedados o API hosted con la marca OpenAI detrás?

**Fuente:** [The New Stack — OpenAI answers TypeSafe's Jev with a Decision API built on Luna](https://thenewstack.io/openai-decision-api-luna/)

### Update: 7 de octubre, 2026 — Decisions API en beta pública y ya con precios

La incógnita del pricing quedó resuelta: OpenAI abrió la **Decisions API en beta pública** el 6 de octubre, corriendo sobre **GPT-6 Luna**, con texto e imagen como entrada. Los detalles:

- **Pricing**: US$0,10 por millón de tokens de entrada, **sin cobro de tokens de salida ni de caché** — directamente barato para gating y routing masivo.
- **Tres modos de salida**: predicates (sí/no tipados), choices con confidence score, y numeric scores.
- OpenAI afirma que corre **hasta 10x más rápido** que GPT-6 Luna vía la Responses API, con clasificación en ~150 ms — el pitch es ser la capa de gating sub-segundo de los agentes.
- **Zero Data Retention y HIPAA** para clientes elegibles, con procesamiento regional en EE.UU. y Europa.

Con Cloudflare Clef gratis y open source, esto posiciona la pelea como **precio hosted vs. control self-hosted**. Y ojo que hay un quinto jugador que se sumó sin avisar: **Perplexity con pplx-decider**, al que OpenAI menciona explícitamente como competencia. Cinco jugadores en un mes: la categoría está oficialmente caliente.

**Fuente:** [byteiota — OpenAI Decisions API: 150ms Classification for Agents](https://byteiota.com/openai-decisions-api-150ms-classification-agents/)

### Update: 10 de octubre, 2026 — Clef-omni: la familia se vuelve multimodal y Clef-flash baja de precio bajo Jev

Nueva ronda de Cloudflare en esta guerra, apenas una semana después del lanzamiento original: **Clef-omni** expande la familia con **audio, video, imagen y texto en un solo pipeline** — una primera para la categoría, que desde Jev había sido mayormente texto.

- **Clef-omni** recibe audio (wav/mp3) y video (mp4/webm) junto a texto e imágenes, y devuelve decisiones calibradas sin transcribir ni captionear nada en el camino. Está construido sobre **Qwen3-Omni-30B-A3B (MoE)**, con los pesos abiertos en Hugging Face.
- **Velocidades**: decisiones texto-only en ~130 ms de mediana, imágenes en ~150 ms, y un video completo de 21 segundos con audio se puntúa en ~1,5 segundos, todo en una sola llamada API.
- **Benchmarks**: BFCL 98,2 / ToolRet 66,6 / API-Bank 92,7 — competitivo, aunque Clef original sigue arriba en ToolRet (69,19) y Clef-flash en BFCL (98,76) y API-Bank (93,11).
- **Precios**: Clef-flash cae de US$0,09 a **US$0,038 por millón de tokens de entrada — más barato que Jev**. Clef-omni debuta a US$0,15 y Clef se mantiene en US$0,24.
- **El trade-off**: la versión hosted de Clef-flash baja su contexto de 64k a **24k** (según Cloudflare, solo el 0,24% de los requests excede 24k; los pesos open siguen soportando 256k si te auto-hospedas).
- **Clef además se aceleró** sin pesos nuevos: puras optimizaciones de serving. En inputs de ~800 tokens pasó de 262/438 ms (mediana/p95) a **152/351 ms, un 1,7× más rápido**.

Dato de color del post: decidieron entrar al mundo de los decision models un viernes en la tarde, entrenaron el modelo durante el fin de semana y lanzaron el jueves. La moral para Jev, OpenAI y el resto: el ritmo de iteración de Cloudflare acá es brutal.

**Fuente:** [Cloudflare Blog — Introducing Clef-omni](https://blog.cloudflare.com/clef-faster-cheaper-multimodal/)
