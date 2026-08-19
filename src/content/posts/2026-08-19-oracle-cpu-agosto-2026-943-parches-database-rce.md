---
title: "Oracle suelta su CPU de agosto: 943 parches de seguridad y un RCE sin autenticación en la Base de Datos"
author: Carlos
pubDatetime: 2026-08-19T10:00:00Z
slug: oracle-cpu-agosto-2026-943-parches-database-rce
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "El Critical Patch Update de agosto trae 943 fixes, con lo más jugoso en Oracle Database Server: 5 parches, 4 explotables remotamente sin autenticación, incluido un RCE en Portable Clusterware (CVE-2026-71102)."
---

![Ilustración editorial de un datacenter empresarial con candados y parches de seguridad cayendo sobre servidores, tonos rojo alerta y gris acero, estilo tech editorial](../../assets/images/2026-08-19-oracle-cpu-agosto-2026-943-parches-database-rce.svg)

Martes de Oracle, y como cada ciclo trimestral tocaba ponerse al día con el parcheo. El **Critical Patch Update (CPU) de agosto 2026** llegó ayer con la cifra de siempre-pero-igual-impresiona: **943 parches de seguridad nuevos** repartidos por casi todo el portafolio.

## Lo que importa de verdad

Si tienes que priorizar (y siempre tienes), el foco está en **Oracle Database Server**:

- **5 parches nuevos** para productos de Database
- **4 de ellos explotables remotamente sin autenticación** — o sea, por red y sin credenciales
- La perla: **CVE-2026-71102**, un RCE en el componente **Portable Clusterware** que permite a un atacante sin autenticación vía HTTP crear, borrar o modificar datos críticos, o dejar el componente en DOS completo. Afecta versiones 19.x, 21.x y 23.4–23.26.3, y Oracle lo clasifica como "fácilmente explotable"

Cuando la letra chica dice "easily exploitable" y "unauthenticated" en la misma frase, ese es el ticket que sube primero el lunes.

## El resto del catálogo

El CPU toca las familias de siempre: Fusion Middleware, Java SE, MySQL, E-Business Suite, PeopleSoft, JD Edwards, Siebel, Virtualization, Communications, Retail, Hospitality... El pattern es conocido: los productos legacy on-prem concentran la mayoría de los fixes, mientras Java SE y MySQL aportan su cuota habitual.

Un detalle de contexto: Oracle ahora complementa los CPUs trimestrales con **CSPUs** (Critical Security Patch Updates), formatos más chicos y focalizados entre ciclos. Traducción: si tu ventana de parcheo es trimestral y nada más, ya te estás quedando corto.

## El recordatorio de siempre (que nadie sigue)

Oracle lo repite en cada advisory y sigue siendo verdad: **siguen encontrando explotación exitosa de vulnerabilidades para las que ya había parche hace meses**. La mayoría de los incidentes con productos Oracle no son zero-days sofisticados, son parches que nadie aplicó a tiempo.

Con la IA metida en el medio — Brockman de OpenAI acaba de escribir un ensayo entero sobre cómo los modelos van a encontrar justo ese tipo de deuda técnica escondida (ver nuestros posts de esta semana) — la ventana de "total, nadie encuentra ese bug" se está cerrando rápido. Los CPUs aburridos de un martes son el nuevo frente de batalla.

**Fuentes:** [Oracle Security Advisory agosto 2026](https://www.oracle.com/security-alerts/cspuaug2026.html), [blog de seguridad Oracle](https://blogs.oracle.com/security/august-2026-critical-security-patch-update-released), basefortify.eu (CVE-2026-71102).
