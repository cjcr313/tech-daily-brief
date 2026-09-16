---
title: "CoreWeave conecta cientos de GPUs NVIDIA Rubin en un solo clúster multi-rack"
author: Carlos
pubDatetime: 2026-09-16T14:30:00Z
slug: coreweave-vera-rubin-nvl72-multi-rack
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Infraestructura
description: "El neocloud asegura ser el primero en validar y levantar racks Vera Rubin NVL72 como servicio, uniendo cientos de aceleradores en un clúster scale-out pensado para cargas de IA agéntica."
---

![Ilustración editorial de un centro de datos con racks de GPUs NVIDIA interconectados por redes ópticas de alta velocidad, cientos de aceleradores como nodos luminosos, tonos verde esmeralda y azul profundo sobre fondo oscuro, estilo vectorial plano minimalista](../../assets/images/2026-09-16-coreweave-vera-rubin-nvl72-multi-rack.jpg)

La carrera por el silicio se está corriendo también en el cableado. **CoreWeave** anunció este martes el *bring-up* de racks **NVIDIA Vera Rubin NVL72** en su cloud, uniendo **cientos de GPUs Rubin** en un solo clúster *scale-out* pensado para cargas de IA agéntica. La compañía asegura ser el **primer proveedor de AI cloud en validar y levantar un Vera Rubin NVL72** como servicio confiable.

## La arquitectura, en números

Un solo rack NVL72 empareja **72 GPUs Rubin con 36 CPUs Vera**, más NVIDIA **NVLink 6**, **ConnectX-9 SuperNICs** y **BlueField-4 DPUs**. Con la versión multi-rack, CoreWeave unifica varios racks de cientos de aceleradores usando networking **Spectrum-X Ethernet** en un único clúster escalable.

Del lado de red, cada GPU lleva **dos ConnectX-9 SuperNICs**, lo que da **1.6 Tb/s de conectividad scale-out por GPU** sobre caminos multi-plano y multi-rail. La topología soporta alrededor de **128.000 GPUs por rail** en un fabric sin bloqueo, y permite agregar racks sin rediseñar la red en cada expansión.

## Por qué le importa a la IA agéntica

El argumento de CoreWeave es que entrenar e inferir sobre cientos de Rubins es clave para **workloads agénticos de múltiples pasos**, que son muy sensibles a la latencia de acceso a datos: los retrasos se van acumulando entre llamadas al modelo y uso de herramientas. En paralelo, la compañía sumó dos capacidades a su **AI Object Storage**: aceleración de escritura cross-region y un nuevo **tier Archive**, acercando los datos a los workloads.

La jugada de fondo: mientras los hyperscalers pelean por el suministro de silicio, los neoclouds como CoreWeave se están diferenciando en **qué tan rápido pueden convertir racks enteros en un servicio usable**. Y en eso, ser el primero en validar Vera Rubin NVL72 es una señal concreta.

**Fuentes:** [CoreWeave](https://coreweave.com/news/coreweave-brings-up-multi-rack-nvidia-vera-rubin-nvl72-cluster), [Unite.AI](https://www.unite.ai/coreweave-connects-hundreds-of-rubin-gpus-in-one-multi-rack-cluster/)
