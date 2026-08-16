---
title: "Cloudflare acumula 13 incidentes en 8 días: R2 con datos posiblemente perdidos y la pregunta incómoda de la concentración"
author: Carlos
pubDatetime: 2026-08-16T10:00:00Z
slug: cloudflare-13-incidencias-8-dias-r2-concentracion
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "Entre el 7 y el 14 de agosto Cloudflare registró 13 incidentes separados: R2, Durable Objects, Workers KV, Workers AI y red en cuatro continentes. Un cliente reporta 67GB sin recuperar y sin postmortem oficial."
---

![Ilustración editorial de una nube de red global con nodos parpadeando en alerta naranja y cables de datos desconectados, estilo tech editorial](../../assets/images/2026-08-16-cloudflare-13-incidencias-8-dias-r2-concentracion.svg)

Trece incidentes en ocho días. Ese es el registro que dejó la página de status de Cloudflare entre el **7 y el 14 de agosto**, tocando R2 object storage, Durable Objects, Workers KV, Workers AI, email security y performance de red en cuatro continentes. Ninguno fue del tamaño del outage global de noviembre 2025, pero la frecuencia reopenó la pregunta que los equipos DevOps ya se hacían: ¿qué pasa cuando una sola empresa está enfrente de casi un quinto del tráfico web y las cosas se rompen repetidamente en la misma semana?

## La cronología de la mala racha

- **7 agosto:** falla de escritura en buckets R2 de la región ENAM (Este de Norteamérica), 14:52–17:02 UTC. La recuperación de un subconjunto de objetos subidos vía multipart se arrastró por días.
- **8 agosto:** pérdida de fibra oscura afecta el performance de red en Estambul.
- **12 agosto:** disrupción major en email security ligada a un listing de Spamhaus que golpeó la entrega de correo saliente.
- **13 agosto:** cuatro incidentes en un solo día — 503 en Magic Transit al hacer cambios por dashboard/API, errores elevados en Workers KV, fallas de autenticación intermitentes en el MCP Server Portal y errores en Workers AI para modelos específicos.
- **14 agosto:** otros cuatro — caída de disponibilidad en Durable Objects y Workflows, congestión de red en el Este de EE.UU., HTTP 5xx en Kuwait, Bangkok, Yakarta y Dammam, y problemas de red en Querétaro.

## El caso que más pica: R2 con datos sin recuperar

El incidente de R2 es el que tiene a los developers con las antenas paradas, porque un object store que pierde escrituras es otra cosa que un dashboard glitch. Cloudflare describió el impacto como "un pequeño número de buckets" y marcó el incidente como resuelto.

Pero en el foro comunitario, al menos un cliente reportó que su bucket `comfy-storage` **nunca volvió completo**: unos **67GB sin restaurar días después**. Hasta el 15 de agosto no había postmortem oficial confirmando pérdida permanente de datos. Esa brecha entre un status page en verde y clientes con archivos desaparecidos es exactamente por lo que los equipos tratan R2, S3 y similares como servicios que **requieren estrategia de backup propia**, en vez de confiar en la garantía de durabilidad de una sola región.

La lección de siempre, pero que se aprende de la mala manera: object storage ≠ backup. Ni el de Cloudflare, ni el de nadie.

## Durable Objects: el incidente que más duele a la nueva generación

La caída del 14 de agosto en **Durable Objects y Workflows** fue clasificada como *minor* y se resolvió el mismo día. Pero ojo con el matiz: Durable Objects es la base de una parte creciente de las apps stateful construidas sobre Workers — backends de chat, coordinación multiplayer, lógica de negocio en background. Una caída de disponibilidad ahí no lenta el page load: **stallea lógica de negocio en vuelo** que uno asumía que iba a completar confiablemente. Para los que están migrando estado hacia el edge, este incidente es un recordatorio de que "durable" en el nombre no exime de diseñar retries e idempotencia.

## Concentración: el tema de fondo

El contexto incomoda. Cloudflare reporta crecimiento de ingresos récord mientras acumula incidentes, y el debate del multi-CDN está de vuelta. El outage de noviembre 2025 —un cambio en una base de datos que tiró media internet— sigue fresco, y esta racha de agosto refuerza el patrón: ninguno catastrófico individualmente, pero todos apuntando a **una red bajo tensión sostenida** mientras escala.

Para equipos chicos, un multi-CDN real es caro y complejo. Pero hay mitigaciones intermedias que esta semana debiera dejar en el backlog:

- **Backups reales de R2/S3** (versioning + replicación cross-region o export periódico)
- **Retry/idempotencia en Workflows y Durable Objects**, no asumir entrega exactamente-una-vez bajo stress
- **Dependencias downgradeables**: que tu app no muera entera si el edge tier de auth o KV falla
- **Monitorear cloudflarestatus.com como cualquier otra dependencia crítica**, con alerting propio

Una empresa con ~20% del tráfico web va a tener incidentes; la pregunta es si tu arquitectura los sobrevive. Esta semana, la de varios no la sobrevivió.

**Fuentes:** [Shattered.io](https://shattered.io/cloudflare-outage-august-2026/), [Cloudflare Status History](https://www.cloudflarestatus.com/history), [foro comunitario de Cloudflare](https://community.cloudflare.com/).
