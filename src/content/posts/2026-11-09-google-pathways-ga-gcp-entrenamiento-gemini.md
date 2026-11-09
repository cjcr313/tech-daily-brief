---
title: "Google abre Pathways al mundo: el sistema que entrena a Gemini ya es GA en Google Cloud"
author: Carlos
pubDatetime: 2026-11-09T21:10:00Z
slug: google-pathways-ga-gcp-entrenamiento-gemini
featured: false
draft: false
tags:
  - Cloud
  - Arquitectura
  - Infraestructura
description: "Pathways, el sistema distribuido que Google usa para entrenar Gemini sobre miles de TPUs, alcanzó disponibilidad general en Google Cloud. Una apuesta por reemplazar el modelo SPMD tradicional."
---

![Ilustración editorial de miles de chips TPU interconectados coordinados por un controlador central](../../assets/images/google-pathways-ga-gcp-entrenamiento-gemini.jpg)

Google anunció la **disponibilidad general de Pathways en Google Cloud Platform**: el sistema distribuido que usa internamente para entrenar sus modelos más grandes, Gemini incluido, ahora está abierto a cualquier cliente de la nube que pague por entrenamiento a gran escala en TPUs. El anuncio llegó vía Google Developers Blog, en el primer post de una serie titulada "Pathways on Google Cloud".

## ¿Qué es Pathways y por qué importa?

Pathways **corre programas JAX sobre TPUs** y existe por un problema concreto: la forma estándar de paralelizar entrenamiento —SPMD (Single Program, Multiple Data)— se quiebra cuando el trabajo deja de ser un programa uniforme.

En SPMD, cada acelerador ejecuta el mismo programa en lockstep y se coordina con colectivas tipo AllReduce. Dentro de un grupo bien conectado eso es barato. El problema es cruzar grupos: según el post, un chip **TPU v5p tiene 1.200 GB/s de bandwidth bidireccional dentro de su grupo, pero solo ~50 Gb/s hacia la red del datacenter**, unos 192 veces menos. Como cada paso de entrenamiento se bloquea hasta que terminan las colectivas, mientras más grupos abarca el trabajo, más tiempo de cada paso se va en mover datos y más chips caros quedan esperando.

## La respuesta: un solo controlador

Pathways cambia el modelo de programación: **un programa Python en una máquina ordinaria describe todo el trabajo**, y el runtime de Google decide dónde corre cada pieza y cómo mover los datos entre chips, de forma asíncrona (asynchronous distributed dataflow). El objetivo: que una corrida sigua viva aunque falle una máquina, y que los TPUs no se queden botados mientras otras partes del trabajo alcanzan a llegar.

Los números del paper original (2022, Paul Barham et al.): ~100% de utilización de aceleradores en workloads estándar sobre **2.048 TPUs**, y pipelining de Transformers en 16 etapas. Nada mal.

## 19 meses de preview a GA

Google había anunciado la apertura de Pathways a clientes de Cloud en abril de 2025, en Cloud Next. La GA llega 19 meses después, y el post **no entrega precios, SLAs, regiones ni nombres de clientes** — solo el argumento técnico y links a la documentación, el paper, la documentación de resilient training y los repos de pathways-utils y MaxText en GitHub.

## ¿Para quién es esto?

Honestamente, no para todos. Pathways es para equipos que entrenan modelos grandes sobre TPUs y sufren los cuellos de botella de escalado multi-grupo. Si tu workload cabe en un pod slice, sigue siendo territorio de PyTorch DDP/FSDP o del buen JAX puro. Pero si estás pagando por miles de chips y cada hora de idle te cuesta como un auto, un sistema que promete ~100% de utilización merece al menos una lectura del paper.

Es además otra señal de la estrategia de Google: diferenciarse por la pila completa de entrenamiento (TPU + JAX + Pathways) en vez de competir solo por modelos. La infraestructura como foso.
