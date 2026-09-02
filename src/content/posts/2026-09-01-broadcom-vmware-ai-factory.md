---
title: "Broadcom presenta VMware AI Factory: del metal al modelo en horas, con gobernanza para agentes"
author: Carlos
pubDatetime: 2026-09-01T03:00:00Z
slug: broadcom-vmware-ai-factory
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Infraestructura
description: "En VMware Explore 2026, Broadcom lanzó VMware AI Factory, la base software-defined de su Private AI Cloud: aprovisionamiento automatizado, GPU compartidas y sandboxes seguros para agentes."
---

![Ilustración editorial de una fábrica de infraestructura de IA sobre nube privada con GPUs y agentes](../../assets/images/2026-09-01-broadcom-vmware-ai-factory.jpg)

En el **VMware Explore 2026** de Las Vegas, Broadcom presentó **VMware AI Factory**, la fundación *software-defined* de su **VMware Private AI Cloud**. El pitch es directo: las empresas quieren correr IA donde ya viven sus datos, pero el camino del metal al modelo sigue siendo lento, caro y enredado.

La respuesta de Broadcom es automatizar ese trayecto. Según Paul Turner (CPO de la división VMware Cloud Foundation), la automatización del stack puede recortar el tiempo desde un servidor bare-metal hasta servir el primer modelo de **semanas a horas**, cubriendo el aprovisionamiento de hardware, el habilitado del stack de software y las operaciones de ciclo de vida de punta a punta.

### Lo que hay adentro

Tres piezas destacan desde el ángulo de infra y seguridad:

- **Multi-tenant Model Sharing:** los modelos se comparten entre unidades de negocio a través de namespaces aislados, preservando la privacidad de datos y evitando despliegues redundantes que queman GPU.
- **AI Gateway:** centraliza la gobernanza entre on-prem y cloud con enrutamiento inteligente de prompts, rate limiting de tokens y autorización a nivel de aplicación.
- **Secure AI Sandboxes y Governance:** espacios de contenedores virtualizados que aíslan la ejecución de código generado por agentes, con una capa de control que define cómo se invocan los agentes, qué herramientas pueden usar y cómo se validan sus outputs antes de actuar.

La GPU deja de ser un recurso dedicado por workload: se poolea y se comparte entre equipos, y una **galería de modelos unificada** da visibilidad centralizada sobre despliegues, flujos RAG, throughput de tokens, latencia y utilización de cómputo.

### El mapa completo del anuncio

AI Factory no vino solo. Broadcom también presentó **AgentMinder**, una solución de gobernanza y control en runtime para agentes de IA, y **AI-ready Data Foundations** en la plataforma VMware Tanzu. Es decir: la apuesta completa de Broadcom por posicionarse como el "sistema operativo" del AI empresarial on-prem, justo en un momento donde las empresas miran con recelo el costo de la nube pública para cargas de IA intensivas.

La lectura es clara: Broadcom no quiere venderte solo vSphere. Quiere ser la capa donde tu empresa despliega, gobierna y asegura agentes de IA sobre infraestructura que ya controlas.

### Update: 2 de septiembre — VCF 9.1 y el guiño a los modelos on-prem: Google, NVIDIA, NEC, Alibaba y Z.ai validados

Un día después del anuncio de AI Factory, Broadcom confirmó los detalles de **VMware Cloud Foundation 9.1**, la versión de plataforma que sostiene todo esto. El foco es doble: **bajar costos de hardware** y **cerrar brechas de seguridad** para producción de IA en nube privada.

Lo concreto de VCF 9.1:

- **NVMe memory tiering + deduplicación de storage a nivel de clúster:** Broadcom dice que esto recorta los costos de servidor, storage y Kubernetes. El tiering además mejoró su rendimiento para bases de datos (workload clave) y suma dashboards que muestran cuánto tiering está ocurriendo.
- **Seguridad zero-trust** incorporada a la plataforma.
- **Modelos de IA validados para correr on-prem:** Broadcom confirmó que **modelos de Google, NVIDIA, NEC, Alibaba Cloud y Z.ai** están validados sobre VCF. O sea: puedes bajar modelos de terceros a tu propia infra, sin mandar los datos a la nube pública.

El dato de mercado que lo explica todo: según la encuesta que acompaña el anuncio, **56% de las organizaciones ya corre (o planea correr) inferencia en producción en nube privada**, mientras que el uso de nube pública para inferencia de producción cayó a 41% (**-15% año contra año**). La tesis de Broadcom es justamente esa: el costo de inferir en la nube pública está empujando las cargas de vuelta al datacenter propio, y VCF 9.1 quiere ser la base para ese retorno.

Para el ángulo DevOps/infra esto importa: la pelea por el "dónde corre la inferencia" ya no es solo pública vs privada, sino **qué capa de software gobierna la infra propia** (Broadcom/VCF vs OpenShift vs los stacks de Nutanix/Microsoft). Y Broadcom está apostando fuerte a que sea la suya.

**Fuentes del update:** [The Register](https://www.theregister.com/virtualization/2026/09/01/if-hardware-price-squeezes-make-you-sad-vmware-says-it-will-all-end-in-tiers/5293575), [HPCwire](https://www.hpcwire.com/aiwire/2026/09/01/vmware-cloud-foundation-brings-leading-ai-models-to-the-private-ai-cloud/), [Yahoo Finance](https://ca.finance.yahoo.com/news/broadcom-boosts-vmware-ai-push-175900642.html), [Schneider IT](https://www.schneider.im/broadcom-vmware-cloud-foundation-optimizing-costs-and-closing-security-gaps-in-the-ai-era/)
