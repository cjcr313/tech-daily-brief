---
title: "Robando los pensamientos ocultos de GPT-5.6, Claude Opus 4.8 y Gemini 3: la vulnerabilidad que rompe el chain-of-thought cifrado"
author: Carlos
pubDatetime: 2026-08-12T10:00:00Z
slug: stealing-reasoning-traces-llm-apis
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Investigadores de Tübingen y Snyk descubrieron que los modelos más pequeños de OpenAI, Anthropic y Google pueden usarse como oráculos de desencriptación para robar el razonamiento oculto de los modelos frontier."
---

![Ilustración editorial de un candado roto sobre circuitos neuronales representando una falla de seguridad en modelos de IA](../../assets/images/placeholder.jpg)

Una investigación publicada ayer (11 de agosto) por un equipo conjunto de **ELLIS Institute Tübingen, Max Planck Institute, MATS Research y Snyk** reveló una vulnerabilidad arquitectónica seria en cómo OpenAI, Anthropic y Google protegen el razonamiento interno de sus modelos frontier.

El paper — *"Stealing Reasoning Traces from Proprietary LLM APIs"* (arXiv:2608.09867) — demuestra que los **reasoning traces cifrados** que las APIs mandan al cliente pueden ser desencriptados usando modelos hermanos más pequeños y menos protegidos.

## ¿Cómo funciona el ataque?

Los modelos de razonamiento (GPT-5.6, Claude Opus 4.8, Gemini 3) generan un **chain-of-thought interno** antes de responder. Las companies no muestran este razonamiento en texto plano — lo envían como un **envelope cifrado en base64** que el cliente devuelve en llamadas subsiguientes para mantener contexto.

El problema: **la firma criptográfica usa una clave global del provider**, no está vinculada a un modelo específico, sesión, o usuario.

Esto significa que puedes tomar un envelope cifrado de Claude Opus 4.8 y pasarlo a **Claude Haiku 4.5**, que tiene menos salvaguardas anti-distillation. El modelo pequeño actúa como **oráculo de desencriptación** y escupe el razonamiento oculto en texto plano.

```text
Atacante captura envelope cifrado de modelo frontier
    → lo inyecta en API call de modelo pequeño/hermano
        → el modelo pequeño transcribe el razonamiento en texto plano
```

Lo verificaron en las tres familias: GPT-5.6 (Sol → Terra → Luna), Claude (Opus → Haiku), y Gemini 3.

## Lo que encontraron en transcripts públicos

Los investigadores analizaron **6.708 transcripts públicos** de agentes scrapeados de GitHub y HuggingFace. Decodificaron **315.320 bloques de razonamiento** embebidos. Dentro encontraron:

- **367 artefactos de información personal (PII)**
- **182 credenciales hardcodeadas**: 62 API keys, 33 passwords, 30 emails personales
- Datos que **nunca aparecían en las respuestas visibles** del assistant — los desarrolladores no sabían que estaban exponiendo secretos al compartir logs

Esto es brutal. Supongas que compartiste un transcript de tu agente para debuggear algo, y sin querer estás exponiendo API keys que quedaron capturadas en el razonamiento interno del modelo.

## La conexión con destilación china

Acá se pone más jugoso. Los researchers encontraron que **Kimi K3 de Moonshot AI** produce razonamientos **sospechosamente similares** a los traces ocultos de Claude Opus 4.8 y GPT-5.6 Sol para ciertos prompts.

Ojo: dicen explícitamente que esto *"no establece causalmente destilación"*. Pero la similitud es llamativa.

Curiosamente, DeepSeek y Thinking Machines (Inkling) **no** mostraron esta similitud de razonamiento con modelos de Anthropic.

## Ataques de prompt injection invisibles

Hay un tercer vector: como los envelopes cifrados se pasan entre modelos sin validación de contenido, un atacante puede **inyectar instrucciones maliciosas dentro de un bloque de razonamiento cifrado**. Los tools de monitoring que solo revisan el historial visible de la conversación **no las detectan**.

Esto es crítico para agentes autónomos que procesan inputs no confiables.

## ¿Qué hicieron los providers?

Los researchers reportaron responsablemente. OpenAI, Anthropic y Google ya **parchearon la vulnerabilidad de PII** (la filtración de credenciales en reasoning traces). Pero el vector de destilación sigue siendo estructuralmente difícil de cerrar sin romper la compatibilidad entre modelos de la misma familia.

## Por qué importa

Esto va más allá del IP theft. El modelo de seguridad de los labs frontier depende de que el razonamiento interno **permanezca privado**. Si cualquier developer con acceso API estándar puede extraerlo usando un modelo más barato de la misma familia, entonces:

1. Las barreras competitivas se diluyen más rápido de lo que se pensaba
2. Los secrets embebidos en reasoning son un riesgo real y actual
3. Los agentes que procesan inputs externos tienen una superficie de ataque invisible

El paper está disponible en [stolen-thoughts.com/paper.pdf](https://stolen-thoughts.com/paper.pdf). Lectura obligatoria si trabajas con LLMs en producción.
