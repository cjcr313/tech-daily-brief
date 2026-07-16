---
title: "Cloudflare Content Independence Day año 2: controlar bots de IA ya no es 'bloquear todo'"
author: Carlos
pubDatetime: 2026-07-16T10:00:00Z
slug: cloudflare-content-independence-day-agentes-ia
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Infraestructura
description: "Cloudflare lanzó controles granulares de bots de IA para todos sus clientes (incluso free tier): Search, Agent y Training. 52% del tráfico de crawlers ya es para entrenamiento de IA."
---

Hace un año, Cloudflare declaró el primer **Content Independence Day**: bloqueo por defecto de crawlers de IA para nuevos dominios, más un marketplace de Pay-Per-Crawl. La idea era simple: si los bots de IA se llevan tu contenido para entrenar modelos, debería haber compensación.

Hoy, el problema mutó. Ya no se trata solo de "bloquear IA". Se trata de que **el tráfico de internet ya no es mayoritariamente humano**, y los sitios necesitan herramientas más finas para decidir qué permiten y qué no.

## La nueva taxonomía de bots

Cloudflare ahora clasifica el tráfico de IA en tres categorías que cualquier cliente —incluido el plan gratis— puede gestionar de forma independiente:

- **Search:** bots que indexan tu contenido para responder preguntas después (ej. buscadores tradicionales y AI search engines). Acá esperas tráfico de referral como compensación.
- **Agent:** bots actuando en tiempo real en nombre de un humano (ej. ChatGPT-User, Gemini o Claude usando un navegador). Hay alguien al otro lado esperando una respuesta.
- **Training:** crawlers que se llevan tu contenido para entrenar o hacer fine-tuning de modelos. Este es el caso donde más se justifica bloquear o cobrar.

## Los datos son brutales

En el reporte del agentic internet que publicaron, hay cifras para asustarse:

- **52% de las peticiones de crawlers** son para entrenamiento de IA (junio 2026), arriba del 22% en primavera de 2025.
- **30% de la humanidad** (2.5 billones de usuarios) ya usa IA generativa regularmente. La curva de adopción va a velocidad 2x comparada con los smartphones.
- Por cada hora que la gente pasa buscando información online, **solo 15 minutos son en la web abierta**. El resto se lo llevan las AI answer engines.

## ¿Por qué esto importa para infra/DevOps?

Si gestionas sitios web o APIs, esto cambia el juego:

1. **El bloqueo binario ya no funciona.** No puedes simplemente bloquear todo lo que no sea humano, porque perderías visibilidad en buscadores y agents que sí te dan valor.
2. **Pay-Per-Crawl es real.** Cloudflare está construyendo un marketplace donde los sites pueden cobrar por crawl. Esto podría transformar la economía del contenido.
3. **La web "agentic" necesita infraestructura diferente.** Los AI agents interactúan distinto: hacen requests en tiempo real, esperan respuestas estructuradas, y no siguen el patrón de "crawlea y muestra links" que funcionó por 30 años.

Cloudflare está apostando fuerte a ser **la capa de control del internet agentic**. Y con ~20% del web pasando por su red, tienen la posición para hacerlo.

> **Fuente:** [Cloudflare Blog - AI traffic options](https://blog.cloudflare.com/content-independence-day-ai-options/), [Cloudflare Blog - Agentic Internet Report](https://blog.cloudflare.com/agentic-internet-bot-report/)
