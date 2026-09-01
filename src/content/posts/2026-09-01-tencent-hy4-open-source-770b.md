---
title: "Tencent libera Hy4: su modelo de 770 mil millones de parámetros y 1M de tokens de contexto"
author: Carlos
pubDatetime: 2026-09-01T02:00:00Z
slug: tencent-hy4-open-source-770b
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "Tencent open-source Hy4 preview: 770B parámetros totales, 49B activos, contexto de más de 1 millón de tokens y licencia Apache 2.0."
---

![Ilustración editorial de un modelo de lenguaje abierto de gran escala con arquitectura Mixture of Experts](../../assets/images/2026-09-01-tencent-hy4-open-source-770b.jpg)

La carrera de los modelos chinos abiertos no afloja. Después de GLM-5.3 de Z.ai y el Qwen3.8 de Alibaba, ahora es **Tencent** la que pone sobre la mesa a **Hy4 preview**, un modelo de próxima generación que libera en open source con números de buque insignia: **770 mil millones de parámetros totales, 49 mil millones activos** y una ventana de contexto que supera el **millón de tokens**.

La jugada no es solo de marketing técnico. Hy4 está pensado para tareas de productividad reales —coding, trabajo de oficina e investigación científica— y Tencent lo dejó accesible por varias vías: como modelo abierto (con licencia **Apache 2.0**), y globalmente a través de **WorkBuddy, CodeBuddy, Yuanbao e ima**, además de API vía Tencent Cloud TokenHub y OpenRouter.

### Qué trae de nuevo

Hy4 preview creció en tres frentes respecto a Hy3: tamaño del modelo, longitud de contexto y volumen de datos. El salto en pre-entrenamiento y post-entrenamiento lo deja, según Tencent, en la primera línea de los modelos abiertos.

En una evaluación interna a ciegas con 163 expertos y 203 tareas de ingeniería, Hy4 sacó un promedio de **2,99 sobre 4,00**, quedando apenas por delante de GLM-5.3 (2,92) y de Kimi K3 (2,94). Ojo: es un benchmark propio, no un leaderboard público, así que conviene tomarlo con pinzas.

Lo más llamativo técnicamente es un **bucle de auto-mejora recursiva** que, según reveló Tencent, le permitió subir su propio throughput de inferencia en un **31,8%** sin intervención externa. El modelo fue entrenado con datos de alta calidad co-creados con expertos internos en software, gaming, finanzas y seguridad.

### El contexto del momento

Hy4 llega justo cuando el pricing de los modelos frontier chinos está en caída libre —DeepSeek, Alibaba y ahora Tencent compitiendo por precio— y con un detalle comercial que marca la pauta: **gratis durante dos semanas en WorkBuddy y CodeBuddy**, mientras que el acceso libre a Hy3 se extendió hasta el 30 de septiembre.

Para los que andan en la movida de self-hosting y agentes, un modelo de 49B activos (MoE) con contexto de 1M de tokens y pesos abiertos es un candidato serio para tareas largas de código e investigación. Eso sí: la API vía Tencent Cloud queda sujeta a la regulación china, así que el camino "limpio" para muchos será correr los pesos localmente o vía OpenRouter.
