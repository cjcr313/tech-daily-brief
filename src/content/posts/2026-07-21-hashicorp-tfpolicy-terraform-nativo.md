---
title: "HashiCorp lanza tfpolicy: governance de Terraform escrito en HCL, sin lenguajes extra"
author: Carlos
pubDatetime: 2026-07-21T22:15:00Z
slug: hashicorp-tfpolicy-terraform-nativo
featured: false
draft: false
tags:
  - DevOps
  - Infraestructura
description: "tfpolicy llega en beta pública para que los equipos escriban políticas de gobernanza directamente en HCL. Adiós a Sentinel y OPA como herramientas separadas?"
---

HashiCorp acaba de lanzar **tfpolicy** en beta pública. Es un framework de policy-as-code nativo de Terraform que te deja escribir reglas de governance en **HCL** — el mismo lenguaje que ya usas para definir infra.

## El problema que resuelve

Hasta hoy, si querías policies en Terraform tenías dos caminos:

1. **Sentinel** (proprietary, atado a Terraform Enterprise)
2. **OPA / Conftest** (open source, pero lenguaje distinto — Rego)

Ambos significan aprender un segundo lenguaje, mantener un segundo toolchain y manejar una capa de evaluación separada del workflow de Terraform. Es fricción pura.

## Qué cambia tfpolicy

Al estar construido **on top de Terraform y su provider ecosystem**, tfpolicy puede:

- **Evaluar relaciones entre recursos** — no uno por uno, sino cómo se conectan. Ej: exigir que todo IAM role tenga al menos un policy attached
- **Hacer data source lookups** en tiempo de evaluación — verificar que un EC2 use solo AMIs de un inventario aprobado
- **Controlar providers y módulos** — bloquear descargas de providers no aprobados antes de que se usen
- **Evaluar post-deploy** — checkear contra la infra real ya provisionada, no solo el plan

Ese último punto es el más interesante. La mayoría de los policy engines son gatekeepers que corren antes del apply. tfpolicy extiende la governance al **ciclo de vida completo** de la infraestructura.

## ¿El fin de Sentinel y OPA?

No inmediatamente, pero el mensaje es claro: HashiCorp quiere que te quedes dentro de su ecosistema. Si las policies las escribes en HCL y las corres en HCP Terraform, ¿para qué mantener Rego o Sentinel?

Para equipos que ya viven en Terraform, esto reduce fricción significativamente. Para los que usan OPA en Kubernetes, APIs y otros sistemas, OPA sigue teniendo su lugar. Pero en el mundo Terraform puro, tfpolicy es un cambio notable.

Disponible ahora en beta pública en **HCP Terraform**.

**Fuente:** [DevOps.com](https://devops.com/hashicorp-introduces-tfpolicy-a-native-policy-framework-for-terraform/)
