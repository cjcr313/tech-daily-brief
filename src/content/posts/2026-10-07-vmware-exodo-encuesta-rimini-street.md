---
title: "Nueve de cada diez clientes VMware miran la puerta: la encuesta que confirma el éxodo"
author: Carlos
pubDatetime: 2026-10-07T21:12:00Z
slug: vmware-exodo-encuesta-rimini-street
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "Encuesta de Rimini Street: 90% de las organizaciones con VMware explora alternativas por los costos de licenciamiento de Broadcom, 48% no planea mover nada a Cloud Foundation y 60% evalúa multi-hypervisor."
---

![Ilustración editorial de un gran edificio de servidores monolítico en tonos verdes con grietas, mientras flujos de datos luminosos emigran hacia varios nodos modulares más pequeños en azul y turquesa, estilo flat profesional, sin texto](../../assets/images/2026-10-07-vmware-exodo-encuesta-rimini-street.jpg)

El éxodo de VMware dejó de ser anécdota de foros y se volvió estadística: una encuesta de **Rimini Street** a casi 300 organizaciones usuarias de VMware (realizada entre fines de 2025 y febrero de 2026) encontró que **90% está explorando alternativas**, con los costos de licenciamiento de Broadcom como razón número uno. El resumen de The Register lo puso sin anestesia: *nine in 10 VMware customers eye the exit as licensing bills bite*.

## Los números

- **90%** explora alternativas por el alza en costos de licenciamiento.
- **54%** considera irse porque **Broadcom mató el soporte para licencias perpetuas**.
- **60%** evalúa una estrategia **multi-hypervisor**.
- **47%** prefiere un entorno híbrido de hypervisors + contenedores ("lo mejor de ambos mundos").
- **48%** no tiene planes de mover workloads a **VMware Cloud Foundation**, la plataforma preferida de Broadcom.

La respuesta no es "migrar todo a X", sino diversificar: on-prem, nube privada, nube pública y hypervisors alternativos conviviendo según el workload. Eso sí, el propio reporte reconoce que la **complejidad operacional** es la barrera número uno para concretar las migraciones. Migrar un data center virtualizado no es cambiar de marca de café.

## El contexto confirma la tendencia

Gartner, en su Magic Quadrant de Distributed Hybrid Infrastructure de septiembre, predice que **55% de las empresas con VMware estará haciendo pruebas de concepto de alternativas para 2029**, arriba del 25% de este año. Y Tony Harvey de Garton... perdón, de **Gartner**, ya lo había dicho: esto es un wake-up call sobre la dependencia de un solo vendor.

Ojo con el sesgo: Rimini Street vende soporte de terceros, así que le conviene que la migración masiva no exista pero el malestar sí. Aun con ese grano de sal, los números calzan con todo lo que hemos visto: Proxmox, OpenStack, Kubevirt y los hypervisors basados en KVM creciendo a tasas de dos dígitos (Kubernetes-native virtualization es la categoría de más rápido crecimiento, 21% anual según las estimaciones de mercado).

Si tu equipo aún corre vSphere con licencias perpetuas, la ventana de planificación ya está abierta. Los que esperaron al último minuto en 2024 terminaron pagando subscription pricing de emergencia. No seas ese equipo.

**Fuentes:** [The Register](https://www.theregister.com/virtualization/2026/10/07/nine-in-10-vmware-customers-eye-the-exit-as-licensing-bills-bite/5301591) · [Ars Technica](https://arstechnica.com/information-technology/2026/10/operational-complexity-a-top-barrier-for-vmware-migrations-survey/)
