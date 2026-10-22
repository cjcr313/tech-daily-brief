---
title: "Google Cloud lanza Agent Compute Engine: microVMs a medida de agentes, y Agent Substrate llega open source a GKE"
author: Carlos
pubDatetime: 2026-10-22T21:10:00Z
slug: google-agent-compute-engine-agent-substrate-gke
featured: false
draft: false
tags:
  - Cloud
  - Kubernetes
description: "En AGNTCon + MCPCon Google lanzó Agent Compute Engine: microVMs con checkpoint/restore y aislamiento por hardware, optimizadas para el loop agéntico. Y Agent Substrate para GKE es open source: 10x densidad, 200.000 agentes en benchmark."
---

![Ilustración editorial tech de microVMs optimizadas para agentes de IA ejecutándose sobre infraestructura de Kubernetes en la nube](../../assets/images/google-agent-compute-engine-agent-substrate-gke.jpg)

Google lo dijo sin rodeos en el anuncio: **"ejecutar agentes autónomos de forma segura es, en el fondo, un problema de infraestructura"**. Tras escalar Gemini a nivel planeta, en AGNTCon + MCPCon lanzaron **Agent Compute Engine**, el servicio de cómputo que ya ejecuta los agentes de Gemini — y que pronto estará en preview para los tuyos.

## Por qué las VMs tradicionales no calzan con agentes

Un agente no es un workload normal: arranca, pausa, espera a un humano, reanuda, muere, vuelve. Ese ciclo de alta rotación castiga a las primitivas de cómputo clásicas. Agent Compute Engine lo ataca con tres frentes:

- **Velocidad con eficiencia**: microVMs con boot casi instantáneo, **copy-on-write** para compartir un template de SO entre varios agentes, y checkpoint/restore rápido para pausar la VM cuando el agente entra en fase de "pensar". Traducción: no pagas cómputo mientras el agente espera.
- **Aislamiento serio**: cada microVM corre sobre el IPU **Titanium** de Google, con hypervisor aislado por hardware, kernel propio, identidad propia y credenciales de corta vida inyectadas *fuera* de la VM — fuera del alcance del propio agente. Zero trust de verdad.
- **Persistencia**: Hyperdisk propio por microVM para mantener workspace y contexto del agente entre sesiones largas.

## Agent Substrate en GKE: la versión open source

La parte que más le va a importar a quien lee este blog: **Agent Substrate** es el runtime de ejecución open source y Kubernetes-native que lleva el mismo diseño a tu cluster, on-prem o multi-cloud:

- Hasta **10x más densidad de cómputo** que infra tradicional, manteniendo aislamiento de kernel por agente (microVM o gVisor).
- En benchmark: **200.000 agentes sosteniendo 500 activaciones/segundo con latencia suspend/resume bajo 500 ms**.
- Cada sandbox con identidad criptográfica propia y proxies de egreso con políticas granulares.
- Funciona con cualquier framework: nombran **Claude Code, OpenClaw y Hermes** explícitamente.
- Integración con Filestore agent volumes para workspaces compartidos en flujos multi-agente.

Nous Research ya lo usa en Hermes Enterprise para desplegar agentes multi-tenant en infraestructura de clientes.

## Governance incluida

El anuncio viene acompañado de la extensión de las capacidades de governance de **Gemini for business** para agentes en cualquier runtime — porque pasar de pilotos ailitados a flotas productivas de agentes no deterministas exige controles nuevos: identidad, políticas y observabilidad por agente, integrado con Agent Gateway.

## Por qué importa

Es el mismo patrón que venimos cubriendo (agentes en K8s, ops agénticas en ObservabilityCon): **la unidad de cómputo está mutando del contenedor al sandbox agéntico desechable con sueño interrumpido**. Dormir agentes en checkpoint y despertarlos en milisegundos es la nueva arte de la eficiencia — y Google acaba de productizarlo. Si tu plataforma corre agentes en EC2/GCE encendidas 24/7, esto es una señal de que ese modelo tiene los días contados.
