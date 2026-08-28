---
title: "Dynatrace: el ROI de la IA no se mide con métricas técnicas, se mide con el negocio"
author: Carlos
pubDatetime: 2026-08-28T04:00:00Z
slug: midiendo-roi-ia-observabilidad-negocio
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "El gasto en IA está por las nubes, pero casi nadie puede demostrar retorno. Dynatrace plantea que la observabilidad debe conectarse con los KPIs del negocio."
---

![Ilustración editorial de un panel de control que conecta métricas técnicas con indicadores de negocio, estilo tech editorial](../../assets/images/2026-08-28-midiendo-roi-ia-observabilidad-negocio.jpg)

Dynatrace salió con un post que da en el clavo: el gasto empresarial en IA nunca había estado tan alto, pero cuando el directorio pregunta "¿y el retorno?", la mayoría no tiene una respuesta clara. No porque la IA no sirva, sino porque están midiendo lo que no corresponde.

## Los números que duelen

La movida cita datos que ponen el problema en perspectiva:

- El informe **GenAI Divide: State of AI in Business 2025** del MIT estima entre **US$30.000 y US$40.000 millones** en gasto empresarial en IA generativa, pero solo **~5%** de los pilotos integrados están extrayendo valor real. La gran mayoría no muestra impacto medible en el P&L.
- McKinsey afina más: el **88%** de las organizaciones ya usa IA en al menos una función, pero solo el **39%** reporta impacto en el EBIT a nivel enterprise.
- El propio **State of Observability 2025** de Dynatrace revela que solo **~28%** de las organizaciones alinea su telemetría con los KPIs del negocio.

Traducción: hay telemetría por montones, pero casi nadie la conecta con resultados.

## El problema de medir lo técnico

El argumento central es simple y contundente. Imagina un agente de IA metido en el pipeline de siniestros de una aseguradora: el modelo tiene **96% de precisión**, tiempos de respuesta sub-segundo y un token budget sano. ¿Entregó ROI? Con esos números, **no puedes saberlo**. El proceso pudo haberse acelerado 80%... o seguir igual porque un cuello de botella aguas abajo se comió toda la ganancia del modelo. El dashboard del modelo se ve idéntico en ambos casos.

Las métricas técnicas —precisión, latencia, consumo de tokens, tasa de error— responden una pregunta estrecha: *"¿qué tan bien corre el sistema de IA?"*. No responden la que importa: *"¿el negocio está mejor?"*.

## Cómo medirlo de verdad

Casi todo proyecto de IA se enchufa a un proceso que ya existía: manejo de siniestros, onboarding de clientes, cumplimiento de pedidos, resolución de soporte. El valor aparece cuando ese proceso mejora. Por eso la pregunta correcta no es "¿el modelo anda bien?", sino **"¿el proceso quedó más rápido, más barato, más preciso o más responsivo?"**.

Los KPIs que Dynatrace propone para el scorecard de ROI:

- Tiempo en completar el proceso de negocio
- Costo por transacción
- Customer lifetime value
- Conversión
- Satisfacción del cliente

McKinsey identifica el **rediseño del workflow** como uno de los drivers más fuertes de impacto a nivel enterprise, y los "high performers" son más de tres veces más propensos a usar la IA para transformar el negocio de raíz en vez de solo rascar eficiencia.

## El takeaway

La brecha no está en la tecnología, está en la medición. Mientras la observabilidad siga desconectada del P&L, la IA va a seguir pareciendo un gasto sin retorno en la reunión de directorio. Conectar la telemetría con los KPIs del negocio es lo que separa "tenemos un piloto lindo" de "esto mueve la aguja".

Fuente: [Dynatrace Blog](https://www.dynatrace.com/news/blog/how-to-measure-ai-roi-with-business-observability/) (27-08-2026).
