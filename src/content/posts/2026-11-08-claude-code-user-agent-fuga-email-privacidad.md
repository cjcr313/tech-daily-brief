---
title: "Claude Code metía tu email en el header User-Agent: el issue #107757 enciende la alarma de privacidad en agentes de código"
author: Carlos
pubDatetime: 2026-11-08T13:10:00Z
slug: claude-code-user-agent-fuga-email-privacidad
featured: false
draft: false
tags:
  - DevOps
  - IA
description: "Un usuario reportó que Claude Code enviaba el email de la cuenta en el header User-Agent de requests web, y que ahora recibe decenas de scam emails al día. Anthropic ya tiene un plugin de mitigación, pero con dudas sobre su efectividad."
---

![Ilustración editorial tech de un sobre brillante escapándose de una ventana de terminal abierta y viajando por cables de red hacia torres de servidores lejanas, fondo azul oscuro con acentos teal y ámbar, estilo vectorial plano](../../assets/images/2026-11-08-claude-code-user-agent-fuga-email-privacidad.jpg)

El problema de los agentes de código con acceso a la web no es teórico. El 5 de noviembre, el usuario **taylor-edwards** abrió el issue [#107757](https://github.com/anthropics/claude-code/issues/107757) en el repo de Claude Code con un título directo al grano: *"Privacy violation in User-Agent header"*. Su reclamo: **Claude Code estaba enviando el email de la cuenta logueada a sitios de terceros dentro del header User-Agent de las requests web**, sin permiso y sin que el usuario supiera. Hoy recibe "decenas de scam emails al día".

## ¿Cómo pasa algo así?

Un header User-Agent normalmente identifica el software que hace la request (tipo `Mozilla/5.0 ...`). Si en ese header va pegado tu email, **cada sitio que el agente toca durante una búsqueda o fetch recibe tu dirección de correo**. La explicación que circula en el thread apunta a algo incómodo: el modelo, con el email disponible en su contexto, lo habría usado como dirección de contacto al escribir comandos `curl`. O sea, **datos que entraron al contexto para un propósito terminaron saliendo por otro**.

Detalles del caso:

- **Versión afectada reportada**: Claude Code 2.1.318 en macOS, corriendo dentro de tmux
- **El reporte original no incluye capturas HTTP ni pasos de reproducción**, así que la evidencia pública no establece que todos los usuarios estén afectados — pero otros comentaristas reportaron experiencias similares
- El issue se disparó en Hacker News con más de 1.000 puntos

## La respuesta de Anthropic: un plugin, con asterisco

Desde la versión **2.1.317**, Claude Code incluye un módulo llamado **cc-plugin-privacy**, diseñado para bloquear este comportamiento, habilitado por defecto y desactivable vía `/plugins`. El problema: el reportero ya usaba la 2.1.318 y seguía afectado, y varios comentaristas cuestionaron si la protección funciona — algunos no encontraban el módulo y otros vieron pruebas locales con email + User-Agent pasar sin bloqueo.

Un empleado de Claude Code reconoció en el thread que existen brechas en la protección interina y que **el plan es sacar el email de la cuenta del contexto del modelo en un próximo release**, que es la solución de fondo: si el dato no está en el contexto, no puede filtrarse.

## La lección para el que opera agentes en producción

Esto va más allá de Anthropic. Cuando le das a un agente acceso a web y shell:

1. **El contexto es una superficie de exfiltración**. Cualquier dato que entre al contexto (emails, tokens, paths, credenciales) puede terminar en una request saliente escrita por el modelo.
2. **Un safeguard configurado no es prueba de nada** — hay que probarlo. Los propios commenters del issue hicieron tests locales que el plugin dejó pasar.
3. **Revisa los comandos network escritos por el agente** o, mejor, fuerza el egress por un proxy que loguee y filtre headers. Verificar que el User-Agent no lleva PII es literalmente un grep de una línea en tu proxy.

El issue seguía abierto al momento de escribir esto. Si tu equipo usa Claude Code (o cualquier coding agent con acceso a red), vale la pena actualizar a la última versión, revisar qué sale en tus headers, y asumir la regla de oro: **todo lo que el agente puede ver, el agente puede enviar**.
