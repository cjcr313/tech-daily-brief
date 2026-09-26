---
title: "Memorystore for Valkey 9.1: 3x más QPS a latencia de microsegundos"
author: Carlos
pubDatetime: 2026-09-26T09:00:00Z
slug: memorystore-valkey-91-3x-qps
featured: false
draft: false
tags:
  - Infraestructura
  - Bases de Datos
  - Cloud
description: "GA de Valkey 9.1 con arquitectura de colas lock-free, ACL por base de datos y nuevos comandos."
---

![Ilustración editorial de un motor de base de datos en memoria con múltiples hilos de I/O conectados por colas lock-free, procesando miles de operaciones por segundo a velocidad de microsegundos](../../assets/images/2026-09-26-memorystore-valkey-91-3x-qps.jpg)

Google Cloud lanzó la **disponibilidad general de Memorystore for Valkey 9.1**, y la cifra es potente: hasta **3x más QPS a latencia de microsegundos** comparado con Memorystore para Redis Cluster.

## De dónde viene la velocidad

El cuello de botella clásico de Valkey estaba en cómo asignaba sockets a los hilos de I/O: un round-robin estático que obligaba al hilo principal a pollear listas de clientes pendientes. Valkey 9.1 lo reemplaza por una **arquitectura de colas lock-free multi-cola** (SPMC, MPSC y SPSC) que elimina el desperdicio de CPU entre hilos y habilita balanceo dinámico de trabajo.

A eso se suma un motor de escalado en dos fases: un "encendido" cuando la CPU del hilo principal cruza 30%, y luego auto-scaling del número de hilos según el backlog en tiempo real. Núcleos extras solo cuando se necesitan.

## Lo nuevo para developers

- **ACLs por base de datos**: ahora puedes restringir usuarios a bases numéricas específicas (`db=0`, `db=1`), no solo a nivel global de instancia. Pensado para multi-tenancy seguro.
- **CLUSTERSCAN**: escaneo de keys cluster-aware con cursor topología-aware, para no perder keys ni duplicar durante migraciones o failovers.
- **Comandos nuevos**: `HGETDEL` (fetch + delete atómico), `MSETEX` (expiración compartida para varias keys) y flags condicionales `NX`/`XX` en `HSETEX`.

MLB y Target ya salieron a respaldar la jugada para sus picos de tráfico. Y de remate, hay un workflow de migración online desde Redis/Valkey self-managed hacia el servicio gestionado.

**Fuente:** cloud.google.com.
