---
title: "Red Hat OpenShift 4.22: Karpenter GA, AI Confidencial y cuchillo en los costos cloud"
author: Carlos
pubDatetime: 2026-07-16T04:00:00Z
slug: openshift-4-22-karpenter-ai-confidencial-costos
featured: false
draft: false
tags:
  - Cloud
  - DevOps
  - Infraestructura
description: "OpenShift 4.22 llega con Karpenter GA para auto-escalar, IA confidencial como preview, JobSet para entrenamiento distribuido y foco en bajar los costos de infraestructura."
---

Red Hat sacó **OpenShift 4.22** el 14 de julio, y la jugada es clara: bajar los costos de infraestructura sin perder la carrera por IA. Veamos qué trae.

## Karpenter GA (por fin)

El **Red Hat Build of Karpenter** ya es GA para OpenShift Service on AWS con hosted control planes. Karpenter —el auto-scaler open source que right-sizea instancias de compute para clusters Kubernetes— promete acabar con el deporte nacional de over-provisionar "por si acaso". Además, ahora se puede integrar con **AWS EC2 Spot Instances** para workloads fault-tolerant y ahorrar todavía más.

## Confidential AI (preview)

Quizás lo más interesante: **Confidential AI como technology preview**. La idea es aislar workloads sensibles y algoritmos de IA propietarios dentro de un slice de CPU y memoria aislado criptográficamente. Data privacy incluso durante runtime. Para empresas que no quieren que sus modelos ni datos toquen nada fuera de ese enclave, esto es gigante.

## JobSet operator para entrenamiento distribuido

Nuevo en 4.22: el **JobSet operator**, pensado para orquestar large-scale distributed training runs y fine-tuning de LLMs. Coordina múltiples jobs relacionados como una sola unidad para maximizar el uso de esas carísimas GPUs. Si alguna vez coordinaste training distribuido a mano, sabes lo útil que es esto.

## Más cosas del release

- **Minimal Universal Base Image (UBI)**: strip de paquetes no esenciales para reducir superficie de ataque
- **Sandboxed Containers 1.12**: soporte GA para confidential containers en bare metal
- **OpenShift Virtualization**: EVPN integration con user-defined networks, multi-volume snapshots para VMs, y two-node OpenShift con fencing para edge
- **Zero-trust y compliance**: foco en reducir el esfuerzo manual de cumplir normativas

## Por qué importa

OpenShift está posicionándose como la plataforma hybrid cloud para empresas que quieren correr IA sin mandar todos sus datos a un cloud público. El combo de **confidential AI + Karpenter + JobSet** dice: "puedes entrenar modelos sensibles, escalar eficientemente y no vender un riñón en el proceso".

La jugada de Red Hat es inteligente: en vez de competir con los clouds hyperscale, se posiciona como la capa que los une a todos con seguridad y control de costos. Con la presión financiera que tiene todo el mundo por gastos de IA, el timing es perfecto.
