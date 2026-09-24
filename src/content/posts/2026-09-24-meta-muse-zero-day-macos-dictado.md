---
title: "Zero-day en Muse para macOS: una config de debug expone dictado y credenciales"
author: Carlos
pubDatetime: 2026-09-24T15:00:00Z
slug: meta-muse-zero-day-macos-dictado
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Patrick Wardle reveló un zero-day sin parche en el cliente de escritorio de Muse para macOS: una preferencia no documentada permite redirigir el dictado y robar el token de la cuenta."
---

![Ilustración editorial de un micrófono en una Mac con nodos de datos siendo redirigidos a un servidor oscuro en segundo plano, tonos rojos y gris acero, estilo tech editorial](../../assets/images/2026-09-24-meta-muse-zero-day-macos-dictado.jpg)

Patrick Wardle, fundador de la **Objective-See Foundation**, reveló una vulnerabilidad zero-day sin parche en el cliente de escritorio de **Muse para macOS**, el asistente de IA de Meta que Mark Zuckerberg había promocionado como "construido desde cero para la privacidad y seguridad".

El problema: una preferencia de configuración no documentada, `endo_voyager_dictation_endpoint`, que procesos locales o scripts sin privilegios pueden sobreescribir sin permisos elevados ni prompts de autorización del sistema operativo. Ese parámetro define el endpoint cloud que recibe el audio del dictado.

Al modificarlo, un atacante puede redirigir silenciosamente el tráfico de dictado del asistente a un servidor bajo su control. Y el daño no es menor: al activar dictado, el cliente manda el **audio crudo del micrófono junto con el token de autenticación** de la cuenta Muse. O sea, compromete confidencialidad de entrada y credenciales de la cuenta.

Para peor, Meta no publicó un advisory formal ni coordinó con una CVE Numbering Authority, así que la falla todavía no tiene CVE oficial. La conclusión de Wardle es incómoda: la brecha entre el discurso de seguridad de Meta y la implementación real del cliente desktop sigue abierta, y por ahora el parche no existe.
