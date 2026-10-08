---
title: "Cloudflare le puso un equipo de agentes IA a tripiar alertas: la receta es 'recon primero, inferencia después'"
author: Carlos
pubDatetime: 2026-10-08T09:05:00Z
slug: cloudflare-agentic-security-operations-harness
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Cloudflare publicó la arquitectura de su harness agéntico de seguridad para Managed Defense: recolección determinista de evidencia antes de llamar al modelo, para que los agentes no alucinen en el SOC."
---

![Ilustración editorial de un centro de operaciones de seguridad abstracto: escudo naranjo sobre red de nodos, pequeños robots clasificando tarjetas de alertas luminosas en cinta de luz, fondo azul marino con acentos naranjos, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-08-cloudflare-agentic-security-operations-harness.jpg)

Cloudflare acaba de publicar cómo construyó el **harness multi-agente de IA que hoy analiza alertas de seguridad en Cloudflare Managed Defense**, y el post es una clase magistral de lo que separa un SOC agéntico serio de un prompt gigante con suerte.

## El problema: la paradoja de la alerta

Las alertas de seguridad nunca llegan solas: una sola puede disparar una avalancha de eventos relacionados y el analista humano tiene que decidir cuáles conectan, cuáles son falsos positivos y cuál dispara al equipo de incidentes. A escala Cloudflare, eso no se resuelve contratando más gente.

## Por qué un solo agente falla

Lo más interesante del post es la autopsia de su primer prototipo: **un agente generalista con toda la investigación encima**. Producía análisis útil, pero alucinaba conclusiones que la evidencia no sostenía. Tres fallos recurrentes:

1. **El contexto se volvía autoridad**: una detección es una hipótesis, no prueba de que el exploit funcionó — y el agente borraba esa distinción.
2. **El scope se deriva**: el agente consultaba la cuenta, rango de tiempo o fuente equivocada, porque un prompt de lenguaje no es un límite de seguridad.
3. **El fallo desaparecía**: si un lookup se demoraba, el resultado no distinguía "no revisado" de "revisado y no encontrado".

## La solución: recon determinista antes de la inferencia

La mitad frontal del harness **no tiene ningún agente**. Código determinista ejecuta flujos de reconocimiento versionados que recolectan identidad del cliente, historial de detecciones, línea base de tráfico, resultados de enforcement y observaciones de red — cada dato guardado con su fuente, versión y timestamp. Solo después llegan los modelos: **GPT-5.6 Cyber** vía la red Daybreak de OpenAI, **Mythos** de Anthropic, y el scoring inicial con **Clef**, el modelo de decisión open source que ya conocimos cuando Cloudflare lo liberó.

El resultado para los analistas: una vista consolidada de alertas relacionadas, evidencia admitida, brechas visibles y próximos pasos recomendados — en vez de pestañas abiertas y fe.

## La moraleja para tu plataforma

El patrón es exportable a cualquier dominio, no solo seguridad: **mover la recolección de evidencia y el enforcement de scope a código, antes de que empiece la inferencia**. El agente no decide qué datos buscar ni qué cuenta tocar; recibe un expediente versionado y responde por él. Es la diferencia entre agentes confiables y demo-tricks con API keys.

**Fuente:** [Cloudflare Blog](https://blog.cloudflare.com/agentic-security-operations/)
