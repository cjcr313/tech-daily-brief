---
title: "Jalapeño, el primer chip de inferencia de OpenAI, ya tiene números: hasta 1,9x más trabajo por watt"
author: Carlos
pubDatetime: 2026-08-25T16:00:00Z
slug: openai-jalapeno-chip-inferencia-primeros-resultados
featured: false
draft: false
tags:
  - IA
  - Infraestructura
description: "OpenAI publicó los primeros resultados medidos de Jalapeño, su chip de inferencia propio: 1,5–1,9x más throughput por watt y hasta 3,6x menos latencia frente a los sistemas comerciales."
---

![Ilustración editorial de un chip de silicio futurista con el símbolo de un jalapeño, irradiando líneas de datos en tonos verdes y morados, estilo tech editorial](../../assets/images/2026-08-25-openai-jalapeno-chip-inferencia-primeros-resultados.svg)

OpenAI dejó de prometer y empezó a mostrar resultados: publicó los **primeros números medidos de Jalapeño**, su primer chip de inferencia diseñado in-house. Y los datos son serios: el silicio propio entrega **1,5 a 1,9 veces más trabajo de IA por watt** a peak throughput y **1,7 a 3,6 veces menos latencia** end-to-end que los sistemas comerciales con los que lo comparó.

## Los números, en frío

Las métricas salen de **InferenceX**, el benchmark público de SemiAnalysis que mide el proceso completo de servir una request de IA. OpenAI probó Jalapeño contra los sistemas comerciales líderes a lo largo de todo el rango operativo, desde serving de alto throughput hasta uso interactivo de baja latencia.

Resultados clave:

- **1,5–1,9x** más trabajo de IA por watt a peak throughput
- **1,7–3,6x** menos latencia end-to-end
- **2,1–4,1x** más rendimiento en cargas altamente interactivas (donde viven los agentes)
- Sobre **Kimi K2.5 1T** (el modelo público más grande probado): ~1,5x más peak performance por watt y **3,4x menos latencia**

Un detalle que le importa a cualquier SRE: el chip está **rateado a 700W**, pero en las cargas medidas se mantuvo en **550W o menos**. O sea, el margen térmico y energético existe de verdad, no es marketing de datasheet.

## ¿Y por qué funciona en modelos que no son de OpenAI?

Lo interesante es que Jalapeño no está tuneado solo para GPT: rindió fuerte en **GPT-OSS 120B, DeepSeek R1 670B y Kimi K2.5 1T**, tres familias distintas. Eso confirma que la arquitectura es generalista para servir LLMs modernos, no un acelerador de un solo modelo.

Y hay un loop curioso que OpenAI confiesa: sus propios modelos ayudaron a diseñar y dar bring-up al chip, y los más nuevos están acelerando cómo lo optimizan y programan. IA construyendo el hardware que la sirve.

## El contexto: full-stack o nada

Jalapeño no es un proyecto aislado. OpenAI lo enmarca en una estrategia de **pila completa**: diseñar modelos, productos, software de serving, chips, memoria, red y sistemas juntos, usando lo aprendido en workloads reales para mejorar cada capa.

Eso se traduce en un portafolio de cómputo que hoy incluye a **Microsoft y NVIDIA como base**, más **AWS, AMD, Broadcom, Cerebras, CoreWeave, Oracle, SB Energy y SoftBank**. La lógica es simple: mantener leverage donde la integración apretada mejora el sistema, y asociarse donde el ecosistema avanza más rápido.

Para el mundo de infra, el mensaje es claro: **la guerra del silicio de inferencia se está poniendo buena**, y OpenAI pasó de ser un cliente que llena datacenters ajenos a tener su propia ruta de primera parte con resultados medidos. Generaciones futuras del chip ya están en marcha, así que esto recién empieza.

Fuentes: OpenAI (jalapeno-first-results, the-full-stack-behind-abundant-intelligence).
