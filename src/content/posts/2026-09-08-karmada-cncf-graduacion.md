---
title: "Karmada se gradúa en la CNCF: la orquestación multi-cluster de Kubernetes llega a madurez de producción"
author: Carlos
pubDatetime: 2026-09-08T03:00:00Z
slug: karmada-cncf-graduacion
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud Native
  - CNCF
description: "Karmada, el motor para orquestar aplicaciones en múltiples clusters de Kubernetes, alcanzó el nivel Graduated de la CNCF y estrena v1.19 con soporte para entrenamiento distribuido de IA."
---

![Ilustración editorial de una flota de clusters de Kubernetes orquestados como una armada unificada, con contenedores y barcos conectados por líneas de control luminosas sobre un mapa multicloud](../../assets/images/2026-09-08-karmada-cncf-graduacion.jpg)

Karmada —el acrónimo de *Kubernetes Armada*— acaba de cruzar la meta que todo proyecto open source persigue: la **CNCF lo promovió al nivel Graduated**, el máximo peldaño de madurez dentro de la fundación. El anuncio se hizo en el marco de la KubeCon + CloudNativeCon China 2026 en Shanghai.

En simple, Karmada te deja correr aplicaciones **a través de múltiples clusters de Kubernetes, nubes y regiones sin tener que tocar las aplicaciones**. Extiende la API estándar de Kubernetes con ubicación centralizada, propagación, failover y autoescalado multi-cluster.

## Por qué importa ahora

El timing no es casual. La graduación llega en el mismo momento en que Karmada avanza su apuesta por **infraestructura de IA multi-cluster** con el release **v1.19**, que suma:

- **Scheduling multi-componente** para trabajos de entrenamiento distribuido de IA.
- **Priority-based scheduling** promovido a Beta y habilitado por defecto, para que las cargas críticas se agenden primero.
- Preemption por prioridad, colas multi-cluster para entrenamiento y batch, y soporte multi-cluster para **Dynamic Resource Allocation (DRA)** de GPUs y otros aceleradores.

La lectura de la CNCF es directa: cuando escalas Kubernetes a través de clusters y entornos con GPUs escasas, necesitas una forma *production-ready* de coordinar esa flota.

## Los números que respaldan la graduación

Para llegar a Graduated, Karmada tuvo que pasar una **auditoría de seguridad de terceros**, establecer un comité directivo formal y adoptar el Código de Conducta de la CNCF. Su trayectoria:

- Primer commit en noviembre de 2020.
- Ingresó a CNCF como Sandbox en septiembre de 2021.
- Promovido a Incubating en diciembre de 2023.
- Más de **1.214 contribuidores**, **292 organizaciones** y **5.600+ estrellas** en GitHub.

En producción lo usan nombres pesados como **Bloomberg, Wellhub, Alibaba Cloud, Huawei y Trip.com**, principalmente para capacidad híbrida, resiliencia multi-región e infraestructura de IA multi-cluster.

## La foto grande

La graduación de Karmada confirma una tendencia que ya veníamos viendo en el ecosistema: el centro de gravedad de Kubernetes se está moviendo desde "cómo orquestar un cluster" hacia **"cómo coordinar muchos clusters (y sus GPUs) como una sola plataforma"**. Con la IA empujando cargas de entrenamiento e inferencia cada vez más distribuidas, herramientas como Karmada pasan de ser un nice-to-have a un pilar de la estrategia de plataforma.

**Fuente:** [CNCF](https://www.cncf.io/announcements/2026/09/07/cloud-native-computing-foundation-announces-karmada-graduation/).
