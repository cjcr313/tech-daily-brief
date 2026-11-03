---
title: "groundcover lanza Autonomous Infrastructure: rightsizing automático de Kubernetes usando tu propia telemetría"
author: Carlos
pubDatetime: 2026-11-03T21:10:00Z
slug: groundcover-autonomous-infrastructure-kubernetes-rightsizing
featured: false
draft: false
tags:
  - Kubernetes
  - Observabilidad
description: "La empresa israelí convirtió su adquisición Wand en una beta que ajusta automáticamente los requests de CPU y memoria en Kubernetes según el comportamiento real en producción. Sin instalar nada nuevo y con el nodo completo en la mirilla."
---

![Ilustración editorial tech de un clúster de contenedores Kubernetes siendo calibrado por brazos robóticos que ajustan medidores de recursos, con gráficos de uso flotando sobre nodos hexagonales, paleta azul y verde esmeralda, estilo ilustración tecnológica profesional, sin texto](../../assets/images/2026-11-03-groundcover-autonomous-infrastructure-kubernetes-rightsizing.jpg)

¿Cuántos requests de CPU y memoria en tu clúster son números que alguien puso "a ojo" antes del primer deploy y nadie volvió a tocar? Exacto. **groundcover** lanzó hoy en beta **Autonomous Infrastructure**, una funcionalidad que usa la telemetría que ya recolecta su sensor para **ajustar esos requests automáticamente según cómo se comporta cada workload en producción**.

## La jugada: observabilidad que termina en ahorro

La tecnología viene de **Wand Cloud**, la startup de optimización de Kubernetes que groundcover compró en septiembre. La lógica es simple y elegante: si tu sensor de observabilidad ya lleva meses registrando el uso real de cada pod, ¿por qué tendrías que instalar otra herramienta para hacer rightsizing? Los clientes en versión soportada **abren la funcionalidad y encuentran los datos ya listos**: requests de CPU y memoria vs. uso real, ahorro mensual estimado y un conteo de workloads subprovisionados.

El detalle pragmático: en la beta los dólares se calculan con precios que el cliente ingresa a mano. Precios reales de nube pública vienen después, y los datos de billing (como el Cost and Usage Report de AWS) más adelante aún.

## Lo que lo diferencia del rightsizing tradicional

La mayoría de las herramientas de optimización dimensionan cada workload en aislado, y ahí está el problema: un request que parece perfecto para un servicio puede **dejar sin recursos a sus vecinos en un nodo congestionado**. groundcover invierte la ecuación: antes de subir cualquier request, **verifica qué tan apretado está el nodo**, para que el ajuste de un workload no estrangule al resto. Estabilidad primero, ahorro segundo.

Además es explícitamente conservador en el rollout:

- **Opt-in total**: no cambia nada hasta que un ingeniero lo activa y elige deployments, namespaces o clusters específicos.
- En la beta **solo toca requests, no limits**.
- Cada política tiene **mínimos y máximos** de CPU y memoria.
- **Audit log** de quién asignó cada workload a qué política y cuándo.
- Recomendación oficial: empezar con namespaces de desarrollo y no meterle mano a una base de datos productiva que necesita espacio para crecer.

## Contexto de la casa

groundcover —que ya habíamos cubierto por su Serie C de US$100 millones liderada por One Peak— suma así otra capa a su guerra por el espacio de Datadog: no solo mirar los clusters, sino **actuar sobre ellos con la misma data**. La beta está disponible sin costo extra para todos los clientes con el sensor corriendo en Kubernetes, y habrá demos en **KubeCon + CloudNativeCon North America en Salt Lake City, del 9 al 12 de noviembre**.

La convergencia es clara: observabilidad y FinOps son cada vez menos cosas distintas. Quien tiene la data del comportamiento real está a un paso de automatizar la optimización — y groundcover acaba de dar ese paso.

**Fuentes:** [SiliconANGLE](https://siliconangle.com/2026/11/03/groundcover-turns-its-wand-acquisition-into-a-kubernetes-right-sizing-beta/) · [groundcover](https://www.groundcover.com/)
