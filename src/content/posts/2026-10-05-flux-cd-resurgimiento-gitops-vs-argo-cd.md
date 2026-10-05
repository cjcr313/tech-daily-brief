---
title: "Weaveworks murió, Flux no: el resurgimiento del GitOps comunitario y la pelea con Argo CD"
author: Carlos
pubDatetime: 2026-10-05T03:10:00Z
slug: flux-cd-resurgimiento-gitops-vs-argo-cd
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
description: "Flux perdió a su empresa creadora en 2024 y todos le escribieron el obituario. Dos años después va por v2.9.5, Microsoft y AWS lo tienen incrustado en sus productos y Morgan Stanley corre 500+ clústeres con él. La pregunta ya no es si sobrevive, sino qué arquitectura de GitOps quieres."
---

![Ilustración editorial tech del resurgimiento de GitOps: un pipeline continuo de commits fluyendo desde un repositorio hacia múltiples clústeres de Kubernetes, con engranajes y flechas reconstruyéndose a sí mismas sobre un tablero de control, paleta azul y verde oscura, estilo ilustración editorial profesional](../../assets/images/2026-10-05-flux-cd-resurgimiento-gitops-vs-argo-cd.jpg)

Cuando Weaveworks — la empresa que creó Flux — cerró en febrero de 2024, los obituarios se escribieron solos: proyecto GitOps pierde a su sponsor comercial, fin de la historia. Spoiler: no pasó nada de eso.

Un análisis publicado este fin de semana en bex.co pone los recibos sobre la mesa y el veredicto es directo: **Flux es un proyecto graduado del CNCF que siguió lanzando versiones durante toda la transición y hoy despacha más rápido que antes**. La versión actual es v2.9.5, cortada a fines de septiembre de 2026, y el repositorio tuvo actividad en las últimas 24 horas.

## El rescate, con nombres y apellidos

Lo que salvó a Flux fue haberse graduado en el CNCF (noviembre de 2022): marcas, gobernanza e infraestructura ya vivían bajo stewardship neutral cuando la casa matriz cayó. No había que reemplazar un dueño, solo empleadores de mantenedores. Y ese hueco se llenó en semanas:

- **ControlPlane** movió primero: contrató a Stefan Prodan (creador de Flagger) y a la mantenedora core Soulé Ba para seguir trabajando full-time, respaldados por una distribución enterprise hardened y FIPS-compliant.
- El **19 de marzo de 2024** el CNCF anunció una ola de soporte corporativo: **Microsoft** (Flux es el motor GitOps detrás de Azure Arc Kubernetes), **AWS** (Flux potencia GitOps en EKS-Anywhere), **GitLab** (lo había hecho su ruta recomendada un año antes vía el Agent for Kubernetes), más Cisco, Tchibo, Orange/Sylva y una lista larga de distribuidoras y consultoras.

El detalle que importa: esas no son logos de patrocinio, son **dependencias de producto**. Las empresas que embeben Flux en sus servicios administrados no pueden dejarlo pudrirse.

## El registro de releases como auditoría

Los anuncios de respaldo son baratos; los releases son la evidencia. v2.3 GA llegó en mayo de 2024 — tres meses después del cierre, puntual — y de ahí en adelante: dos a tres minors al año, sin baches. v2.9 (junio 2026) trajo sistema de plugins para la CLI, SSH commit signing y Kubernetes Workload Identity.

Y para los que andan construyendo agentes: desde la era v2.6 existe un **servidor MCP para GitOps asistido por IA**, que permite a agentes inspeccionar y operar el estado de Flux vía una interfaz de herramientas estándar. El proyecto que tuvo que reconstruir su comunidad es el que más está experimentando en la frontera agente-operaciones.

¿Escala? **Morgan Stanley corre más de 500 clústeres de Kubernetes sobre Flux** y presentó su caso en el primer FluxCon NA. El proyecto cumplió 10 años en julio de 2026, con fiesta y todo.

## Ojo con la letra chica

Los controladores de Flux siguen siendo Apache-2.0 puro CNCF, pero la capa de distribución más reciente de ControlPlane — el **Flux Operator** y su canal de distribución — es **AGPL-3.0**. Es un split comercial-open-source deliberado, no una trampa. Pero si tu plataforma redistribuye o construye un servicio administrado sobre el operator en vez del upstream, léela como leerías cualquier dependencia AGPL.

## La pregunta real en 2026

Ya no es "¿sobrevive Flux?". Es "¿tu plataforma quiere el **modelo toolkit descentralizado de Flux** o el **hub-and-spoke centralizado de Argo CD**?". Una decisión de arquitectura de plataforma, no una apuesta de viabilidad. Que es, al final, la mejor noticia posible para un proyecto que hace dos años todos daban por muerto.

**Fuentes:** [bex.co — Weaveworks Died. Flux Didn't](https://bex.co/blog/2026/10/04/flux-cd-post-weaveworks-comeback-vs-argocd) · [fluxcd.io](https://fluxcd.io) · [CNCF](https://www.cncf.io)
