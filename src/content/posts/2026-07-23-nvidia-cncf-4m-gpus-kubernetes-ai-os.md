---
title: "NVIDIA pone US$4 millones y GPUs reales al CNCF: Kubernetes es el OS para IA"
author: Carlos
pubDatetime: 2026-07-23T16:00:00Z
slug: nvidia-cncf-4m-gpus-kubernetes-ai-os
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - IA
description: "NVIDIA se comprometió con US$4M y GPUs reales para CI/testing del CNCF. K8s ya corre el 66% de workloads de IA generativa, pero solo 7% despliega modelos a diario."
---

Erin Boyd, Senior Director de NVIDIA y miembro del CNCF Governing Board, publicó hoy un post que es básicamente una declaración de principios: **el futuro de IA se construye en abierto, y Kubernetes es ese terreno**.

## Los datos que importan

Del **CNCF 2025 Annual Cloud Native Survey**:

- **82%** de usuarios de contenedores corren Kubernetes en producción
- **66%** de organizaciones que hacen IA generativa usan K8s para manejar workloads de inference
- Pero solo **7%** despliega modelos a diario; **47%** lo hace solo intermitentemente

Ese gap entre "corre en K8s" y "se despliega continuamente" es operacional. Y es exactamente lo que NVIDIA quiere cerrar.

## El compromiso: US$4M y GPUs de verdad

NVIDIA se unió este año al CNCF Governing Board y comprometió **US$4 millones en 3 años** para que los proyectos CNCF puedan correr CI y testing en **GPUs reales en vez de emuladores**. 

Esto es enorme para proyectos open source que historicamente no han tenido acceso a hardware de GPU para testing. No es lo mismo testear contra un simulador que contra un H100 real.

## Lo que ya está upstream

Tres piezas clave que NVIDIA contribuyó al ecosistema:

### 1. GPU DRA Driver (upstream en SIG-Node)
Reemplaza la asignación estática de GPUs con **asignación dinámica en tiempo real**. Incluye MIG device sharing (alpha) y ComputeDomains para compartir memoria entre GPUs vía Multi-Node NVLink. En criollo: un job grande obtiene exactamente las GPUs que necesita, cuando las necesita.

### 2. KAI Scheduler (CNCF Sandbox)
Aceptado en KubeCon Europe. Es el scheduler que NVIDIA usa internamente:
- **Gang scheduling** con simulación previa (sin evicciones innecesarias)
- Colas jerárquicas con Dominant Resource Fairness
- **Binding asíncrono** testeado en clusters de 10,000+ GPUs

### 3. Kubernetes AI Conformance Program
Creció de **18 a 31 plataformas certificadas**. Si tu plataforma dice soportar AI en K8s, ahora hay un estándar que lo verifica.

## Por qué importa

El argumento de NVIDIA es directo: **los problemas de operar GPUs a escala son problemas de sistemas distribuidos**, y eso es exactamente lo que la comunidad cloud native lleva una década perfeccionando.

Históricamente, Kubernetes trataba las GPUs como recursos estáticos e indivisibles. Funcionaba para workloads tempranos, pero se cae cuando tienes training a gran escala, inference sensible a latencia y plataformas multi-tenant en el mismo cluster. El resultado era el impuesto clásico: GPUs sobredimensionadas, aceleradores ociosos, aplicaciones que pasan todos los tests y se caen en producción.

La apuesta es hacer que los workloads de GPU sean tan rutinarios en Kubernetes como cualquier otro workload. Y están poniendo el dinero, el código y el hardware para que pase.

> 💡 **Conclusión:** NVIDIA podría haber guardado todo esto como ventaja competitiva. En cambio lo abrió al CNCF — con gobernanza compartida, no control. Es un movimiento estratégico: si K8s se convierte en el estándar definitivo para IA, NVIDIA quiere ser la infraestructura que lo sostiene, y para eso necesita que el ecosistema crezca abierto.
