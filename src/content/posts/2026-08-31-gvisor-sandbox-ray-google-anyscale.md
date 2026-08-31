---
title: "Google y Anyscale llevan sandboxing nativo con gVisor a los clústeres de Ray"
author: Carlos
pubDatetime: 2026-08-31T16:00:00Z
slug: gvisor-sandbox-ray-google-anyscale
featured: false
draft: false
tags:
  - Kubernetes
  - IA
description: "Una librería experimental integra sandboxing aislado con gVisor directamente en Ray, para ejecutar rollouts dinámicos y tool calls de agentes a escala."
---

![Ilustración editorial de sandboxes gVisor ejecutándose en un clúster Ray](../../assets/images/2026-08-31-gvisor-sandbox-ray-google-anyscale.jpg)

El ecosistema de reinforcement learning adoptó a **Ray** como runtime de cómputo para los flujos de post-training. Pero a medida que los modelos razonan y se vuelven agenticos, apareció un cuello de botella: orquestar **sandboxes seguros y aislados a escala** para ejecutar rollouts dinámicos, generación de código e interacciones multi-turn con herramientas.

La respuesta llega de la mano de **Google Cloud y Anyscale**: una librería experimental que integra sandboxing nativo de alto rendimiento directamente en los clústeres distribuidos de Ray, usando **gVisor** como capa de aislamiento.

### Sandboxes como primitivas de Ray

La decisión de diseño clave fue hacer que un sandbox se comporte como cualquier otro recurso que Ray ya maneja. En vez de inventar una abstracción aparte, cada sandbox se representa como un **Ray Actor**:

- El scheduler de Ray decide en qué nodo corre el sandbox y reserva CPU y memoria.
- El Actor administra el ciclo de vida del sandbox.
- gVisor provee el entorno de ejecución aislado.

Desde **Ray 2.58**, quienes escriben frameworks o hacen research pueden manejar entornos sandbox con las mismas APIs y patrones de Ray que usan para el resto. Creas un sandbox gVisor desde una imagen OCI y recibes un handle de Actor; las llamadas a `exec` son llamadas normales de Ray Actor, así que el sandbox puede vivir en cualquier parte del clúster.

### Qué cubre la API

La API de sandboxes abarca el ciclo de vida que necesitan las cargas agenticas: crear entornos desde imágenes OCI, fijar límites de CPU/memoria, configurar variables de entorno, networking y directorio de trabajo, ejecutar comandos, leer/escribir/subir/bajar archivos, inspeccionar el estado y terminar o borrar entornos.

### Por qué gVisor

Para cargas que ejecutan código generado por modelos —o llamadas a herramientas no confiables— el aislamiento deja de ser opcional. gVisor entrega un límite fuerte sin el overhead de una VM completa, justo lo que se necesita cuando el sandbox es parte del loop de entrenamiento o inferencia.

Frameworks como **veRL, NeMo-RL, SLIME, MILES y SkyRL** ya coordinan trainers, engines de inferencia y rollout workers con Ray. Con sandboxing nativo, ese mismo runtime puede ahora aislar la ejecución de código generado por agentes sin salir del modelo de programación que ya conocen.
