---
title: "NVIDIA y Microsoft amplían la colaboración full-stack: Vera Rubin NVL72 ya corre en Azure en preview y Nemotron 3.5 llega a Foundry"
author: Carlos
pubDatetime: 2026-11-20T21:00:00Z
slug: nvidia-microsoft-vera-rubin-azure-nemotron-foundry
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "En pleno Microsoft Ignite, las VMs con los racks Vera Rubin NVL72 entraron a Azure en preview ampliada, la familia Nemotron 3.5 se despliega en Foundry Managed Compute, y confidencial computing se extiende a bare metal a escala de rack."
---

![Ilustración editorial de racks de servidores GPU futuristas iluminados dentro de un data center moderno](../../assets/images/2026-11-20-nvidia-microsoft-vera-rubin-azure-nemotron-foundry.jpg)

Mientras Anthropic hacía historia en Wall Street, Microsoft y NVIDIA aprovecharon Ignite para tirar un anuncio de infraestructura que va a marcar el 2027 de cualquiera que entrene o sirva modelos en la nube: **los sistemas Vera Rubin NVL72 ya están corriendo en los data centers de Azure en preview ampliada**, pensados para razonamiento pesado, aplicaciones agénticas y entrenamiento/inferencia a gran escala.

## Vera Rubin NVL72 en Azure: la próxima generación ya está adentro

No es un roadmap slide, es hardware operativo. La preview de Azure sobre Vera Rubin se construye sobre el codesign entre ambas compañías, con resultados recientes de MLPerf como carta de presentación:

- En **MLPerf Training v6.1**, Azure escaló a **10.240 GPUs** con sistemas GB200 NVL72 sobre DeepSeek-V3, la mayor escala de la ronda.
- En **MLPerf Inference v6.1**, los GB300 NVL72 de Azure lideraron las presentaciones cloud en throughput interactivo de DeepSeek-R1 por **más de 10%** según Signal65.

Además, Microsoft está usando tecnología NVIDIA para acelerar sus propios servicios: **NVIDIA Dynamo** en el stack de inferencia y GPUs **RTX PRO 6000 Blackwell** para los modelos de búsqueda de Bing.

## Confidencial computing a escala de rack y eficiencia energética

El anuncio más interesante para quien opera cargas reguladas: la colaboración extenderá **confidential computing a infraestructura bare metal y rack-scale**, con attestation de NVIDIA para verificar el entorno antes de liberar modelos, datos o claves sensibles. A medida que las cargas de IA abarcan más aceleradores interconectados, la idea es proteger toda la "AI factory", no solo VMs individuales.

En eficiencia, suman trabajo conjunto con **NVIDIA MaxLPS** para exprimir más rendimiento por watt disponible, que es la moneda real de los data centers en 2026.

## Nemotron 3.5 en Foundry: customización de modelos abiertos como servicio

En la capa de plataforma, la familia **NVIDIA Nemotron 3.5** llega a Microsoft Foundry con roles bien diferenciados:

- **Nemotron 3.5 Super** para agentes de larga duración (coding, research, workflows de negocio).
- **Lightning** para respuestas rápidas y uso de herramientas.
- **Bolt** para razonamiento de alto throughput y baja latencia.
- Complementos: **Embed y Rerank** (búsqueda), **Parse** (extracción estructurada de documentos) y **Content Safety** (detección de contenido dañino).

El combo operativo: **Programmed Training serverless** para controlar workflows de post-entrenamiento sin gestionar infraestructura, y **Foundry Managed Compute** ahora soporta desplegar pesos custom, cerrando el ciclo customización → despliegue.

El caso citado es elocuente: **EY adaptó Nemotron para clasificar registros de compras corporativas, mejorando la precisión en 55% y bajando el costo 15x** frente a modelos frontier propietarios. Ese es el pitch completo de los modelos abiertos en una frase.

**Por qué importa:** la dupla Microsoft-NVIDIA está empacando la pila completa (racks, inferencia, post-entrenamiento, modelos abiertos y gobernanza) como un servicio administrado. Para equipos platform, la pregunta ya no es si armar infra de IA propia, sino qué capa de esa pila conviene seguir operando a mano.

**Fuentes:** [HPCwire / NVIDIA Newsroom](https://www.hpcwire.com/off-the-wire/nvidia-and-microsoft-expand-azures-vera-rubin-preview-and-foundrys-nemotron-lineup/) · [Microsoft Ignite 2026 Book of News](https://news.microsoft.com/events/ignite/2026/book-of-news/)
