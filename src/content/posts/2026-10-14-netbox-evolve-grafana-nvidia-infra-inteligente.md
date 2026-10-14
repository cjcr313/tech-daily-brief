---
title: "NetBox Evolve: NetBox Labs se alía con NVIDIA y Grafana Labs para convertirse en la capa de inteligencia de la infraestructura"
author: Carlos
pubDatetime: 2026-10-14T03:15:00Z
slug: netbox-evolve-grafana-nvidia-infra-inteligente
featured: false
draft: false
tags:
  - Observabilidad
  - Infraestructura
  - Cloud
description: "En su primera conferencia global, NetBox Labs anunció sociedades con NVIDIA y Grafana Labs, plugin GA en el catálogo de Grafana, telemetría de red con Orb vía OpenTelemetry, seis integraciones nuevas y agentes de IA con gobernanza."
---

![Ilustración editorial tech isométrica de una base de datos central brillante conectada con líneas luminosas a racks de servidores, salas de datacenter y dashboards de observabilidad con gráficos, representando inteligencia de infraestructura y telemetría de red, paleta azul profundo con acentos naranjas, sin texto](../../assets/images/2026-10-14-netbox-evolve-grafana-nvidia-infra-inteligente.jpg)

En el Kennedy Space Center (combio apropiado, todo sea decir) se hizo la **primera conferencia global de NetBox**, NetBox Evolve —escape apropiado, todo sea dicho— y la empresa aprovechó de soltar un aluvín de anuncios: sociedades estratégicas con **NVIDIA y Grafana Labs**, nuevas integraciones, y agentes de IA para automatizar el trabajo rutinario de infra. La idea de fondo: que NetBox pase de ser "el Excel sagrado de la red" (system of record) a ser la **capa de inteligencia** que alimenta observabilidad, automatización y agentes.

## Lo que más interesa a la gente de observabilidad

- **El plugin de NetBox para Grafana ya es GA en el catálogo de plugins de Grafana.** Gratis y open source: mete el contexto autoritativo de tu infraestructura (qué es cada cosa, dónde vive, a quién pertenece) directamente en dashboards y alertas. Nada de paneles bonitos sobre entidades desconocidas.
- **Orb, la plataforma de telemetría open source de NetBox Labs (construida sobre pktvisor), llega a Grafana Cloud** como fuente de telemetría de flujo de red, paquetes y DNS, con métricas nativas de OpenTelemetry.

La frase de Ash Mazhari, VP de Corporate Development de Grafana Labs, resume la apuesta: *"la observabilidad de red e infraestructura son casos de uso populares en la comunidad de Grafana, y el contexto es lo que separa un muro de métricas de respuestas y acción"*.

## Seis integraciones nuevas (menos mantención manual)

NetBox ahora sincroniza automáticamente datos desde las herramientas que ya ocupas: switches administrados desde **Arista CloudVision** y **Cisco Nexus Dashboard**, espacio de direcciones desde **AWS VPC IPAM**, firewalls desde **Palo Alto Panorama**, hallazgos de vulnerabilidad de **Tenable**, y clusters, nodos y rangos de pods/services desde **Kubernetes**. Las tres primeras pasan a GA pronto; Panorama, Tenable y Kubernetes entran en public preview este mes. Todo corre por NetBox Assurance, con cambios sujetos a aprobación antes de tocar el system of record.

## Diseño, visualización y agentes

- **NetBox Designs** (public preview): crea sitios, racks o POPs desde un diseño revisado, con chequeo de drift contra el estándar y bill of materials que se pre-pobla en Asset Lifecycle.
- **NetBox Visual Explorer y NetBox Analytics** llegan a GA el próximo mes: mapas WAN, cadenas de energía, puntos únicos de falla y dashboards de capacidad/ciclo de vida/riesgo.
- **Platform MCP Server ya es GA**: cualquier cliente MCP (Claude, ChatGPT, Cursor) puede leer —y con permisos, escribir— datos reales de infraestructura.
- **Tres agentes nuevos en preview**: Data Quality Steward, Change Review Agent y Lifecycle & Version Compliance Agent, con gobernanza tipo "Always allow / Needs approval / Blocked" y staging vía NetBox Branching.

O sea: misma disciplina que aplicas a tus humans, ahora para tus agents. La sociedad con NVIDIA apunta en la misma dirección — operar AI datacenters a velocidad y escala sin perder el registro autoritativo de lo que existe.

**Fuentes:** [NetBox Labs Blog](https://netboxlabs.com/blog/netbox-evolve-2026-platform-announcements-nvidia-grafana/) · [GlobeNewswire](https://www.globenewswire.com/news-release/2026/10/13/3379659/0/en/netbox-labs-partners-with-nvidia-and-grafana-labs-announces-new-additions-to-the-netbox-infrastructure-intelligence-platform-to-assemble-the-intelligence-layer-for-ai-datacenter-an.html)
