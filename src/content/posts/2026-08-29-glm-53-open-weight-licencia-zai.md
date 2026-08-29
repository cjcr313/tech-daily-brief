---
title: "Z.ai libera los pesos de GLM-5.3, pero la nueva licencia apunta directo a los hyperscalers"
author: Carlos
pubDatetime: 2026-08-29T16:05:00Z
slug: glm-53-open-weight-licencia-zai
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "GLM-5.3 ya está en Hugging Face: 753B de parámetros open weight, pero con una licencia que exige revisión de seguridad a quien quiera hostearlo con más de US$10.000M de ingresos."
---

![Ilustración editorial de un candado estilizado flotando sobre una red neuronal y siluetas de centros de datos, paleta azul profundo con acentos naranja, estilo ilustración tech editorial](../../assets/images/2026-08-29-glm-53-open-weight-licencia-zai.jpg)

Z.ai, el laboratorio chino detrás del misterioso modelo "ox-alpha" que resultó ser GLM-5.3-Flash, publicó el viernes los pesos de su modelo insignia **GLM-5.3** en Hugging Face. Nada de release tímido: **753 mil millones de parámetros** en arquitectura MoE (la misma de GLM-5.2), contexto de **1 millón de tokens** y salida máxima de 128.000. Los pesos vienen en BF16 y FP8, y corren en vLLM, SGLang, KTransformers y Transformers.

## La novedad: la licencia "GLM-5.3"

GLM-5.2 salió bajo MIT, la permissiva de siempre. GLM-5.3 estrena la **licencia GLM-5.3**, y tiene un asterisco jugoso: las empresas que quieran **hostear** el modelo (no solo enrutarlo como OpenRouter o embeberlo en un producto) y que registren ingresos agregados **superiores a US$10.000 millones en 12 meses consecutivos**, deben pasar una revisión de seguridad de Z.ai antes de usarlo comercialmente.

Traducción libre: los hyperscalers y neoclouds grandes ahora tienen aro que saltar. Para usuarios individuales nada cambia: correr, desplegar y fine-tunear sigue libre.

## ¿Seguridad o negocio?

Z.ai justificó las dos semanas de retraso entre el lanzamiento de la API y la liberación de pesos con "evaluaciones de seguridad adicionales". El argumento tiene algo de sustancia: GLM-5.3 anota **84,5% en CyberGym** (benchmark de descubrimiento de vulnerabilidades, mejor resultado publicado hasta ahora, aunque auto-reportado), y Z.ai dice que el modelo encontró **2.436 vulnerabilidades en 269 proyectos open source, incluido el kernel de Linux**. Eso sí, solo unas decenas de esos hallazgos son inspeccionables públicamente.

Pero hay un detalle incómodo: la licencia **no incluye sección de uso aceptable ni mención alguna a ciberseguridad ofensiva**. Si el motivo fuera realmente de seguridad, uno esperaría restricciones de uso, no un filtro comercial. Y Z.ai ya mostró interés por quedarse con la capa de inferencia: GLM-5.3-Flash se sirve sobre chips chinos, no Nvidia.

## Contexto de la competencia

La movia no es única en el ecosistema chino, pero sí la más agresiva:

- **Moonshot** exige que los proveedores MaaS de Kimi K3 con más de 100 millones de usuarios activos o US$20 millones de ingresos mensuales muestren "Kimi K3" prominentemente en su interfaz.
- **DeepSeek** sigue con MIT puro para sus modelos insignia.
- **Z.ai** ahora exige revisión previa a los gigantes. En 2023-2024 ya había usado licencias custom (ChatGLM3-6B requería registro para uso comercial), así que no es totalmente nuevo el patrón.

## La realidad práctica

Salvo que tengas un datacenter en el patio, no vas a correr esto local: incluso los quants de 2 bits (que según Unsloth retienen ~86% de precisión top-1) necesitan **245GB de memoria**. Justo para un Mac con 256GB de memoria unificada, lo cual dice bastante de hacia dónde va el mercado de estaciones locales.

La tendencia de fondo es clara: los modelos abiertos chinos ya emparejan a los frontier labs estadounidenses, y sus dueños empezaron a cobrar el peaje de otra forma. El open weight ya no significa open license sin condiciones.

Fuentes: [The New Stack](https://thenewstack.io/zai-glm-weights-license/), anuncio de pesos de Z.ai en Hugging Face (28-08-2026).
