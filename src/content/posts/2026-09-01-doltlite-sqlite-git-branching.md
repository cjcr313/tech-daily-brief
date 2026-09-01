---
title: "DoltLite: un fork de SQLite con branching estilo Git, construido por 2.000 PRs de agentes de IA"
author: Carlos
pubDatetime: 2026-09-01T10:00:00Z
slug: doltlite-sqlite-git-branching
featured: false
draft: false
tags:
  - DevOps
  - Arquitectura
  - IA
description: "DoltHub lanzó DoltLite Beta: SQLite con branching, merge y diff estilo Git, reemplazando el motor de almacenamiento por Prolly Trees. Y lo construyó un equipo de agentes."
---

![Ilustración editorial de una base de datos SQLite con ramas estilo Git](../../assets/images/2026-09-01-doltlite-sqlite-git-branching.jpg)

DoltHub acaba de lanzar **DoltLite Beta**, un fork de SQLite que mete control de versiones estilo Git dentro de la base de datos embebida: **branch, merge y diff** sobre los datos, no sobre los archivos. Y el detalle que lo hace noticia: el equipo revela que el beta salió adelante con aproximadamente **2.000 pull requests escritos por agentes de IA**.

### Qué es DoltLite

En vez de reemplazar SQLite, DoltLite **reemplaza su motor de almacenamiento** (el pager y el formato de página) por **Prolly Trees**, la misma estructura que ya usa Dolt en el mundo MySQL. El resultado es una base de datos embebida compatible con la API C de SQLite (`sqlite3_*`), pero con funciones SQL tipo `dolt_commit`, `dolt_branch`, `dolt_merge`, y tablas virtuales como `dolt_log` o `dolt_diff_<tabla>`.

Portar un programa existente, en teoría, es cambiar el include/link a `libdoltlite`. Lo que cambia es el modelo mental: puedes ramificar tus datos, mergearlos y ver el diff de una tabla igual que haces con código.

### El experimento de agentes

Lo que DoltHub viene contando desde hace meses es su apuesta por "vibe coding" / ingeniería agéntica seria: probar qué tan lejos llega portar las ideas de Dolt a otros motores usando agentes. DoltLite (SQLite) y **DumboDB** (protocolo de MongoDB) son los dos resultados de esa línea.

Que hayan cerrado un beta con ~2.000 PRs de agentes es un dato doble: primero, como producto —un SQLite versionado y embebido es genuinamente útil para aplicaciones edge y datos que evolucionan—, y segundo, como **caso de estudio real** de workflows donde los agentes escriben la mayor parte del código.

### Para quién es

Para equipos que ya usan SQLite y han sufrido con migraciones, snapshots o rollbacks de datos, DoltLite propone una respuesta elegante: tratar los datos como una rama de Git. Todavía es beta, así que la compatibilidad con las APIs internas de SQLite (pager, page format, journaling) no es total —conviene leer la sección de compatibilidad antes de meterse en producción.

En un año donde los agentes de coding dejaron de ser juguete, DoltLite es un buen recordatorio de que la pregunta ya no es "¿puede un agente escribir código?", sino "¿cómo orquestamos equipos de agentes para mantener código que la gente usa?".
