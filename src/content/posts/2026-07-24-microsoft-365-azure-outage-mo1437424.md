---
title: "Microsoft se tira solo: outage masivo tumba Teams, SharePoint, Azure y Copilot por update de red"
author: Carlos
pubDatetime: 2026-07-24T10:00:00Z
slug: microsoft-365-azure-outage-mo1437424
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "Un update de networking de Microsoft derribó Teams, SharePoint, Outlook, OneDrive, Copilot y múltiples servicios de Azure por horas. Incidente MO1437424."
---

![Microsoft se tira solo: outage masivo tumba Teams, SharePoint, Azure y Copilot por update de red](../../assets/images/2026-07-24-microsoft-365-azure-outage-mo1437424.jpg)


Microsoft confirmó un outage masivo este miércoles 23 de julio que afectó a una cantidad brutal de servicios: **Teams, Outlook, SharePoint Online, OneDrive, Microsoft 365 Admin Center, Power Automate, Copilot Chat y Microsoft Loop**, además de servicios enteros de Azure incluyendo **AKS, Azure Firewall, ExpressRoute, API Management, Application Gateway, Azure AD B2C, Azure AI Search, Azure Database for PostgreSQL, Azure Databricks y VPN Gateway**, entre otros.

## Qué pasó

El corte comenzó a las **10:44 AM ET** (14:44 UTC) y afectó principalmente a usuarios en Norteamérica que accedían a través de ciertas rutas de red. Downdetector registró más de **2.400 reportes** en el peak, con SharePoint concentrando el 78% de las quejas.

Microsoft rastreó el problema hasta una **actualización de networking** que causó anomalías de enrutamiento de tráfico. El primer intento de mitigación falló — la empresa tuvo que pedir a los clientes que **revisaran sus planes de continuidad de negocio y recuperación de desastres**. O sea, "tentempié, no sabemos cuándo vuelve".

## Resolución

Finalmente, tras varias horas de impacto, Microsoft **revirtió el update de red** y confirmó la recuperación completa a las **9:55 PM ET** del miércoles:

> *"We've completed reverting the networking update and confirmed through service telemetry and customer reports that this issue is resolved."*

El incidente quedó registrado como **MO1437424** en el Microsoft 365 Admin Center.

## El impacto real

Esto no es "se cayó el Teams un rato". La lista de servicios de Azure impactados incluye cosas críticas como:
- **Azure Kubernetes Service (AKS)** — clusters posiblemente sin gestión
- **Azure Firewall** — reglas de red potencialmente inconsistentes
- **ExpressRoute** — conectividad híbrida empresa-cloud interrumpida
- **Azure AD B2C** — logins de clientes afectados
- **Azure AI Search** — búsquedas en aplicaciones down
- **Power BI Embedded** — dashboards inaccesibles

Para cualquier empresa con workloads 100% Azure, esto es un recordatorio brutal de que **la nube también se cae**, y que un solo update de red puede llevarse puesto todo el stack de servicios.

## Lecciones

1. **Multicloud o al menos multi-region** deja de ser lujo y pasa a ser necesidad operacional
2. **DR plans** no son un trámite de compliance — hay que tenerlos a mano y sabiendo cómo ejecutarlos
3. Un solo proveedor con tantas dependencias cruzadas (Azure → AKS → Firewall → ExpressRoute) crea **blast radius enormes**

Microsoft aún no ha publicado un post-mortem detallado. Cuando lo haga, va a ser lectura obligada para cualquier equipo de infraestructura.

*Fuentes: BleepingComputer, Downdetector, Microsoft Azure Status, Yahoo Tech, Windows Report*
