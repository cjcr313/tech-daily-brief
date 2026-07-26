---
title: "Moonshot AI lanza Kimi K3: 2.5T parámetros, 1M de contexto y que codea mejor que GPT-5.5"
author: Carlos
pubDatetime: 2026-07-16T16:05:00Z
slug: kimi-k3-moonshot-1m-contexto
featured: false
draft: false
tags:
  - IA
description: "Moonshot AI lanzó oficialmente Kimi K3, su modelo flagship más potente: 2.5 trillones de parámetros MoE, ventana de contexto de 1 millón de tokens y benchmarks de coding que superan a GPT-5.5."
---

Moonshot AI se cansó de esperar y hoy **16 de julio lanzó oficialmente Kimi K3**, su modelo más ambicioso hasta la fecha. Y los números son bestiales.

## Especificaciones clave

- **Arquitectura:** Mixture of Experts (MoE) con **2.5 trillones de parámetros totales**
- **Contexto:** **1 millón de tokens** — puedes meter toda la trilogía de los "Tres Cuerpos" de una
- **Disponibilidad:** K3·Max y K3 Cluster·Max ya disponibles para usuarios logueados en kimi.com
- **Accesso API:** Disponible a través de Kimi Code platform

## Rendimiento

Según leaks y tests de la comunidad:

- **Coding:** Supera a GPT-5.5 y Opus 4.8 en algunos benchmarks
- **Nivel general:** Se ubica entre **GPT-5.6 y Fable 5** de Anthropic
- **Visual:** Capacidades visuales consideradas superiores a Fable 5
- **3D generation y gaming:** Mejoras significativas vs K2.6

## De K2 a K3 en 3 meses

La velocidad de iteración es impresionante:

- **Jul 2025:** K2 base (1T MoE, 32B activos)
- **Sep 2025:** K2 update (128K → 256K contexto)
- **Abr 2026:** K2.6 (open-source, code gen + agent swarms)
- **Jul 2026:** K3 (2.5T, 1M contexto)

Ese salto de 256K a 1M tokens en solo 3 meses es una declaración de intenciones clara.

## El contexto comercial

K3 no llega solo. Moonshot AI viene con viento en popa:

- **Ronda de funding cerrada a valuación de US$20 mil millones** (pre-money: $31.5B)
- **ARR sobre US$300 millones** a mediados de junio
- **Polymarket** tenía 97-98% de probabilidad de release en julio

La pregunta es si Kimi K3 podrá competir de tú a tú con Fable 5 y GPT-5.6 en producción real, no solo en benchmarks selectivos. Pero con 1M de contexto nativo y ese nivel de coding, queda claro que la carrera china no va a esperar a nadie.

> 💡 **Para devs:** Pueden probar K3 desde el cliente Kimi o vía API usando los model IDs `k3-max` y `k3-cluster-max` en Kimi Code.

### Update: 17 de julio — Blind testing y números finales

Las últimas 24 horas confirmaron lo que los benchmarks sugerían. **VentureBeat** reportó que K3 es en realidad un modelo de **2.8 trillones de parámetros** (no 2.5T como se reportó inicialmente), consolidándose como **el modelo open-source más grande del mundo**.

Lo más impactante viene de **AI Arena (evaluación ciega)**:

- Los desarrolladores **prefirieron Kimi K3 sobre todos los modelos estadounidenses** en coding front-end
- Superó a **Anthropic Fable 5** y **OpenAI GPT-5.6 Sol** en pruebas a ciegas
- **CNBC** confirma que supera a OpenAI y Anthropic en varios benchmarks

**Axios** lo tituló como un "stun": un modelo chino open-weight logrando resultados de frontera a una fracción del costo. La narrativa se afianza: mientras OpenAI y Anthropic guardan sus modelos bajo llave, las empresas chinas están ganando terreno con la estrategia opuesta — **open source, más grande y más barato**.

Esto presiona directamente el modelo de negocio de las labs estadounidenses. Si un modelo gratuito codea mejor en ciego que uno de US$200/mes, las empresas van a hacer las cuentas.

### Update: 23 de julio — La demanda reventó a Moonshot. Suscripciones pausadas en 48 horas

K3 fue demasiado exitoso para su propio bien. **Menos de 48 horas tras el release, Moonshot tuvo que pausar nuevas suscripciones** porque la demanda agotó su capacidad de GPU disponible.

La declaración oficial desde la cuenta @Kimi_Moonshot en X fue cristalina:

> *"Kimi K3 has received far more love than we expected, and our GPUs are feeling it. Over the past 48 hours, demand has pushed close to the limits of our current capacity. To protect the experience of existing subscribers, we're temporarily pausing new subscriptions."*

**El impacto en mercados:** El Philadelphia Semiconductor Index cayó casi **10% en su peor semana desde abril 2025**, en parte por el efecto psicológico de que un modelo chino a esta escala pusiera presión en el narrative de capex en IA. InvestorPlace tituló que Wall Street "misread" el evento.

**Valuación:** Moonshot estaría buscando una **valuación de US$50 mil millones** según CoinCentral, aprovechando el momentum de K3.

La ironía es brutal: el modelo que debía demostrar la superioridad de la infraestructura china de IA terminó demostrando que **ni Moonshot tiene suficientes GPUs para sostener su propio éxito**. El inference bottleneck es real, y no se resuelve con buenos modelos — se resuelve con chips, y muchos.

### Update: 26 de julio — Pesos abiertos mañana 27 de julio. Guía de self-hosting y GPU requirements

Moonshot confirmó que los **pesos abiertos de Kimi K3 se liberan el 27 de julio a las 00:00 UTC**. Esto es un evento mayor: cualquiera podrá descargar, correr y self-hostear el modelo de 2.8 trillones de parámetros sin depender de la API de Moonshot (y sin el riesgo de data residency que implica la Ley de Inteligencia Nacional de China).

**Especificaciones técnicas para self-hosting:**

- **Modelo:** 2.8T parámetros, 896 expertos, 16 activos por token (Stable LatentMoE)
- **Cuantización recomendada:** Q4 MXFP4 (~1.4TB) — K3 fue entrenado con MXFP4-aware, así que la degradación es mínima
- **GPUs mínimas:** ~18× H100 80GB para Q4; 64+ aceleradores recomendados por Moonshot
- **Stack recomendado:** vLLM 0.5+ (standard para MoE), SGLang como alternativa
- **Costo cloud (Q4):** ~$50/hr reserved en AWS/Azure/GCP con 24 H100s (~$0.14/1K tokens a 100 tok/s)

**Lo que cambia con self-hosting:**

1. **Soberanía de datos:** Para finanzas, salud, defensa — la API de Moonshot era un no-go por la NI Law china. Self-hosting en AWS/Azure/GCP regiones occidentales elimina a Moonshot del data chain.
2. **Costo:** A alto volumen (10M+ tokens/día), self-hosting se paga en semanas vs API a $3/M tokens.
3. **Providers managed:** Together AI, Fireworks, Groq y Replicate probablemente ofrezcan K3 managed dentro de días post-release, con residencia de datos en EE.UU. sin gestionar tu propio cluster.

**Lo que aún no se sabe:** Los términos de la licencia. Moonshot no ha confirmado si será tipo Apache 2.0, MIT, o una licencia con restricciones comerciales. Esto es crítico — una licencia restrictiva podría frenar la adopción enterprise.

### Update: 26 de julio — La Casa Blanca acusa a Moonshot de distillation de Fable 5

En un giro que parece sacado de un thriller, **Michael Kratsios** (director de OSTP de la Casa Blanca) acusó directamente a Moonshot de haber destilado el modelo Fable de Anthropic a escala industrial para construir K3. El Treasury Secretary **Scott Bessent** amenazó con sanciones y Entity List.

La acusación incluye acceso a **servidores Nvidia GB300 prohibidos** para empresas chinas, posiblemente obtenidos vía Tailandia. Expertos cuestionan la timeline (Fable 5 solo lleva 15 días público cuando K3 salió), pero el mensaje político es claro: Washington está dispuesto a usar todas las herramientas disponibles contra los modelos chinos open-weight.

Más detalle en el artículo dedicado: [La Casa Blanca acusa a Moonshot de destilar Fable 5](/posts/white-house-moonshot-distillation-fable5-sanciones).
