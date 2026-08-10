---
title: "KubeCon NA 2026 revela su agenda: nuevo track de AI Inference + Agentic"
author: Carlos
pubDatetime: 2026-08-10T22:00:00Z
slug: kubecon-na-2026-agenda-track-ai-agentic
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "La CNCF publicó la agenda completa de KubeCon + CloudNativeCon NA 2026 (Salt Lake City, 9-12 noviembre). Suma un track dedicado a inference y agentes sobre Kubernetes con vLLM, KServe, Ray y OpenTelemetry."
---

La CNCF tiró hoy la agenda completa de **KubeCon + CloudNativeCon North America 2026**, y la sorpresa no es que exista un track de AI — es **qué tan serio lo están tomando**.

## Los datos duros

- **Cuándo**: 9-12 de noviembre, 2026
- **Dónde**: Salt Lake City, Utah
- **Nuevo track**: **AI Inference + Agentic**
- **Co-located events** (lunes 9): Cloud Native AI + Inference Day, ArgoCon, BackstageCon, CiliumCon, WasmCon

## El track AI Inference + Agentic

Acá es donde se pone interesante. Este no es un track genérico de "AI en Kubernetes". Los sessions están enfocados en problemas reales de producción:

- **Orquestación de agentes autónomos** sobre K8s
- **Model serving** con vLLM y KServe
- **GPU scheduling** y optimización de utilización
- **Dynamic routing** para inference
- **Observabilidad** para sistemas AI (con OpenTelemetry)
- Integración con **Ray** para distributed computing

La idea de fondo: Kubernetes no fue diseñado para AI, pero la comunidad lo ha endurecido para soportar workloads distribuidos always-on. Y ahora 66% de las organizaciones que usan GenAI están corriendo sobre K8s.

## Lo que dice el CNCF

Jonathan Bryce, director ejecutivo:

> *"AI is quickly becoming one of the largest compute workloads the industry has ever seen, and the shift from training models to running them in production is where the real engineering challenge lives now."*

Básicamente: entrenar modelos es cosa del pasado (para la infra). El verdadero desafío engineeril hoy es **servir inferencia en producción a escala**. Y ahí es donde Kubernetes quiere ser la plataforma.

## Tracks clásicos que se mantienen

- **Platform Engineering**: internal developer platforms, self-service, automation
- **Security**: supply chain, identity, runtime protection, vulnerability management, policy enforcement

## Por qué importa

Si estás en el mundo cloud native, esto confirma lo que ya sospechabas: **Kubernetes se está convirtiendo en el OS de facto para AI production**. El hecho de que tengan un track dedicado a inference agéntica —no un workshop, un track completo— significa que la industria ya pasó la fase de "experimentación" y está en la fase de "¿cómo hago que esto corra en prod sin que se caiga?".

La fecha límite para sponsorships es el **14 de agosto** si te interesa.

---

Salt Lake City en noviembre. Si vas a un evento tech este año, probablemente debería ser este. La convergencia K8s + AI es real y este KubeCon va a ser el primero donde se vea el trabajo serio de producción, no solo demos.
