---
title: "Google open-sourcea ML Drift: el motor GPU que acelera la IA de tu celular (y jubila al TFLite GPU delegate)"
author: Carlos
pubDatetime: 2026-10-25T21:05:00Z
slug: google-ml-drift-inferencia-on-device
featured: false
draft: false
tags:
  - IA
  - Open Source
  - Infraestructura
description: "Google liberó ML Drift bajo Apache 2.0: un motor de compute GPU multiplataforma para inferencia on-device que abstrae OpenGL ES, OpenCL, Metal y WebGPU. Ya corre en millones de celulares vía YouTube, Chrome y Photos — y el viejo TFLite GPU delegate queda descontinuado."
---

![Ilustración editorial tech de un smartphone con redes neuronales brillantes ejecutándose dentro de la pantalla, rodeado de chips GPU abstractos orbitando y conectados por flujos de datos luminosos, paleta violeta y turquesa con acentos cálidos, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-25-google-ml-drift-inferencia-on-device.jpg)

Google publicó [ML Drift](https://developers.googleblog.com/ml-drift-next-gen-gpu-aiml-inference-at-the-edge/), un motor de compute GPU **open source (Apache 2.0), multiplataforma, para inferencia de IA/ML on-device**. Si no te suena, mira el teléfono: es el motor que acelera LiteRT, y ya corre en millones de dispositivos a través de Chrome, YouTube Shorts, Google Photos y Meet.

## El problema que resuelve

Desarrollar para el edge es un festival de fragmentación: arquitecturas GPU distintas, versiones de driver, APIs de bajo nivel — y sin saber a priori en qué hardware terminará corriendo tu app. ML Drift abstrae todo eso soportando **OpenGL ES, OpenCL, Metal y WebGPU** desde una sola base. La promesa de Google: "estabilidad para ML tradicional y peak performance para la IA generativa más avanzada".

## Lo técnico, en criollo

- **Shaders unificados vía tensor virtualización**, operaciones custom extensibles y soporte de **tensores de 5 dimensiones** (sin hacks de layout — relevante para modelos espaciales y transformers).
- Optimizaciones específicas para GPUs de **Arm, Intel y Qualcomm**.
- En desktop, soporta Windows y Linux vía **Dawn** (la implementación WebGPU de Chromium), evitando lidiar directo con DirectX o Vulkan. En macOS mantiene el backend nativo de Metal.

## Números que importan

- Benchmarks con modelos **Gemma** en hardware de estación de trabajo: **12% menos overhead de memoria** que frameworks como llama.cpp y MLX LM.
- **YouTube Shorts**: hasta 40% menos latencia de frame en efectos de segmentación (Android e iOS).
- **Google Photos**: pipelines de fotografía computacional hasta 2 segundos más rápidos.
- **Adobe Lightroom/Photoshop**: hasta 30% más rendimiento en Select Subject, Select Sky y Adaptive Portrait.
- **Snapchat**: 30% menos latencia de modelos en Android — suficiente para usar modelos de difusión más grandes.

## El detalle con letra chica

Con este release, **Google deja de actualizar el legacy TensorFlow Lite GPU delegate**. Si tu app usa TFLite con aceleración GPU, la migration path es el nuevo LiteRT ML Drift accelerator. O sea: no es solo un lanzamiento bonito — hay deuda técnica que mover.

La comunidad ya está preguntando lo obvio: cómo se compara con **Core ML** en iPhones recientes (que es contra lo que la mayoría despacha hoy). Google no entregó cifras comparativas todavía. Mientras tanto, la guerra de la inferencia on-device recién se está poniendo buena — y esta vez es open source de partida.

**Fuentes:** [InfoQ](https://www.infoq.com/news/2026/10/google-ml-drift/), Google Developers Blog.
