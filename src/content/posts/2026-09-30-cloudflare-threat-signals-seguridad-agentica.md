---
title: "Cloudflare lanza Threat Signals: inteligencia de amenazas open source como skills para agentes, gratis para todas las cuentas"
author: Carlos
pubDatetime: 2026-09-30T03:10:00Z
slug: cloudflare-threat-signals-seguridad-agentica
featured: false
draft: false
tags:
  - Seguridad
  - Cloud
description: "En el día de seguridad de su Birthday Week, Cloudflare lanzó Threat Signals (skills agénticas de threat intelligence gratuitas), Application Profiles para positive security y su framework de seguridad adaptativa para la era de la IA."
---

![Ilustración editorial de un escudo formado por señales de radar y ondas de red protegiendo servidores, azul oscuro con destellos naranjas de alerta](../../assets/images/2026-09-30-cloudflare-threat-signals-seguridad-agentica.jpg)

La Birthday Week de Cloudflare siguió con todo y esta vez tocó el día de seguridad. Tres anuncios que juntos dibujan hacia dónde va la protección de aplicaciones cuando el que ataca y el que defiende tienen IA.

## Threat Signals: threat intel como skill agéntica

El anuncio estelar: **Threat Signals**, que entrega **inteligencia de amenazas open source empaquetada como "agentic skills", gratis para toda cuenta de Cloudflare**. La lógica es potente: en vez de que tu equipo (o tu agente de seguridad) ande cazando feeds de IoCs dispersos, las señales quedan disponibles como una skill que un agente puede consultar directamente durante una investigación. La threat intelligence deja de ser un dashboard que miras y pasa a ser una herramienta que tu agente *usa*. Democratizar eso en todas las cuentas, gratuito, es un golpe interesante al modelo de vender intel premium.

## Application Profiles: positive security en serio

El segundo lanzamiento: **[Application Profiles](https://blog.cloudflare.com/application-profiles/)**, para aplicar **positive security**: en vez de bloquear lo malo conocido (negative security), defines cómo se supone que tu aplicación *debe* comportarse —rutas válidas, métodos, comportamientos esperados— y todo lo que se sale del perfil se corta. Menos firma y más contrato: atípico para un WAF tradicional, natural para un mundo donde los ataques nuevos los genera un modelo.

## Seguridad adaptativa para la era IA

Y el marco conceptual que amarra todo: **[adaptive application security for the AI era](https://blog.cloudflare.com/ai-era-framework/)** — conectar código, tráfico e inteligencia para detectar y frenar ataques. Cloudflare viene insistiendo en que con agentes generando código y ataques sintéticos, la defensa tiene que ser igual de dinámica: contexto de la app + señal de tráfico + inteligencia, en loop continuo.

**El punto:** la seguridad está mutando de "reglas que escribe un humano" a "contexto que consulta un agente". Que la intel de amenazas sea gratis y agéntica acelera esa mutación para todos, no solo para enterprises.

**Fuentes:** [Threat Signals](https://blog.cloudflare.com/threat-signals/) · [Application Profiles](https://blog.cloudflare.com/application-profiles/) · [AI era framework](https://blog.cloudflare.com/ai-era-framework/)
