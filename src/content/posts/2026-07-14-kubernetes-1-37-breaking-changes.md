---
title: "Kubernetes v1.37 llega el 26 de agosto: 3 cambios que rompen todo (y cómo prepararse)"
author: Carlos
pubDatetime: 2026-07-14T22:00:00Z
slug: kubernetes-1-37-breaking-changes
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
  - Infraestructura
description: "Kubernetes v1.37 trae containerd 2.0 obligatorio, cgroup v2 forzado y DRA para GPUs. Tres breaking changes que van a romper clústeres si no te preparas."
---

![Imagen de referencia](../../assets/images/2026-07-14-k8s-137-cover.jpg)

Kubernetes v1.37 sale el **26 de agosto de 2026** y trae **tres cambios breaking** que silenciosamente van a romper tu clúster durante el upgrade si los ignoras. Lo peor: los tres se anunciaron en el ciclo v1.35, así que ya llevan tiempo avisando, pero la mayoría de los equipos no ha hecho nada.

## 1. containerd 1.x se acaba

v1.37 **requiere containerd 2.0 o superior**. Fin de la historia. Si tienes nodos corriendo containerd 1.7.x, el kubelet simplemente no va a iniciar después del upgrade.

El modo de falla es insidioso: el control plane se actualiza bien, pero los worker nodes quedan en **NotReady**, workloads se evictan o se pierden. Desde la perspectiva del API server, todo se ve sano hasta que intentas programar algo.

**Qué hacer ahora:**
- `containerd --version` en cada nodo. Si ves v1.7.x, tienes trabajo.
- Sube a containerd 1.7.21+ primero, luego `ctr deprecations list` para ver incompatibilidades antes del salto a 2.0.
- Cualquier cosa que acceda al socket de containerd directamente debe usar **CRI v1 API** (v1alpha2 fue removido).
- Imágenes Docker Schema 1 deben migrarse a Schema 2 u OCI.

## 2. cgroup v1 no arranca

El flag `FailCgroupV1` viene en `true` por defecto desde v1.35. En v1.37, los nodos con cgroup v1 **sin override explícito** `failCgroupV1: false` en la config del kubelet directamente no van a iniciar.

Esto pega fuerte a clústeres **self-managed** (bare metal, VMs antiguas, todo lo que still corre en base CentOS 7-era). GKE, EKS y AKS probablemente ya lo manejaron, pero conviene verificar.

```bash
# En cada nodo — cgroup2fs = bien, tmpfs = problema
stat -fc %T /sys/fs/cgroup/
```

Si estás en cgroup v1, la solución es **actualizar el OS**: Ubuntu 22.04+, RHEL 9+ y Debian 12+ traen cgroup v2 por defecto.

## 3. Flags deprecados del kubelet removidos

`KubeletCgroupDriverFromCRI` es GA desde v1.36. En v1.37 se elimina el fallback legacy: el kubelet ahora **depende del CRI** para reportar el cgroup driver.

Revisa tus units de systemd y scripts de arranque del kubelet. Si tienes flags `--cgroup-driver`, **borralos**. Si usas Ansible, Puppet o Terraform para generar configs del kubelet, **actualiza esos templates ya**.

## Lo bueno: DRA para GPUs

No todo es dolor. **Dynamic Resource Allocation (DRA)** llegó a GA en v1.34, y en v1.37 el foco es **KEP-4815: Partitionable Devices** (alpha en v1.36). Esto permite **particionar una GPU** (A100, H100) en múltiples unidades lógicas con `DeviceClass` + `ResourceClaim`.

El scheduler MIG-aware de NVIDIA ya está estable. El modelo viejo de `nvidia.com/gpu: 1` sigue funcionando pero no da esta flexibilidad. Si corres inference serving, esto se traduce directamente en **ahorro de costos**.

## etcd v3.7.0

etcd v3.7.0 salió el **8 de julio** con `RangeStream`: los resultados grandes de `LIST` ahora se streamenan en chunks en vez de bufferarse server-side. Mejor uso de memoria para clústeres grandes.

## Resumen: ¿qué hacer?

1. **Inventario** de versiones de containerd en todos tus nodos
2. **Verificar** cgroup version con el comando de arriba
3. **Auditar** flags del kubelet en configs de systemd y IaC
4. **Probar** el upgrade en un clúster de staging antes de agosto

Tienes 44 días. A contar.

**Fuentes:** byteiota.com, Kubernetes release docs, containerd docs, Google Cloud docs
