---
title: "Anthropic lanza Claude Dashboards y Claude Motion: dashboards vivos con la query a la vista y animaciones escritas como código"
author: Carlos
pubDatetime: 2026-10-09T03:05:00Z
slug: anthropic-claude-dashboards-motion-beta
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Anthropic metió a Claude en el negocio del BI: Claude Dashboards construye dashboards vivos desde preguntas en lenguaje natural (con la query SQL visible) y Claude Motion genera animaciones explicativas como código editable."
---

![Ilustración editorial isométrica de dashboards de datos interactivos con gráficos de líneas y barras flotando junto a una línea de tiempo de animación con botón de play, degradado azul profundo con acentos turquesa y ámbar, estilo flat profesional, sin texto](../../assets/images/2026-10-09-anthropic-claude-dashboards-motion-beta.jpg)

Anthropic sigue apretando la máquina de productos y ayer [anunció dos herramientas nuevas para Claude](https://claude.com/resources/articles/dashboards-and-motion): **Claude Dashboards** y **Claude Motion**, ambas en beta. La movida apunta directo al espacio de productividad empresarial que OpenAI y Google también persiguen — Reuters lo enmarcó como la pelea por la suite de oficina con IA de fondo.

## Claude Dashboards: BI conversacional con transparencia forzada

La idea es simple: conectas tu warehouse (**BigQuery, Snowflake, Redshift, ClickHouse, Databricks**) o un CRM como Salesforce, haces una pregunta en español natural —"¿cómo van los signups de esta semana contra el mes pasado?"— y Claude escribe la query, arma el dashboard y **lo mantiene actualizado a medida que cambian los datos**.

Lo interesante para el público técnico es el diseño: **cada gráfico muestra la query que lo genera**, puedes hacer clic en cualquier número para ver de dónde salió, y cada visualización indica cuándo se refrescó por última vez. Nada de cajas negras — algo que las herramientas de BI tradicionales nunca resolvieron bien y que los asistentes de datos con IA suelen empeorar.

Anthropic es explícito en el posicionamiento: esto es para preguntas exploratorias rápidas. Cuando el análisis se pone serio, los dashboards **se exportan a Amplitude, Grafana, Hex, Mixpanel, Omni, Perplexity, PostHog o Sigma** (con Looker, monday.com y Tableau en camino). O sea: no vienen a matar a tu stack de BI, vienen a quedarse con la puerta de entrada.

## Claude Motion: animaciones como código, no video generado

Motion convierte reportes, gráficos o walkthroughs de producto en **animaciones cortas construidas como código** — sin modelo de video de por medio y sin personas generadas por IA. El resultado es editable línea por línea y se exporta como MP4. Piensa en el "explicador de 30 segundos" del informe trimestral, pero versionable en git en vez de ser un archivo de video que nadie sabe cómo se hizo.

## Planes y disponibilidad

- **Dashboards**: planes de pago (Pro desde US$17/mes anual, Max, Team, Enterprise).
- **Motion**: solo **Team y Enterprise** — señal de a quién le quiere vender Anthropic la historia completa.
- De paso, **Docs, Slides y Design salieron de beta** y llegaron a todos los planes, incluido el gratuito, con exportación real a PowerPoint/PDF y envío a Google Slides.
- Ojo: el Claude Design standalone **cierra el 14 de diciembre de 2026**; los design systems migran hacia Claude.

## El punto

La frase de Anthropic resume la tesis: "Claude hace la primera versión, y tú decides qué se comparte". Con la query visible por defecto y las animaciones como código editable, están apostando que la diferenciadora en herramientas ofimáticas con IA no es generar más rápido, sino **que el resultado sea auditable**. Para los que vivimos de datos, al menos el diseño de la apuesta se agradece.

**Fuentes:** [Anuncio de Anthropic](https://claude.com/resources/articles/dashboards-and-motion), [Reuters](https://ca.finance.yahoo.com/news/anthropic-launches-dashboard-animation-tools-190747503.html), [Digital Trends](https://www.digitaltrends.com/computing/claude-can-now-build-live-dashboards-and-animated-explainers-from-your-data/), [CellCog](https://cellcog.ai/blog/claude-dashboards-motion/)
