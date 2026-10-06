---
title: "AMD ROCm 10.1: la apuesta ya no es el compute puro, es el cuello de botella del movimiento de datos"
author: Carlos
pubDatetime: 2026-10-06T09:05:00Z
slug: amd-rocm-101-infinity-storage
featured: false
draft: false
tags:
  - Infraestructura
  - DevOps
description: "AMD lanzó ROCm 10.1 con AMD Infinity Storage y hipFILE mejorado (backend async fast-path, batch I/O, estadísticas multi-tier), hipThreads para acelerar código threaded sin reescribirlo, LLVM 24, y amd-smi reemplazando definitivamente a rocmsmi con visibilidad de pods de Kubernetes."
---

![Ilustración editorial conceptual de un stack de software de GPU: autopistas de datos luminosas fluyendo entre chips y unidades de almacenamiento estilizadas sobre una placa base, con un medidor de flujo brillante en el centro, paleta roja y gris oscura, estilo ilustración editorial profesional sin texto](../../assets/images/2026-10-06-amd-rocm-101-infinity-storage.jpg)

AMD acaba de liberar **ROCm 10.1**, manteniendo el ciclo de release de seis semanas que prometió con ROCm 10.0 (fines de agosto). Y aunque suena a version patch, la tesis de fondo es mas interesante: **AMD cree que el próximo cuello de botella del entrenamiento de IA no es el compute, sino mover los datos** — y esta versión apunta directo ahí.

## Lo que trae ROCm 10.1

- **AMD Infinity Storage con hipFILE mejorado**: nuevo backend *async fast-path*, una API de **batch I/O**, y estadísticas de I/O multi-tier. La idea: que las GPUs Instinct no se queden esperando datos mientras el storage se transforma en el nuevo scapegoat del rendimiento.
- **hipThreads**: la joya para desarrolladores con código legacy. Permite **acelerar código CPU-threaded existente en la GPU de forma incremental**, sin reescribir todo a CUDA/ROCm. Para equipos con paralelismo en CPU que no justifica una migración completa, esto baja brutalmente la barrera.
- **Asignaciones de memoria host NUMA-aware con HIP**: menos sorpresas de latencia en máquinas multi-socket.
- **LLVM 24** como stack de compiladores, rebuilds más rápidas, mejoras continuas de **WSL2**, y **kernel replay en beta** dentro de ROCprofiler (los que perfilan kernels van a celebrar).
- Nuevo **ROCm CLI** y "AMD skills" para flujos agénticos.

## El detalle que le importa al equipo de DevOps

`rocm-smi` quedó **oficialmente deprecado** (en realidad ya lo estaba). Su sucesor, **amd-smi**, ahora cubre GPUs, CPUs y APUs en Linux y Windows, bare-metal y virtualizado, con **bindings para Python, Rust y Go**. Y lo mejor: puede identificar procesos GPU corriendo dentro de **containerd, CRI-O, Podman, LXC y LXD, incluyendo los pod IDs completos de Kubernetes**. O sea, por fin puedes mapear un proceso de GPU al contenedor exacto que lo ejecuta. Para quien opera clústeres con GPUs AMD, esto es observabilidad que se extrañaba.

Además, AMD sacó un **driver Adrenalin dedicado para ROCm 10.1 en Windows** para las Radeon RX 9000 y RX 7000 — señal de que sigue empujando que las GPUs de consumo sean plataforma válida para desarrollo de IA.

## El contexto

ROCm era la promesa eterna de AMD y hoy tiene cadencia, features y una narrativa clara (data movement). Con el MI355X ya ganándole al Blackwell Ultra en generación de video según benchmarks recientes, y la compra de World Labs todavía fresca, el stack de software era la asignatura pendiente. ROCm 10.1 no gana la guerra contra CUDA, pero seis releases al año con this nivel de detalle indican que AMD entendió que el moat de NVIDIA ya no es solo el hardware: es el ecosistema.

**Fuentes:** Phoronix, ROCm blog oficial, release notes de AMD.
