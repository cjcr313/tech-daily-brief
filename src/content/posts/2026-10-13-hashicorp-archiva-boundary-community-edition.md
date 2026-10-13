---
title: "HashiCorp archiva Boundary Community Edition: el open source sigue cediendo terreno al enterprise"
author: Carlos
pubDatetime: 2026-10-13T03:15:00Z
slug: hashicorp-archiva-boundary-community-edition
featured: false
draft: false
tags:
  - DevOps
  - Infraestructura
description: "HashiCorp archivó el repo de Boundary Community Edition el 8 de octubre: se acaba el desarrollo activo de la edición open source y todo apunta a HCP Boundary y Boundary Enterprise."
---

![Ilustración editorial de una puerta de acceso con candado cerrándose sobre un camino comunitario, con edificios corporativos iluminados al fondo, paleta violeta y naranja](../../assets/images/2026-10-13-hashicorp-archiva-boundary-community-edition.jpg)

Si ocupas Boundary para acceso zero trust a infraestructura, la noticia te toca directo: **HashiCorp archivó el repositorio de Boundary Community Edition el 8 de octubre de 2026**, cerrando el desarrollo activo de la herramienta open source de acceso basado en identidad. El mensaje oficial apunta a los sobrevivientes: **HCP Boundary (la versión managed) y Boundary Enterprise**.

## Qué significa en la práctica

- **El repo quedó read-only**: archivado en GitHub, sin merges, sin releases nuevas de la edición comunitaria. Lo que hay hoy es lo que habrá mañana.
- **Los bugs de la CE quedan donde están**: sin roadmap comunitario, cualquier fix relevante vivirá en las ediciones pagas.
- **Migración o congelamiento**: si corre Boundary CE en producción, toca decidir entre pagar la versión enterprise, quedarse congelados en la última release, o evaluar alternativas.

## El patrón no es casualidad

Esto no es un episodio aislado, es la continuación de una estrategia que viene desde la compra de HashiCorp por IBM: **consolidar el open source detrás de las ediciones comerciales**. El guion ya lo conocimos: Terraform pasó a Business Source License en 2023 (y nació OpenTofu como fork), y la edición open de Vault ha ido perdiendo funciones release tras release. Boundary es el siguiente capítulo.

La ironía local: hace dos semanas [cubrimos acá](https://pingdiario.cl/posts/hashicorp-boundary-agentes-ia-zero-trust) cómo HashiCorp promocionaba Boundary + Vault como el patrón zero trust para agentes de IA. La apuesta de producto sigue viva — pero ahora claramente con tarjeta de crédito.

## Qué hacer si estás en Boundary CE

- **Inventario y plan**: revisa qué funcionalidades de la CE realmente usas (targets, sesiones proxadas, catalogs). Las basics siguen funcionando congeladas; el riesgo es seguridad y soporte a largo plazo.
- **Evalúa HCP Boundary**: la versión managed elimina la operación del control plane, con pricing por Worker y sesión.
- **Mira el ecosistema**: Teleport sigue siendo la alternativa más citada para acceso a infraestructura con identidad y auditoría; WireGuard + bastiones propios para los más fierreros.

La lección de fondo es la misma de Terraform: cuando una pieza crítica de tu stack vive en el open source de un vendor comprado por un gigante, **ten un plan B escrito antes de que lo necesites**.

**Fuente:** [LavX News](https://news.lavx.hu/article/hashicorp-archives-boundary-community-edition-shifts-development-to-enterprise-offerings)
