---
title: "Cloudflare suma observabilidad y guardrails a Browser Run"
author: Carlos
pubDatetime: 2026-09-20T15:00:00Z
slug: cloudflare-browser-run-observabilidad-session-recordings
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
  - IA
description: "Browser Run de Cloudflare estrena session recordings con panel Inspect (logs, red y DOM) y guardrails para limitar a qué hostnames pueden acceder los agentes de navegador."
---

![Ilustración editorial tech de un navegador en primer plano con paneles de logs, red y DOM flotando a su alrededor, un ojo observador supervisando una sesión de agente IA, tonos naranja y azul sobre fondo oscuro, estilo flat ilustrativo](../../assets/images/2026-09-20-cloudflare-browser-run-observabilidad-session-recordings.jpg)

Cloudflare le está metiendo seriedad a **Browser Run**, su servicio para que agentes de IA controlen un navegador. Las novedades atacan justo las dos grandes deudas de cualquier flujo de agentes en producción: **saber qué pasó** (observabilidad) y **controlar qué puede tocar** (seguridad).

## Session Recordings con panel Inspect

La estrella es el nuevo **panel Inspect** en las Session Recordings de Browser Run. Ahora puedes revisar qué hizo el agente **sin tener que reproducir la sesión**:

- **Logs**: busca la salida de consola capturada y filtra los mensajes.
- **Network**: revisa las peticiones HTTP/HTTPS que hizo la sesión.
- **DOM**: inspecciona el estado del documento en cualquier punto.

Para cualquiera que haya tenido que debuggear un agente de navegador fallando en producción, esto es la diferencia entre "reproducir a ciegas" y "mirar el registro y listo".

## Guardrails: hasta dónde puede navegar el agente

La otra pieza es **guardrails**, que limitan las peticiones de una sesión de Browser Run a un **conjunto de hostnames permitidos**. En criollo: puedes amarrar un workflow para que solo interactúe con tu sitio y sus subdominios, y nada más. Fundamental cuando dejas que un agente navegue la web con credenciales o datos sensibles en juego.

## Por qué importa

Browser Run se está transformando de un "navegador para agentes" a una **plataforma operable**: grabas, inspeccionas y restringes. Eso es exactamente lo que los equipos de infra y plataforma piden antes de dejar correr agentes de navegador en producción. Observabilidad + control de acceso = se puede confiar.

**Fuente:** Cloudflare changelog / community (septiembre 2026).
