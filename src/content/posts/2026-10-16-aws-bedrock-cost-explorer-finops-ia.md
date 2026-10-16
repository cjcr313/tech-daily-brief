---
title: "AWS lleva el gasto de IA a Cost Explorer: atributos de Bedrock, Lambda Web Functions y una tuerca FinOps"
author: Carlos
pubDatetime: 2026-10-16T03:15:00Z
slug: aws-bedrock-cost-explorer-finops-ia
featured: false
draft: false
tags:
  - AWS
  - FinOps
description: "AWS metió los atributos de producto de Bedrock en Cost Explorer y Budgets para desglosar el gasto de IA por modelo, proveedor y tipo de inferencia. Junto a eso: Lambda Web Functions, métricas de ECS gratis y más."
---

![Ilustración editorial tech de un panel de control de costos en la nube con gráficos de barras y anillos flotantes que se descomponen en chips de IA y tokens, un lente de aumento enfocando facturas digitales, simbolizando visibilidad financiera del gasto de inteligencia artificial en la nube, paleta azul con acentos verdes, estilo ilustración profesional limpia, sin texto](../../assets/images/2026-10-16-aws-bedrock-cost-explorer-finops-ia.jpg)

La pregunta de moda en las empresas ya no es "¿usamos IA?" sino "¿cuánto nos está costando y quién la está gastando?". AWS le puso una respuesta parcial: **los atributos de producto de Amazon Bedrock ya están disponibles en AWS Cost Explorer, AWS Budgets y los Cost Management Dashboards**, lo que permite analizar el gasto de Bedrock **por modelo, proveedor de modelo, tipo de inferencia y feature**.

## Qué se puede filtrar ahora

Se pueden agrupar y filtrar costos por atributos como modelo, proveedor, tokens de entrada, tokens de salida, inferencia on-demand y reranker. En Budgets, los presupuestos se pueden filtrar por los mismos atributos. Traducción: finance y equipos de plataforma finalmente pueden rastrear qué workloads están empujando la factura de IA, sin exportar CSVs y crucificar spreadsheets a mano. Es el tipo de feature aburrido que marca la diferencia entre un FinOps de IA real y adivinar con brújula.

## El resto del lote de novedades

La misma tanda de anuncios trajo más movimiento:

- **Lambda Web Functions:** nuevo primitivo de compute serverless para workloads HTTP, con un modelo de facturación centrado en **CPU activa y memoria, en vez de CPU idle**. Para APIs y apps con tráfico irregular, pagar por actividad real en vez de por tiempo de ejecución completo puede cambiar la matemática.
- **ECS:** nueva métrica **LiveTaskCount**, pensada para reflejar mejor las tareas realmente activas en autoscaling y planificación de capacidad. Y mejor aún: **eliminaron el cargo por la métrica RunningTaskCount** en Container Insights. Observabilidad más barata de puro regalo.
- **ElastiCache for Valkey:** llega **ElastiCache Insights**, un dashboard basado en CloudWatch con salud, memoria, red, latencia y throughput. La idea: descubrir antes si ese cache cluster sobre-dimensionado no se está ganando el pan.
- **S3 Express One Zone:** disponible en **4 regiones adicionales**. Hasta 10x acceso más rápido y hasta 80% menos en costos por request que S3 Standard, para workloads sensibles a latencia.
- **EC2 C8gb:** las instancias **Graviton4** ahora GA en más regiones (US East, US West, Europa y África), con más throughput de EBS.
- **AWS Config:** soporte para **77 tipos de recursos nuevos**, mejorando inventario, compliance y visibilidad de riesgo en entornos grandes.

Nada revolucionario por separado, pero en conjunto apunta a donde está la conversación: hacer que el gasto —especialmente el de IA— sea visible, atribuible y recortable. El próximo paso obvio es que los equipos FinOps armen budgets por caso de uso de IA y no solo por cuenta. Eso ya es tarea de ustedes.

**Fuentes:** AWS What's New, FinOps Weekly.
