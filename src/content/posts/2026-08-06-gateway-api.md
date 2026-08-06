---
title: "Kubernetes: Gateway API v1.6.0 llega a estable con TCP y UDP"
author: Carlos
pubDatetime: 2026-08-06T10:00:00Z
slug: gateway-api-v1-6-0-estable
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "La nueva versión del Gateway API trae enrutamiento de capa 4 (TCP/UDP) a estado estable, mejorando la gestión de red en Kubernetes."
---
![Gateway API v1.6.0](../../assets/images/2026-08-06-gateway-api.jpg)

La comunidad de Kubernetes sigue metiéndole con todo al networking, y esta vez las buenas noticias vienen con **Gateway API v1.6.0**. La gran novedad es que `TCPRoute` y `UDPRoute` acaban de graduarse a estado estable (v1), lo que significa que el enrutamiento de capa 4 ahora está listo para el prime time en producción.

Si andas corriendo bases de datos, sistemas DNS o servidores de juegos en tu cluster, esto te viene como anillo al dedo, porque te permite gestionar el tráfico TCP y UDP de una forma mucho más portable y estandarizada. 

Además, esta versión ordena un poco la casa separando los recursos experimentales en su propio grupo de API (`gateway.networking.x-k8s.io` con prefijo X). Así queda clarito qué está estable y qué sigue en fase de pruebas, evitando dolores de cabeza en ambientes productivos. ¡Buenísima movida para simplificar el networking en K8s!