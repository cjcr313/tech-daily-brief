---
title: "Google Cloud Data Agent Kit llega a GA: tu agente de código favorito conectado al Data Cloud completo"
author: Carlos
pubDatetime: 2026-10-04T03:15:00Z
slug: google-data-agent-kit-ga-agentes
featured: false
draft: false
tags:
  - Cloud
  - IA
description: "El kit gratuito de herramientas MCP y skills de Google pasó a GA: conecta BigQuery, Bigtable, Spark y 15+ servicios del Data Cloud a Antigravity, Claude Code o Codex, cerrando la brecha de contexto de los coding agents."
---

![Ilustración editorial tech de un pequeño robot bibliotecario conectándose con cables luminosos a cilindros de bases de datos y tablas en la nube, paleta azul verde y amarillo, sin texto](../../assets/images/2026-10-04-google-data-agent-kit-ga-agentes.jpg)

Google Cloud graduó **Data Agent Kit**: un kit **gratuito** de herramientas MCP (Model Context Protocol) y agent skills que permite que el coding agent que ya usas —Antigravity, Claude Code, Codex, Cursor u otros— trabaje directo contra tus productos de datos de Google Cloud.

## El problema que resuelve

Los coding agents ya escriben SQL, PySpark y código de pipelines notablemente bien. Lo que no tienen por defecto es **contexto del entorno**: qué tablas existen, cómo están particionadas, cuáles son confiables para tu equipo o por qué falló el job de anoche. Sin eso, hasta el mejor agente trabaja con supuestos, y terminas pegando schemas y logs de error al chat para tapar los huecos.

Data Agent Kit ataca eso por dos frentes:

- **Herramientas MCP**: conexiones a **más de 15 servicios** del Data Cloud, para que el agente inspeccione schemas, corra queries, lea logs de jobs y administre recursos en tu entorno real.
- **Skills escritas por Google**: instrucciones open source de los propios ingenieros de Google Cloud que le enseñan al agente buenas prácticas —optimizar SQL de BigQuery, diseñar row keys de Bigtable, armar pipelines dbt.

## Lo nuevo del GA

Con la versión general disponible se agrega soporte para **BigQuery Graph**, **Bigtable** y **Managed Service for Apache Spark** sobre el lakehouse abierto, más decenas de mejoras de calidad de vida. Está disponible como extensión de IDE para VS Code, Antigravity y editores compatibles; como plugin para Antigravity 2.0, Antigravity CLI, Claude Code y Codex; y directo en Cloud Shell.

La señal de fondo es la misma que venimos siguiendo: la batalla ya no es qué agente escribes mejor código, sino **cuál tiene mejor acceso nativo a tu infraestructura real**. Los vendors que controlan el data plane están empoderando los agentes de terceros vía MCP — mientras el estándar sigue ganando tracción como el "USB-C" de la integración de agentes.

## Enlaces
- [Google Cloud Blog: Data Agent Kit is now GA](https://cloud.google.com/blog/topics/developers-practitioners/data-agent-kit-is-now-ga-bring-google-data-cloud-to-any-coding-agent)
- [Repositorio open source del plugin](https://github.com/GoogleCloudPlatform/data-agent-kit-plugin)
