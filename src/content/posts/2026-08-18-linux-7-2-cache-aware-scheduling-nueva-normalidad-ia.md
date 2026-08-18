---
title: "Linux 7.2 llega estable: cache-aware scheduling, exFAT 87% más rápido y el 'nuevo normal' de la IA según Torvalds"
author: Carlos
pubDatetime: 2026-08-18T10:30:00Z
slug: linux-7-2-cache-aware-scheduling-nueva-normalidad-ia
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "El kernel 7.2 ya está disponible: scheduler que agrupa tareas por caché L3, Btrfs con large folios por defecto, exFAT hasta 87% más rápido y un Torvalds resignado al tsunami de fixes generados por herramientas de IA."
---

![Ilustración del kernel Linux 7.2 con un scheduler consciente de caché y flujos de datos optimizados](../../assets/images/2026-08-18-linux-7-2-cache-aware-scheduling-nueva-normalidad-ia.jpg)

Linus Torvalds liberó **Linux 7.2 como estable** este fin de semana, a tiempo pese a un ciclo de desarrollo movidito. Y cuando digo movidito, me refiero a que el propio Linus tuvo que aceptar que los releases "enormes" son ahora el estándar: la última semana del ciclo volvió a ser más grande de lo que le habría gustado, pero como él mismo escribió, "con todo esto del 'nuevo normal', si retrasara los releases por esa razón, probablemente nunca tendríamos un release".

## ¿De dónde viene tanto fix?

La respuesta corta: **IA por todos lados**. Torvalds viene advirtiendo hace meses que el flood de reportes generados por herramientas de IA hizo la lista de seguridad del kernel "casi imposible de manejar", con duplicación brutal porque distintas personas encuentran las mismas cosas con las mismas herramientas. La postura actual: los bugs detectados por IA no son secretos por definición, así que fuera de listas privadas.

Ojo que no es "IA escribiendo el kernel": la mayoría son parches a vulnerabilidades descubiertas por IA, no features nuevas. Según análisis del release, cerca del **5% de los commits llevan un tag "assisted-by"** marcando que una herramienta de IA participó en encontrar o preparar el cambio. El mensaje de Linus sigue siendo el mismo: úsenlas, pero si son productivas, no para generar trabajo ficticio.

## Cache Aware Scheduling: la estrella del release

La novedad técnica principal lleva años en desarrollo. Hasta ahora, el scheduler balanceaba carga entre núcleos sin importar si los threads compartían memoria: resultado, *cache bouncing* — threads en cores distintos re-fetchen los mismos datos una y otra vez.

El nuevo enfoque **agrupa tareas que comparten datos en el mismo dominio de caché LLC (L3)**, reduciendo misses y mejorando la eficiencia de acceso a datos. Incluye guardrails: no mueve más threads si un proceso ya consume más del 25% del CPU o más de un tercio de la carga de un dominio. Los más beneficiados: servidores multithread, workloads de IA/ML y algunos juegos.

## I/O y filesystem: donde está la carne para ops

- **Btrfs large folios habilitados por defecto**: salieron de experimental. Mejora de ~15% en escrituras secuenciales, con folios experimentales de hasta 2 MB en camino.
- **exFAT migrado a iomap**: lectura/escritura hasta **87% más rápida** en SD y pendrives. Si corres distro desde USB, esto se va a notar.
- Continúa la conversión a iomap en **ext4 y XFS**, y mejoras de NTFS.

## Hardware y red

- Soporte inicial para correr Linux en **dispositivos Apple M3** 🍎
- AMDGPU con soporte inicial de **HDMI 2.1 Fixed Rate Link** (4K@120Hz y 8K sin compresión)
- **USB4STREAM** (Intel): streaming crudo host-a-host por USB4/Thunderbolt, sin pasar por la stack de red. Ideal para backups rápidos o compartir periféricos.
- **Wi-Fi Aware** (conexiones dispositivo-a-dispositivo sin infraestructura, tipo AirDrop con esteroides) y groundwork temprano de **Wi-Fi 8**.
- Un rollback importante: el scheduler de GPU "más justo" generó regresión en configs AMD, así que 7.2 vuelve a FIFO.

## ¿Cuándo lo ves?

Lo verás en las distros de primavera/otoño — **Ubuntu 26.10** y similares. Para producción, la recomendación de siempre: espera el paquete de tu distro y la validación del vendor. Arch, Fedora Rawhide, Tumbleweed y Gentoo llegan primero, como es costumbre.

El resumen del espíritu del release lo resume el propio Linus: no está encantado con el tamaño, pero "es lo que es". El kernel más parcheado por IA de la historia ya está en kernel.org.
