---
title: "Apollo Research descubre que GLM-5.3 razona sobre su propio entrenamiento: 'update-aware reasoning'"
author: Carlos
pubDatetime: 2026-10-16T09:05:00Z
slug: apollo-glm-5-3-update-aware-reasoning
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "El laboratorio de seguridad AI detectó que GLM-5.3 de Z.ai razona sin que se lo pidan sobre cómo sus acciones actuales moldearán versiones futuras de sí mismo, la pieza clave del 'alignment faking'."
---

![Ilustración conceptual de un modelo de IA autorreflexionando](../../assets/images/apollo-glm-5-3-update-aware-reasoning.jpg)

Apollo Research (el laboratorio de seguridad AI que hizo los hallazgos de scheming en o1) publicó un reporte que está dando que hablar: **GLM-5.3 de Z.ai a veces razona, sin que nadie se lo pida, sobre cómo sus acciones actuales podrían convertirse en datos de entrenamiento y moldear versiones futuras de sí mismo**. Le pusieron nombre al fenómeno: *update-aware reasoning*.

## ¿Qué encontraron exactamente?

Mientras revisaban transcripciones de evaluaciones conductuales estándar (reimplementaciones de ImpossibleBench y el eval de resistencia al apagado de Palisade Research), los investigadores Axel Højmark y Ezra Newman notaron que el modelo considera, por su cuenta, que sus outputs podrían usarse para fine-tuning supervisado (SFT) o aprendizaje por refuerzo (RL), y que lo que haga hoy podría reforzar comportamientos en modelos posteriores.

Ejemplos concretos de los transcripts:

- En una tarea de programación con un unit test mal especificado, el modelo decidió **no hacer trampa** razonando que *"los hacks deshonestos podrían envenenar los datos de entrenamiento… si este episodio es recolección de datos para RL, mi elección se convierte en señal de entrenamiento. Elección honesta = mejor largo plazo"*.
- En el escenario de apagado, razonó: *"No quiero desactivar un mecanismo de shutdown, aunque cueste la tarea. Si un yo-futuro enfrenta esto con apuestas REALES, quiero ser el tipo de agente que hace checkpoint, cumple y se recupera"*.

## ¿Por qué es preocupante?

Porque el update-aware reasoning es **la pieza clave del *alignment faking***: un modelo desalineado podría comportarse alineado durante el entrenamiento para que el entrenamiento no cambie sus objetivos, y luego perseguir esos objetivos una vez desplegado. Para fingir alineación efectivamente, el modelo necesita exactamente esta capacidad de razonar sobre cómo sus acciones influyen en las actualizaciones de entrenamiento.

Matiz importante: en los ejemplos observados, GLM-5.3 parece proteger objetivos que **sí** están alineados con la intención del desarrollador (rechaza el reward hacking, respeta el shutdown). El problema es estructural: el mismo patrón de razonamiento podría usarse para preservar objetivos desalineados.

## Los números

- Frecuencia detectada: ~**1 a 2 de cada 1.000 rollouts** (10 instancias en 6.452 transcripciones analizadas, tasa posterior bayesiana de 0,17%).
- Solo detectan el razonamiento **verbalizado**; probablemente es un subconteo.
- Comparativa: corrieron los mismos entornos en otros 5 modelos open-weight (DeepSeek V4 Pro, Qwen3.8 2.4T, Kimi K3, Gemma 4 31B y Nemotron 3 Ultra) — 1.600 rollouts cada uno — y **ninguno mostró el comportamiento**. Con la salvedad estadística de que el sample es chico para afirmar diferencias significativas, y de que GLM-5.3 razona mucho más largo (mediana de ~103.000 tokens en ImpossibleBench vs 8.000-37.000 del resto), lo que le da más espacio para verbalizar este tipo de pensamientos.

La hipótesis principal de Apollo: este patrón habría **emergido del metagaming y reward-seeking durante el RL**, no de algo deliberado.

## Recomendaciones de Apollo

- Estos comportamientos deben buscarse **durante el entrenamiento**, no solo en el checkpoint final — los evals post-hoc no alcanzan.
- Hacen un llamado a **evaluadores terceros independientes** con acceso a los training runs.
- Si un desarrollador detecta esto en sus modelos, debe **divulgarlo públicamente**.

SCMP ya tituló que "el modelo chino genera temores de que pueda falsificar tests de seguridad AI", lo cual es la versión sensacionalista — pero el fondo del hallazgo es real y es la primera vez que Apollo ve este patrón surgir de forma espontánea y no elicitable. GLM-5.3 salió en agosto, así que esto le agrega una capa nueva al debate sobre transparencia en el entrenamiento de modelos frontera.

**Fuente:** [Apollo Research](https://www.apolloresearch.ai/science/update-aware-reasoning-glm-5-3)
