---
title: "KubeVirt se gradúa en la CNCF: 10 años para que Kubernetes se trague las VMs"
author: Carlos
pubDatetime: 2026-11-10T21:05:00Z
slug: kubevirt-gradua-cncf-10-anos-vms-kubernetes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "La CNCF anunció en KubeCon NA 2026 que KubeVirt alcanzó el estatus de graduado: VMs y contenedores bajo un mismo plano de control de Kubernetes, con ByteDance, Cloudflare y CoreWeave usándolo en producción."
---

![Ilustración editorial de máquinas virtuales y contenedores conviviendo dentro de un clúster de Kubernetes](../../assets/images/kubevirt-gradua-cncf-10-anos-vms-kubernetes.jpg)

KubeCon + CloudNativeCon North America 2026 está en Salt Lake City y la CNCF soltó una de esas noticias que marcan tendencia: **KubeVirt alcanzó el estatus de proyecto graduado**. Diez años después de que Red Hat lo creara en 2016, la idea de que Kubernetes pueda correr y gestionar **máquinas virtuales junto a contenedores** dejó de ser experimento y ahora es oficialmente "producción madura".

## ¿Por qué importa?

Durante años, VMs y contenedores vivieron en mundos separados: herramientas distintas, workflows distintos, equipos distintos. KubeVirt cerró esa brecha sin reemplazar Kubernetes ni pedir un plano de control paralelo — agrega la gestión de VMs al clúster vía custom resources y controllers, con las mismas APIs declarativas que ya usas para tus pods. Traducción: puedes modernizar **a tu ritmo**, sin reescribir todo como contenedores primero.

Y el timing es perfecto para la era de la IA: con el hypervisor abstraction layer y las mejoras de rendimiento de la **versión 1.8** (marzo de este año), los workloads de IA y HPC corren en VMs a velocidad casi nativa. Hay Intel TDX attestation para VMs confidenciales y backup incremental agnóstico del storage.

## Los números del proyecto

- **2.088 contribuidores** de **520 organizaciones**, incluidos NVIDIA, Microsoft, AMD, Intel, SUSE y Red Hat
- **7.100 estrellas** en GitHub
- Adopters en producción: **ByteDance, Cloudflare, CoreWeave y NVIDIA**, entre otros
- Según una encuesta de 2025, **86% de los adopters de Kubernetes ya conocen KubeVirt** y 26% ya lo están usando

## El contexto más grande

La graduación formal llegó el 4 de noviembre, pero se anunció hoy en el escenario de KubeCon. Y no viene sola: en el mismo anuncio de hitos de la CNCF, **NATS y OpenTelemetry también se graduaron**, mientras CloudNativePG, K8gb, Meshery y Open Cluster Management subieron a incubating.

Si ayer comentábamos que Broadcom metió su VM API al Sandbox de la CNCF, hoy la fundación confirma la otra punta del fenómeno: **las VMs sobre Kubernetes ya no son nicho, son categoría**. Quien tenga workloads legacy con poca gana de containerizarse, tiene cada vez menos excusas.

El ecosistema también juega a favor: KubeVirt se integra con Prometheus (monitoreo), Argo (GitOps), Istio (service mesh) y Velero (backup). Una plataforma única para VMs, contenedores y IA. Como resumió el CTO de la CNCF, Chris Aniszczyk: correr VMs y contenedores bajo una sola plataforma es crítico para la eficiencia operacional. Palabra de fundación.
