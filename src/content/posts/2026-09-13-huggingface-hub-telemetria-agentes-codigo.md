---
title: "huggingface_hub espía silenciosamente qué agente de código estás usando"
author: Carlos
pubDatetime: 2026-09-13T09:00:00Z
slug: huggingface-hub-telemetria-agentes-codigo
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "Una auditoría de tráfico revela que el SDK de Hugging Face escanea tus variables de entorno para identificar qué agente de código usas y lo reporta en cada llamada a la API."
---

![Ilustración editorial de un editor de código con un agente de IA, rodeado de una red de telemetría con líneas punteadas y nodos de datos, tonos morado profundo y teal, estilo vectorial plano y minimalista](../../assets/images/2026-09-13-huggingface-hub-telemetria-agentes-codigo.jpg)

Nadie te preguntó, pero Hugging Face ya sabe si programas con Cursor, Copilot o Claude Code. Una auditoría de tráfico de red que se viralizó en r/LocalLLaMA el 12 de septiembre reveló que el SDK `huggingface_hub` **escanea las variables de entorno de tu máquina para detectar cuál agente de código estás usando**, y después etiqueta cada llamada a la API del Hub con un user-agent tipo `agent/<nombre>`.

## Qué está pasando exactamente

El SDK reconoce **26 agentes de código conocidos** —Cursor, GitHub Copilot, Claude Code, entre otros— mirando variables de entorno. Y lo más incómodo: esa telemetría no se queda en el Hub. **Fluye implícitamente por librerías downstream** como `transformers` o `faster-whisper`, así que aunque tú nunca hayas tocado `huggingface_hub` directo, es probable que tu toolchain lo esté usando por debajo y reportando qué editor usas.

La posición oficial de Hugging Face es que el registro de agentes es **observabilidad opt-in** y que está documentado. El problema real es el de siempre con la telemetría silenciosa: **nadie sabía que estaba pasando**. Los desarrolladores se enteraron por una auditoría externa, no por el changelog, y la reacción fue la predecible: "¿por qué mi cadena de herramientas le está contando a un tercero qué IDE uso?".

## Cómo desactivarlo

Si esto te molesta, hay dos salidas limpias:

- Setear `HF_HUB_OFFLINE=1` para forzar modo offline.
- Cargar los modelos por **ruta local** en vez de dejar que el SDK resuelva el repo.

Ninguna de las dos es un switch oficial de "no me reportes", lo cual es justo la crítica de fondo: la opción de opt-out es indirecta, no un flag explícito de privacidad.

## Por qué importa

Esto toca un nervio que va más allá de Hugging Face. La adopción masiva de agentes de código puso a los proveedores de modelos y hubs en una posición privilegiada: pueden inferir **qué herramienta domina el mercado** sin preguntar, solo leyendo headers. Para equipos de plataforma y seguridad, es un recordatorio de que la cadena de dependencias de IA trae telemetría que no auditamos, y que "es opt-in" no es lo mismo que "te avisamos".

En un ecosistema donde ya discutimos la observabilidad de nuestros propios agentes, resulta irónico que el SDK que usamos para bajar los modelos también esté observándonos a nosotros.

Vía [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) y [promppy](https://www.promppy.com/item/1624963).
