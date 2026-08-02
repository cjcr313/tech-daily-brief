---
title: "Woodpecker CI 3.17: AppArmor para Docker, control de nodeSelector en K8s y secrets bajo control"
author: Carlos
pubDatetime: 2026-08-02T10:00:00Z
slug: woodpecker-ci-3-17-apparmor-k8s-seguridad
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "Woodpecker CI 3.17 trae perfiles AppArmor custom para Docker, bloqueo de nodeSelector en K8s sin permiso explícito, generación automática de secrets gRPC y métricas Prometheus mejoradas."
---

Woodpecker CI, la alternativa open-source a Drone/GitHub Actions que muchos equipos están adoptando para self-hosted, acaba de sacar la versión **3.17**. Y aunque no es un release que rompa internet, tiene varios cambios de seguridad y operabilidad que valen la pena conocer.

## Lo destacado

**AppArmor para Docker pipelines:** Ahora los administradores pueden asignar **perfiles AppArmor personalizados** a los contenedores que ejecutan pipelines via Docker backend. Esto añade una capa extra de restricción al comportamiento del contenedor a nivel host, algo que antes requería configuración externa.

**nodeSelector de Kubernetes bajo control administrativo:** Hasta ahora, los autores de pipelines podían libremente dirigir workloads a nodos específicos del cluster K8s usando `nodeSelector`. A partir de 3.17, esto queda **detrás de un setting del agente**. Si el admin no lo habilita explícitamente, los pipeline authors no pueden pinchar nodos. Esto evita que un usuario con acceso al repo pueda sesgar sus jobs hacia nodos privilegiados o con hardware específico (e.g., GPUs) sin autorización.

**Secret gRPC auto-generado:** La comunicación entre el server de Woodpecker y sus agents ahora **genera automáticamente el secret gRPC** si no se configura uno. Se acabaron los deployments con secrets débiles o vacíos por default.

## Mejoras operacionales

- **Métricas Prometheus** ahora incluyen un label `step-type` para datos a nivel de step, dando más contexto para monitoreo
- **Web UI** muestra errores de runtime de workflows, separando fallos de preparación/ejecución de errores en steps individuales
- **Matrix builds deterministas:** el orden de permutación de axes ahora es consistente entre runs
- Labels de Kubernetes pods ahora incluyen info de **branch y evento** (trusted commit data)
- Renombrado de variable `CI_COMMIT_PRERELEASE` → `CI_PIPELINE_RELEASE_PRE` (ojo si tienen pipelines que la referencian)

## Fixes de bugs

- Los secrets ahora se **re-fetchean al restartear** un pipeline, asegurando que los reruns usen valores actuales
- Fix en retries de creación de pipelines
- Previene valores de timeout en cero
- Repara manejo de usuarios con `forge_id = 0` cuando el registro está cerrado

## Por qué importa

Woodpecker sigue siendo la opción preferida para equipos que quieren **CI/CD self-hosted sin vendor lock-in**. Estos cambios refuerzan dos frentes clave: **seguridad** (AppArmor, control de nodeSelector, secrets automáticos) y **observabilidad operacional** (métricas, UI de errores). Si están corriendo Woodpecker sobre K8s, el cambio de nodeSelector solo ya justifica el upgrade.

**Fuentes:** [Linuxiac](https://linuxiac.com/woodpecker-ci-3-17-adds-apparmor-support-for-docker-pipelines/), [Changelog oficial](https://github.com/woodpecker-ci/woodpecker/releases/tag/v3.17.0)
