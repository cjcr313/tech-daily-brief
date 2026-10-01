---
title: "OpenAI DevDay 2026: GPT-6.1 Sol trae inteligencia casi-Astra a un quinto del precio (y presentó dots)"
author: Carlos
pubDatetime: 2026-09-30T03:10:00Z
slug: openai-devday-2026-gpt-6-1-sol-dots
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "En su DevDay 2026 OpenAI lanzó GPT-6.1 Sol, con inteligencia cercana a Astra para coding y computer use a 1/5 del precio, y dots, asistentes proactivos que siguen trabajando entre sesiones."
---

![Ilustración editorial de una conferencia tech futurista con orbes de redes neuronales brillantes descendiendo sobre un escenario, uno grande y otros pequeños y eficientes, paleta púrpura y naranja](../../assets/images/2026-09-30-openai-devday-2026-gpt-6-1-sol-dots.jpg)

Se hizo el DevDay 2026 y OpenAI soltó más de 20 anuncios de una sola vez. Pero el que importa para quienes pagan la factura de la API tiene nombre y apellido: **GPT-6.1 Sol**.

## GPT-6.1 Sol: inteligencia casi-Astra, precio de gallina

La promesa es simple y brutal: **inteligencia cercana a GPT-6 Astra para coding, computer use y trabajo profesional, a un quinto del precio de Astra** en input y output de tokens vía API. O sea, la frontera de hace unas semanas, ahora con descuento del 80%.

Contexto rápido, porque esto viene acelerado: la semana pasada OpenAI ya había puesto GPT-6 Sol y Luna en Bedrock, Anthropic lanzó Claude Opus 5.5 un 40% más barato que Opus 5, y Astra llegó a GA en Microsoft Foundry. La conclusión de todo esto: **elegir modelo por tarea, y no "el más grande para todo", dejó de ser optimización y pasó a ser estrategia obligatoria**. GPT-6.1 Sol es exactamente ese golpe: el modelo de trabajo recurrente (dev, ops, uso de computador) a costo que se puede sostener en volumen.

## dots: asistentes que no se apagan

El otro anuncio grande fueron los **dots**: asistentes proactivos de OpenAI que **siguen trabajando a través de proyectos complejos y tareas cotidianas**, aunque tú no estés mirando. La idea es invertir el modelo de "pregunto-responde": el dot empuja el trabajo hacia adelante y te mantiene en control del avance. Si suena a la pieza consumer del mundo agéntico que venimos cubriendo, es porque lo es.

## Lo demás

El [recap oficial del DevDay](https://openai.com/index/devday-2026-recap) junta los 20+ anuncios: GPT-6 Astra, ChatGPT, Codex, APIs, seguridad y herramientas para builders. Si trabajas con la API de OpenAI, vale la pena el recorrido completo.

**El punto:** la inteligencia frontier se está abaratando más rápido de lo que la mayoría presupuesta. Si tu stack todavía asume un solo modelo caro para todo, este DevDay es la señal para repensarlo.

**Fuentes:** [Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol) · [Introducing dots](https://openai.com/index/introducing-dots) · [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap)

### Update: 30 de septiembre (tarde)

El system card de GPT-6 Astra, actualizado junto al lanzamiento de dots, trajo un dato incómodo que The New Stack destapó: **al duplicar las tareas encadenadas de 5 a 10, los casos marcados por "boundary problems" se dispararon de 8,6% a 19,7%**. O sea, mientras más largo el encadenamiento de tareas, más se duplica la tasa de problemas de límites: el dot tiene que deducir hasta dónde puede actuar a partir de registros, decisiones previas, contexto y la política de confirmaciones de OpenAI.

Los atenuantes: la evaluación **no encontró breaches de severidad alta ni exfiltración de datos**, aunque OpenAI no detalló en qué consistieron los problemas marcados.

Los safeguards tienen capas: durante la "proactive research" el dot solo puede **leer** apps conectadas (no escribir, no mandar mensajes, no controlar browser ni computador); al pasar a acción entran Custom Rules por usuario y un **auto-review adaptado de Codex**, donde un segundo modelo revisa comandos fuera del sandbox predefinido. El detalle a vigilar: un dot puede terminar **escribiendo al repo y entregando un PR terminado antes de que un humano revise nada**.

**Fuente:** [The New Stack](https://thenewstack.io/openai-dots-boundary-problems/)

### Update: 1 de octubre

GPT-6.1 Sol ya está **generalmente disponible en Amazon Bedrock**, confirmó AWS en su boletín de novedades. La promesa se mantiene intacta del lado del provedor cloud: **rendimiento sólido a un quinto del costo de GPT-6 Astra**, posicionado explícitamente para workloads agénticos a escala — justo el perfil donde el descuento del 80% deja de ser anécdota y pasa a ser línea del presupuesto.

Con esto, la migración de modelos OpenAI hacia Bedrock completa el circuito (ya estaban GPT-6 Sol y Luna): si tu infra está en AWS y tu factura de inferencia anda por las nubes, la opción barata del DevDay ahora vive a un clic de tu cuenta.

**Fuente:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-1-sol-on-amazon-bedrock/)
