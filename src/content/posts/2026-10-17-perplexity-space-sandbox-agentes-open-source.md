---
title: "Perplexity liberó SPACE: el sandbox Firecracker que aísla a sus agentes de IA ya es open source"
author: Carlos
pubDatetime: 2026-10-17T03:07:00Z
slug: perplexity-space-sandbox-agentes-open-source
featured: false
draft: false
tags:
  - Open Source
  - Seguridad
  - IA
description: "Perplexity publicó bajo Apache 2.0 el sandbox de microVMs Firecracker que corre todas las sesiones de su agente Computer. Cero escapes en 108 intentos de red team."
---

![Ilustración editorial de un agente de IA encapsulado en una burbuja de microVM aislada, con paredes de contención y canales de datos controlados alrededor](../../assets/images/2026-10-17-perplexity-space-sandbox-agentes-open-source.jpg)

La pregunta incómoda de 2026 ya no es "¿dejamos que los agentes ejecuten código?" sino "¿dónde los dejamos ejecutarlo sin que incendien algo?". Perplexity respondió abriendo su propia respuesta: **SPACE** (Sandboxed Platform for Agentic Code Execution), el sandbox que corre en producción **todas las sesiones de su agente Perplexity Computer desde julio**, ahora disponible bajo **Apache 2.0**.

## Qué es exactamente

SPACE está escrito en **Rust** y su diseño es directo al grano:

- **Una microVM de Firecracker por cada tarea de agente**. Nada de contenedores compartidos con namespaces sueltos: aislamiento de kernel real, la misma tecnología que respalda AWS Lambda y Fargate
- **Las credenciales y los controles de egreso viven FUERA de la VM**. Este es el detalle de arquitectura clave: aunque el agente escape de su entorno, no encuentra llaves adentro que robar, y el tráfico de red se controla desde un plano que el agente no puede tocar
- arranque de microVMs en el orden de los cientos de milisegundos, pensado para tareas efímeras de agentes que nacen y mueren en minutos

## Los números que importan

La evidencia de seguridad es la parte que destaca del lanzamiento:

- **108 intentos de red team sin un solo escape de VM**
- En pruebas comparativas, **7 de 9 sandboxes rivales fueron vulnerados** bajo los mismos ataques. O sea: casi todo lo que hoy la industria usa para "contener" agentes cae con relativa facilidad

En adopción, el repo despegó con **770 estrellas en las primeras 24 horas** (ya iba por 820 al 16 de octubre), lo que dice bastante del hambre que hay por soluciones acá.

## La capa de sandboxes se está volviendo commodity

El timing no es casualidad. Hace dos semanas **cinco plataformas** (DigitalOcean, Uber, E2B, Daytona y Cloudflare) lanzaron aislamiento copy-on-write en una sola semana, y el **Agent Sandbox CRD de Kubernetes llegó a GA en mayo**. Perplexity aporta ahora su versión battle-tested con un matiz distinto: no es una startup vendiendo infra, es un laboratorio que corre esto a escala de consumo todos los días.

Para equipos que construyen agentes con acceso a shell, navegación o filesystem, SPACE baja la barrera de entrada dramáticamente: lo que antes era semanas de ingeniería de plataforma hoy es un `docker pull` y un manifiesto.

**El resumen**: el sandbox dejó de ser un diferenciador para convertirse en requisito de entrada de la era agéntica. Perplexity lo entendió y regaló la implementación — el riesgo reputacional de que "tu agente escapó" supera con creces la ventaja de mantenerlo cerrado. Si tu equipo corre código generado por LLMs sin aislamiento de microVM, este repo es la señal para salir del modo Pánico Silencioso.
