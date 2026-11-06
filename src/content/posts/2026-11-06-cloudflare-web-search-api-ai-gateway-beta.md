---
title: "Cloudflare lanza Web Search API en AI Gateway: búsqueda web viva para agentes, sin claves de terceros"
author: Carlos
pubDatetime: 2026-11-06T13:09:00Z
slug: cloudflare-web-search-api-ai-gateway-beta
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "La beta permite que agentes de IA recuperen resultados web en vivo a través de proveedores como Exa, Linkup y Ceramic.ai, facturado por AI Gateway y sin API keys de terceros."
---

![Ilustración editorial tech de una lupa gigante conectada a nodos de red luminosos en la nube, representando búsqueda web para agentes de IA](../../assets/images/cloudflare-web-search-api-ai-gateway-beta.jpg)

Los agentes de IA llevan tiempo cojeando de un lado: el acceso a información web en vivo. Cloudflare le puso parche con el lanzamiento en **beta de su Web Search API, integrada en AI Gateway**: una única ruta para que aplicaciones y agentes recuperen **resultados de búsqueda web actualizados**, con proveedores que incluyen **Exa, Linkup y Ceramic.ai**.

## Lo que cambia para quien construye agentes

- **Sin API key de terceros**: la búsqueda se factura directamente a través de AI Gateway (con créditos o la key del proveedor registrada en el gateway). Se acabó el festival de credenciales sueltas por servicio.
- **Una primitiva gestionada**: en el SDK de agentes de Cloudflare ya existe la ruta `agents/websearch`, de modo que el `web_search` tool del agente se conecta con elegir proveedor, gateway y límites — nada de pegar Scrapy + Selenium + fe.
- **En la misma malla que todo lo demás**: al pasar por AI Gateway, las búsquedas de tus agentes quedan junto al resto del tráfico LLM — con observabilidad, caching y control de gasto en el mismo lugar.

## El guiño estratégico

Cloudflare viene armando la pila completa de infraestructura para agentes: Workers para ejecutar, AI Gateway para gobernar el tráfico de modelos, y ahora búsqueda como servicio básico. Es la misma jugada de "conviértelo en primitiva" que hizo con DNS, CDN y cache — solo que esta vez el cliente es un bot.

## De yapa, del mismo ecosistema

La semana de Cloudflare también trajo el **DDoS Threat Report Q3 2026**: los ataques más grandes cayeron 69% en tamaño, pero el total creció 208% — "más enjambres, menos gigantes", o sea, ataques más chicos pero mucho más numerosos (y más difíciles de filtrar por firma). Además, **Services for Private Origins llegó a disponibilidad general** para conectar orígenes privados sin exponerlos a internet.

## Por qué importa

Si estás construyendo agentes que necesitan datos frescos — cotizaciones, docs, noticias, inventarios públicos — la búsqueda dejó de ser integración manual y pasó a ser **otra capability más de tu gateway**, con facturación y telemetría unificadas. Y para los equipos platform: un punto menos de superficie para fugas de API keys. A veces el progreso es simplemente menos plumbing.
