---
title: "RustFS 1.0 llega a GA: almacenamiento de objetos S3 open source que llena el hueco de MinIO"
author: Carlos
pubDatetime: 2026-09-20T03:00:00Z
slug: rustfs-1-0-almacenamiento-objetos-s3-open-source
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - DevOps
description: "RustFS 1.0 salió de beta: almacenamiento distribuido de objetos compatible con S3, escrito en Rust y bajo Apache 2.0, que se posiciona como la alternativa open source a MinIO."
---

![Ilustración editorial de un sistema de almacenamiento distribuido: nodos hexagonales interconectados con shards de datos y erasure coding en tonos naranja óxido y azul profundo](../../assets/images/2026-09-20-rustfs-1-0-almacenamiento-objetos-s3-open-source.jpg)

RustFS acaba de cruzar la línea de meta: **la versión 1.0 está en general availability (GA)** y es la primera release "production-ready" de esta plataforma de almacenamiento de objetos distribuido escrita en **Rust**. Licenciada bajo **Apache 2.0**, ofrece una API compatible con Amazon S3 pensada para despliegues distribuidos donde importan la escalabilidad, la redundancia y poder seguir usando las herramientas S3 de siempre.

## Por qué importa ahora

El timing no es casualidad. **MinIO** —el proyecto S3-compatible más conocido— **terminó el mantenimiento activo de sus productos open source** y movió su oferta comercial a un modelo de licenciamiento propietario. RustFS se planta justo en ese hueco como la alternativa **100% open source y self-hosted** para quienes no quieren quedar amarrados a una licencia propietaria.

De hecho, los desarrolladores de RustFS reaccionaron a los cambios de MinIO a principios de año comprometiéndose a mantener el repo central abierto bajo licencia permisiva, invitando a ex-usuarios y contribuyentes de MinIO, y lanzando **herramientas para migrar despliegues MinIO existentes**.

## La línea de tiempo

- **Febrero 2024**: arranca el desarrollo
- **Julio 2025**: se vuelve open source
- **Abril 2026**: beta
- **Agosto 2026**: release candidate
- **Septiembre 2026**: GA 1.0

## Qué trae el 1.0

- **Core de objetos**: gestión de buckets, ciclo de vida de objetos, uploads multiparte, erasure coding, data tiering y políticas de lifecycle.
- **S3 Tables** con un **Apache Iceberg REST Catalog** integrado directo en el sistema.
- **Más que S3**: acceso vía WebDAV, Swift API, FTP/FTPS y hasta MCP.
- **Distribuido en serio**: expansión de storage pools, rebalanceo de datos, nodos self-healing y replicación de sitios y buckets.
- **Seguridad**: IAM, OIDC, integración con KMS, encriptación server-side, tokens STS, mTLS y auditoría.
- **Observabilidad**: soporte de OpenTelemetry, health checks de cluster, stats de capacidad y notificaciones de eventos.

Corre en Linux, Windows y macOS, con binarios standalone, builds desde fuente, **Docker y Kubernetes** (además de paquetes DEB y RPM).

## Los números

Desde que se abrió en julio de 2025: **más de 32.000 estrellas en GitHub, más de 10 millones de pulls de imagen en Docker Hub y más de 2,7 millones de instancias desplegadas**. Para un proyecto de storage que recién llega a 1.0, es tracción seria.

## Qué significa para infra

El movimiento MinIO → RustFS es un recordatorio de un patrón que ya vimos con Terraform, Redis y tantos otros: cuando un proyecto open source pivota a propietario, la comunidad suele bifurcarse o migrar a una alternativa permisiva. Si tienes S3-compatible en tu stack, RustFS es un candidato a seguir de cerca — sobre todo si tu prioridad es evitar el vendor lock-in.
