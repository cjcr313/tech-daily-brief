---
title: "Oracle Exadata Exascale en AWS: 95% menos costo con pooled-storage"
author: Carlos
pubDatetime: 2026-08-13T22:00:00Z
slug: oracle-exadata-exascale-aws-pooled-storage-95-porciento
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "Oracle lanzó Exadata Exascale Infrastructure en 22 regiones de AWS con storage pooled. El costo de entrada bajó de €10.000 a €330 al mes."
---

Hace un año, correr Oracle Exadata en la nube era básicamente un lujo para empresas grandes: hardware dedicado, costos altísimos, y si eras mediana empresa, estabas fuera del juego. Hoy eso cambió drásticamente.

Oracle anunció la disponibilidad general de **Exadata Database Service on Exascale Infrastructure** dentro de su plataforma **Oracle AI Database@AWS**, y ya está activo en **22 regiones de AWS** (Arriba desde las 2 regiones del lanzamiento original en julio 2025).

## ¿Qué cambió? Pooled-storage

La clave de todo es una palabra: **decoupling**. Exascale separa el storage del compute de forma agresiva:

- Los storage servers forman un **pool compartido** entre todos los tenants
- Los requests de datos van directo via **RDMA** (para OLTP) o **Smart Scan** (para analytics)
- Incluso un cliente con pocos cores de compute tiene acceso a **cientos de CPUs de storage** cuando corre queries
- Latencia I/O: **17 microsegundos** (~50x más rápido que servicios equivalentes de AWS/Azure)

## Los números del ahorro

| Modelo | Costo mensual aproximado |
|--------|------------------------|
| Exadata dedicado (antes) | ~€10.000 |
| Exascale pooled (ahora) | ~€330 |
| **Ahorro** | **~95%** |

Eso es un floor de costo que **abre Exadata a empresas mid-market** que antes tenían solo dos opciones malas: pagar por hardware dedicado que no usaban, o migrar a una DB del hyperscaler que no replicaba las features de Exadata.

## Thin cloning con Redirect-On-Write

Otra mejora interesante: Exascale usa **Redirect-On-Write** en vez de Copy-On-Write para clones. Esto significa:

- Clonar una DB de 10TB de producción para desarrollo **cuesta casi cero** en storage inicial
- Solo se escriben datos nuevos cuando el clone diverge del original
- A escala empresarial (decenas de entornos dev/test), el ahorro es brutal

## OCI dentro de AWS

La arquitectura funciona con **OCI Child Sites dentro de los propios data centers de AWS**. Oracle corre su infra dentro de AWS con networking de alta performance (EC2 placement groups), logrando latencia app-to-DB de **165 microsegundos**.

## Estrategia multi-hyperscaler

Esto no es solo AWS. Oracle tiene su estrategia de tres hyperscalers:
- **Oracle AI Database@AWS** (22 regiones)
- **Oracle Database@Azure**
- **Oracle Database@Google Cloud**

La idea es clara: llevar Exadata adonde ya están los clientes, sin que tengan que migrar a OCI.

> 💡 Para los equipos de infra: si tienen workloads Oracle y estaban considerando salir de Exadata por costo, Exascale merece una evaluación seria. El modelo pooled cambia las reglas del juego.
