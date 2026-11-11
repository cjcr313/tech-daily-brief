---
title: "El sello 'Kubernetes AI Certificado' llega a 40 plataformas: pero miremos bajo el capó"
author: Carlos
pubDatetime: 2026-11-11T21:20:00Z
slug: cncf-ai-conformance-40-plataformas-nvidia
featured: false
draft: false
tags:
  - Kubernetes
  - IA
  - Cloud
description: "La CNCF celebró 40 plataformas certificadas en su programa de AI Conformance para Kubernetes, pero los repos públicos muestran checklists autoevaluados y una suite de tests que solo reconoce GPUs NVIDIA."
---

![Ilustración editorial de un sello de certificación being examinado con lupa sobre un tablero de servidores y chips de aceleración](../../assets/images/cncf-ai-conformance-40-plataformas-nvidia.jpg)

La CNCF anunció en KubeCon NA 2026 que su **Kubernetes AI Conformance Program** alcanzó **40 plataformas certificadas**. Suena genial: el sello que promete que tu cluster soporta workloads de AI de forma consistente, sin vendor lock-in. Pero cuando uno abre los repositorios públicos del programa, la historia es un poco más... matizada.

## Qué certifica realmente el badge

El programa agrega al conformance clásico de Kubernetes un checklist para workloads de AI: el de v1.35 tiene 12 ítems (9 MUST, 3 SHOULD) que cubren cosas como dynamic resource allocation, gang scheduling, métricas de aceleradores, autoscaling y acceso seguro a GPUs. El de v1.37 sube a 15 ítems.

El detalle: **la mayoría del cumplimiento es autoevaluado**. Un postulante envía un YAML con checklist y evidencia pública, y desde v1.37 el programa recomienda tests automatizados donde existen, permitiendo atestación manual para el resto. En lenguaje de estándares, eso es first-party self-assessment, no auditoría independiente. La misma CNCF reconoció en marzo un roadmap hacia verificación automatizada, pero todavía no estamos ahí.

## Los números también tienen truco

El "40" es un conteo **acumulado**: las plataformas están listadas por versión de Kubernetes (v1.33 a v1.37), así que no son 40 plataformas certificadas contra el release actual. De hecho, TechTimes contó en un snapshot del 29 de octubre que **solo cuatro plataformas tienen listing para v1.37**: GKE, Kubermatic, RKE2 y Talos. Y la cobertura de tests automatizados varía harto: de 2 a 7 tests con output público por plataforma.

## El elefante en la sala: solo NVIDIA

Quizás lo más incómodo: la suite de tests open-source detrás del badge tiene **una sola configuración de acelerador, keyed "nvidia"** — device class gpu.nvidia.com, recurso nvidia.com/gpu, path /dev/nvidia — con un comentario en el código que dice "Add other vendors here". Si tu plataforma nombra un acelerador no reconocido (AMD, Intel, lo que sea), el test **lo salta con status "unknown"** y se espera evidencia manual.

Traducción: si estás eligiendo plataforma Kubernetes para workloads GPU, el badge sirve como **baseline de portabilidad**, no como veredicto de velocidad, seguridad ni de que tu hardware no-NVIDIA está cubierto.

## Igual es progreso

Para ser justos: tener un checklist público con evidencia por plataforma es mucho mejor que la selva anterior de "confía en nuestro PDF de marketing". Y que GKE reporte 136 casos sin fallas en su run automatizado tiene valor real. Pero la lección de siempre aplica: **lee el certificado antes de comprar el auto**. El badge dice menos de lo que el número 40 sugiere.
