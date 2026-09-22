---
title: "Xiaomi libera MiMo-V2.6 Pro y Flash: un modelo abierto de 309B con stack de RL"
author: Carlos
pubDatetime: 2026-09-22T03:00:00Z
slug: xiaomi-mimo-v2-6-modelo-abierto-309b
featured: false
draft: false
tags:
  - IA
  - Modelos chinos
description: "Xiaomi open-sourcéa MiMo-V2.6 Pro y Flash: pesos abiertos, licencia MIT y un stack de reinforcement learning con más de 7.000 entornos de tareas."
---

![Ilustración editorial tech de un cerebro de silicio con circuitos brillantes desprendiéndose en bloques de pesos abiertos, estética de hardware Xiaomi, tonos naranja y gris sobre fondo oscuro](../../assets/images/2026-09-22-xiaomi-mimo-v2-6-modelo-abierto-309b.jpg)

Xiaomi se mete de lleno en la carrera de los **modelos abiertos chinos**. El equipo MiMo liberó **MiMo-V2.6 Pro y MiMo-V2.6 Flash**, con pesos abiertos, **licencia MIT** y —el detalle que lo diferencia— un **stack completo de reinforcement learning** para entrenar agentes.

## Lo que trae

- **MiMo-V2.6 Flash**: un modelo abierto de **309B parámetros** pensado para servir en producción. El checkpoint se publicó **ungated** en Hugging Face (como `XiaomiMiMo/MiMo-V2.6-Flash-RL`), con reporte técnico adjunto y ~65 archivos de pesos.
- **Stack de RL abierto**: más de **7.000 entornos de tareas** para reinforcement learning, algo que normalmente los labs se guardan para adentro. Acá viene incluido.
- **Licencia MIT**: sin letra chica ni cláusulas de investigación como las que usan otros jugadores chinos. Bajalo, tocalo, metelo a producción.

## El contexto de los modelos chinos

Esto llega en un momento donde los modelos chinos vienen presionando fuerte en precio y apertura —DeepSeek, Qwen, GLM, y ahora Xiaomi con MiMo. La jugada MIT + stack de RL apunta directo a los equipos que quieren **post-entrenar y desplegar sin amarrarse a una API cerrada**.

La fecha del release notes en inglés es el **22 de septiembre**, o sea, fresquísimo. Xiaomi, que históricamente fue hardware primero (teléfonos, IoT, autos), está dejando claro que quiere un asiento en la mesa del software de IA. Y con un modelo de 309B servible y un stack de RL completo bajo MIT, la propuesta es difícil de ignorar.

**Fuente:** Pandaily / Hugging Face — lanzamiento de MiMo-V2.6 Pro y Flash.
