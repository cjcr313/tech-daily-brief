---
title: "Infoblox compra Kentik: observabilidad de red se fusiona con DDI y operaciones agenticas"
author: Carlos
pubDatetime: 2026-08-13T10:00:00Z
slug: infoblox-kentik-observabilidad-red-adquisicion
featured: false
draft: false
tags:
  - Observabilidad
description: "Infoblox completó la adquisición de Kentik, sumando inteligencia de red en tiempo real a su plataforma DDI. Apuesta fuerte por operaciones agenticas y network observability."
---

![Ilustración editorial de nodos de red interconectados con ondas de datos fluyendo entre ellos, estilo tech editorial verde y azul](../../assets/images/2026-08-13-infoblox-kentik-observabilidad-red-adquisicion.jpg)

Infoblox cerró la adquisición de **Kentik**, la plataforma de inteligencia y observabilidad de red. No es una compra táctica: es una jugada de plataforma que fusiona DDI (DNS, DHCP, IPAM) con observabilidad en tiempo real.

## Qué aporta Kentik

Kentik era conocida por su capacidad de **ingestar y correlacionar flujos de red masivos** (NetFlow, sFlow, BGP, routing) y convertirlos en insights accionables. Su plataforma permite:

- **Visibilidad de tráfico en tiempo real** across cloud, hybrid y on-prem
- **Detección de anomalías** con machine learning
- **Troubleshooting de performance** a nivel de red
- **Peering y capacity planning** con datos reales

## La estrategia de Infoblox

Según el anuncio, la idea es integrar Kentik a la plataforma existente de Infoblox para crear una oferta unificada:

> "With the close of the acquisition, Infoblox advances its broader platform strategy, adding Kentik's real-time network intelligence and observability to its trusted foundation of critical network services, asset visibility and preemptive security."

En criollo: Infoblox maneja los **servicios críticos de red** (DNS, DHCP, IPAM) y ahora también va a manejar la **observabilidad de lo que pasa por esa red**. Es un movimiento lógico de "horizontal integration" en el stack de networking.

## Operaciones agenticas

El comunicado menciona explícitamente **"agentic operations"** como parte del valor. Esto sugiere que Infoblox no solo quiere mostrar dashboards, sino que quiere que **agentes de IA puedan usar los datos de Kentik** para detectar, diagnosticar y eventualmente auto-remediar problemas de red.

Esto encaja con la tendencia general en observabilidad: pasar de **"alertar a un humano"** a **"el agente detecta, diagnostica y propone/arregla"**.

## ¿Por qué importa?

La observabilidad de red es históricamente un espacio **fragmentado**. Cada tool hace una cosa bien: Datadog monitorea infra, Grafana visualiza métricas, Splunk come logs. Pero la **red** —el plano que conecta todo— suele ser un punto ciego.

Si Infoblox logra integrar bien a Kentik, podría ofrecer algo bastante único: **desdel el DNS hasta el flow de tráfico en una sola plataforma**. Para equipos de platform/SRE que manejan redes complejas, eso es valor real.

La pregunta es si la integración será fluida o si terminará siendo otra adquisición donde el producto absorbido pierde su identidad y su momentum.
