---
title: "Gimlet Labs levanta US$300M para acelerar la inferencia 'disagregada' de LLMs"
author: Carlos
pubDatetime: 2026-09-05T10:30:00Z
slug: gimlet-labs-300m-inferencia-disagregada
featured: false
draft: false
tags:
  - IA
  - Infraestructura
  - Cloud
description: "Gimlet Labs cierra una Serie B de US$300M a una valorización de US$3 mil millones. Su plataforma descompone LLMs en módulos y los despliega en el chip óptimo para cada carga."
---

![Ilustración editorial de inferencia de IA distribuida entre múltiples chips especializados](../../assets/images/2026-09-05-gimlet-labs-300m-inferencia-disagregada.jpg)

Gimlet Labs, la startup que acelera workloads de inferencia, acaba de levantar **US$300 millones en una Serie B** a una valorización de **US$3 mil millones**. La ronda la lideró Andreessen Horowitz, con Arm Holdings, Samsung Ventures y el fondo M12 de Microsoft entre los que se sumaron. El financiamiento total externo de la compañía llega a US$392 millones.

## La idea: descomponer el LLM y darle a cada módulo su chip

El insight de fondo es que un modelo de lenguaje grande no es un bloque monolítico: está hecho de módulos con requerimientos de hardware muy distintos. Unos mueren por memoria de GPU, otros por compute. Gimlet construyó una plataforma que **parte un LLM en módulos automáticamente y despliega cada uno en la arquitectura de chip que mejor calza** con su carga.

El enfoque más común es la **disagregación PD** (prefill-decode): correr la fase de *prefill* (interpretar el prompt) y la de *decode* (generar la respuesta) en chips separados. Gimlet va más allá y soporta particiones más finas — subdividir el decode en varios chips, o usar un modelo "drafter" liviano que genera un borrador y un LLM frontier que lo refina.

## Cómo lo hace

La plataforma reduce el trabajo de implementar estos flujos de disagregación y **optimiza cada módulo para el chip donde corre**, usando una combinación de **agentes de IA + un compilador propio**. Los agentes exploran distintas formas de adaptar el código del modelo al chip, validan que quede correcto, y el compilador aplica optimizaciones genéricas y específicas por hardware.

Se vende en dos sabores: **serverless** y como **servicio gestionado** que las empresas pueden correr sobre su propia infraestructura. Según la compañía, ya tiene "miles de millones de dólares" en órdenes de clientes.

## Por qué importa

A medida que la frontera se vuelve más cara de servir, **la eficiencia de inferencia pasa a ser la métrica de oro**, no solo los benchmarks del modelo. Gimlet ataca justo ese cuello de botella: sacar más tokens por dólar sin cambiar los modelos. Para equipos de plataforma e infra, es una señal clara de hacia dónde se mueve el dinero en el ecosistema de IA.

**Fuentes:** [SiliconANGLE](https://siliconangle.com/2026/09/04/gimlet-labs-nabs-300m-for-its-disaggregated-inference-platform/), [Blog de Gimlet Labs](https://gimletlabs.ai/blog/announcing-series-b)
