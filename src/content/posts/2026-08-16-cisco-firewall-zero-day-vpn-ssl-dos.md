---
title: "Cisco confirma zero-day explotado en sus firewalls: CVE-2026-20349 tumba la VPN SSL con un solo request"
author: Carlos
pubDatetime: 2026-08-16T22:10:00Z
slug: cisco-firewall-zero-day-vpn-ssl-dos
featured: false
draft: false
tags:
  - Infraestructura
  - Seguridad
description: "Cisco confirmó explotación activa de un flaw no autenticado en el servicio SSL VPN de Secure Firewall ASA y FTD: una petición HTTP maliciosa reinicia el equipo. Sin workaround, la única opción son los hotfixes."
---

![Ilustración editorial de un firewall de red corporativa con un escudo agrietado y tráfico interrumpido, estilo tech editorial](../../assets/images/2026-08-16-cisco-firewall-zero-day-vpn-ssl-dos.jpg)

Fin de semana movido para los equipos de red: Cisco confirmó **explotación activa en la wild** de CVE-2026-20349, una vulnerabilidad de denegación de servicio **sin autenticación** en el servicio Remote Access SSL VPN de Secure Firewall ASA y Secure Firewall Firewall Threat Defense (FTD).

## Qué hace exactamente

El bug vive en el procesamiento de peticiones HTTP dirigidas al servicio SSL VPN: por un chequeo de errores insuficiente, **una sola petición maliciosa basta para que el appliance se recargue inesperadamente**. Sin credenciales, sin interacción del usuario, un request y chao. El resultado es caída del acceso remoto VPN y potencialmente de la conectividad site-to-site en el borde de la red.

## Quién está expuesto

Solo los equipos con estos servicios habilitados:

- **SSL VPN / WebVPN** en ASA o FTD
- **Servicios de cliente IKEv2**
- **Zero Trust Network Access (ZTA)** en FTD

Si tienes eso apagado, respiras. Si no, a patchear.

## Qué hacer

- **No hay workaround**: Cisco fue clara, la mitigación confiable son los hotfixes.
- Ya hay fixes para las ramas **ASA 9.16–9.24** y **FTD 7.0–10.0**.
- Reportada también por el investigador Valerio Brussani; el PSIRT de Cisco se enteró de la explotación activa en agosto de 2026.

Dato adicional: la falla se suma a una semana cargada de parches (Patch Tuesday récord de Microsoft, 11 CVEs en Palo Alto, avisos de Fortinet), así que si manejas infraestructura de borde, este finde probablemente ya no fue de descanso. Prioridad uno: aplicar el hotfix y auditar si el servicio SSL VPN quedó accesible desde internet.
