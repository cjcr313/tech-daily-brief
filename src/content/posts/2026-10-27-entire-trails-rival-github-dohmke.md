---
title: "Entire, la apuesta del ex-CEO de GitHub: plataforma rival que reemplaza el pull request por 'Trails' con revisión agéntica"
author: Carlos
pubDatetime: 2026-10-27T13:20:00Z
slug: entire-trails-rival-github-dohmke
featured: false
draft: false
tags:
  - DevOps
  - IA
description: "Thomas Dohmke (ex-CEO de GitHub) lanzó Entire, una alternativa completa a GitHub que reemplaza el pull request tradicional por Trails: revisión de código con evals ejecutadas por agentes en cada push. El nuevo bottleneck no es escribir código, es revisarlo."
---

![Ilustración editorial tech isométrica de una plataforma de revisión de código futurista con filas de tarjetas de cambios siendo evaluadas por orbes de agentes de IA con lupa y medidores de riesgo, mientras una cola tradicional de pull requests se desvanece al fondo, paleta violeta y verde esmeralda sobre fondo oscuro, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-27-entire-trails-rival-github-dohmke.jpg)

Thomas Dohmke, el ex-CEO de GitHub, dejó de coquetear: este lunes lanzó **Entire**, la plataforma de su startup (seed de US$60M en febrero) como **alternativa completa a GitHub**, con su propia idea de cómo debiera verse un "GitHub de la era agéntica". La carta fuerte se llama **Trails**: una reinvención del pull request donde la revisión manual se reemplaza por un dashboard de evals personalizables puntuadas por agentes.

## De los PR a los Trails

La tesis de Entire es que el bottleneck del desarrollo ya no es escribir código —los agentes se encargan— sino **revisarlo**. Dohmke lo describió en su keynote en AGNTCon + MCPcon (San José): los agentes producen más cambios y con más código del que un humano puede digerir. "Abro un pull request y me doy cuenta de que no tengo idea de qué hace todo ese código", contó de su propia experiencia usando coding agents.

Trails ataca justo eso. En vez de diff a mano, el equipo configura **evals que corren en cada push**: qué tan riesgoso es el cambio, cuánto *intent drift* acumuló la sesión larga con LLM, etc. Los agentes puntúan y el humano prioriza desde ahí. La plataforma también trae un **servidor Git-compatible** (hosting nativo de repos privados desde ya; públicos y self-hosted en el roadmap) y la funcionalidad de **continuous memory** para agentes con la que partieron.

## ¿Le alcanza para competir?

Hace un año Dohmke decía que no planeaba competir con GitHub. Con el lanzamiento de esta semana, eso quedó en la historia. El escenario es obviamente desigual —ecosistema, integraciones, hábito— pero el timing no es casual: toda la industria siente que el pull request de 2008 fue diseñado para otro tipo de desarrollador.

Para equipos ya ahogados en PRs gigantes generados por agentes, Entire es de lo más interesante que ha salido en devtools este año. Para el resto, al menos, es una señal clara de hacia dónde se mueve la conversación: **la revisión de código es el próximo campo de batalla del agentic coding**.
