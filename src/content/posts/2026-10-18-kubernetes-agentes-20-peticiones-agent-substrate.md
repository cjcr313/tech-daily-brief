---
title: "Una petición humana = 20 peticiones de agente: Kubernetes se está rediseñando para la era agéntica"
author: Carlos
pubDatetime: 2026-10-18T13:05:00Z
slug: kubernetes-agentes-20-peticiones-agent-substrate
featured: false
draft: false
tags:
  - Kubernetes
  - IA
  - Cloud Native
description: "El CNCF admite el elefante en la sala: los agentes multiplican el tráfico x20 y exigen latencias que un pod nuevo no puede cumplir. La respuesta se llama Agent Substrate y snapshotting de agentes."
---

![Ilustración editorial tech de un enjambre de cubos luminosos representando agentes de IA multiplicándose desde una única petición, fluyendo hacia una gran rueda de timón estilizada de Kubernetes rodeada de pods encendiéndose, paleta azul profundo con acentos naranjas, estilo ilustración tech editorial profesional, sin texto](../../assets/images/2026-10-18-kubernetes-agentes-20-peticiones-agent-substrate.jpg)

Mientras Salt Lake City se prepara para KubeCon + CloudNativeCon NA 2026, los directores del CNCF Bob Killen y Daniel Krook pusieron números a algo que cualquier equipo que corre agentes en producción ya sospechaba: **una sola petición humana puede disparar unas 20 peticiones de agente**, y esos agentes esperan respuestas en **menos de 200 milisegundos**... mientras que Kubernetes solo garantiza que un pod nuevo arranque en **aproximadamente un segundo**.

Ese gap de latencia —5x entre lo que el agente espera y lo que el orquestador promete— es el problema de infraestructura de la temporada. Y el ecosistema ya está moviendo piezas para cerrarlo.

## La respuesta #1: Agent Substrate (kagent)

La más interesante viene de **kagent**, el proyecto sandbox del CNCF para correr agentes como recursos de Kubernetes. Su nueva pieza se llama **Agent Substrate**, y ataca el problema del pod-por-agente de frente:

- **Desacopla el ciclo de vida del agente del pod**: en vez de un pod dedicado por agente (que se queda consumiendo capacidad mientras el agente está ocioso), un pool pequeño de workers pre-calentados multiplexa muchos más agentes de los pods que existen.
- **Snapshot y rehidratación**: los agentes ociosos se congelan como snapshots comprimidos con Zstd hacia object storage (S3/GCS), y se restauran en fracción de segundo cuando llega tráfico. Cold-start por restauración, no por boot.
- **Sandboxing con gVisor**: cada agente corre aislado del host y de otros actores — clave cuando el código del agente es, por definición, no confiable.
- **Todo declarativo**: WorkerPools y ActorTemplates son CRDs, así que el runtime se versiona con el mismo GitOps que el resto de tu plataforma.

Además, kagent acaba de soltar su **1.0 en alpha**, con soporte para agentes declarativos (Go, Python, BYO) y un `AgentHarness` para correr agentes de código (OpenClaw o Hermes) conversando vía Agent Client Protocol.

## La respuesta #2: llm-d y compañía

El otro proyecto que el CNCF menciona para cerrar el gap es **llm-d**, enfocado en inferencia distribuida nativa de Kubernetes. La idea de fondo es la misma: si el tráfico agéntico es x20, más bursty y más latencia-sensible que el humano, la capa de inferencia y la de orquestación tienen que co-evolucionar.

## El contexto más amplio

El artículo de The New Stack enmarca todo en la conversación de Platform Engineering Day: los agentes no matan al platform engineering, lo hacen **más importante** — con un giro hacia "infraestructura como datos", donde lo que gobiernas no son solo contenedores sino definiciones declarativas de agentes, modelos y herramientas.

La conclusión práctica para quien opera clusters: empieza a medir tu tráfico en **peticiones de agente por petición humana**, porque el día que metas agentes de verdad en producción, esos números van a doler. Y el modelo de "un pod por agente" no escala ni en costo ni en latencia. El futuro se ve más como serverless dentro de K8s: pools calientes, snapshots, restore bajo demanda.
