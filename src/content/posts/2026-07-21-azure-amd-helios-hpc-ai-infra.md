---
title: "Microsoft mete AMD Helios, EPYC y racks de 72 GPUs a Azure para AI y HPC"
author: Carlos
pubDatetime: 2026-07-21T22:15:00Z
slug: azure-amd-helios-hpc-ai-infra
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - IA
description: "Microsoft anunció expansión de Azure con AMD Helios para inference, VMs HDv2 con ~500 cores EPYC para data processing, y HXv2 para diseño de chips. Heterogeneidad total."
---

Microsoft no quiere depender solo de NVIDIA. Ayer anunció una expansión importante de la infra de Azure con **AMD como socio principal**, sumando tres nuevos tipos de VMs para AI y HPC.

## ND MI455X v7 — inference con AMD Helios

Racks completos con la plataforma **AMD Helios**, pensados para inference de modelos grandes a escala. La idea es ofrecer una alternativa real a los H100/H200 de NVIDIA para workloads de inference donde el costo por token importa más que el peak performance.

Disponibilidad: **H2 2026**.

## HDv2 — AI data systems y agent coordination

VMs co-diseñadas con AMD, construidas desde cero para workloads de datos en la era AI:

- **~500 cores físicos AMD EPYC 6ta gen**
- **4 TB RAM**
- **32 TB NVMe local**
- **400 Gb Azure Boost networking**

El objetivo: eliminar el bottleneck de data prep que alimenta los jobs de training. Sin enough data pipeline capacity, los aceleradores se quedan esperando. Los agentes AI necesitan CPU densa para coordinar tareas.

## HXv2 — diseño de chips y HPC

La siguiente gen de las VMs HX que se lanzaron con AMD en 2023. Pensadas para **EDA (Electronic Design Automation)** — o sea, para empresas que diseñan chips:

- **176 cores EPYC 6ta gen** a más de 5 GHz
- 50% más cache direccionable por core
- Hasta **4 TB RAM** por VM
- **800 Gb InfiniBand**

AMD mismo las usa para diseñar sus propios EPYC e Instinct. También sirven para simulación científica y HPC clásico.

## La estrategia: heterogeneidad

El mensaje de Scott Guthrie (EVP Cloud + AI) es claro: **un solo approach de infra no basta para la escala que requiere AI**. La estrategia es ofrecer una plataforma heterogénea:

- Silicon propio de Microsoft (Maia)
- NVIDIA (Hopper, Blackwell)
- **AMD (Helios, EPYC)** — ahora con más peso

Para los clientes, significa más opciones para optimizar costo-performance según el workload. Para AMD, es una validación enorme de su roadmap de datacenter.

**Fuente:** [Microsoft Blog](https://blogs.microsoft.com/blog/2026/07/20/microsoft-expands-azure-ai-and-hpc-infrastructure-with-amd/)
