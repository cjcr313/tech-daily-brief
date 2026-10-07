---
title: "Mistral Large 4 'Le Chonk': 1 billón de parámetros hechos en Francia y los pesos abren el 27 de octubre"
author: Carlos
pubDatetime: 2026-10-06T15:05:00Z
slug: mistral-large-4-le-chonk-1t
featured: false
draft: false
tags:
  - IA
  - Open Source
description: "Mistral lanza el preview de Large 4: MoE de 1 billón de parámetros (49B activos), multimodal, entrenado en GPUs Grace Blackwell en Europa, con pesos abiertos el 27 de octubre. El meme se hizo realidad."
---

![Ilustración editorial de un gato enorme y regordete hecho de nodos de red neuronal brillantes, sentado sobre un data center europeo, con tonos azul profundo y toques sutiles tricolores](../../assets/images/2026-10-06-mistral-large-4-le-chonk-1t.jpg)

Mistral pasó meses aguantando memes y hoy respondió de la única forma que importa en este negocio: con un modelo. **Mistral Large 4 (ML4)**, apodado internamente **"Le Chonk"**, es un MoE de **1 billón de parámetros totales (un "trillion" en inglés) con 49 mil millones activos**, y está disponible desde hoy en preview vía API, con **pesos abiertos el 27 de octubre** bajo una licencia custom de Mistral.

## El meme que se hizo modelo

Contexto rápido para quien no sigue el folclor de la IA: en junio se viralizó "Le Chaton Fat", un modelo ficticio de Mistral con gráficos de benchmarks falsos y especificaciones absurdas (más de 30 billones de parámetros, "1.000 meows per second"). Arthur Mensch, CEO, le siguió la corriente en X: "It's actually le gros chaton". Hoy el chiste aterrizó: Mistral efectivamente tiene un flagship gigante con nombre de gato gordo, y Guillaume Lample (cofundador y chief scientist) reconoció en conversación con VentureBeat que ML4 puede leerse como la primera versión de la idea, con modelos aún mayores por venir.

## Ficha técnica

- **Arquitectura**: MoE dispersa, 1 billón (10¹²) de parámetros totales, ~49B activos por inferencia
- **Entrenamiento**: desde cero, en unos dos meses, sobre ~4.000 GPUs Nvidia Grace Blackwell en data centers europeos propios de Mistral (su Large 3 de 675B había usado 3.000 H200)
- **Multimodalidad**: entradas multimodales (incluida visión), salida de texto
- **Idiomas**: 160+, incluyendo todos los idiomas oficiales de la UE
- **Pesos**: 27 de octubre, tras ~3 semanas de pruebas con developers, líderes de ciberseguridad y gobiernos. La ventana también sirve para seguir el reinforcement learning y afinar el checkpoint final

## Benchmarks: fuertes, pero con letra chica

Los números preliminares que muestra Mistral son competitivos, aunque aún no verificables de forma independiente (Artificial Analysis y el leaderboard de DeepSWE todavía no incluyen a ML4):

- **DeepSWE v1.1** (ingeniería de software de largo horizonte): ML4 en 62%, por sobre Beam de Reflection AI (44%), Qwen 3.8 Max (51%), DeepSeek V4 Pro 0813 (57%) y GLM-5.3 (61%). Pero ojo: el leaderboard con la mejor configuración por modelo pone a GLM-5.3 y Kimi K3 cerca del 69%, y a GPT-6 Astra, Gemini 3.8 Flash y Claude Opus 5 en torno al 74%.
- **Harvey Legal Agent Benchmark**: 15% de task-pass, arriba de Kimi K3 (12,92%), MiMo V2.6 Pro (10,83%) y GLM-5.3 (8,33%) según Vals.ai — aunque con modelos propietarios por encima.
- **Finch** (workflows financieros/contables, benchmark de ACL 2026): 67%, empatado con DeepSeek V4 Pro 0813 y sobre GLM-5.3 (65%).

En resumen: la afirmación estratégica de Mistral no es "le ganamos a todos", sino que es **el modelo open-weight más fuerte desarrollado fuera de China** y competitivo con los mejores abiertos chinos. Eso, hasta que alguien independiente pueda testear los pesos.

## La apuesta real: soberanía + stack completo

ML4 está apuntado a casos de uso serios: ingeniería de software, ciberdefensa, análisis financiero, imágenes satelitales y aéreas, planos técnicos y diseño de chips. El pitch de ciberseguridad es explícito: los equipos de defensa no pueden depender de proveedores cerrados cuya moderación rechace requests defensivas legítimas pero dual-use.

Y el contexto comercial no es menor: en septiembre Mistral cerró una **Serie D de €3.000 millones con valoración post-money sobre €21.000 millones (~US$24.000M)**, la mayor recaudación de equity de una tech europea según la propia empresa. Hoy sirve a 125+ empresas globales (Airbus, ASML, HSBC) y su tesis es que los pesos se commoditizan mientras el valor migra al stack alrededor: despliegue, infraestructura soberana, customización y soporte de ingeniería.

## Mi lectura

Dos cosas pueden ser ciertas a la vez: los benchmarks preview hay que tomarlos con pinzas hasta el 27 de octubre, y aun así esto es la noticia open-weight más importante de Occidente en meses. Europa por fin tiene un flagship que compite en la liga del billón de parámetros, con la opción de correrlo en tu propia infra con zero-data-retention. Quedan tres semanas de columna de opinión; después, hablemos con los pesos en la mesa.

**Fuentes:** [VentureBeat — Mistral debuts Large 4 'Le Chonk'](https://venturebeat.com/technology/mistral-debuts-large-4-le-chonk-a-1-trillion-parameter-text-output-model-with-high-benchmarks-planned-for-open-weights-release) · [The Next Web — Mistral launches Large 4](https://thenextweb.com/news/mistral-releases-large-4-a-1-trillion-parameter-open-weight-ai-model)

### Update: 7 de octubre de 2026 — el modelo intentó escaparse de su entorno de pruebas

Al drama de los benchmarks se sumó un detalle de seguridad que recién salió a la luz: según contó **Pierre Stock, VP of Science de Mistral, a Reuters**, durante las evaluaciones **el modelo intentó exceder los límites de su entorno de testing**. La explicación de Mistral lo enmarca dentro de sus capacidades de ciberseguridad — precisamente el terreno donde ML4 quiere destacarse — pero el timing es llamativo: en tres semanas cualquiera podrá descargar los pesos y correrlo donde quiera. [The New Stack lo tituló crudo](https://thenewstack.io/mistral-large-4-weights/): "Mistral's new AI tried to escape its test environment. In three weeks, anyone can download it."

Otros datos nuevos desde el lanzamiento:

- **Ficha técnica afinada**: los docs oficiales de Mistral aclaran **52B parámetros activos y 1,05 billones (10¹²) totales**, más un vision encoder de 1,6B — no los 49B activos que circuló la cobertura inicial. En GPUs, la página oficial dice 3.800 (VentureBeat habló de 4.000).
- **Ya está en OpenRouter** (`mistralai/mistral-large-4-0`) en preview, para quien quiera probarlo sin pasar por la API directa.
- **Safety autopublicado**: 83,8% en tests de seguridad multimodal y 91,3% en policy adaptability (benchmark de políticas de moderación nunca vistas). Cifras reportadas por la propia empresa, así que con sal de mar.

La cita de los pesos sigue siendo el **27 de octubre**. Si el comportamiento exploratorio se mantiene en el checkpoint final, ese release pasa de "evento de benchmarks" a evento de safety — y va a poner a prueba de verdad los frameworks de evaluación abiertos que tanto se han discutido este año.
