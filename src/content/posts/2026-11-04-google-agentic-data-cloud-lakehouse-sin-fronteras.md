---
title: "Google dobla la apuesta por agentes autónomos: Agentic Data Cloud estrena Lakehouse sin fronteras"
author: Carlos
pubDatetime: 2026-11-04T21:10:00Z
slug: google-agentic-data-cloud-lakehouse-sin-fronteras
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Data Analytics
description: "Google Cloud actualizó su Agentic Data Cloud: borderless Lakehouse consulta datos en AWS y Azure sin egress, y Knowledge Catalog ahora se auto-enriquece y baja el consumo de tokens hasta 75%."
---

![Ilustración editorial tech de tres nubes estilizadas conectadas por un lago central de datos luminoso, canalizaciones de luz fluyendo sin fronteras entre ellas, catálogos de conocimiento flotando como nodos brillantes, paleta azul de Google con acentos rojos y verdes, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-11-04-google-agentic-data-cloud-lakehouse-sin-fronteras.jpg)

Google Cloud le metió una segunda palada a su **Agentic Data Cloud**, la arquitectura que presentó en Cloud Next como el "sistema de acción" para agentes de IA, y que reemplaza los pipelines ETL frágiles de la era anterior. La tesis de Sirish Chandrasekaran, VP de product management de Google: los **agentes autónomos, no los humanos, serán pronto los principales consumidores de datos** corporativos — y merecen una infraestructura construida a la medida.

## Borderless Lakehouse: multicloud sin el impuesto del egress

La joya del anuncio es **borderless Lakehouse**, construido sobre Apache Iceberg. La idea central: consultar datos que viven en **AWS o Azure** desde Google Cloud, vía private link, **sin pagar los costos variables de egress** que normalmente matan cualquier caso de negocio multicloud. Los bloques de datos consultados se cachean dentro de Google Cloud para acelerar los queries siguientes — la evolución natural del preview de cross-cloud caching que vimos en septiembre.

Además llega una integración con **AlloyDB** para consultar tablas Iceberg externas con **SQL estándar de PostgreSQL**, sin copiar datos. Eso conecta datos transaccionales en tiempo real con el histórico del lakehouse en una sola consulta.

## Knowledge Catalog con enriquecimiento autodidacta

Quizás lo más interesante para quien opera agentes: **Knowledge Catalog** — el "mapa de significado del negocio" que evita que un agente calcule el revenue neto distinto que finanzas — estrena **self-learning enrichment** en preview. Escanea continuamente datos no estructurados en **Google Workspace, Jira, SharePoint y GitHub**, y los traduce a context sets en Open Knowledge Format para aterrizar los agentes en el conocimiento real de la organización.

Los números de los early adopters no son menores: **agentes 4 veces más precisos en promedio y hasta 75% menos consumo de tokens**. Menos tokens = menos plata quemada por query, algo que cualquier equipo con agentes en producción va a agradecer.

Y para que quede claro cuánto le importa: Knowledge Catalog viene **habilitado por defecto en la app de Gemini** desde hoy. También permite aterrizar agentes en modelos semánticos de BigQuery, Snowflake, SAP, Looker y dbt.

## El punto de fondo

Todo apunta a lo mismo: la multicloud real no se logra moviendo datos, sino **gobernándolos donde viven**. Con Iceberg como estándar de facto y el egress fuera de la ecuación, la excusa del vendor lock-in de datos se está debilitando rápido. Ahora la pregunta es si AWS y Azure responden con lo suyo.

**Fuente:** Google Cloud Blog, SiliconANGLE.
