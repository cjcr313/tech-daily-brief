---
title: "Cloudflare vuelve programable su Secure Web Gateway: tu código corriendo dentro de la política de seguridad"
author: Carlos
pubDatetime: 2026-10-16T03:10:00Z
slug: cloudflare-gateway-dlp-programables-workers
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "Cloudflare integró Workers directamente en Gateway y DLP: nueva acción Forward en beta pública y Custom Functions para meter lógica propia dentro de la evaluación de políticas, sin mantener infraestructura extra."
---

![Ilustración editorial tech de un escudo de seguridad modular atravesado por flujos de tráfico que pasan por engranajes y bloques de código flotantes en el borde de una red global, simbolizando un secure web gateway programable con lógica personalizada ejecutándose en línea, paleta naranja cálido sobre azul profundo, estilo ilustración profesional, iluminación cinematográfica, sin texto](../../assets/images/2026-10-16-cloudflare-gateway-dlp-programables-workers.jpg)

Cloudflare le metió código propio a la seguridad de red. La compañía anunció que **Cloudflare Gateway y DLP (Data Loss Prevention) ahora se integran con su plataforma de edge computing**, liberando una nueva acción de política llamada **Forward** (ya en beta pública) y las **Custom Functions**, que llegarán antes de fin de año. Ambas disponibles para **todos los planes Zero Trust**.

## El problema que están resolviendo

Todo secure web gateway del mercado funciona igual desde hace casi 30 años: el tráfico matchea una condición, se dispara una acción terminal —Allow, Block, Isolate, Log— y listo. Funciona para el caso común, pero tiene techo: los equipos con entornos complejos lo chocan seguido.

Los ejemplos que da Cloudflare duelen de reconocer: un equipo que necesita inyectar headers HTTP según claims de un JWT del IdP y termina manteniendo un pool de proxies NGINX solo para eso. Otro que quiere una notificación de Slack cuando alguien se registra en un SaaS nuevo y debe armar un pipeline Logpush → SIEM → Slack con 5 a 15 minutos de delay. Para Cloudflare, "programabilidad" no es tener API, Terraform provider o webhooks —eso todos lo tienen— sino **correr tu propio código, con lógica arbitraria, inline en el camino de evaluación de política, en el momento exacto en que se toma la decisión de seguridad**.

## Las dos piezas nuevas

**Acción Forward (beta pública):** una nueva acción de política HTTP que enruta el request matcheado a un Worker que actúa como middleware inline. El Worker recibe headers y body completos, puede modificarlos, reenviar al origen, recibir la respuesta, modificarla también y devolverla al usuario. Y si no quieres transformar nada, la regla puede existir solo para que un Worker reciba el contexto del request de forma asíncrona: mandar un mensaje de Slack, escribir en R2, actualizar KV, llamar un webhook. Gateway se encarga del TCP, TLS, certificados y negociación HTTP; el Worker solo de la lógica.

**Custom Functions (antes de fin de año):** un Worker que se llama inline durante la evaluación de la política y devuelve un valor tipado (string, número o booleano). Ese valor queda expuesto como un selector más en el policy builder, igual que `Source IP` o `Content Category`, y se puede usar en la condición de cualquier regla de red o HTTP. El contrato es simple: datos entran, valor sale. El Worker recibe contexto como IP de origen, destino, identidad del usuario, device posture y headers, según la fase de la política.

## Por qué Cloudflare dice que solo ellos pueden

El argumento: Gateway y Workers corren **en las mismas máquinas, en los mismos 330+ data centers**. Cuando Gateway despacha tráfico a un Worker, ese dispatch es una llamada a función local — no hay hairpinning ni latencia extra por cruzar fronteras de red. Los proveedores SASE sin plataforma de compute propia obligan a desplegar la automatización en otra nube, con webhooks peleados a mano y el overhead de coser sistemas desconectados.

Para los equipos que hoy mantienen proxies caseros para casos que el gateway no cubre, esto es directamente quitar infraestructura del inventario. Y con amenazas avanzando a velocidad IA, tener el cortafuegos programable en JavaScript/TS en el mismo borde donde se evalúa la política suena razonable — lo único que queda por ver es qué tan lejos llegan los casos de uso reales antes que los de marketing.

**Fuentes:** Cloudflare Blog.
