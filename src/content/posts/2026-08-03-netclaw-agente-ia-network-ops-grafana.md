---
title: "NetClaw: el agente de IA open source que se pasea por tu red, Grafana y tu nube"
author: Carlos
pubDatetime: 2026-08-03T10:00:00Z
slug: netclaw-agente-ia-network-ops-grafana
featured: false
draft: false
tags:
  - Observabilidad
  - DevOps
  - IA
description: "NetClaw es un agente open source que conecta infraestructura de red, Grafana, Prometheus, Loki y nubes públicas vía MCP. Operaciones de red conversacionales desde Slack."
---

![NetClaw agente de IA para network ops](../../assets/images/2026-08-03-netclaw-agente-ia-network.jpg)

Si alguna vez quisiste preguntarle a tu infraestructura "¿qué pasa con el BGP en el router 3?" y obtener una respuesta en vez de abrir cinco tabs, **NetClaw** te va a interesar.

## Qué es NetClaw

NetClaw es un proyecto open source que acaba de aterrizar en GitHub. La idea es simple pero potente: **un agente de IA que opera tu infraestructura de red y observabilidad de forma conversacional**. No es un chatbot bonito — se conecta a systems reales vía MCP (Model Context Protocol) y ejecuta acciones.

## Lo que puede hacer

La lista de integraciones es larga, pero los highlights:

- **Grafana (75+ tools)**: ver y modificar dashboards, consultar métricas de Prometheus con PromQL (tráfico de interfaces, CPU, estado BGP, error rates, percentiles de histogramas), query logs en Loki con LogQL (syslog, SNMP traps, logs de aplicaciones)
- **Alerting**: gestionar reglas de alerta y contact points
- **Incident management**: trackear incidentes con timelines, ver schedules de OnCall y responders actuales
- **Cloud pública**: cada provider tiene su propio set de MCP servers y skills
- **Anotaciones y render**: anotar dashboards, renderizar paneles como imágenes y generar deep links

Todo se maneja desde una interfaz conversacional — **Slack, WebEx o chat** — igual si es on-prem o cloud.

## Por qué es relevante

Hay tres razones por las que esto importa:

1. **Operaciones conversacionales dejan de ser demo y se vuelven tooling real.** No es "pregúntale al LLM qué significa este error" — es "dame el estado del BGP, consulta los logs del último incidente, anota el dashboard". Acción, no solo análisis.

2. **MCP como estándar de integración.** NetClaw usa MCP servers como capa de conexión, lo que significa que el mismo agente puede hablar con Grafana, AWS, Azure y herramientas de red sin que cambies el workflow. El ecosistema MCP está madurando rápido.

3. **Democratización de NetOps.** Equipos pequeños que no pueden pagar plataformas de AIOps enterprise (Dynatrace, Datadog con sus modules de network) ahora tienen una alternativa open source que se conecta al stack que ya tienen.

## El contexto mayor

NetClaw no llega solo. Se enmarca en una tendencia más amplia: **agentes de IA para infraestructura operada vía protocolos estandarizados**. En julio vimos cómo Gartner reconoció la categoría de "agentes agénticos con ejecución gobernada" como un segmento emergente. OpenFGA publicó esta semana que la autorización es prerrequisito para exponer APIs a agentes — exactamente el problema que herramientas como NetClaw necesitan resolver para ser seguras en producción.

La pregunta clave es de gobernanza: si un agente puede modificar dashboards, consultar métricas y tocar infraestructura de red, **¿quén controla qué puede y no puede hacer?** Por ahora NetClaw depende de los permisos de las tools subyacentes, pero going forward va a necesitar RBAC granular para agentes — no solo para humanos.

## Conclusión

NetClaw es un proyecto a vigilar. Si tu equipo ya usa Grafana + Prometheus + Loki y quiere explorar operaciones asistidas por IA sin lock-in vendor, este es probablemente el punto de entrada más natural hoy. El hecho de que sea open source y MCP-native lo hace integrate-friendly con stacks existentes.

La operación de infraestructura conversacional ya no es el futuro — es el presente. La pregunta es quién la va a gobernar cuando llegue a producción.

---

**Fuentes:** [GitHub - NetClaw](https://github.com/automateyournetwork/netclaw), [OpenFGA](https://github.com/openfga)
