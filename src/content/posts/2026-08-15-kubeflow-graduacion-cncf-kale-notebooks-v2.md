---
title: "Kubeflow se arma rumbo a la graduación CNCF: Kale 2.0, Notebooks v2 y HPC en Kubernetes"
author: Carlos
pubDatetime: 2026-08-15T16:10:00Z
slug: kubeflow-graduacion-cncf-kale-notebooks-v2
featured: false
draft: false
tags:
  - Kubernetes
  - IA
description: "Kubeflow renueva casi todo su stack antes de graduarse en la CNCF: Kale 2.0, Notebooks v2 con CRDs, Trainer con soporte HPC vía Flux, y KServe con un CRD dedicado para LLMs."
---

![Ilustración editorial de un ecosistema de machine learning sobre plataformas de contenedores con tuberías de datos conectando módulos, estilo tech editorial](../../assets/images/2026-08-15-kubeflow-graduacion-cncf-kale-notebooks-v2.jpg)

Kubeflow está a punto de ponerse la toga: el proyecto está avanzando rápido hacia su **graduación en la CNCF**, y para demostrar que está a la altura acaba de renovar prácticamente todo su stack. InfoQ hizo un resumen completo y acá va lo importante.

## Kale 2.0: del notebook al pipeline sin escribir SDK

La joya de la actualización. Kale convierte **Jupyter notebooks anotados en pipelines listos para producción** sin escribir una línea del SDK de Kubeflow Pipelines. La versión 2.0 ahora soporta la arquitectura de **Kubeflow Pipelines v2**, acortando de forma brutal el camino entre experimentación y producción. Los data scientists ya no tienen excusa para dejar sus notebooks tirados.

## Notebooks v2: rediseño total con CRDs

Los notebooks se reescribieron desde cero con una arquitectura **declarativa basada en CRDs**. La idea: que los platform teams tengan control con templates sobre entornos interactivos tipo JupyterLab o VS Code corriendo en Kubernetes. Hay una **alpha disponible** para ir probando antes del GA.

## Trainer: entrenar IA y correr HPC en el mismo cluster

El nuevo Kubeflow Trainer unifica **entrenamiento distribuido de IA y workloads HPC** con soporte MPI. Lo más destacado: la integración oficial con el **Flux Framework**, que permite correr simulaciones HPC masivas junto a jobs de entrenamiento en un mismo cluster Kubernetes, coordinados vía PMIx (Process Management Interface Exascale). HPC cloud native dejando de ser oxímoron.

## SDK con Spark nativo y Hub (ex-Model Registry)

- El SDK ahora trae **soporte nativo para Spark** en Kubernetes sin configuración de infraestructura, además de blueprints integrados para **fine-tuning de LLMs**. En el roadmap: instrumentación con **OpenTelemetry** y tracking con MLflow.
- El **Model Registry fue renombrado a Hub**, ampliando su alcance con un Model Catalog y un **MCP Catalog** para buscar y desplegar servidores MCP, usando OCI como estándar de almacenamiento.

## KServe le da categoría de primera clase a los LLMs

KServe estrenó el CRD **LLMInferenceService**, convirtiendo el serving de modelos de lenguaje en una primitiva de plataforma nativa: soporta **inferencia distribuida multi-nodo** y expone **APIs compatibles con OpenAI**.

## Community Distribution 26.03

Validada oficialmente para **Kubernetes 1.34+**, con defaults multi-tenant más estrictos y compatibilidad con **Pod Security Standards Restricted**.

## El dato curioso

Subaru ganó un concurso de case studies de la CNCF usando Kubernetes + Argo CD para bajar el tiempo de pull de **imágenes de contenedores de IA de más de 30 GB: de 3 horas a 3 minutos**. Cuando la comunidad dice que K8s es la base de la IA en producción, no está bromean.

---

**Fuente:** [InfoQ](https://www.infoq.com/news/2026/08/kubeflow/) · [CNCF Blog](https://www.cncf.io/blog/2026/07/28/kubeflow-unveils-new-cloud-native-innovations-to-supercharge-ai/)
