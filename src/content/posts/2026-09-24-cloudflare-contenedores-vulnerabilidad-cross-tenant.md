---
title: "Cloudflare corrige una vulnerabilidad cross-tenant en Containers que exponía datos residuales de disco"
author: Carlos
pubDatetime: 2026-09-24T21:00:00Z
slug: cloudflare-contenedores-vulnerabilidad-cross-tenant
featured: false
draft: false
tags:
  - Cloud
  - DevOps
  - Seguridad
description: "Un investigador de Accomplish reportó que Cloudflare Containers podía exponer bloques de disco residuales de workloads previos. Cloudflare ya parchó toda la flota, sin evidencia de explotación."
---

![Ilustración editorial de un contenedor cloud multi-tenant con capas de disco delgadas compartidas y bloques de datos residuales resaltados en rojo, siendo limpiados y parchados, tonos naranja y azul profundo, estilo tech editorial](../../assets/images/2026-09-24-cloudflare-contenedores-vulnerabilidad-cross-tenant.jpg)

Cloudflare publicó hoy un post-mortem técnico sobre una vulnerabilidad **cross-tenant** en **Cloudflare Containers** (y por extensión Cloudflare Sandboxes, que se construye encima). El tema: un cliente podía recuperar **bloques de disco residuales** que habían pertenecido a workloads de otros clientes en el mismo host. La buena noticia: ya está **totalmente remediada**, no hay evidencia de que datos de clientes se hayan comprometido, y no requirió cambios de configuración del lado del cliente.

El reporte lo hizo **Oren Yomtov**, investigador de Accomplish, el 4 de septiembre de 2026 a través del programa de bug bounty de Cloudflare, y el post se escribió en colaboración con su equipo.

La raíz del problema está en cómo se asigna el almacenamiento. Containers corre workloads en infraestructura multi-tenant y usa **device mapper thin provisioning (dm-thin)** para darle a cada contenedor un disco root escribible, dentro de una VM Firecracker. El thin provisioning solo asigna almacenamiento físico cuando un disco virtual escribe a una región no mapeada; los pools afectados usaban bloques de **64 KiB**. Cuando se borraba el thin volume de un contenedor, sus bloques físicos volvían a un pool compartido entre varias cuentas.

El detalle clave: el pool tenía configurada la opción **`skip_block_zeroing`**. Con esto, dm-thin no hace zeroing de los bloques recién asignados antes de entregarlos. Así, cuando un bloque de 64 KiB se reasignaba, una escritura de bloque completo reemplazaba el contenido anterior, pero una escritura más chica solo cambiaba la porción escrita — el resto podía conservar datos del dueño anterior.

El proof of concept era elegante: identificar regiones alineadas de 64 KiB que correspondían a espacio libre del filesystem ext4 del guest, y escribir un bloque alineado de **4 KiB** en cada región. Al tocar un thin block sin mapear, dm-thin asignaba un bloque físico de 64 KiB del pool compartido; los 4 KiB se escribían y, como el zeroing estaba deshabilitado, los **60 KiB restantes** podían conservar datos de un contenedor previo. Una lectura posterior del device crudo revelaba bytes que el contenedor nuevo jamás escribió.

Cloudflare aclara los límites de la técnica: no permitía apuntar a un cliente, workload, host o dato específico, y la data residual no estaba garantizada. Los investigadores usaron checksums de bloques de directorio de ext4 (`metadata_csum`) para distinguir sus propios bloques de prueba de los ajenos, y confirmaron que **borraron de forma segura** los datos recuperados.

La corrección se aplicó en toda la flota de Containers, y en la telemetría histórica de I/O de disco disponible no se encontró evidencia de explotación maliciosa — toda la actividad atribuible a la técnica provino de los investigadores y de los ingenieros de Cloudflare validando de forma autorizada.

Un buen caso de estudio de cómo el thin provisioning, una opción de configuración aparentemente inocua (`skip_block_zeroing`) y el multi-tenancy pueden combinarse para abrir un agujero sutil — y de cómo un disclosure responsable bien documentado termina en un fix de flota sin drama.
