---
title: "Cloudflare lanza su OHTTP Gateway en beta cerrada: privacidad con separación de confianza para recibir requests sin ver la IP del usuario"
author: Carlos
pubDatetime: 2026-10-03T15:40:00Z
slug: cloudflare-ohttp-gateway-privacidad
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "Cloudflare abre la beta cerrada de su OHTTP Gateway: un add-on self-serve para que los backends reciban requests HTTP sin ver IPs ni fingerprints de los usuarios, sobre el estándar IETF RFC 9458."
---

![Ilustración editorial tech de privacidad en la red: un sobre cifrado viajando por dos saltos independientes hacia un servidor, ocultando el rastro del remitente, paleta naranja y gris oscuro con candados estilizados, estilo ilustración editorial profesional](../../assets/images/2026-10-03-cloudflare-ohttp-gateway-privacidad.jpg)

Cloudflare anunció la **beta cerrada de su OHTTP Gateway self-serve**, junto con el renombramiento del clásico Privacy Gateway a **Cloudflare OHTTP Relay**. La idea de fondo: hoy los usuarios cargan con demasiada responsabilidad por su propia privacidad — VPNs, bloquear cookies, adblockers — mientras que los desarrolladores terminan sabiendo más de sus usuarios de lo que quisieran: cada intercambio cliente-servidor deja un rastro con IP, fingerprint TLS y compañía.

## Cómo funciona OHTTP

Oblivious HTTP es un **estándar de la IETF (RFC 9458)** que permite que los backends reciban requests HTTP **sin ver la dirección IP del usuario**. Los requests viajan por dos saltos operados de forma independiente:

- Un **relay** que reenvía ciegamente los requests cifrados, ocultando los identificadores del cliente frente al servidor de la app.
- Un **gateway** que hace el trabajo criptográfico de desencapsular los requests cifrados y encapsular las respuestas, de modo que el servidor los procesa como HTTP plano.

La clave es la **separación de confianza**: ningún partido ve a la vez los identificadores del cliente y el contenido del request. Ni el relay sabe qué se está enviando, ni el gateway sabe de quién viene.

## Qué se lanza

- El nuevo **Cloudflare OHTTP Gateway** será un **add-on pago para tu zone**, activable en pocos clics para empezar a recibir tráfico OHTTP.
- Está en **beta cerrada** con waitlist abierta; el lanzamiento self-serve llega "este otoño" (boreal).
- El antiguo Privacy Gateway pasa a llamarse OHTTP Relay, para distinguir los dos roles con claridad.

## Por qué es relevante

Desde 2022 que Cloudflare opera el relay (Privacy Gateway), pero el gateway era la pieza que faltaba para que cualquier empresa pueda armar la topología completa de OHTTP sin operar infraestructura criptográfica propia. Con la presión regulatoria creciente sobre tracking y datos personales — y los browsers endureciendo fingerprints — el OHTTP deja de ser un experimento de privacy nerds y se vuelve infraestructura de producto: telemetría segura, crash reporting, sync de configuración, o cualquier flujo donde el usuario no quiera quedar identificado.

Para los equipos de plataforma: es un candidato concreto para "privacy by design" sin construir criptografía casera. La separación relay/gateway es literalmente el modelo de confianza que los reguladores les gusta ver en el papel.

**Fuente:** [Cloudflare Blog](https://blog.cloudflare.com/announcing-cloudflare-ohttp-gateway/)
