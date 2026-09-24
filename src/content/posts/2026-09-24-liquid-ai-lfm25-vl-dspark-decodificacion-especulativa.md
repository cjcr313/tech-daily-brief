---
title: "Liquid AI acelera sus modelos de visión con LFM2.5-VL-DSpark: decodificación especulativa"
author: Carlos
pubDatetime: 2026-09-24T21:00:00Z
slug: liquid-ai-lfm25-vl-dspark-decodificacion-especulativa
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "Liquid AI lanza un drafter DSpark para su modelo de visión LFM2.5-VL-3B que acelera la decodificación hasta 3.13x con apenas 8.9% más de memoria, sin cambiar la calidad de salida."
---

![Ilustración editorial de un modelo de visión-lenguaje acelerado: un cerebro artificial con capas de tokens de imagen y texto fluyendo por un embudo hacia tokens generados rápidamente, tonos violeta y cian, estilo tech editorial](../../assets/images/2026-09-24-liquid-ai-lfm25-vl-dspark-decodificacion-especulativa.jpg)

Liquid AI sigue exprimiendo la inferencia. Hoy lanzaron un **drafter DSpark experimental** para su modelo de visión-lenguaje **LFM2.5-VL-3B**, siguiendo la misma receta de sus drafters de texto LFM2.5-DSpark: agregar una ruta de **decodificación especulativa** que cambia un aumento mínimo de memoria por una aceleración bastante jugosa, sin tocar la calidad del output.

Los números, en concreto:

- **Decodificación hasta 3.13x más rápida** en dispositivo (M5 Max con MLX) y **2.66x en una H100**, con ganancias end-to-end de hasta 2.62x y 2.27x respectivamente.
- **Costo de memoria pequeño**: el drafter suma 280M de parámetros, apenas un **8.9%** sobre los 3B del modelo base.
- **Soporte día uno** para las integraciones DSpark de llama.cpp, MLX-VLM y SGLang.

¿Cómo funciona? El drafter de visión usa la misma arquitectura que los de texto: captura los hidden states del modelo objetivo en un set fijo de capas "tapped" y, condicionándose en ellas, propone bloques de tokens candidatos. Los patches de imagen y los tokens de texto se proyectan a una representación compartida antes de esas capas, así que el drafter opera sobre vectores de la misma dimensionalidad sin importar la modalidad — el algoritmo de inferencia queda idéntico al de los modelos de texto.

Detalles técnicos de la receta: es un drafter **attention-only simplificado de 4 capas** con tamaño de bloque 9, entrenado 10 epochs sobre una mezcla de datos SFT de visión-lenguaje. En inferencia recomiendan bloque de 8 o 9 según el hardware.

Ahora, la letra chica que Liquid AI deja clara: **la decodificación especulativa solo acelera el decode, no el prefill ni la codificación de visión**. En los VLM la imagen pasa primero por un vision encoder y después el backbone procesa cientos de tokens visuales, así que en dispositivos edge (con mucho menos cómputo que una GPU de datacenter) el prefill se come una porción mayor de la latencia total. Es la ley de Amdahl: la ganancia total queda limitada por la parte que no aceleras. Por eso las mejoras end-to-end son menores que las de decode puro.

Para usarlo, SGLang necesita un build con soporte DSpark para targets LFM2 (PR #40651), llama.cpp su build correspondiente (PR #29339) y MLX-VLM el suyo (PR #2280). El artículo trae los comandos de lanzamiento exactos para cada uno.

En resumen: un movimiento más en la dirección que ya marcó Liquid AI con sus drafter de texto — hacer correr modelos grandes (o medianos) más rápido en hardware real, incluido el edge de Apple Silicon, sin reentrenar el modelo base.
