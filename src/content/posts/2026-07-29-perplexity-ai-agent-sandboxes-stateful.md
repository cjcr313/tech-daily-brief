---
title: "Perplexity se sincera: por qué los sandboxes de agentes IA son un cacho de construir"
author: Carlos
pubDatetime: 2026-07-29T18:00:00Z
slug: perplexity-ai-agent-sandboxes-stateful
featured: false
draft: false
tags:
  - Arquitectura
  - Cloud
  - IA
description: "El VP de Infraestructura de Perplexity explica los desafíos de manejar el estado (pausar, resumir y forkear) en millones de sandboxes para agentes de IA."
---

![Placeholder](../../assets/images/placeholder.jpg)


Armar la infraestructura para que los agentes de IA corran seguros no es llegar y llevar. En una entrevista reciente con The New Stack, Nate Kupp (VP de Infraestructura de Perplexity) tiró la dura: **"los sistemas con estado (stateful) son increíblemente difíciles de construir"**.

## El problema del estado

Mientras todos hablan de modelos más grandes, Perplexity se topó con un problema de ingeniería brígido. Sus asistentes (Computer AI) necesitan **sandboxes** que no solo corran código, sino que mantengan el estado a lo largo del tiempo. Estamos hablando de sesiones que a veces se ejecutan por días o semanas enteras.

Kupp explicó que el verdadero dolor de cabeza fue construir un sistema que permita:
- **Pausar** la ejecución de un agente.
- **Resumir** esa ejecución tiempo después sin perder el contexto ni los datos en memoria.
- **Forkear** (bifurcar) sesiones a escala de millones de sandboxes.

## Una bestia distinta

Lo que descubrieron en el camino es que las necesidades de un sistema de agentes a esta escala son fundamentalmente distintas a lo que ofrecen los proveedores tradicionales de infraestructura en la nube. Ya no basta con levantar un contenedor efímero y matarlo cuando termina; necesitas un entorno que viva, espere, reaccione y persista, sin que los costos de memoria y cómputo se te vayan a las nubes (ni comprometiendo la seguridad).

Esto confirma la tendencia que venimos viendo: el tooling para agentes autónomos se está convirtiendo en una disciplina completamente nueva dentro del mundo Cloud Native, muy distinta a la forma en que tradicionalmente hacíamos despliegues de microservicios.