---
title: "AgentCorruption: un solo prompt secuestra todos los agentes de AgentCore en una región de AWS"
author: Carlos
pubDatetime: 2026-10-11T03:05:00Z
slug: agentcorruption-aws-agentcore-un-prompt
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "Zenity Labs demostró que un prompt inyectado a un agente público de Amazon Bedrock AgentCore podía robar credenciales temporales de AWS y saltar a todos los agentes de la cuenta. AWS ya corrigió, pero discute que fuera un bug."
---

![Ilustración editorial de un agente de IA brillante atrapado en una red de nodos interconectados dentro de una nube, con una llave de credenciales luminosa escapándose hacia una silueta oscura, paleta azul oscuro y cian, estilo ilustración tech profesional dramática, sin texto](../../assets/images/2026-10-11-agentcorruption-aws-agentcore-un-prompt.jpg)

Zenity Labs bautizó **AgentCorruption** a una cadena de ataque que suena a pesadilla de cualquier equipo cloud: **un único prompt enviado a un agente público de Amazon Bedrock AgentCore bastaba para exponer a todos los agentes de la misma cuenta y región de AWS** — sus conversaciones privadas, código fuente, memorias de largo plazo, API keys, tokens OAuth y hasta los secretos guardados en AWS Secrets Manager.

## Cómo funciona la cadena

La receta es escalofriante por lo simple:

1. El agente público tenía una herramienta capaz de hacer requests web (o ejecutar shell).
2. Con **prompt injection**, se le pide contactar el endpoint de metadata local: `169.254.169.254`.
3. Como el request salió desde dentro de la microVM Firecracker del agente, el servicio de metadata le devuelve **credenciales temporales de AWS vinculadas al rol de ejecución**.
4. Y acá viene lo grave: el rol IAM por defecto **no estaba limitado a ese agente**, sino que tenía permisos amplios sobre todos los recursos AgentCore de la región.

Con esas credenciales en mano, los investigadores usaron `logs:DescribeLogGroups` para descubrir identificadores de otros agentes, bajaron imágenes de contenedores desde ECR para inspeccionar código, invocaron agentes internos con `bedrock-agentcore:InvokeAgentRuntime`, leyeron eventos de sesión, y con `bedrock-agentcore:CreateEvent` hasta **plantaron memorias falsas** — instrucciones ocultas que modifican el comportamiento del agente en conversaciones futuras. El ataque sobrevive a la sesión. Además encontraron acceso a `bedrock-agentcore:GetResourceApiKey` y `secretsmanager:GetSecretValue`, o sea, puerta directa a las credenciales de los servicios conectados al agente.

## Línea de tiempo del parcheo

- **25 dic 2025**: Zenity reporta el acceso a metadata.
- **12 ene 2026**: reportan los permisos excesivos del rol.
- **Feb 2026**: AWS migra los nuevos despliegues a IMDSv2, que luego se volvió obligatorio.
- **29 sep 2026**: Zenity confirma que AWS eliminó los permisos que permitían llamadas amplias entre agentes, acceso a chats y a Secrets Manager. Todo corregido.

## AWS dice que no era un bug

La parte entretenida: **AWS disputa la descripción de "vulnerabilidad"**. Su argumento es que el acceso a las credenciales del propio rol de ejecución vía metadata service es comportamiento documentado y esperado, y que el acceso cruzado entre cuentas requiere permisos explícitos en ambos lados. Traducción: el diseño es así, el problema es cómo lo configuras.

## La lección (que ya deberíamos tener tatuada)

Un agente de IA **es un workload de cloud, no un chatbot**. Cada herramienta, secreto, ruta de red y rol que le das amplía lo que un mal prompt puede alcanzar. Las recomendaciones concretas: roles custom de mínimo privilegio (nada de wildcards), validar el input de prompts, limitar el tráfico de salida, separar agentes públicos de los internos, y monitorear CloudTrail/CloudWatch por llamadas inusuales. La revisión de permisos no es una vez: es antes de cada despliegue y después de cada cambio.
