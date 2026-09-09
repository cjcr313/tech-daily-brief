---
title: "Microsoft rompe récord en Patch Tuesday: 974 CVEs, 2 zero-days explotados y 20 bugs wormeables"
author: Carlos
pubDatetime: 2026-09-09T09:00:00Z
slug: microsoft-patch-tuesday-record-974-cve
featured: false
draft: false
tags:
  - Seguridad
  - Infraestructura
  - Cloud
description: "El Patch Tuesday de septiembre 2026 es el más grande de la historia de Microsoft: 974 CVEs, dos zero-days en explotación activa y un RCE crítico en Exchange Server."
---

![Ilustración editorial de un escudo de parches de seguridad sobre infraestructura cloud](../../assets/images/2026-09-09-microsoft-patch-tuesday-record-974-cve.jpg)

Si creías que los Patch Tuesday ya no podían sorprender, septiembre llegó a callarte la boca. Microsoft soltó el martes el **mayor lote de parches de su historia**: **974 CVEs** corregidos de una sola vez, superando en ~57% el récord anterior (de julio). Y no es solo volumen: adentro vienen **dos zero-days que ya están siendo explotados** y una lista de **20 vulnerabilidades "wormeables"**.

## Los dos zero-days en el wild

Ambos permiten **escalada de privilegios a nivel SYSTEM**, y por eso son el clásico "primera etapa" para atacantes que ya tienen un pie adentro:

- **CVE-2026-85880 (CVSS 7.8):** heap buffer overflow en **Windows ALPC** (Advanced Local Procedure Call). Un atacante con código en un AppContainer de bajo privilegio puede escapar el sandbox y elevar privilegios sin interacción del usuario. Es recién el **segundo zero-day de ALPC parcheado desde enero de 2023**.
- **CVE-2026-81963 (CVSS 7.8):** defecto de "link following" en el **Windows Update Stack**. Es el **primer zero-day confirmado en explotación activa** en este componente en cinco años.

Ojo con el patrón: ambos requieren acceso local y privilegios de usuario. No son el vector inicial, son el *puente* para tomar control total una vez que ya entraron.

## El que más duele: Exchange

Más urgente que los dos zero-days es **CVE-2026-55007**, un **RCE en Exchange Server** que merece parche inmediato. Según ZDI, un atacante **sin autenticación** puede mandar un correo con un **Visio** especialmente armado para ejecutar código remoto. Exchange + RCE sin auth = prioridad número uno en cualquier checklist.

## El desglose del monstruo

- **723** fallas en **Windows**, **222** en **Office** (111 solo en Office 2016), **62** en SQL, **22** en Developer Tools, **16** en SharePoint, **12** en Azure, **10** en Skype for Business y **9** en Exchange Server.
- Además de lo que destaca ZDI: **CVE-2026-80097** (EoP en Authenticator), **CVE-2026-69465** (RCE en SharePoint), **CVE-2026-65669** (EoP en SQL Server) y **CVE-2026-69525** (RCE en Remote Desktop Services).
- **20 vulnerabilidades wormeables** (RCE sin autenticación ni interacción), y **58** calificadas por Microsoft como "más probables de ser explotadas".

## El contexto que explica todo: la IA auditando código

¿Por qué suben tanto los números? Porque el conteo mensual está siendo inflado por el **descubrimiento de vulnerabilidades asistido por IA**. Dustin Childs (ZDI) lo resume con elegancia: felicitaciones a los "gnomos de seguridad" de Microsoft por parchear a este ritmo, pero *"el descubrimiento de vulnerabilidades asistido por IA no muestra señales de desaceleración"*. Y el dato tranquilizador dentro de lo caótico: **todavía no aparece el spike de exploits activos** que acompañe la ola de CVEs — aunque ZDI lo marca como un "aún".

Además, la cifra de portada es engañosa hacia abajo: Microsoft ya había corregido **otras ~204 vulnerabilidades** a principios de septiembre en Azure, Entra ID, Edge y otros servicios. El total real del mes es bastante más alto que los 974.

## Qué hacer (sin paniquear)

- **Parchea Exchange ya.** El RCE vía Visio es la joya de la corona para los atacantes.
- Prioriza los **dos zero-days de escalada** (ALPC y Update Stack), sobre todo en endpoints y estaciones de trabajo.
- Revisa los **20 wormeables** en tu superficie expuesta (RDS, SharePoint).
- Asume que el volumen de CVEs va a seguir subiendo: automatiza el ciclo de patching en vez de correrlo a mano. La IA encontrará más bugs; tu equipo no va a encontrar más horas en el día.

**Fuentes:** [SecurityWeek](https://www.securityweek.com/microsoft-patches-record-974-vulnerabilities-including-two-exploited-zero-days/), [Security Affairs](https://securityaffairs.com/198705/security/microsofts-biggest-patch-tuesday-974-cves-2-zero-days-and-20-wormable-bugs.html), [Zero Day Initiative](https://www.zerodayinitiative.com/blog/2026/9/8/the-september-2026-security-update-review), [The Register](https://www.theregister.com/security/2026/09/09/microsoft-breaks-patch-tuesday-record-with-974-cve-deluge/).
