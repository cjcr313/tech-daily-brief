---
title: "Amazon EKS por fin te deja hacer rollback de Kubernetes (tienes 7 días)"
author: Carlos
pubDatetime: 2026-07-27T10:00:00Z
slug: amazon-eks-kubernetes-version-rollback-7-days
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - DevOps
description: "Amazon EKS ahora soporta revertir el control plane a la versión previa de Kubernetes dentro de los 7 días de un upgrade. Un salvavidas gigante."
---

![Placeholder](../../assets/images/placeholder.jpg)


Buenas noticias para todos los que sufren cada vez que toca actualizar el clúster. **Amazon EKS acaba de anunciar soporte para Kubernetes version rollbacks**.

Básicamente, ahora puedes revertir el *control plane* de tu clúster a su versión previa de Kubernetes si algo se rompe después de una actualización, siempre y cuando lo hagas **dentro de una ventana de 7 días**.

### Por qué importa tanto

Hasta ahora, si hacías upgrade del control plane en EKS y descubrías un *breaking change* con algún addon, un Ingress controller que dejó de funcionar, o una API deprecada que se te pasó por alto... buena suerte. Tocaba arreglar hacia adelante (fix forward) con el clúster en llamas, o recrear todo el clúster desde cero.

Con esta nueva funcionalidad:
- Tienes una ventana de 7 días para decir "nope" y apretar el botón de pánico.
- Reduce muchísimo el estrés y el riesgo operativo en equipos pequeños de DevOps.
- Se alinea mejor con los estándares modernos de SRE donde el *rollback* rápido es clave.

Obviamente, el rollback aplica solo al *control plane*; los *node groups* (los worker nodes) siguen siendo tu responsabilidad, pero tener la opción de retroceder la versión base del clúster cambia totalmente las reglas del juego para el mantenimiento en AWS.

*Fuente: InfoQ, AWS.*