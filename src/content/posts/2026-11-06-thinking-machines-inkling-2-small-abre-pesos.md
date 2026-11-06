---
title: "Thinking Machines abre el juego: Inkling 2 Small promete ser el modelo open weights más potente fuera de China"
author: Carlos
pubDatetime: 2026-11-06T21:10:00Z
slug: thinking-machines-inkling-2-small-abre-pesos
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "El segundo modelo de la startup de Mira Murati: MoE de 594B parámetros (17B activos), 31 en el índice de Artificial Analysis, coding agéntico de largo horizonte y pesos bajo Apache 2.0 la próxima semana."
---

![Ilustración editorial tech de una esfera neuronal compacta y brillante emergiendo de un cofre abierto que libera partículas luminosas](../../assets/images/thinking-machines-inkling-2-small-abre-pesos.jpg)

La startup de Mira Murati sigue moviéndose rápido. Ayer **Thinking Machines Lab lanzó Inkling 2 Small**, la segunda generación de sus modelos, y la apuesta es clara: **cuando abra los pesos la próxima semana bajo Apache 2.0, sería el modelo open weights de mayor puntaje desarrollado fuera de China**, según el ranking de Artificial Analysis.

## Los números primero

- **Mixture-of-Experts con 594B de parámetros totales y 17B activos**, soporte de entrada de imagen y "esfuerzo variable" (variable effort) para calibrar cuánta reflexión gastar por tarea.
- **31 puntos en el Artificial Analysis Intelligence Index**, un salto grande sobre la primera generación, con mejoras en coding agéntico, visión, trabajo de conocimiento y razonamiento.
- Disponible desde ya en **Tinker Playground**, con fine-tuning y sampling en Tinker. Los checkpoints serán descargables cuando salgan los pesos.

## El detalle interesante: cómo lo entrenaron

Más que el benchmark, vale la pena mirar el método. Entrenaron con RL sobre **cientos de miles de tareas de coding de largo horizonte** usando múltiples agent harnesses y estrategias de compactación de contexto. Y abandonaron el clásico "premio si pasa los unit tests": muchas tareas incluían un **grader agéntico que evaluaba cómo el modelo abordaba el problema**, no solo si el código compilaba.

También hay un guiño curioso para los seguidores de leaderboards anónimos: probaron checkpoints tempranos en OpenCode bajo el nombre **Fledge-Alpha** para medir desempeño en el mundo real sin que nadie supiera de qué modelo se trataba.

## Y en kernels GPU también se defiende

En **PMPP-Hard**, un benchmark externo de optimización de kernels GPU con presupuesto de 10 horas, Inkling 2 Small logró un AUC de 494 task-hours: por encima de GLM 5.3, Kimi K4 y Mistral Large 4, pegado a Claude Opus 5.5 (499) y a distancia del líder GPT-6 Astra (616). Resolvió en promedio 54 de 69 tareas. Que un modelo "Small" de una startup de dos años se meta en esa tabla es la señal de que la frontera está cada vez más apretada.

En demos de capacidades: construyó un simulador de ciudad completo en Three.js sin assets pre-hechos y un emulador de PC desde cero en Python que bootea un kernel Linux real en el navegador. El foco declarado es el **trabajo autónomo de largo horizonte** — seguir instrucciones, verificar su propio trabajo sin que se lo pidan.

## Pesos abiertos, pero con calma

Los pesos salen cerrados primero, vía Tinker, siguiendo su doctrina de "camino seguro hacia los pesos abiertos": **Apache 2.0 recién la próxima semana**, tras completar safety testing y red-teaming externo. Dado que los checkpoints se podrán descargar y el license es de las permisivas, esto debiera convertirse rápido en material favorito de la comunidad self-hosted.

**Por qué importa**: el open weights fuera de China venía estancado un escalón abajo de DeepSeek y compañía. Si Inkling 2 Small cumple lo prometido, la próxima semana la tabla de modelos abiertos cambia de dueño — y con fine-tuning disponible en Tinker desde ya, la ventaja competitiva de Thinking Machines está en capturar a los developers primero, no en esconder el modelo para siempre.
