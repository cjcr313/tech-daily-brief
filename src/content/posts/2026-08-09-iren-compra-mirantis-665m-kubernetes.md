---
title: "IREN compra Mirantis por US$665M: el minero de bitcoin que se hizo player de cloud Kubernetes"
author: Carlos
pubDatetime: 2026-08-09T10:00:00Z
slug: iren-compra-mirantis-665m-kubernetes
featured: false
draft: false
tags:
  - Cloud
  - Kubernetes
  - Infraestructura
description: "IREN cerró la compra de Mirantis por US$665M en acciones. El ex-minero de bitcoin ahora ofrece plataforma de cloud nativa con Kubernetes y subió su target de ingresos 2026 a US$4B."
---

![IREN acquires Mirantis](../../assets/images/2026-08-09-iren-compra-mirantis-665m-kubernetes.jpg)

La transformación más salvaja del año en infraestructura: **IREN**, originalmente una empresa de mining de bitcoin, cerró la adquisición de **Mirantis** — uno de los players históricos del ecosistema Kubernetes y cloud native — por **US$665 millones**. La operación se concretó el 3 de agosto y se paga principalmente en acciones: 12.6 millones de shares de IREN valorados en $625M más $40M en efectivo y RSUs.

## Quién es quién

**Mirantis** es un veterano de infraestructura. Creadores de **k0s** (Kubernetes distribution lightweight), **Lens** (el IDE Kubernetes más popular del mundo), y proveedores de Mirantis Kubernetes Engine y Container Cloud. Su cartera incluye clientes enterprise que manejan clústeres K8s a escala. Han sido parte del ecosistema CNCF desde el día uno.

**IREN** (antes Iris Energy) era un minero de bitcoin australiano. Literalmente compraba energía barata para hashear bloques. Pero en 2025-2026 vio el cambio de paradigma: los mismos data centers con energía barata podían **albergar GPUs para AI workloads** a un margen infinitamente superior al mining. Pivot completo.

## Por qué importa

1. **Kubernetes se vuelve infraestructura AI-native.** IREN no compró Mirantis por su software de gestión de contenedores en abstracto. Lo compró porque para servir **AI cloud a escala** necesitas orquestación de containers de nivel producción. Mirantis da esa capa.
2. **Contratos serios.** IREN firmó acuerdos multi-anuales con developers AI por **US$2.8 mil millones**, incluyendo Microsoft y NVIDIA como partners. Subió su target de ingresos 2026 de $3.7B a **más de $4 mil millones**.
3. **Validación del modelo "power-first".** La jugada de IREN es tener energía + data center + software de orquestación verticalmente integrado. Es la misma tesis de CoreWeave pero con un sabor diferente: en vez de construir todo desde cero, compraron el stack de software.
4. **Wall Street compró la historia.** Cantor Fitzgerald subió el precio target de $61 a **$77** y mantiene rating Overweight. Bank of America tomó posición del 5.8%. Las acciones subieron 12% en la semana.

## El ecosistema Kubernetes cambia de manos

La adquisición es significativa para la comunidad cloud native. Mirantis operará como **subsidiaria independiente** dentro de IREN, pero el cambio de dueños de un player así no es trivial:

- **Lens** tiene más de 1 millón de usuarios y es el cliente desktop K8s más usado
- **k0s** es una distribución K8s ligera que compite con k3s
- **Mirantis Kubernetes Engine** (antes Docker Enterprise/UCP) sigue siendo usado en enterprises con requirements de on-prem air-gapped

La pregunta es si IREN mantendrá el compromiso de Mirantis con la comunidad open source, o si lo irá orientando hacia servir exclusivamente su propio stack de AI cloud. Históricamente, cuando una empresa de infraestructura es comprada por un jugador con un vertical específico, el roadmap open source tiende a degradarse.

## La señal para el mercado

La consolidación del ecosistema Kubernetes/Cloud Native continúa. En los últimos dos años hemos visto:

- **VMware/Broadcom** absorbiendo Tanzu y destruyendo gran parte del ecosistema partner
- **Red Hat** integrando OpenShift más profundo en IBM
- **SUSE** desinvirtiendo en Rancher
- Y ahora **IREN** comprando Mirantis

La conclusión: Kubernetes como tecnología es ubícuo y maduro, pero **las empresas que lo comercializan como producto independiente están desapareciendo**. El futuro del cloud native es vertical: hyperscalers, neoclouds especializados en AI, y empresas como IREN que juntan energía + hardware + software en un solo paquete.

Para equipos DevOps, esto significa que el stack de herramientas puede cambiar de dueño más seguido de lo que quisieras. Diversifica, prefiere proyectos CNCF graduados con comunidades fuertes independientes del corporate parent, y mantén tus habilidades portables.

**Fuentes:** [ad-hoc-news](https://www.ad-hoc-news.de/boerse/news/unternehmensnachrichten/iren-s-identity-pivot-gathers-pace-as-665-million-mirantis-deal-closes/69926956), [CNBC/TipRanks](https://www.cnbc.com/quotes/IREN), [TS2](https://ts2.tech/en/iren-jumps-12-in-the-week-as-focus-moves-from-mirantis-stock-pressure-to-ai-performance/)
