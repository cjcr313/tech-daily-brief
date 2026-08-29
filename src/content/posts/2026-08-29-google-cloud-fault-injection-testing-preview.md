---
title: "Google Cloud presenta Fault Injection Testing en preview: chaos engineering gestionado"
author: Carlos
pubDatetime: 2026-08-29T22:00:00Z
slug: google-cloud-fault-injection-testing-preview
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "Nueva feature en preview para simplificar las pruebas de resiliencia inyectando fallas de forma controlada en Google Cloud, sin armar tu propio Chaos Monkey."
---

![Ilustración editorial de un panel de control inyectando fallas controladas en una red de servicios en la nube, con interruptores de circuit-breaker y relámpagos sutiles, tonos violeta y cian, estilo tech editorial](../../assets/images/2026-08-29-google-cloud-fault-injection-testing-preview.jpg)

Google Cloud presentó **Fault Injection Testing en preview**, una feature pensada para que los equipos prueben resiliencia sin tener que armar su propio laboratorio de caos desde cero. La idea de fondo: **inyectar fallas de forma controlada y segura** para ver cómo reacciona tu sistema antes de que lo haga un incidente real.

## Qué es

El fault injection (o chaos engineering, para los amigos) es la práctica de romper cosas a propósito — latencia, pérdida de paquetes, caídas de servicio — para validar que los mecanismos de retry, timeout, circuit breaker y failover funcionan de verdad. Hasta ahora, eso implicaba montar herramientas externas o scripts propios. Google lo está metiendo como **feature nativa y gestionada**, con el objetivo declarado de **"simplificar tu estrategia de pruebas de resiliencia"**.

## Por qué importa

- **Baja la barrera de entrada al chaos engineering**: equipos que no tenían recursos para un Chaos Monkey propio ahora tienen una opción managed.
- **Resiliencia como feature de plataforma**: se alinea con la tendencia de que los cloud providers empaqueten las buenas prácticas de SRE como productos, no como consultoría.
- Para los equipos de plataforma y SRE, esto significa poder **incorporar fault injection a los pipelines de CI/CD** y a los runbooks de on-call como una práctica rutinaria, no un proyecto especial.

El contexto más amplio: la resiliencia está dejando de ser un nice-to-have y pasando a ser un requerimiento de negocio. Con las cargas de IA y los agentes multiplicando las superficies de falla, probar el comportamiento degradado se vuelve tan crítico como el happy path. Google lo está poniendo a un click.

**Fuente:** Google Cloud Blog (anuncio de Toby Owen, agosto 2026).
