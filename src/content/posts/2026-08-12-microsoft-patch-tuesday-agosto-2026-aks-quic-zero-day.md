---
title: "Microsoft Patch Tuesday Agosto 2026: 415 vulnerabilidades, un zero-day explotado y una CVSS 9.4 en Azure Kubernetes Service"
author: Carlos
pubDatetime: 2026-08-12T16:00:00Z
slug: microsoft-patch-tuesday-agosto-2026-aks-quic-zero-day
featured: false
draft: false
tags:
  - Seguridad
  - Kubernetes
  - Cloud
description: "Microsoft parcheó 415 vulnerabilidades este mes, incluyendo un zero-day explotado en WinSock, una CVSS 9.8 en QUIC y una escalada crítica de privilegios en AKS."
---

Microsoft soltó su Patch Tuesday de agosto y los números no decepcionan: **415 vulnerabilidades parcheadas**, 62 de ellas Críticas. Pero el detalle que más duele es que incluye **un zero-day ya explotado en producción** y **una vulnerabilidad CVSS 9.4 en Azure Kubernetes Service**.

## Los números del mes

- **415 vulnerabilidades** totales
- **62 Críticas** y **349 de severidad variada**
- **1 zero-day explotado** activamente en el wild
- **3 zero-days divulgados** públicamente (sin explotación conocida)
- Distribución: Elevation of Privilege lidera con 174 parches (42%), seguido de RCE con 109 (26%)

## Lo más urgente para equipos de infraestructura

### CVE-2026-50516: Azure Kubernetes Service (CVSS 9.4) 🔴

La más dolorosa para equipos cloud-native. Una vulnerabilidad de **escalada de privilegios** en AKS por falta de autenticación en una función crítica. Un atacante no autenticado puede elevar privilegios sobre la red.

Si usas AKS, esto es parchear YA. Sin excusas.

### CVE-2026-68820: Windows Ancillary Function Driver para WinSock (CVSS 7.0) — EX PLO TA DO 🚨

Un use-after-free en el driver de WinSock que ya está siendo explotado en el wild. Un atacante local con privilegios bajos puede ganar SYSTEM mediante una race condition. Requiere acceso local autenticado, pero ya hay activos aprovechándola.

### CVE-2026-62815: Microsoft QUIC RCE (CVSS 9.8) 🔴

MsQuic —la implementación open source del protocolo QUIC que sustenta HTTP/3 en todo el stack de Microsoft— tiene un use-after-free que permite **ejecución remota de código sin autenticación ni interacción del usuario**. Un paquete specially crafted enviado por la red y listo.

Esto afecta a **cualquier servicio Microsoft que use HTTP/3**, que hoy son muchos.

### CVE-2026-62893: Windows Deployment Services TFTP Server RCE (CVSS 9.8) 🔴

Otro use-after-free, esta vez en el componente TFTP de WDS. Sin autenticación, sin interacción del usuario. Si tienes WDS expuesto, esto es prioritario.

### CVE-2026-72971: Windows Container Isolation FS Filter Driver (CVSS 5.5)

Una vulnerabilidad de tampering en `unionfs.sys` —el driver que maneja el filesystem isolation de contenedores Windows—. Un atacante local con privilegios bajos puede manipular la integridad del sistema. No afecta confidencialidad ni disponibilidad, pero impacta la integridad del aislamiento de contenedores.

## La moraleja

Este mes, si tienes **AKS en producción o servicios con HTTP/3 expuestos**, el parcheo no puede esperar al ciclo normal. Los 30 días de gracia que algunos equipos se dan no aplican cuando hay zero-days explotados activamente.

Para los equipos que manejan Windows Server con contenedores, la vulnerabilidad de `unionfs.sys` es un recordatorio de que el aislamiento de contenedores en Windows sigue siendo un área joven comparada con Linux, y los findings van a seguir apareciendo.
