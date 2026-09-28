---
title: "Aurora DSQL agrega foreign keys: AWS cierra la brecha que frenaba las migraciones"
author: Carlos
pubDatetime: 2026-09-28T15:00:00Z
slug: aurora-dsql-foreign-keys-adopcion
featured: false
draft: false
tags:
  - Cloud
  - AWS
  - Bases de Datos
description: "AWS anunció que Aurora DSQL ya soporta restricciones de clave foránea con CASCADE y SET NULL. Era el principal bloqueador de adopción del Postgres serverless distribuido."
---

![Ilustración editorial de una base de datos PostgreSQL distribuida serverless con nodos conectados por restricciones de clave foránea, sobre la nube de AWS](../../assets/images/2026-09-28-aurora-dsql-foreign-keys-adopcion.jpg)

AWS anunció que **Aurora DSQL ya soporta restricciones de clave foránea (foreign keys)**, con CASCADE, SET NULL y otras acciones referenciales. Suena a feature menor, pero es el cierre de una brecha que la propia comunidad había marcado como **el principal bloqueador de adopción** desde que el servicio se anunció en re:Invent 2024.

## Por qué importa tanto

Aurora DSQL es la base de datos serverless, distribuida y compatible con PostgreSQL de AWS, pensada para aplicaciones altamente disponibles y escalables. Pero durante casi dos años le faltó algo que para los usuarios de Postgres era innegociable: las foreign keys. Un comentario de Reddit de la época lo resumió con brutalidad: *"decir 'Postgres-compatible' es engañoso. Foreign keys es una parte enorme de un RDBMS. No puedes tener datos 'relacionales' sin foreign keys."*

En el hilo "Amazon wasted their time building DSQL", la falta de FKs figuraba entre los motivos por los que la gente no migraba. Y Marc Bowes, senior principal engineer de AWS, había respondido en su momento: *"Sí, las foreign keys vienen. Los escuchamos."* Ahora cumplieron.

## Cómo funciona por dentro

Según la documentación, DSQL aplica la integridad referencial mediante **verificación de snapshot durante las transacciones y detección de conflictos al commit**. El servicio chequea las relaciones de FK contra un snapshot consistente sin bloquear tablas, permitiendo operaciones concurrentes, y usa chequeos implícitos de **KEY SHARE al commit** para detectar cambios conflictivos. Las transacciones que violarían una restricción se rechazan con un error de serialización.

Marc Brooker (VP y Distinguished Engineer de AWS) lo puso en una frase: *"sin bloqueos, sin cambio en el escalado para lecturas sin FKC, los lectores de FKC nunca hacen abortar a otros lectores, y gran escalado de FKC para workloads bien distribuidos."*

## El matiz operativo

No es gratis. AWS advierte que **todas las operaciones DML sobre tablas referenciadas o referenciantes incurren en lecturas adicionales** para mantener la integridad, y recomienda hacer benchmark antes de meter una FK a una tabla. Además, como los conflictos concurrentes terminan en **fallos de transacción y no en esperas**, las aplicaciones deben implementar lógica de retry. Para filas muy referenciadas, sugieren mantener estables las columnas clave y mover los valores cambiantes a columnas no-clave para reducir conflictos.

La reacción de la comunidad ha sido mayormente positiva. Luc van Donkersgoed, principal engineer de Nederlandse Spoorwegen y creador de AWS News Feed, lo celebró: *"¡Lo lograron! Aurora DSQL ahora soporta foreign keys. La falta de FKs era la mayor brecha entre DSQL y el Postgres 'normal', bloqueando muchas migraciones. Esto hace a DSQL mucho más viable para entornos brownfield."*

Para los equipos que descartaron DSQL en la evaluación de 2024, este es el momento de darle una segunda mirada.

**Fuente:** [InfoQ](https://www.infoq.com/news/2026/09/aurora-dsql-foreign-keys/) / [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-dsql-foreign-key-constraints/).
