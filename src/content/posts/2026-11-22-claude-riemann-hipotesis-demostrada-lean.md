---
title: "Claude ayudó a demostrar la Hipótesis de Riemann y la comunidad Lean ya lo verificó"
author: "Nauta Lab"
pubDatetime: 2026-11-22T13:05:00Z
slug: claude-riemann-hipotesis-demostrada-lean
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "Un matemático de Anthropic publicó una demostración de la Hipótesis de Riemann asistida por Claude: 17 millones de líneas en Lean, verificadas en un día por la comunidad."
---

![Ilustración editorial de la Hipótesis de Riemann demostrada con asistencia de IA y verificación formal](../../assets/images/claude-riemann-hipotesis-demostrada-lean.jpg)

Guarda el champán, pero desenfríalo: **Levent Alpöge, matemático de Anthropic, publicó el viernes 20 de noviembre una demostración de la Hipótesis de Riemann** desarrollada con Claude durante unas seis semanas. Al día siguiente, dos organizaciones de la comunidad Lean anunciaron que la verificaron formalmente. Sí, esa Hipótesis de Riemann: la de 1859, uno de los siete Problemas del Milenio del Clay Mathematics Institute, la que lleva 167 años resistiendo.

## La demostración: 17 millones de líneas de Lean

Alpöge liberó su trabajo como una librería de **17 millones de líneas de código Lean** que depende únicamente de Mathlib. El sábado 21, el Lean Focused Research Organization y la Mathlib Initiative certificaron conjuntamente el resultado, verificando cuatro criterios:

- **El enunciado es correcto**: la Hipótesis de Riemann ya existe formalizada en Mathlib, revisada por expertos en teoría de números.
- **Compila**: decenas de personas reprodujeron la compilación con el mismo archivo de exportación de la prueba.
- **Demuestra lo que dice demostrar**: la comunidad aisló el enunciado en un archivo que solo importa Mathlib y lo comparó con el teorema probado por Alpöge usando **dos herramientas independientes**, que confirmaron la coincidencia exacta.
- **La prueba es válida**: el export crudo fue chequeado por el kernel oficial de Lean, por los verificadores con-leche y con-ron (que traen prueba formal de que no pueden aceptar una demostración falsa) y por varios verificadores de terceros escritos en distintos lenguajes. Todo corrió sobre un export inerte, fuera del alcance de código malicioso hypothetical en las fuentes.

## El rol de Claude (y el del humano)

El propio Alpöge fue explícito sobre la división de trabajo: *"Claude me superó con creces cerca de la línea de meta. No, Claude voló, bailó y brilló cerca de esa línea de meta"*. Seis semanas de colaboración humano-IA para un problema que había frustrado a generaciones completas de matemáticos.

El timing es casi cómico: la publicación llegó **un día después del debut bursátil de Anthropic en Nasdaq** (que ya cubrimos). Alpöge lo reconoció: *"El timing preciso es horrible. Si hubiera podido, habría terminado todo mucho antes"*.

## Qué significa (y qué no)

- **No es "Claude resolvió Riemann" solo**. Es una colaboración donde el aporte del modelo fue sustancial en las etapas finales, pero la dirección, el criterio y la responsabilidad son del matemático. La verificabilidad corrió por cuenta del ecosistema open source de Lean, que en 24 horas movilizó a decenas de personas para revisar 17 millones de líneas.
- **El premio del Milenio no se paga mañana**. El Clay Institute exige publicación formal y un período de aceptación de dos años antes de entregar el millón de dólares. El proceso recién comienza en ese frente.
- **La señal técnica es enorme**: la combinación modelos de razonamiento + verificación formal type-checkeable cambia la economía de la matemática seria. Ya no hay que confiar en la IA: se le exige una prueba que una máquina valida de punta a punta. Hace dos semanas cubríamos el resultado de Psi sobre Aaronson-Ambainis; esto es otro orden de magnitud.
- **El malestar también existe**: matemáticos le han expresado a la prensa incomodidad con compañías privadas hiperrentables concentrando esta capacidad. La discusión sobre quién se beneficia de estos resultados recién empieza.

**Fuentes:** [The Guardian](https://www.theguardian.com/technology/2026/nov/21/anthropic-riemann-hypothesis-solved-claude-ai) · [Lean Community Blog](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) · [Nota de Alpöge (PDF)](https://alpo.ge/remark.pdf) · [The New York Times](https://www.nytimes.com/2026/11/20/science/anthropic-ai-math-riemann-hypothesis.html)
