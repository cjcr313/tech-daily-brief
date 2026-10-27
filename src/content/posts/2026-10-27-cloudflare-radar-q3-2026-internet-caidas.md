---
title: "Qué dejó internet fuera de línea en Q3 2026: electricidad, exámenes y desastres naturales"
author: Carlos
pubDatetime: 2026-10-27T21:06:00Z
slug: cloudflare-radar-q3-2026-internet-caidas
featured: false
draft: false
tags:
  - Observabilidad
  - Infraestructura
  - Cloud
description: "Cloudflare Radar registró 49 disrupciones de internet entre julio y septiembre: 19 apagones dirigidos por gobiernos (18 solo por exámenes en Irak), 14 cortes eléctricos en 10 países y 5 desastres naturales. El informe trimestral completo."
---

![Ilustración editorial tech de un mapa mundial estilizado en tonos azul oscuro donde nodos de red glowing en ámbar se apagan en varias regiones mientras ondas de desconexión se propagan por líneas de conexión, con rayos y tormentas sugeridas en los bordes, estilo ilustración tecnológica editorial profesional, sin texto](../../assets/images/2026-10-27-cloudflare-radar-q3-2026-internet-caidas.jpg)

Cloudflare publicó hoy su resumen trimestral de [Radar](https://radar.cloudflare.com/) sobre disrupciones de internet, y la lectura es clara: lo que más tumba internet no son ciberataques, sino **fallas en los sistemas físicos y políticos de los que depende**. Con más del 20% del tráfico web cruzando su red, Cloudflare tiene una vista privilegiada para detectar cuándo un país o proveedor se cae — y este Q3 registró **49 disrupciones** en total.

## Los números del trimestre

- **19 apagones dirigidos por gobiernos** (la causa más frecuente), de los cuales **18 fueron cortes por exámenes en Irak**. Sí: la mayor amenaza a la conectividad trimestral fue evitar copipeo en pruebas académicas.
- **14 cortes eléctricos** en 10 países: Cuba, Honduras, Ucrania, Eswatini, Botsuana, Tayikistán, Kenia, Santa Lucía, Georgia y Gabón.
- **5 desastres naturales** dañando infraestructura eléctrica y de telecomunicaciones.

## La electricidad sigue siendo el talón de Aquiles

El internet es distribuido y resiliente sobre el papel, pero **todo ese diseño colapsa sin electricidad**. Cuba tuvo cuatro apagones relevantes en el trimestre (al menos uno al mes), incluido un blackout de tres días del 18 al 20 de septiembre, con caídas de tráfico entre 18% y 59%.

El caso más aleccionador es **Honduras, 10 de septiembre**: una falla eléctrica en un punto de interconexión afectó a al menos 11 proveedores grandes y tiró el tráfico HTTP del país un **63% durante tres horas**. Lección de arquitectura clásica: los puntos de intercambio concentrados son *single points of failure* nacionales. Curiosamente, dos operadores (uno guatemalteco, otro celular) no se vieron afectados — su conectividad depende de infraestructura fuera del país.

En Ucrania, un corte en Sebastopol el 5 de julio dejó el tráfico en prácticamente cero (**-98%** por ocho horas), y el 12 de agosto ataques con drones a infraestructura energética provocaron otra caída del 95% por diez horas. Y ojo con este dato para los que administramos data centers: el 13 de agosto, **una falla del sistema de enfriamiento en un data center de Phoenix (EE.UU.)** dejó casi sin tráfico a Namecheap. Con densidades de cómputo subiendo por la IA, el cooling deja de ser detalle y pasa a ser riesgo de disponibilidad.

## Desastres naturales y conflictos

Guam recibió su segundo supertifún del año (Bavi, tras Sinlaku en Q2), dejando solo ~25% de los alimentadores eléctricos operativos en el peor momento. Y el conflicto renovado en la región de Tigray, Etiopía, mostró cómo la conectividad se convierte en rehén de crisis políticas y humanitarias. Hasta países con historial de resiliencia —EE.UU., Japón, Portugal— tuvieron caídas este trimestre. Nadie es inmune.

## El takeaway para el mundo devops/observabilidad

Dos cosas. Primero: tu disponibilidad depende de capas que no controlas — energía, clima, decisiones políticas — así que los SLOs que prometes a usuarios globales deberían modelar ese riesgo. Segundo: Radar es un ejemplo brutal de observabilidad a escala planetaria: detectar, anotar y reportar disrupciones por país, proveedor y causa. Si quieres el detalle completo, el [informe original](https://blog.cloudflare.com/q3-2026-internet-disruption-summary/) tiene país por país.

Fuente: [blog.cloudflare.com](https://blog.cloudflare.com/q3-2026-internet-disruption-summary/)
