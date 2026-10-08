---
title: "Pwn2Own Irlanda: 32 zero-days el primer día, y los blancos nuevos son OpenAI Codex y LiteLLM"
author: Carlos
pubDatetime: 2026-10-08T15:06:00Z
slug: pwn2own-irlanda-2026-codex-litellm-zero-days
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
  - IA
description: "El primer día de Pwn2Own Ireland 2026 pagó US$388.500 por 32 zero-days. Los exploit más comentados ya no son solo celulares: cayeron OpenAI Codex, LiteLLM y la Autonomous AI Database de Oracle."
---

![Ilustración editorial de un candado digital brillante siendo forzado por herramientas flotantes frente a un escenario de concurso con focos de luz, paleta oscura con acentos naranjos, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-08-pwn2own-irlanda-2026-codex-litellm-zero-days.jpg)

El **Pwn2Own Ireland 2026** arrancó con todo el **6 de octubre**: **32 vulnerabilidades zero-day** únicas explotadas en un solo día y **US$388.500** en premios. Pero la noticia que le importa a quien lee este blog no son los celulares: es que **las herramientas de desarrollo de IA ya son superficie de ataque de primera clase**.

## Codex y LiteLLM, hackeados en vivo

- **OpenAI Codex** cayó con un solo bug de **inyección de argumentos**, explotado por **Ikotas Labs** por US$40.000. ZDI identificó el tipo de fallo pero aún no publica detalles ni CVE.
- **LiteLLM** — el gateway de LLMs que medio mundo usa para rutear entre proveedores — sufrió dos golpes: **Taisic Yun (Xint)** encadenó validación de entrada impropia + inyección de código y obtuvo una **reverse shell** (US$40.000), y **Out of Bounds** lo explotó con 4 bugs (US$15.000).
- **Oracle Autonomous AI Database** también cayó, con una cadena de **5 flaws** de VinSOC por otros US$40.000.

Traducción: los gateways de LLM y los agentes de código pasaron de ser "escenario de riesgo" a **blanco con bounty pagado**. Si LiteLLM o Codex están en tu pipeline, sigue los advisories de cerca porque estos bugs van a parchearse rápido... o no tan rápido.

## El resto del día

- **Samsung Galaxy S26**: tres equipos lo explotaron con cadenas de 4 bugs cada una (Viettel Cyber Security se llevó US$31.250). Varias cadenas reutilizaban bugs que Samsung ya conocía — ZDI los marca como "colisiones" y paga menos.
- **Sonos Era 300**: US$50.000 para McCaulay Hudson con un out-of-bounds write + format string.
- **Philips Hue Bridge Pro**: VinSOC soltó **7 zero-days** en un solo appliance (US$40.000).
- **Pixel 10**: el único fracaso del día — White Noise Club no completó el exploit dentro del tiempo límite, lo que no significa que el teléfono esté limpio.

## La moraleja

Un concurso demoledor para el ego vendor, pero pedagógico: la superficie de ataque ya no termina en tu celular o tu IoT. **La cadena de herramientas de IA — gateways, agentes de código, bases de datos "AI" — es hoy parte del perímetro.** Y hay gente cobrando dinero por romperla.

Los detalles completos están en los resultados oficiales de ZDI; quedan dos días más de concurso, así que probablemente esto sigue creciendo.
