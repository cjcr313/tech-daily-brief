---
title: "IBM y NASA liberan un modelo fundacional open source para explorar la Luna"
author: Carlos
pubDatetime: 2026-09-10T21:00:00Z
slug: ibm-nasa-modelo-fundacional-lunar
featured: false
draft: false
tags:
  - IA
  - Hugging Face
description: "IBM y NASA publican un modelo multimodal para teledetección lunar, junto a su dataset SomBench, bajo licencia Apache-2.0."
---

![Ilustración de un modelo de IA analizando la superficie lunar](../../assets/images/2026-09-10-ibm-nasa-modelo-fundacional-lunar.jpg)

IBM y la NASA acaban de liberar el **NASA-IBM Lunar Foundation Model**, un modelo fundacional multimodal y multi-resolución pensado para la teledetección lunar. No es otro LLM más: es uno de los primeros modelos fundacionales públicos dedicados a la exploración científica de la Luna.

## Qué trae bajo el capó

El lanzamiento viene con dos piezas clave:

- **Los pesos del modelo**, publicados en Hugging Face bajo licencia Apache-2.0.
- **SomBench**, el dataset lunar co-registrado que se usó para entrenarlo.

El código de fine-tuning vive en un repo de GitHub de NASA-IMPACT, y la adaptación para tareas específicas se hace con TerraTorch. La idea es que cualquiera pueda tomar el encoder y ajustarlo con fine-tuning o LoRA para detección, segmentación y regresión densa sobre imágenes de la cámara LROC (Lunar Reconnaissance Orbiter).

## Para qué sirve en la práctica

Según el anuncio, los investigadores pueden usar el modelo para varias líneas de estudio lunar:

- **Predecir dónde podría haber hielo** en regiones permanentemente en sombra, que son difíciles de observar pero podrían tener recursos clave para una futura base en la Luna.
- **Mapear Irregular Mare Patches**, formaciones volcánicas que ayudan a entender la historia térmica y volcánica del satélite.
- **Detectar y clasificar cráteres**, lo que revela pistas sobre la edad del terreno y ayuda a la NASA a elegir sitios de aterrizaje seguros, evitando pendientes empinadas y rocas.

## Por qué importa

Esto va más allá del nicho espacial: es otro empujón a la tendencia de **modelos fundacionales open source para ciencia**, donde instituciones grandes están soltando pesos y datasets en lugar de guardarse todo. Para el mundo tech, es un buen caso de estudio de cómo se arma un dataset multi-resolución y se adapta un encoder a tareas de visión especializada.

Si te interesa el lado científico, el modelo está disponible en Hugging Face bajo el namespace `nasa-ibm-ai4science`.
