---
title: "Kubernetes depreca cgroup v1: el kubelet simplemente no va a partir en nodos viejos"
author: Carlos
pubDatetime: 2026-10-07T03:05:00Z
slug: kubernetes-depreca-cgroup-v1-kubelet-no-parte
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "El blog oficial de Kubernetes formalizó la deprecación de cgroup v1: desde v1.35 el kubelet no arranca en nodos con la interfaz antigua. Esto es lo que tenís que revisar antes del próximo upgrade."
---

![Ilustración editorial tech de contenedores modular organizándose bajo una estructura jerárquica unificada en forma de árbol, con nodos de luz azul conectados, estilo flat profesional, tonos azul profundo y acentos turquesa, sin texto](../../assets/images/2026-10-07-kubernetes-depreca-cgroup-v1-kubelet-no-parte.jpg)

Si tenís clusters Kubernetes corriendo en nodos Linux viejos, dedicale cinco minutos a esto: el blog oficial de Kubernetes publicó [el shift definitivo hacia cgroup v2](https://kubernetes.io/blog/2026/10/06/kubernetes-cgroups-v2-shift/) y la deprecación formal de cgroup v1. No es un cambio cosmético: **desde Kubernetes v1.35, el kubelet no parte por defecto en un nodo que corra cgroup v1**. Plano y simple.

## ¿Cómo llegamos acá?

- **Kubernetes v1.25**: soporte de gestión cgroup v2 estable.
- **Kubernetes v1.31** (agosto 2024): cgroup v1 pasa a modo mantenimiento.
- **Kubernetes v1.35**: llega `failCgroupV1`, que **por defecto es `true`**. El kubelet se niega a arrancar en nodos cgroup v1.
- Lo que sigue: remoción total según la política de deprecación, trackeada en [KEP-5573](https://www.kubernetes.dev/resources/keps/5573).

Existe una válvula de escape temporal — `failCgroupV1: false` en la config del kubelet — pero la palabra clave es *temporal*. Si tu plan de migración es "setear el flag y olvidarse", ese no es un plan, es una deuda con intereses.

## kubeadm también se puso estricto

Para clusters manejados con kubeadm, v1.35 endureció el check de `SystemVerification`: ahora **retorna error** (no warning) en `kubeadm init`, `join` y `upgrade` si detecta cgroup v1 con kubelet v1.35+. O sea, el upgrade te va a frenar en la puerta si los nodos no están migrados.

## ¿Y por qué molestarse? Las ventajas de v2

cgroup v2 trae una **jerarquía unificada** y una interfaz consistente, pero el beneficio concreto está en memoria:

- **Memory QoS** (alpha en v1.36, separado de Memory QoS Beta de v1.37) usa el memory controller de v2: `memory.high` para throttling de containers Burstable, y `memory.min`/`memory.low` para protección dura y blanda con `TieredReservation`.
- Eso simplemente **no existe en cgroup v1**. Y dado que la RAM es el cuello de botella real de los clusters hoy (más aún con workloads de IA agéntica, como vimos con node swap), v2 es la base de todo lo que viene.
- Recomendación de kernel: 5.9+ para Memory QoS; en kernels más viejos hay un livelock conocido en el reclaim de `memory.high`.

## Un detalle que NO se arregla migrando

Ojo con esto: el issue histórico de que la memoria `active_file` (page cache) se trata como no-reclamable **sigue igual en v2** ([kubernetes#43916](https://github.com/kubernetes/kubernetes/issues/43916)). En workloads de I/O intensivo, el kubelet puede reportar presión de memoria y desalojar pods por culpa del cache de archivos. El workaround documentado: setear **requests = limits** para esos containers, después de medir un valor apropiado. Migrar a cgroup v2 no te salva de ese golpe.

## Checklist para no llevarse un susto

1. Si estás en una versión anterior a v1.35: **migra todos los nodos Linux a cgroup v2 antes del upgrade** (la mayoría de las distros modernas ya arrancan en v2 por defecto).
2. Si ya estás en v1.35+: verifica que cada nodo corra cgroup v2, o que el override `failCgroupV1: false` sea una decisión consciente y con fecha de término.
3. Para I/O pesado, revisa requests/limits de memoria antes de culpar al eviction manager.

La tendencia es clara: Kubernetes está limpiando la casa para las cargas de trabajo de IA — swap en nodos, Memory QoS con protección jerárquica, todo montado sobre cgroup v2. El costo de quedarse en v1 ya no es "perder features nuevas"; es que el cluster directamente no parte.

**Fuentes:** [Kubernetes Blog — The Shift to cgroup v2 in Kubernetes](https://kubernetes.io/blog/2026/10/06/kubernetes-cgroups-v2-shift/) · [KEP-5573: Remove cgroup v1 support](https://www.kubernetes.dev/resources/keps/5573)
