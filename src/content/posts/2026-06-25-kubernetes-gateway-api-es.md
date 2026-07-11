---
title: "Kubernetes 1.30: El impacto del Gateway API y el futuro de Ingress"
pubDatetime: 2026-06-25T08:00:00Z
author: Nauta Lab
tags:
  - kubernetes
  - arquitectura
  - cloud
  - infraestructura
description: "Por qué el ecosistema Cloud Native está abandonando los viejos Ingress Controllers en favor de Gateway API, y cómo prepararse para el cambio."
---

*🌐 [Read this article in English](/tech-daily-brief/posts/kubernetes-gateway-api-en)*

Con los recientes anuncios alrededor del ecosistema Cloud Native, una cosa ha quedado clara: **Gateway API es el nuevo estándar absoluto**. Si bien `Ingress` nos acompañó durante años resolviendo la exposición de servicios básicos, su diseño original quedó pequeño para arquitecturas modernas.

En este artículo, analizaremos qué está pasando en las comunidades oficiales (CNCF) y por qué deberías empezar a migrar.

![Kubernetes Gateway API Architecture](https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop)
*Representación conceptual del tráfico en clústeres modernos. Foto referencial.*

## El problema con el Ingress tradicional

Históricamente, el recurso `Ingress` en Kubernetes tenía un problema de diseño: **mezclaba la infraestructura con el código de la aplicación**. 

Si un desarrollador quería exponer una ruta `/api/v1`, dependía directamente del equipo de infraestructura que configuraba el balanceador de carga o el NGINX Ingress Controller. Además, Ingress carecía de soporte nativo para características avanzadas como:
- Enrutamiento basado en cabeceras HTTP (Headers)
- Weighted routing (Canary deployments / Blue-Green)
- Soporte nativo de gRPC o WebSockets sin usar molestas *annotations*.

## Entra Gateway API: Roles separados

Gateway API fue diseñado desde cero pensando en la **arquitectura organizacional**, no solo en los cables. Separa la responsabilidad en tres recursos clave:

1. **GatewayClass:** Gestionado por el proveedor Cloud (AWS, GCP, Azure).
2. **Gateway:** Gestionado por el equipo de Infraestructura / Platform Engineering (el balanceador de carga real).
3. **HTTPRoute:** Gestionado por los Desarrolladores de Software.

Este modelo permite que el equipo de DevOps/Arquitectura mantenga el Gateway centralizado, mientras los desarrolladores son autónomos para enrutar su tráfico mediante `HTTPRoute` sin tocar anotaciones inseguras.

## ¿Qué dicen los proyectos oficiales?

Revisando los últimos comunicados de la Cloud Native Computing Foundation (CNCF):
- **Cilium:** Ha consolidado su soporte para Gateway API, reemplazando la necesidad de NGINX en muchos clústeres bare-metal.
- **Istio:** Ya utiliza Gateway API como su mecanismo de configuración por defecto para manejar el tráfico *north-south* (entrada al clúster).
- **Google Kubernetes Engine (GKE):** Ya promueve fuertemente el uso de sus GKE Gateways nativos por encima del clásico Ingress.

## Resumen para tu Arquitectura

Si estás diseñando un clúster nuevo hoy, **no uses Ingress**. Adopta Gateway API. 

Aunque requiere aprender un par de Custom Resource Definitions (CRDs) adicionales, el nivel de control sobre el tráfico de red, la seguridad implícita al evitar anotaciones compartidas y la alineación con herramientas de observabilidad modernas, hacen que el esfuerzo valga la pena a largo plazo.

*Mantente atento a Ping Diario para más análisis arquitectónicos y resúmenes técnicos.*
