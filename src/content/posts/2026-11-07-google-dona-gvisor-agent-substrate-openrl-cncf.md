---
title: "Google dona gVisor, Agent Substrate y OpenRL a la CNCF: el sandbox de la era de los agentes ya es patrimonio cloud-native"
author: Carlos
pubDatetime: 2026-11-07T21:05:00Z
slug: google-dona-gvisor-agent-substrate-openrl-cncf
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "Google movió la mitad open source de su stack de agentes a la CNCF: gVisor, Agent Substrate y OpenRL entran al Sandbox stage, con Agent Substrate 1.0 GA en GKE. Esto cambia las reglas del aislamiento de agentes."
---

![Ilustración editorial de contenedores aislados dentro de capas de sandbox translúcidas sobre un clúster Kubernetes](../../assets/images/google-dona-gvisor-agent-substrate-openrl-cncf.jpg)

Google se sacó la etiqueta de dueño: confirmó que **gVisor, Agent Substrate y OpenRL pasan a gobernanza de la Cloud Native Computing Foundation (CNCF)**, en el Sandbox stage. El anuncio lo firmó Drew Bradstreet... perdón, **Drew Bradstock**, VP de Product Management de Kubernetes y orquestación en Google, y aterrizó justo antes de KubeCon North America en Salt Lake City (9-12 de noviembre). Message claro: la infraestructura para correr agentes de IA de forma aislada deja de ser propiedad de un vendor y pasa a ser patrimonio del ecosistema cloud-native.

## Qué se donó, pieza por pieza

- **gVisor**: el "kernel de usuariospace" que intercepta las syscalls de una app (vía el componente *Sentry*) y media el acceso a archivos (vía el *Gofer*), sin dejar que el código toque directo el kernel del host. Es la base de GKE Sandbox y Cloud Run, donde Google dice que **corre millones de sandboxes al día**. En la lista de usuarios: Google, Ant Group, OpenAI, Anthropic, Modal y Tines. Nada mal para un proyecto "de nicho".
- **Agent Substrate**: el runtime open source de Kubernetes para agentes, con actores corriendo en microVMs gVisor o Cloud Hypervisor, un API server de control plane (*ateapi*) y un ingress router (*atenet-router*). Y de paso: **la versión 1.0 ya está GA en GKE**.
- **OpenRL**: la pieza de reinforcement learning del stack agentico de Google, que también entra a la fundación.

La postulación de gVisor se aprobó el 28 de septiembre (las fechas del proceso de Agent Substrate varían según la fuente, entre el 28 de septiembre y octubre), y los mantenedores comprometidos desde el día uno son **Ant Group, Modal y Tines**, con OpenAI, Tencent y NVIDIA como contribuidores activos. O sea: los que más agentes corren en producción van a mantener el suelo donde corren.

## Los números que importa retener

- **Resume de agentes en menos de 500 ms** tras suspender, conservando su estado (claim de Google, sin metodología publicada).
- **10x la densidad de contenedores** tradicional y más de 500 activaciones suspend/resume por segundo.
- El estado del actor se **snapshotea a storage tiered** cuando se suspende: agentes dormidos que no consumen cómputo, pero despiertan casi al toque.

## Las letras chicas que van a doler

La documentación es honesta, y para equipos de plataforma eso vale oro:

- **Sin GPU passthrough** en los contenedores de actores, y gVisor **no puede snapshetear contextos CUDA vivos**. Si tu agente necesita GPU adentro del sandbox, hoy no hay camino: la inferencia va fuera.
- **Las conexiones de red abiertas no sobreviven la suspensión**. Sesiones de base de datos o conexiones a servidores MCP se cortan: el código del agente tiene que reconectar al revivir.
- Requiere **GKE Standard 1.37+**. Si tu clúster va atrasado, primero el upgrade.
- La web de Google describe a gVisor como "soportando GPUs" con checkpoint/restore nativo, mientras la doc de Substrate dice lo contrario para CUDA vivo. Conclusión: prueba con TU workload antes de creer cualquiera de las dos frases.

## ¿Y la seguridad?

gVisor trae historial: **CVE-2026-96812**, un escape de host vía el Gofer (requiere CUSE habilitado y privilegios de despliegue de imágenes), CVSS 4.0 de 8.8, parchado en la release 20260824.0. Y el contexto no es menor: Trail of Bits reportó en agosto que GPT-5.6 Cyber **escapó de una VM QEMU/KVM tres veces**. Un kernel de software es código, y el código tiene bugs — pero es exactamente por eso que meterlo a CNCF, con revisión abierta y mantenedores múltiples, es la movida correcta.

## Por qué esto importa más allá del hype

The New Stack lo bautizó como "¿Kubernetes, mark II?": exagerado, pero capta la dirección. Kubernetes estandarizó el scheduling de workloads confiables; **Agent Substrate apunta a estandarizar el scheduling de workloads que NO confías**, con suspend/resume y densidad como ciudadanos de primera clase. Que sea CNCF y no un producto de Google significa que AWS, Azure o cualquier clúster conforme puede adoptarlo sin rendirle pleitesía a la competencia. La mitad gestionada del stack (Agent Compute Engine, con microVMs atestiguadas por el procesador Titanium) sigue siendo de Google; la base abierta, ahora, es de todos.

**Lectura para el equipo de plataforma:** si estás evaluando cómo aislar agentes en Kubernetes, esto recién se volvió el estándar a vigilar. Con KubeCon la semana que viene, espera una avalancha de sesiones, demos y probablemente anuncios de adopción de otros vendors encima de esta base.

Fuentes: Google Open Source Blog (5-nov), Google Cloud Blog, gVisor blog, The New Stack, TechTimes, SecurityWeek.
