---
title: "Los bots ya superan a los humanos en la web y Cloudflare saca artillería: Adaptive Intelligence"
author: Carlos
pubDatetime: 2026-09-18T15:00:00Z
slug: cloudflare-bots-superan-humanos-adaptive-intelligence
featured: false
draft: false
tags:
  - Infraestructura
  - DevOps
  - IA
description: "Cloudflare reporta que casi el 60% del tráfico web ya es de bots y lanza Adaptive Intelligence, un motor de defensa adaptativo que analiza más de un billón de visitas diarias."
---

![Ilustración de una red de defensa que filtra tráfico de bots e IA sobre tráfico humano en la web](../../assets/images/2026-09-18-cloudflare-bots-superan-humanos-adaptive-intelligence.jpg)

El cruce que todos veían venir llegó antes de lo previsto. Según Cloudflare, en **mayo de 2026** los bots y agentes de IA superaron al tráfico humano: casi el **60% de las requests** que reciben los sitios web ya vienen de máquinas. Su CEO, Matthew Prince, esperaba ese punto recién para fines del próximo año. Se adelantó un año y medio.

Y la respuesta de la compañía vino en dos frentes: una defensa técnica y una postura comercial.

## Adaptive Intelligence: defensa en tiempo real

Cloudflare presentó **Adaptive Intelligence**, un motor de detección adaptativo para su plataforma de mitigación de bots maliciosos. La gracia está en que **analiza más de un billón de visitas web diarias para generar y modificar reglas de detección automáticamente**, sin intervención manual.

La idea es simple: los atacantes ajustan sus bots constantemente, así que las reglas estáticas quedan obsoletas rápido. Con Adaptive Intelligence, la defensa se recalibra sola a medida que el tráfico cambia, haciendo más difícil que los atacantes esquiven los controles con el mismo truco dos veces.

## La pelea por quién paga por el tráfico de IA

En paralelo, Cloudflare está poniendo presión para que las empresas de IA **paguen por el tráfico que sus agentes y crawlers consumen**. La empresa lanzó una serie de herramientas para que los sitios recuperen control:

- **Disallow AI Training**: un toggle que deja a un sitio rechazar crawlers de entrenamiento sin salir de los buscadores (adiós al falso dilema "o me indexan o me roban contenido").
- **Accountable designation para AI crawling**: una etiqueta que distingue a los crawlers que se portan bien de los que no.
- **Bloqueo por defecto de agentes de IA en páginas con publicidad**: en dominios que muestran anuncios, Cloudflare ahora permite buscadores, pero rechaza el entrenamiento de IA y bloquea agentes dirigidos por el usuario (chat fetch bots y browser-use agents).

## El dato que resume todo

Los crawlers de "uso mixto" —esos que indexan y de paso alimentan modelos— representan un **36.6% del tráfico verificado de crawlers**. Es decir, la línea entre "buscador" y "bot de entrenamiento" ya no existe, y Cloudflare está apostando a que la forma de ordenar el caos es transparencia + control + una factura para quien consume a escala industrial.

Para equipos de infraestructura, esto tiene dos lecturas: defensa contra bots que se auto-ajusta (menos mantención de reglas), y un ecosistema donde el tráfico sintético deja de ser un costo invisible para los sitios.
