---
title: "NVIDIA libera Run:ai completo como open source: la orquestación de GPUs que costó US$800 millones ahora es gratis"
author: Carlos
pubDatetime: 2026-10-14T15:05:00Z
slug: nvidia-runai-open-source-dsx
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - Infraestructura
description: "NVIDIA liberó la plataforma completa de Run:ai —la que compró en US$800 millones hace dos años— como open source dentro de DSX AI Factory: scheduler, fraccionamiento de GPUs, capa organizacional y Workload Map, con 8 socios ya integrándola."
---

![Ilustración editorial tech de un cofre abierto brillante liberando una constelación de chips GPU que se organizan en una grilla de nodos de cómputo sobre una malla hexagonal estilo Kubernetes, simbolizando software propietario de orquestación de GPUs volviéndose libre y abierto, paleta azul profundo con acentos verdes de open source, iluminación cinematográfica, sin texto](../../assets/images/2026-10-14-nvidia-runai-open-source-dsx.jpg)

Movida grande en el mundo de la infraestructura de IA: **NVIDIA liberó la plataforma completa de Run:ai como software open source**, dentro del paraguas de su **DSX AI Factory Platform**. Sí, la misma plataforma de orquestación de workloads de IA y GPUs que NVIDIA compró hace dos años por unos **US$800 millones** (Run:ai era israelí) ahora está disponible para cualquiera, gratis, en GitHub.

## Qué se liberó exactamente

No es un "community edition" recortado: es **el código completo de la plataforma**, más cuatro componentes que además se pueden adoptar por separado:

- **KAI Scheduler**: el scheduler Kubernetes-nativo que mueve todo el tinglado. Ya era open source (Apache 2.0, proyecto Sandbox en CNCF), pero ahora queda confirmado como el motor upstream de Run:ai. Soporta gang scheduling con simulación en memoria previa al placement, fair-share y cuotas, topology-aware bin-packing, sharing de GPUs (MIG, MPS, time sharing, HaMi, fraccionamiento MPS de CUDA 13.4) y Dynamic Resource Allocation (DRA).
- **GPU Fractioning Operator**: trae el fraccionamiento de GPUs nativo de **CUDA 13.4** a Kubernetes. La implementación propietaria original se retiró en favor de la capacidad nativa del driver CUDA, que pone límites duros de memoria por workload. Es scheduler-agnostic y trae un metrics exporter para visibilidad por pod.
- **KAI Resource Management**: la capa organizacional: proyectos, departamentos, jerarquía de cuotas con fair-share, node pools para hardware heterogéneo. Si hoy administras los derechos de GPU en una planilla Excel, esto es lo que la reemplaza.
- **Workload Map**: el "contrato" para tratar cualquier tipo de workload de IA (PyTorchJob, RayCluster, JobSet, KServe InferenceService, deployments de grafos Dynamo o CRDs propios) como objeto de primera clase durante todo su ciclo de vida, sin que cada tool tenga que hardcodear cada CRD. Es una librería Go que funciona offline sobre objetos unstructured.

## Cómo adoptarla

Dos caminos: directo desde el **GitHub de DSX AI Factory** (repo `run-ai`), o como **Community Product en NVIDIA NGC** con Helm chart incluido. Eso sí, ojo con la letra chica: el Community Product no requiere suscripción pagada ni trae soporte de NVIDIA. Quienes quieran soporte enterprise siguen teniendo las vías comerciales (standalone, Mission Control, AI Enterprise y marketplaces selectos).

## El ecosistema ya se lanzó encima

El movimiento viene con **ocho socios integrando desde el día uno**: Crusoe (con Crusoe Managed Kubernetes), Mirantis (k0rdent AI, stack "metal-to-model"), Nebius (deploy de un clic en su Managed Kubernetes), OpenNebula (via OneKS para nubes soberanas), Rafay (como servicio fully managed), Saturn Cloud (inferencia white-label con medición por token en Token Factory), Spectro Cloud (PaletteAI) y vCluster (templates con aislamiento por tenant sobre una misma flota de GPUs).

## Por qué importa

La orquestación de GPUs en Kubernetes era un cuello de botella caro y propietario. Al abrirlo, NVIDIA baja la barrera de entrada para armar "AI factories" (y empuja la adopción de su stack DSX completo, no nos hagamos los tontos). Para los equipos de plataforma que administran clusters GPU compartidos entre varios equipos, esto es básicamente un regalo: gang scheduling serio, fraccionamiento de GPUs y cuotas organizacionales sin pagar licencia. La pregunta ahora es qué pasa con los competidores comerciales de orquestación de GPUs — hoy les quedó el barrio bastante más difícil.

**Fuentes:** NVIDIA Technical Blog, HPCwire/AIwire, CTech.

### Update: 16 de octubre de 2026

El ecosistema se movió rápido: a días del open-sourcing, **Zesty lanzó "Automated Fractional GPUs"**, una capa de automatización comercial construida directamente sobre el GPU Fractioning Operator de NVIDIA. La herramienta aprovecha el fraccionamiento CUDA-nativo en Kubernetes —con sus límites duros de memoria GPU por workload y su coordinación con los schedulers— para asignar fracciones de GPU de forma automática según demanda real, con foco FinOps: **cortar la sobrecompra de GPUs** que hoy tienen las empresas por aprovisionar para picos. Señal clara de que la apertura de Run:ai no fue un gesto de caridad sino la base de un ecosistema: la capa propietaria se retiró, y sobre la nativa ya están construyendo productos encima.

**Fuentes del update:** PR Newswire, TECHi.
