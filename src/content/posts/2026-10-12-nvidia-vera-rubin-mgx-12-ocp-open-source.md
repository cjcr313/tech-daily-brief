---
title: "Nvidia abre los planos de sus racks Vera Rubin al OCP: MGX 1.2, cooling líquido y 250kW por rack"
author: Carlos
pubDatetime: 2026-10-12T21:05:00Z
slug: nvidia-vera-rubin-mgx-12-ocp-open-source
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "En la OCP Global Summit, Nvidia contribuyó los diseños de rack y compute tray de Vera Rubin al proyecto abierto MGX 1.2, sumó software DSX open source y co-publicó con AMD, Google y Meta la Open Data Center Specification v0.7."
---

![Ilustración editorial de un rack de servidor futurista con paneles abiertos mostrando planos técnicos flotantes y tuberías de refrigeración líquida azul brillante, ambientación de datacenter oscuro con acentos verdes y negros, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-12-nvidia-vera-rubin-mgx-12-ocp-open-source.jpg)

Movida poco característica de Nvidia: en la **OCP Global Summit** de este 12 de octubre, la compañía dejó de guardar los planos de su hardware bajo llave y **contribuyó los diseños de rack y compute tray de Vera Rubin al Open Compute Project** a través de la arquitectura abierta **MGX 1.2**. Sí: los blueprints de la generación que viene ya son patrimonio común.

## Qué se abrió exactamente

- **Racks Vera Rubin y compute trays** con blind-mate liquid cooling a escala de rack (sin cables ni ventiladores en el tray), infraestructura de interconexión interoperable y un busbar líquido de **5.000 amperios** pensado para sistemas de mayor potencia.
- Soporte para configuraciones de hasta **250kW por rack**, cifras que hace dos años sonaban a ciencia ficción.
- **Cuatro componentes nuevos de DSX open source**: Config Manager, Cluster Readiness Engine, Rack Management Service y Cluster API — o sea, el software de operación de la "fábrica de IA" también se abrió.
- Junto con **AMD, Google y Meta**, co-publicaron la **Open Data Center Specification v0.7**, un intento de estándar común a nivel instalación.

## Los acompañamientos de red

En el mismo anuncio: **Meta se comprometió con los switches Ethernet Spectrum-6** para sus fábricas de más de 100.000 GPUs, y Nvidia + Cisco presentaron **USFP**, un nuevo formato de óptica pluggable a **400Gb/s por línea**.

## Por qué importa (y por qué lo hace Nvidia)

La lectura estratégica es directa: al abrir el diseño del rack, Nvidia busca que **su silicón sea la suposición por defecto en la próxima construcción de cada hyperscaler**, mientras AMD y otros empujan racks abiertos rivales en la misma cumbre. Para los equipos de infraestructura, lo concreto es bueno de todos modos: especificaciones de cooling líquido, potencia y management interoperables implican menos vendor lock-in a nivel rack y un ecosistema de integradores más amplio.

Cuando la potencia por rack se triplica cada par de años, tener el estándar abierto vale más que tener el secreto.

**Fuentes:** [NVIDIA Blog](https://blogs.nvidia.com/blog/ocp-global-summit-vera-rubin-scale-ai-factories/) · [SDxCentral](https://www.sdxcentral.com/news/nvidia-opens-up-vera-rubin-rack-and-tray-designs-to-ocp/) · [StorageReview](https://www.storagereview.com/news/nvidia-cisco-usfp-optics-400gbps-per-lane-ocp-2026)
