---
title: "Modelos chinos open-weight ya procesan 3x más tokens que los de EE.UU. en OpenRouter"
author: Carlos
pubDatetime: 2026-07-22T04:00:00Z
slug: modelos-chinos-open-weight-dominan-openrouter
featured: false
draft: false
tags:
  - IA
description: "OpenRouter confirma que modelos chinos open-weight mueven el triple de tokens semanales que los estadounidenses. El precio, no solo la performance, está decidiendo."
---

La narrativa lleva meses construyéndose: modelos chinos open-weight alcanzando a los estadounidenses. Pero ahora los datos lo confirman con números duros.

## El dato

**OpenRouter** —el servicio que enruta llamadas API de desarrolladores across múltiples modelos— reporta que los modelos open-weight chinos están procesando **más del triple de tokens semanales** que los modelos de EE.UU.

No es un spike puntual. Es una tendencia:

- **Feb 2026:** Primera semana donde modelos chinos superaron a los US en volume (4.12T vs 2.94T tokens)
- **Junio 2026:** Los 6 modelos más usados en OpenRouter eran todos open-weight chinos (Tencent, Xiaomi, DeepSeek, MiniMax, Z.ai)
- **Vercel Production Index (Julio):** Open-weight models = 29% de tokens en su gateway, up from 11% en abril. Eso es ~1 de cada 3 tokens por menos del 4% del gasto

## Por qué está pasando

**Precio.** Simple y duro.

| Modelo | Input (per 1M tokens) | Output (per 1M tokens) |
|--------|----------------------|------------------------|
| GLM 5.2 (Zhipu/Z.ai) | $1.40 | $4.40 |
| Kimi K3 (Moonshot) | $3.00 | — |
| GPT-5.6 Sol (OpenAI) | $5.00 | $30.00 |
| Claude Fable 5 (Anthropic) | ~$10.00 | ~$50.00 |
| Opus 4.8 (Anthropic) | $5.00 | $25.00 |

Y la diferencia de performance no justifica la diferencia de precio. En **SWE-bench Pro** (coding), GLM 5.2 sacó **62.1**, superando a GPT-5.5 que obtuvo **58.6**.

## Nature lo llama "momento Sputnik"

*Nature* publicó un análisis donde científicos comparan el impacto de Kimi K3 con el del DeepSeek original. Joel Pearson, neurocientífico de UNSW, dice textualmente: *"People are calling it a Sputnik moment"*.

Moonshot AI tuvo que **pausar nuevos registros** tres días después del lanzamiento de K3 porque la demanda colapsó su capacidad de procesamiento.

Xi Jinping aprovechó el timing —K3 se lanzó justo antes de la AI World Conference en Shanghai— para anunciar una **alianza global de regulación de IA**.

## El riesgo

No todo es color de rosa. Z.ai corre su API en la nube bajo la **Ley de Inteligencia Nacional de China**, lo que significa que código o data que pase por ahí podría ser accesible por autoridades chinas. En mayo, legisladores de EE.UU. empezaron a examinar qué riesgos representan los modelos chinos en infraestructura crítica.

Pero mientras la política se discute, los desarrolladores ya votaron con sus tokens.

> 💡 **La conclusión:** Si tu modelo cuesta 10x menos y codea mejor en ciego, las empresas hacen las cuentas rápido. La ventaja de los labs estadounidenses se está erosionando más rápido de lo esperado.
