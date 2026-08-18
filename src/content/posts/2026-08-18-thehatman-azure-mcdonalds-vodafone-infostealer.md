---
title: "TheHatman vende millones de registros robados de tenants de Azure: McDonald's, Vodafone y TCS en la lista"
author: Carlos
pubDatetime: 2026-08-18T16:00:00Z
slug: thehatman-azure-mcdonalds-vodafone-infostealer
featured: false
draft: false
tags:
  - Seguridad
  - Cloud
description: "Un threat actor vende directorios corporativos completos de 9 organizaciones extraídos de tenants de Azure. Hudson Rock lo vincula a infostealers, no a un zero-day. La lección: MFA no basta."
---

![Ilustración editorial de un ladrón en sombra extrayendo fichas de un panel de nube corporativa con ganchos de datos, paleta azul oscuro, estilo tech editorial](../../assets/images/2026-08-18-thehatman-azure-mcdonalds-vodafone-infostealer.jpg)

Si tu fin de semana era tranquilo, acá va algo para arrugarlo: un threat actor que se hace llamar **TheHatman** está vendiendo **millones de registros** que parecerían salir de los tenants de Azure de nueve organizaciones grandes, según la investigación de Hudson Rock publicada esta semana.

## Los números del desastre

Los datasets son, en práctica, **exports de directorios corporativos de Azure AD** — o sea, la guía telefónica interna de cada empresa:

- **McDonald's:** +1,7 millones de registros (el más grande)
- **TCS:** 800.000
- **Vodafone:** 425.000
- **HCL Technologies:** 250.000
- **IHG:** 185.000
- También en la lista: Kyndryl, Gap y otros

Los campos incluyen nombres, correos corporativos, IDs de empleado, cargos, teléfonos y direcciones. En algunos casos también se llevaron **service accounts** y otros datos del tenant.

## La parte importante: no es un zero-day de Azure

Hudson Rock fue claro: la evidencia apunta a **credenciales comprometidas vía malware infostealer** infectando máquinas de usuarios con acceso, **no a una vulnerabilidad sistémica en Azure**. Encontraron infecciones de infostealer vinculadas a credenciales de varias de las empresas afectadas.

Esto es lo que hace que la noticia sea más útil que alarmista:

- **Los datos parecen legítimos**: los formatos y campos calzan con exports reales de Azure directory, según Hudson Rock.
- **El vector es aburrido y conocido**: infostealers robando cookies/sesiones y credenciales de endpoints corporativos. Nada exótico.
- **La escala viene del multiplicador**: una credencial con permisos de lectura de directorio en un tenant grande = millones de registros en un solo dump.

## Qué hacer con esto

1. **Revisa quién puede hacer bulk export del directory** en tu tenant. Spoiler: por defecto, más gente de la que crees.
2. **Session tokens > contraseñas**: los infostealers modernos roban cookies de sesión activas, así que el MFA tradicional no te salva si el token ya está autenticado. Considera tokens de sesión cortos y access reviews reales.
3. **Hardening de endpoints**: gran parte de estas campañas empieza en una máquina de un usuario con malware de cracked software o malvertising.
4. Si estás en una de las empresas afectadas: asume que tu org chart interno ya circula — perfecto material para phishing súper dirigido y vishing. Adelanta el training.

La historia de fondo es la misma de siempre: **la identidad es el nuevo perímetro**, y mientras el acceso a los directorios sea barato de leer, un solo endpoint infectado va a seguir costando millones de registros.

**Fuentes:** Hudson Rock, The Register, SecurityWeek, Cybernews, Techzine.
