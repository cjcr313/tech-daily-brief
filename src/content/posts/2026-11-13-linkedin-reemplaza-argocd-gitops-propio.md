---
title: "LinkedIn le dijo chau a Argo CD: así funciona su motor GitOps propio"
author: Carlos
pubDatetime: 2026-11-13T13:05:00Z
slug: linkedin-reemplaza-argocd-gitops-propio
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
description: "LinkedIn reemplazó Argo CD por un motor GitOps interno: las fallas de despliegue cayeron de 925 a 63 y hay lecciones para cualquiera que opere Kubernetes a escala."
---

![Ilustración editorial de un flujo de despliegue GitOps con ramas de Git conectando clústeres de Kubernetes mediante engranajes y tuberías](../../assets/images/linkedin-reemplaza-argocd-gitops-propio.jpg)

LinkedIn publicó en su blog de ingeniería que **reemplazó Argo CD por un motor GitOps construido en casa**, y los números son para tomarles el peso: el nuevo sistema despliega aplicaciones en **más de 250 clústeres de Kubernetes**, soporta **más de 4.000 servicios** y maneja **más de 100.000 despliegues semanales**. En el mismo período, las fallas de infraestructura de despliegue cayeron **de 925 a 63**, a pesar de que el volumen de despliegues creció 3,7 veces. La mediana para detectar y cerrar un despliegue fallido bajó de 16,1 a 2,45 minutos.

## ¿Por qué Argo CD no les calzaba?

Partieron con una instancia de Argo CD por clúster (heredado de cómo ya gestionaban sus add-ons), con clústeres de hasta 5.000 nodos. A esa escala, el equipo documentó siete problemas. Los más jugosos:

- **Sin `observedGeneration`**: imposible vincular el estado de sync/salud con un despliegue específico. Lo parcharon con un health check en Lua con annotation de tracking.
- **Watch compartido por tipo de recurso**: el churn de etcd de una app podía frenar los syncs de todas. En un clúster con 60.000 pods el sync tardaba menos de 3 minutos; con más de 80.000, se pasaba de 10.
- **Truncamiento de `managedFields`**: cuando un objeto pasa de 10 field managers, el API server "olvida" quién es dueño de cada campo. En workloads de IA con varios contenedores por Pod, un contenedor eliminado del manifiesto podía **sobrevivir en el Pod en producción sin lanzar error**. Cero gracioso.

## La solución: biblioteca, no controlador

LinkedIn evaluó Flux, pero como compartía el mismo paradigma de controlador compartido, decidieron construir el motor **como biblioteca**: cada despliegue corre en su propio pod, sin estado compartido. Cambios clave:

- **PUT en vez de PATCH**: reemplazo completo del objeto, con retry exponencial ante conflictos de `resourceVersion`.
- **Diff de 3 vías** entre el objeto vivo, el manifiesto anterior y el nuevo renderizado; si hay drift real, el despliegue falla explícitamente.
- El mismo pod observa el status del objeto hasta converger (o timeout), y los objetos que desaparecen del manifiesto quedan como candidatos a borrado, con delete protection.

La migración corrió entre julio de 2025 y abril de 2026. Eso sí, no todo fue el engine: el equipo reconoce que la clasificación de errores del orquestador también mejoró. Y Argo CD **sigue vivo en LinkedIn** para add-ons y servicios de sistema — solo que mantener 200+ instancias convertía cada upgrade en un proyecto de semanas.

## La lección

La conclusión de LinkedIn es que la decisión de construir vs. extender depende del **modelo operativo**: es el aislamiento por despliegue —no el tuning del controlador— lo que permite escalar con el cómputo. Y dejan dos chequeos prácticos para equipos con Argo CD a escala: contar los field managers en objetos long-lived (por lo de los contenedores huérfanos) y ver si la latencia de sync crece con el total de pods del clúster (watch contention).

No son los únicos: Uber también construye su lógica de despliegue con un controller dedicado por despliegue. La moraleja no es "matemos a Argo CD", sino que a cierta escala el controlador genérico deja de ser la herramienta correcta.

**Fuentes:** [InfoQ](https://www.infoq.com/news/2026/11/kubernetes-argocd-linkedin/), [LinkedIn Engineering Blog](https://www.linkedin.com/blog/engineering/infrastructure/how-we-scale-deployments-with-a-custom-gitops-engine)
