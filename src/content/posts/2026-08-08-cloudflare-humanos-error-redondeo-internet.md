---
title: "Cloudflare: \"los humanos serán un error de redondeo en internet\" mientras el tráfico de bots crece 1000x"
author: Carlos
pubDatetime: 2026-08-08T18:00:00Z
slug: cloudflare-humanos-error-redondeo-internet
featured: false
draft: false
tags:
  - Cloud
  - Observabilidad
  - IA
description: "El CFO de Cloudflare predice que el tráfico no-humano será 1000x mayor que el humano en 5 años. Q2 2026: revenue US$696M, +36% YoY."
---

![Cloudflare humans rounding error internet traffic](../../assets/images/2026-08-08-cloudflare-humanos-error-redondeo-internet.jpg)

Una frase para el marco: **"los humanos serán un error de redondeo en internet"**. No es un clickbait de Twitter — lo dijo Thomas Seifert, CFO de Cloudflare, durante la llamada de earnings del Q2 2026.

## La predicción

Cloudflare ya se había equivocado antes con sus pronósticos de tráfico. Habían dicho que el tráfico máquina superaría al humano en 2027. Se equivocaron: **sucedió en mayo de 2026**, casi un año antes.

Ahora Seifert fue más lejos: si las tendencias actuales continúan, en **5 años el tráfico no-humano será hasta 1.000 veces mayor** que el tráfico humano. No porque el tráfico humano baje — al contrario, sigue creciendo — sino porque el tráfico de bots y agentes de IA está explotando.

> "Humans will be a rounding error on the internet, not because human traffic goes down, but that's just how fast we're seeing non-human traffic grow."

## Los números del Q2 2026

Cloudflare reportó:
- **Revenue: US$696 millones** (+36% YoY)
- **Pérdidas: US$205.7 millones** (más del triple que el año anterior)
- **Capex proyectado: ~US$430 millones** (solo 14-15% del revenue guidado de ~US$2.87 mil millones)
- **Acciones: +16% en after-hours**, nuevo máximo histórico, +68% YTD

Las pérdidas no importaron a los inversionistas. Lo que importó fue el crecimiento de revenue y el hecho de que Cloudflare firmó números récord de grandes clientes enterprise.

## El tiro a los hyperscalers

El CEO Matthew Prince aprovechó la llamada para meterle una estocada a AWS, Azure y Google Cloud:

> "If you're selling what is just commodity compute, if you're basically letting an AI company use your balance sheet and your credit rating in order to buy servers that are the same as everybody else's servers, then that's just not attractive business for us."

La estrategia de Cloudflare es clarísima: **no alquilar servidores**. En vez de competir en "compute commodity", venden trabajo hecho (serverless, Workers, AI inference optimizada). Prince dijo que los hyperscalers tienen tasas de utilización de GPU "super bajas" y que su modelo de negocio es básicamente arrendar cajas.

Mientras los grandes gastan cientos de miles de millones en capex, Cloudflare se jacta de gastar una fracción. Su apuesta es exprimir cada dólar con scheduling inteligente y eficiencia.

## ¿Y la seguridad?

Seifert también advirtió que más tráfico máquina = más amenazas de seguridad. Lo cual, convenientemente, es justo lo que Cloudflare vende. Pero no es descabellado: si el 99.9% del tráfico va a ser de bots, los sistemas de defensa tienen que cambiar fundamentalmente.

## El contexto que importa

Para los teams de infraestructura y platform engineering, esto refuerza una tendencia que ya estamos viendo:
- **WAF y bot management** dejan de ser un feature y pasan a ser infraestructura crítica
- **Rate limiting y observabilidad del tráfico** necesitan evolucionar para distinguir agentes legítimos de maliciosos
- El modelo de **"compute as a commodity"** de los hyperscalers tiene los días contados si Cloudflare tiene razón sobre la eficiencia

Cloudflare está construyendo un narrative poderosa: la internet del futuro es de máquinas, y ellos son la capa de abstracción. Si tienen razón, los US$430M de capex se ven ridículamente eficientes frente a los US$195-205 mil millones que AWS, Google y Microsoft están proyectando para 2026.
