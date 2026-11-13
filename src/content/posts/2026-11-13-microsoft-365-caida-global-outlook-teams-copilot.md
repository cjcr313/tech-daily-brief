---
title: "Microsoft lleva más de 18 horas con Outlook, Teams y Copilot caídos"
author: Carlos
pubDatetime: 2026-11-13T13:15:00Z
slug: microsoft-365-caida-global-outlook-teams-copilot
featured: false
draft: false
tags:
  - Cloud
  - Observabilidad
description: "Caída global de Microsoft 365 en su segundo día: Outlook, Exchange, calendarios y Copilot afectados, millones de usuarios impacto y la acción de MSFT bajando 2%."
---

![Ilustración editorial de un mapa mundial con nodos de red desconectados y luces de estado rojas en un panel de monitoreo](../../assets/images/microsoft-365-caida-global-outlook-teams-copilot.jpg)

La semana del cloud no podía cerrar sin sobresalto: **Microsoft atraviesa una caída global** que partió cerca de las 18:00 GMT del jueves 12 de noviembre y que ya supera las 18 horas, extendiéndose por su segundo día. El impacto principal está en **Outlook y Exchange** — correos que no cargan ni se envían —, pero los calendarios, OneDrive, SharePoint y **Copilot** también quedaron en el camino. DownDetector llegó a registrar **más de 139.500 reportes de usuarios**, y en Europa se habla de millones de afectados.

## Lo que sí funciona (y lo que no)

Según los reportes, la mensajería y las reuniones de Teams se mantuvieron en gran parte operativas. El problema es todo lo que depende de Exchange: calendarios que no muestran detalles, archivos que no cargan, y un **Copilot que ni responde ni puede acceder a los datos** (correos, archivos, agendas) de los que normalmente se alimenta. Traducción: el asistente de IA quedó ciego.

## El impacto en bolsillo y reputación

La acción de Microsoft cayó cerca de un **2% antes de la apertura** del viernes, mientras la empresa competía contra el reloj para restaurar servicios. En su actualización más reciente, Microsoft habló de "progresos alentadores de recuperación", admitiendo que el estado del servicio sigue **variable y sin volver a la línea base**. La causa raíz, por ahora, no ha sido detallada públicamente.

## La lectura para el equipo de plataforma

Más allá del schadenfreude, la caída deja un par de reflexiones conocidas pero que conviene repetir:

- **Dependencia transitiva**: cuando Exchange cae, no cae "solo el email". Caen calendarios, meetings agendados, archivos y hasta el asistente de IA corporativo. La topología de dependencias interna de un cloud es invisible hasta que se rompe.
- **Status pages vs. realidad**: durante horas las funciones "parcialmente operativas" coexistieron con usuarios completamente fuera de servicio. La granularidad del status reporting sigue siendo un punto débil clásico.
- **Concentración de proveedor**: para las empresas que tienen toda su operación en un solo tenant de Microsoft, hoy no había plan B que valiera. Otro argumento para SLOs propios y arquitecturas que toleren la caída del proveedor.

Microsoft ha ido recuperando servicios de forma incremental durante la mañana del viernes. Veremos si el post-mortem llega con la transparencia de las caídas anteriores o si quedamos solo con el "cambiamos una configuración" de siempre.

**Fuentes:** [The Guardian](https://www.theguardian.com/technology/live/2026/nov/13/microsoft-outage-down-today-live-update-outlook-teams-365-when-fixed-latest-status-cause-news), [PCMag](https://www.pcmag.com/news/major-microsoft-outage-takes-down-outlook-teams-copilot-more), [CNN](https://www.cnn.com/2026/11/12/business/live-news/microsoft-global-outage-intl-hnk), [UC Today](https://uctoday.com/microsoft-365-outage-outlook-exchange-teams-copilot)
