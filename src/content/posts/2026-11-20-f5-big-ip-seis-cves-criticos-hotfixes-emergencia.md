---
title: "F5 suelta hotfixes de emergencia por seis CVEs críticos en BIG-IP: caída de tráfico sin autenticar y RCE en configuraciones específicas"
author: Carlos
pubDatetime: 2026-11-20T21:00:00Z
slug: f5-big-ip-seis-cves-criticos-hotfixes-emergencia
featured: false
draft: false
tags:
  - Seguridad
  - Infraestructura
description: "Seis vulnerabilidades críticas (buffer overflows en APM y un flaw en iRules DNS) permiten a un atacante remoto sin autenticar tumbar el TMM y cortar el tráfico de BIG-IP, con posible ejecución de código. F5 publicó emergency hotfixes y el parcheo no es opcional."
---

![F5 suelta hotfixes de emergencia por seis CVEs críticos en BIG-IP: caída de tráfico sin autenticar y RCE en configuraciones específicas](../../assets/images/2026-11-20-f5-big-ip-seis-cves-criticos-hotfixes-emergencia.webp)

Si tienes BIG-IP en producción, esta semana se sumó otra línea al checklist que ya incluye Java, PHP, VMware y NGINX: **F5 publicó emergency hotfixes para seis CVEs críticos en BIG-IP** que permiten que un atacante remoto **sin autenticación detenga el TMM (Traffic Management Microkernel)** — el proceso que maneja literalmente todo el tráfico — y en configuraciones específicas, **ejecutar código**.

## Los seis CVEs y qué necesitan para explotarse

La lista completa: **CVE-2026-121805, CVE-2026-120292, CVE-2026-120285, CVE-2026-116953, CVE-2026-123637 y CVE-2026-120722**. La mayoría son **stack-based buffer overflows en el módulo APM** (Access Policy Manager), con CVE-2026-123637 coronando con **CVSS 9.8**: un atacante no autenticado puede detener comunicaciones y potencialmente escalar a algo peor.

El matiz importante (y el único alivio): **cada bug requiere un módulo, comando de iRule o política específica presente** en la configuración. No es un disparo a ciegas contra cualquier BIG-IP del planeta, pero si usas APM o las funciones afectadas, estás en la mira.

## El que más pica a la comunidad Kubernetes

**CVE-2026-120722** afecta iRules que usan **DNS::scrape sobre tráfico de cliente**, e impacta **BIG-IP DNS y BIG-IP Next for Kubernetes**. Aquí hubo confusión digna de mención: el advisory de F5 lista BIG-IP CNF como no vulnerable, pero el registro del CVE actualizado sí lo lista como afectado. Si operas la línea CNF (Cloud Native), asume que estás afectado hasta que F5 aclare.

## Qué hacer ahora

- **Aplica los EHF (Emergency Hotfixes)**: para la línea CNF existen CNF-2.4.2-EHF1, CNF-2.3.4-EHF1 y CNF-2.2.5-EHF1, cubriendo los rangos 2.4.x, 2.3.x y 2.2.x.
- **Audita APM e iRules con DNS::scrape** en tráfico de clientes; remover la configuración vulnerable también mitiga.
- Recuerda que los hotfixes de emergencia de F5 **no son upgrades acumulativos**: se instalan sobre versiones específicas, así que revisa la matriz antes de tocar producción un viernes.

El timing es casi cómico: The Register tituló la semana como "flaws en VMware y KVM, si te queda tiempo entre arreglar Java, PHP y todo lo demás". Noviembre 2026 está siendo un mes de parcheo sin tregua, y BIG-IP — crítico en más data centers de los que admiten los arquitectos — acaba de subir a la lista.

**Fuentes:** [The Hacker News](https://thehackernews.com/2026/11/f5-warns-6-critical-big-ip-flaws-can.html) · [BleepingComputer](https://www.bleepingcomputer.com/news/security/f5-releases-emergency-patches-for-critical-big-ip-rce-flaws/) · [BastionZero](https://www.bastionzero.com/blog/f5-big-ip-six-critical-vulnerabilities-crash-tmm-remote-code-execution)
