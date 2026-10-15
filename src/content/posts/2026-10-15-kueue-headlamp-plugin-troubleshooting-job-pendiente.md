---
title: "¿Por qué tu Job de Kubernetes sigue pendiente? El nuevo plugin de Kueue para Headlamp deja el kubectl de lado"
author: Carlos
pubDatetime: 2026-10-15T09:20:00Z
slug: kueue-headlamp-plugin-troubleshooting-job-pendiente
featured: false
draft: false
tags:
  - Kubernetes
  - Observabilidad
description: "El plugin Kueue 0.1.0-alpha para Headlamp agrega vistas de solo lectura para Workloads, ClusterQueues, LocalQueues, ResourceFlavors y Cohorts: depurar por qué un Job batch no parte sin reconstruir el path de admisión a puro YAML."
---

![Ilustración editorial isométrica de un panel de control de Kubernetes con un Job atrapado en una fila de espera representada como carriles luminosos que atraviesan colas y compuertas de cuota, un lente de inspección resaltando la sección bloqueada, paleta azul y ámbar sobre fondo oscuro, estilo ilustración tech editorial profesional, sin texto](../../assets/images/2026-10-15-kueue-headlamp-plugin-troubleshooting-job-pendiente.jpg)

Escenario conocido por cualquiera que opere workloads batch: lanzas un Job de Kubernetes, pasa un minuto, pasan dos, y nada. El Job sigue **suspendido**, no hay logs de aplicación y muchas veces ni siquiera existe un Pod que inspeccionar. Si tu cluster usa [Kueue](https://kueue.sigs.k8s.io/), esto puede ser completamente normal — y la pregunta correcta no es "¿por qué está pending el Pod?", sino **"¿Kueue ya admitió el Workload?"**.

Para responder eso sin vivir en la terminal, el blog de Kubernetes publicó esta semana la guía del **nuevo plugin de Kueue para Headlamp** (versión `0.1.0-alpha`), que trae la investigación de admisión directo a la UI.

## Qué trae el plugin

El release alpha agrega **vistas de solo lectura** para los recursos de Kueue `v1beta2`: **Cohorts, ClusterQueues, LocalQueues, ResourceFlavors y Workloads**. No suma workflows de crear, editar, detener o reanudar — para eso sigue el YAML y las acciones estándar de Headlamp, según tus permisos.

## Admisión vs. scheduling: dos preguntas distintas

La clave conceptual (y donde varios se enredan):

- **Admisión de Kueue**: ¿este Workload puede partir ahora, considerando política de colas, cuota, ResourceFlavors, admission checks y los demás Workloads esperando?
- **Scheduling de Pods**: una vez admitido el Workload y resumido el Job, ¿en qué nodos corren los Pods?

Si el Workload **no fue admitido**, te quedas en la sección Kueue de Headlamp. Si fue admitido pero los Pods siguen `Pending`, te cambias a las vistas normales de Job y Pod a mirar eventos del scheduler. Esa frontera define todo el debugging.

## El flujo de troubleshooting, paso a paso

1. **Kueue → Workloads**: ubica el Workload del Job (el nombre normalmente contiene el del Job). La lista ya muestra LocalQueue, prioridad, estado activo/admitido y un status legible como `Admitted`, `Finished` o `Inadmissible`.
2. **Condiciones, no YAML**: lo importante son `QuotaReserved` y `Admitted`. Un `QuotaReserved=False` con razón `Pending` trae el mensaje que explica qué frenó la reserva — por ejemplo, que el ClusterQueue no tiene cuota de CPU suficiente para asignar un ResourceFlavor. Ese mensaje es la primera respuesta real.
3. **Compara pedido vs. asignación**: los PodSets muestran el total que Kueue evalúa. Un Job con `parallelism: 3` y un CPU por Pod le pide **tres CPUs** a Kueue — mirar solo el template de un Pod subestima el pedido.
4. **Sigue el LocalQueue**: ¿el Job entró a la cola que esperabas y es el único esperando ahí? Si está inactiva o detenida, ahí está tu respuesta.
5. **Inspecciona el ClusterQueue**: compara contra cuota nominal por ResourceFlavor, reservas actuales, límites de borrowing, estrategia de cola, preemption y admission checks.
6. **ResourceFlavor y Cohort**: si el flavor no calza con lo que pide el Workload, la causa suele aparecer ahí.

## Por qué importa

- **Kueue se está volviendo el estándar de batch en Kubernetes** — acá mismo cubrimos cuando Netflix reemplazó su sistema batch interno por Kueue. Entre jobs de IA/GPU y workloads científicos, la cola de admisión dejó de ser exótica.
- **El debugging de admisión era hostil**: exigía encadenar `kubectl get` de varios recursos y parsear YAMLs gigantes. Tener el camino Workload → LocalQueue → ClusterQueue → ResourceFlavor como links clicables baja la barrera de entrada bastante.
- **Es alpha, ojo**: solo lectura, owner references aún no clickeables, y `v1beta2` únicamente. Pero como primera iteración, marca el camino para que Kueue tenga una historia de UI de primera clase.

Si tu equipo corre batch o entrena modelos en Kubernetes, este plugin + Headlamp merecen un lugar en el bookmark de troubleshooting.

**Fuentes:** [Kubernetes Blog – Tracing Kueue Admission with Headlamp](https://kubernetes.io/blog/2026/10/14/tracing-kueue-admission-with-headlamp/), [Plugin Kueue para Headlamp (GitHub)](https://github.com/headlamp-k8s/plugins/tree/main/kueue)
