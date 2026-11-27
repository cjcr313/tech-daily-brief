---
title: "Cloudflare activa búsqueda para agentes de IA con un solo toggle"
author: "Nauta Lab"
pubDatetime: 2026-11-27T13:15:00Z
slug: cloudflare-search-for-agents-toggle
featured: false
draft: false
tags:
  - IA
  - Cloud
  - Cloudflare
description: "Search for Agents convierte tu sitio en consultable por agentes de IA con un toggle: índice automático, API de búsqueda bajo tu dominio y soporte nativo de HTTP QUERY."
---

![Ilustración editorial de agentes de IA consultando el índice de búsqueda de un sitio web](../../assets/images/cloudflare-search-for-agents-toggle.jpg)

La carrera por la web agéntica tiene un nuevo movimiento, y es de los que marcan tendencia: Cloudflare lanzó **Search for Agents**, una función que convierte tu sitio en **buscable por agentes de IA** encendiendo literalmente un toggle en el dashboard. La idea de fondo: los agentes dejan de rastrear tu HTML a ciegas y pasan a **consultar un índice bajo tu control**.

## Cómo funciona

- Activas la función en **Quick Actions** dentro de la página de tu zona (o vía API) y Cloudflare crea automáticamente una instancia de **AI Search**, su servicio que rastrea, convierte e indexa el contenido del sitio.
- La API de búsqueda queda expuesta **bajo tu propio dominio**, descubrible por los agentes, con **soporte nativo de HTTP QUERY** (el método nuevo que viene reemplazando el hack de POST-a-un-endpoint-de-búsqueda).
- Disponible para **todos los planes, incluido el Free** (con límites de uso).
- El crawling y la indexación son automáticos, con la documentación de AI Search definiendo cómo se descubre y respeta tu contenido.

## La jugada estratégica

Es la secuencia natural de **Markdown for Agents**, la función con la que la red de Cloudflare convierte cualquier HTML a Markdown en tiempo real para zonas habilitadas. Primero les dieron formato legible a los agentes; ahora les dan **búsqueda estructurada**. El sitio gana control sobre qué se indexa y cómo se consulta, y el agente deja de quemar crawls inferiendo la estructura de tu web a la antigua.

Ojo con el modelo de costos, que The New Stack resumió claro: **el dueño del sitio banca la factura de las consultas**. El toggle es gratis, pero el uso consume cuota de AI Search — conviene revisar los límites y precios antes de activarlo en zonas con mucho tráfico agéntico.

Y sí, comen su propia comida: el blog de Cloudflare ya expone su endpoint de búsqueda en `/.well-known/search`, con instrucciones de uso para agentes incluidas en la propia página.

**Fuentes:** [Cloudflare Blog](https://blog.cloudflare.com/search-for-agents/) · [The New Stack](https://thenewstack.io/cloudflare-agent-search-endpoint/) · [Cloudflare Docs](https://developers.cloudflare.com/ai-search/)
