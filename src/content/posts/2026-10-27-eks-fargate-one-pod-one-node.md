---
title: "Un pod, un nodo: la arquitectura detrás del Kubernetes serverless de AWS (EKS Fargate)"
author: Carlos
pubDatetime: 2026-10-27T13:25:00Z
slug: eks-fargate-one-pod-one-node
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - Arquitectura
description: "The New Stack publicó un walkthrough técnico de cómo EKS Fargate hace que el pod sea la unidad de infraestructura: routing en admission, scheduler propio, runtime de nodo mínimo y aislamiento de red. Sin administrar un solo worker node."
---

![Ilustración editorial tech isométrica de un solo pod de Kubernetes brillando dentro de su propia cápsula de nodo aislada flotando sobre una malla de nube, con una tarjeta de red dedicada conectándola a una VPC y otros pods lejanos en cápsulas separadas, paleta azul con acentos naranjas, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-27-eks-fargate-one-pod-one-node.jpg)

The New Stack sacó un artículo que es puro alimento para arquitectorientados: un recorrido **pod por pod** de cómo funciona el Kubernetes serverless de AWS, donde "serverless cambia quién administra el nodo, no lo que Kubernetes espera de él". Kubernetes sigue exigiendo que exista un nodo que registre con el control plane, reporte capacidad, corra Kubelet y dé networking. EKS Fargate cumple todo eso **sin que arriendes un solo worker node**: el pod es la unidad de infraestructura.

## El truco completo, en capas

Cuando un pod matchea un Fargate profile, EKS arma un entorno de cómputo dedicado, bootea los componentes de Kubernetes necesarios, le mete una **ENI en la VPC del cliente** y destruye todo cuando el pod se muere. Detrás de esa experiencia simple hay varias decisiones de diseño coordinadas:

- **Routing antes del scheduling**: un mutating webhook operado por AWS (parte del control plane) intercepta los pods que matchean un Fargate profile, les agrega el label correspondiente y les cambia el `schedulerName` para que el scheduler default ni los toque.
- **Scheduler dedicado**: en vez de elegir nodos de un pool existente, el scheduler de Fargate **provisiona capacidad** para cada pod. No hay "elegir mejor nodo", hay "fabricar el nodo".
- **Runtime image enfocado**: los componentes de nodo corren desde una imagen mínima con solo lo que Kubelet y amigos necesitan.
- **Namespaces de red separados**: el path de plataforma va separado del path del workload.
- **Admission handler en el nodo**: restringe los workloads a patrones compatibles con el modelo un-pod-un-entorno (DaemonSets, por ejemplo, quedan fuera del juego).

## Por qué leerlo

El modelo un-pod-un-nodo tiene implicancias directas para costos (sin overprovisioning, pero con precio por vCPU/hora más caro), densidad (cero bin-packing entre workloads) y seguridad (aislamiento por diseño, cada pod con su ENI). El artículo de TNS es de lo mejor que ha salido este año para entender el trade-off real del serverless Kubernetes en AWS, ideal si estás evaluando Fargate vs. managed node groups para tu próxima migración.
