---
title: "Cloudflare open-sourcea BEACON: miles de millones de mediciones RUM en BigQuery"
author: Carlos
pubDatetime: 2026-09-28T21:00:00Z
slug: cloudflare-beacon-dataset-rum-bigquery
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
description: "Cloudflare publicó BEACON, un dataset anonimizado con miles de millones de mediciones de rendimiento real (RUM) de 10.000 sitios, actualizado a diario en Google BigQuery."
---

![Ilustración editorial de datos de rendimiento web fluyendo como haces de luz sobre un mapamundi, con histogramas y percentiles](../../assets/images/2026-09-28-cloudflare-beacon-dataset-rum-bigquery.jpg)

"Funciona en mi máquina" es la trampa clásica: quien lee esto probablemente está en un laptop potente con Wi-Fi veloz, lejos de la realidad de alguien con un celular de hace 4 años, batería baja y un plan de datos capado a 2 GB. Para cerrar esa brecha de percepción con datos objetivos, Cloudflare publicó el dataset **BEACON** (*Browser Experience Across Cloudflare's Observed Network*).

## Qué es

BEACON es un dataset anonimizado construido con **miles de millones de mediciones de rendimiento del mundo real**, tomadas de **10.000 de los sitios más grandes** de la red de Cloudflare. Cubre todos los motores de navegador principales, se actualiza a diario en Google BigQuery y usa los estándares del [RUM Archive](https://rumarchive.com/), un proyecto comunitario de Real User Monitoring. Es, básicamente, expandir ese proyecto 100 veces.

## Qué revela

Publica los tres **Core Web Vitals** — LCP, CLS e INP — como **histogramas completos**, no promedios. Eso te deja calcular cualquier percentil, incluido el long tail donde la industria todavía no logra entregar experiencias rápidas para todos.

Un hallazgo llamativo: WebKit (el único motor en iOS) rinde mejor en general, pero no es universal — en **46 países** donde WebKit supera el 10% del tráfico, su LCP, INP o ambos son al menos un 10% peores que los navegadores basados en Blink (Chrome, Edge, Opera).

Fuente: [Cloudflare blog](https://blog.cloudflare.com/how-fast-is-the-web/).
