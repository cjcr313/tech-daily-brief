---
title: "Las vulnerabilidades 'Confused Deputy' siguen siendo un dolor de cabeza en GCP y Azure"
author: Carlos
pubDatetime: 2026-07-28T16:00:00Z
slug: confused-deputy-flaws-gcp-azure-blackhat
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "Investigadores revelarán en Black Hat USA 2026 cómo romper cadenas de identidad administrada en las nubes de Microsoft y Google."
---

Parecía un tema superado, pero el patrón de diseño sigue pasándole factura a los hyperscalers. Investigadores de seguridad acaban de advertir (vía DarkReading) que las vulnerabilidades del tipo **"Confused Deputy" (CWE-114)** siguen presentes y vivitas en **Google Cloud Platform (GCP)** y **Microsoft Azure**.

Para los que no cachan el término, un *confused deputy* ocurre cuando una entidad con bajos privilegios logra engañar a un servicio con altos privilegios para que ejecute acciones maliciosas en su nombre.

La próxima semana en la conferencia **Black Hat USA 2026**, se presentará la charla *"Trust No Deputy: Breaking Azure and GCP Through Managed Identity Chains"*. Según el investigador a cargo, el problema no son bugs aislados, sino que la forma en que los ingenieros de nube están implementando el **"cookie-cutter approach"** (copiar y pegar arquitecturas de permisos) para las cadenas de identidades administradas.

Ojo con esto los arquitectos cloud: revisar las políticas de IAM y los permisos cruzados entre servicios gestionados tiene que ser prioridad uno este trimestre, porque el vector de ataque está agarrando fuerza de nuevo.

*Fuente: DarkReading.*
