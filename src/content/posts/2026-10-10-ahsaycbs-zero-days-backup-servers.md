---
title: "Zero-days encadenados contra AhsayCBS: servidores de backup tomados con SYSTEM sin credenciales"
author: Carlos
pubDatetime: 2026-10-10T15:10:00Z
slug: ahsaycbs-zero-days-backup-servers
featured: false
draft: false
tags:
  - Infraestructura
  - DevOps
description: "Dos zero-days en Ahsay Cloud Backup Server se están explotando activamente desde el 7 de octubre: bypass de autenticación + inyección de comandos, webshells JSP y minería XMRig con persistencia. Versiones hasta 10.3.4 siguen vulnerables."
---

![Ilustración editorial tech de un rack de servidores de respaldo con cintas y candados luminosos siendo alcanzado por flechas de intrusión rojas, mientras un escudo defensivo se agrieta, paleta oscura con acentos rojos y ámbar, estilo ilustración editorial profesional, sin texto](../../assets/images/2026-10-10-ahsaycbs-zero-days-backup-servers.jpg)

Si tienen un Ahsay Cloud Backup Server expuesto a internet, esta nota es para cerrar la pestaña y salir a verificarlo ahora mismo. Field Effect publicó el 9 de octubre un reporte de explotación activa de **dos vulnerabilidades zero-day encadenadas en AhsayCBS**, y el combo es de lo más feo: **acceso sin autenticación que termina en ejecución de comandos como `NT AUTHORITY\SYSTEM`**.

## El encadenado, en concreto

- **CVE-2026-105133** (CVSS 5.5): improper authentication en la función `checkSysPwd`. Solo, parece modesto. El problema es con quién viaja.
- **CVE-2026-105134** (CVSS 9.3): inyección de comandos de OS en el componente **Replication Receiver**, la pieza que recibe datos de backup replicados desde otros sistemas.

Juntos, un atacante remoto y **sin credenciales ni interacción del usuario** puede configurar un replication receiver malicioso, desplegar un webshell JSP y ejecutar comandos con privilegios máximos en el servidor que administra justamente los respaldos de toda la organización.

## Qué están haciendo los atacantes

La explotación comenzó la noche del **7 de octubre**; la actividad se divulgó el 8 y al primer día ya había **cinco organizaciones afectadas** identificadas. El modus operandi observado:

- Reconocimiento inicial y despliegue de **webshells JSP** para ejecución persistente de comandos.
- Instalación de **XMRig disfrazado de proceso de Microsoft Edge**, más un **servicio falso de "actualización de Edge"** para persistencia.
- Scripts de PowerShell para ocultar la minería ante los defensores.

Hasta ahora no reportan robo de credenciales ni manipulación de los backups, pero el impacto potencial es obvio: quien controla el servidor central de respaldos controla la infraestructura que uno necesita justo durante un incidente de ransomware. En deployments multi-cliente o multi-sucursal, el riesgo se multiplica.

## Qué hacer

- **Inventario ya**: producción, DR, test y despliegues secundarios. Versiones **hasta 10.3.4 inclusive** seguían vulnerables al momento de la divulgación, sin fix del vendor disponible.
- Restringir el acceso a las interfaces de administración y replicación a **redes confiables o VPN**.
- Investigar: archivos JSP inesperados, procesos hijos sospechosos de `cbssvcX64.exe`, configuraciones de receiver no autorizadas, ejecución de PowerShell y conexiones salientes típicas de minería.
- Si hay compromiso: revisar servicios maliciosos y persistencia, y **reconstruir desde medios limpios** — una actualización de la app por sí sola no saca las modificaciones del atacante.

La lección de siempre, pero ahora con fecha: el servidor de backup también es superficie de ataque, y suele tener los permisos menos auditados de todos.

**Fuente:** [Field Effect](https://fieldeffect.com/blog/threat-actors-exploit-ahsaycbs-zero-days), cobertura de GBHackers (9-10-2026).
