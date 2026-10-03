---
title: "Dell CSM: seis CVEs críticos (dos con CVSS 10.0) dan admin y root en clusters Kubernetes"
author: Carlos
pubDatetime: 2026-10-03T09:10:00Z
slug: dell-csm-cves-criticos-root-kubernetes
featured: false
draft: false
tags:
  - Seguridad
  - Kubernetes
  - Cloud
description: "Dell parcheó seis vulnerabilidades críticas en sus Container Storage Modules, incluyendo dos CVSS 10.0 explotables sin autenticación. El resultado posible: credenciales de admin de todos los arrays de storage y root en los nodos del cluster. Sin workaround: solo actualizar a CSM 1.18.0."
---

![Ilustración editorial de contenedores de datos apilados en un clúster de servidores con una grieta roja luminosa atravesando un candado digital, paleta azul oscuro y rojo de alerta, estilo tech editorial, sin texto](../../assets/images/2026-10-03-dell-csm-cves-criticos-root-kubernetes.jpg)

Dell publicó un advisory que cualquier equipo con Kubernetes y storage Dell debería leer con calma: [seis vulnerabilidades críticas](https://www.dell.com/support/kbdoc/en-us/000515771/dsa-2026-448-security-update-for-dell-container-storage-modules-multiple-vulnerabilities) en sus **Container Storage Modules (CSM)** — el puente entre los arrays de storage empresarial de Dell y los clusters Kubernetes. Todas explotables de forma remota, casi todas **sin autenticación**, y el combo entrega desde credenciales de administrador del storage hasta **root en los nodos del cluster**.

## La lista, para tomarle el peso

- **CVE-2026-63688 (CVSS 10.0)** — Falta de autenticación en el servidor gRPC `csm-authorization-storage`. Un atacante remoto sin credenciales obtiene **las credenciales de administrador del storage backend de todos los arrays registrados**. Dell lo describe como un bypass completo del modelo de seguridad de csm-authorization sobre las cinco familias de storage soportadas.

- **CVE-2026-63692 (CVSS 10.0)** — También falta de autenticación, esta vez en el proxy de autorización y el tenant service: acceso **administrativo total** al servicio de autorización y capacidad de manipular recursos de storage de todos los tenants.

- **CVE-2026-67269 (CVSS 9.9)** — Gestión inadecuada de privilegios en el reconciler del Custom Resource de ContainerStorageModule. Un atacante remoto de **bajo privilegio** escala hasta **root en los nodos del cluster** — y según Dell, puede comprometer **todos los nodos del cluster con un solo custom resource**.

- **CVE-2026-54472 (CVSS 9.8)** — Credenciales hardcodeadas en el módulo CSM Authorization que permiten forjar tokens administrativos criptográficamente válidos.

- **CVE-2026-61421 (CVSS 9.8)** — Clave criptográfica hardcodeada en el componente JWT de karavi-authorization. Como el secreto de firma es **públicamente conocido**, cualquiera puede forjar tokens y ganar privilegios de admin.

- **CVE-2026-67273 (CVSS 9.6)** — Inyección en un template engine que permite a un atacante de bajo privilegio escalar, leer información sensible y **manipular el RBAC a nivel de cluster** (crear recursos RBAC cluster-scoped y leer Secrets de todo el cluster).

## Qué hacer

Las versiones afectadas son **todas las anteriores a CSM 1.17.0**, y la fix es **CSM 1.18.0**. Sin workarounds ni mitigaciones intermedias: la única salida es actualizar. Dell además recomienda **rotar los JWT signing secrets** después de parchear, porque con las claves hardcodeadas comprometidas, tokens forjados podrían seguir siendo válidos si no se rotan.

## El contexto que importa

No hay reportes de explotación activa todavía, pero los productos de Dell tienen historial: fallos como [CVE-2021-21551](https://thehackernews.com/2022/10/hackers-exploiting-dell-driver.html) y el zero-day de RecoverPoint de este año ([CVE-2026-22769](https://thehackernews.com/2026/02/dell-recoverpoint-for-vms-zero-day-cve.html)) terminaron siendo explotados en la naturaleza.

La lección de arquitectura es la de siempre, pero con storage: los módulos que orquestan storage en Kubernetes manejan credenciales privilegiadas de infraestructura crítica, y un flaw ahí no queda contenido en un namespace — **rompe el perímetro del cluster completo** desde el storage hacia arriba. Si tienes CSM en producción, esta no es una actualización para el backlog del mes que viene.
