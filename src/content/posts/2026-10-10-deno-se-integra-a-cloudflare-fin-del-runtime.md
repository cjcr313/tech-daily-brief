---
title: "Ryan Dahl se lleva todo el equipo de Deno a Cloudflare: el runtime tiene fecha de término"
author: Carlos
pubDatetime: 2026-10-10T03:05:00Z
slug: deno-se-integra-a-cloudflare-fin-del-runtime
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "Todo el equipo de Deno se integra a Cloudflare: el runtime tendrá un año más de soporte y después fin, Deno Deploy cierra en seis meses y JSR migra. La apuesta ahora es Workers y Durable Objects."
---

![Ilustración editorial de un dinosaurio de código despidiéndose mientras su equipo cruza un puente luminoso hacia una red de nodos globales distribuidos en forma de nube, degradado naranjo a azul sobre fondo oscuro, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-10-deno-se-integra-a-cloudflare-fin-del-runtime.jpg)

La noticia explotó en Hacker News (más de mil puntos en horas): **todo el equipo de Deno se une a Cloudflare**. Ryan Dahl —sí, el mismo que creó Node.js y después Deno— anunció que dejan de lado el desarrollo de un runtime y un hosting separados para concentrarse en una sola plataforma junto a los equipos de **Workers y Durable Objects**.

## Qué significa, en concreto

- **Deno runtime**: un año más de soporte, con releases mensuales de bugfixes y parches de seguridad. Después de ese año, **fin del desarrollo**. El proyecto queda open source y quien quiera puede continuarle la vida.
- **Deno Deploy**: sigue operando seis meses y luego **cierra**. Habrá soporte de migración para clientes de pago hacia Cloudflare Workers.
- **JSR** (el registry de paquetes de TypeScript): sigue funcionando, con su infraestructura mudándose a Cloudflare.
- **rusty_v8**: seguirán soportándolo y trabajarán para integrarlo en **workerd**, el runtime open source que potencia Workers.

## El porqué de la movida

Dahl lo explica como una progresión natural: **Deno → Deno Deploy → celld**. Lleva tiempo empujando la idea de los "JavaScript Containers" (su post de tinyclouds): compute, storage y comunicación trabajando juntos, sin que cada aplicación arme su propia infraestructura. Construir y operar Deploy le mostró cuánta complejidad quedaba por debajo de la experiencia de desarrollo, y celld —que construye sobre el modelo de programación de Workers y Durable Objects— busca simplificar justamente esa capa: **el escalamiento integrado al modelo de programación**, no como infraestructura que cada app debe ensamblar sola.

Y el gancho de moda no pasa inadvertido: **los agentes de IA**. Dahl destaca que Durable Objects combinan ejecución serverless barata, estado persistente, WebSockets y una interfaz JavaScript de alto nivel — la combinación perfecta para correr agent harnesses a escala. Tanto que dejó su correo nuevo en Cloudflare para quien esté construyendo agentes y quiera correrlos en su propia infra.

## El takeaway

Consolidación del edge en estado puro. El runtime JavaScript como producto independiente está cada vez más difícil de sostener (Node, Deno, Bun...), y la jugada de Cloudflare absorber a su competidor más cercano en filosofía —con su creador incluido— apunta a hacer del modelo distribuido de Workers/Durable Objects **el default para construir servidores**. Si tienes apps en Deno Deploy, ya sabes: tienes seis meses de runway. Empieza a mirar el plan de migración hoy, no en el mes cinco.
