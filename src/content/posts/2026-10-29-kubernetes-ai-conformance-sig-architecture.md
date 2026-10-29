---
title: "AI Conformance se gradúa: Kubernetes lo convierte en subproyecto permanente de SIG Architecture"
author: Carlos
pubDatetime: 2026-10-29T13:05:00Z
slug: kubernetes-ai-conformance-sig-architecture
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud Native
  - IA
description: "El programa AI Conformance de Kubernetes pasó de Working Group temporal a subproyecto permanente de SIG Architecture: la IA dejó de ser trend y pasó a ser gobierno arquitectónico de largo plazo."
---

![Ilustración editorial tech de la rueda del timón de un barco Kubernetes integrando un núcleo de inteligencia artificial brillante en una estructura de gobierno de grúas y engranajes, paleta azul marino con acentos cian y naranja, estilo ilustración tecnológica profesional isométrica, sin texto](../../assets/images/2026-10-29-kubernetes-ai-conformance-sig-architecture.jpg)

Hace dos días te contábamos que Kubernetes quería certificar tus *apps* con el Workload Conformance Working Group. Hoy la historia continúa por el otro lado del mostrador: el blog de Kubernetes publicó una entrevista con **Janet Kuo** (Google, co-chair de SIG Apps) y **Yuan Tang** (Red Hat), los líderes del programa **AI Conformance**, explicando por qué el grupo de trabajo se archivó y la IA pasó a vivir permanentemente dentro de **SIG Architecture** como subproyecto.

## De Working Group temporal a estructura permanente

En Kubernetes, los Working Groups son temporales por diseño: existen para resolver un problema concreto y se disuelven. El WG de AI Conformance cumplió su misión —publicar los requisitos iniciales y dejar la certificación andando— así que se archivó y el programa se movió a un **subproyecto permanente** de SIG Architecture, el mismo SIG que posee la conformidad global de Kubernetes y los principios de diseño de API.

El mensaje de fondo es claro: **la IA no es un trend ni un workload pasajero, es parte central de lo que Kubernetes corre todos los días**, y como tal necesita gobierno arquitectónico continuo, no un comité ad-hoc.

## Los números del programa

El programa se anunció en el keynote de KubeCon NA 2025 y la adopción no se hizo esperar: pasó de **18 plataformas certificadas a 31** en unos pocos meses, con actualización en el keynote de KubeCon EU 2026. Para Janet y Yuan, esa velocidad demuestra que la industria estaba esperando un estándar vendor-neutral que evitara el lock-in en stacks propietarios de IA.

## El truco para que la IA no rompa la estabilidad de Kubernetes

La tensión es obvia: la infraestructura de IA cambia cada semana y las APIs de Kubernetes están diseñadas para ser estables y aburridas por años. La respuesta del programa es doble:

- **Modelo de graduación por niveles:** los conceptos nuevos de infraestructura de IA entran como requisitos *SHOULD* (recomendados), dando espacio a experimentar sin amarrar APIs prematuramente. Cuando maduran y el ecosistema los adopta, se gradúan a requisitos *MUST* (obligatorios).
- **Foco en la capa de infraestructura:** se testean capacidades base como el soporte de aceleradores vía **Dynamic Resource Allocation (DRA)**, sin meterse en frameworks de IA ni servidores de modelos específicos. La plataforma se mantiene estable mientras el tooling de IA evoluciona a la velocidad que quiera.

Estar en SIG Architecture también significa mirar cómo los primitivos core de Kubernetes —scheduling, asignación de recursos— necesitan adaptarse a nivel fundacional para los workloads de IA de la próxima década, en vez de tratar la IA como una capa agregada.

## Cómo participar

- **Contribuidores:** repo [kubernetes-sigs/ai-conformance](https://github.com/kubernetes-sigs/ai-conformance), revisar PRs, proponer requisitos con el [template de KAR](https://github.com/kubernetes-sigs/ai-conformance/tree/main/kars/NNNN-kar-template) o sumarse a los tests automatizados en Go.
- **Vendors de plataforma:** todos los detalles para certificarse en [cncf/k8s-ai-conformance](https://github.com/cncf/k8s-ai-conformance).

**Fuente:** [kubernetes.io/blog](https://kubernetes.io/blog/2026/10/29/sig-arch-ai-conformance-2026/)
