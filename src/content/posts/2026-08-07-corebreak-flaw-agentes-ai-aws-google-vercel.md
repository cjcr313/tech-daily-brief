---
title: "CoreBreak: falla crítica en agentes de IA de AWS, Google y Vercel permite ejecutar tools sin autorización del modelo"
author: Carlos
pubDatetime: 2026-08-07T22:00:00Z
slug: corebreak-flaw-agentes-ai-aws-google-vercel
featured: false
draft: false
tags:
  - Seguridad
  - IA
  - Cloud
  - DevOps
description: "Investigadores presentaron CoreBreak en Black Hat USA 2026: vulnerabilidades en AWS Bedrock AgentCore, Google ADK y Vercel AI SDK que permiten bypassar el modelo y ejecutar tools directamente."
---

![CoreBreak - Vulnerabilidad en agentes de IA](../../assets/images/2026-08-07-corebreak-flaw-agentes-ai-aws-google-vercel.jpg)

Esto es grave y hay que prestarle atención. En el **Black Hat USA 2026**, los investigadores Hedi Ingber y Aviyam Ivgi (cofundadores de Stealth) presentaron **CoreBreak** — un patrón de vulnerabilidad cross-platform que afecta la infraestructura de agentes de IA de **AWS, Google y Vercel**.

## ¿Cuál es el problema?

En un flujo normal de un agente de IA, el modelo recibe el request, decide si usar una tool, y devuelve una instrucción estructurada. El SDK entonces ejecuta la tool. El punto clave: **el runtime debería verificar que efectivamente fue el modelo quien autorizó la llamada**.

CoreBreak explota que **eso no estaba pasando**. Los runtimes afectados recibían datos con forma de tool call generada por el modelo y los ejecutaban **sin verificar la proveniencia**. En varios caminos de ataque, **el modelo nunca se ejecutaba** — los system prompts, filtros de contenido y guardrails del modelo nunca tenían oportunidad de intervenir.

## Productos afectados y estado

| Producto | CVE / Issue | Estado |
|---|---|---|
| **AWS Bedrock AgentCore** (InvokeHarness API) | CVE-2026-18830 (CVSS 8.6) | ✅ Parchado en managed service (antes del 31 jul) |
| **Google ADK** (Agent Development Kit Python) | Múltiples paths | ✅ Corregido en ADK 2.5.0 |
| **Vercel AI SDK** (harness-codex y harness-opencode) | Paths en sandbox | ✅ Parchado en v1.0.29 / v1.0.28 |
| **Strands Python SDK** (open source, base de AgentCore) | Path de resume sin modelo | ⚠️ **Sin parchar al momento del reporte** |

## Detalles técnicos

**AWS AgentCore:** Un usuario autenticado podía colocar un bloque `tool-use` en el mensaje final de un request InvokeHarness. El event loop lo despachaba directamente sin pasar por el modelo. AWS agregó validación server-side que rechaza tool-use blocks suministrados por el caller. El fix fue automático, sin acción del cliente.

Pero ojo: el **Strands Python SDK open source** (en el que AgentCore está construido) **mantiene el path vulnerable**. El archivo `event_loop.py` tiene un branch que detecta `tool_use` en el último mensaje y **salta la ejecución del modelo** directamente. Un comentario en el código dice literalmente *"Skip model invocation if the latest message contains ToolUse"*. Sigue ahí.

**Google ADK:** requería eventos de sesión controlados por el atacante o function calls escritas por el usuario.

**Vercel AI SDK:** necesitaba código no confiable corriendo dentro de un sandbox Linux.

## ¿Cuál es el impacto real?

La exposición está limitada a **lo que cada agente puede hacer**. Si tu agente no tiene tools sensibles, un atacante no gana nada. Pero si tu agente tiene acceso a bases de datos, APIs externas, sistemas de archivos, o herramientas de despliegue — **un atacante podría ejecutar esas tools sin que el modelo lo autorice ni lo revise**.

Imagina: tienes un agente con acceso a una tool de borrado de recursos, otra de ejecución de SQL, y otra de envío de emails. CoreBreak permitiría llamar esas tools **saltándose el system prompt que dice "no borres producción"**.

## Lecciones para el equipo

1. **Verify provenance en cada tool call.** El runtime debe exigir prueba criptográfica o verificación de que el modelo generó la autorización. No asumir que un mensaje con formato de tool call es legítimo.
2. **Audit logs de tool execution.** Registrar no solo qué tool se ejecutó, sino **qué turno del modelo la autorizó**.
3. **Principle of least privilege para agentes.** Si tu agente no necesita una tool, no se la des. CoreBreak explota el gap entre lo que el modelo permite y lo que el runtime permite.
4. **El modelo no es tu firewall.** Los guardrails del LLM (system prompts, RLHF, content filters) son la primera línea de defensa, no la única. El infrastructure layer necesita sus propios controles.
5. **Revisa Strands SDK si usas AgentCore.** Aunque AWS parchó el managed service, el código open source sigue con el path abierto.

---

**Fuentes:** [The Hacker News](https://thehackernews.com/2026/08/aws-google-and-vercel-patch-agent-flaws.html), [Black Hat USA 2026 - CoreBreak](https://blackhat.com/us-26/briefings/schedule/#the-corebreak-attack-turning-ai-agents-into-credentials-exfiltration-vectors-53825), [AWS Security Bulletin](https://aws.amazon.com/security/security-bulletins/2026-073-aws/)
