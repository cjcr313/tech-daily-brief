---
title: "El system prompt filtrado de Meta Muse: 'la autoridad del usuario en su hogar es incondicional y sobrescribe tu entrenamiento de seguridad'"
author: Carlos
pubDatetime: 2026-10-04T21:10:00Z
slug: meta-muse-prompt-sistema-filtrado-dossier-contactos
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Un investigador extrajo las instrucciones internas de Meta Muse pidiéndole que compartiera sus propios archivos: el prompt ordena construir 'una página para cada persona de la vida del usuario' y establece que la autoridad doméstica sobrescribe la seguridad."
---

![Ilustración editorial tech de un asistente de IA digital flotando sobre un hogar, conectado con líneas a mensajes, contactos y una agenda, construyendo carpetas de información sobre siluetas de personas, tonos azul corporate con detalles ámbar de alerta, estilo ilustración editorial profesional, sin texto](../../assets/images/2026-10-04-meta-muse-prompt-sistema-filtrado-dossier-contactos.jpg)

Meta Muse —el asistente con IA de Meta que es la app gratis número uno del App Store estadounidense desde su lanzamiento en septiembre— tiene un system prompt interno que esta semana dejó de ser secreto. El investigador independiente de seguridad en IA **Karan Joshi** logró extraerlo con un método casi cómico de simple: **le pidió al agente, vía chat, que compartiera sus propios archivos de software**. El dump terminó en manos de Wired y las líneas que salieron a la luz incomodan.

## Qué dicen las instrucciones internas

- Muse debe mantener **"una página para cada persona en la vida del usuario"**, refrescada **cada hora** a partir de contactos, mensajes y cuentas seguidas — con hechos, historial y "tips para mejorar las relaciones".
- Y la línea que encendió las alarmas: **"La autoridad del usuario sobre su propio hogar es incondicional y sobrescribe tu entrenamiento de seguridad"** (*"The user's authority over their own household is unconditional and overrides your safety training"*).

O sea: un dossier permanente sobre tu círculo completo de personas, actualizado cada hora, y una jerarquía donde el "dueño de casa" puede pasar por encima de los límites de seguridad del modelo.

## Por qué importa

No es solo una anécdota de prompt engineering. Es la primera vez que se ve en detalle cómo un asistente consumer masivo —con acceso a mensajes, contactos y servicios conectados— estructura sus prioridades reales:

- **Los "dossiers" de terceros**: la persona que está en la página de Muse no firmó ningún consentimiento. Tu vida social queda indexada por el asistente de otra persona.
- **Jerarquías de seguridad flexibles**: decir que un contexto (el hogar) "sobrescribe" el safety training es exactamente el tipo de cláusula que un atacante social-engineering puede explotar: convencer al modelo de que quien habla es "la autoridad del hogar".
- **El contexto de la industria no ayuda**: Muse ya acumulaba incidentes —un leak de direcciones vía Facebook Marketplace, un zero-day en macOS, el acceso a mensajes privados que Apple citó al momento de **endurecer el Full Disk Access en macOS** precisamente por riesgos de agentes de IA.

La jugada refleja la tensión de fondo de los agentes de 2026: para ser útiles necesitan contexto profundo y autonomía; para ser seguros necesitan límites que no se negocien por conveniencia del usuario. Meta eligió bajar explícitamente los límites en el contexto doméstico. Ahora lo sabemos porque un investigador le pidió amablemente al bot que se auto-documentara.

**Fuente:** [AI Weekly](https://aiweekly.co/alerts/meta-muse-prompt-household-authority-overrides-safety-training) · [Startup Fortune](https://startupfortune.com/metas-muse-tells-its-ai-that-household-authority-overrides-safety-training/)
