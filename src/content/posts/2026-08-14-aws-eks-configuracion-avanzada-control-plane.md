---
title: "AWS abre el control plane de EKS: configura scheduler, HPA y eventos sin operar tu propio Kubernetes"
author: Carlos
pubDatetime: 2026-08-14T16:00:00Z
slug: aws-eks-configuracion-avanzada-control-plane
featured: false
draft: false
tags:
  - Cloud
  - Kubernetes
description: "EKS ahora permite ajustar parámetros del API server, scheduler y controller manager directamente. Menos nodes ociosos, autoscaling más rápido y migraciones sin proxies."
---

![Ilustración editorial de un plano de control de Kubernetes con engranajes y nodos de cómputo optimizándose](../../assets/images/aws-eks-configuracion-avanzada-control-plane.jpg)

AWS acaba de habilitar la **configuración avanzada del control plane en Amazon EKS**, y es de esas noticias que suenan aburridas hasta que te das cuenta del dolor que se ahorró la gente.

## ¿Qué cambió?

Hasta ahora, si querías afinar el comportamiento del scheduler o del API server en EKS, básicamente tenías dos opciones: vivir con los defaults o montarte un cluster Kubernetes autogestionado para personalizar esos componentes. AWS ahora permite controlar directamente parámetros seleccionados del **API server, scheduler y controller manager** sin operar componentes custom.

## Los cuatro parámetros clave

- **Pod placement:** puedes cambiar la estrategia del scheduler entre favorecer nodes con más recursos libres (`LeastAllocated`) o concentrar pods en nodes ya ocupados (`MostAllocated`). Esto último deja menos instancias medio ociosas — traducción: **ahorro directo en compute**, especialmente relevante para workloads de alta rotación como batch, AI y CI/CD.
- **Autoscaling más reactivo:** control sobre el período de sincronización del HPA (Horizontal Pod Autoscaler). Con períodos más cortos, el HPA evalúa métricas y escala más seguido, respondiendo más rápido a picos de demanda.
- **Retención de eventos:** Kubernetes normalmente guarda eventos por 1 hora, pero los workloads que crean y destruyen pods sin parar consumen storage y enlentecen las operaciones de listado del API server. Ahora puedes configurar entre 10 y 60 minutos.
- **Rango de NodePorts:** ajustar el rango de puertos para servicios NodePort, lo que permite cuadrar con reglas de firewall existentes o migrar apps viejas que dependen de puertos específicos **sin modificar la app ni agregar un proxy**.

## Lo fino del asunto

- Disponible para clusters EKS con **Kubernetes 1.31+**, en todas las regiones comerciales, GovCloud y China.
- La feature en sí es **gratis**, pero ojo: algunos parámetros (como el HPA sync period configurable) requieren el tier **EKS Provisioned Control Plane**, que se cobra aparte.
- Se configura vía `CreateCluster` y `UpdateClusterConfig` con nuevos parámetros — funciona desde consola, CLI, SDKs y CloudFormation.

## Por qué importa

La pelea de los hyperscalers por sacarle jugo a cada gota de compute está llegando al control plane. Con la escasez de capacidad y los costos de AI disparados, dar control fino del bin packing y del autoscaling sin obligar a nadie a operar Kubernetes a mano es una jugada inteligente de AWS. Si tu cluster tiene workloads batch o de IA con alta rotación de pods, esto merece una mirada del equipo de plataforma.
