---
title: "Cloudflare le pondrá nota a los bots verificados: la confianza ahora se gana respetando robots.txt y los HTTP 429"
author: Carlos
pubDatetime: 2026-10-17T21:05:00Z
slug: cloudflare-bots-confianza-robots-txt-429
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
  - IA
description: "Cloudflare anunció rendición de cuentas continua para bots verificados: mide si respetan robots.txt y responden a los 429, y lo traduce en una banda de confianza que será pública en Radar."
---

![Ilustración editorial tech de un robot verificado con credencial siendo evaluado por un semáforo de confianza sobre un navegador de sitios web, estilo flat profesional en tonos naranja y azul oscuro, sin texto](../../assets/images/2026-10-17-cloudflare-bots-confianza-robots-txt-429.jpg)

La licencia de conducir te dice quién sos y que pasaste el examen, pero no te garantiza que vayas a manejar bien la próxima vez. Con esa analogía parte Cloudflare en su [nuevo anuncio](https://blog.cloudflare.com/verified-bots-accountability): tener identidad verificada como bot ya no alcanza — ahora la confianza se tiene que **ganar y volver a ganarse todos los días**.

## El problema: verificado ≠ confiable

Para ser un *Verified Bot* de Cloudflare hasta ahora bastaba, a grandes rasgos, con tres cosas: identificarse con precisión (vía [Web Bot Auth](https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/), las firmas criptográficas que cataloga [BotBase](https://developers.cloudflare.com/bots/botbase/)), hacer solo lo que dices que vas a hacer y no portarte como un abusivo. Pero un bot conocido puede igual ignorar las preferencias del sitio, saturar el origen o evadir controles. No siempre es maldad — muchas veces es un bug o una configuración pésima. Da lo mismo para el sitio que recibe el golpe.

El caso escuela sigue siendo **Perplexity**, que Cloudflare sacó de la lista de verificados en 2025 cuando descubrió crawlers ocultos evadiendo directivas de no-rastreo.

## La solución: una banda de confianza explicable

Cloudflare construyó un sistema que mide qué tan consistentemente un crawler respeta las preferencias de los sitios, y traduce esas observaciones en una **banda de confianza explicable**: un rango que muestra qué tan bien se porta el bot y qué comportamientos específicos informaron esa evaluación. No es un juicio permanente sobre el operador — es comportamiento sostenido en el tiempo.

Las señales iniciales que evalúan son de puro sentido común:

- **¿Respeta las instrucciones?** Que el tráfico observado sea consistente con el `robots.txt` del sitio en el tiempo, siguiendo el [RFC 9309](https://www.rfc-editor.org/info/rfc9309). No se trata de castigar violaciones aisladas, sino patrones repetidos de desprecio por las reglas publicadas.
- **¿Reacciona al feedback directo?** Cuando un sitio responde con un **HTTP 429** (*Too Many Requests*), ¿el bot frena, pausa o sigue igual de picado? Bajar la tasa consistentemente sube la confianza; ignorar los 429 reiteradamente la baja.

Y ojo con este detalle: el `robots.txt` pone el **mínimo** de lo que un bot no debe hacer. Que algo no esté escrito no significa que esté permitido.

## Qué viene

Los puntajes se van a **publicar en [Radar](https://radar.cloudflare.com/bots/directory)**, el directorio público de bots de Cloudflare, con más señales de medición a futuro. Para los operadores responsables es una forma de demostrar que merecen la confianza; para los sitios, contexto real sobre el tráfico automático que les llega.

El sistema completa un *loop* de accountability junto a **Bot Preference Sync** (para que los sitios publiquen preferencias) y **Bot Management** (para decidir cómo manejar ese tráfico). Y el plan de largo plazo: que **todos los clientes de Cloudflare puedan elegir el umbral de confianza** con el que se maneja el tráfico de bots verificados.

## Por qué importa

Con la avalancha de agentes de IA crawleando, scrapeando y consumiendo sitios, el modelo "verifico identidad una vez y listo" quedó chico. Esto mueve el estándar hacia **confianza conductual continua** — verify, but continuously re-verify, como dicen ellos. Si tu bot se porta mal, se va a notar. Y si tu sitio quiere protección más agresiva, vas a poder exigir un estándar de comportamiento más alto.

Simple: la credencial te abre la puerta, pero el comportamiento te deja quedarte.
