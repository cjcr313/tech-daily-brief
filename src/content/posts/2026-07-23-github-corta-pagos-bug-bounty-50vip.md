---
title: "GitHub corta los pagos de bug bounty a la mitad y manda las recompensas top a tier VIP"
author: Carlos
pubDatetime: 2026-07-23T16:00:00Z
slug: github-corta-pagos-bug-bounty-50vip
featured: false
draft: false
tags:
  - DevOps
  - Seguridad
description: "Desde el 27 de julio, GitHub reduce los pagos públicos de bug bounty al menos 50% en cada nivel. Las recompensas máximas se mueven a un programa VIP cerrado."
---

GitHub anunció un cambio brutal en su programa de bug bounty: **desde el 27 de julio, los pagos públicos se reducen al menos a la mitad** en todos los niveles de severidad. Y las recompensas más altas se mudan a un programa VIP cerrado, solo por invitación.

## Los números

La tabla anterior vs la nueva:

| Severidad | Antes (rango) | Ahora (fijo) | Caída |
|-----------|---------------|--------------|-------|
| Low | $617 - $2,000 | **$250** | ~59% |
| Medium | $4,000 - $10,000 | **$2,000** | ~50% |
| High | $10,000 - $20,000 | **$5,000** | ~50% |
| Critical | $20,000 - $30,000+ | **$10,000** | ~50%+ |

El programa VIP (invite-only) paga **$30,000+ para critical**, $20,000 para high, $7,500 para medium y $1,000 para low.

Para calificar al VIP necesitas reportar: al menos 1 critical, 2 high, 4 medium o 7 low. Pero GitHub no aclaró si cumplir esos umbrales garantiza la invitación.

## La justificación

GitHub lo plantea como un cambio de filosofía: calidad sobre cantidad. Textual:

> *"You don't earn more by submitting more. You earn more by submitting better."*

Los pagos fijos (sin rangos) buscan eliminar incertidumbre y reducir overhead de triage. También podría haber bonuses discrecionales para trabajo excepcional.

## El factor IA que nadie menciona

El cambio llega en un momento particular: **la IA está haciendo que encontrar vulnerabilidades sea más barato y rápido**. Más investigadores pueden generar hallazgos potenciales con herramientas automatizadas, y los equipos internos de GitHub pueden escanear código, validar y parchear antes de que llegue un reporte externo.

Un día antes del anuncio, **Google lanzó Gemini 3.5 Flash Cyber**, un modelo fine-tuned para encontrar y parchear vulnerabilidades. En tests internos de Google, encontró 55 bugs únicos confirmados en V8 (vs 47 del Flash mainline y 36 de Claude Opus 4.6). Incluso generó un exploit RCE 100% confiable en menos de 2 horas.

Cuando tu propio AI puede encontrar los bugs antes que los investigadores externos, los bug bounties públicos dejan de ser el canal principal de descubrimiento. GitHub no lo dice explícitamente, pero la escritura está en la pared.

## ¿Impacto real?

Para investigadores freelance que viven de bug bounties, esto es un golpe duro. Los hallazgos critical que pagaban $30k+ ahora pagan $10k en el programa público, y el VIP es exclusivo.

Para el ecosistema de seguridad, plantea preguntas incómodas: si las plataformas reducen incentivos públicos mientras internalizan el descubrimiento con IA, **¿qué pasa con los researchers independientes que complementan el trabajo interno?**

Los reportes enviados antes del 27 de julio mantienen la estructura anterior, así que hay ventana para los que ya están en cola.

> 💡 **Lectura entre líneas:** GitHub está professionalizando su security research, pero el mensaje para la comunidad pública es claro: si quieren la paga real, necesitas entrar al club VIP. Y el club decide a quién invita.
