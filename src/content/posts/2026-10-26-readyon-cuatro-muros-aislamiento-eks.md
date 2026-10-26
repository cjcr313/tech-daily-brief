---
title: "Las 'cuatro murallas' de ReadyOn: aislamiento multi-tenant en Amazon EKS sin sustos"
author: Carlos
pubDatetime: 2026-10-26T21:05:00Z
slug: readyon-cuatro-muros-aislamiento-eks
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - Arquitectura
description: "ReadyOn detalló su arquitectura de aislamiento multi-tenant en EKS: namespaces con Argo CD, node pools dedicados con Karpenter y taints duales, security groups por tenant y bases Aurora separadas. Un plan de amenazas de 10 etapas y cero rutas cross-tenant hasta hoy."
---

![Ilustración editorial tech isométrica de cuatro murallas o capas concéntricas brillantes protegiendo contenedores de cargas de trabajo sobre un plano de control de Kubernetes, escudos y candados luminosos bloqueando caminos entre módulos de distintos colores, paleta azul profundo con acentos ámbar y verde, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-26-readyon-cuatro-muros-aislamiento-eks.jpg)

Multi-tenancy en Kubernetes es de esas cosas que suena bonita en el whiteboard y te quita el sueño en producción. ReadyOn, con su plataforma Harmony (procesa datos de remuneraciones y analítica organizacional para empresas), publicó en el blog de arquitectura de AWS cómo resolvió el problema: **cuatro capas de aislamiento** que llaman sus "cuatro murallas", validadas contra un **modelo de amenazas de 10 etapas** enfocado en movimiento lateral y acceso cross-tenant.

La conclusión que más llama la atención: los ejercicios adversariales no han logrado encontrar una ruta exitosa entre tenants hasta la fecha.

## Muralla 1: Namespaces con cinturón de seguridad

Cada tenant vive en su propio namespace con RBAC, resource quotas, admission controls y network policies default-deny. Lo interesante es la automatización: **Argo CD ApplicationSets** genera estos recursos desde configuración en Git, así todos los tenants parten con el mismo baseline y cualquier cambio no autorizado se revierte solo (reconciliación continua).

## Muralla 2: Compute separado con taints duales

Karpenter aprovisiona **node pools dedicados por tenant** con una estrategia de taints duales: los pods deben tolerar tanto el taint identificador del tenant como el del tipo de workload para agendarse. Y para que nadie haga trampa, un admission controller verifica que las toleraciones solicitadas correspondan realmente al tenant del namespace. Chao, pods cruzados.

## Muralla 3: Red por debajo de Kubernetes

- **Security groups de VPC por tenant** que restringen conexiones a bases de datos solo desde el node pool correspondiente.
- Network policies default-deny entre namespaces.
- **Endpoint de la API de EKS privado**, cerrando el acceso desde internet.

## Muralla 4: Datos aislados

Cada tenant tiene su propia base de datos **Aurora**. Si todo lo anterior fallara, los datos no comparten motor ni instancia.

## Por qué importa

Como resumió un ingeniero principal de AWS en los comentarios de la comunidad: para clusters single-tenant el hardening está bien documentado, pero **al agregar multi-tenancy el modelo de amenazas cambia fundamentalmente**. La arquitectura de ReadyOn es un buen blueprint para cualquier SaaS que corra cargas sensibles de distintos clientes en un mismo cluster EKS: defensa en profundidad real, no solo namespaces con buenas intenciones.

**Fuente:** [AWS Architecture Blog — ReadyOn's Four Walls of tenant isolation on Amazon EKS](https://aws.amazon.com/blogs/architecture/readyons-four-walls-of-tenant-isolation-on-amazon-eks/) (vía [InfoQ](https://www.infoq.com/news/2026/10/readyon-four-layer-isolation/))
