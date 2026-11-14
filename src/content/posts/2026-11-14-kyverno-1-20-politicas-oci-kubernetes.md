---
title: "Kyverno 1.20 llega a Kubernetes: empaquetado OCI para políticas CEL y auditoría con --explain"
author: Carlos
pubDatetime: 2026-11-14T10:00:00Z
slug: kyverno-1-20-politicas-oci-kubernetes
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
  - Cloud
description: "La nueva versión del motor de políticas para Kubernetes introduce empaquetado OCI para distribuir políticas CEL como contenedores, auditoría con --explain y control de excepciones temporales."
---

![Ilustración editorial tech de un motor de políticas digital con un escudo de verificación OCI ensamblándose sobre un cluster de Kubernetes, tonos verde azulado y gris industrial, estilo vectorial limpio](../../assets/images/2026-11-14-kyverno-1-20-politicas-oci-kubernetes.jpg)

En el marco de KubeCon + CloudNativeCon North America 2026, la comunidad cloud native celebró el lanzamiento oficial de **Kyverno 1.20**, una de las actualizaciones más importantes para el motor de políticas de Kubernetes orientado a DevSecOps y GitOps.

Kyverno, el proyecto graduado de la CNCF ampliamente adoptado por simplificar la validación, mutación y generación de recursos en Kubernetes usando YAML y Common Expression Language (CEL), da un salto relevante en la forma en que se empaquetan y auditan las políticas en clústeres empresariales.

### OCI Artifacts: tus políticas se versionan igual que tus contenedores

El cambio de arquitectura más destacado en Kyverno 1.20 es la graduación del soporte nativo para **artefactos OCI** (`kyverno oci`). 

A partir de esta versión, los conjuntos de políticas escritas en CEL pueden empaquetarse en un bundle OCI estándar, lo que permite:
1. **Versionado y distribución en OCI Registries:** Puedes publicar, firmar con Cosign/Sigstore y almacenar tus políticas de Kubernetes en registries como Harbor, ECR, Artifact Registry o GitHub Packages, usando el mismo pipeline de CI/CD que usas para tus imágenes de Docker.
2. **Firmado y verificación de integridad:** Las políticas ya no se tratan como archivos sueltos en repositorios, sino como artefactos inmutables verificables antes de ser desplegados en el clúster.

### Audita decisiones en CLI con `kyverno apply --explain`

Entender por qué una política bloqueó un Pod o una solicitud de admisión solía requerir revisar logs extensos del controlador de admisión. Kyverno 1.20 soluciona esto agregando la bandera `--explain` al comando `kyverno apply` de su CLI.

Al ejecutar `kyverno apply --explain`, el motor desglosa el árbol de evaluación paso a paso, mostrando exactamente qué variable, coincidencia o expresión CEL hizo que la política pasara, fallara o fuera omitida. Esto agiliza de forma drástica el debugging local de políticas antes de llevarlas a producción.

### Excepciones con fecha de caducidad y controles compensatorios

Gestionar excepciones de seguridad suele ser un dolor de cabeza para los equipos de Platform Engineering. Con Kyverno 1.20, las `PolicyExceptions` ahora soportan:
* **Expiración automática:** Es posible definir una fecha y hora de término (TTL) para una excepción. Al cumplirse el plazo, el permiso temporal caduca automáticamente sin intervención manual.
* **Controles compensatorios obligatorios:** Permite exigir requisitos adicionales mientras la excepción esté activa (por ejemplo, requerir escaneo adicional o etiquetas específicas de monitoreo).

### Conclusión

Kyverno 1.20 consolida la tendencia hacia la convergencia entre Kubernetes nativo, CEL y estándares de distribución en la cadena de suministro de software (Software Supply Chain). Si administras infraestructura en Kubernetes y buscas simplificar la gobernanza y seguridad sin agregar complejidad innecesaria, esta release es una actualización obligada en tu roadmap de infraestructura.

**Fuentes:** [Nirmata Blog](https://nirmata.com/blog), [CNCF Kyverno Docs](https://kyverno.io), [KubeCon NA 2026 Announcements](https://events.linuxfoundation.org).
