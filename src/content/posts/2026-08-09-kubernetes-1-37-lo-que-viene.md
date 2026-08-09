---
title: "Kubernetes 1.37 llega el 26 de agosto: Metrics API GA, pods con recursos compartidos y certificados nativos"
author: Carlos
pubDatetime: 2026-08-09T12:00:00Z
slug: kubernetes-1-37-lo-que-viene
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud Native
  - DevOps
description: "Kubernetes v1.37 se libera el 26 de agosto y trae Metrics API estable, recursos a nivel de pod, DRA con taints, HPA configurable y certificados nativos para pods."
---

![Ilustración editorial de un clúster de Kubernetes con pods interconectados y engranajes de versiones](../../assets/images/2026-08-09-kubernetes-1-37-lo-que-viene.jpg)

Kubernetes v1.37 está a la vuelta de la esquina — **26 de agosto de 2026** — y trae un puñado de features que vale la pena tener en el radar si estás planificando upgrades. Acá va el resumen de lo que importa.

## 🔥 Lo que llega como GA (estable)

### Metrics API por fin se gradúa

La API `metrics.k8s.io` lleva años en beta. Es lo que alimenta `kubectl top` y el HPA. En v1.37 **pasa a GA**. Sin cambios funcionales — v1 y v1beta1 siguen funcionando — pero ya puedes confiar en v1 para herramientas de producción sin miedo a que cambie.

### Recursos a nivel de Pod

Antes tenías que setear requests y limits por cada contenedor dentro de un pod, incluso si trabajaban juntos. Ahora puedes definir CPU, memoria y hugepages **a nivel de pod**:

```yaml
spec:
  resources:
    requests:
      cpu: "1"
      memory: "512Mi"
    limits:
      cpu: "2"
      memory: "1Gi"
```

Todos los contenedores comparten el mismo pool. Menos desperdicio, mejor para workloads multi-contenedor con uso bursty.

### DRA: Device Taints y Tolerations

Dynamic Resource Allocation ahora soporta el modelo de taints pero para dispositivos individuales. ¿Una GPU sobrecalentándose? Le pones un taint. ¿Necesitas aislar una NIC sin cordonar el nodo completo? Se puede. Los pods pueden agregar tolerations en su `ResourceClaim` para seguir usándola.

### HPA con tolerancia configurable

El HPA siempre usó un 10% fijo de tolerancia. Pero 10% en un workload de 500 pods es muy distinto a 10% en uno de 5. Ahora puedes setear **tolerancia personalizada por HPA**, con valores separados para scale-up y scale-down bajo `spec.behavior`.

### Pod Certificates

Los pods ahora pueden obtener **certificados X.509 de corta duración nativamente**, sin bearer tokens ni sidecars. Se usa una nueva API `PodCertificateRequest` + un volumen proyectado que el kubelet entrega directamente al pod, con rotación automática. mTLS sin ceremony.

### KYAML para kubectl

KYAML — un subconjunto más estricto de YAML — llega como output estable para `kubectl`. Adiós al "Norway problem" donde `no` se parseaba como booleano `false`. Llaves con `[]`, strings con comillas dobles. Menos sorpresas.

### SELinuxMount GA

En nodos con SELinux, Kubernetes hacía relabel archivo por archivo antes de iniciar un pod. En volúmenes con millones de archivos, podía tardar minutos. Ahora **monta el volumen con el contexto correcto en una operación**, siempre que el driver CSI lo soporte (`CSIDriver.spec.seLinuxMount: true`). ⚠️ Ojo: si tienes pods con diferentes labels SELinux compartiendo el mismo volumen, pueden fallar.

## 🧪 Beta destacado

### Kubelet en User Namespace (Rootless)

El kubelet normalmente corre como root en el host. Si se compromete, el atacante tiene root. En v1.37, **Kubelet in UserNS pasa a beta**: corre el kubelet dentro de un user namespace de Linux, aparece como root adentro pero es un unprivileged user afuera. Capa extra de hardening sin cambiar el day-to-day.

### HPA Scale to/from Zero para métricas externas

El HPA ya podía escalar a cero con object/external metrics, pero no había forma fácil de saber si fue el HPA o un humano. Esto se mejora en beta.

---

La versión todavía no está fuera, así que algunos detalles pueden cambiar. Pero si estás planificando el upgrade, estos son los puntos clave que conviene testear anticipadamente. La fecha es **26 de agosto**.
