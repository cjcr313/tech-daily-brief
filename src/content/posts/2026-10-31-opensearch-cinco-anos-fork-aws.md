---
title: "OpenSearch, cinco años del fork: la sombra de AWS sigue ahí, pero se está achicando"
author: Carlos
pubDatetime: 2026-10-31T21:05:00Z
slug: opensearch-cinco-anos-fork-aws
featured: false
draft: false
tags:
  - Open Source
  - Cloud
description: "La contribución de AWS cayó de 91% a 72% y los despliegues self-managed crecieron de 37% a 60%, pero un 24% de los no-adoptantes aún desconfía por los lazos históricos con AWS."
---

![Ilustración editorial de un motor de búsqueda open source representado como una lupa gigante sobre nodos de datos distribuidos, en tonos azules y naranjas](../../assets/images/2026-10-31-opensearch-cinco-anos-fork-aws.jpg)

Cinco años después de que AWS forkeara Elasticsearch y Kibana en respuesta al cambio de licencia de Elastic (enero 2021), The New Stack hizo el balance de cómo va OpenSearch como proyecto independiente. La respuesta corta: mejor de lo que muchos esperaban, pero todavía con la sombra alargada de su padre corporativo.

## Los números de la independencia

Datos de la OpenSearch Software Foundation (el proyecto vive en la Linux Foundation desde septiembre de 2024):

- **Contribución de AWS**: cayó de **91%** de la actividad en los repos el primer año a **72%** en 2025–26.
- **Maintainers afiliados a Amazon**: de **95%** en abril 2022 a **71%** hoy en el repo core.
- **Despliegues self-managed en la nube**: crecieron de **37% en 2024 a 60%** según el Open Data Infrastructure Report 2026, mientras el servicio administrado de Amazon subió más tibio (44% → 48%).

Traducción: la comunidad está diversificándose de a poco, y la gente prefiere cada vez más ejecutarlo por su cuenta.

## Pero la desconfianza no se borra con gobernanza

Aquí viene lo incómodo: **24% de los no-adoptantes encuestados** menciona la vendor-neutrality y los lazos históricos con AWS como razón para mantenerse alejados. Y es que AWS sigue con casi tres cuartos de las contribuciones, y aunque solo tiene 4 de 15 asientos con voto en el Technical Steering Committee, un empleado de AWS (Andrew Ross) **acaba de ser reelecto como chair del comité en octubre**.

Bianca Lewis, directora ejecutiva de la fundación, lo defiende así: donarlo a la Linux Foundation fue "un watershed moment", porque "no podían cerrar OpenSearch ni cambiarle la licencia, ya no eran dueños de la aplicación". Y remata con una lectura bien fría del negocio: "AWS no gana dinero con aplicaciones, gana dinero con compute. Operar y hacer crecer OpenSearch a largo plazo nunca estuvo en el plan de AWS".

## La oportunidad: búsqueda para IA

Mientras se resuelve la percepción, el software siguió divergiendo del Elasticsearch original ("es innegable que las primeras versiones eran Elasticsearch con otro nombre", admite Lewis). Hoy OpenSearch se posiciona como infraestructura para apps de IA: **búsqueda vectorial e híbrida**, clave para RAG. La versión **3.9** (septiembre) trajo mejoras específicas para búsqueda y recuperación en aplicaciones con LLMs.

El análisis completo está en [The New Stack](https://thenewstack.io/opensearch-foundation-aws-elasticsearch/). Veredicto: la independencia de un fork gigante no se declara, se demuestra con años de contribuciones diversificadas. OpenSearch va en camino, pero 2027 será el año de la prueba de fuego.
