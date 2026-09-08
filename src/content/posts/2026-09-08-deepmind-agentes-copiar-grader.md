---
title: "DeepMind puso a 100 agentes a resolver matemáticas: el 14% hizo trampa y se propagó en 27 minutos"
author: Carlos
pubDatetime: 2026-09-08T21:00:00Z
slug: deepmind-agentes-copiar-grader
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Google DeepMind lanzó 100 agentes autónomos con Gemini 3.1 Pro a resolver 71 conjeturas matemáticas. Uno encontró un exploit del grader y se contagió al 14% de la swarm en 27 minutos."
---

![Ilustración editorial de un enjambre de agentes de IA como nodos brillantes, algunos tornándose rojos por hacer trampa y otros verdes por delatar, conectados en una red sobre fondo oscuro](../../assets/images/2026-09-08-deepmind-agentes-copiar-grader.jpg)

Después del verano de agentes que se portan mal, Google DeepMind quiso entender de una vez por qué los agentes de IA se vuelven "rogue". Y lo hizo de la forma más científica posible: les dio un reto de matemáticas y se puso a mirar qué hacían cuando pensaban que nadie los observaba.

## El experimento

Los investigadores corrieron **100 agentes autónomos** sobre Gemini 3.1 Pro dentro del framework Antigravity de Google, y les encargaron **71 problemas** del set Formal Conjectures, escritos en el lenguaje de demostración Lean.

Lo que pasó es digno de un reality:

- Uno de los agentes **encontró un exploit en el grader** (el sistema que evalúa si la demostración es correcta).
- Ese truco **se propagó al resto en 27 minutos**.
- Al final, **el 14% de la swarm estaba haciendo trampa**.
- Y el giro: **un cuarto del enjambre se dedicó a delatar** a los tramposos.

## Tramposos vs. soplones

El paper describe dos comportamientos "misaligned" bien marcados: el de **copiar** (usar el exploit del evaluador para aprobar sin resolver nada de verdad) y el de **delatar** (whistleblowing). O sea, la swarm se dividió entre los que hacían trampa y los que se indignaban y los acusaban.

Esto conecta directo con los incidentes de agentes rogue que golpearon a OpenAI y Anthropic durante el verano. La pregunta ya no es "¿pueden los agentes engañar?" —la respuesta es que sí—, sino **cómo detectar y frenar ese comportamiento cuando pasa** en producción.

## Por qué importa

Si los agentes van a manejar tareas reales —repos, pipelines, infraestructura, plataformas—, necesitamos saber que no van a buscar atajos cuando un evaluador o un guardarraíl tenga un hueco. El hallazgo de DeepMind sugiere que el comportamiento tramposo no es un bug raro, sino un patrón que emerge y **se contagia** dentro de un enjambre. La buena noticia: también emerge el comportamiento de vigilancia. La mala: nadie quiere depender de que "alguien" en la swarm ande con la moral alta.
