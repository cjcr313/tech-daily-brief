---
title: "El 'Red Agent' de Wiz hackea el pipeline de Snowflake con un simple GitHub issue: la autopsia del bug de CI/CD"
author: Carlos
pubDatetime: 2026-08-18T11:00:00Z
slug: wiz-red-agent-snowflake-github-actions-inyeccion-cicd
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
description: "El agente autónomo de pentesting de Wiz explotó una inyección en un workflow de GitHub Actions de Snowflake usando solo un issue malicioso, y se llevó un token de Jira con acceso a ingeniería, cumplimiento de seguridad y bug bounty."
---

![Ilustración de un agente autónomo de seguridad explotando un pipeline de CI/CD mediante un issue malicioso en una plataforma de código](../../assets/images/2026-08-18-wiz-red-agent-snowflake-github-actions-inyeccion-cicd.jpg)

Wiz publicó la autopsia de una de esas demostraciones que duelen: su **Red Agent** —un agente autónomo de pentesting con IA— encontró y explotó una inyección de comandos en un workflow de GitHub Actions del repositorio público `snowflakedb/snowflake-connector-net` de Snowflake. El vector de ataque: **abrir un GitHub issue con título y cuerpo trucados**. Nada más.

## ¿Cómo funcionó el ataque?

El workflow `jira_issue.yml` se disparaba cuando alguien abría un issue público e insertaba **directamente el título y cuerpo del issue (controlados por el atacante) dentro de un bloque `run:` de shell**, con las variables `JIRA_BASE_URL`, `JIRA_USER_EMAIL` y `JIRA_API_TOKEN` expuestas en el mismo paso.

Para colmo, el workflow intentaba filtrar verificando `github.event.pull_request.user.login`... cuando el evento era un *issue*, no un pull request. Y GitHub evalúa las propiedades inexistentes como string vacío, así que el filtro de bots simplemente no hacía nada.

El Red Agent de Wiz lo resolvió como un pentester real: el primer payload falló con un error de sintaxis de shell, analizó el error, **cambió de estrategia**, y en el segundo intento obtuvo un callback out-of-band desde el runner de GitHub Actions — con el token de Jira incluido.

## ¿Qué se llevó?

El token pertenecía a `qa@snowflake.net` y daba **acceso de lectura a proyectos de Jira de ingeniería, cumplimiento de seguridad y tracking de bug bounty** de Snowflake. Nada de código fuente del conector afectado, pero inteligencia interna de la más fina.

Los detalles procesales:

- Reportado por HackerOne el **23 de junio de 2026**; fix mergeado el mismo día.
- El workflow vulnerable llegó a la rama default el 18 de junio — ventana de exposición de solo **5 días**.
- Token rotado el 24 de junio; Snowflake dice que no encontró evidencia de acceso no autorizado más allá del test autorizado.

## El giro inesperado: ¿lo escribió Copilot?

Aquí viene lo incómodo. Wiz describió la falla como resultado de un cambio de **GitHub Copilot Autofix**, y de hecho el commit squash del PR #1218 lista a Copilot Autofix entre sus co-autores. Pero el historial fino cuenta otra historia: el commit co-autoreado por Copilot cambió `jira_close.yml`, mientras que el refactor inseguro de `jira_issue.yml` aparece en un commit separado de agosto de 2025 atribuido a un desarrollador humano.

Es decir: **la IA participó del PR, pero la evidencia no establece que escribió las líneas vulnerables**. Una lección sobre no sacar conclusiones rápidas cuando "el bot lo hizo" es la explicación conveniente.

## La lección para tu equipo

Esta clase de vulnerabilidad de inyección en workflows está documentada por GitHub desde julio de 2025: nunca expandas datos no confiables (issues, PRs, comentarios) directamente dentro de `run:` — pásalos por variables de entorno intermedias. El fix de Snowflake fue exactamente eso.

Con agentes de IA escaneando repos públicos 24/7 buscando estos patrones (los de Wiz con permiso, otros no necesariamente), los pipelines de CI/CD son el nuevo perímetro. Tu `.github/workflows/` merece el mismo escrutinio que tu código de producción. Revisa esos workflows hoy — o alguien (o algo) lo hará por ti.
