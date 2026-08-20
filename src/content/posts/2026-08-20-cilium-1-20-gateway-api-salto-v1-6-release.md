---
title: "Cilium 1.20 llega con Gateway API a full: salto de v1.4 a v1.6, TCPRoute/UDPRoute y plugins de datapath extensible"
author: Carlos
pubDatetime: 2026-08-20T04:05:00Z
slug: cilium-1-20-gateway-api-salto-v1-6-release
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "La release más cargada en un tiempo: Gateway API v1.6.1 con ListenerSets, BackendTLSPolicy y rutas TCP/UDP, además de datapath extensible para que los clouds no forkeen Cilium. Con Karpenter 1.14 y Rancher 2.15 de postre."
---

![Ilustración editorial de una malla de red kubernetes con nodos hexagonales conectados por flujos de luz verde turquesa y un gran gateway hexagonal central, estilo tech editorial sobre fondo oscuro](../../assets/images/2026-08-20-cilium-1-20-gateway-api-salto-v1-6-release.jpg)

Cilium soltó la 1.20.0 y no es una release más: son **más de 2.660 commits** con una comunidad de **1.100+ contribuidores** (y casi 25.000 estrellas en GitHub). Si tu cluster corre Cilium —y cada vez más clusters del mundo corren Cilium—, acá va lo que importa.

## El plato principal: Gateway API enserio

El salto más agresivo es de API: Cilium pasa de Gateway API **v1.4 a v1.6.1**, incorporando de golpe todo lo que graduó upstream en dos releases. En concreto:

- **ListenerSets delegados**: los equipos de aplicación pueden adjuntar y manejar sus propios listeners en un Gateway compartido que sigue siendo propiedad del equipo de plataforma. Fin del ticket al equipo de redes para cada listener nuevo.
- **BackendTLSPolicy**: cifrado y validación de certificados entre el gateway y los backends. El mTLS de salida que faltaba.
- **TCPRoute y UDPRoute**: bases de datos, DNS, game servers y todo lo no-HTTP ahora se maneja con el mismo modelo de Gateway API. Esto es grande — era la excusa clásica para mantener un Ingress legacy.
- **ExternalAuth (GEP-1494)**: las HTTPRoute pueden delegar autorización a un servicio externo (gRPC/ext_authz de Envoy) antes de tocar la app. AuthZ fuera del código de la aplicación, finalmente declarativo.
- **Extras HTTP**: CORS nativo en HTTPRoute, redirects 303/307/308, y control del header `Server` desde CiliumGatewayClassConfig.
- **gRPC-Web configurable**: se puede desactivar la traducción automática si necesitás pasar el tráfico original.

## Networking: el datapath se vuelve extensible

La pieza más estratégica (y menos sexy): **plugins de datapath**. Los cloud providers ahora pueden extender o instrumentar el datapath eBPF de Cilium con programas versionados independientemente, **sin mantener un fork**. Traducción: menos divergencia entre el Cilium "upstream" y el que corre en los managed offerings. Si esto funciona, es un cambio estructural para el ecosistema.

Otros golpes en networking:

- **Netkit automático**: `bpf.datapathMode=auto` usa netkit en kernels que lo soportan y cae a veth en el resto (veth sigue de default).
- **BGP más decente**: comandos Hive nuevos para inspeccionar route policies, control plane en GoBGP v4.6.1 y reconciliación optimizada.
- **Egress Gateway dual-stack**: IPv6 egress IP explícito y respeto estricto de la interfaz en IPv4.

## IPAM y balanceo

- **IPv6 para AWS ENI IPAM (beta)**: asignación de prefijos IPv6 a pods vía ENI.
- **Migración en caliente a multi-pool IPAM**: clusters existentes pueden moverse desde cluster-pool sin reinvitarlos de cero.
- **Topology-aware hints**: `PreferSameZone` y `PreferSameNode` en el service load balancer.
- **Maglev con pesos**: la anotación `service.cilium.io/weight` en EndpointSlices permite drenar backends (peso 0 = sin conexiones nuevas, las viejas viven).
- **MCS API estable**: la implementación de Multi-Cluster Services ya es estable y recomendada para ClusterMesh.

## ⚠️ Ojo con el upgrade

Si usas **mutual authentication legacy, Envoy Go extensions, políticas Kafka-aware, CiliumNodeConfig v2alpha1, integración libnetwork o CNI custom**, hay acciones manuales. Lee el Upgrade Guide antes de tocar nada en producción. La lista de "puede requerir acción" no es corta.

## Menciones honrosas de la semana k8s

Del mismo digest semanal del ecosistema:

- **Karpenter v1.14**: introduce el **allocator para DRA** (Dynamic Resource Allocation), la pieza que falta para que el autoscaling de GPU/accelerators deje de ser un parche. Directamente relevante para quien corre workload de IA.
- **Rancher v2.15**: los **infrastructure providers nativos de CAPI pasan a GA**. Menos operadores custom, más Cluster API estándar.

---

**Fuentes:** [GitHub Release v1.20.0](https://github.com/cilium/cilium/releases/tag/v1.20.0), [Kubernative digest](https://faun.dev/co/stories/shurup/kubernative-software-digest-august-17th-2026/), [docs.cilium.io](https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/gateway-api/)

**Veredicto rápido:** si estás con IngressController o una versión vieja de Gateway API, la 1.20 es el momento de migrar — TCPRoute/UDPRoute + BackendTLSPolicy + ExternalAuth cubren casi todos los pretextos para no hacerlo. Y si operas Cilium en un cloud, vigila el tema de plugins de datapath: es la jugada que va a definir quién se forkea y quién contribuye upstream.
