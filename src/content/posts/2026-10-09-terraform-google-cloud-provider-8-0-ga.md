---
title: "Terraform Google Cloud Provider 8.0 ya es GA: y sí, rompe cosas"
author: Carlos
pubDatetime: 2026-10-09T21:20:00Z
slug: terraform-google-cloud-provider-8-0-ga
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "HashiCorp liberó la versión 8.0 del provider de Google Cloud para Terraform: cambio de default en load balancers, recursos eliminados y conversión de listas a sets. Guía rápida de qué revisar antes de subir."
---

![Ilustración editorial tech de bloques de infraestructura modular conectándose en una configuración nueva, con un interruptor de versión grande cambiando de posición, paleta azul y naranja sobre fondo oscuro, estilo ilustración profesional de ingeniería de software, sin texto](../../assets/images/2026-10-09-terraform-google-cloud-provider-8-0-ga.jpg)

Si administras infraestructura en GCP con Terraform, agenda un rato esta semana: **HashiCorp anunció la disponibilidad general del provider de Google Cloud 8.0**, y como todo salto de versión mayor, trae cambios rompientes que conviene revisar con calma antes de que alguien haga `terraform apply` un viernes a las 6 de la tarde.

## El cambio que más va a doler: load balancers

El ajuste más visible afecta a `google_compute_backend_service` y `google_compute_global_forwarding_rule`: el default de `load_balancing_scheme` pasa de `EXTERNAL` a `EXTERNAL_MANAGED`. En español: las configuraciones que no seteen el campo explícitamente empezarán a usar el **Application Load Balancer externo** en vez del Classic. Si tu equipo depende del comportamiento Classic, hay que fijar `load_balancing_scheme = "EXTERNAL"` a mano, o el plan va a proponer cambios en balanceadores existentes que nadie pidió.

## Recursos que desaparecen

La 8.0 también limpia recursos respaldados por servicios que Google ya retiró o reemplazó:

- `google_iap_brand` y `google_iap_client` (tras el cierre de las IAP OAuth Admin APIs)
- Los tres recursos `google_notebooks_*` (migrar a `google_workbench_instance`)
- `google_ml_engine_model`
- Los recursos BeyondCorp de app connection, connector y gateway (el reemplazo son los Security Gateway resources)
- `google_vertex_ai_schedule`, que ahora vive como `google_colab_schedule`

Si tu código referencia cualquiera de estos, hay que actualizarlo antes de subir.

## Listas a sets y validación más estricta

Los atributos donde el orden no importa cambiaron de listas a sets (Service Attachments, configuración de logging/monitoreo de GKE, Cloud Security Compliance Frameworks). Es un cambio que suena cosmético pero evita esos diffs eternos cuando la API devuelve valores en otro orden que tu configuración. Eso sí: la validación se puso más estricta en varias APIs — por ejemplo, `source_contents` ahora es obligatorio en `google_workflows_workflow`.

La 8.0 también capitaliza lo bueno de la era 7.x: soporte para list resources con el workflow `terraform query` (buscar infra existente fuera del state y generar configuraciones de import), más Resource Identity, y write-only attributes que ahora cubren claves privadas de certificados, passwords de AlloyDB y credenciales IAP.

## OpenTofu: la mayoría sí, pero no todo

Los equipos de OpenTofu pueden adoptar casi todo — los cambios rompientes viven en el provider, no en el CLI. Pero ojo: los write-only attributes requieren OpenTofu 1.11+, y el workflow de discovery con `tofu query` aún no existe (el [issue #3787](https://github.com/opentofu/opentofu/issues/3787) sigue abierto).

## Plan de upgrade en tres pasos

1. Fija el provider y sube primero a la última 7.x; resuelve los warnings de deprecación.
2. Busca en el código los recursos eliminados y los balanceadores que omiten `load_balancing_scheme`; setea el scheme explícito.
3. Revisa el `terraform plan` con lupa: recursos marcados para destroy/replace y conversiones list-to-set.

El provider lo desarrollan en conjunto el equipo de Google Cloud, HashiCorp y la comunidad, y ya está en el Terraform Registry. La referencia autoritativa completa es la guía de upgrade y el changelog en GitHub — el post oficial no lista cada recurso removido.

**Fuentes:** [HashiCorp](https://www.hashicorp.com/en/blog/terraform-provider-for-google-cloud-80-now-generally-available) · [InfoQ](https://www.infoq.com/news/2026/10/terraform-google-cloud-provider/)
