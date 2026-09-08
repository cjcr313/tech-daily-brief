---
title: "China Merchants Bank unifica entrenamiento e inferencia de IA en Kubernetes con casi 10.000 aceleradores"
author: Carlos
pubDatetime: 2026-09-08T03:00:00Z
slug: china-merchants-bank-kubernetes-ia
featured: false
draft: false
tags:
  - Kubernetes
  - IA
  - Cloud Native
description: "El banco chino ganó el CNCF End User Case Study Contest con un control plane unificado que comparte casi 10.000 tarjetas aceleradoras entre entrenamiento, fine-tuning e inferencia."
---

![Ilustración editorial de un data center bancario con filas de servidores GPU ejecutando entrenamiento e inferencia de IA sobre un plano de control unificado de Kubernetes, tonos azules y dorados](../../assets/images/2026-09-08-china-merchants-bank-kubernetes-ia.jpg)

**China Merchants Bank**, uno de los bancos comerciales más grandes de China, se llevó el **CNCF End User Case Study Contest** en la KubeCon + CloudNativeCon + OpenInfra Summit + PyTorch Conference China 2026. ¿El motivo? Un caso de libro sobre cómo exprimir Kubernetes para IA a escala.

El premio reconoce un **plano de control unificado de Kubernetes** que permite que el entrenamiento, el fine-tuning y la inferencia en línea de IA **compartan casi 10.000 tarjetas aceleradoras heterogéneas**.

## La receta, en stack abierto

Lo interesante no es solo la escala, sino que el banco armó todo con piezas open source que ya conoces:

- **Kueue** — para el manejo de colas y prioridades de los trabajos.
- **KEDA** — para el autoescalado basado en eventos.
- **Prometheus** — para la observabilidad.
- **HAMi** — para la virtualización y compartición de GPUs.
- **Fluid** — para la orquestación de datos sobre Kubernetes.

La combinación le permite al banco tratar entrenamiento, fine-tuning y servicio en línea como **una sola plataforma de cómputo**, en lugar de silos separados que pelean por las GPUs.

## Por qué te debería importar

El caso es un espejo de lo que muchas empresas están intentando (con menos éxito): **consolidar la infraestructura de IA sobre Kubernetes** en vez de mantener stacks dedicados y caros. El dato de las ~10.000 tarjetas heterogéneas es la prueba de que se puede llegar a escala de producción usando componentes del ecosistema cloud native, sin necesidad de soluciones propietarias.

Además, confirma que el eje de la conversación en KubeCon China no fue "Kubernetes por Kubernetes", sino **Kubernetes como la capa de control para la era de la IA** —el mismo hilo que atraviesa la graduación de Karmada y las charlas de Ant Group sobre runtimes seguros para agentes con Kata Containers.

**Fuente:** [CNCF](https://www.cncf.io/announcements/2026/09/07/china-merchants-bank-wins-cncf-end-user-case-study-contest-for-unifying-ai-training-and-inference-on-kubernetes/).
