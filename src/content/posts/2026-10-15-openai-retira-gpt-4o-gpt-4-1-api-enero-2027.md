---
title: "OpenAI entierra la era GPT-4: GPT-4o y GPT-4.1 salen de la API el 14 de enero de 2027"
author: Carlos
pubDatetime: 2026-10-15T15:05:00Z
slug: openai-retira-gpt-4o-gpt-4-1-api-enero-2027
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "OpenAI notificó el 14 de octubre la deprecación de GPT-4o, GPT-4o mini, GPT-4.1 y GPT-4.1 mini: fuera de la API el 14 de enero de 2027. El reemplazo recomendado es GPT-6 Luna. Quedan ~90 días para migrar."
---

![Ilustración editorial tech de una antigua generación de chips y engranajes desvaneciéndose en partículas de luz mientras emerge una nueva generación modular luminosa, paleta azul profundo con acentos verde neón, estilo ilustración tech editorial, sin texto](../../assets/images/openai-retira-gpt-4o-gpt-4-1-api-enero-2027.jpg)

Fin de ciclo: **OpenAI notificó a los desarrolladores que GPT-4o, GPT-4o mini, GPT-4.1 y GPT-4.1 mini salen de la API el 14 de enero de 2027**. El aviso apareció el 14 de octubre en su página de deprecaciones, dejando unos 90 días de plazo para migrar. El modelo recomendado como reemplazo: **GPT-6 Luna**.

## Lo que se va exactamente

- **Cinco snapshots de la serie GPT-4** (4o, 4o mini, 4.1 y 4.1 mini, más variantes snapshot) se eliminan de la API el **14 de enero de 2027**.
- Los **fine-tunes** de esos modelos comparten el mismo deadline, y los **nuevos jobs de entrenamiento se congelan antes**, así que si tienes modelos personalizados sobre esa base, la ventana es aún más corta.
- Las entradas más viejas (GPT-4 y GPT-4 Turbo originales) tienen un deadline separado, aún más temprano.

## Por qué importa

GPT-4o fue durante años **el** modelo por defecto de la industria: millones de integraciones, pipelines y productos construidos encima. Aunque hoy casi nadie inicia un proyecto nuevo con él, la migración duele en los rincones: sistemas heredados, evaluaciones fijas en snapshots, presupuestos calibrados a esos precios.

El reemplazo recomendado, GPT-6 Luna, tiene pricing significativamente más bajo (del orden de centavos por millón de tokens en entrada), así que la migración podría salir gratis o incluso más barata — siempre que las evaluaciones de calidad den el visto bueno en tu caso de uso.

## Checklist de migración

1. **Inventario**: revisa qué llamadas a la API usan los modelos afectados (incluye aliases tipo `gpt-4o` sin fecha).
2. **Evals antes de migrar**: corre tus suites de evaluación contra GPT-6 Luna y compara.
3. **Fine-tunes**: si tienes modelos afinados, entrena el reemplazo ya; los jobs nuevos se cortan antes del 14 de enero.
4. **Precios y límites**: actualiza presupuestos y rate limits según el nuevo modelo.

**Fuentes:** página de deprecaciones de OpenAI, The Register, cobertura de The Information.
