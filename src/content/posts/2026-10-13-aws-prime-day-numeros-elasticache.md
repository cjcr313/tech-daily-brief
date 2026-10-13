---
title: "AWS publica los números del Prime Day 2026: ElastiCache picó en 2,3×10^15 requests diarios y GuardDuty tragó 14 billones de eventos de log por hora"
author: Carlos
pubDatetime: 2026-10-13T21:20:00Z
slug: aws-prime-day-2026-numeros-elasticache
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "La telemetría oficial del evento: Graviton movió 59 billones de requests con picos de 192 millones por segundo, Aurora almacenó 5.491 TB y Kinesis procesó 988 millones de registros por segundo."
---

![Ilustración editorial de una red de data centers colosales conectados por rutas luminosas naranjas y turquesa que se extienden hasta el horizonte, con una marea de paquetes de datos fluyendo entre torres de servidores, fondo oscuro, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-13-aws-prime-day-numeros-elasticache.jpg)

Todos los años, después del Prime Day, AWS publica su propia radiografía de infraestructura — y el resumen semanal de ayer volvió a ponerla en la conversación. Los números del Prime Day 2026 (que corrió entre el 23 y 26 de junio, con ofertas en más de 35 categorías) son de esos que cuesta dimensionar hasta sentarse un rato con ellos. El que más impresiona: **Amazon ElastiCache picó en más de 2,3×10^15 requests diarios** (dos mil billones en escala larga, 2.3 *quadrillion* en inglés) y **2,1 billones de requests en un solo minuto**.

## Los números servicio por servicio

- **ElastiCache**: pico de 2,3×10^15 requests diarios y 2,1×10^12 por minuto. El caching sigue siendo el músculo silencioso de todo evento de escala masiva.
- **Graviton**: los procesadores ARM propios de Amazon movieron **59 billones de requests (5,9×10^13)** con picos de **192 millones de requests por segundo**.
- **Amazon Aurora**: cientos de miles de millones de transacciones, **5.491 TB almacenados** y **1.194 TB transferidos** durante el evento.
- **Kinesis Data Streams**: pico de **988 millones de registros por segundo** ingiriendo el streaming en tiempo real.
- **GuardDuty**: monitoreó **14,08 billones de eventos de log por hora** (1,4×10^13). La detección de amenazas a escala de Prime Day es, en sí misma, un problema de big data.
- **DynamoDB y Lambda** también batieron récords de requests y ejecuciones, cerrando el combo serverless que sostiene el evento.

## Por qué importa (si no trabajas en Amazon)

Porque es el **stress test público más grande del planeta** para patrones que todos usamos: caching agresivo, streaming de eventos, cómputo serverless y bases de datos administradas. Cuando tu equipo discute si Redis/ElastiCache "aguanta", o cuánto puede escalar una arquitectura event-driven con Kinesis, estos números son el techo de referencia que ya alguien demostró en producción.

Y un guiño para los que llevan observabilidad: 14 billones de eventos de log **por hora** en GuardDuty es un recordatorio brutal de que la telemetría a esa escala deja de ser un costo marginal y se convierte en una carga de trabajo de primera clase.

**Fuentes:** [AWS Blog — All the numbers: Prime Day 2026](https://aws.amazon.com/blogs/aws/all-the-numbers-amazon-prime-day-2026-powered-by-aws/) · [AWS Weekly Roundup (13 oct 2026)](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-prime-day-2026-by-the-numbers-claude-haiku-5-5-amazon-nova-2-5-sonic-and-more-october-13-2026/)
