---
title: "Cloudflare permite acotar los permisos de Workers a un solo Worker: adiós al token de toda la cuenta"
author: Carlos
pubDatetime: 2026-09-16T19:00:00Z
slug: cloudflare-workers-permisos-granulares
featured: false
draft: false
tags:
  - Cloud
  - DevOps
  - Seguridad
description: "Cloudflare lanza autorización granular por Worker con cuatro roles, para que un pipeline de CI o un agente de IA reciba acceso acotado a un solo Worker y no a toda la cuenta."
---

![Ilustración editorial de un candado digital que protege un único nodo de una red de funciones serverless, llaves de acceso con alcance limitado, tonos naranja y azul profundo sobre fondo oscuro, estilo vectorial plano minimalista](../../assets/images/2026-09-16-cloudflare-workers-permisos-granulares.jpg)

Un detalle de seguridad que le cambia el día a quien corre CI/CD o agentes de IA contra Cloudflare Workers. Desde el **15 de septiembre**, Cloudflare habilitó **autorización granular por Worker**: ahora puedes acotar un API token o el acceso de un miembro del equipo a **un solo Worker nombrado**, con **cuatro roles** distintos. Y aplica a todas las cuentas, sin upgrade de plan.

## El problema de antes

Hasta ahora, darle a un workflow de GitHub Actions o a un agente de IA acceso de deploy sobre Workers significaba entregar un **token de "Edit Cloudflare Workers" a nivel de cuenta**. Ese token podía leer, modificar y desplegar **todos los Workers** de la cuenta. Si se filtraba en un log de CI, en una variable mal puesta o por un prompt injection en una sesión de IA, el radio de daño era **la cuenta completa**. Para equipos con cinco, diez o cincuenta Workers, eso era un scope inaceptable para lo que en el fondo es una credencial de deploy de un solo servicio.

## Los cuatro roles

Cloudflare definió cuatro roles que aplican a Workers individuales (o a nivel de producto/plataforma si necesitas más alcance):

- **Metadata Read-Only**: ver settings, métricas, logs y trazas. Sin acceso al código ni cambios. Para agentes de monitoreo y pipelines de observabilidad read-only.
- **Content Read-Only**: todo lo anterior, más leer el código fuente y los recursos vinculados (filas de D1, objetos de R2). Para escaneos de seguridad y auditorías.
- **Editor**: leer y desplegar. Puede actualizar código y settings, pero **no** borrar, crear ni renombrar Workers. Es el rol correcto para casi todo pipeline de CI/CD y agente de IA.
- **Admin**: ciclo de vida completo, incluyendo crear, borrar y renombrar. Rara vez apropiado para un proceso automatizado.

## Por qué le importa a los agentes de IA

En 2026, los agentes de coding — Claude Code, OpenAI Codex, GitHub Copilot Workspace — ejecutan `wrangler deploy` como parte de sus flujos. Hasta el 15 de septiembre, la única forma de darles eso era un token de cuenta completa. Ahora puedes darle a una sesión de Claude Code o a un token de Codex el rol **Editor acotado a exactamente un Worker**. Si un prompt injection engaña al agente para que haga un deploy no intencionado, el daño queda **contenido en ese Worker**: no toca tu servicio de auth ni tu API de billing.

Esto apunta directo al riesgo que el **OWASP Agentic Skills Top 10** clasifica como *overprivileged tool access* (acceso a herramientas con más privilegios de la cuenta), un problema que escala a medida que los agentes toman más responsabilidades de deploy.

## Lo que viene

Cloudflare confirmó que los roles con scope por recurso llegarán también a **namespaces de KV y bases D1**. La entrada del changelog del 15 de septiembre describe esto como la **fase uno** de un modelo de autorización más amplio en toda la Developer Platform. Si todavía corres CI con un token de cuenta completa, el fix es concreto: token custom con permiso **Workers → Editor** acotado a un Worker específico, guardado en el secret store de tu CI, sin tocar el `wrangler.toml`.

**Fuentes:** [Cloudflare Blog](https://blog.cloudflare.com/workers-granular-authorization/), [byteiota](https://byteiota.com/cloudflare-workers-granular-permissions-ci-agents/), [Cloudflare changelog](https://developers.cloudflare.com/changelog/post/2026-09-15-granular-worker-permissions/).
