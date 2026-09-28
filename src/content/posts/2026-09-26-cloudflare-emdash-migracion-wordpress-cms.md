---
title: "Cloudflare migra su blog de WordPress a EmDash, su CMS open source"
author: Carlos
pubDatetime: 2026-09-26T21:00:00Z
slug: cloudflare-migra-blog-wordpress-emdash
featured: false
draft: false
tags:
  - Cloud
  - DevOps
  - Arquitectura
description: "Cloudflare se pasó de WordPress a EmDash, su propio CMS open source, y publicó los números de rendimiento de la migración."
---

![Ilustración editorial del blog de Cloudflare corriendo sobre EmDash](../../assets/images/2026-09-26-cloudflare-emdash-migracion-wordpress-cms.jpg)

Cloudflare acaba de contar cómo migró su blog principal desde WordPress a EmDash, el CMS open source que ellos mismos están construyendo. La historia es un buen ejemplo de "comerse tu propia comida de perro": Cloudflare se convirtió en el *Customer Zero* de su propia plataforma, y los números que muestran son bastante llamativos.

## El contexto

EmDash apareció en abril como *developer preview* (v0.1.0), pensado como un sucesor de WordPress construido en TypeScript, diseñado para correr sobre Astro y la infraestructura de Cloudflare. Tras detectar limitaciones con su CMS anterior, el equipo del blog decidió ser el primer cliente real del producto.

## La arquitectura

El setup en producción corre EmDash sobre un Cloudflare Worker, con varias capas de caché: Workers Cache y un *object cache* construido sobre Workers KV. Para la base de datos usan Cloudflare Hyperdrive para conectar con PlanetScale.

## Los números

- Tráfico típico: ~75 requests por segundo, con picos por sobre los 5.000 RPS.
- La plataforma fue probada para aguantar hasta 7.000 RPS.
- La latencia p95 quedó mucho más plana y consistente: donde el stack antiguo tenía picos periódicos bajo carga, EmDash mantiene un perfil estable.

## Migración sin drama

Para el rollout usaron un proxy Worker que iba enrutando tráfico desde WordPress hacia EmDash de forma gradual, con una cookie de versión para decidir qué experiencia recibía cada request. Partieron con el 1% del tráfico y fueron subiendo hasta llegar al 100% en un solo día, con *fallback* automático al sitio legacy si aparecían errores 500.

Fuente: [Cloudflare blog](https://blog.cloudflare.com/cloudflare-blog-uses-emdash/), vía [InfoQ](https://www.infoq.com/news/2026/09/cloudflare-emdash-migration/).

### Update: 28 de septiembre, 2026

EmDash llegó a **1.0**: estable, gratuito y open source. Trae un **registry de plugins descentralizado** — los desarrolladores publican sin ceder identidad ni releases a un marketplace central, y los dueños de sitios instalan plugins directo desde EmDash. El stack queda así: desarrolladores en Astro, editores en el admin de EmDash, y agentes trabajando vía API, CLI o el servidor MCP integrado. Fuente: [Cloudflare blog](https://blog.cloudflare.com/emdash-cms-plugin-registry/).
