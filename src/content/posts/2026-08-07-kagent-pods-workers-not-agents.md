---
title: "Kubernetes: kagent dice que los Pods no son la unidad correcta para deployar agentes de IA"
author: Carlos
pubDatetime: 2026-08-07T10:00:00Z
slug: kagent-pods-as-workers-not-agents
featured: false
draft: false
tags:
  - Kubernetes
  - Arquitectura
description: "El proyecto kagent (CNCF) propone repensar cómo deployar agentes de IA en K8s: Pods como workers, no como unidades de deploy"
---

Un post reciente en el blog del CNCF por Lin Sun (del equipo de kagent) está generando bastante discusión: **¿es un Pod la unidad correcta para deployar un agente de IA en Kubernetes?**

La respuesta corta según kagent: **no, al menos no como lo pensamos hoy.**

## El problema

La intuición inicial es simple: un agente = un Pod, con su propio ServiceAccount, network policies, logs, métricas. Es lo que kagent hizo primero y funciona. Tienes aislamiento, identidad, scheduling nativo de K8s.

Pero los agentes de IA no se comportan como microservicios:

- **Son bursty**: un agente puede despertar por una tarea, correr 30 segundos, y quedar inactivo por horas
- **Spawnean subagentes**: un agente puede crear hijos para subtareas paralelas
- **Esperan aprobación humana**: pueden quedar pausados indefinidamente
- **Son efímeros por naturaleza**: no necesitan estar "always on"

Mantener un Pod dedicado corriendo 24/7 para cada agente potencial es **caro y wasteful**.

## La propuesta: Agent Substrate

Google introdujo **Agent Substrate** junto con Agent Sandbox. La idea es agregar una capa encima de Kubernetes:

- **WorkerPool**: análogo a un NodePool, maneja Pods de larga vida
- **Workers**: cada Worker es un Pod que puede hostear múltiples agentes
- **Actors**: la unidad lógica del agente de IA, scheduleada dinámicamente onto un Worker

Kubernetes solo ve WorkerPools y Worker Pods. Los Actors viven en el control plane de Agent Substrate. Un Actor se schedulea cuando hay trabajo, se suspende cuando está idle, se migra si hace falta.

Esto permite que un pool fijo de Pods soporte **muchos más agentes lógicos** de lo que sería práctico con un Pod por agente.

## Implicancias de arquitectura

Esto cambia varias cosas:

- **Identidad**: si un Actor puede correr en cualquier Worker, la identidad pertenece al ActorTemplate, no al Pod
- **Network policies**: se expresan a nivel de template/namespace/tenant
- **Observabilidad**: necesitas tracing a nivel de Actor, no solo de Pod
- **Multi-tenancy**: el control de acceso se mueve arriba de Kubernetes

kagent ya soporta Agent Substrate como alternativa al modelo de un-Pod-por-agente.

---

**El takeaway:** Si estás construyendo plataformas de agentes en Kubernetes, este paper/blog es lectura obligada. El modelo de "un Pod por agente" no va a escalar cuando tengas cientos o miles de agentes. La separación entre unidad de ejecución (Pod) y unidad de lifecycle (Actor) tiene mucho sentido.

🔗 [Post original en CNCF Blog](https://www.cncf.io/blog/2026/07/14/is-a-pod-the-right-deployment-unit-for-an-ai-agent/)
🔗 [Artículo en InfoQ](https://www.infoq.com/news/2026/08/pod-deployment-unit-ai-agents/)
