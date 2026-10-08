---
title: "AWS abre Strands Box: sandbox open source para que tus agentes IA no anden en modo YOLO"
author: Carlos
pubDatetime: 2026-10-07T21:10:00Z
slug: strands-box-aws-sandbox-agentes-dogwood
featured: false
draft: false
tags:
  - DevOps
  - IA
description: "AWS liberó Strands Box, un sandbox local open source que combina aislamiento a nivel OS con políticas semánticas en Dogwood. La idea: que tu agente pueda hacer git push, pero solo si los tests pasan."
---

![Ilustración editorial tech de una caja de cristal translúcida conteniendo un pequeño agente robótico luminoso trabajando, con anillos de seguridad alrededor, estilo flat profesional en tonos naranjas AWS y azul oscuro, sin texto](../../assets/images/2026-10-07-strands-box-aws-sandbox-agentes-dogwood.jpg)

Si le diste acceso a un agente IA y ahora duermes con un ojo abierto, esto es para ti: AWS anunció **Strands Box**, un sandbox local **open source para agentes de IA** que combina aislamiento a nivel de sistema operativo con **políticas semánticas escritas en Dogwood**, el lenguaje de policy que AWS liberó hace unos meses. Está en developer preview y el código ya está en [GitHub](https://github.com/strands-agents/box).

## ¿Qué hace distinto a Strands Box?

La mayoría de los sandboxes aplican la política en la capa del OS. Strands Box usa los mecanismos de aislamiento del kernel al revés: **funneliza toda interacción del agente con el sistema hacia una capa de política dedicada**. O sea, el sandbox no decide — el sandbox garantiza que la única salida del agente pase por el policy engine. Eso permite políticas conscientes del contexto, del protocolo y del lenguaje.

Ejemplos reales de lo que podís escribir como política:

- Permitir `git push`, **pero solo si `npm test` pasó en los últimos 15 minutos** desde el último `git add`.
- Permitir el uso de la API de pagos, **hasta un total de US$100 al día**.
- Limitar el agente a **60 llamadas por hora** al servidor MCP de AWS.

Y funciona no importa cómo trabaje el agente: herramientas directas, MCP, o código generado en shell o Python (con [Strands Shell](https://github.com/strands-agents/shell) y Monty de Pydantic para las policies de scripts). Tampoco está atado al SDK de Strands ni a un modelo específico: **cualquier framework, cualquier modelo, local o en cualquier nube**.

## Una pieza más del rompecabezas

AWS viene armando este stack hace rato:

- **AgentCore Runtime**: MicroVMs con Firecracker para agentes en la nube.
- **AgentCore Policy**: control fino de herramientas con Cedar.
- **Dogwood**: lenguaje de política open source para agentes.
- **Dogwood Local Engine** (liberado la semana pasada): runtime local, rápido y durable para Dogwood.
- **Strands Box** (hoy): el sandbox local que une todo.

## Los peros

Developer preview significa exactamente eso: disponible en GitHub, pero **solo para macOS por ahora**. El soporte Linux está en desarrollo, Windows "en el radar" sin fecha, y el deployment a AgentCore, ECS y Kubernetes está planificado. Igual, como es open source y la filosofía es clara, vale echarle un ojo temprano.

La apuesta de fondo de AWS es interesante: la tensión eterna de los agentes es que necesitamos que exploren y resuelvan problemas abiertos, pero con límites **deterministas**. Ni jaula tan chica que el agente no sirve, ni patio tan amplio que borre producción a las 3 AM. Políticas semánticas verificables parecen la respuesta más elegante que hemos visto hasta ahora.

**Fuentes:** [Strands Agents Blog](https://strandsagents.com/blog/strands-box-the-big-picture/) · [The Register](https://www.theregister.com/ai-and-ml/2026/10/07/aws-launches-open-source-ai-agent-sandbox-to-prevent-yolo-mode-disasters/5301687)
