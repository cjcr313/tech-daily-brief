---
title: "Drones dejan fuera dos data centers de Yandex en 48 horas: la zona ru-central1-b voló y Yandex Cloud quedó cojo"
author: Carlos
pubDatetime: 2026-10-09T15:15:00Z
slug: yandex-dos-data-centers-drones-48-horas
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "Ucrania golpeó dos data centers de Yandex en dos días: Sasovo (Ryazan) quedó fuera el 8 de octubre y hoy le tocó al de Kaluga, el más potente de Rusia con 63 MW de diseño. La zona de disponibilidad ru-central1-b de Yandex Cloud está completamente caída."
---

![Ilustración editorial isométrica de un gran data center con filas de racks de servidores y módulos de un edificio oscurecidos mientras otros siguen encendidos, cielo nocturno, paleta azul profundo con acentos naranjas de alerta, estilo ilustración tech editorial profesional, sin texto](../../assets/images/2026-10-09-yandex-dos-data-centers-drones-48-horas.jpg)

Cuando hablamos de fallas de zona de disponibilidad, soñamos con un router que se reinicia o un operador que borra la base de datos equivocada. Esta semana la realidad fue más brutal: **drones ucranianos dejaron fuera dos data centers de Yandex en menos de 48 horas**, y la infraestructura cloud de Rusia quedó coja frente a todos.

## Golpe 1: Sasovo, 8 de octubre

En la madrugada del 8 de octubre, drones atacaron el data center de Yandex en **Sasovo, región de Ryazan**, instalado en los terrenos de la planta de máquinas-herramienta Sasta. Se provocó un incendio y la operación quedó suspendida. Según Reuters, la propia empresa **no pudo confirmar si el equipo dañado puede recuperarse**.

Este sitio no era cualquier bodega: abierto en 2014, alberga **decenas de miles de servidores** y, más importante aún, **dos de los tres supercomputadores de Yandex**, los que usa para entrenar sus modelos de IA, incluido YandexGPT. El estado de esos supercomputadores sigue sin confirmarse.

## Golpe 2: Kaluga, 9 de octubre

Hoy le tocó al grande. El data center de **Kaluga** (parque industrial Grabtsevo), que la propia Yandex describió como **el más potente de Rusia**, sufrió un ataque que dejó **varios módulos completamente fuera de servicio**, según confirmó la empresa vía TASS. Los números de la bestia:

- Diseñado para **más de 3.800 racks** y **63 MW de capacidad total** (una vez y media el más potente de la época de su anuncio)
- Primera fase operativa desde diciembre de 2023; conectado a la red en octubre de 2024 con consumo máximo de **49 MW**
- Servía tanto a los servicios propios de Yandex como a **clientes de Yandex Cloud**

Los reportes preliminares no mencionan víctimas humanas, pero los especialistas siguen evaluando la magnitud del daño.

## El efecto colateral en la nube (la parte que nos importa)

En la [página de estado de Yandex Cloud](https://status.yandex.cloud/ru/incidents/2092), la zona **ru-central1-b —asociada al data center de Sasovo— aparece completamente caída**, con los clientes instados a mover sus workloads a otras zonas de disponibilidad. Encima, el incidente impuso **restricciones para crear nuevas VMs, clústeres de Kubernetes y bases de datos**. O sea: ni escapar es fácil.

El 8 de octubre los problemas se propagaron por el internet ruso: medios locales, Ferrocarriles Rusos, el portal inmobiliario Cian y Avito sufrieron caídas. Cian confirmó que se debía a un incidente en su proveedor de infraestructura. Spoiler: era Yandex.

Un detalle curioso de credibilidad geopolítica: el medio Verstka descubrió que Yandex **tenía borradas las imágenes satelitales de sus cuatro data centers cloud en Yandex Maps**. Ocultar los sitios no los hizo más resistentes.

## La lección para el que opera infraestructura

Más allá de la guerra, esto es un caso de estudio brutal de resiliencia:

- **Tu "zona de disponibilidad" es un lugar físico**, con coordenadas, red eléctrica y techo. El plan de DR debería considerar fallas de todo el espectro, incluidas las que parecen de película.
- **Multi-AZ no es opcional, y multi-región tampoco** si tu proveedor concentra demasiado. Yandex Cloud quedó con la capacidad de crear recursos restringida en plena crisis — el escenario exacto que un runbook de DR asume que nunca va a pasar.
- **La soberanía de datos tiene dos caras**: tener todo en infraestructura nacional puede ser un requerimiento regulatorio, pero también concentra el riesgo físico y geopolítico en un solo país.

Los equipos SRE del mundo ocupando nubes "normales" no enfrentan drones, pero el principio es el mismo: cuando tu RTO real depende de poder **crear** recursos en otra zona, y justo eso está restringido, tu RTO es infinito. Revisa tus supuestos antes de que te los revise la realidad.
