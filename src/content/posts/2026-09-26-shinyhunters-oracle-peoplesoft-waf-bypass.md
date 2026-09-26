---
title: "ShinyHunters reanuda campaña contra Oracle PeopleSoft saltándose el WAF"
author: Carlos
pubDatetime: 2026-09-26T09:00:00Z
slug: shinyhunters-oracle-peoplesoft-waf-bypass
featured: false
draft: false
tags:
  - Seguridad
  - Cloud
  - DevOps
description: "Mandiant detecta explotación masiva de CVE-2026-35273 con bypass del WAF vía /%50SEMHUB/ y web shells duales."
---

![Ilustración editorial de un cortafuegos de aplicaciones web (WAF) siendo eludido por una petición con la ruta URL-codificada, mientras una base de datos PeopleSoft queda expuesta detrás](../../assets/images/2026-09-26-shinyhunters-oracle-peoplesoft-waf-bypass.jpg)

Mandiant y Google Threat Intelligence Group (GTIG) confirmaron una **nueva ola de explotación masiva de CVE-2026-35273** por parte de UNC6240, más conocido como ShinyHunters. La historia es una actualización directa de la campaña de junio, y la lección es incómoda: muchas organizaciones pusieron reglas de WAF pero **no parchearon**, y el atacante se adaptó.

## El bypass del WAF

En junio, ShinyHunters explotó la vulnerabilidad como zero-day contra instituciones académicas. La recomendación fue parchear o bloquear el endpoint `/PSEMHUB/` en el perímetro. El atacante ahora lo esquiva con un truco tonto pero efectivo: **URL-encoding de un solo carácter** — `/P` se convierte en `/%50S`, quedando `/%50SEMHUB/`.

La mayoría de las reglas de WAF y reverse proxies matchean el path literal *antes* de decodificar la URL, mientras que el servidor PeopleSoft decodifica y enruta al servlet vulnerable. Resultado: el endpoint queda expuesto en sistemas cuyos operadores creían mitigados.

## Qué está pasando

El targeting se expandió más allá de educación: tecnología, IT services, salud, agricultura, transporte y gobierno. Están desplegando web shells en decenas de sistemas con dos herramientas complementarias:

- **x.jsp**: shell cross-platform que recibe comandos hex-encoded por POST y reconstruye `/bin/sh` desde un array ASCII para evadir firmas estáticas.
- **u.jsp**: stager que sube binarios en chunks Base64 de 150 KB.
- **Ple64.exe (SIDEEYE)**: instalador troyanizado de 5.2 MB firmado con certificado EV válido, con un backdoor C++ en tres etapas que habla con su C2 por TCP (3333/3334).

## Qué hacer

La guía de Mandiant es clara: **parchear CVE-2026-35273** (las reglas de WAF no sustituyen el parche), deshabilitar EMHub si no se usa, revisar logs por `/PSEMHUB/` y sus variantes percent-encoded, y buscar archivos `.jsp`/`.exe` inesperados en `PSEMHUB.war`. Si encontraste un web shell, trata el host como comprometido y rota credenciales.

**Fuente:** Mandiant / Google Threat Intelligence.
