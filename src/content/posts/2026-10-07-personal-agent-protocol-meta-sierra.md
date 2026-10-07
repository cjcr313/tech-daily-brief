---
title: "Meta y Sierra publican el Personal Agent Protocol: el OAuth para que los agentes compren por ti"
author: Carlos
pubDatetime: 2026-10-07T09:14:00Z
slug: personal-agent-protocol-meta-sierra
featured: false
draft: false
tags:
  - IA
  - Arquitectura
description: "Meta y Sierra lanzaron un estándar abierto basado en OAuth para que agentes personales se autentiquen con empresas. Walmart, Shopify y Stripe ya están adentro, y va directo contra el protocolo de Visa."
---

![Ilustración editorial de un agente de IA personal actuando como intermediario entre una persona y varias tiendas digitales, flujo de autorización con llaves y candados en un circuito limpio, estilo ilustración tech editorial en azules y corinto, sin texto](../../assets/images/2026-10-07-personal-agent-protocol-meta-sierra.jpg)

Cuando la gente pregunta "¿cómo van a comprar los agentes de IA?", la parte difícil nunca fue el modelo: es la **autenticación y el contexto**. ¿Cómo un agente personal inicia sesión en una tienda con tu permiso, lleva tu historial entre canales y ejecuta acciones sin que le roben la sesión? Meta y Sierra (la empresa de Bret Taylor) respondieron el 6 de octubre con el **Personal Agent Protocol**, un estándar abierto que es básicamente **OAuth para agentes**.

## Cómo funciona

- El agente personal se **autentica con empresas** mediante el flujo OAuth clásico, con consentimiento explícito del usuario.
- **Lleva contexto entre canales**: lo que el agente sabe de ti viaja con él, sin que cada negocio reinvente la integración.
- Las empresas pueden exponer su lado por **sitio web, MCP/OpenAPI, o su propio agente** — tres niveles de adopción según la madurez de cada una.

## Los respaldos pesan

Los socios fundadores incluyen a **Walmart, Shopify, Stripe, Rocket, Genesys e Instinct**. Cuando el retailer más grande del mundo y el procesador de pagos dominante en e-commerce se sientan en la mesa del v0.1, no es un paper académico: es infraestructura de comercio en construcción. La especificación v0.1 se publica **este mismo mes**, con pagos y permisos granulares listados como extensiones futuras.

## La puja de estándares

Acá viene lo picante: **compite contra el Trusted Agent Protocol de Visa**, que comparte algunos de los mismos socios. La pregunta de quién estandariza la identidad agent-to-business —¿una big tech con distribution, o la red de pagos con confianza institucional?— es la nueva versión de la guerra de identity providers de los 2000. Para arquitectos, la recomendación práctica es la de siempre con estándares tempranos: diseñar la capa de agnóstico al protocolo, porque lo más probable es que convivan varios.

**Fuente:** [Sierra / Meta — Personal Agent Protocol](https://aiweekly.co/alerts/sierra-meta-publish-personal-agent-protocol-backed-by-walmart)
