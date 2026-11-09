---
title: "Broadcom lleva su VM API a la CNCF: las máquinas virtuales se rinden ante Kubernetes"
author: Carlos
pubDatetime: 2026-11-09T21:00:00Z
slug: broadcom-vm-api-cncf-sandbox-kubecon
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - Infraestructura
description: "En el día inaugural de KubeCon NA 2026, Broadcom donó su proyecto VM API al Sandbox de la CNCF para gestionar VMs y contenedores bajo un mismo plano de control de Kubernetes. Las acciones saltaron 9,5%."
---

![Ilustración editorial de un plano de control de Kubernetes unificando contenedores y máquinas virtuales](../../assets/images/broadcom-vm-api-cncf-sandbox-kubecon.jpg)

Si alguien todavía dudaba de que Kubernetes se comerá todo el datacenter, Broadcom le acaba de poner firma y notario. En el día inaugural de KubeCon North America 2026 en Salt Lake City, la empresa anunció que su proyecto **VM API fue aceptado en el Sandbox de la Cloud Native Computing Foundation (CNCF)**, con el objetivo de ofrecer una API de Kubernetes *vendor-neutral* para máquinas virtuales.

## La jugada: una API para gobernarlas a todas

La idea de fondo es simple y ambiciosa a la vez: **unificar la gestión de VMs y contenedores bajo un único plano de control de Kubernetes**. En vez de mantener dos mundos paralelos (el cluster de K8s por un lado, el hipervisor con sus herramientas propietarias por el otro), VM API pretende que la VM sea un recurso más del API server, como un Pod o un Deployment.

Para Broadcom —que heredó todo el universo VMware— este movimiento es una señal clara de hacia dónde apunta la casa: la era post-ESXi-native se escribe con YAML.

## No vino solo

El anuncio incluyo dos extras que explican por qué el mercado reaccionó como reaccionó:

- **Broadcom co-presidirá el nuevo Kubernetes Workload Conformance Working Group**, un espacio para definir estándares de conformidad de workloads en K8s. Traducción: quieren influir en las reglas del juego, no solo jugarlo.
- **Más de 20 soluciones de partners validadas para VMware vSphere Kubernetes Service (VKS)**, incluyendo un quién es quién de la observabilidad: **Cisco Splunk, Datadog, Dynatrace, Grafana Labs y New Relic**, sumándose a validaciones previas como Cribl, WatchTower y DX OpenExplore. Que los cinco grandes del monitoring se suban a la validación el mismo día no es casualidad: hay plata en ese puente VM-Kubernetes.

## El mercado aplaudió (y cómo)

Las acciones de Broadcom subieron **9,5%, hasta US$321**, encaminándose a su mayor alza diaria en un año. No es para menos: el anuncio llega en medio de su rebote por IA, y donar VM API a la CNCF es la forma más barata de comprar credibilidad en el ecosistema cloud-native que alguna vez le fue esquivo a VMware.

## Dato extra del primer día de KubeCon

Un reporte de F5 presentado en la conferencia dejó un número incómodo: aunque Kubernetes es ampliamente business-critical, **solo 38% de las grandes empresas tiene una estrategia realmente enterprise-grade para gobernar sus clusters de forma consistente**. O sea, adoptamos la plataforma más rápido de lo que aprendimos a domesticarla.

## ¿Y ahora?

VM API entra al Sandbox, que es el nivel de entrada de la CNCF: proyecto experimental, sin garantías de graduación. Pero con el respaldo de Broadcom y la urgencia del mercado por consolidar infraestructura, no sería raro verlo avanzar rápido. Los equipos que hoy mantienen vSphere + Kubernetes en paralelo deberían ponerlo en el radar.

KubeCon sigue hasta el jueves 12, así que afilá el ojo: esta semana viene cargada.
