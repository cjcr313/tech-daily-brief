---
title: "Google Cloud lanza Z4D: instancias storage-optimized con hasta 84 TB de SSD local"
author: Carlos
pubDatetime: 2026-09-29T03:00:00Z
slug: google-cloud-z4d-storage-optimized
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - IA
description: "La familia Z4D llega a GA en Compute Engine con VMs y bare-metal, hasta 84.000 GiB de Local SSD y 40% más rendimiento que Z3."
---

![Ilustración editorial de racks de servidores con unidades SSD de alta densidad y líneas de datos fluyendo a gran velocidad](../../assets/images/2026-09-29-google-cloud-z4d-storage-optimized.jpg)

Google Cloud acaba de anunciar la disponibilidad general de su nueva familia **Z4D storage-optimized** en Compute Engine, en formato VM y bare-metal. Está pensada para cargas IO-intensivas y críticas: SQL, NoSQL, KVrocks, bases vectoriales, analítica y búsqueda.

## Los números

- Hasta **84.000 GiB de Local SSD (LSSD)**.
- Hasta **384 vCPUs** y **3.072 GiB de memoria**.
- **40% más rendimiento** que la generación anterior Z3.
- Basada en **AMD EPYC de 5ª gen (Turin)** + Titanium SSDs, que descargan el procesamiento de storage del CPU.

## Dos sabores de VM

- **Z4D-highmem-standardlssd**: 219 GiB de LSSD por vCPU, optimizada para OLAP y SQL (MySQL, Postgres).
- **Z4D-highmem-highlssd**: 438 GiB de LSSD por vCPU, para bases distribuidas, streaming y filesystems paralelos grandes.

## Bare metal con un detalle relevante

El bare-metal de Z4D será la **primera instancia AMD en soportar Nutanix Cloud Clusters (NC2)**, la plataforma híbrida multi-cloud. Y un dato para quienes siguen la ola agentic: ese bare-metal entrega la capacidad LSSD y la baja latencia que piden las arquitecturas de **microVMs** para agentes —miles de sandboxes aislados por host con rendimiento nativo.
