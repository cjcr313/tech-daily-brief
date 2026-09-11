---
title: "Portainer corta 3.0 y se vuelve Kubernetes-first: una familia de consolas en vez de una UI única"
author: Carlos
pubDatetime: 2026-09-11T21:00:00Z
slug: portainer-3-0-kubernetes-first
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
  - Infraestructura
description: "Portainer anuncia su major 3.0, una versión pensada 100% en Kubernetes que rompe la UI única en favor de consolas de propósito único, con herramienta de migración Docker→K8s incluida."
---

![Ilustración editorial de contenedores navegando hacia una plataforma Kubernetes: una flota de cajas de carga metálicas fluyendo por un canal de datos azul profundo, estilo tech editorial con acentos ámbar](../../assets/images/2026-09-11-portainer-3-0-kubernetes-first.jpg)

Portainer acaba de soltar una de esas decisiones que marcan época. Neil Cresswell, el CEO, publicó el anuncio de **Portainer 3.0** y el mensaje es directo: se acabó la UI única que intentaba hablarle a todo el mundo por igual. Lo que viene es una **familia de consolas de propósito único**, cada una pensada para una persona haciendo un trabajo, y todas construidas sobre una base **Kubernetes-first**.

## 3.0, 2.x y el calendario

La línea 2.x se despide con **2.45 LTS**, que ya salió. Desde fin de mes arranca **3.0.0 como release STS** (short-term support), y el próximo LTS será **3.3.0 en diciembre**. Si hoy corres Docker, tranquilo: 2.x sigue recibiendo parches de seguridad y bugfixes, y Cresswell insiste en que quedarse es una decisión soportada. Pero el roadmap hacia adelante está claro —Kubernetes— y las capacidades nuevas (política, GitOps, observabilidad) solo van a llegar ahí.

## Las consolas nuevas

La gran apuesta es fragmentar el monolito:

- **Portainer-Run** (ya disponible en portainer.ai): autoservicio gobernado para que gente no técnica —los "business builders"— despliegue las apps que armó con herramientas de IA directamente sobre Kubernetes de la empresa, sin tocar infra.
- **Portainer-IDP**: portal interno de desarrollo para equipos de ingeniería que quieren una plataforma de verdad.
- **Portainer-Command**: un gateway MCP para que agentes de IA operen Portainer de forma segura, con roles de solo lectura expirables y todo cambio forzado por GitOps y la cadena de aprobación existente.
- **Portainer-Operations**: la consola del platform engineer, fuera de la UI general, enfocada en day-2 y gestión de clusters con GitOps obligatorio.
- **Portainer-AiGrid**: alineada a la parte más caliente del ecosistema, correr cargas de IA sobre Kubernetes.

Debajo de todo anda **KubeSolo**, movido más cerca del release track oficial de Kubernetes, que ahora embebe **Portainer-D2K** de forma nativa (se habilita con un flag en la instalación). Un solo despliegue te da cluster Kubernetes single-node, clúster Swarm sintético y host Docker sintético, todo bajo 200MB de RAM.

## La migración Docker→Kubernetes

Portainer no se hace el loco con el dolor de migrar. Viene una **herramienta de migración** (como Add-on) que transforma contenedores y stacks Docker en **manifiestos de Kubernetes**, los commitea a un repo Git y los despliega usando el GitOps nativo de Portainer. Para los devs que no quieren soltar Docker, **Portainer-D2K** se presenta como un ambiente Docker sintético: dejas que tu gente siga usando `docker compose` y la API compatible con Docker, mientras por debajo todo corre en Kubernetes.

## Lo que queda claro

El fondo del asunto lo explica el propio Cresswell: en los últimos dos años la brecha entre Docker y Kubernetes se ensanchó tanto que mantener soporte completo para Docker/Podman, Swarm y Kubernetes en un solo codebase dejó de ser viable. Cada feature nueva había que construirla tres veces contra tres sustratos. El resultado es un Portainer que **apuesta todo a Kubernetes** y trata a Docker como ciudadano de segunda: sigue funcionando, pero no recibe features nuevas.

No es la primera señal de que el mundo del contenedor está migrando de forma definitiva hacia Kubernetes. Lo de Portainer es básicamente institucionalizar esa dirección como la única viable para su producto.

Vía [Portainer](https://www.portainer.io/blog/portainer-3-0-is-coming).
