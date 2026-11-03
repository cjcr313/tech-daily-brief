---
title: "DeepSeek V5 se pre-entrenaría desde cero en 160.000 chips Huawei Ascend 950DT: el test definitivo del stack IA chino"
author: Carlos
pubDatetime: 2026-11-03T21:10:00Z
slug: deepseek-v5-pretraining-huawei-ascend-950dt
featured: false
draft: false
tags:
  - IA
  - Infraestructura
description: "Según Star Market Daily, DeepSeek desplegaría al menos 160.000 Ascend 950DT en un data center de 1GW en Ulanqab (Mongolia Interior) para pre-entrenar V5 desde fines de 2026. Sería la primera vez que un frontier model chino se entrena completo en silicio doméstico."
---

![Ilustración editorial tech de un enorme data center futurista en medio de una estepa desértica al atardecer, con hileras de servidores iluminados en rojo carmesí y tormenta de datos conectándose al cielo, estilo ilustración tecnológica profesional, sin texto](../../assets/images/2026-11-03-deepseek-v5-pretraining-huawei-ascend-950dt.jpg)

La noticia más geopolíticamente cargada del día viene de Mongolia Interior. Según un reporte de **STAR Market Daily** que cita a múltiples fuentes de la cadena de suministro de chips, **DeepSeek planea desplegar al menos 160.000 chips Huawei Ascend 950DT en un nuevo data center en Ulanqab** (capacidad del orden de 1GW) y **comenzar workloads de pre-training sobre ellos tan pronto como fines de 2026**, para entrenar su próximo modelo frontier: **DeepSeek V5**.

## Por qué esto es un antes y un después

Hasta ahora, los chips Ascend de Huawei se usaban principalmente para **inferencia** de modelos DeepSeek, no para entrenarlos desde cero. La progresión de la alianza DeepSeek-Huawei viene subiendo la escalera paso a paso:

- **Principios de 2025**: Huawei desplegó más de 3.000 chips Ascend para correr DeepSeek V3 y R1 en Huawei Cloud.
- **Abril 2026**: con el lanzamiento de V4, Huawei anunció que sus sistemas Ascend SuperPoD soportaban la familia completa vía optimización conjunta hardware-software.
- **30 de septiembre**: DeepSeek open-sourcé un set de componentes de infraestructura adaptados a Ascend — compiladores, librerías de cómputo de alto rendimiento y software de comunicación distribuida (lo cubrimos acá en su momento).
- **Hace poco**: un consorcio en Shenzhen completó el **post-training de parámetros completos de V4-Pro (1,6 billones de parámetros) sobre un clúster de Ascend 910C**. Pero post-training no es pre-training: entrenar desde cero es considerablemente más exigente.

El giro notable del plan actual: la flota de Ulanqab **habría sido destinada originalmente a inferencia** y ahora se pivotearía a pre-training. Si se concreta, V5 sería **el primer frontier model chino pre-entrenado de punta a punta en silicio doméstico**.

## El contexto que importa

Con las restricciones de exportación de EE.UU. golpeando el acceso a GPUs Nvidia, un pre-training exitoso en Ascend probaría que el ecosistema IA chino puede sostener **todo el ciclo de vida de un modelo frontier sin depender de Nvidia** — y consolidaría a Huawei como la alternativa doméstica de cómputo avanzado. La apuesta incluye los SuperPoDs/Supernodos Atlas basados en el 950DT, la generación más reciente de Ascend.

Ahora, los descargos de rigor: el plan **aún no está confirmado de forma independiente** por DeepSeek ni Huawei, y la viabilidad final dependerá de la estabilidad del entrenamiento a esa escala, el rendimiento del clúster, la madurez del software y la calidad del modelo resultante. Entrenar un frontier model desde cero en hardware nuevo es de las cosas más difíciles que existen en computación — que salga bien no está garantizado.

Pero si sale bien, octubre de 2026 va a quedar marcado como el mes en que el stack IA chino dejó de ser una copia defensiva y se volvió una apuesta ofensiva de pila completa.

**Fuentes:** [STAR Market Daily vía GeoPolitechs](https://www.geopolitechs.org/p/deepseek-plans-to-train-its-next) · [WCCFTech](https://wccftech.com/china-going-for-domestic-full-stack-ai-dominance-deepseek-will-train-its-upcoming-v5-model-from-scratch-on-huaweis-ascend-950dt-based-atlas-superpods/)
