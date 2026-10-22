---
title: "Flint: el modelo de coding que corre en tu notebook y fue construido (casi) por IA"
author: Carlos
pubDatetime: 2026-10-22T13:15:00Z
slug: recursive-flint-modelo-coding-portatil
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "Recursive, la startup de Richard Socher, lanzó Flint: un modelo de coding MoE de 40B parámetros (solo 2.5B activos) que corre a 131 tokens/seg en un MacBook Pro, gratis bajo Apache 2.0 — y construido en 4 meses mayormente por su 'Eureka Machine'."
---

![Ilustración editorial tech de un lienzo de programación futurista flotando sobre un laptop abierto en un escritorio minimalista, con un engranaje neuronal brillante ensamblando líneas de código luminosas dentro de la pantalla, paleta azul profundo con destellos ámbar, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/recursive-flint-modelo-coding-portatil.jpg)

La autorreferencia como propuesta de valor: **Recursive**, la startup que quiere construir IA que se mejora a sí misma, lanzó **Flint**, su primer modelo — un modelo de coding **gratis, open source y liviano enough para tu notebook**, que además fue construido en gran parte *por IA*. Sí, el nombre de la compañía no es casualidad.

## Lo primero: los números del bicho

- **MoE de 40B parámetros totales, con solo 2.5B activos** por tarea. Esa es la clave de que corra en un laptop común y silvestre sin sufrir.
- **131 tokens/segundo en un MacBook Pro con M4 Pro** — según Recursive, el doble de lo que logran Gemma 4 de Google o Nemotron 3.5 Lightning de NVIDIA en la misma máquina. En un RTX Spark superó los 150 tok/s.
- En **SWE-Bench Verified** (arreglar bugs reales de software), superó a todos los modelos bajo 50B parámetros. En el promedio propio de Recursive sobre seis tests, solo Qwen3.8 27B de Alibaba lo superó.
- **Apache 2.0 en Hugging Face**: descárgalo, córrelo offline, modifica lo que quieras. Tu código nunca sale de tu máquina y no hay factura de tokens.

## La parte interesante: quién lo construyó

Flint no lo hizo un ejército de ingenieros. Lo hizo un equipo chico en **menos de cuatro meses** con ayuda de la **"Eureka Machine"**, el sistema de investigación automatizada de Recursive que propone ideas, corre experimentos y decide los próximos pasos según los resultados. Un humano supervisa, pero el grueso del trabajo fue de la máquina.

La startup salió del stealth en mayo con **US$650 millones a una valoración de US$4.650 millones**, con GV, NVIDIA y AMD Ventures entre los inversores. Y la lidera **Richard Socher**, ex chief scientist de Salesforce — o sea, no es un proyecto de garage.

## Contexto: la pelea por el coding local

Flint llega a una pelea que ya venía: Meta lanzó hace días **Muse Spark Open**, un modelo abierto para Macs… que necesita 816B parámetros y un terabyte de memoria. Flint es el extremo opuesto: chico, rápido y practical. Wired ya lo probó en un Mac de 48GB y reportó que clavó cada request de coding, donde otros modelos chicos tropiezan.

**La lectura**: recursive self-improvement sigue siendo un debate (hay quienes temen que la IA mejorándose a sí misma se escape del control humano), pero por ahora el resultado concreto es este: un modelo decente de coding, gratis y corriendo en tu notebook. Para equipos con código sensible o presupuesto apretado, eso no es marketing — es una opción real. Y si la Eureka Machine sigue escalando, la próxima iteración se construye más rápida. Ojo con este espacio.

**Fuentes**: Recursive (recursive.com/updates/introducing-recursive-flint), TechCrunch, Wired.
