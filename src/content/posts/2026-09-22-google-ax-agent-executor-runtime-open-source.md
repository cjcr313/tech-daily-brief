---
title: "Google AX se toma Hacker News: el runtime de agentes que decide tu factura de IA"
author: Carlos
pubDatetime: 2026-09-22T09:00:00Z
slug: google-ax-agent-executor-runtime-open-source
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
  - IA
description: "Google AX (Agent Executor), un runtime distribuido open-source para agentes sobre Kubernetes, llegó al #1 de Hacker News con su v0.3.0 y promete matar la factura por cómputo ocioso."
---

![Runtime de agentes distribuido sobre Kubernetes con pods y actores suspendidos](../../assets/images/2026-09-22-google-ax-agent-executor-runtime-open-source.jpg)

Un runtime de procesos le ganó a todos los modelos frontera en Hacker News. Y no fue por magia, sino por un argumento que le llega directo al bolsillo: **la factura de cloud**.

Hablamos de **Google AX (Agent Executor)**, un runtime distribuido open-source (Apache-2.0) para ejecutar, suspender, reanudar y auditar agentes de IA de larga duración sobre Kubernetes. El proyecto existe desde marzo (el repo `github.com/google/ax` nació el 30 de marzo de 2026) y Google lo anunció en preview el 20 de mayo en su blog de Cloud, firmado por Jaana Dogan y Ethan Bao. Lo que cambió esta semana fue la visibilidad: el sitio `agentexecutor.io` salió a la luz y la comunidad se volcó.

El 21 de septiembre el post ["AX – Google's Open Agentic Orchestrator"](https://news.ycombinator.com/item?id=49780797) escaló hasta el **#1 de Hacker News con 545 puntos y 245 comentarios**.

## El problema que ataca AX

La economía de los agentes está rota: un agente pasa **entre el 90% y el 95% de su tiempo de vida ocioso**, esperando respuestas del modelo, llamadas a herramientas externas o revisiones humanas. Si le metes un contenedor dedicado a cada agente, pagas cómputo por estar sentado sin hacer nada.

AX lo resuelve con **ejecución durable**: multiplexa cientos de "actores" con estado sobre un puñado de pods worker y guarda el estado en un event log append-only. ¿Resultado? Un restart de pod ya no destruye una corrida de varias horas, y no te cobran por el tiempo muerto. En sus benchmarks internos hablan de **250 actores corriendo sobre solo 8 pods**.

## Las cinco capacidades de producción

El pitch de AX se resume en cinco capacidades que cubren los modos de falla clásicos de los agentes con estado:

- **Ejecución durable**: el agente se suspende y reanuda donde quedó, sin perder el hilo.
- **Aislamiento seguro**: cada workload corre sandboxeado.
- **Consistencia de sesión**: arquitectura single-writer para evitar corrupción de estado.
- **Recuperación de conexión**: sobrevive caídas sin reiniciar todo desde cero.
- **Branching de trayectoria**: checkpoint de la ruta de decisiones del agente y fork sin perder contexto.

Todo se declara con YAML: un `Workspace` (repo git + branch + toolchain) y un `Task` que corre comandos dentro de ese workspace. Comandos como `ax apply -f task.yaml`, `ax watch task test` o `ax resume task test` hacen el resto.

## Estado y qué viene

La v0.3.0 recién salida partió el runtime en **tres servicios** y movió el estado de las tareas a **Redis Streams**. Eso sí, es material en preview: el propio README avisa que vienen cambios de API y que los PRs externos están en pausa mientras estabilizan el motor.

El punto de fondo es la dinámica de hyperscaler: Google libera el runtime y compite por los workloads de agentes, mientras AWS (con Strands Harness) y Cloudflare (con su ADLC) empujan sus propios discos en la misma carrera por ser la capa de ejecución de los agentes. El "cómo corres agentes en producción" dejó de ser un detalle de implementación y pasó a ser la pelea del año.
