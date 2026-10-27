---
title: "Kubernetes quiere certificar tus apps, no solo tu cluster: nace el Workload Conformance Working Group"
author: Carlos
pubDatetime: 2026-10-27T21:05:00Z
slug: kubernetes-workload-conformance-wg
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud Native
  - Arquitectura
description: "La comunidad Kubernetes anunció un working group que escribirá un estándar compartido de cómo deben comportarse los workloads en runtime: spec por versión, tests objetivos y tooling upstream. Meta: que dejar de revisar apps a mano antes de cada upgrade."
---

![Ilustración editorial tech isométrica de contenedores de trabajo de Kubernetes pasando en fila por un pórtico de validación con escudos y sellos de verificación brillantes que emiten luces verdes de aprobación, con el plano de control de Kubernetes vigilando al fondo, paleta azul con acentos verdes y naranjas, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-27-kubernetes-workload-conformance-wg.jpg)

El blog de Kubernetes anunció hoy la creación del **Workload Conformance Working Group**, y la idea de fondo es bastante potente: hoy existe [Certified Kubernetes](https://www.cncf.io/training/certification/software-conformance/) para certificar que tu *cluster* cumple las reglas, y Kubernetes AI Conformance para medir si un cluster puede correr workloads de IA. Pero **nadie certifica los workloads mismos**. El resultado: cada operador de cluster termina revisando cada aplicación a mano antes de un upgrade o mantención rutinaria, y cada mantenedor de app responde las mismas preguntas una y otra vez en cada ambiente donde corre.

## El problema que todos conocemos

Los síntomas son de manual: haces un `kubectl drain` de rutina y descubres que la app no tolera disruptción alguna. Un upgrade rompe una app que seguía usando una versión de API ya removida. Workloads que piden privilegios que no necesitan o reservan recursos que jamás usan. Kubernetes ya documenta todo esto (seguridad, manejo de disruptions), pero la evaluación sigue siendo artesanal y repetida en cada entorno.

## Qué va a entregar el WG

El [charter](https://github.com/kubernetes/community/blob/main/wg-workload-conformance/charter.md) define tres entregables:

- Una **especificación de comportamiento de workloads** para cada versión menor de Kubernetes.
- Un **método de testeo** para cada requisito contra un workload corriendo.
- **Tooling de conformance upstream** que implemente esos tests.

El alcance cubre seguridad, resiliencia ante disruptions, uso de recursos, networking, storage, uso de APIs y observabilidad. Lo que queda explícitamente afuera: la lógica de la aplicación (el spec dice *cómo* corre un workload, no *qué* hace), re-testear lo que ya cubre Certified Kubernetes, o amarrarse a un formato de empaquetado o herramienta de vendor.

Una regla ya está escrita en piedra: **cada requisito necesita un test objetivo que un binario pueda ejecutar**. Nada de criterios subjetivos en la spec.

## Cómo se organiza

Dos SIGs patrocinan el grupo: **SIG Architecture** será dueño de la spec y el tooling (vía un subproyecto que se creará cuando haya primeros artefactos), y **SIG Apps** aporta la perspectiva de aplicación. Cuando un requisito toque el territorio de otro SIG —nodos, networking— el WG abre la conversación con ese SIG.

El plazo que se pusieron: **spec inicial estable con tests funcionando dentro de dos a tres ciclos de release de Kubernetes**. O sea, realista y sin apuro falso.

## Cómo participar

El grupo se reúne cada dos miércoles a las 15:00 UTC, con canal [#wg-workload-conformance](https://kubernetes.slack.com/messages/wg-workload-conformance) en el Slack de Kubernetes y [mailing list](https://groups.google.com/a/kubernetes.io/g/wg-workload-conformance) propia. Están buscando especialmente: ejemplos reales de "qué se rompió en tu último upgrade", reviewers de requisitos, gente que escriba tests, y early testers que corran el binario contra sus propios workloads.

## El takeaway

Esto apunta a cerrar una brecha que existe desde el día uno: certificamos hasta el último tornillo del cluster, pero la app que corre encima era territorio salvaje. Si la spec llega a buen puerto, "¿esta app está lista para el upgrade?" deja de ser una conversación de semanas y pasa a ser un comando. Para equipos de plataforma que mantienen decenas de equipos clientes, esto es directamente comida.

Fuente: [kubernetes.io/blog](https://kubernetes.io/blog/2026/10/27/announcing-workload-conformance-wg/)
