---
title: "Microsoft contraataca con Maia 300: su chip propio de inferencia apunta a más de un millón de unidades y 40% más tokens por megavatio"
author: Carlos
pubDatetime: 2026-10-13T15:15:00Z
slug: microsoft-maia-300-inferencia-azure
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - IA
description: "Microsoft presentó la tercera generación de su acelerador Maia: 96 chips por rack, 288GB de HBM4 por acelerador y despliegues multigigavatio desde 2027. La era del silicio propio para inferencia ya no es un experimento."
---

![Ilustración editorial de un rack de data center con aceleradores de IA y refrigeración líquida, luces turquesa y flujos de datos dorados, estilo tech editorial](../../assets/images/placeholder.jpg)

Microsoft dejó la pieza más importante de su estrategia de silicio propio sobre la mesa: **Maia 300**, la tercera generación de su acelerador de IA, que desde 2027 se convertirá en el **sistema principal de inferencia** para sus productos y servicios. Según Reuters, el plan es desplegar **potencialmente más de un millón de chips** durante 2027, escalando la infraestructura Maia a niveles multigigavatio. La apuesta es directa: menos dependencia de Nvidia y AMD, y más control sobre el costo de servir Copilot, Foundry y compañía.

## Los números que importan

- **40% más tokens por megavatio** que la infraestructura basada en GPUs líder del mercado. En un mundo donde el cuello de botella ya no es el chip sino la energía, esta es la métrica que define la guerra.
- **8 stacks de HBM4 por acelerador**: 288 GB de capacidad y 18 TB/s de ancho de banda pico — 2,5 veces el ancho de banda y 33% más memoria que Maia 200.
- **Arquitectura chiplet**: los chiplets de cómputo usan el proceso **N2P de TSMC**, mientras el resto de componentes usa procesos elegidos por costo/rendimiento. Así dedican más silicio a computar sin pagar nodo avanzado en todo el die.
- **Rack completo: 96 aceleradores en 167 kW**, con 27,6 TB de memoria de banda alta y 1,7 PB/s de ancho de banda agregado. Hasta **7 veces el throughput de tokens** de un rack Maia 200 y más de 2,5 veces el rendimiento por watt.

## Diseñado para razonamiento largo y agentes

Maia 300 apunta a workloads de inferencia intensivos en memoria: razonamiento de contexto largo y tareas multi-paso de agentes. El diseño acerca los datos a los componentes que los usan (menos energía moviendo información entre memoria y procesador) y los formatos de baja precisión reducen requisitos de memoria, permitiendo más inferencia concurrente dentro del mismo límite de potencia.

La densidad también dio un salto: 24 bandejas con 4 aceleradores cada una — **el doble de densidad que Maia 200**, sin bandejas host separadas — y refrigeración líquida que saca **más del 80% de la carga térmica** del rack, con opción de conectar agua de facilidad directamente o usar heat exchanger en data centers aire-acondicionados.

## El contexto: Maia 200 ya trabaja

Esto no es un render de PowerPoint. **Maia 200 ya corre workloads de producción** — incluido Microsoft Copilot — en Estados Unidos, Europa y Australia, entregando hasta 1,7 veces más tokens por watt que la infraestructura GPU comparada. Para fin de 2026 llegará también a **GitHub Copilot y Microsoft Foundry**. Hoy soporta modelos de OpenAI, los MAI propios de Microsoft y varias familias open source.

El telón de fondo financiero: Microsoft proyecta **~US$175 mil millones de capex para 2026** (con US$41 mil millones solo en el último trimestre reportado, dos tercios en activos de vida corta como CPUs y GPUs), y el gross margin de Microsoft Cloud cayó a 65% en parte por esta inversión. Los chips propios son la palanca para revertir esa ecuación: según Reuters, Microsoft negocia con TSMC más de 300.000 unidades para la ventana de producción 2027.

## La lectura de Ping Diario

Entre el Maia 300 de Microsoft, la GPU D270 de Intel y los racks Helion de AMD que vimos en la OCP Global Summit, y Amazon persiguiendo a Decart por la portabilidad entre aceleradores, el mensaje de la semana es uno solo: **la era de comprarle todo el stack a Nvidia está llegando a su fin**. Los hyperscalers ya no compiten solo por quién tiene más GPUs, sino por quién extrae más tokens por megavatio — y eso se decide en el silicio propio.

**Fuentes:** Microsoft News, Reuters, Cloud Computing News, Dataconomy.
