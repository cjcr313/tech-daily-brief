---
title: "Cloudflare Threat Report 2026: DDoS récord de 31.4 Tbps, token theft y la industrialización del cibercrime"
author: Carlos
pubDatetime: 2026-07-16T22:00:00Z
slug: cloudflare-threat-report-2026
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - Observabilidad
description: "Cloudflare publicó su primer Threat Report anual. El ataque DDoS más grande de la historia, nation-states usando SaaS legítimo como C2, y por qué los session tokens son el nuevo MFA bypass."
---

Cloudflare sacó su **primer Threat Report anual** vía Cloudforce One (su equipo de inteligencia de amenazas), y la conclusión principal es escalofriante: **la era del "brute force" hacking está terminando**. En su lugar, llegaron los atacantes industriales que optimizan por throughput, no por sofisticación.

## El concepto clave: MOE (Measure of Effectiveness)

El reporte introduce un framework para entender por qué los atacantes eligen ciertas técnicas. La lógica es fria:

> ¿Por qué gastar un zero-day carísimo si un session token robado tiene mejor ratio esfuerzo/resultado?

Esto explica todo el panorama: los atacantes ya no buscan ser los más elegantes, sino los más **eficientes**.

## Los 8 hallazgos principales

1. **IA automatizando operaciones de ataque** — Actores de baja habilidad ahora pueden hacer daño de alto impacto gracias a LLMs que generan exploits, mapean redes y crean deepfakes en tiempo real.
2. **State-sponsored pre-positioning** — Grupos chinos (Salt Typhoon, Linen Typhoon) están infiltrando infraestructura crítica en Norteamérica **ahora**, no para atacar hoy sino para tener ventaja geopolítica futura.
3. **SaaS over-privileged como bomba de tiempo** — El breach de Salesloft demostró cómo una sola API comprometida puede propagarse a cientos de entornos corporativos via integraciones de terceros.
4. **"Living off the XaaS"** — Los atacantes usan Google Calendar, Dropbox, GitHub, Amazon SES y SendGrid como infraestructura C2. El tráfico malicioso se esconde dentro del tráfico corporativo legítimo.
5. **Deepfakes en nómina** — Corea del Norte operacionalizó el esquema "remote IT worker": usando deepfakes y identidades falsas para infiltrar operativos en empresas occidentales.
6. **Token theft > MFA bypass** — Infostealers como LummaC2 cosechan session tokens activos, eliminando la necesidad de bypassar MFA. Si tienes el token, ya estás adentro.
7. **Relay blind spots** — Phishing-as-a-service explota un punto ciego donde los servidores de mail no re-verifican la identidad del remitente, permitiendo suplantación de marcas directamente en inbox.
8. **DDoS hyper-volumétrico** — El ataque récord: **31.4 Tbps**, impulsado por el botnet **Aisuru**. Los DDoS ahora rompen récords regularmente, cerrando la ventana de respuesta humana.

## DDoS: 31.4 Tbps es una locura

Para ponerlo en perspectiva: el ataque más grande de 2024 fue ~5.6 Tbps. Pasamos de eso a **31.4 Tbps en menos de dos años**. El botnet Aisuru (que combina dispositivos IoT comprometidos + bots alimentados por IA) tiene la capacidad de saturar prácticamente cualquier infraestructura que no tenga la escala de un Cloudflare o Akamai.

Si tu infraestructura no está detrás de un CDN/anti-DDoS de gran escala, esto es un problema existencial.

## "Living off the XaaS": el nuevo normal

La sección más interesante del reporte es cómo los atacantes dejaron de construir servidores C2 propios y pasaron a usar servicios legítimos:

- **Google Calendar** para coordinar exfiltración de datos
- **Dropbox/Google Drive** para staging de payloads
- **GitHub** para hostear malware disfrazado de repos open source
- **Amazon SES / SendGrid** para campañas de phishing con deliverability alta

La detección de esto es un pesadilla: ¿cómo distingues un request legítimo a Dropbox de uno que es C2? La respuesta corta: barely. Necesitas telemetry de red muy fino y context-aware, no solo reglas estáticas.

## ¿Qué hacer con esto?

Para equipos de infra/DevOps/security:

1. **Revisar permisos de integraciones SaaS** — Cada conexión OAuth de terceros es un vector. Audita los scopes y aplica least-privilege real, no de papel.
2. **Session token management** — Si usas SSO/OAuth, implementa rotación de tokens y detección de anomalías en sesiones. MFA ya no es suficiente.
3. **Monitoreo de tráfico a servicios legítimos** — Tus servidores hablando con Dropbox a las 3 AM no es normal. SIEM + behavioral analytics.
4. **Anti-DDoS a escala** — 31.4 Tbps significa que tu WAF on-premise es irrelevante. Necesitas absorber el tráfico upstream.

Este reporte es lectura obligada para cualquiera en infraestructura. Cloudflare tiene la ventaja de ver ~20% del tráfico web global, así que sus datos no son anecdóticos.

> **Fuente:** [Cloudflare Blog - 2026 Threat Report](https://blog.cloudflare.com/2026-threat-report/)
