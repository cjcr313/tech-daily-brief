---
title: "Amazon ECS Gateway: ingress administrado para ECS, pero con un pero llamado dominio propio"
author: Carlos
pubDatetime: 2026-11-02T21:10:00Z
slug: aws-ecs-gateway-ingress-administrado
featured: false
draft: false
tags:
  - Cloud
  - AWS
  - DevOps
description: "AWS lanzó ECS Gateway: un recurso de nivel cuenta que deja a platform engineering definiendo la red una vez y a los equipos de app conectándose con un conector. Gratis (solo pagas lo que provisiona), pero sin soporte documentado para dominios propios."
---

![Ilustración editorial tech de una arquitectura de nube con una puerta de enlace central brillante distribuyendo flujos de tráfico de colores hacia múltiples contenedores modulares en fila, paneles de control flotantes, paleta verde azulado y violeta, estilo ilustración isométrica tecnológica profesional, sin texto](../../assets/images/2026-11-02-aws-ecs-gateway-ingress-administrado.jpg)

AWS liberó **Amazon ECS Gateway**, un ingress totalmente administrado para servicios de ECS que resuelve un dolor viejo: dejar de armar ALB + listener rules + target groups + certificados a mano cada vez que un servicio necesita recibir tráfico. La idea organizacional es limpia: **el equipo de plataforma crea el gateway una vez** (con su rol IAM de infraestructura, subnets, security groups, certificados TLS, listeners y un web ACL de WAF opcional), lo asocia a los clusters, y **los equipos de aplicación conectan sus servicios con un conector** vía `CreateService` o `UpdateService`. Fin del ticket cruzado entre app y networking.

## Cómo funciona por dentro

Cada servicio conectado recibe provisioning automático de:

- Un **certificado ACM**
- Un **hostname generado** con la forma `https://<unique-id>.ecs.<region>.on.aws`
- Una regla de listener en un **Application Load Balancer compartido** (routing host-based)
- Un target group y un security group que **solo acepta tráfico desde el load balancer**

Está disponible en todas las regiones comerciales donde corre ECS y **sin costo adicional** del gateway en sí — pagas solo los recursos que provisiona. Suena bien, ¿no? Hasta que llegas al primer "pero".

## El pero: tu dominio no cabe (todavía)

La primera pregunta que todos hicieron en [r/aws](https://www.reddit.com/r/aws/comments/1xb8o4j/announcing_amazon_ecs_gateway_a_managed_ingress/) fue cómo poner su propio dominio delante. Y la respuesta corta, según el análisis de [InfoQ](https://www.infoq.com/news/2026/11/introducing-amazon-ecs-gateway/): **ni el anuncio ni la documentación describen cómo hacerlo**. El gateway usa reglas host-based en el ALB, así que apuntar un CNAME al hostname generado no funciona — el balanceador no sabría a dónde rutear. Para varios, eso deja la feature útil solo para **entornos efímeros o preview environments**, no para producción con dominios reales.

Los detalles finos que importa conocer antes de adoptar:

- **25 servicios por load balancer**. Al superar el tope, el gateway agrega otro ALB — y no hay garantía de consolidación: cuando servicios se van, pueden quedar **varios ALB parcialmente llenos, y cada uno se cobra**.
- **No repara cambios externos**: si modificas o borras un recurso administrado por el gateway, el tráfico puede cortarse y los despliegues siguientes pueden fallar.
- La comunidad está dividida entre "es solo ALB y DNS con un wrapper" y "dejar que un cloud team defina la red una vez es una mejora sólida". La prueba, como dijo un comentarista, será si **quita complejidad sin quitarte demasiado control**.

## Para quién tiene sentido hoy

- **Platform teams** en organizaciones con muchos equipos desplegando en ECS: el modelo gateway + connector es exactamente el patrón de plataforma interna que se predica hace años.
- **Preview environments** y workloads internos donde un hostname generado sobra.
- Producción con dominio propio: por ahora, mejor esperar. Si CloudFront puede usar el gateway como origen interno (la pregunta que nadie resolvió en el hilo), ahí se abre otra puerta.

La dirección es la correcta — menos YAML de networking repetido por servicio — pero la ausencia de custom domains en el día uno es un gap raro para un servicio cuyo trabajo literal es ser la puerta de entrada.

**Fuentes:** [AWS News Blog — Introducing Amazon ECS Gateway](https://aws.amazon.com/blogs/aws/introducing-amazon-ecs-gateway-a-fully-managed-ingress-solution-for-ecs-services/), [InfoQ — Amazon ECS Gateway Arrives](https://www.infoq.com/news/2026/11/introducing-amazon-ecs-gateway/), [hilo en r/aws](https://www.reddit.com/r/aws/comments/1xb8o4j/announcing_amazon_ecs_gateway_a_managed_ingress/), [documentación oficial](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/gateway-overview.html).
