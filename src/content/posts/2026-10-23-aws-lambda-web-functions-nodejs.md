---
title: "AWS le dice adiós a los adaptadores: Lambda Web Functions corre tu Express o Hono tal cual, con streaming y menos cold starts"
author: Carlos
pubDatetime: 2026-10-23T13:05:00Z
slug: aws-lambda-web-functions-nodejs
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "AWS lanzó Lambda Web Functions: apps web Node.js estándar corriendo directo en Lambda, con requests concurrentes, response streaming y cobro solo por CPU activa."
---

![Ilustración editorial de una aplicación web desplegándose directamente sobre una nube modular serverless](../../assets/images/aws-lambda-web-functions-nodejs.jpg)

AWS acaba de soltar una de esas noticias que hacen repensar cómo se arma una API hoy: **Lambda Web Functions**. La idea es simple y brutal a la vez: tomas un servidor HTTP estándar en Node.js —Express, Hono, Fastify, Next.js, lo que sea— y lo despliegas en Lambda **sin adaptadores, sin capas intermedias, sin reescribir nada**. Un comando y listo.

## ¿Qué cambia respecto al Lambda de siempre?

Hasta ahora, meter una app web en Lambda significaba pelear con el evento API Gateway/Function URL, envolver tu handler en adaptadores y aceptar que cada request vivía en su propia ejecución. Lambda Web Functions cambia el modelo:

- **Requests concurrentes en un solo entorno warm**: un mismo entorno de ejecución atiende varias requests en paralelo, lo que reduce significativamente los cold starts. Chao a la lotería del arranque frío en la primera request.
- **Response streaming nativo**: soporta respuestas en streaming, incluyendo output incremental de LLMs y server-side rendering, sin necesitar una capa de hosting aparte.
- **Routing multi-región automático**: las requests van a la región más cercana al usuario. El endpoint viene con dominio de Lambda incluido; si quieres dominio custom, caché en edge o WAF, pones CloudFront delante y usas la función como origen.
- **Billing por CPU activa y memoria**: se cobra el tiempo de CPU efectivamente usado, no el tiempo esperando respuestas de servicios downstream. Para workloads I/O-heavy esto puede cambiar la cuenta de fin de mes.

## ¿Y las funciones Lambda que ya tengo?

Nada. AWS las renombró a **Lambda Event Functions** y siguen funcionando exactamente igual. Cero migración forzada, lo cual se agradece.

## Limitaciones a tener en cuenta

Por ahora **solo soporta Node.js**. Python, Java y .NET quedan en el modelo tradicional. También es un producto orientado a workloads HTTP: apps full-stack, APIs REST y GraphQL, y microservicios que escalan independiente.

Según Micah Walter, arquitecto de soluciones de AWS, la promesa es clara: "despliegas con un solo comando y Lambda maneja escalado, distribución multi-región y billing de CPU activa. Sin adaptadores, sin infraestructura que administrar y sin lock-in de framework".

En Reddit y Hacker News la recepción va de entusiasta a escéptica (como siempre), pero el movimiento es consistente con la dirección de AWS este año: Lambda MicroVMs en junio, y ahora esto. La capa serverless se está volviendo cada vez más "trae tu app tal cual".

**Enlaces:** [anuncio oficial](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/) · [blog de AWS](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/) · [documentación](https://docs.aws.amazon.com/lambda/latest/dg/web-functions.html)
