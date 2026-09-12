---
title: "Check Point parchea dos fallas críticas de VPN que permiten RCE sin autenticación"
author: Carlos
pubDatetime: 2026-09-12T09:00:00Z
slug: check-point-vpn-rce-cvss-98
featured: false
draft: false
tags:
  - Seguridad
  - Infraestructura
description: "CVE-2026-85102 y CVE-2026-85103, con CVSS 9.8, permiten ejecución remota de código sin autenticación en gateways y firewalls de Check Point."
---

![Ilustración de vulnerabilidad VPN](../../assets/images/2026-09-12-check-point-vpn-rce-cvss-98.jpg)

Ojo con esta: Check Point anunció parches para dos vulnerabilidades críticas en sus gateways y firewalls con funcionalidad VPN, y ambas con un CVSS de 9.8 que permite **ejecución remota de código (RCE) sin autenticación**.

Las fallas son:

- **CVE-2026-85102**: validación incorrecta de certificados durante la negociación VPN (CWE-295). Afecta a Security Gateway y Spark Firewall con Site-to-Site VPN o Remote Access VPN.
- **CVE-2026-85103**: heap overflow en el flujo de decodificación ASN.1 de certificados VPN. Impacta a Security Management Server, Security Gateway y Spark Firewall.

Los updates cubren las versiones R82.10, R82 y R81.20. Si no puedes parchear de inmediato, Check Point recomienda desactivar las reglas implícitas de VPN y definir manualmente el acceso UDP/500 y UDP/4500 solo para las IPs de los peers específicos. Eso sí, la mitigación no aplica a instancias Spark Firewall gestionadas localmente: esas deben aplicar los últimos Jumbo hotfixes sí o sí.

La buena noticia: fueron descubiertas internamente y no hay evidencia de explotación en la naturaleza. La mala: este verano ya vimos a Check Point lidiando con dos zero-days explotados (CVE-2026-16232 y CVE-2026-50751), así que el tema VPN viene caliente.

Si tienes LivePatch habilitado, los parches llegan solos. Si no, a correr.
