---
title: "Tencent lanza Hy4 Flash: el modelo barato para el trabajo de oficina que roza a Haiku 5.5 a 1/18 del costo"
author: Carlos
pubDatetime: 2026-11-16T13:35:00Z
slug: tencent-hy4-flash-modelo-economico
featured: false
draft: false
tags:
  - IA
description: "224.000 millones de parámetros totales, solo 12 mil millones activos por token y un contexto de 1M: Hy4 Flash cuesta ¥0,5 por millón de tokens de entrada y apunta al trabajo documental masivo."
---

![Tencent lanza Hy4 Flash: el modelo barato para el trabajo de oficina que roza a Haiku 5.5 a 1/18 del costo](../../assets/images/2026-11-16-tencent-hy4-flash-modelo-economico.webp)

Mientras Alibaba estrenaba flagship, Tencent aprovechó el mismo 16 de noviembre para lanzar **Hy4 Flash**, su modelo económico para trabajo cotidiano. La propuesta es simple y brutal: contexto de **1.048.576 tokens**, entrada multimodal, y una tarjeta de precios que parece error de tipeo — **¥0,5 (≈US$0,070) por millón de tokens de entrada y ¥2 (≈US$0,281) de salida**, con caché a ¥0,02.

Para calibrar: contra los US$1,50 de entrada de Qwen4-Max — lanzado el mismo día — hay una **brecha de 21x** entre dos modelos que ambos aceptan un millón de tokens y ambos procesan imágenes. No es error de precios: son productos distintos para compradores distintos.

## Un workhorse diseñado para aburrirse bien

La especificación es concreta: **224.000 millones de parámetros totales** (64 mil millones de ellos "Engram"), con **solo 12 mil millones activos por token** — de ahí el costo mínimo. Tencent lo describe sin rodeos en su research post: úsenlo para investigación, documentos, slides y planillas; el flagship queda para la ingeniería de software larga. Análisis independientes lo ubican rozando el rendimiento de **Claude Haiku 5.5 a aproximadamente 1/18 del costo por tarea**.

En lo práctico, es el modelo ideal para esa clase de cargas que nadie quiere pagar a precio frontera: clasificar documentos, resumir, extraer datos, RAG masivo con contexto largo.

## La letra chica que importa

- **Hoy es API only**: no hay pesos descargables
- Tencent **dice** que planea liberar los pesos como open-weight en el futuro, **sin fecha** — la misma fórmula ambigua de siempre
- Viene de Hy4 770B, que sí se liberó en septiembre, así que el antecedente juega a favor

La tendencia queda clarísima: el mercado chino está segmentando — flagship caro y cerrado arriba (Qwen4-Max, Hy4), modelo minúsculo de costo por debajo del forro abajo (Hy4 Flash, DeepSeek Flash), y open-weights de clase media peleando adopción. Para cualquier equipo armando pipelines de agentes con volumen alto de tareas simples, Hy4 Flash entra directo al shortlist de cálculo de costos.
