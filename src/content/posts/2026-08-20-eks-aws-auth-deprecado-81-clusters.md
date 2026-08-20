---
title: "AWS deprecó el aws-auth ConfigMap de EKS y el 81% de los clusters sigue usándolo"
author: Carlos
pubDatetime: 2026-08-20T10:00:00Z
slug: eks-aws-auth-deprecado-81-clusters-access-entries
featured: false
draft: false
tags:
  - Kubernetes
  - AWS
  - Seguridad
description: "El método legacy de autenticación IAM en EKS está deprecado hace tiempo, pero 8 de cada 10 clusters no han migrado a Access Entries. El dato salió en The New Stack."
---

![Ilustración de un clúster de Kubernetes con un candado de acceso y credenciales migrando a un nuevo sistema](../../assets/images/2026-08-20-eks-aws-auth-deprecado-81-clusters.svg)

Dato para incomodar a más de algún equipo SRE: según destaca The New Stack citando el **2025 Kubernetes Security Report, el 81% de los clusters de EKS sigue operando con el viejo aws-auth ConfigMap**, el método de mapeo IAM → RBAC que AWS lleva tiempo marcando como deprecado, en contradicción directa con su propia guía de seguridad.

## El problema del aws-auth ConfigMap

El ConfigMap `aws-auth` fue durante años *el* mecanismo para decirle a EKS qué identidades de IAM pueden acceder al cluster y con qué rol de Kubernetes. Funciona, pero arrastra problemas conocidos:

- **Un solo objeto YAML controla el acceso a todo el cluster.** Un `kubectl apply` descuidado o un drift de Terraform te puede dejar fuera de tu propio cluster (el clásico `you must be logged in to the server (Unauthorized)` en producción).
- **Cambios sin control de versiones ni auditoría granular.** Editar un ConfigMap es operación de bajo nivel, lejos de las APIs de acceso modernas.
- **Espera de propagación impredecible**, algo que todos los que han migrado roles conocen de primera mano.

## La alternativa: Access Entries

AWS ya tiene el reemplazo hace un buen tiempo: **EKS Access Entries**, una API nativa donde cada identidad IAM se registra como un recurso administrado, con tipos de acceso estándar (admin, user, service, EC0 Linux), soporte para tags y mejor integración con Terraform y políticas. Migrar es mayormente mecánico: crear los access entries equivalentes a lo que hoy vive en el ConfigMap, validar, y recién ahí limpiar el ConfigMap.

El punto incómodo del reporte no es que la funcionalidad falte — la API existe y está madura — sino que **la deuda técnica en autenticación se acumula justo donde más duele: la puerta de entrada al cluster**. Un método de acceso deprecado en el 81% de la flota de EKS es exactamente el tipo de estadística que los atacantes leen con atención.

Si tienes clusters EKS bajo tu cuidado, este fin de semana es buen momento para un `kubectl get configmap aws-auth -n kube-system -o yaml` y ver en qué lado del 81% estás.

**Fuentes:** [The New Stack](https://thenewstack.io/kubernetes-fleet-security-management/), [2025 Kubernetes Security Report](https://www.armosec.io/resources/kubernetes-security-report/)
