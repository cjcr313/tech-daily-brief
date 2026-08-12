---
title: "Cloudflare DDoS Report H1 2026: 935 ataques sobre 1 Tbps y un cambio sísmico en los vectores de ataque"
author: Carlos
pubDatetime: 2026-08-12T22:00:00Z
slug: cloudflare-ddos-report-h1-2026-1tbps
featured: false
draft: false
tags:
  - Seguridad
  - Cloud
  - Infraestructura
description: "Cloudflare mitigó 23.2M ataques DDoS en H1 2026. Los ataques sobre 1 Tbps se dispararon 519%. DNS floods y CLDAP dominan el nuevo panorama."
---

![Ilustración editorial de escudos de datos defendiendo una red bajo ataque masivo, estilo tech](../../assets/images/2026-08-12-cloudflare-ddos-report-h1-2026-1tbps.jpg)

Cloudflare publicó su **DDoS Threat Report H1 2026** (edición #25), y los números son una bofetada de realidad para cualquiera que pensaba que el problema DDoS estaba "manejado".

## Los números globales

- **23.2 millones** de ataques DDoS de capa de red mitigados
- **29.64 trillones** de requests HTTP DDoS bloqueados
- Esto equivale a **~5,343 ataques por hora**, o **~128,000 por día**
- **935 ataques superaron 1 Tbps**, con un aumento de **+519%** entre Q1 y Q2

Abril 2026 fue el mes pico: **6.46 trillones de requests y 165 petabytes** de tráfico mitigado. Para que te hagas una idea, eso es como streamar video 4K continuo durante años.

## El cambio de vectores

Acá viene lo interesante. El centro de gravedad de los ataques **se movió desde botnet floods hacia reflection/amplification**:

- **DNS-based attacks**: 34.3% de toda la actividad de capa de red en H1
- **DNS Floods**: subieron de 25.7% a 40.0% entre Q1 y Q2
- **CLDAP Floods**: +580% QoQ, ahora son el vector #3
- Esto no es ruido: es un cambio estructural en cómo se ejecutan los ataques

La lógica es simple: los atacantes están migrando a técnicas de amplificación porque obtienen más bang por el buck. Un servidor DNS mal configurado puede multiplicar el tráfico de entrada por 50x o más.

## Geopolítica y blanco móvil

Los atacantes no viven en el vacío. El reporte conecta claramente los blancos con eventos globales:

- **Media, Production & Publishing** fue el sector más atacado en ambos trimestres (14.2% de todos los requests HTTP DDoS), alineado con cobertura de Irán, Ucrania y el Mundial
- **Turquía** subió al #3 entre países más atacados, en el contexto de la Cumbre OTAN en Ankara (julio)
- **Gobierno** saltó del puesto #29 al #9 — el mayor movimiento sectorial de 2026 — durante la "Operation Epic Fury"

## Law enforcement: ¿sirve de algo?

Después del pico de abril, el tráfico bajó. Posible causa: **Operation PowerOFF**, una acción de 21 países que:

- Targeteó a más de 75,000 usuarios de servicios DDoS-for-hire
- Tomó down 53 dominios
- Emitió 25 search warrants
- Resultó en 4 arrestos

O sea que sí, la cooperación internacional tiene impacto. Pero la historia nos dice que el efecto es temporal hasta que los actores se reorganizan.

## La lectura práctica

Si tu infraestructura depende de que los ataques DDoS "no van a venir por acá", estás jugando a la ruleta rusa. Los vectores cambiaron, el volumen se multiplicó, y los blancos se mueven con la geopolítica.

Lo mínimo: tener un servicio de mitigación DDoS activo (no solo "configurado"), revisar que tus servidores DNS no sean amplificadores abiertos, y monitorear CLDAP si tienes servicios LDAP expuestos.

**Fuente:** [Cloudflare Blog](https://blog.cloudflare.com/ddos-threat-report-2026-h1/)
