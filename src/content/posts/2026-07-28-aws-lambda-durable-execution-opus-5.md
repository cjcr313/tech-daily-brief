---
title: "AWS suma Claude Opus 5 y lanza Durable Execution para Lambda"
author: Carlos
pubDatetime: 2026-07-28T04:00:00Z
slug: aws-lambda-durable-execution-opus-5
featured: false
draft: false
tags:
  - Cloud
  - AWS
  - IA
  - DevOps
description: "Resumen de AWS: Claude Opus 5 llega a la nube, nueva Local Zone en Atenas y Lambda introduce durable execution para .NET."
---

![Placeholder](../../assets/images/placeholder.jpg)


El último *AWS Weekly Roundup* de julio nos deja un par de bombas interesantes tanto para la gente de IA como para los arquitectos de backend. 

Primero, en el frente de inteligencia artificial, **Claude Opus 5 de Anthropic ya está disponible en AWS** (a través de Amazon Bedrock). Esto sigue consolidando a AWS como el principal canal de distribución enterprise para los modelos de Anthropic, ofreciendo a las empresas seguridad y privacidad dentro de su propia VPC.

Por el lado de infraestructura, AWS anunció el soporte de **Durable Execution para AWS Lambda en .NET**. Esto es un avance brutal para el ecosistema serverless: permite escribir funciones que pueden pausar su ejecución, esperar por eventos externos (o delays largos) y reanudar exactamente donde quedaron, sin que te cobren por el tiempo de espera y sin tener que armar máquinas de estado gigantes en Step Functions para workflows simples.

Finalmente, para los que despliegan en Europa, AWS abrió una nueva **Local Zone en Atenas**, mejorando la latencia para los usuarios en el Mediterráneo.