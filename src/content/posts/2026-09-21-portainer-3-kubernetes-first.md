---
title: "Portainer 3.0 se vuelve Kubernetes-first: Docker, Swarm y Podman pasan a segunda fila"
author: Carlos
pubDatetime: 2026-09-21T09:00:00Z
slug: portainer-3-kubernetes-first
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
  - Infraestructura
  - Cloud
description: "Portainer reescribe su núcleo con Kubernetes como ciudadano de primera clase. Docker, Podman y Swarm siguen soportados, pero pasan al escalón legacy. CE se queda en la serie 2.x."
---

![Ilustración editorial de un timón de barco con engranajes de Kubernetes sobre un puerto de contenedores](../../assets/images/2026-09-21-portainer-3-kubernetes-first.jpg)

Portainer, la plataforma web para manejar entornos de contenedores, anunció un giro de timón grande: **Portainer 3.0 va a ser Kubernetes-first**. Traducido: el núcleo del producto se reescribe con Kubernetes como ciudadano de primera clase, y Docker, Podman y Docker Swarm pasan a un segundo plano.

## El porqué: un solo codebase ya no da

Según la empresa, la brecha entre Docker y Kubernetes creció tanto que **mantener las mismas capacidades en Docker, Podman, Swarm y Kubernetes dentro de un solo codebase dejó de ser práctico**. Funciones como gestión de políticas, APIs de operaciones, autenticación, GitOps y observabilidad dependen cada vez más de lo que ofrece Kubernetes de forma nativa.

Ojo, que esto **no significa que Docker se muera en Portainer**: vas a poder seguir conectando y administrando entornos Docker, Swarm y Podman en la 3.x, pero esos entornos **no recibirán todas las features nuevas**. La política engine, GitOps y observabilidad se enfocarán principalmente en Kubernetes.

## La hoja de ruta de versiones

- **Portainer 2.45 LTS** será el último release de la serie 2.x.
- **Portainer 3.0** llega después como release STS (Short Term Support).
- Más adelante saldrá un **nuevo LTS** basado en la 3.x.

## Los productos nuevos, todos para K8s

Con este enfoque Kubernetes-first, Portainer está armando una familia nueva de productos pensados para Kubernetes y no para Docker:

- **Portainer-Run**
- **Portainer-IDP**
- **Portainer-Command**
- **Portainer-Operations**
- **Portainer-AiGrid**

## El puente para los que aman Docker: D2K

Para no dejar tirados a los usuarios de Docker, Portainer propone dos caminos: usar Kubernetes nativo o su proyecto **Portainer-D2K**.

D2K actúa como **capa de compatibilidad que hace que Kubernetes parezca un entorno Docker**. La gracia: podís seguir usando la Docker CLI y Docker Compose de siempre, aunque los workloads corran sobre Kubernetes. También expone una **API compatible con Docker**, así que tu automatización, CI/CD y tooling actual sigue funcionando sin migrar a lo nativo de K8s.

Además, están trabajando en un **add-on de migración** que convierte los contenedores y stacks de Docker en manifiestos de Kubernetes, los commitea a un repo Git y los despliega con el GitOps de Portainer.

## El detalle que duele: CE se queda en 2.x

Acá viene el twist que no le va a gustar a todos: **Portainer Community Edition (CE), la versión gratuita, se queda en el codebase 2.x**. No habrá un Portainer CE 3.x separado. Si querís las bondades de la 3.x, vas a tener que pasar por las versiones de pago existentes.

## La lectura

Es un movimiento honesto y realista: la industria se consolidó en Kubernetes, y mantener cuatro runtimes en paridad era insostenible. Para los equipos que operan K8s, es una buena noticia (más foco y features). Para los que siguen en Docker/Swarm con la versión community, es una señal clara de que esa vía queda en mantenimiento.

**Fuentes:** [Linuxiac](https://linuxiac.com/portainer-3-0-goes-kubernetes-first-leaving-docker-secondary/), [IT Connect](https://www.it-connect.tech/portainer-3-0-puts-kubernetes-first-as-ce-stops-at-2-x/)
