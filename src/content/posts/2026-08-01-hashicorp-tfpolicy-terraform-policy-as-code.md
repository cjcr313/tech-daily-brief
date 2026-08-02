---
title: "HashiCorp lanza tfpolicy: policy-as-code nativo en HCL para Terraform"
author: Carlos
pubDatetime: 2026-08-01T18:00:00Z
slug: hashicorp-tfpolicy-terraform-policy-as-code
featured: false
draft: false
tags:
  - DevOps
  - Infraestructura
  - Cloud
description: "HashiCorp introdujo tfpolicy, un framework de policy-as-code basado en HCL integrado directamente en Terraform. Sentinel queda relegado y llega un agente de IA para generar políticas."
---

![HashiCorp tfpolicy: policy-as-code en HCL](../../assets/images/2026-08-01-hashicorp-tfpolicy.jpg)

HashiCorp acaba de meterle un cambio importante a cómo se hace governance en Terraform. El **31 de julio** lanzó **tfpolicy**, un framework de policy-as-code que usa el mismo lenguaje HCL que ya conoces, integrado directamente en el workflow de Terraform. Está en **beta pública dentro de HCP Terraform**.

## Qué cambia

Hasta ahora, si querías policies en Terraform tenías dos caminos: **Sentinel** (el DSL propietario de HashiCorp) u **OPA / Rego** (open source, cloud-native). Ambos funcionaban como una capa externa que validaba la infra después del plan. El problema: no tenían contexto completo de las relaciones entre recursos, y requerían aprender un lenguaje distinto.

tfpolicy viene a solucionar eso:

- **Mismo lenguaje:** escribes policies en HCL, el mismo que ya usas para tu infra. Cero curva de aprendizaje nueva.
- **Integración profunda:** las policies se evalúan **antes y después** del deploy. Puedes catchear violaciones que solo aparecen cuando los recursos ya están provisionados.
- **Contexto relacional:** puede evaluar policies basadas en relaciones entre recursos, no solo attributes individuales. Algo que Sentinel y OPA no podían hacer bien.
- **Supply-chain controls:** te deja controlar qué providers y módulos se pueden descargar, bloqueando el uso de dependencias no aprobadas. Esto es clave con el riesgo de supply-chain attacks que ha crecido mucho últimamente.

## Sentinel: no muerto, pero deprecado

HashiCorp dice que va a **seguir soportando Sentinel**, pero queda clarísimo que tfpolicy es el caballo ganador. Cuando una empresa dice "lo seguiremos soportando" sin entusiasmo, es básicamente un "migramos pronto".

Para equipos que tienen policies escritas en Sentinel, HashiCorp sacó un **agente de IA** que puede generar configuraciones de tfpolicy nuevas y **convertir policies existentes de Sentinel** automáticamente. Es un open skill que vive en GitHub.

## El catch

Las capacidades completas de tfpolicy — enforcement durante planning, deployment y post-deploy — **solo funcionan dentro de HCP Terraform**. El CLI standalone sirve para validación y testing local, pero sin la integración de end-to-end. O sea, si usas Terraform Community o OSS, te quedas con la versión limitada.

Es la jugada clásica de HashiCorp post-adquisición de IBM: mover más funcionalidad al SaaS para monetizar. No es necesariamente malo, pero vale la pena tenerlo en cuenta.

## Por qué importa

Policy-as-code es de esas cosas que todos saben que deberían hacer pero pocos implementan bien. Si tfpolicy logra bajar la fricción (escribir en HCL vs aprender Rego), vamos a ver mucha más adopción. Y el control de supply-chain viene en el momento justo: con los incidentes de seguridad recientes en el ecosistema AI/DevOps, tener governance sobre qué módulos y providers se ejecutan en tu infra ya no es opcional.

**Fuentes:** [InfoQ](https://www.infoq.com/news/2026/07/terraform-policy-as-code/), [HashiCorp Blog](https://www.hashicorp.com/en/blog/introducing-tfpolicy-a-declarative-policy-workflow-built-for-terraform)
