---
title: "Strata: un modelo de 125 mil millones de parámetros corriendo en tu GPU gaming de 12 GB"
author: Carlos
pubDatetime: 2026-10-04T21:05:00Z
slug: strata-llm-125b-en-gpu-12gb
featured: false
draft: false
tags:
  - IA
  - Infraestructura
  - Open Source
description: "Strata, un motor de inferencia open source con licencia MIT, corre Qwen3.8-Flash-Next (125B parámetros, MoE) en una GPU consumer de 12 GB a 60-95 tokens por segundo, con API local compatible con OpenAI."
---

![Ilustración editorial tech de una tarjeta gráfica gaming iluminada sobre un escritorio con un servidor de fondo, flujos de datos neuronales fluyendo desde la GPU hacia un cerebro digital, paleta violeta y azul oscura con acentos neón, estilo ilustración editorial profesional, sin texto](../../assets/images/2026-10-04-strata-llm-125b-en-gpu-12gb.jpg)

Hace un tiempo, correr un modelo de 125 mil millones de parámetros exigía un nodo con varias A100 o alquilar API a un hyperscaler. **Strata**, un motor de inferencia open source bajo licencia **MIT**, se dedica a romper esa idea: corre **Qwen3.8-Flash-Next** —un MoE de 125B parámetros— en una **GPU gaming de 12 GB de VRAM** (NVIDIA o AMD) con 64 GB de RAM, escribiendo a **60-95 tokens por segundo**.

## Cómo lo logra

No es magia: es una combinación inteligente de trucos de inferencia que ya venían madurando por separado:

- **Arquitectura MoE bien explotada**: solo ~10 de los 24.576 "expertos" del modelo se activan por token, así que el motor hace *routing de especialistas* y mantiene en la GPU solo lo que se usa caliente, con el resto desparramado entre GPU, CPU, RAM y SSD.
- **Speculative drafting integrado**: un drafter incorporado acelera la decodificación, con un speedup declarado de **1,6x-1,8x** versus inferencia convencional.
- **Cuantización del modelo**: la versión de Qwen3.8-Flash-Next que usa Strata fue comprimida por ISTA-DASLab, UkisAI (Swift 1.5) y Unsloth, y el motor reutiliza piezas de **llama.cpp / ggml**.
- **Experiencia lista para usar**: instalación de un clic para Windows y Linux, API **compatible con OpenAI/Anthropic corriendo en localhost**, e input de imágenes opcional.

El proyecto vive en GitHub bajo el desarrollador **Niko1221** y está en iteración rápida (v0.1.38, v0.1.39 en pocos días).

## Por qué importa

El pitch de "frontera local" venía quedando en modelos de 30B con calidad de sobremesa. Si un 125B MoE se vuelve usable en hardware de consumo —con velocidades de tipeo humano o mejores— cambian varias cosas de golpe:

- **Costo y privacidad**: no todo agente necesita pagar API por token, ni enviar contexto sensible a la nube. Un modelo grande corriendo en el PC de la oficina habilita workflows que antes no eran viables.
- **Soberanía de infra**: para equipos chicos en LatAm, donde el dólar alto hace doler cada crédito de API, correr el caballo de batalla local es una alternativa concreta.
- **La tendencia MoE**: el truco confirma que los modelos sparse son el caballo ganador para inferencia local. Espere que este patrón (grandes MoE + offloading inteligente + spec decode) se replique en más motores.

La letra chica: "125B parámetros" no es igual a un modelo denso de 125B en calidad por parámetro activo, y los números de velocidad dependen del hardware y del patrón de uso. Pero como demostración de hacia dónde va la inferencia local, es de lo más contundente que salió esta semana.

**Fuente:** [GitHub - Niko1221/Strata](https://github.com/Niko1221/Strata) · [Linux Compatible](https://www.linuxcompatible.org/story/strata-v0138-runs-a-125billionmodel-llm-on-any-gaming-pc) · [AI Weekly](https://aiweekly.co/alerts/strata-runs-125b-qwen38-flash-next-on-a-12gb-gaming-gpu)
