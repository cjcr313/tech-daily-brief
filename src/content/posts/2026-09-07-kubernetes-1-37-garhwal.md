---
title: "Kubernetes 1.37 'Garhwal': KYAML estable, HPA escala a cero y DRA llega a GA"
author: Carlos
pubDatetime: 2026-09-07T09:00:00Z
slug: kubernetes-1-37-garhwal
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud Native
  - DevOps
description: "Kubernetes 1.37 'Garhwal' trae 67 mejoras: KYAML se vuelve estable, la API de métricas alcanza Stable tras 9 años, el HPA aprende a escalar a cero y DRA llega a GA."
---

![Ilustración editorial de un valle montañoso del Himalaya con terrazas que suben hacia picos nevados, recorrido por un río de contenedores Kubernetes, estilo tech editorial](../../assets/images/2026-09-07-kubernetes-1-37-garhwal.jpg)

Llegó la release más esperada del ecosistema cloud native de este ciclo. **Kubernetes 1.37, con nombre en clave "Garhwal"** (la región del Himalaya en Uttarakhand, India), ya está disponible. El release team promete una entrega más de evolución que de revolución: **67 enhancements**, de los cuales **16 pasan a Stable, 23 a Beta, 27 entran en Alpha y 1 es deprecación**.

## KYAML, la estrella de esta versión

Lo más comentado es **KYAML**, que se gradúa a **Stable**. Se trata de un subconjunto más estricto de YAML pensado para configuraciones de Kubernetes, que elimina ambigüedades de formato manteniéndose compatible con YAML normal. Ahora `kubectl get -o kyaml` también es estable, lo que facilita pipelines y tooling que necesiten salida predecible.

## La API de métricas, estable después de 9 años

Tras casi una década, **`metrics.k8s.io` alcanza el estado Stable**. Es la API que entrega uso de CPU y memoria de pods y nodos —la misma que alimenta al `HorizontalPodAutoscaler` y al clásico `kubectl top`—. Que por fin sea estable da un respiro a quienes construyen encima de métricas.

## HPA hasta cero réplicas

En autoscaling también hay avance concreto: el **HPA ahora puede escalar hasta cero réplicas** usando métricas de objetos o externas (en **Beta**, habilitado por defecto). Aplicaciones inactivas pueden apagarse por completo, lo que pega directo en la billetera de quien paga por recursos que nadie usa.

## DRA en GA y gang scheduling para IA

**Dynamic Resource Allocation (DRA)** gradúa su soporte de *Extended Resources* a **GA**, hito que el equipo venía persiguiendo por tres releases. Y para cargas intensivas llega el **gang scheduling**: un grupo de pods relacionados no arranca hasta que hay recursos para el grupo completo —pensado para IA, ML y HPC—.

## Seguridad y control plane

- **Pod Certificates** y **ClusterTrustBundles** llegan a Stable: mecanismos nativos de certificados y confianza.
- **StorageVersionMigration API** alcanza GA y queda habilitado por defecto.
- **KubeletInUserNamespace** (modo *rootless*) sube a Beta: kubelet, runtimes, CNI y kube-proxy pueden correr sin root.
- **etcd RangeStream** (Beta) recorta el uso de memoria en lecturas de colecciones grandes.
- **Prometheus Native Histograms** entra en Beta, y las mejoras de volúmenes SELinux quedan activas por defecto.

## A barrer los viejos

Como siempre, hay que mirar las deprecaciones: **kube-dns queda oficialmente obsoleto** (a migrar a CoreDNS), el **modo IPVS de kube-proxy** va camino a la salida, y se insiste en migrar a **cgroup v2** antes de que cgroup v1 desaparezca definitivamente.

**Fuentes:** Kubernetes Blog (anuncio oficial y posts de features), Linuxiac, fosstopia.

### Update: 2026-09-16 — Memory QoS se gradúa a Beta y queda encendido por defecto

Un feature que no salió en el anuncio grande de Garhwal ahora da el salto: **Memory QoS** gradúa de Alpha a **Beta** en v1.37 y, ojo con esto, **queda habilitado por defecto** en los nodos Linux que usan **cgroup v2**.

La gracia del feature es usar el *memory controller* del kernel para darle mejores señales sobre cómo tratar la memoria de cada contenedor. Llegó como Alpha en la v1.22 y en v1.36 sumó la **reserva de memoria por niveles (tiered reservation)**.

Lo importante para operadores es que **encenderlo por defecto es seguro**, y acá está el detalle fino: el `memoryThrottlingFactor` ahora por defecto es **`null`** (antes era `0.9`). Traducido: el kubelet **no** escribe `memory.high`, `memory.min` ni `memory.low` a los cgroups a menos que tú lo configures explícitamente. O sea, subir a v1.37 no cambia el comportamiento en runtime de los clusters existentes.

Si quieres activarlo a mano, en `KubeletConfiguration`:
- `memoryThrottlingFactor: 0.9` → habilita throttling vía `memory.high` en pods Burstable y BestEffort.
- `memoryReservationPolicy: TieredReservation` → activa protección por niveles con `memory.min` y `memory.low`.

Para desactivarlo, basta con `featureGates: { MemoryQoS: false }` (y el kubelet te rechaza la config si dejaste `memoryThrottlingFactor` en algo distinto a `0.9` o `TieredReservation` activo).

**Limitación a tener en cuenta:** la reserva de memoria es **a nivel de nodo**, no por pod —todos los pods Guaranteed reciben `memory.min` y los Burstable `memory.low`, sin opción de excluir pods puntuales—. SIG Node lo está trackeando en `kubernetes/kubernetes#140246`. El próximo hito es **GA**.

Vía [Kubernetes Blog](https://kubernetes.io/blog/2026/09/14/kubernetes-v1-37-memory-qos-graduates-to-beta/).
