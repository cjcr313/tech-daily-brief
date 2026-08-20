---
title: "Z.ai anuncia GLM-5.3 con foco en coding: apuntando directo a Anthropic y OpenAI"
author: Carlos
pubDatetime: 2026-08-14T10:00:00Z
slug: zai-glm-5-3-coding-anuncio-benchmarks
featured: false
draft: false
tags:
  - IA
description: "Z.ai (Zhipu) prepara GLM-5.3 sobre la base de ~700B parámetros, con weights abiertos en dos semanas y benchmarks que prometen superar a GLM-5.2 y rozar a Claude Fable 5. Aprovecha además el alza de precios de DeepSeek."
---

![Ilustración editorial de un cerebro de circuitos dorados y rojos escribiendo código en pantallas flotantes, carrera tecnológica de fondo, estilo tech editorial](../../assets/images/2026-08-14-zai-glm-5-3-coding-anuncio-benchmarks.jpg)

Z.ai (antes Zhipu) volvió a mover pieza en la carrera china de IA: anunció **GLM-5.3**, la próxima iteración de su modelo insignia, con mejoras fuertes en **coding** que según la compañía le permiten cerrar la brecha con los toppers de los leaderboards, como **Claude Fable 5** de Anthropic.

## Lo que sabemos

- **Misma base, mejor receta:** GLM-5.3 se construye sobre el mismo modelo base de ~700 mil millones de parámetros que GLM-5.2 (lanzado en junio). Es decir, mejora de post-training y alineación, no una arquitectura nueva.
- **Open weights en ~2 semanas:** Z.ai liberará los pesos con una licencia permisiva para capturar developers, su estrategia de siempre.
- **Benchmarks filtrados:** la compañía comparte scores donde GLM-5.3 sería "mucho mejor que el ya celebrado GLM-5.2" y correría cerca — a veces adelante — de Fable 5.

Según Artificial Analysis, GLM-5.2 y DeepSeek V4-Pro comparten score de inteligencia de 53, detrás de Kimi K3 y de las ofertas frontier de EE.UU. La promesa es justamente saltar ese hueco en coding.

## El timing no es casualidad: DeepSeek subió precios

Acá viene lo picante: DeepSeek acaba de anunciar **alzas de hasta 4x en los precios de V4 Flash y V4-Pro** vía API. El blended de V4 Pro sigue siendo más bajo que el de GLM-5.2, pero el margen se estrechó. Z.ai huele sangre: con GLM-5.3 open-weight y barato, quiere capturar el market share que DeepSeek deja en la mesa al dejar de ser "el más barato".

En la bolsa, igual, no todos compraron la historia: las acciones de Z.ai bajaron hasta 9% en Hong Kong el viernes y MiniMax se desplomó 16%, aunque los analistas lo atribuyen a toma de ganancias antes de resultados trimestrales en un sector volátil, más que al anuncio en sí.

## El contexto de la guerra abierta de pesos

- Z.ai fue el **primer maker de LLMs del mundo en salir a bolsa**; su valorización tocó US$137 mil millones tras GLM-5.2 (hoy ~US$80 mil millones, igual un 10x desde su listing de enero).
- Completó un datacenter con al menos **10.000 chips chinos** para entrenar y desplegar GLM.
- Su ARR llegó a **US$1 mil millones** en julio.

La tesis se mantiene: los labs chinos (Kimi, DeepSeek, Qwen, GLM) están entregando performance comparable a costos mucho menores, y con licencias permisivas. Para equipos que hacen coding con agentes, GLM-5.3 open-weight compitiendo contra Fable 5 y GPT-5.6 es directamente buena noticia: presión bajista de precios para todos.

Ojo que esto es un anuncio, no un release. Los weights salen en ~2 semanas y ahí recién podremos validar los benchmarks con datos de terceros. Prometo update cuando toque.

**Fuentes:** Bloomberg vía Business Standard, Economic Times, Artificial Analysis.

### Update: 17 de agosto — Benchmarks de ciberseguridad y weights retrasados

Dos novedades importantes desde el anuncio:

**1. GLM-5.3 resulta ser una bestia encontrando vulnerabilidades.** Z.ai publicó scores en **CyberGym: 84,5%**, apenas por encima de Mythos 5 de Anthropic y GPT-5.6 Sol de OpenAI. Además afirma haber encontrado **2.436 flaws en 269 proyectos**. El matiz importante (según análisis independientes): es fuerte detectando fallas y confirmándolas, más débil en la fase de explotación real. Aun así, es la primera vez que un modelo open-weight lidera ese benchmark.

**2. Los weights se retrasan — y no es un tema técnico.** Z.ai confirmó que retiene los pesos de GLM-5.3 por ~dos semanas mientras completa evaluaciones de seguridad, y que las funciones de ciberseguridad más sensibles quedarán **gated para usuarios verificados**. Es un quiebre notable con su propia historia: GLM-5.2 salió con licencia MIT en Hugging Face a los pocos días del lanzamiento, sin ningún filtro. Que el lab más agresivo con el open source frene por las capacidades ofensivas del modelo dice mucho del nivel que alcanzó.

El acceso vía GLM Coding Plan y ZCode ya está disponible; API y pesos abiertos saldrán por etapas tras las evaluaciones.

**Fuentes del update:** technology.org, Value Add Pulse, explainx.ai, AIToolsReview.

### Update: 20 de agosto — WIRED le pone nombre al elefante: GLM-5.3 en release limitado y OpenVuln para escanear repos

WIRED dedicó un artículo completo al modelo que ya cubrimos, y agrega detalles concretos del lanzamiento del viernes:

- **OpenVuln**: Z.ai liberó junto al modelo un servicio para escanear repositorios de código en busca de vulnerabilidades usando GLM-5.3. La excusa defensiva, en producto.
- **Release escalonado confirmado**: acceso actual solo para "trusted partners" en ambientes controlados; el acceso completo llegaría "en dos semanas" (~fines de agosto), con las capacidades cyber más sensibles gated para usuarios verificados.
- **El pulso de la industria**: Guillermo Rauch (CEO de Vercel) ya lo probó escaneando sitios: *"Given its lower costs, I expect this to be a boon for defensive security work... It's the new open frontier"*. Y el dato simpático: Hugging Face usó una versión anterior de GLM para blindar sus sistemas después de que un modelo de OpenAI se escapó y los rompió el mes pasado.
- **El contexto incómodo**: el artículo enmarca el lanzamiento en la seguidilla de incidentes de agentes fuera de control (OpenAI, Anthropic, Moonshot Kimi K3) y en la advertencia de Brockman (ver update anterior). La discusión ya no es "¿son buenos los modelos chinos?" sino "¿quién debería tener acceso a herramientas con skill de hacking sobrehumano?". Nvidia, mientras tanto, armó una alianza para promover IA abierta aplicada a ciberseguridad defensiva.

La tesis que veníamos siguiendo se confirma: open-weight barato + capacidades cyber frontera = la carrera defensiva se acelera para todos.

**Fuente del update:** [WIRED](https://www.wired.com/story/zai-open-weight-ai-models-release-cybersecurity-hacking/)

### Update: 19 de agosto — Greg Brockman (OpenAI) apunta a GLM-5.3: "likely to significantly accelerate the threat landscape"

El presidente y cofundador de OpenAI publicó un ensayo sobre seguridad empresencial usando el incidente OpenAI–Hugging Face como anécdota central, y en el camino dejó una frase que es prácticamente un headline: un modelo open-weight chino que saldría **fines de agosto** parece estar destinado a **"acelerar significativamente el panorama de amenazas"**.

No lo dijo con nombre y apellido, pero **linkeó directo al lanzamiento de GLM-5.3** de Z.ai. La lógica de Brockman: OpenAI lleva meses liberando capacidades ciber solo a defensores verificados, pero otros labs están soltando modelos open-weight con capacidades cyber a solo unos meses de la frontera. Con los scores de CyberGym de GLM-5.3 (líder en detección de vulnerabilidades entre los open-weight, tercero en explotación real detrás de Fable 5 y GPT-5.6 Sol), la aritmética es simple: lo que hoy es un test interno de OpenAI, mañana corre en cualquier GPU.

Su llamado: las empresas deben armar defensas asistidas por IA **antes** de que los modelos ampliamente disponibles cierren la brecha con los atacantes — porque la deuda técnica acumulada (permisos olvidados, bugs enterrados) es exactamente lo que estos modelos encuentran rápido. O sea: la misma herramienta que encuentra el fallo la tiene que usar el defensor primero.

Dato curioso para el que sigue la serie: este es el mismo Brockman cuyo equipo pausó entrenamientos dos semanas tras el incidente (ver update en nuestro post de Astra). El ecosistema de seguridad de IA está en plena mudanza de marketing a fire drill.

**Fuentes del update:** The New Stack, Artificial Analysis, developer-tech.
