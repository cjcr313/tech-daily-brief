---
title: "Cloudflare lanza Precursor: detección de bots que vigila toda la sesión, no solo la puerta de entrada"
author: Carlos
pubDatetime: 2026-07-26T18:10:00Z
slug: cloudflare-precursor-deteccion-bots-sesion-completa
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "Cloudflare GA de Precursor: motor de validación conductual browser-based que detecta bots analizando toda la sesión. Sin CAPTCHAs, consciente de privacidad."
---

![Placeholder](../../assets/images/placeholder.jpg)


Cloudflare anunció la disponibilidad general de **Precursor**, un motor de validación conductual que corre en el browser y analiza el comportamiento del visitante durante **toda la sesión**, no solo en el checkpoint de login o checkout.

## El gap que cierra

Hoy Cloudflare procesa ~3 mil millones de checks de Turnstile al día (su reemplazo del CAPTCHA tradicional). Turnstile funciona bien en el momento del checkpoint: ¿eres humano en esta fracción de segundo?

Pero entre login y checkout hay toda una sesión de navegación donde **no hay validación continua**. Ahí es donde entran los bots sofisticados que pasan Turnstile y luego hacen scraping, credential stuffing, o fraud a ritmo industrial.

Precursor llena ese gap.

## Cómo funciona

Cloudflare inyecta un script pequeño en las páginas a medida que pasan por su edge network. **No requiere code changes ni integración** del lado del sitio. El script monitorea patrones de comportamiento del visitante:

- **Timing y cadencia:** cómo se mueve el mouse (los humanos mueven en arcos por la biomecánica de la muñeca; los bots en líneas rectas)
- **Precisión de clicks:** los humanos tienen micro-temblores y imprecisión; los bots clickean con precisión imposible
- **Patrones repetitivos:** la automatización tiende a repetirse; incluso disfrazada, acumula "tells" a lo largo de una sesión

Estos patrones se transforman en un score que alimenta el bot score existente de Cloudflare. **Solo se loguean patrones agregados**, no inputs individuales, para mantener privacidad.

## Dos modos

1. **Low-friction (observación):** Corre silencioso, aprende qué sesiones son normales en tu sitio. Recomendado para empezar.
2. **Strict (enforcement):** Aplica un challenge cuando una sesión no se ve verificada.

## El contexto de IA agents

Esto no es solo sobre bots maliciosos. Con la proliferación de **AI agents navegando sitios en nombre de usuarios**, un negocio quiere dejar pasar algunos agentes (los que mandó un cliente legítimo) y bloquear otros (scrapers no autorizados). Precursor está diseñado para distinguir entre ellos.

El modelo de negocio también es interesante: **Precursor es gratis hasta que se convierta en parte de Enterprise Bot Management**. Cloudflare está usando el período gratuito para entrenar el modelo con más tráfico real antes de monetizar.

## Por qué importa

Si administras infraestructura web o seguridad, esto es relevante porque:

1. **Reduce fricción para usuarios reales.** Menos challenges, menos CAPTCHAs, mejor conversión.
2. **Cierra el gap sesión-wide.** Turnstile tapona la puerta; Precursor vigila toda la sala.
3. **Zero config.** Se activa desde el dashboard de Cloudflare, sin tocar tu app.
4. **AI agent traffic va a seguir creciendo.** Tener una forma de distinguir agent bueno de bot malo va a ser cada vez más crítico.

Cloudflare sigue aprovechando su posición de edge network (~20% del tráfico web global) para construir servicios de valor agregado que son difíciles de replicar desde otra posición. Precursor es otro ejemplo de eso.
