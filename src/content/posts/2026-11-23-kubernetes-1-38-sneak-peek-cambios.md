---
title: "Kubernetes 1.38 asoma: kubectl se limpia, kuberc se estabiliza y cgroup v1 se despide"
author: "Nauta Lab"
pubDatetime: 2026-11-23T21:00:00Z
slug: kubernetes-1-38-sneak-peek-cambios
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
description: "El sneak peek oficial de Kubernetes v1.38 elimina variables obsoletas de kubectl, gradúa kuberc y sigue apretando la tuerca a cgroup v1. Checklist de lo que revisar antes de actualizar."
---

![Ilustración editorial del próximo release de Kubernetes: grúas robóticas ordenando contenedores luminosos en un muelle tecnológico](../../assets/images/kubernetes-1-38-sneak-peek-cambios.jpg)

El equipo de release de Kubernetes publicó hoy el tradicional *sneak peek* de la versión 1.38, y aunque suene a trámite administrativo, es lectura obligada si administras clusters: la lista no es larga pero pega donde más duele — kubectl, cgroups y webhooks de admisión. Todo lo descrito acá puede moverse antes del release oficial, aunque la experiencia dice que este tipo de cambios llegan para quedarse.

## Lo que desaparece en kubectl

Dos limpiezas directas para tu terminal:

- **Variables de entorno WebSocket fuera**: `KUBECTL_REMOTE_COMMAND_WEBSOCKETS` y `KUBECTL_PORT_FORWARD_WEBSOCKETS` dejan de existir. Desde v1.30 y v1.31 que WebSockets es el default para `exec`, `attach`, `cp` y `port-forward`, y estas variables eran el escape hacia SPDY. En 1.38 kubectl siempre intentará WebSockets primero, con fallback automático. Si tu CI las setea, ya no tendrán efecto alguno.
- **`kuberc` gradúa a estable**: la API `kubectl.config.k8s.io/v1` elimina el campo `name` como alias de `command` en los allowlists de plugins de credenciales (deprecado desde v1.36). Si tus entradas usan `name`, hay que pasarlas a `command` ahora, porque el archivo de preferencias de kubectl se separa definitivamente del kubeconfig.

## Cambios estructurales: cgroup v1 y webhooks

- **cgroup v1, cada vez más cerca del funeral**: desde v1.35 el kubelet se niega a iniciar en nodos cgroup v1 sin `failCgroupV1: false` en la configuración. Esa opción sigue disponible en 1.38, pero el mensaje oficial es claro: es un parche temporal, no una estrategia. La migración a cgroup v2 es tarea pendiente con fecha, no deuda eterna.
- **Webhooks de admisión dejan de ver requests de autenticación**: con `ExcludeAdmissionWebhookVirtualResources` activo por default desde v1.37, los webhooks ya no reciben escrituras virtuales de `TokenReview`, `SelfSubjectReview`, `SubjectAccessReview` y familia. Las configuraciones que aún nombran esos recursos generan warning de deprecación en cada arranque del API server. El feature gate se puede apagar por ahora, pero quedará lockeado al graduarse a estable.
- **Runtimes deben reportar su cgroup driver**: el sneak peek también lista como breaking change que los container runtimes ahora deben reportar el driver de cgroup que usan, cerrando la ambigüedad que hoy resuelve kubelet por su cuenta.

## El checklist práctico antes del upgrade

1. Escanea tus pipelines por las variables WebSocket y elimínalas.
2. Migra cualquier allowlist de kuberc de `name` a `command`.
3. Audita nodos antiguos con cgroup v1 y agenda la migración a v2.
4. Revisa tus ValidatingWebhook y MutatingWebhookConfiguration por reglas que nombren recursos `*Review`.

Cuatro ítems, cero glamour, y la diferencia entre un upgrade aburrido y un incidente con pager a las 3 AM.

**Fuentes:** [Kubernetes Blog](https://kubernetes.io/blog/2026/11/23/kubernetes-v1-38-sneak-peek/) · [DevOpsChat](https://www.devopschat.co/articles/kubernetes-v138-sneak-peek)
