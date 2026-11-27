---
title: "GLM-5.4 estrena el Loop Transformer de 750B mientras GLM-5.5 se fuga a 2027"
author: "Nauta Lab"
pubDatetime: 2026-11-27T21:14:00Z
slug: glm-54-loop-transformer-glm-55-retraso
featured: false
draft: false
tags:
  - IA
  - Z.ai
  - China
  - Modelos
description: "Z.ai lanzó GLM-5.4, su primer flagship con Loop Transformer de 750 mil millones de parámetros, mientras GLM-5.5 se fuga a 2027 por los chip curbs y el bloqueo a la destilación."
---

![Ilustración editorial de una red neuronal en forma de cinta en bucle infinito frente a una barrera de contenedores bloqueados](../../assets/images/glm-54-loop-transformer-glm-55-retraso.jpg)

Semana movida para Z.ai (Zhipu): mientras Reuters reporta que su próximo flagship **GLM-5.5 se retrasa más allá de noviembre** por los controles de chips y los bloqueos a la destilación, la empresa china lanzó **GLM-5.4**, su primer modelo insignia construido sobre una arquitectura **Loop Transformer** de unos 750 mil millones de parámetros.

## Por qué GLM-5.5 se resfrió

El reporte de Reuters pinta el escenario completo: GLM-5.5, diseñado con cerca de **3 billones de parámetros**, planeado para este mes, quedó detenido en parte por los *safeguards contra destilación* cada vez más efectivos de OpenAI y Anthropic, y la nueva regla del Departamento de Comercio de EE.UU. vigente desde el **19 de noviembre**, que cubre arreglos de cómputo offshore por sobre ~750 equivalentes de H100 — con 90 días para que los operadores existentes consigan licencias. El resultado: el lanzamiento podría caer al **primer trimestre de 2027 o después**.

El dato de contexto más incómodo: Anthropic reportó en septiembre **casi 200 millones de intercambios con Claude** vinculados a campañas de destilación sospechosa, atribuidas a desarrolladores chinos incluyendo Alibaba, Moonshot y la propia Z.ai. Moonshot, mientras tanto, scrapped un acuerdo de US$150 millones por chips Blackwell ruteados vía Indonesia y su Kimi K4 podría escurrirse hasta mediados de 2027.

## GLM-5.4: profundidad en bucle, sin parámetros extra

La jugada técnica es lo interesante del lanzamiento:

- En un Transformer estándar, cada capa corre una vez por token. GLM-5.4 **corre 28 capas del modelo base GLM-5 en dos pasadas**: más profundidad sin sumar un solo parámetro.
- Z.ai adaptó el base preentrenado con entrenamiento continuo (no desde cero) y controla el costo de serving con **gates por token** que deciden cuánto escribe cada pasada, un **cache de ventana deslizante** para el bucle extra y reutilización de los índices de atención dispersa de la primera pasada.
- En un modelo de prueba de 30B, el looping dio las mayores ganancias en razonamiento matemático, científico y contexto largo, recortando además la longitud promedio de salida en 10-14%.
- El claim: inteligencia comparable a modelos de **2-3 billones de parámetros**. Los benchmarks, reconocen desde Z.ai, vienen después.

## Disponibilidad y la letra chica

GLM-5.4 ya está en el **GLM Coding Plan, ZCode y Z.ai Chat**, con visión para coding visual y contexto de **1 millón de tokens**. La API llega "pronto" tras una evaluación de seguridad, y los **pesos abiertos están prometidos** — sin fecha. Los usuarios con cuota semanal reciben 50% más uso que con GLM-5.3, aunque las quejas por cuota insuficiente siguen acumulándose en los foros. Y en el horizonte: un datacenter de **1 GW que correrá solo con semiconductores domésticos**.

La lectura estratégica: mientras los chip curbs aprietan la escala, los labs chinos empiezan a responder con **eficiencia arquitectural** — más inteligencia por parámetro en lugar de más parámetros. Si el loop entrega lo prometido, es una señal de hacia dónde va el costo de inferencia. Si no entrega, quedará como un experimento elegante en la peor semana posible para retrasarse.

**Fuentes:** [Reuters](https://www.reuters.com/world/china/us-chip-curbs-distillation-crackdown-threaten-chinese-ai-model-development-2026-11-26/) · [MLQ.ai](https://mlq.ai/news/zai-launches-glm-54-a-750-billion-parameter-model-built-on-a-looped-transformer/) · [TestingCatalog](https://www.testingcatalog.com/z-ai-launches-glm-5-4-its-first-loop-transformer-model/) · [Z.ai Blog](https://z.ai/blog/glm-5.4)
