---
title: "AWS le pide a sus propios ingenieros apagar servidores: la demanda IA los está ahogando"
author: Carlos
pubDatetime: 2026-08-09T10:00:00Z
slug: aws-pide-ingenieros-apagar-servidores
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - DevOps
description: "AWS pidió a sus ingenieros internos apagar instancias EC2 ociosas para liberar capacidad. ~65% de instancias corren bajo 20% de CPU. El hambre de IA no tiene freno."
---

![AWS engineers free up servers](../../assets/images/2026-08-09-aws-pide-ingenieros-apagar-servidores.jpg)

Cuando el cloud más grande del mundo le pide a **sus propios ingenieros** que apaguen servidores ociosos para liberar capacidad, sabes que la situación es seria. Según reportó *The Information*, AWS emitió una directiva interna pidiendo a sus equipos de ingeniería **cerrar instancias EC2 que ya no están usando** y reducir el consumo interno de compute.

## Los números son brutales

- Aproximadamente **65% de las instancias EC2** medidas en un periodo de 30 días tienen una utilización de CPU **inferior al 20%**
- AWS actualizó su **Compute Optimizer** para identificar más agresivamente recursos subutilizados
- La demanda de IA está consumiendo compute a un ritmo que ni Amazon puede seguir

Esto no es un problema de "ahorro de costos corporativo". Es un síntoma de que **la capacidad física de los data centers está siendo superada por la demanda de IA**.

## El contexto más amplio

Andy Jassy ya lo había advertido en los earnings de Q2: incluso con el capex de **$220 mil millones** proyectado para 2026, "no tendremos suficiente capacidad para satisfacer toda la demanda que tenemos en 2026". Y agregó que la demanda ya visible para 2028 es "impresionante".

Recordemos también que AWS ya subió los **EC2 Capacity Blocks para GPUs en ~20%** en julio (la segunda alza en 6 meses). Ahora le tocan el turno a las instancias CPU: si no puedes cobrar más, al menos libera lo que tienes.

## Esto es relevante para tu stack

1. **FinOps deja de ser opcional.** Si el propio AWS está rastreando instancias zombie internamente, tu empresa necesita hacer lo mismo. Herramientas como Compute Optimizer, Savings Plans y políticas de auto-scaling más agresivas son la diferencia entre una cuenta cloud manejable y un agujero negro financiero.
2. **65% underutilized es normal, no excepción.** Ese número probablemente se replica en tu infraestructura. Una auditoría rápida de instancias ociosas puede ahorrar 20-40% del bill mensual.
3. **La capacidad va a estar tight un buen rato.** Si tienes workloads que necesitan spin-up rápido de muchos nodos (training jobs, batch processing), planifica con anticipación. Los Capacity Blocks existen por una razón.
4. **Right-sizing es la jugada.** Mover workloads de instancias grandes sobre-dimensionadas a sizes más eficientes (Graviton donde sea posible) libera capacity y baja costos simultáneamente.

## La señal de fondo

Cuando el hyperscaler #1 del mundo empieza a **rationing interno**, el mensaje para la industria es claro: la era de compute infinito y barato se acabó. La IA se está comiendo todo el silicio disponible, y la física de los data centers (energía, cooling, espacio) es el nuevo cuello de botella.

Para equipos DevOps, esto significa que la **eficiencia de infraestructura** va a dejar de ser un nice-to-have y va a volver a ser una competencia core. Bienvenidos al fin de la abundancia.

**Fuentes:** [The Information vía MarketScreener](https://nl.marketscreener.com/beursnieuws/aws-engineers-van-amazon-kampen-met-langere-wachttijden-voor-cpu-servers-door-krappe-capaciteit-ce7f50d2d188fe26), [IT Home (大佬说)](https://www.locdd.com/t/topic/78497), [Data Center Richness](https://datacenterrichness.substack.com/p/5-notable-data-center-links-aug-8)
