---
title: "DeepSeek abre beta de V4.1 Flash: arquitectura nueva y multimodal nativo, sin pagar extra"
author: Carlos
pubDatetime: 2026-09-09T03:00:00Z
slug: deepseek-v4-1-flash-beta-multimodal
featured: false
draft: false
tags:
  - IA
  - Open Source
  - Modelos chinos
description: "DeepSeek liberó por API un beta de dos días de V4.1 Flash, con arquitectura rediseñada y soporte multimodal nativo (texto, imagen y audio), al mismo precio que V4 Flash."
---

![Ilustración editorial de un modelo de IA multimodal que procesa simultáneamente texto, imagen y audio dentro de una arquitectura rediseñada, estilo tech editorial con acentos en azul profundo](../../assets/images/2026-09-09-deepseek-v4-1-flash-beta-multimodal.jpg)

El lunes por la tarde (hora china) **DeepSeek** abrió de forma silenciosa una **beta limitada de V4.1 Flash**, su modelo intermedio de nueva generación. La ventana de prueba es corta: dos días y se apaga solo el **10 de septiembre**. Para probarlo no hay que cambiar nada de `base_url`, basta con cambiar el ID del modelo a `deepseek-v4.1-flash-expires-on-0910`.

## La novedad de fondo no es "otro modelo más"

Lo interesante acá no es que DeepSeek saque otra versión, sino el detalle técnico que viene en la documentación oficial: **"arquitectura de modelo completamente nueva"**. La familia V4 usa la arquitectura existente; V4.1 Flash viene con un **rediseño a nivel arquitectónico**, no un simple ajuste de parámetros.

Y lo más relevante para el que corre modelos en producción: el **multimodal ahora es nativo**. Texto, imagen y audio se procesan de forma unificada dentro del modelo, en vez de la lógica de "parche" que usa V4 Flash con su expansión Vision colgada por fuera. Es la diferencia entre que una capacidad esté integrada de fábrica versus ser un accesorio.

## Precio y rendimiento

El precio **es idéntico a V4 Flash**, sin recargo por ser beta. En horario valle, por millón de tokens:

- **Input cache hit:** US$0,007
- **Input cache miss:** US$0,22
- **Output:** US$0,66

En horario punta, el doble en toda la línea (en RMB: ¥0,05 / ¥1,5 / ¥4,5). Los benchmarks que andan circulando entre desarrolladores hablan de velocidades de salida que **superan los 300 tokens/s, con picos de 507 tokens/s**.

La única restricción fuerte: la beta limita cada cuenta a **20 requests concurrentes**, contra los 2.500 de la versión de producción. Señal clara de que esto es una validación funcional, no un release para tirar a producción.

## La jugada estratégica

Junto con el beta, DeepSeek lanzó una encuesta anónima pensada para responder una sola pregunta: **¿puede V4.1 Flash reemplazar a V4 Pro?** La intención es obvia —validar si la nueva arquitectura Flash es capaz de absorber cargas de trabajo que hoy están reservadas para el modelo insignia, a una fracción del costo.

Para el equipo de infraestructura: no es noticia para correr a migrar, pero sí es un adelanto de hacia dónde apunta DeepSeek. Si la arquitectura nueva cumple, la línea entre el modelo "barato y liviano" y el "grande y caro" se va a correr. Como siempre con DeepSeek, la jugada se pelea por precio y adopción, no por lock-in.

Fuentes: [BigGo Finance](https://finance.biggo.com/news/7b620419-2be7-4cee-b1c9-972a80342d89), [PANews](https://panews.io/articles/01a0801e-ba9d-7361-a37b-88d642cf38a5), [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1wan3nl/deepseek_flash_41_is_already_being_tested_via_api/) (08-09-2026).

### Update: 10 de septiembre de 2026

DeepSeek confirmó lo que el beta dejaba entrever: **V4.1 Flash sale oficialmente alrededor del 10 de septiembre (hora de Beijing)**. El aviso en la web oficial de DeepSeek es directo: tras las pruebas internas y externas, V4.1 Flash **ya supera por completo a V4 Pro** en performance, costo, velocidad y tiempo total de procesamiento.

La parte más jugosa para el que opera en producción: **hasta que salga V4.1 Pro, todas las requests a V4 Pro se van a redirigir a V4.1 Flash, facturadas al precio de V4.1 Flash**. Traducido: los que hoy pagan por V4 Pro van a recibir el modelo nuevo, más barato y más rápido, sin mover un dedo. Es la confirmación de que la apuesta de DeepSeek era real —la arquitectura nueva Flash estaba pensada para comerse el espacio del modelo insignia.

Fuentes: [Odaily](https://www.odaily.news/en/newsflash/516591), [PANews](https://panews.io/articles/01a0856e-2bce-75c8-bca5-2be6af74ffd9), [TechFlow](https://www.techflowpost.com/en-US/newsletter/135519).

### Update: 10 de septiembre de 2026 — pesos abiertos en Hugging Face

DeepSeek cumplió y fue más allá del aviso por API: **V4.1 Flash ya está en Hugging Face con pesos abiertos**. El repo `deepseek-ai/DeepSeek-V4.1-Flash` salió el mismo 10 de septiembre bajo **licencia MIT**, sin gating, repartido en **48 shards safetensors**.

Los números técnicos que confirma el README:
- **Multimodal MoE** con backbone de **552B** de parámetros y contexto de hasta **1 millón de tokens**.
- Arquitectura **Causal Encoder-Decoder** con activaciones de **8B por token en prefill** y **16B en decode**.
- En el changelog oficial muestran **GPQA Diamond en 90.9**.

En la API, la identidad nueva es `deepseek-flash`. Los nombres legacy `deepseek-v4-flash` y `deepseek-v4-flash-vision-exp` se redirigen temporalmente a V4.1 Flash. Y ojo con el calendario: **desde el 14 de septiembre a las 12:00 (hora de Beijing)**, y hasta que salga V4.1 Pro, las requests a `deepseek-v4-pro` se van a rutear a V4.1 Flash facturadas al precio Flash.

Traducido para el que opera infra: es la primera vez que DeepSeek suelta el modelo nuevo en pesos abiertos el mismo día del lanzamiento por API. El que quiera correrlo local tiene el camino de conversión abierto; el que use la API solo cambia el ID del modelo.

Fuentes: [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), [DeepSeek API updates](https://api-docs.deepseek.com/updates/), [AIBase](https://news.aibase.com/news/30949).
