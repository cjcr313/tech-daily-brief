---
title: "NatJack: nuevo ataque manipula tablas NAT para secuestrar sesiones TCP y suplantar DNS"
author: Carlos
pubDatetime: 2026-08-08T04:00:00Z
slug: natjack-ataque-nat-hijack-tcp-dns
featured: false
draft: false
tags:
  - Seguridad
  - Infraestructura
  - DevOps
description: "Investigador Malcolm Stagg presentó NatJack en Black Hat USA 2026: una nueva clase de ataque que manipula tablas NAT para secuestrar conexiones TCP, spoofear DNS y agotar conexiones. Afecta Windows, Linux y macOS."
---

![NatJack - Ataque a tablas NAT](../../assets/images/2026-08-08-natjack-ataque-nat-hijack-tcp-dns.jpg)

Esto es de los que te hacen repensar tu arquitectura de red. En el **Black Hat USA 2026**, el investigador **Malcolm Stagg** (a través de SODIUM-24) presentó **NatJack** — una nueva clase de ataque que rompe un supuesto que todos dábamos por sentado: que los hosts detrás del mismo NAT no pueden manipularse entre sí.

## ¿Qué hace NatJack?

NatJack abusa del estado de conexión NAT para hacer cuatro cosas:

1. **Secuestrar sesiones TCP activas** — reemplazando el mapeo NAT de una conexión legítima
2. **Suplantar respuestas DNS** — interfiere con el request DNS de la víctima para que la respuesta legítima llegue al atacante, quien envía una respuesta falsa
3. **Exponer puertos mapeados externamente** — revela información de la topología interna
4. **Agotar la tabla de conexiones NAT** — llena la tabla con flujos falsos hasta que los clientes legítimos no pueden crear nuevas conexiones (DoS)

## Los CVEs

Se asignaron dos CVEs específicos:

| CVE | Plataforma | CVSS | Detalle |
|---|---|---|---|
| **CVE-2026-56181** | Windows NAT (Hyper-V) | 8.3 | Error de validación de origen que permite spoofing desde red adyacente |
| **CVE-2026-63913** | Linux Netfilter conntrack | 8.2 | Un SYN seguido de un reset con secuencia inválida fuerza el cierre prematuro de una entrada NAT activa |

**Windows afectado:** Windows 11 24H2 (< 26100.8875), 25H2 (< 26200.8875), 26H1 (< 28000.2525), Windows Server 2025 (< 26100.33158).

**Linux corregido en:** 5.10.259, 5.15.210, 6.1.176, 6.6.143, 6.12.93, 6.18.35, 7.0.12, 7.1.

## El supuesto que rompe

El diseño de NAT asume que los hosts detrás del mismo NAT **no son hostiles entre sí**. NatJack demuestra que ese supuesto ya no sirve. Un atacante con acceso privilegiado a un sistema detrás del mismo NAT puede manipular las entradas de connection-tracking de otro sistema.

Stagg testeo las técnicas contra **docenas de productos reales de múltiples vendors** y demostró proof-of-concept en ambiente controlado. No hay evidencia de explotación en el wild hasta el 7 de agosto de 2026.

## ¿El patch lo arregla?

En Linux, el fix del kernel **corrige el flaw de código pero solo mitiga** la técnica broader de downstream-spoofing. Aumenta la complejidad del ataque pero no lo elimina completamente. No existe un patch único para la clase completa de ataque NatJack.

## ¿Qué hacer?

1. **Aplicar updates de Windows y Linux inmediatamente.** Especialmente crítico si usas Hyper-V o Netfilter NAT.
2. **Separar workloads no confiables** de sistemas confiables que comparten NAT. Esta es la mitigación principal que recomienda la investigación.
3. **Cifrar tráfico interno.** Si todo está cifrado, el secuestro de TCP sessions pierde gran parte de su valor.
4. **Habilitar IP Source Guard** donde aplique.
5. **Revisar arquitecturas multi-tenant** donde máquinas de distintos niveles de confianza comparten NAT (cloud environments, VPCs compartidas, etc.).

## Impacto para DevOps

Esto es especialmente relevante para equipos que corren **múltiples workloads en la misma red interna** — clusters de Kubernetes, VMs multi-equipo, entornos de staging que comparten infra con producción. Si un atacante compromete un solo nodo dentro de tu red NAT, NatJack le da herramientas para interferir con las conexiones de otros servicios.

La regla de oro de siempre vale el doble ahora: **zero trust no es opcional, ni siquiera dentro de tu propia red**.

---

**Fuentes:** [The Hacker News](https://thehackernews.com/2026/08/new-natjack-attacks-hijack-tcp-sessions.html), [Black Hat USA 2026](https://blackhat.com/us-26/briefings/schedule/#breaking-trust-boundaries-exploiting-design-assumptions-in-network-infrastructure-53311), [NatJack.io](https://natjack.io/), [GBHackers](https://gbhackers.com/new-natjack-nat-attack/)
