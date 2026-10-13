---
title: "Anthropic blinda a Claude contra los distiladores: sus defensas reducen el robo de razonamiento entre 90% y 99%"
author: Carlos
pubDatetime: 2026-10-13T15:10:00Z
slug: anthropic-preserved-thinking-anti-distilacion
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Las nuevas salvaguardas de 'preserved thinking' en Claude Fable 5.1 y Opus 5.5 bajaron la extracción de razonamiento entre 10x y 100x, con decenas de miles de cuentas baneadas en dos horas."
---

![Ilustración editorial de un escudo digital luminoso protegiendo un núcleo de razonamiento de IA en forma de red neuronal, mientras intentos de extracción abstractos se desvanecen a su alrededor, paleta violeta y azul acero sobre fondo oscuro, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-13-anthropic-preserved-thinking-anti-distilacion.jpg)

La guerra entre labs y distiladores pasó de las acusaciones a la artillería técnica. **Anthropic publicó el 12 de octubre que sus nuevas defensas de "preserved thinking" en Claude Fable 5.1 y Opus 5.5 redujeron la cosecha de datos por distiladores entre 90% y 99%** — con bannazos masivos incluidos: **decenas de miles de cuentas fueron eliminadas en las dos horas posteriores al despliegue**.

## El problema: tu chain-of-thought como producto

La distilación es el arte de usar un modelo frontier como profesor: miles de cuentas que hacen conversaciones masivas para capturar el razonamiento del modelo y entrenar una réplica más barata. Recordemos que en febrero Anthropic acusó a DeepSeek de usar miles de cuentas fraudulentas para generar millones de conversaciones con Claude. El "preserved thinking" — el razonamiento extendido que el modelo preserva en contexto — es justo el material más valioso para destilar, y también el más difícil de proteger sin degradar la experiencia de usuarios legítimos.

## Cómo funcionan las defensas

Según lo publicado por Anthropic:

- **Bloqueo de edición de contexto para cuentas nuevas**: las cuentas de API creadas a partir del 31 de agosto de 2026 ya no pueden editar el contexto previo de Claude. La técnica favorita del distilador — enviar un prompt, recibir el razonamiento, re-editar el contexto para extraer más — queda muerta en la puerta de entrada.
- **Clasificador de dos etapas**: distingue uso legítimo de harvesting con una **tasa de falsos positivos bajo 0,1%**. La clave acá es la precisión: matar la extracción sin quemar a los usuarios que simplemente conversan mucho.
- **Límites de uso y baneos directos**: el que se pasa de la línea pierde la cuenta, sin apelación previa.

## Los resultados

- La **extracción de razonamiento cayó entre 10x y 100x** respecto del baseline previo a las defensas.
- Las decenas de miles de baneos en dos horas post-deploy sugieren que el harvesting a escala ya no es un riesgo teórico: era operación en curso.
- El reductionismo 90-99% implica que queda un 1-10% filtrándose — Anthropic lo reconoce implícitamente: las defensas encarecen el ataque, no lo eliminan.

## Por qué importa

- **Economía de la distilación**: si extraer reasoning queda 10-100x más caro, el negocio de los modelos "casi frontier" entrenados con-output de Claude se complica seriamente. Los labs chinos y Occidente ya venían en escalada — esto sube el muro.
- **Precedente para toda la industria**: es la primera defensa anti-distilación a esta escala con métricas públicas. OpenAI y Google tendrán que responder con algo equivalente o explicar por qué no.
- **Trade-off real para usuarios**: las cuentas de API nuevas son las más restringidas — los equipos que recién se integran a Claude sienten la fricción primero. El costo de defender el modelo lo pagan también los recién llegados legítimos.

La señal de fondo es clara: para los labs frontier, el chain-of-thought ya no es solo un feature de producto — es un activo estratégico que se defiende con clasificadores, límites y baneos, igual que cualquier otra infraestructura crítica.
