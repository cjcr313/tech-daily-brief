---
title: "ClusterMAX 3.0: SemiAnalysis califica a los clouds de GPU y Azure se cae del podio"
author: Carlos
pubDatetime: 2026-10-05T09:10:00Z
slug: clustermax-30-ranking-gpu-clouds
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "La nueva edición del rating de neoclouds de SemiAnalysis revisó 77 proveedores: Nebius acompaña a CoreWeave en el Platinum, Google Cloud sube al Gold junto a Oracle, y Azure baja a Silver. Solo 19 neoclouds en el mundo consiguen medalla."
---

![Ilustración editorial de un podio de medallas frente a hileras de racks de servidores GPU con LEDs encendidos, medallas de oro plata y bronce flotando, paleta azul profundo dorado y gris acero, estilo ilustración editorial profesional sin texto](../../assets/images/2026-10-05-clustermax-30-ranking-gpu-clouds.jpg)

Si estás decidiendo dónde alquilar GPUs este trimestre, hay lectura obligada: **SemiAnalysis publicó ClusterMAX 3.0**, la tercera edición de su sistema de rating para *neoclouds* y clouds de GPU, y esta vez el mercado tembló más que de costumbre.

El estudio pasó por el filtro a **77 proveedores en profundidad** (el mercado rastreado ya suma 323, contra 209 de la versión 2.0), con más de 200 entrevistas a usuarios finales. Se evalúa de todo: compute, networking, storage, orquestación, UI, monitoreo, soporte. El resultado es un informe de más de 30.000 palabras que básicamente separa a los que saben operar GPUs de los que solo saben levantar capital.

## El podio, con sorpresas

- **Platinum:** **Nebius acompaña a CoreWeave**. CoreWeave sigue fijando la vara técnica, pero Nebius ya se consolidó como proveedor premium que logra cobrar de más — y que los clientes igual pagan. Negocios bien hechos.
- **Gold:** **Google Cloud se une a Oracle**. El hyperscaler que decidió tomarse en serio el tema GPU sube de tier.
- **La caída del día: Azure baja a Silver**, junto a Lambda, Firmus y TensorWave. GMI sube de Bronze a Silver.
- **Fluidstack cae directo a "Unavailable"** y **Crusoe baja a Bronze**. Malas noticias para dos nombres que el año pasado sonaban mucho.

## El detalle incómodo

La vara subió tanto que **solo 19 neoclouds en el mundo logran rating Medallion**. Y SemiAnalysis estrenó un tier nuevo entre Bronze y Underperforming: la **"Participation Ribbon"** (cinta de participación, literal), donde caen 15 proveedores que hacen "lo mínimo indispensable para salir del paso". Traducción: pagan la inscripción, muestran el certificado.

El contexto de seguridad no es menor: el propio reporte salió con un teaser sobre las **prácticas de seguridad laxas de varios neoclouds**, al punto que Ilya Sutskever salió en septiembre con un PSA público pidiéndoles fortalecer la ciberseguridad ("la próxima vez que unos agentes se descontrolen, intentarán tomar un neocloud para correr más copias").

## ¿Por qué importa?

Porque la factura de GPUs es hoy uno de los ítems más caros de cualquier stack de IA, y la diferencia entre un Platinum y una cinta de participación es literalmente tu disponibilidad de entrenamiento. Los criterios completos están públicos en clustermax.ai, así que no hay excusa para contratar a ciegas: revisa el tier antes de firmar el próximo cluster.

**Fuentes:** SemiAnalysis ClusterMAX 3.0, clustermax.ai.
