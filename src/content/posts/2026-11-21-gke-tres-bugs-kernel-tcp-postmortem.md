---
title: "Google publicó el postmortem del misterio GKE: tres bugs encadenados terminaron en un parche al kernel de Linux"
author: Carlos
pubDatetime: 2026-11-21T13:05:00Z
slug: gke-tres-bugs-kernel-tcp-postmortem
featured: false
draft: false
tags:
  - Kubernetes
  - Infraestructura
  - Observabilidad
description: "Un cliente con PSC quedó con ~800 devs sin poder desplegar por timeouts intermitentes al API server. La causa: reordenamiento de paquetes en PSC + half-close de Envoy + un bug del kernel que descartaba FINs reordenados. Tres capas, tres fixes."
---

![Ilustración editorial tech de tres capas de red translúcidas y apiladas con paquetes de datos luminosos atravesándolas y desviándose, un ingeniero con lupa analizando capturas de paquetes al costado, paleta azul oscuro con acentos cian y ámbar, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-11-21-gke-tres-bugs-kernel-tcp-postmortem.jpg)

Google publicó un postmortem que es una pequeña obra de arte del debugging: **tres bugs interactuando en capas distintas** (GKE, Private Service Connect y el kernel de Linux) que juntos dejaron a un cliente con **~800 desarrolladores bloqueados para desplegar a producción**.

## Qué pasó

Enero de 2026. Un cliente con varios clusters GKE usando **Private Service Connect** para acceso privado al control plane empezó a ver timeouts intermitentes cuando los pods intentaban hablar con el API server. Nada obvio: la conexión simplemente nunca completaba.

Las capturas de paquetes mostraron algo raro: el control plane respondía a nuevas solicitudes TCP con **ACKs viejos de conexiones ya cerradas**. Síntoma clásico de algo podrido en el estado TCP.

## Tres bugs, un solo síntoma

La investigación — que involucró a equipos de GKE, PSC, networking, hostnet, kernel y la comunidad upstream de Linux — destapó tres causas encadenadas:

1. **Reordenamiento de paquetes en PSC**: la ruta privada reordenaba paquetes más de lo asumido.
2. **Half-close de Envoy**: el comportamiento del proxy impedía que las conexiones TCP se cerraran correctamente, dejando sockets pegados eternamente en `FIN_WAIT_2`.
3. **Bug del kernel de Linux**: el stack TCP descartaba ciertos paquetes FIN cuando llegaban reordenados. Sin FIN procesado, el socket nunca moría.

Cada capa tenía una explicación "plausible" por sí sola. Ninguna estaba completa. Como resume el ingeniero de Google Akash Thakur: lo más duro fue que el síntoma (i/o timeout en una conexión que nunca completó) se veía igual mirando PSC, el state machine TCP del kernel o la gestión de conexiones de Envoy.

## El fix: parche al kernel

Se resolvieron tres cosas coordinadas en varias semanas:

- Rollback de un cambio de PSC para restaurar conectividad
- Corrección del manejo del proxy protocol + tests de regresión
- **Parche al kernel de Linux** (autorado por Eric Dumazet, ex-Googler) que arregla el descarte de FINs reordenados

La moraleja para los que operamos infra: cuando un bug de red "no tiene sentido", a veces es porque son tres bugs poniéndose de acuerdo. Las capturas de paquetes en varias capas y la correlación con cambios de rollout fueron las herramientas que descifraron el caso. Plataforma crítica, cero glamour, mucha lupa.

**Fuentes:** [Google Cloud Blog](https://cloud.google.com/blog/products/networking/the-three-layer-gke-network-mystery/) · [InfoQ](https://www.infoq.com/news/2026/11/gke-kernel-network-bug/)
