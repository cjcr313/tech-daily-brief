---
title: "Cisco FMC bajo fuego: Sandworm y Qilin explotan una falla CVSS 10.0"
author: Carlos
pubDatetime: 2026-09-12T22:00:00Z
slug: cisco-fmc-sandworm-qilin-cvss-10
featured: false
draft: false
tags:
  - Seguridad
  - Infraestructura
description: "Cisco Talos documentó tres clústeres de atacantes explotando CVE-2026-20079 y CVE-2026-20316 para robar credenciales y desplegar ransomware Qilin sobre el Secure Firewall Management Center."
---

![Ilustración editorial de seguridad de red: un firewall corporativo con grietas y luces de alarma rojas, con siluetas de agentes de amenaza al acecho, tonos azul profundo y rojo, concepto abstracto de ciberataque sobre fondo oscuro](../../assets/images/2026-09-12-cisco-fmc-sandworm-qilin-cvss-10.jpg)

El aparato que se supone protege tu perímetro se convirtió en la puerta de entrada. **Cisco Talos** reveló que al menos **tres clústeres de atacantes** están explotando dos vulnerabilidades en el **Secure Firewall Management Center (FMC)** para robar credenciales, moverse lateralmente y, en un caso, desplegar **ransomware Qilin**.

## Las dos fallas

La estrella es **CVE-2026-20079**, un bypass de autenticación con **CVSS 10.0** —la nota máxima posible—. Se combina con **CVE-2026-20316**, una falla de inicio de sesión con privilegios bajos (credenciales estáticas) que los atacantes usan para entrar y hacer reconocimiento.

Cisco ya tiene **hotfixes disponibles** para ambas versiones afectadas, y Talos fue tajante: aplicarlos no es recomendación, es urgencia.

## Tres clústeres, tres historias

El primero apunta a **espionaje**: un actor al que los analistas vinculan con **Sandworm**, la unidad de ciberespionaje del **GRU ruso**. El segundo hace lo mismo pero con foco en robo de credenciales y creación de listas de endpoints para cifrar.

El tercero es el que más duele: un **afiliado de Qilin** que entra con las credenciales estáticas (CVE-2026-20316), hace reconocimiento de red y endpoints, roba credenciales, instala **killers de antivirus** y ejecuta el ransomware. Todo el kit incluye tooling open source conocido: **impacket**, **Invoke-TheHash** y utilidades caseras para desactivar defensas.

## La ventana de exposición

Reportes independientes estiman **alrededor de 700 boxes de FMC expuestos** a internet. Y no es solo cosa de Talos: **CISA** agregó CVE-2026-20079 a su catálogo de vulnerabilidades explotadas activamente, con plazo para que las agencias federales de EE.UU. parcheen de inmediato.

La lección de fondo duele más que el CVE: cuando el dispositivo de seguridad se explota contra ti, toda la cadena de defensa se invierte. Si administras FMC, parchea hoy, no el lunes.

Vía [Cisco Talos](https://blog.talosintelligence.com/fmc-ongoing-exploitation/), [The Hacker News](https://thehackernews.com/2026/09/cisco-fmc-flaws-exploited-to-steal.html) y [Help Net Security](https://www.helpnetsecurity.com/2026/09/10/cisco-fmc-exploited-cve-2026-20079-cve-2026-20316/).
