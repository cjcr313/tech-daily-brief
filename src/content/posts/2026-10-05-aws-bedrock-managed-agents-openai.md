---
title: "AWS lanza Bedrock Managed Agents powered by OpenAI: los agentes de OpenAI ahora corren 100% dentro de AWS"
author: Carlos
pubDatetime: 2026-10-05T21:05:00Z
slug: aws-bedrock-managed-agents-openai
featured: false
draft: false
tags:
  - Cloud
  - IA
description: "AWS abrió el preview público de Bedrock Managed Agents powered by OpenAI: la Agents API de OpenAI adaptada para correr íntegramente dentro de tu cuenta AWS. Además, cuatro modelos frontier nuevos en Bedrock y el cierre silencioso de DevOps Guru y Managed Blockchain."
---

![Ilustración isométrica de módulos geométricos de agentes de IA brillantes orbitando dentro de un data center en la nube, conectados por circuitos luminosos, paleta azul profundo con acentos ámbar y teal, estilo editorial tech profesional](../../assets/images/2026-10-05-aws-bedrock-managed-agents-openai.jpg)

El AWS Weekly Roundup de esta semana trae una bomba escondida entre los anuncios: **Amazon Bedrock Managed Agents powered by OpenAI ya está en public preview**. Sí, leyeron bien: la Agents API de OpenAI, customizada para ser AWS-native, dejando que las empresas armen y corran agentes con modelos de OpenAI **enteramente dentro de su propia cuenta AWS**.

## Qué es exactamente

El servicio está construido sobre una **versión adaptada de la Agents API de OpenAI**, pero ingenierizada para integrarse con recursos AWS. La gracia está en el runtime: puedes elegir entre compute self-hosted o **Amazon Bedrock AgentCore Runtime** para sesiones manejadas.

Lo que AWS vende como diferenciador es la parte aburrida-pero-clave del enterprise: los agentes corren con **las identidades, permisos y controles de governance que ya usas en AWS**. Como dijo el propio anuncio: *"You can now build agents optimized for OpenAI models that run entirely inside AWS with the identities, permissions, and governance controls you already use"*. Para industrias reguladas, eso es música para los oídos del compliance.

Con esto, AWS ahora ofrece managed agents de **dos de los principales proveedores de modelos: OpenAI y Anthropic**. El neutral-ground de Bedrock se refuerza — con la incomodidad obvia de balancear socios que se compiten. GA se espera en los próximos meses.

## Cuatro modelos frontier nuevos en Bedrock

Junto con el preview, llegaron modelos nuevos al catálogo:

- **OpenAI GPT-6.1 Sol:** el upgrade de GPT-6 Sol, fuerte en agentic coding, computer use y trabajo profesional. Según OpenAI, se acerca a GPT-6 Astra en evaluaciones exigentes a **~1/5 del costo**. Ese pricing va a presionar a todos los demás.
- **OpenAI GPT-6 Astra UltraFast:** tier premium de velocidad, hasta **6x más rápido de inferencia con ~300 tokens por segundo**. Para agentes conversacionales en tiempo real.
- **Anthropic Claude Sonnet 5.5:** un Sonnet más eficiente, fuerte en coding y tareas bien acotadas. (Ojo: mientras llega el 5.5, Anthropic ya avisó la deprecación de Sonnet 4.5 para fines de noviembre.)
- **Grok 4.7:** mejor manejo de documentos mixtos, coding a escala de repo y agentes de browser-use.

## Las bajas: DevOps Guru se va a la tumba

Menos cubierto pero igual de relevante: AWS anunció **retiros de servicio efectivos al 29 de septiembre**. Los que más duelen:

- **Amazon DevOps Guru** (el AIOps de AWS): fin de soporte el 30 de septiembre de 2027.
- **Amazon Managed Blockchain**: sunset con soporte hasta septiembre de 2027.
- **Amazon Mechanical Turk**: ya llegó a end of support.
- También se van Backint Agent para SAP ASE e Infrastructure Composer.

La lectura es directa: AWS está reasignando recursos hacia agentes y modelos. DevOps Guru queda superseded por cosas como el nuevo **AWS Well-Architected Agent** (en preview), que analiza tu ambiente y entrega recomendaciones de costo, seguridad, performance y resiliencia — AIOps con agentes de verdad en vez del modelo anterior.

## Extras del roundup

- **Aurora PostgreSQL** ahora consulta directo Apache Iceberg y Parquet sin pipelines de ETL.
- **S3 Tables** soporta todos los tipos de datos de Iceberg V3, incluido geospatial y timestamps de nanosegundos.
- **Kiro workflows**: tareas complejas con múltiples agentes y menos supervisión.

## Conclusión

La multi-nube de modelos se está consolidando dentro de Bedrock: OpenAI, Anthropic, Grok y compañía bajo el mismo techo de governance. Si tu stack ya vive en AWS, la excusa de "no puedo usar OpenAI por compliance" acaba de morir. Y si eras usuario de DevOps Guru... tienes un año para migrar.

**Fuentes:** [AWS Weekly Roundup (Oct 5)](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-amazon-bedrock-managed-agents-powered-by-openai-q3-service-availability-updates-kiro-workflows-and-more-october-5-2026/), [Inside AI](https://insideai.news/news/agentic-ai/aws-bedrock-managed-agents-openai/13627/).
