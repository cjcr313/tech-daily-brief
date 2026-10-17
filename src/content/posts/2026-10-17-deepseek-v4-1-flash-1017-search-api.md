---
title: "DeepSeek V4.1-Flash-1017: mismo precio, más agentic, y de paso abre su buscador interno como API"
author: Carlos
pubDatetime: 2026-10-17T09:05:00Z
slug: deepseek-v4-1-flash-1017-search-api
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "DeepSeek actualizó su modelo Flash: DeepSWE 77.0, Terminal-Bench 4.0 en 42.3 y outputs más cortos al mismo precio. Además abrió su motor de búsqueda in-house como API para filtrar spam SEO."
---

![Ilustración editorial de un motor de búsqueda de IA representado como una red global filtrando resultados de calidad sobre un fondo de datos](../../assets/images/2026-10-17-deepseek-v4-1-flash-1017-search-api.jpg)

DeepSeek empezó el día con doble anuncio en su [changelog oficial](https://api-docs.deepseek.com/updates/): un checkpoint nuevo de su modelo Flash enfocado en trabajo agentic, y la apertura de su motor de búsqueda interno como API. Vamos por partes.

## V4.1-Flash-1017: la mejora Pareto que nadie esperaba

La regla de la casa DeepSeek se mantiene: **actualizas sin cambiar nada**. El modelo se llama igual en la API (`deepseek-flash`), el precio es el mismo, y la web y app ya quedaron en la versión nueva. Lo que cambió son los números:

- **DeepSWE v1.1: 77.0** (antes 74.2)
- **Terminal-Bench 4.0: 42.3** (antes 31.2 — un salto serio en trabajo de terminal)
- **HLE sin herramientas: 42.6** (antes 36.8)
- ProgramBench: 29.1 (antes 20.3)
- Agents' Last Exam: 35.4 (antes 31.8)

Y quizás lo más útil para el bolsillo: **redujeron el tiempo de ejecución de tareas y el largo de los outputs**. Menos tokens quemados en llegar a la respuesta = nuevo óptimo de Pareto costo-desempeño. Si usas el modelo con harness, actualiza a **DeepSeek Harness 0.2.1-rc.1 o superior** para aprovecharlo (también optimizaron para Tencent CodeBuddy y WorkBuddy).

## La Search API: el buscador que estaba detrás del chat

La segunda noticia es más estratégica: DeepSeek **abrió como API el buscador in-house** que alimenta su chat y su API. Y no es un wrapper de Bing & amigos:

- Indexa **cientos de miles de millones de páginas web** y atiende cientos de millones de búsquedas diarias.
- Es **AI-native**: multilingüe, resultados en tiempo real, pensado tanto para humanos como para LLMs.
- El diferenciador: **filtra spam SEO, manipulación GEO y contenido AIGC de baja calidad** con detección estricta.

Para cualquiera construyendo agentes con RAG o pipelines que necesitan web search confiable, tener un jugador más en la categoría — con enfoque explícito en calidad por sobre volumen — es bienvenido. Los detalles de uso están en la [guía de Search & Fetch](https://api-docs.deepseek.com/guides/search).

**El resumen corto:** el Flash de DeepSeek sigue siendo el mejor valor del mercado para tareas agentic de código, y ahora además te vende la linterna con la que busca. Si tu stack usa `deepseek-flash`, ya estás en la versión nueva — sin hacer nada.
