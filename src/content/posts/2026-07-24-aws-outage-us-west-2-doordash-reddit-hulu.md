---
title: "AWS US-West-2 se cae y se lleva medio internet consigo: DoorDash, Reddit, Hulu y Apple Pay entre los afectados"
author: Carlos
pubDatetime: 2026-07-24T18:00:00Z
slug: aws-outage-us-west-2-doordash-reddit-hulu
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "Un outage de AWS en Oregon derribó DoorDash, Reddit, Hulu, Apple Pay y decenas de servicios. Se resolvió en ~3 horas, pero el blast radius fue enorme."
---

![Placeholder](../../assets/images/placeholder.jpg)


Justo cuando estábamos digiriendo el outage masivo de Microsoft de ayer, hoy le tocó a AWS. **US-West-2** (Oregón) tuvo problemas de conectividad que tumbaron una cantidad impresionante de servicios.

## Qué pasó

Los problemas empezaron alrededor de las **6:40 AM ET** (10:40 UTC) de este viernes. AWS confirmó que estaba investigando problemas de conectividad afectando múltiples servicios en US-West-2.

Los afectados de alto perfil:
- **DoorDash** — delivery paralizado en hora punta
- **Reddit** — la plataforma entera inaccessible
- **Hulu** — streaming cortado
- **Apple Pay** — pagos fallando
- Decenas de sitios adicionales reportaron impactos

Downdetector registró spikes masivos de reportes. La prensa lo bautizó rápido: *"Half the internet goes down"*.

## Resolución

AWS confirmó que el problema fue resuelto poco después de las **9:00 AM ET** (13:00 UTC), unas **2.5 a 3 horas** de impacto total para los servicios afectados. La causa raíz aún no se ha comunicado oficialmente.

## El patrón que ya cansa

Esto viene **un día después** del outage masivo de Microsoft que tumbó Teams, Azure, Copilot y un catálogo interminable de servicios durante horas. Dos días seguidos, dos proveedores megacloud, dos outages masivos.

La lista de servicios caídos por el outage de Microsoft de ayer incluía AKS, Azure Firewall, ExpressRoute y Azure AD B2C. Hoy, un solo proveedor (AWS) se lleva puesto medio internet consumidor.

## Lecciones (que ya deberíamos saber)

1. **US-West-2 es un single point of failure gigante** — demasiados servicios corren 100% en una región. Multi-region no es opcional, es tabla de salvación
2. **La concentración del cloud en pocos hyperscalers crea blast radius sistémicos** — cuando AWS estornuda, medio internet se resfría
3. **DoorDash y Apple Pay cayendo al mismo tiempo** muestra cuánta dependencia hay de una sola región de un solo proveedor
4. Si tu servicio estuvo caído hoy y ayer también por Microsoft, **tu arquitectura tiene un problema de resiliencia**, no de mala suerte

## Estado actual

A esta hora, todos los servicios reportan recuperación. AWS aún no publica el post-mortem detallado. Cuando lo haga — igual que con el incidente MO1437424 de Microsoft — va a ser lectura obligada.

La pregunta incómoda: ¿cuántos outages masivos consecutivos se necesitan para que la industria tome en serio la distribucción real de workloads?

*Fuentes: Daily Mail, Downdetector, Charisma Magazine, Global Community Weekly*
