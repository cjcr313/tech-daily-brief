---
title: "AWS convierte Security Hub en plataforma multicloud y añade protección para workloads de IA"
author: Carlos
pubDatetime: 2026-07-24T04:03:00Z
slug: aws-security-hub-multicloud-ai-protection
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "AWS extiende Security Hub a Microsoft Azure y suma protección contra amenazas específicas de IA. El objetivo: ser el plano de control unificado para cloud y AI security."
---

AWS acaba de darle un giro estratégico a **Security Hub**. Lo que empezó como un CSPM para recursos de AWS ahora se transforma en un **plano de control multicloud con protección específica para workloads de IA**. El mensaje es claro: si ya pagas Security Hub, no te hagamos comprar otra herramienta para Azure o para Bedrock.

## Qué anunciaron

Cuatro capacidades nuevas:

1. **Monitoreo de recursos en Azure**: VMs, container images en ACR, Function Apps e identidades. Evaluación contra CIS Microsoft Azure Foundations Benchmark. Todo visible en el mismo console que tus findings de AWS.

2. **GuardDuty AI Protection**: detección de amenazas específicas para servicios de IA (Amazon Bedrock, SageMaker). Incluye:
   - Invocaciones anómalas de modelos (abuso de inference endpoints)
   - Intentos de prompt injection (vía integración con Bedrock Guardrails)
   - **"Cost harvesting"**: la versión IA del crypto-mining — alguien te roba creds y convierte tu presupuesto de IA en compute gratis

3. **GuardDuty AI-powered investigations** (preview): investigación automatizada de incidentes con IA.

4. **Security Hub AI inventory**: inventario de recursos de IA en tu cuenta, para que sepas qué tienes y dónde está expuesto.

## El detalle técnico interesante

AWS aprovechó **AWS Config** para el soporte multicloud. Config ahora evalúa recursos de Azure en **tiempo casi real** (change-triggered), no con el ciclo de polling de 24 horas típico de muchos CSPM de terceros. La configuración es un tenant-level connection de Azure con acceso read-only. Un clic y listo.

El pricing se simplificó a un modelo **per-resource-per-month** que cobra solo por cuatro tipos de recursos (VMs, container images, functions, identidades) tanto en AWS como en Azure.

## Por qué importa

**"Cost harvesting"** es el ataque que nadie vio venir hasta que los LLMs llegaron. Un endpoint de inference puede generar miles de dólares por hora. Si alguien compromete tus credenciales y empieza a llamar Bedrock en loop, la factura se dispara antes de que te des cuenta. Que GuardDuty lo detecte como patrón de amenaza es una señal de que AWS está pensando en IA como superficie de ataque de primera clase.

Lo segundo: **Security Hub como control plane multicloud** posiciona a AWS directamente contra los CNAPPs independientes (Wiz, Palo Alto Prisma, Lacework). Si tu equipo ya usa Security Hub y tiene algunos recursos en Azure, la propuesta de valor es obvia. Si eres multi-cloud serio con GCP también... ahí todavía falta.

---

*Fuentes: SiliconANGLE, AWS Security Blog*
