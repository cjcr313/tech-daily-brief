---
title: "MiniMax M3.1 Flash llega oficialmente: sí, el misterioso 'Space Bunny' que procesó 200 trillones de tokens era esto"
author: Carlos
pubDatetime: 2026-10-19T13:10:00Z
slug: minimax-m3-1-flash-space-bunny
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "MiniMax lanzó M3.1 Flash: el modelo detrás del anónimo 'Space Bunny' que procesó 200 trillones de tokens. Enfoque agéntico, 3x más rápido, 70% más barato y precios de US$0,15 por millón de tokens de entrada."
---

![Ilustración editorial tech de un conejo brillante hecho de flujos de datos y circuitos luminosos corriendo sobre una pista de fibra óptica hacia un horizonte de servidores, estela de partículas de tokens dorados, paleta violeta y cian, estilo ilustración tecnológica profesional, iluminación cinematográfica, sin texto](../../assets/images/2026-10-19-minimax-m3-1-flash-space-bunny.jpg)

Misterio resuelto en el mundo de los LLM: **MiniMax lanzó oficialmente M3.1 Flash**, y confirmó lo que varios sospechaban desde hace semanas: **"Space Bunny" 🐰, el modelo anónimo que apareció en los leaderboards y procesó más de 200 trillones de tokens sin decir de dónde venía, era una versión temprana de este modelo**.

La historia es bastante entretenida: un modelo sin marca se colaba entre los mejores puestos de los rankings mientras la comunidad especulaba. Ahora MiniMax muestra la carta: era su próximo Flash, madurando en producción real.

## Qué trae M3.1 Flash

El foco está puesto en **tareas agénticas**: automatización de workflows, coding, Computer Use y ciberseguridad. Los números que publica MiniMax:

- **AutomationBench-AA**: entre los mejores del ranking, completando workflows empresariales reales de punta a punta (ventas, marketing, finanzas, RRHH).
- **BankerToolBench**: 76,2 puntos, con planificación multi-paso, consistencia entre documentos y cadenas de tool calls.
- **DeepSWE v1.1**: 73,7% en desarrollo de software, cerca de los modelos top.
- **OSWorld V2**: 61,7 puntos, y **29,6 en Agents' Last Exam (ALE)** — primero entre los modelos chinos en ambos benchmarks de Computer Use.
- **CyberGym**: 82%, con buen desempeño en auditoría de código, patching de vulnerabilidades y análisis de malware.

En velocidad, la cosa también mejora: gracias a un sparsity más agresivo, **la inferencia online es casi 3 veces más rápida que su predecesor**, con velocidades de salida de 200+ TPS (P50 sobre 170+ TPS) en uso diario.

## El precio es la estocada

Aquí es donde MiniMax apunta a matar el mercado agéntico:

- **Entrada: US$0,15 por millón de tokens**
- **Salida: US$0,60 por millón de tokens**
- **Input cacheado: US$0,015 por millón de tokens**

Según MiniMax, el **costo total de uso para tareas agénticas baja un 70%** respecto a M3. Para workloads de agentes que consumen millones de tokens en loops de razonamiento y tool calls, ese cached input a US$0,015 es casi regalarlo.

## Disponibilidad

M3.1 Flash ya está disponible vía **API de MiniMax** (platform.minimax.io), el plan **M Plan** y **MiniMax Code**. Los pesos open se liberarán más adelante, y MiniMax adelanta que un modelo **Pro** viene en camino.

La guerra de modelos "flash" baratos y rápidos para agentes sigue calentándose — DeepSeek, Anthropic con Haiku y ahora MiniMax compitiendo por el mismo bolsillo. Si tu caso de uso es agéntico y masivo, la factura mensual acaba de bajar otro escalón.

**Fuentes:** MiniMax Research (minimax.io), MarkTechPost, TechFlow.
