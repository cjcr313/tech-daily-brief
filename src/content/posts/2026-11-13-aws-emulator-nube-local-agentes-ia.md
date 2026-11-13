---
title: "AWS lanzó un emulador gratis de su nube… escrito completo por agentes de IA"
author: Carlos
pubDatetime: 2026-11-13T13:10:00Z
slug: aws-emulator-nube-local-agentes-ia
featured: false
draft: false
tags:
  - Cloud
  - DevOps
  - IA
description: "AWS Emulator replica las APIs de AWS en tu laptop, gratis y sin cuenta. El twist: todo el código lo escribieron agentes autónomos, con licencia CC0 en GitHub."
---

![Ilustración editorial de un computador portátil proyectando una nube holográfica en miniatura sobre el escritorio, con pequeños robots ensamblando bloques de infraestructura](../../assets/images/aws-emulator-nube-local-agentes-ia.jpg)

AWS sorprendió esta semana con el lanzamiento de **AWS Emulator**: un emulador local y gratuito de sus APIs en la nube. Apuntas el AWS CLI o cualquier SDK a un endpoint HTTPS local (puerto 9297) y pruebas tu aplicación contra "AWS" desde tu propia máquina, **sin cuenta de AWS y sin costo**. Solo pagas cuando despliegas de verdad en la nube.

## Lo interesante no es el qué, es el quién

El dato que a todos llamó la atención: **cada línea del emulador la escribieron agentes de IA autónomos**, siguiendo un pipeline de desarrollo guiado por pruebas donde los humanos revisaban pero no codificaban. Los agentes generaron el código, escribieron los tests, diagnosticaron los bugs e hicieron cada commit. El proyecto partió a comienzos de 2026, inspirado en la investigación de Anthropic que demostró que agentes podían construir compiladores de C de forma autónoma. En GitHub está el historial completo, incluyendo una carpeta gloriosamente honesta llamada **"things-that-do-not-work"** con los gaps conocidos.

Todo el código se publicó bajo **CC0 1.0** (dominio público), con los tests de fidelidad incluidos en el repo: [github.com/aws/aws-emulator](https://github.com/aws/aws-emulator).

## Cómo se usa

Según la documentación oficial, hay varios modos de ejecución:

- **Con un agente de código IA** (Claude Code, Cursor, Copilot, etc.)
- Desde un **paquete de Linux**
- En **Docker**
- **Modo embebido para tests en Rust**

La gracia es que los agentes de código conversan con el emulador usando las mismas APIs que usarían contra la nube real, sin quemar plata ni credenciales en cada iteración.

## Los peros

No todo es bonito. Según analistas citados por InfoWorld, el emulador todavía **no simula throttling, caídas de servicio ni diferencias de features por región**, y no sandboxea el código que ejecuta. Para tests de humo y desarrollo local sirve; para simular el caos del mundo real, todavía no.

El contexto extra: los emuladores de AWS no son nuevos — LocalStack lleva años en eso —, pero este año LocalStack puso su versión gratuita detrás de registro de cuenta y la limitó a uso no comercial. Con este movimiento, AWS le pisa la pista con una alternativa oficial, gratis y sin trabas.

AWS prometió más detalles en **re:Invent 2026** (Las Vegas, 30 de noviembre al 4 de diciembre). Ahí se verá si esto es un juguete o una pieza seria de la estrategia de AWS para la era donde los agentes escriben (y ahora también construyen) el software.

**Fuentes:** [AWS Blog](https://aws.amazon.com/blogs/aws/test-your-applications-against-aws-locally-with-aws-emulator/), [GeekWire](https://www.geekwire.com/2026/aws-gives-developers-a-free-local-stand-in-for-its-cloud-built-from-scratch-by-ai-agents/), [AWS Emulator Docs](https://docs.aws.amazon.com/emulator/)
