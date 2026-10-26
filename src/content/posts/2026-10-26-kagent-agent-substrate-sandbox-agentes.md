---
title: "Kagent + Agent Substrate: la receta CNCF para correr agentes de IA sin que se te escapen"
author: Carlos
pubDatetime: 2026-10-26T13:10:00Z
slug: kagent-agent-substrate-sandbox-agentes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud Native
  - IA
description: "La CNCF publicó una guía práctica de sandboxing de agentes: kagent como runtime declarativo y Agent Substrate como plataforma de aislamiento con gVisor y microVM. Los tres requisitos que faltaban: aislamiento, seguridad y escala."
---

![Ilustración editorial tech isométrica de agentes de IA representados como orbes luminosos contenidos en cápsulas aisladas sobre una malla de plano de control de Kubernetes, con barreras de seguridad brillantes y capas de blindaje alrededor de cada cápsula, paleta azul profundo con acentos teal y naranja, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-26-kagent-agent-substrate-sandbox-agentes.jpg)

Ayer preguntábamos si Kubernetes estaba listo para agentes de IA (spoiler: casi). Hoy la CNCF publicó la continuación lógica: una guía práctica de **Michael Levan** que muestra cómo implementar los tres requisitos que los agentes exigen en producción y que los containers solos no dan: **aislamiento, seguridad y escala**.

## El problema: tu sandbox es mentira

Levan lo dice sin anestesia: si levantas un container y corres un workload ahí, "técnicamente" está sandboxeado — pero ese aislamiento "bien podría no existir". Ingress y egress quedan abiertos, el workload manda paquetes a quien quiera y no hay enforcement de políticas. Para una app convencional, apretable. Para un agente que razona, llama herramientas, guarda credenciales y ejecuta código, es una puerta giratoria.

La lista de lo que un sandbox de agentes de verdad necesita:

- Que el código no confiable **no escape al host** ni comprometa la infraestructura
- **Blast radius mínimo** por harness
- Credenciales, tool calls y output del modelo dentro de un **límite aislado**
- **Snapshots** del estado para retomar donde quedó
- **Multiplexación de agentes** con límites claros en multi-tenant

## Agent Substrate: aislamiento en dos capas

La pieza central del post. Con **Agent Substrate**, todos los agentes corren en Workers (que son Pods), facilitados por **Actors** y gestionados por el control plane (`ateapi`). El aislamiento viene en dos niveles:

- **Software (gVisor)**: el workload corre en user space con un kernel dedicado ("Sentry") que intercepta y maneja las syscalls
- **Hardware (microVM)**: el guest OS corre directo sobre cores físicos usando extensiones de virtualización

¿Te suena? Es justamente el "agent substrate" con warm pools que mencionábamos ayer como concepto — y acá está implementado. El detalle de eficiencia es lindo: un Actor **solo corre cuando hay una sesión activa**. Abres sesión → spins up; termina la sesión → spins down. El contador de Actors sube por sesión nueva, no por uso.

## Kagent: el runtime declarativo

Sin kagent, la única forma de tocar Agent Substrate es programático (un `curl` al Actor, básicamente). **Kagent v1.0** le pone la cara que la industria espera: CRDs de Kubernetes y una UI. Defines un `Harness` (que puede ser Codex, Claude Code o un agente BYO con langgraph o ADK) y un `AgentTemplate` — una especie de "golden image" reutilizable con la configuración del agente. Todo con `kubectl apply`, snapshot policy a GCS incluida.

## La lectura

Esta es la respuesta concreta a la grieta número uno que describíamos ayer: el sandboxing de agentes más allá del container, mirando hacia VMs y el host. Que la CNCF lo documente con guía hands-on (Kind o Minikube alcanzan para probar) significa que pasó de charla de conferencia a algo que podés instalar hoy con Helm. Si tu equipo está evaluando correr agentes en producción, este par kagent + Agent Substrate acaba de bajar la barrera de entrada bastante.

*Fuente: [CNCF Blog — Isolation. Security. Scale.](https://www.cncf.io/blog/2026/10/26/isolation-security-scale/)*
