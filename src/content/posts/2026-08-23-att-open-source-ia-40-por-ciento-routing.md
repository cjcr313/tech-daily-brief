---
title: "AT&T apuesta por open source para no seguir pagando la fiesta de Anthropic y OpenAI"
author: Carlos
pubDatetime: 2026-08-23T04:10:00Z
slug: att-open-source-ia-40-por-ciento-routing
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "El gigante telco ya enruta 40% de las consultas de sus 100.000 empleados a modelos open source (Meta, Nvidia, Google) y quiere llegar a 60-70%. Con 45 mil millones de tokens diarios, la cuenta ahorra hasta 56% en cargas de coding."
---

![Ilustración editorial de una red de telecomunicaciones corporativa enrutando tráfico entre modelos de IA de código abierto y cerrados, torres y data centers estilizados, paleta azul y naranja, estilo tech editorial](../../assets/images/2026-08-23-att-open-source-ia-40-por-ciento-routing.svg)

Mientras la industria enterprise en general está **bajando** el uso de modelos open source, AT&T va contracorriente — y con números que duelen para los labs cerrados.

## La jugada

Mark Austin, el VP que comanda la IA para los ~100.000 empleados de AT&T, contó que la telco ya enruta el **40% de todas las consultas de IA de sus trabajadores a través de modelos open source**, con meta de subirlo a **60-70% en los próximos años**. El objetivo declarado: **mantener plana la factura de Anthropic y OpenAI** aunque el uso siga creciendo.

La plataforma interna **Ask AT&T** (nacida en 2023 100% sobre modelos de OpenAI vía Azure) hoy procesa **45 mil millones de tokens diarios**. Con los precios públicos de los labs cerrados, correr ese volumen solo en modelos propietarios costaría **cientos de millones de dólares al año**. La cuenta es simple: o diversified el portfolio o el budget explota.

## El cóctel técnico

- **Modelos open-weight de Nvidia, Meta y Google**, con parte de la inferencia corriendo en **data centers propios**.
- **Routing con LiteLLM** para mandar cada tarea al modelo más barato que la resuelva.
- Resultado concreto en coding: hasta **56% de ahorro en algunas cargas** (ej. resúmenes de código) con una caída de calidad de solo ~2%.
- Los developers igual pueden elegir tools premium (Copilot, Claude Code, Devin, Codex), pero **con spending caps**.

## El matiz honesto

Austin reconoce que el open source va **6-10 meses detrás de los frontier cerrados**, aunque la brecha se estrecha. La estrategia no es reemplazar a los top model — es no usar un frontier para tareas que un modelo gratis resuelve casi igual.

## Por qué importa

Es el case study más claro hasta ahora de la **tesis del routing y la commoditización**: cuando el 80% de las consultas empresariales son tareas rutinarias, el precio del token importa más que el último punto de benchmark. Si un jugador del tamaño de AT&T (y outlier a esta escala, según los datos de adopción de Menlo Ventures) demuestra que el enfoque sostiene calidad y control, la presión bajista sobre los labs cerrados deja de ser teoría.

Para los equipos chicos la lectura es la misma que venimos repitiendo en este blog: **routing inteligente + modelos abiertos para el volumen, frontier solo para lo que de verdad lo necesita**. La diferencia es que ahora el ejemplo lo firma una Fortune 500 con 45B de tokens diarios.

**Fuente:** [BigGo Finance / entrevista a Mark Austin](https://finance.biggo.com/news/95aa2161-3ee3-4b14-af0f-557314facb4b)
