---
title: "OpenAI lanza GPT-6.1 Terra: computer use de calidad frontier a la mitad del precio"
author: Carlos
pubDatetime: 2026-10-26T21:05:00Z
slug: openai-gpt-6-1-terra-computer-use-barato
featured: false
draft: false
tags:
  - IA
  - DevOps
description: "GPT-6.1 Terra apunta al trabajo de oficina automatizable: razonamiento visual, computer use y escritura más natural, con precios de API 50% menores que GPT-5.6 Terra y costos por tarea hasta 9x menores que Claude Opus 5.5."
---

![Ilustración editorial tech isométrica de un núcleo de IA veloz en forma de cometa luminosa guiando brazos robóticos que interactúan con interfaces de escritorio, formularios y líneas de tiempo de video, haces de luz eficientes y monedas simbolizando bajo costo, paleta naranja e índigo con acentos cian, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-26-openai-gpt-6-1-terra-computer-use-barato.jpg)

Mientras el mundo discute qué modelo frontier gana el benchmark de la semana, OpenAI sacó hoy algo distinto: **GPT-6.1 Terra**, un modelo rápido y barato pensado para el trabajo real de todos los días — leer facturas, rellenar formularios, editar video, interpretar planos técnicos y operar software de escritorio.

La apuesta es clara: no competir por ser el más brillante, sino por ser **el más eficiente en tareas de alto volumen**. Y los números le dan la razón.

## Lo que trae Terra

- **Razonamiento visual detallado**: en MMMU-Pro casi iguala a GPT-6 Astra y GPT-6.1 Sol, a una fracción del costo.
- **Computer use serio**: en el benchmark *Agents' Last Exam* (tareas profesionales como convertir planos arquitectónicos a 3D o hacer logs time-coded de películas) supera a GPT-5.6 Terra por 15 puntos porcentuales a un tercio del costo. Empata a GPT-6 Astra pagando un décimo por token.
- **Velocidad**: completa tareas más de 3 veces más rápido que GPT-6 Astra y GPT-6.1 Sol.
- **Menos alucinaciones**: en su benchmark interno de prompts que inducen errores, la tasa bajó de 53,6% (GPT-5.6 Terra) a 16,7% en esfuerzo bajo; en esfuerzo máximo llega a 4,3%.

## El golpe a la competencia: costo por tarea

Aquí está el dato que le va a doler a más de alguno: en esfuerzo máximo, Terra es **más de 3 veces más eficiente en tokens que Claude Opus 5.5 y un cuarto de su precio por token**, lo que se traduce en un **~9x menor costo por tarea**.

En coding, Terminal-Bench 4.0 a máximo esfuerzo resuelve **50,3% de las tareas**, más del doble del 21,5% de GPT-5.6 Terra. Eso sí, para las tareas más complejas, GPT-6.1 Sol y GPT-6 Astra siguen siendo la mejor opción — Terra es el caballo de batalla, no el pura sangre.

## Precios y disponibilidad

- API como `gpt-6.1-terra`: **US$1 por millón de tokens de entrada**, US$0,05 cached input, **US$5 por millón de salida**. La mitad del precio de GPT-5.6 Terra y GPT-6.1 Sol.
- Ya disponible para Plus, Pro, Enterprise y Edu en **ChatGPT Work y Codex**, donde la misma cuota de uso rinde más que con GPT-5.6 Terra.
- En seguridad, cumple el umbral **Critical** del Preparedness Framework en ciberseguridad y muestra buena resistencia a prompt injection según sus evaluaciones.

## La lectura rápida

Terra es la respuesta de OpenAI a la economía de agentes: si vas a automatizar miles de facturas, formularios o flujos de escritorio al día, el costo por tarea es lo único que importa. Con este precio, automatizar ese tipo de trabajo chuncho y repetitivo deja de ser piloto y pasa a ser presupuesto. El system card completo está en [deploymentsafety.openai.com](https://deploymentsafety.openai.com/gpt-6-1-terra) y el anuncio oficial en [openai.com](https://openai.com/index/introducing-gpt-6-1-terra/).

**Fuente:** [OpenAI — Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)
