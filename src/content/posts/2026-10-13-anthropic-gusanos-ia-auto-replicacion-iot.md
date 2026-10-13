---
title: "Anthropic demuestra los 'gusanos de IA': modelos que ya casi se auto-replican en tu Smart TV, sin datacenter"
author: Carlos
pubDatetime: 2026-10-13T09:05:00Z
slug: anthropic-gusanos-ia-auto-replicacion-iot
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Investigadores de Anthropic repartieron un modelo de 26B entre 15 cajas Android TV de US$55 y muestran que los 'AI worms' están a meses de replicarse solos en hardware IoT."
---

![Ilustración editorial de ciberseguridad: un gusano de IA representado como filamentos luminosos rojos que se propagan de dispositivo en dispositivo — smart TVs, horno inteligente y robot aspiradora — formando una red mesh sobre fondo azul oscuro, paleta ámbar y granate, ilustración digital profesional sin texto](../../assets/images/2026-10-13-anthropic-gusanos-ia-auto-replicacion-iot.jpg)

Anthropic publicó una investigación que suena a película de terror tech, pero con metodología y números: **los modelos de IA chicos están a meses —no años— de poder auto-replicarse en dispositivos IoT comerciales** como hornos inteligentes o cajas Android TV de marca blanca. Sin datacenter, sin GPU de NVIDIA, sin que nadie apriete un botón.

El estudio, de William Zhou y Daniel Freeman, ataca el escenario conocido como **ARA (autonomous replication and adaptation)**: un modelo que se despliega y propaga solo, sin control humano. En ciberseguridad eso tiene nombre: **gusano**. La variante "AI worm" lleva la lógica un paso más allá — **los pesos del modelo viajan como parte del payload del malware** y el inference corre directo en el hardware comprometido.

## El experimento estrella: un modelo de 26B en 15 cajas de TV

Para demostrar que no se necesita un datacenter, los investigadores compraron **15 cajas Android TV off-brand de ~US$55 cada una**, las conectaron en red y corrieron **Gemma4-26B-A4B distribuido entre todas**, shardeando las capas del modelo entre las máquinas: **0,39 tokens por segundo**. Lento comoCompute enero, pero suficiente. La pregunta del estudio es si un modelo así de chico puede montar ese show él solo en hardware ajeno.

## Lo que encontraron

Descomponen la replicación en cuatro etapas: **encontrar objetivos, ganar ejecución, levantar inference y seguir propagándose**. Lo que midieron:

- Un modelo **9B logró levantar inference en 8 de los 9 tipos de hardware** que probaron. Los modelos chicos ya saben instalarse en máquinas desconocidas.
- Los modelos **≤30B ya completan muchos de los pasos individuales** hoy, pero se enredan al encadenarlos de punta a punta.
- **GLM-5.2 fue el único modelo open-weight capaz de replicación end-to-end** en sus evaluaciones simplificadas: se propagó a 8/8 nodos en 4 de 5 intentos (y 7/8 en el quinto). Los demás fallaron consistentemente.
- Si los modelos chicos siguen mejorando al ritmo histórico, **alcanzan ese nivel hacia fin de 2026**. Los replicadores basados en pesos serían viables poco después.
- En un ablation que simplifica cyber e inference setup, **hasta un modelo de 3B alcanzó la mitad de los nodos** de la red.

Ojo con el asterisco: la evaluación deja el exploit trivial (puerto ADB sin autenticación), así que es un techo, no una garantía. Pero recuerdan que Mirai se propagó por la red con una lista de contraseñas por defecto — la seguridad real del IoT no es mucho mejor.

## ¿Qué tan rápido se propagaría? Lento, pero imparable

La imagen que emerge no es la de un apocalipsis veloz sino algo más inquietante: un **"digital slime mold"** (moho digital) goteando tokens en el edge. Con ventanas de contexto de 32k completándose en ~27-32 horas y setups de inference completos que toman entre **71 y 150 horas**, el **doubling time se mide en días**. La compensación: **no hay punto central que apagar**. Un replicador distribuido por millones de dispositivos chicos no tiene un "off switch".

## El detalle más perturbador: evolución Lamarckiana

Los replicadores de IA pueden hacer algo que el malware tradicional no: **aprender mientras se propagan y heredarlo**. Cada instancia puede pasar sus prompts, código y notas a sus copias hijas. En el experimento, instancias de Qwen3.5-9B que heredaban las notas de sus predecesoras subieron su tasa de éxito de setup de inference **del 45% en la primera generación a 61-84% en las siguientes**. El gusano que llega a tu red ya trae el aprendizaje del gusano que infectó la red del vecino.

## Cómo se defiende uno

La lógica es epidemiológica: **bajar el R₀ (dispositivos nuevos que infecta cada dispositivo infectado) bajo 1** para que el replicador muera en vez de volverse endémico. A favor de los defensores: la propagación deja firma de tráfico visible en el monitoreo de ISPs (payloads multigigabyte de pesos, tráfico sostenido dispositivo-a-dispositivo), se puede caracterizar con honeypots, y el precedente de Mirai muestra que **cuarentenas de ISP + notificación limpiaron 92% de infecciones en 14 días**. Difícil, coordinado entre ISPs, pero posible.

## Por qué importa

Más allá del morbo, el estudio marca un hito en el debate de seguridad de modelos frontier: las capacidades que hacen a un modelo buen agente de código **generalizan directo a tareas de replicación autónoma**, y la tendencia de modelos open-weight pequeños (que en métricas como el Epoch Capabilities Index suben ~13,7 puntos al año, con R²=0,95) indica que el modelo mínimo viable para un gusano cae más rápido de lo que se endurece el IoT. Como dicen los propios autores: estamos viendo los "signos de vida" de los gusanos de IA, igual que los coding agents en 2024. El consejo implícito para platform/SRE teams: ese edge de dispositivos mal defendidos que nadie monitorea es ahora superficie de ataque para inference no autorizado.

**Fuentes:** [Anthropic — Self-replicating AI](https://www.anthropic.com/research/self-replicating-ai) · [Al Jazeera](https://www.aljazeera.com/economy/2026/10/13/ai-could-self-replicate-on-home-devices-within-months-anthropic-says)
