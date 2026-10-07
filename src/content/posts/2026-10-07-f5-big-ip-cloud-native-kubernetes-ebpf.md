---
title: "F5 mete sus funciones de red carrier-grade a Kubernetes: 91,5% menos CPU en DNS"
author: Carlos
pubDatetime: 2026-10-07T15:15:00Z
slug: f5-big-ip-cloud-native-kubernetes-ebpf
featured: false
draft: false
tags:
  - Kubernetes
  - Observabilidad
  - Cloud
description: "F5 anunció BIG-IP Cloud-Native Edition: funciones de red telco (DNS, CGNAT, políticas de suscriptor) corriendo nativas en Kubernetes, con observabilidad eBPF a nivel de kernel. Los números de Tolly son agresivos."
---

![Ilustración editorial tech de funciones de red carrier-grade corriendo como contenedores dentro de un clúster Kubernetes, con paquetes de luz fluyendo entre pods interconectados y una lupa de visibilidad a nivel kernel estilo eBPF, estilo flat profesional, tonos azul profundo y acentos turquesa, sin texto](../../assets/images/2026-10-07-f5-big-ip-cloud-native-kubernetes-ebpf.jpg)

F5 anunció hoy **BIG-IP Cloud-Native Edition**, un paquete pensado para que los service providers — telcos, sobre todo — muden sus servicios críticos de red desde infraestructura virtualizada (VMs) a Kubernetes sin perder lo que en el mundo telco llaman *carrier-grade*: rendimiento, seguridad y control operacional. La apuesta incluye funciones de red cloud-native mejoradas y una nueva capa de **observabilidad eBPF**.

## Los números primero

Testing independiente de [The Tolly Group](https://www.f5.com/go/report/tolly-big-ip-cne-sp-infrastructure-efficiency) sobre las BIG-IP Cloud-Native Network Functions en workloads Kubernetes:

- **DNS**: F5 procesó **1,9x más queries por segundo** usando **91,5% menos CPU** que el despliegue virtualizado equivalente.
- **CGNAT**: throughput comparable con **79,7% menos CPU** y **98,5% menos memoria**.

Traducción: si sos telco y tenís DNS o CGNAT atrapados en funciones virtualizadas, Kubernetes dejó de ser el enemigo del rendimiento.

## Qué trae el paquete

- **BIG-IP Cloud-Native Network Functions**: DNS, CGNAT, seguridad de red, enforcement de políticas por suscriptor y traffic management, extendidos como funciones nativas de Kubernetes.
- **BIG-IP Next for Kubernetes**: opera en el network layer de K8s con networking, entrega de aplicaciones, seguridad y manageability.
- **BIG-IP eBPF Observability**: visibilidad de aplicaciones y red **a nivel de kernel**, para hacer troubleshooting en entornos distribuidos sin instrumentar todo a mano.

En traffic management el soporte L4–7 es amplio: TCP, UDP, HTTP/2, **Diameter, SCTP, GTP y SIP**. O sea, protocolos telco de verdad, no solo HTTP con suerte. Además, las políticas por suscriptor permiten QoS, traffic shaping y content filtering dinámico, clave para servicios diferenciados.

## Por qué importa

Los operadores están apretados por 5G, edge y workloads de IA, y mover funciones de red a K8s les da flexibilidad de infraestructura — pero les exigía resignar visibilidad y control. La frase del CPO de F5, Kunal Anand, resume la tesis: *"los service providers no deberían tener que elegir entre la agilidad cloud-native y el rendimiento, seguridad y control que exige la infraestructura de red crítica"*.

Con observabilidad eBPF incluida en la misma caja, F5 apunta a resolver el otro dolor clásico de la migración: quedarte ciego justo cuando más te importa ver.

Fuente: [F5 (Business Wire)](https://www.stocktitan.net/news/FFIV/f5-helps-service-providers-modernize-critical-network-services-with-imfodbgmj4co.html).
