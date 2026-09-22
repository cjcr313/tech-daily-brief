---
title: "AWS libera Strands Harness: un agente de IA open-source 45% más barato que Claude Code y Codex"
author: Carlos
pubDatetime: 2026-09-22T03:00:00Z
slug: aws-strands-harness-agente-open-source
featured: false
draft: false
tags:
  - IA
  - Cloud
  - DevOps
description: "AWS open-sourcéa Strands Harness, un runtime de agentes en Python y TypeScript que promete 28% menos costo en tokens y 45% menos que Claude Code y Codex con precisión comparable."
---

![Ilustración editorial tech de un arnés (harness) metálico conectando bloques de un agente de IA con engranajes y cables, sobre fondo oscuro con tonos naranja y azul, estilo minimalista](../../assets/images/2026-09-22-aws-strands-harness-agente-open-source.jpg)

El equipo Strands Agents de AWS liberó **Strands Harness**, un **runtime de agentes open-source** (Apache 2.0) para Python y TypeScript que empaqueta las primitivas internas de AWS en un harness de propósito general. El titular que están empujando: sale **más barato** que los agentes de codificación dominantes con una precisión comparable.

## Los números que importan

- **28% menos costo en tokens** frente a otros harnesses de agentes, promediando seis benchmarks (ALFWorld, ContextBench, GAIA, WebShop, tau3-bench y Terminal-Bench 2.1) con precisión "broadly comparable".
- **45% más barato que Claude Code y Codex** en promedio, según las mediciones internas de AWS.
- El caso más llamativo: usando el modelo **Fable 5 de Anthropic** en Terminal-Bench 2.1, Strands Harness costó **77% menos que Claude Code** en las mismas tareas, y encima sacó mejor puntaje (69.7 vs 61.8, con $56.29 contra $248.05 en 89 trials).

## Por qué es barato

El ahorro no es magia: viene de **defaults optimizados de manejo de contexto**. AWS dice que la clave está en cómo el harness administra lo que le mete al modelo en cada paso, evitando el desperdicio de tokens que castiga a los agentes típicos cuando el contexto crece.

## La jugada estratégica

Acá hay que leer entre líneas. AWS no regala un juguete: está **open-sourceando la capa de orquestación de agentes** para que corras cualquier modelo —Claude, GPT, o lo que sea— sobre infraestructura que puede terminar en Bedrock o EC2. Es la misma estrategia que vimos con los modelos open-weight: regalar el software para vender el cómputo.

Ojo con un matiz que ya apuntan varios analistas: la comparación estrella usa **Terminal-Bench 2.1, una versión que sus mantenedores ya reemplazaron por la 4.0**. O sea, el benchmark del titular no es el más fresco. No invalida el ahorro, pero conviene tomarlo con un grano de sal.

Igual, la tendencia es clara: la guerra de los coding agents se está peleando por el lado de los **costos y la eficiencia de contexto**, no solo por quién saca el benchmark más alto.

**Fuente:** Strands Agents blog / The New Stack / SiliconANGLE — lanzamiento de Strands Harness.
