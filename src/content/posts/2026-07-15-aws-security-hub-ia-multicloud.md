---
title: "AWS retoola Security Hub con protección de IA y monitoreo multicloud"
author: Carlos
pubDatetime: 2026-07-15T16:00:00Z
slug: aws-security-hub-ia-multicloud
featured: false
draft: false
tags:
  - Cloud
  - Observabilidad
  - Seguridad
description: "AWS añade protección de workloads de IA y monitoreo de Azure a Security Hub, consolidando la seguridad multicloud."
---

AWS le metió una actualización seria a Security Hub. Ahora no solo junta findings de AWS, sino que también **descubre y monitorea recursos de Microsoft Azure** — VMs, imágenes de contenedores, Function Apps e identidades — evaluándolos contra el CIS Microsoft Azure Foundations Benchmark. Los findings de Azure aparecen en el mismo formato y con los mismos workflows de automatización que los de AWS. Un solo panel para tu estate completo.

## Protección de workloads de IA

La parte más interesante es **GuardDuty AI Protection**, ahora GA, que cubre Amazon Bedrock y SageMaker:

- Detecta uso inusual de modelos
- **Cost harvesting attacks** — atacantes con credenciales robadas que corren inferencia a costa tuya. Como el AI inference es caro, esto puede sangrar tu cuenta rápido
- Detección de **prompt injection** vía integración con Bedrock Guardrails

Además, **GuardDuty AI-powered Investigations** (en preview) analiza los alerts automáticamente: revisa el contexto del finding, actividad de los últimos 90 días, threat intelligence, y te entrega un score de confianza con mapeo MITRE ATT&CK y acciones recomendadas.

## Inventario de IA

Security Hub ahora incluye un **AI inventory** — un inventario automático de todos tus assets de IA:

- Servicios gestionados: Bedrock, SageMaker, AgentCore
- Modelos self-hosted en EC2, ECS, EKS, incluyendo endpoints externos
- Mapea los assets de IA a la infraestructura subyacente (compute, networking, IAM, data stores)

Básicamente, AWS reconoce que los equipos de seguridad no tienen visibilidad sobre qué modelos están corriendo, quién los usa y qué infraestructura hay detrás. Este inventario viene a cerrar ese gap.

> "Collecting findings was never the hard part. The hard part is understanding them, connecting them, and acting before an attacker does." — Michael Fuller, Director at AWS

La movida es clara: AWS quiere ser el panel único de seguridad para tus workloads de IA y tu nube multicloud. Para los equipos que ya están en el ecosistema AWS, esto reduce la necesidad de tools adicionales. Para los que están en Azure también, ahora tienen una razón más para mirar Security Hub.

**Fuente:** [Help Net Security](https://www.helpnetsecurity.com/2026/07/15/aws-security-hub-ai-workload-protection/)
