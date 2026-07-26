---
title: "Cursor Router: el classifier que decide qué modelo de IA usa por ti (y corta 60% del costo)"
author: Carlos
pubDatetime: 2026-07-26T18:05:00Z
slug: cursor-router-routing-inteligente-modelos-coding
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "Cursor lanzó un router inteligente que clasifica cada request de coding y la manda al modelo óptimo. Entrenado con 600k requests, ahorra 30-60% sin perder calidad."
---

El 22 de julio, Cursor lanzó algo que sua trivial pero resuelve un problema real: **Cursor Router**, un classifier que lee cada request de coding y decide qué modelo debería manejarla, en vez de mandar todo a un solo modelo default.

## El problema que resuelve

~60% de los devs en Cursor usan un solo modelo como daily driver. Eso significa que tareas rutinarias (un rename, un fix simple) se procesan a precios frontier, y el gasto en IA crece mucho más rápido que la calidad del output.

La realidad es que no todos los tasks necesitan Fable 5 o GPT-5.6 Sol. Algunos sí. Otros los resuelve un modelo más barato sin perder nada. La pregunta es: **¿cómo saber cuál es cuál automáticamente?**

## Cómo funciona

Cursor Router es un **classifier entrenado en 600k+ requests reales**, evaluado en A/B tests online sobre millones de requests. Analiza cada request según:

- Query y contexto
- Complejidad de la tarea
- Dominio (UI, backend, docs, debugging)
- Lo que Cursor sabe sobre el comportamiento de cada modelo

Y enruta: trabajo simple → modelos más baratos, updates de UI → modelo con mejor "gusto", problemas complejos de largo horizonte → modelos de reasoning frontier.

**Detalle clave:** es cache-aware. El classifier fue entrenado considerando que cambiar de modelo a mitad de conversación genera cache misses, y el costo reportado incluye ese overhead. No es un number maquillado.

## Los números

Tres modos: **Intelligence, Balance, Cost**.

- **Auto Intelligence:** satisfacción cerca de Fable 5 a **~60% menos costo**. Sube satisfacción ~15% sobre Opus 4.8 al mismo precio.
- **Auto Balance:** sobre Opus 4.8 en satisfacción a **~36% menos costo**. Comparable con GPT-5.6 Sol a menor spend.
- **Cost per commit:** Intelligence $6.76, Balance $4.63 (vs. Fable 5 y Opus 4.8 que cuestan más sin mejor satisfacción).

En early access con cuentas enterprise de alto volumen: **30-50% de ahorro real** versus tener todo en Opus 4.8.

## Lo que hay que tener ojo

1. **No es flat pricing.** Balance e Intelligence cobran al precio del modelo enrutado, así que el costo unitario varía request a request.
2. **Grok 4.5 es obligatorio en el pool.** No se puede sacar del bloque list porque es la opción price-efficient del router. Si tu empresa tiene política de no usar xAI, esto es un problema.
3. **Individual Pro** mantiene selección manual por ahora. Router está on by default para Teams y admin-enabled para Enterprise.

## Disponibilidad

Desktop, web, iOS, CLI y SDK. El pool de modelos incluye Fable 5, Opus 4.8/5, GPT-5.6 Sol, Grok 4.5 y Composer (propio de Cursor).

## Por qué importa

El routing inteligente es probablemente **el próximo vector de eficiencia en tooling de desarrollo con IA**. No se trata solo de qué modelo es mejor, sino de usar el modelo correcto para cada task. Si Cursor puede demostrar 30-60% de ahorro sin pérdida de calidad, es difícil justificar pagar precios frontier para todo.

Es similar a lo que pasó con Spot Instances en cloud: la mayoría del trabajo no necesita la instancia más cara, pero alguien tiene que decidir cuándo sí.
