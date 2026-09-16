---
title: "Azure Red Hat OpenShift estrena hosted control planes en public preview"
author: Carlos
pubDatetime: 2026-09-16T15:00:00Z
slug: azure-openshift-hosted-control-planes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - DevOps
description: "Microsoft separa el plano de control de los workers en Azure Red Hat OpenShift: la gestión pasa a infraestructura compartida de Microsoft y Red Hat, y los nodos de aplicación se quedan en tu suscripción."
---

![Ilustración editorial de un plano de control de Kubernetes alojado en la nube, separado de nodos de trabajo locales, capas de infraestructura gestionada vs propia, tonos rojo y azul profundo sobre fondo oscuro, estilo vectorial plano minimalista](../../assets/images/2026-09-16-azure-openshift-hosted-control-planes.jpg)

La gestión de clústeres sigue moviéndose "hacia arriba". **Microsoft** anunció el lunes el **public preview de los hosted control planes para Azure Red Hat OpenShift (ARO)**, una opción de despliegue que se suma a la arquitectura estándar — que, ojo, sigue soportada y en desarrollo activo.

## Qué cambia

La gracia de los hosted control planes es separar el **plano de control de los nodos de trabajo**. Microsoft y Red Hat se hacen cargo del control plane sobre **infraestructura de gestión compartida**, mientras que los workers de aplicación se quedan **dentro de tu suscripción de Azure**. La implementación se construye sobre **HyperShift**, manteniendo la experiencia de aplicación de OpenShift.

El otro atractivo es el footprint: la comparación de Microsoft habla de un mínimo de **dos nodos de trabajo** para hosted control planes, versus **tres nodos de control + tres workers** de un clúster estándar. Menos máquinas, menos costo base.

## Lo que hay que mirar con lupa

Acá es donde conviene bajar la emoción. Los hosted node pools ocupan **una sola availability zone cada uno** (se pueden repartir pools entre zonas), y los componentes de plataforma — ingress, registry de imágenes, monitoreo — **corren en los workers**. O sea, dos nodos te sirven para levantar un entorno, pero no son un diseño de disponibilidad: la resiliencia la tienes que dimensionar tú.

Como todo public preview, el consejo sano es probarlo con **una aplicación no productiva y una lista escrita de requisitos**, no declarar victoria apenas el clúster responde. El plano de control gestionado es cómodo, pero sigue siendo parte del *failure path* de tu aplicación aunque ya no veas sus VMs en tu suscripción.

**Fuentes:** [Microsoft Tech Community](https://techcommunity.microsoft.com/blog/appsonazureblog/azure-red-hat-openshift-with-hosted-control-planes-now-available-in-public-previ/4555997), [Microsoft Learn](https://learn.microsoft.com/en-us/azure/openshift/intro-openshift)
