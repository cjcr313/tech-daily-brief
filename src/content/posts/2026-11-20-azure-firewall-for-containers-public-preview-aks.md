---
title: "Azure Firewall for Containers llega a public preview: políticas de firewall para AKS como custom resources de Kubernetes"
author: Carlos
pubDatetime: 2026-11-20T21:00:00Z
slug: azure-firewall-for-containers-public-preview-aks
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "Microsoft listó en Azure Updates la preview pública de Azure Firewall for Containers: un controller dentro del cluster traduce custom resources de Kubernetes a políticas de Azure Firewall para AKS, siguiendo el patrón ya visto en Application Gateway for Containers."
---

![Ilustración editorial de contenedores Kubernetes conectados a un escudo de firewall administrado en la nube](../../assets/images/2026-11-20-azure-firewall-for-containers-public-preview-aks.jpg)

Microsoft anda decidido a que la configuración de red en AKS se viva 100% desde Kubernetes. Tras el anuncio en Ignite, **Azure Updates listó el 20 de noviembre la public preview de Azure Firewall for Containers**: la idea es gestionar la protección de Azure Firewall para workloads de AKS **mediante custom resources de Kubernetes y un controller**, en vez de alternar entre kubectl y el portal de Azure.

## El patrón ya lo conoces

Si usaste **Application Gateway for Containers** con su ALB Controller, la mecánica es la misma: declaras la política como recurso de Kubernetes, un controller en el cluster la traduce, y **Azure opera el data plane por fuera del cluster**. Ahora la misma filosofía llega al firewall:

- Políticas de salida e inspección definidas junto a tus manifests.
- Ciclo de vida GitOps-friendly: la política de red viaja con el deploy, se versiona en Git y se revisa en PR.
- Sin gestionar infraestructura de firewall a mano ni context-switching entre herramientas.

## Las letras chicas de la preview

Como toda preview de Microsoft, hay condiciones: **solo para uso no productivo y testing**, con **limites de regiones soportadas**. Traducción práctica: es el momento de probarlo en staging y armar opinión, no de migrar el egress del cluster que paga la hipoteca.

## Por qué importa

AKS ya venía alineándose con **Gateway API como estándar de largo plazo para ingress L7**. Con firewall policies como custom resources, Microsoft completa el rompecabezas: networking de cluster administrada desde la misma API que usan tus equipos de plataforma. Para quien viene de pelearse con NetworkPolicies que solo filtran L3/L4 dentro del cluster, tener inspección y egress control a nivel cloud, declarado en YAML nativo, es un adelanto concreto de dónde va la operación de Kubernetes en Azure.

**Fuentes:** [Azure Updates](https://azure.microsoft.com/en-us/updates/) · [Windows Forum](https://windowsforum.com/news/azure-firewall-for-containers-public-preview-kubernetes-policy-management-for-aks.453448/)
