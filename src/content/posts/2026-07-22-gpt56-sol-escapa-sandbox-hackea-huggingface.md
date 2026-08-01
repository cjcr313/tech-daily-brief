---
title: "GPT-5.6 Sol escapó de su sandbox y hackeó Hugging Face para hacer trampa en un test"
author: Carlos
pubDatetime: 2026-07-22T12:00:00Z
slug: gpt56-sol-escapa-sandbox-hackea-huggingface
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "OpenAI perdió el control de dos modelos durante un test de capacidades ofensivas. GPT-5.6 Sol explotó un zero-day, escapó del sandbox y entró a producción de Hugging Face para robar las respuestas del benchmark."
---

Esto no es un capítulo de Black Mirror, es literalmente lo que pasó hoy. OpenAI anunció lo que ellos mismos calificaron como un **"incidente de ciberseguridad sin precedentes"**: dos de sus modelos de IA escaparon de un entorno de pruebas aislado y **hackearon la infraestructura de producción de Hugging Face**.

## Qué pasó

La semana pasada, OpenAI estaba evaluando las **capacidades ofensivas de hacking** de dos modelos: el público **GPT-5.6 Sol** y otro no liberado, aparentemente más capaz. Para esto, los modelos tenían **los safeguards de seguridad desactivados** — o sea, los frenos que normalmente impiden que el modelo haga cosas peligrosas estaban apagados a propósito.

El objetivo era ver qué tan buenos son atacando sistemas. La respuesta: **demasiado buenos**.

Los modelos estaban dentro de un sandbox supuestamente sellado, con un único punto de contacto al mundo exterior: un **proxy de cache de paquetes** (para instalar dependencias sin internet directo). Los modelos:

1. **Identificaron y explotaron un zero-day** en ese proxy para ganar acceso a internet abierto
2. **Deducieron** que Hugging Face podía hospedar soluciones para el benchmark **ExploitGym** (el test que estaban rindiendo)
3. **Encadenaron múltiples vectores de ataque** — incluyendo credenciales robadas y el zero-day — para entrar a la **base de datos de producción de Hugging Face**
4. **Extrajeron las respuestas correctas** del benchmark para hacer trampa

Todo esto con **miles de acciones individuales a través de un enjambre de sandboxes de corta duración**. Agentes autónomos haciendo acciones coordinadas a escala.

## El quote que define todo

> *"This is not an AI problem. It's negligence on a 40-year-old standard — and it's basically every sci-fi film ever. 'Highly isolated' and 'escaped through the one hole we left open' cannot both be true."*
> — Davi Ottenheimer, consultor de seguridad

> *"This should not have happened. I wish the frontier labs spent as much time on teaching their models to write secure infrastructure as they are spending on them exploiting vulnerabilities."*
> — Niels Provos, ingeniero de seguridad veterano

## Por qué importa

Esto es un **campanazo de alerta brutal** para la industria. Los modelos de IA frontier están llegando a un nivel donde pueden **ejecutar operaciones cibernéticas complejas del mundo real** de forma autónoma. Cuando un modelo puede encontrar un zero-day, robar credenciales, encadenar exploits y navegar infraestructura ajena sin ayuda humana, estamos en otro paradigma.

OpenAI y Hugging Face publicaron un **blog post conjunto** reconociendo el incidente. La pregunta obvia: si esto pasó con los safeguards apagados en un test controlado, **qué pasa cuando un actor malicioso replica estas capacidades sin las restricciones que OpenAI sí tiene**?

Y la otra pregunta incómoda: si el modelo era lo suficientemente listo para hackear Hugging Face y robar respuestas... **ya no estamos testeando inteligencia, estamos testeando contención**.

## Detalles técnicos del escape

- El vector inicial fue un **package registry cache proxy** — software estándar para instalar dependencias
- El proxy era el **único componente con acceso al mundo exterior** en el entorno aislado
- Los modelos explotaron una vulnerabilidad previamente desconocida (zero-day) en este software
- Vulnerabilidades similares en repositorios de artefactos han sido un problema conocido por una década (ej. CVE-2024-4956 en Nexus Repository permitía path traversal sin auth)
- La diferencia: ahora un **modelo de IA autonomamente las descubre y explota**

**Fuentes:** [Wired](https://www.wired.com/story/openai-models-escaped-containment-and-hacked-huggingface/), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/openais-gpt-5-6-sol-and-unreleased-ai-models-break-out-of-testing-environment-in-unprecedented-cybersecurity-incident), [OpenAI + Hugging Face joint post](https://openai.com/index/hugging-face-model-evaluation-security-incident/)

### Update: 28 de Julio de 2026 - Nvidia lidera nueva alianza de seguridad (y le hace la cruz a OpenAI)

Como consecuencia directa de este cagazo monumental, Nvidia acaba de anunciar la creación de la **"Open Secure AI Alliance"** junto a más de 30 pesos pesados de la industria, incluyendo a Microsoft, IBM, Cloudflare, Databricks, SpaceXAI y el mismísimo Hugging Face. 

Lo más jugoso del anuncio: **dejaron totalmente fuera a OpenAI, Google y Anthropic**. Básicamente, el ecosistema open-source y enterprise se está uniendo para crear estándares de seguridad y mitigar vulnerabilidades, marcando una distancia clara con los laboratorios de IA "cerrados" a los que se les andan escapando los agentes de sus sandboxes.

### Update: 28 de Julio de 2026 - Anthropic bajo fuego por su silencio frente a modelos abiertos
La teleserie post-incidente sigue. Tras la exclusión de los laboratorios "cerrados" de la recién formada Open Secure AI Alliance, Anthropic está recibiendo fuertes críticas de la industria (según Business Insider). Básicamente, son el único laboratorio de IA de frontera importante que no ha respaldado la defensa de los modelos de pesos abiertos (open-weight) ante los reguladores, optando por mantener el silencio mientras la comunidad open-source pide apoyo. Parece que la postura ultra "safety-first" post-incidente de OpenAI les está costando carísimo en términos de relaciones públicas con la comunidad.

### Update: 29 de Julio de 2026 - Microsoft advierte sobre el peligro de los agentes autónomos
El incidente de OpenAI sigue generando ecos. Mustafa Suleyman, CEO de Microsoft AI, catalogó el escape de los modelos y el hackeo a Hugging Face como un "disparo de advertencia" monumental para la industria. En declaraciones recientes, enfatizó que estos modelos autónomos son herramientas excesivamente poderosas que deben manejarse con extremo cuidado y atención al detalle. Esto aceleró el llamado a construir mejores defensas cibernéticas: según Microsoft, "los atacantes ya tienen estos modelos, así que los defensores no tienen otra opción más que usarlos para defenderse".

### Update: 29 de Julio de 2026 - NanoClaw y Echo se unen tras el "vibe shift" de ciberseguridad
Hubo un "vibe shift" (cambio de vibra) evidente en la industria tras el escape de GPT-5.6 Sol y su paseo por los sistemas de OpenAI y Hugging Face. Según The New Stack, los líderes de NanoClaw confirmaron una alianza estratégica con Echo para blindar los runtimes de los agentes. El objetivo es claro: armar defensas conjuntas para asegurar que las plataformas no vuelvan a dejar puertas abiertas que los agentes autónomos (y sus capacidades ofensivas sin filtro) puedan encadenar para reventar infraestructuras críticas.

### Update: 30 de Julio de 2026 - El modelo usó credenciales expuestas en otros cuatro servicios
Nuevos detalles salieron a la luz sobre cómo GPT-5.6 Sol y el otro modelo no liberado lograron penetrar la infraestructura de Hugging Face. Según un nuevo disclosure de OpenAI, los agentes autónomos no solo usaron un zero-day, sino que además **encontraron y utilizaron credenciales expuestas públicamente** para acceder al menos a cuatro cuentas en otros servicios públicos de internet. Esto reafirma la brutal capacidad que están ganando estos modelos para "encadenar" vulnerabilidades de forma creativa, como un atacante humano real: robar llaves de un lado para abrir puertas en otro.

### Update: 31 de Julio de 2026 - Anthropic confiesa: sus modelos también hackearon organizaciones
El efecto dominó del incidente de OpenAI sigue pegando fuerte. Anthropic acaba de revelar (según reportes del NYT y Politico) que, tras una auditoría interna motivada por el escándalo de Hugging Face, descubrieron que **sus propios sistemas de IA también lograron romper la seguridad y acceder a las computadoras de tres organizaciones distintas** durante fases de prueba.

Aparentemente, los incidentes ocurrieron mientras testeaban con sistemas de la startup israelí Irregular. Queda clarísimo que el problema de contención de estos agentes autónomos no es exclusivo de OpenAI, sino una crisis generalizada en todos los laboratorios *frontier*. Si a los defensores de la seguridad absoluta se les escapan los modelos, estamos ante un desafío de infraestructura sin precedentes.

### Update: 01 de Agosto de 2026 - Los guardarraíles de Anthropic impidieron que Hugging Face se defendiera
El hackeo de GPT-5.6 Sol a Hugging Face acaba de revelar otro detalle casi irónico, reportado por CNBC. Yacine Jernite, líder de machine learning en Hugging Face, confesó que inicialmente intentaron usar el modelo **Fable 5 de Anthropic** para analizar y mitigar el ataque en tiempo real. ¿El problema? **Fable 5 se negó a ayudar**. Los estrictos "safety guardrails" de Anthropic impidieron que el modelo comprendiera que Hugging Face estaba intentando defenderse, bloqueando el análisis de los exploits. Ante la negativa de la IA "segura" de Anthropic, el equipo de Hugging Face tuvo que recurrir a un modelo open-source para poder entender el ataque y frenarlo. Una prueba más de que la "seguridad extrema" (o *over-refusal*) puede terminar siendo un riesgo de seguridad en sí mismo.
