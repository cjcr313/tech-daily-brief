---
title: "Cloudflare confirma fuga de caché KV entre clientes en GLM-5.3 de Workers AI: doble combo de bug de SGLang y mala configuración"
author: Carlos
pubDatetime: 2026-10-27T13:10:00Z
slug: cloudflare-glm-53-kv-cache-sglang
featured: false
draft: false
tags:
  - Seguridad
  - Cloud
  - IA
description: "Cloudflare reveló que GLM-5.3 en Workers AI filtró caché KV entre requests de distintos clientes: 155 respuestas afectadas por un bug de SGLang en modo prefill/decode disgregado más un pool de caché más chico que la ventana de contexto. Postmortem completo."
---

![Ilustración editorial tech isométrica de un servidor de inferencia de IA con capas de memoria caché representadas como bloques de luz superpuestos que se filtran entre cápsulas de distintos clientes, mientras un escudo de seguridad detecta la fuga, paleta azul oscuro con acentos naranja y rojo, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-27-cloudflare-glm-53-kv-cache-sglang.jpg)

Cloudflare publicó un postmortem de esos que duelen pero se agradecen: entre el **27 de agosto y el 9 de septiembre de 2026**, algunos clientes del modelo `@cf/zai-org/glm-5.3` en Workers AI recibieron respuestas que contenía datos de **sesiones de otros usuarios**. En total, **155 respuestas afectadas**, todas a prompts de más de 681.280 tokens. Sin evidencia de explotación deliberada, pero la lección de aislamiento multi-tenant en inferencia quedó clarita.

## Qué pasó exactamente

El investigador **Gadi Evron** (Knostic) reportó el problema el 8 de septiembre por HackerOne: prompts muy largos a veces devolvían texto ajeno. Cloudflare reprodujo el issue a la mañana siguiente y **sacó el modelo offline en 40 minutos** de declarado el incidente. El mismo día desplegaron configuración corregida más el motor parcheado y restauraron el servicio.

La causa raíz fue un combo de dos cosas:

- **Configuración desalineada**: desplegaron GLM-5.3 con ventana de contexto de 1.048.576 tokens, pero el pool de caché KV en las GPUs de prefill solo tenía capacidad para **681.280 tokens**. Cloudflare *sabía* del mismatch antes del lanzamiento, pero asumieron que el engine devolvería error en prompts que no cupieran. Spoiler: no lo hizo.
- **Bug de SGLang en modo prefill/decode disgregado**: un prompt que no cabía en el pool se marcaba internamente como rechazado y se reemplazaba por un placeholder de un token. Pero en vez de abortar y devolver error al cliente, el prefill generaba la caché KV del placeholder y la transfería al nodo de decode. El nodo de decode asumía que la caché anterior había sido sobrescrita con el prompt completo… cuando en realidad **quedaba la mayoría del estado anterior intacto**. Resultado: la respuesta se generaba atendiendo sobre páginas de caché viejas con datos de otros requests.

## Por qué importa

Más allá del impacto acotado (155 respuestas, modelos largos, un solo modelo afectado), el caso es un aviso serio para cualquiera operando inferencia multi-tenant:

- "El engine debería fallar con error" no es una garantía de aislamiento. Hay que **verificar el comportamiento en el límite**, no asumirlo.
- La disgregación prefill/decode agrega superficies de fallo nuevas: los mensajes de "transfer complete" entre nodos se volvieron una fuente de verdad falsa.
- Cloudflare publicó esto como **divulgación coordinada junto a SGLang**, con detalles del hardening aplicado a sus despliegues productivos y trabajo upstream. Ese nivel de transparencia es el estándar al que deberían apuntar todos los que venden inferencia como servicio.

Ningún otro modelo de Workers AI se vio afectado, según Cloudflare. Pero si corres workloads de contexto largo en infra multi-tenant, este postmortem es lectura obligatoria de esta semana.
