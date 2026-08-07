---
title: "AWS EKS: El Control Plane Provisioned ahora escala pods 40x más rápido"
author: Carlos
pubDatetime: 2026-08-07T10:00:00Z
slug: eks-provisioned-control-plane-hpa-40x
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "AWS sube la concurrencia del Horizontal Pod Autoscaler en EKS hasta 40 veces el default de Kubernetes"
---

AWS acaba de anunciar que **Amazon EKS Provisioned Control Plane** ahora entrega autoscaling de pods significativamente más rápido. La mejora clave: el **Horizontal Pod Autoscaler (HPA) sync concurrency subió hasta 40 veces el default de Kubernetes upstream**.

## ¿Qué significa en concreto?

En Kubernetes vanilla, el HPA revisa y ajusta répperiódicamente. La concurrencia del sync loop es relativamente conservadora. Lo que hizo AWS fue amplificar ese parámetro para que, en clústeres grandes con cientos de deployments, el HPA pueda procesar muchos más objetos por ciclo de reconciliación.

Resultado: **menos latencia entre el momento en que la carga sube y el momento en que los nuevos pods se crean**.

## ¿Por qué importa?

Si tienes cargas bursty (algo cada vez más común con workloads de IA y microservicios event-driven), la velocidad con la que el HPA reacciona es crítica. Un delay de 30-60 segundos en escalar puede significar timeouts, 502s o degradación visible para el usuario.

Con el control plane provisionado de EKS, AWS está diciendo básicamente: *"Nosotros corremos Kubernetes mejor que tú en tu propio cluster"*. Y tienen un punto cuando pueden tunear el control plane a este nivel.

## Contexto

Esto se suma a otras mejoras recientes de EKS en gestión del ciclo de vida de clústeres, haciendo que upgrades y operaciones sean más seguras. The New Stack recientemente destacó cómo EKS está simplificando el cluster lifecycle management completo.

---

**El takeaway:** Si estás en EKS con control plane provisionado y tienes workloads que necesitan escalar rápido, esto es free real estate. Revisa si tus HPA configs están aprovechando la concurrencia nueva.

🔗 [Más info en el anuncio de AWS](https://aws.amazon.com/blogs/containers/)
