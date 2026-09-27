---
title: "Docker lanza Cloud Sandboxes para que los agentes de código corran en la nube sin que te importe el laptop"
author: Carlos
pubDatetime: 2026-09-27T03:00:00Z
slug: docker-cloud-sandboxes-agentes-ia
featured: false
draft: false
tags:
  - DevOps
  - Contenedores
  - IA
description: "Docker lleva sus Sandboxes basados en microVM a la nube: un comando para mover agentes de código entre tu laptop y infraestructura gestionada."
---

![Ilustración de un laptop conectado a una nube de contenedores microVM, representando el salto de los agentes de código a la nube](../../assets/images/2026-09-27-docker-cloud-sandboxes-agentes-ia.jpg)

Docker acaba de resolver uno de los problemas más incómodos del boom de los agentes de código: **dónde corren cuando el trabajo dura horas en vez de minutos**.

A inicios de año lanzaron [Docker Sandboxes](https://www.docker.com/blog/introducing-cloud-sandboxes-start-on-your-laptop-finish-in-the-cloud/), entornos de microVM con su propio kernel y daemon de Docker para que los agentes de coding trabajaran de forma aislada y segura. El tema es que ese aislamiento corría local. Y un laptop no está hecho para eso: se duerme cuando cierras la tapa, se pone lento con batería y se desconecta cuando te mueves.

Ahora llegan los **Cloud Sandboxes**: el mismo modelo de sandbox basado en microVM, pero ejecutándose en infraestructura gestionada por Docker, con un solo comando para moverte entre local y nube.

La promesa concreta: levantar una docena de agentes en paralelo, cada uno por cinco, diez o 21 horas, sin tener que estar mirando ninguno. Arrancas la tarea en tu máquina, la mandas a la nube cuando pide más recursos, o la dejas corriendo antes de irte pa' la casa.

### Por qué importa

Los agentes pasaron de ráfagas cortas a trabajos de largo aliento (un refactor grande, una migración de dependencias, una suite de tests de una hora). La pregunta ya no es si el modelo puede sostener la tarea, sino **dónde pasan esas horas**.

Cloud Sandboxes usa el mismo aislamiento que la versión local y se maneja con el mismo CLI, así que mover un sandbox entre el laptop y la nube es transparente. El caso de uso estrella es paralelizar: cada tarea en su propio sandbox aislado, sin pelearse por recursos.

Para equipos que ya dejaron que los agentes tocaran el código, esto es básicamente la pieza que faltaba: infraestructura de ejecución persistente y escalable que no depende de que tu máquina siga prendida.
