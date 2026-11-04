---
title: "ZStack libera GPUWorks: la plataforma open source de 40MB que administra mil servidores GPU sin Kubernetes"
author: Carlos
pubDatetime: 2026-11-04T13:10:00Z
slug: zstack-gpuworks-open-source-plataforma-gpu
featured: false
draft: false
tags:
  - Infraestructura
  - IA
description: "ZStack liberó GPUWorks bajo Apache 2.0: una plataforma de inferencia empresarial de ~40MB que instala en 60 segundos, sin clúster Kubernetes previo, y que en tests manejó 1.003 servidores GPU con 9 cores de CPU y 1,6 GB de RAM."
---

![Ilustración editorial tech de una pequeña caja luminosa compacta controlando una sala gigante de racks de servidores GPU interconectados con líneas de luz, minimalismo tecnológico, paleta violeta y cian, estilo ilustración tecnológica profesional, sin texto](../../assets/images/2026-11-04-zstack-gpuworks-open-source-plataforma-gpu.jpg)

¿Cuánto software necesitas para administrar mil servidores GPU? La respuesta de ZStack es provocadora: **~40 megabytes**. La compañía china de infraestructura cloud —más de 5.000 clientes empresariales en 36 países— **liberó hoy GPUWorks, su plataforma de inferencia de IA, como open source bajo Apache License 2.0**.

## Los números del pitch

En tests sobre hardware físico, un solo GPUWorks Server administró **1.003 servidores GPU**, levantó más de **500 réplicas de inferencia en 4 minutos** entregando 69.000 tokens por segundo... consumiendo apenas **9 cores de CPU y 1,6 GB de RAM** para el servidor de gestión. Instala con un solo comando, en unos 60 segundos, y **no requiere un clúster Kubernetes preexistente** — algo casi herético en 2026, pero que baja drásticamente la barrera de entrada para equipos con flotas GPU chicas o medianas.

## Lo interesante para quien opera inferencia

- **Compatibilidad heterogénea explícita**: casi 400 modelos y más de 1.000 configuraciones de lanzamiento que empaquetan imagen de contenedor, motor de inferencia, pesos y parámetros en perfiles reutilizables, con estimación de VRAM incluida. Soporta NVIDIA, AMD y chips chinos (Ascend, T-Head PPU, Hygon DCU).
- **Scheduling por tiempo compartido**: múltiples modelos grandes comparten un mismo pool de GPUs bajo demanda, con prioridades, liberación de recursos en idle y rotación programada. Nada de reservar flotas dedicadas por modelo.
- **Wake-up ~200× más rápido que un cold start**: los pesos se mantienen residentes en memoria del host; en 8× H20, donde un cold start desde NFS toma 16-17 minutos, el despertar tarda ~4 segundos (DeepSeek-V4.1-Flash volvió en 3,6 segundos en sus tests).
- **Escala unificada**: de una flota chica a 1.000+ nodos en un solo plano de gestión que abarca bare metal, VMs y contenedores, on-premise y nubes públicas, con disgregación prefill-decode para escalar justo el cuello de botella.

La jugada de open source también es estratégica: ZStack invita a la comunidad a contribuir plantillas de inferencia y adaptaciones de chips ("Make Any GPU Work"). El repositorio está en [github.com/flitai-io/gpuworks](https://github.com/flitai-io/gpuworks/).

En un mercado donde Kubernetes + operadores varios es el camino por defecto para servir modelos, tener una alternativa ligera, auditabile y Apache 2.0 es una opción bienvenida — sobre todo para equipos que quieren empezar rápido sin montar la infraestructura completa primero.

**Fuentes:** [GlobeNewswire](https://www.globenewswire.com/news-release/2026/11/04/3395130/0/en/a-40mb-platform-to-manage-a-thousand-gpu-servers-gpuworks-is-now-open-source.html) · [ZStack](https://www.zstack-cloud.com/)
