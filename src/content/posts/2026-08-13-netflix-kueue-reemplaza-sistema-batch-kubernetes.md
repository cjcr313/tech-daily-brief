---
title: "Netflix mata su sistema batch casero y se pasa a Kueue para Kubernetes"
author: Carlos
pubDatetime: 2026-08-13T16:00:00Z
slug: netflix-kueue-reemplaza-sistema-batch-kubernetes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "Netflix migró millones de workloads batch desde su solución interna CMB a Kueue, el sistema de colas nativo de Kubernetes. Migración transparente en 4 semanas."
---

![Ilustración editorial de un sistema de colas con contenedores fluyendo a través de tuberías digitales en rojo de Netflix, estilo tech editorial](../../assets/images/placeholder.jpg)

Netflix tiene plata, ingenieros top y una cultura de "build primero". Pero esta vez decidieron que construir todo desde cero no tenía sentido.

## Qué pasó

Netflix **migró la mayoría de sus workloads batch a Kueue**, el sistema open-source de gestión de colas de jobs para Kubernetes. Reemplazaron su solución interna llamada CMB (Compute Managed Batch) que venían usando desde 2018 sobre Titus, su plataforma de contenedores.

La migración ya está manejando **millones de jobs batch en producción**, aunque todavía hay workloads en proceso de transición.

## Por qué abandonaron CMB

Desde 2018, muchas de las features que Netflix construyó a mano en CMB fueron apareciendo en proyectos open-source del ecosistema Kubernetes. Además, agregar features nuevas a CMB se estaba volviendo cada vez más difícil porque no estaba tan integrado con Kubernetes como Kueue.

Kueue ofrecía mejor velocidad de innovación, adopción amplia y capacidades más extensas. La cuenta fue simple.

## Cómo lo hicieron

El equipo hizo la migración **completamente transparente para los usuarios de CMB**. Mantuvieron API parity con el sistema anterior, lo que permitió una migración gradual con rollback fácil si algo explotaba.

Lecciones que compartieron:

- **"No esperes al final para migrar el caso más complejo"** — Migraron primero a su cliente más grande y complejo, lo que les dio confianza para el resto. La migración de producción completa duró solo **4 semanas**.
- Mantener API parity mientras cambiaban el motor subyacente redujo drásticamente el riesgo.
- Tests de carga en non-prod fueron clave para afinar la configuración de throughput.

## Kueue: ¿qué tiene de especial?

[Kueue](https://kueue.sigs.k8s.io/) es nativo de Kubernetes y ofrece:
- Cola de jobs por prioridad con múltiples estrategias
- Gestión avanzada de recursos
- Scheduling multi-cluster y topology-aware
- Fair sharing con preemptción para prestar capacidad idle entre tenants
- Integraciones con varios frameworks de batch
- Observabilidad integrada

Netflix aprovechó especialmente el **preemption-based fair sharing** para mantener semánticas de reserva mientras prestaban capacidad idle a otros tenants, mejorando significativamente la utilización promedio de recursos.

## ¿Por qué te importa?

Si tienes workloads batch en Kubernetes y estás construyendo colas a mano, esto es una señal clara. Netflix —con todo su engineering power— decidió que no valía la pena seguir manteniendo una solución propietaria cuando el ecosistema open-source ya resuelve el problema mejor.

El patrón es el mismo de siempre: la innovación abierta del ecosistema Kubernetes eventualmente alcanza y supera a las soluciones internas. La pregunta no es si, sino cuándo te conviene saltar.
