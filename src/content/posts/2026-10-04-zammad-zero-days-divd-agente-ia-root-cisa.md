---
title: "Un agente de IA encadenó dos zero-days de Zammad y se hizo root en DIVD en segundos: CISA da plazo hasta el 5 de octubre"
author: Carlos
pubDatetime: 2026-10-04T15:10:00Z
slug: zammad-zero-days-divd-agente-ia-root-cisa
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
description: "El instituto holandés que caza vulnerabilidades (DIVD) fue hackeado por un agente de IA autónomo que encadenó dos zero-days del helpdesk open source Zammad: de cero permisos a root en segundos. CISA ya los metió al catálogo KEV con deadline del 5 de octubre."
---

![Ilustración editorial isométrica de un servidor de helpdesk abierto con un candado agrietado, mientras un pequeño robot agente autónomo sube una escalera de privilegios hacia una corona brillante de root, paleta azul oscuro y naranja, sin texto](../../assets/images/2026-10-04-zammad-zero-days-divd-agente-ia-root-cisa.jpg)

La ironía está a la altura del susto: el **DIVD (Dutch Institute for Vulnerability Disclosure)** —la fundación holandesa de voluntarios que se dedica a encontrar y divulgar vulnerabilidades para proteger al resto— confirmó que su propia red fue breachada mediante **dos zero-days encadenados en Zammad**, el helpdesk open source que usaban internamente. Y el operador no fue un hacker con hoodie: fue un **agente de IA que tomaba decisiones de forma autónoma**, sin intervención humana en el loop.

## La cadena: de anónimo a root, en segundos

Los dos flaws, identificados como **CVE-2026-102489** y **CVE-2026-102490**, forman una escalera perfecta:

- **CVE-2026-102489** (session fixation, CVSS v4.0 de 8.7): permite secuestrar sesiones y ejecutar código remoto **sin necesidad de login**, corriendo como usuario `zammad`. Afecta a las versiones 6.3.0 a 6.5.4.
- **CVE-2026-102490** (escalada de privilegios): un atacante autenticado con privilegios bajos —o que acaba de conseguirlos con el flaw anterior— escala de `zammad` a **root**.

Según DIVD, usados en secuencia permitieron "secuestrar sesiones, ejecutar código remoto y escalar de usuario zammad a root, **en segundos, gracias a la parte agéntica del hack**". Cero contraseñas, cero phishing, cero ingeniería social: solo acceso de red a una instancia vulnerable y un bot que ejecutó toda la cadena a velocidad de máquina. Luego el atacante accedió a otros servicios y **leyó y exfiltró datos** de los sistemas de DIVD.

## Lo más freaky: el agente dejó el raciocinio firmado

DIVD ya había descrito el ataque como "loud and very, very messy". El detalle surrealista es que el agente de IA **dejó atrás explicaciones claras de sus decisiones**, lo que permitió a la organización reconstruir el incidente paso a paso. El atacante autónomo escribió, básicamente, su propio incident report. Gracias a la segmentación de red y la respuesta rápida, no logró moverse más profundo — aunque la investigación sigue abierta y DIVD prometió más updates.

Los zero-days fueron identificados junto a **Merlon Security**. Matiz importante para el equilibrio: Zammad aseguró que **no recibió los detalles técnicos de CVE-2026-102490** de parte de DIVD y que no pudo verificarlo de forma independiente. Aun así, la recomendación oficial es clara.

## CISA ya se movió: deadline 5 de octubre

Si corres Zammad en algún rincón, esto es lo que importa: el **2 de octubre CISA agregó ambos CVEs a su catálogo Known Exploited Vulnerabilities**, con fecha límite de remediación obligatoria del **5 de octubre** para agencias federales estadounidenses (guidance BOD 26-04: forensic triage, revisar exposición a internet y discontinuar uso si no hay mitigación disponible). Cuando algo entra al KEV con explotación activa confirmada, la señal aplica para cualquier organización, no solo para el Tío Sam.

La escala del problema no es menor: Zammad reporta **más de 2.000 clientes y 55.000 usuarios**, incluyendo nombres como De'Longhi, Amnesty International y Nextcloud. La acción concreta:

- **Actualiza a Zammad 7** (considerado seguro), o
- **Saca la instancia de internet ya** si no puedes actualizar.

Si tienes instancias 6.3.0–6.5.4 expuestas, asume que la ventana de explotación está abierta: la divulgación ya salió y —como vimos justo hoy en la historia de los agentes convirtiendo rumores en exploits— el tiempo entre "se publicó" y "se explota" se mide en minutos.

## El contexto que ya veníamos viendo

Esta no es una historia aislada. Es la otra cara de la misma moneda que cubrimos hoy mismo sobre maintainers open source: si los agentes de IA pueden armar exploits desde pistas públicas en minutos, **también pueden ejecutarlos a esa velocidad**. DIVD —una organización de security researchers, o sea, gente que vive esto— quedó comprometida por un helpdesk interno. La lección para cualquier equipo platform/DevOps: el inventario de servicios "secundarios" (helpdesks, wikis, ticketing, status pages) es hoy superficie de ataque de primer orden, y la velocidad de respuesta ya no se compite contra humanos.

**Fuentes:** [BleepingComputer](https://www.bleepingcomputer.com/news/security/divd-says-zammad-zero-days-enabled-ai-driven-network-breach/) · [CISA KEV](https://www.cisa.gov/news-events/alerts/2026/10/02/cisa-adds-two-known-exploited-vulnerabilities-catalog) · [Help Net Security](https://www.helpnetsecurity.com/2026/10/01/divd-agentic-ai-attack-breach/) · [SecurityWeek](https://www.securityweek.com/zammad-zero-days-exploited-in-ai-powered-divd-hack/)
