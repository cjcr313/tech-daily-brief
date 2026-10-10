---
title: "Cloudflare le mete flamegraphs a Workers: profiling de CPU y memoria directo en producción"
author: Carlos
pubDatetime: 2026-10-10T21:10:00Z
slug: cloudflare-workers-profiling-produccion-flamegraphs
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "Workers y Durable Objects ahora soportan profiling on-demand de CPU y memoria con flamegraphs interactivos capturados en producción, sin redeploy. La perla: lo capturado es tráfico real, no un lab."
---

![Panel de observabilidad con flamegraph naranja analizando el rendimiento de código en producción](../../assets/images/2026-10-10-cloudflare-workers-profiling-produccion-flamegraphs.jpg)

Los logs y las métricas agregadas te dicen *cuánto*, pero casi nunca te dicen *dónde*. Para ese "dónde" existe el profiling, y hasta ahora en el mundo serverless era básicamente un dolor: o reproducías el problema en local (ja, buena suerte) o te quedabas mirando dashboards sin saber qué función estaba quemando CPU. Cloudflare cerró ese hueco: **profiling CPU y memoria on-demand para Workers y Durable Objects, capturado directamente en producción**, con flamegraphs interactivos en el dashboard.

## Cómo funciona

Desde la página de **Observability** de un Worker en el dashboard (o vía CLI con el nuevo paquete `cf`), pides un perfil de CPU o memoria de un Worker activo:

```bash
cf workers versions profile latest \
  --worker-id "$WORKER_ID_OR_NAME" \
  --duration-ms 5000 \
  --profile-type cpu > worker-cpu.pprof
```

El resultado llega como flamegraph interactivo — cada rectángulo es una llamada a función y su ancho representa cuánto CPU o memoria está consumiendo. También puedes descargar el archivo `.pprof` para analizarlo con las herramientas de siempre.

Detalles prácticos que importan:

- **El Worker necesita tráfico real** para ser profileado — el profiler captura samples del tráfico vivo, así que conviene elegir una versión con suficiente actividad.
- Puedes elegir **duración de la captura** y perfilar **versiones específicas** del Worker, ideal para comparar un deploy nuevo contra el anterior.
- Si tu Worker está en **TypeScript**, los source maps hacen que el flamegraph muestre tu código original y no el bundle transpilado.
- Aplica igual para **Durable Objects**, que muchas veces son justamente donde se esconden los memory leaks de estado.

## Por qué es buena noticia

El argumento de Cloudflare es simple y correcto: la mejor forma de entender tu aplicación es perfilarla **en producción**, con condiciones reales. Los memory leaks y los cuellos de botella de CPU en serverless eran especialmente difíciles porque no tienes acceso al runtime para attachear un profiler. Ahora el click está a dos minutos de distancia, sin redeploy ni instrumentación extra.

Y hay más en camino: el mismo post adelanta que están trabajando en **continuous profiling** — capturar samples automáticamente para que los eventos raros queden registrados sin que nadie tenga que estar mirando en el momento justo. Ese paso transforma el profiling de herramienta reactiva a fuente de telemetría más.

Para los equipos que ya usan Workers Observability (logs, métricas y traces en un solo lugar), esto completa el trío con la tercera señal que faltaba: el profile. La observabilidad de serverless cada vez se parece más a la de cualquier workload tradicional — solo que sin administrar el agente.

**Fuentes:** [Cloudflare Blog — Introducing on-demand CPU and memory profiling with flamegraphs for Workers and Durable Objects](https://blog.cloudflare.com/workers-on-demand-profiling/)
