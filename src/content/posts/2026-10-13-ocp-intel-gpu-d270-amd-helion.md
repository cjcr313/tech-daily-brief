---
title: "Más allá de Nvidia en la OCP: Intel lanza la GPU D270 con 480GB de memoria y AMD responde con Helion, racks de 32.768 cores Zen 6"
author: Carlos
pubDatetime: 2026-10-13T15:15:00Z
slug: ocp-intel-gpu-d270-amd-helion
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "En la OCP Global Summit, Intel presentó oficialmente su GPU D270 de inferencia con hasta 480GB LPDDR5X, y AMD mostró Helion, un rack abierto con 32.768 cores EPYC Zen 6 y router de tokens para agentes."
---

![Ilustración editorial de dos racks de servidores futuristas compitiendo en una pista de datacenter, uno azul con chips de memoria brillantes y otro naranja con miles de núcleos luminosos, refrigeración líquida visible, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-13-ocp-intel-gpu-d270-amd-helion.jpg)

La OCP Global Summit de este año ya había dado que hablar con los planos abiertos de Nvidia — pero la cumbre no era solo de ellos. **Intel presentó formalmente su GPU D270 de inferencia y AMD mostró Helion, su rack de referencia abierto para la era agéntica**. Dos apuestas distintas por el mismo problema: la inferencia masiva a costo razonable.

## Intel GPU D270: memoria sobre todo

La D270 — antes conocida como **Crescent Island** — es la carta con la que Intel intenta reentrar al mercado de data centers de IA después de dos cancelaciones previas de GPUs. El argumento no es ganar en FLOPS pico, sino en densidad de memoria y precio:

- **Hasta 480GB de LPDDR5X** — brutal para inferencia de modelos grandes con batch alto. La versión propia de Intel trae 160GB; los 480GB llegarán vía partners ODM.
- **1,3 PFLOPS de cómputo matricial FP8** y **1,5 TB/s de ancho de banda de memoria**.
- **256 motores XMX** sobre la arquitectura Xe3P.
- **350W con refrigeración por aire** en formato PCIe 5.0 estándar — o sea, entra en servidores convencionales sin obra hídrica.

El posicionamiento es honesto: por debajo del Blackwell Ultra de Nvidia y del MI455X de AMD en performance pico, pero mucho más barata y densa en memoria. El sampling con clientes ya empezó; disponibilidad amplia recién en **2027**.

## AMD Helion: el rack para la era de los agentes

AMD apuntó a otro ángulo: no todos los workloads agénticos necesitan GPUs carísimas. **Helion** es un diseño de rack abierto construido sobre **OCP ORv4**:

- Hasta **32.768 cores EPYC Zen 6 "Venice"** en un solo rack en configuración solo-CPU — pensado para inferencia de modelos pequeños y enrutamiento masivo.
- Variante all-in-one que suma **Instinct MI350P** para los workloads que sí requieren GPU.
- Un **token router integrado** para enrutar requests entre modelos — la pieza que falta en la mayoría de las arquitecturas agénticas de hoy.
- Refrigeración por aire o líquida, con partners del peso de **Cisco, Dell, HPE, Lenovo, Supermicro, Hon Hai, QCT y Wiwynn**.

Disponibilidad para **noviembre de 2026**, y AMD planea contribuir la especificación completa al OCP.

## La lectura de conjunto

Con Nvidia abriendo Vera Rubin vía MGX 1.2, Intel apostando por memoria barata y AMD empujando racks densos de CPU para agentes, la OCP terminó de confirmar una tendencia: **la era de un solo tipo de acelerador para todo se acabó**. Inferencia de agentes baratos, inferencia de frontier y entrenamiento son tres problemas distintos — y cada fabricante está eligiendo cuál atacar.

Para los que planifican capacidad: diversificar el parque de cómputo dejó de ser una estrategia defensiva y pasó a ser simplemente la arquitectura correcta.
