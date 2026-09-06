---
title: "Aranya levanta US$11M para desplegar clústeres GPU bare-metal en 48 horas usando clusterdOS (Kubernetes)"
author: Carlos
pubDatetime: 2026-09-06T21:00:00Z
slug: aranya-11m-clusterdos-gpu-kubernetes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - Infraestructura
description: "La startup de infraestructura IA Aranaya recaudó US$11M en seed (First Round Capital) para automatizar el paso de servidores bare-metal a clústeres GPU productivos en menos de 48 horas con clusterdOS."
---

![Ilustración editorial de racks de servidores bare-metal transformándose en un clúster GPU, con planos de Kubernetes superpuestos, estilo tech editorial](../../assets/images/2026-09-06-aranya-11m-clusterdos-gpu-kubernetes.jpg)

Hay una nueva apuesta en la carrera por bajar la fricción de la infraestructura de IA. **Aranya**, startup estadounidense, cerró una ronda seed de **US$11 millones liderada por First Round Capital** para automatizar el despliegue de servidores bare-metal en clústeres GPU listos para producción **en menos de 48 horas**.

## Qué hace distinto

El producto central de Aranya es **clusterdOS**, un motor open-source construido sobre **Kubernetes** que despliega y mantiene infraestructura GPU mediante **archivos de configuración declarativos**. La idea: tratar un rack de servidores desnudos como si fuera un clúster que "se describe" en YAML, no que se configura a mano, servicio por servicio.

Según los números que suelta la empresa, ya administra **más de US$500 millones en hardware** para clientes de inferencia líderes del sector.

## Por qué importa

El cuello de botella de la IA ya no es (solo) conseguir GPUs: es **ponerlas a trabajar**. Provisionar bare-metal, configurar red, drivers, schedulers de Kubernetes, almacenamiento y observabilidad para un clúster de entrenamiento o inferencia puede tomar semanas. Aranya apuesta a colapsar ese tiempo con un flujo declarativo, el mismo patrón que hizo ganar a Terraform en su momento, pero enfocado al mundo GPU.

Se suma a una ola de herramientas que están atacando el mismo problema —nombres como Crusoe, Nscale o CoreWeave ya mueven Kubernetes y Slurm como commodity—, lo que confirma que el "control plane" de la infraestructura IA está migrando hacia Kubernetes de forma acelerada.

**Fuentes:** SiliconANGLE, Pomegra.
