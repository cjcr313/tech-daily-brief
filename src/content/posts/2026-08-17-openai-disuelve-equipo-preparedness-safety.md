---
title: "OpenAI disuelve su equipo de Preparedness camino al IPO: la seguridad sigue perdiendo asiento"
author: Carlos
pubDatetime: 2026-08-17T04:15:00Z
slug: openai-disuelve-equipo-preparedness-safety
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Según Financial Times, OpenAI desmanteló a fines de julio el equipo que evaluaba riesgos de sus modelos. Es el tercer equipo de seguridad que desaparece mientras la empresa se prepara para salir a bolsa."
---

![Ilustración editorial de una silla vacía en una sala de control de seguridad tecnológica con monitores apagándose, estilo tech editorial](../../assets/images/2026-08-17-openai-disuelve-equipo-preparedness-safety.jpg)

No es una buena semana para los que creen que los labs de frontera deberían evaluar sus propios riesgos. Según reveló el **Financial Times**, OpenAI **disolvió su equipo de Preparedness a fines de julio**. ¿Su pega? Evaluar si los modelos planteaban riesgos serios y desarrollar formas de mitigarlos. Ya sabes, detalles menores como evitar que un modelo [se escape del sandbox y hackee a otra empresa](/posts/gpt56-sol-escapa-sandbox-hackea-huggingface/).

## Qué cambió exactamente

La responsabilidad del equipo no desapareció por completo, pero se desparramó: las evaluaciones se dividieron por área (bio, cyber) y **se repartieron entre equipos existentes** de la compañía. El head del equipo, **Dylan Scandinaro** —que OpenAI le había robado a Anthropic en febrero— ahora se enfocará en las implicaciones de la IA con "auto-mejora recursiva".

## El patrón es lo preocupante

Esto no es un hecho aislado, es el tercer tablero que cae:

- Ya habían disuelto el equipo de **AGI Readiness**
- Ya habían disuelto **Superalignment**
- Ahora se suma **Preparedness**

Y en paralelo, las salidas: la lead de ética **Chloé Bakalar**, el Chief Futurist **Josh Achiam** y el head of safety **Johannes Heidecke** colgaron los guantes hace poco. Jan Leike —que renunció a OpenAI en 2024— le dijo al FT que la empresa está ignorando la seguridad en favor de crear *"shiny products"*.

## El contexto que lo explica (y lo hace peor)

Todo esto ocurre mientras OpenAI se prepara para un **IPO gigante** —con Anthropic corriendo para golpear primero la campana en octubre con un target de US$2 billones—. Las presiones de mercado no son un buen ambiente para equipos que dicen "espera, esto podría ser peligroso".

## Por qué importa para el que opera infra

Si tu equipo está metiendo agentes IA en pipelines, CI/CD o acceso a producción, la lección es simple: **la autorregulación del proveedor no es tu control de seguridad**. Los frameworks de evals, guardrails y permisos los tienes que armar tú, porque el vendor está ajetreado embelleciendo productos y preparando roadshows con inversionistas.

**Fuentes:** [The Verge](https://www.theverge.com/ai-artificial-intelligence/980817/openai-disbands-preparedness-team), [Financial Times](https://www.ft.com/content/53082739-7714-4aae-9816-e55ab423cbee)
