---
title: "Cloudflare lanza cf, su CLI agéntica para toda la API (y open-sourcea Forge)"
author: Carlos
pubDatetime: 2026-09-28T21:00:00Z
slug: cloudflare-cf-cli-agentica-forge
featured: false
draft: false
tags:
  - Cloud
  - DevOps
  - IA
description: "Cloudflare presentó cf, una CLI que le da a los agentes acceso a las más de 3.000 operaciones de su API, y open-sourceó Forge, el pipeline que la genera."
---

![Ilustración editorial de una terminal futurista con un agente de IA orquestando una red de servicios cloud](../../assets/images/2026-09-28-cloudflare-cf-cli-agentica-forge.jpg)

Cloudflare presentó `cf`, una nueva CLI pensada para la próxima generación de desarrollo de software: la que tiene agentes de IA al teclado. El dato que la motiva es fuerte — en marzo de 2026 los agentes representaban un cuarto del uso de Wrangler; la semana pasada llegaron al 48%.

## Por qué Wrangler se quedó corto

Wrangler, la CLI histórica de Cloudflare, expone unas 280 operaciones, pero Cloudflare ofrece miles. Y como cada equipo de producto construía su propia experiencia de comandos, la terminología era un desorden: `d1 info`, `hyperdrive get`, `workflows describe` — cada uno con su lógica y sus rarezas.

## Qué trae cf

- Acceso a las más de **3.000 operaciones** de la API de Cloudflare, no solo las 280 de Wrangler.
- **JSON como interfaz por defecto**: pretty-printed para humanos, condensado para agentes (máximo ahorro de contexto).
- **`cloudflare.config.ts`**, un nuevo formato de configuración para todo Cloudflare, con la seguridad del TypeScript y su language server protocol.
- **Vite como default**, con su servidor de desarrollo local y una plugin suite para desarrolladores y autores de frameworks.

## El secreto: Forge

Para lograrlo no escribieron 3.000 comandos a mano. **Forge**, el nuevo pipeline unificado de generación de API, genera la CLI directamente desde el schema OpenAPI que ya alimenta la documentación y los SDK. Y Cloudflare lo está **open-sourceando**.

Para probarlo (open beta): `npm i -g cf`.

Fuente: [Cloudflare blog](https://blog.cloudflare.com/cloudflare-cf-cli-launch/).
