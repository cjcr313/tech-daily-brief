---
title: "Yelp movió 1.000 TiB de Cassandra a EKS sin transmitir un solo byte: transplante de volúmenes"
author: Carlos
pubDatetime: 2026-11-18T13:00:00Z
slug: yelp-cassandra-eks-transplante-volumenes
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
description: "Yelp migró ~90 clústeres productivos de Cassandra a EKS re-apuntando volúmenes EBS en vez de streamear datos: cero downtime, un solo ingeniero, tres semanas. Lección maestra de stateful en Kubernetes."
---

![Yelp movió 1.000 TiB de Cassandra a EKS sin transmitir un solo byte: transplante de volúmenes](../../assets/images/2026-11-18-yelp-cassandra-eks-transplante-volumenes.webp)

Migrar cargas stateful entre clústeres de Kubernetes es de las cosas más dolorosas del oficio. El equipo SRE de Yelp publicó cómo movió su fleet completo de **Cassandra desde clústeres self-managed legacy a Amazon EKS** sin streamear datos entre nodos: **~90 clústeres productivos, ~1.000 pods, cerca de 1.000 TiB**, con cero downtime para clientes y sin pérdida de datos.

## La idea: "Rolling PV Transplant"

El insight base es elegante: **un volumen EBS está amarrado a la zona de disponibilidad, no al clúster de Kubernetes**, y un PersistentVolume es efectivamente un puntero a un volume ID. Entonces, ¿para qué copiar?

1. Pre-crean PVs y PVCs en EKS que **referencian los volume IDs existentes**
2. Crean un StatefulSet idéntico en EKS, cuyos pods quedan esperando en ContainerCreating
3. La automatización borra un pod del clúster legacy, espera el detach del volumen
4. El pod de EKS reclama el volumen, **vuelve al ring con los mismos datos y el mismo token range**
5. Repeat, pod por pod

La replicación de Cassandra tolera los pocos minutos offline de cada nodo. El clúster más grande (un user-data store de 54 pods) tardó **~12 horas de punta a punta**.

## Los números que importan

- Un solo ingeniero corrió el rollout productivo en **~3 semanas**, migrando 3 a 6 clústeres por día
- **Rollback trivial**: ningún nodo se descommissionó del ring, así que revertir era repetir la operación al revés — lo usaron para un subnet faltante y un certificado mal calzado, y los pods volvieron en minutos
- Flag **skipReconciliation: true** en ambos clústeres para que los dos operadores de Cassandra no se pelearan por el estado de los pods durante la migración

## La letra chica (donde vive la lección real)

Los fracasos del run no fueron del mecanismo, sino de la salud previa del sistema:

- Un **VolumeAttachment huérfano** del CSI controller dejaba pods en Pending sin error visible; borrarlo a mano lo arregló. Consejo: timeouts explícitos para detach/attach estancados en cualquier automatización
- Los **backups fallaron 48 horas con IAM AccessDenied** porque el rol nuevo con sufijo -eks aún no era asumido por los jobs agendados... y la alerta solo abría un ticket en vez de pagear
- Al pausar los repairs para migrar, descubrieron **un clúster con repairs silenciosamente deshabilitados por 3 meses**

La moraleja de Yelp: antes de una migración así, **audita el estado de repairs, los roles IAM de backups y la severidad de tus alertas**. Migrar un sistema que ya estaba enfermo solo lo hace visible.

## Bonus: el script lo escribió Claude

Detalle de época: el script de orquestación (~800 líneas de bash) lo **generó Claude a partir del runbook manual ya validado** — no le pidieron diseñar el procedimiento, solo automatizarlo. Tras dos días de testing, solo ajustes menores.

La técnica ya la usaron también con Kafka y aplica a **cualquier carga stateful amarrada a una AZ en Kubernetes**. Los clústeres legacy, mientras tanto, ya están jubilados.
