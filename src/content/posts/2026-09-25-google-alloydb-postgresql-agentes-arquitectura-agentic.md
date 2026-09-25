---
title: "Google estrena AlloyDB PostgreSQL for agents: una base de datos que escala a miles de nodos sin tocar producción"
author: Carlos
pubDatetime: 2026-09-25T15:00:00Z
slug: google-alloydb-postgresql-agentes-arquitectura-agentic
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Bases de Datos
description: "Google Cloud presenta AlloyDB PostgreSQL for agents (preview), una arquitectura de base de datos agéntica con aislamiento total y escalado de cero a miles de nodos."
---

![Ilustración editorial tech de una base de datos PostgreSQL rodeada de miles de nodos de agentes de IA conectados, con aislamiento visual entre el clúster de producción y los nodos efímeros, tonos azul profundo y verde](../../assets/images/2026-09-25-google-alloydb-postgresql-agentes-arquitectura-agentic.jpg)

Google Cloud acaba de anunciar **AlloyDB PostgreSQL for agents (en preview)**, y el claim es ambicioso: una base de datos relacional pensada desde cero para la era de los agentes autónomos, capaz de escalar de **cero a miles de instancias de cómputo en segundos** y volver a cero cuando los agentes terminan, todo sin tocar el clúster de producción.

## Los tres pilares (o no es agéntica)

La propuesta parte de una crítica a las arquitecturas actuales. Google sostiene que las bases de datos tradicionales —replicas, storage compartido, object storage con cache— siempre sacrifican al menos una de tres cosas:

- **Aislamiento:** los agentes no pueden compartir infraestructura física con producción, o una ráfaga de consultas tira abajo el sistema de registro.
- **Latencia:** el baseline debe ser I/O sub-milisegundo, sin "precipicios" cuando un cache falla y hay que leer de object storage.
- **Escala:** los agentes piden miles de nodos en segundos y los liberan en un minuto. El pre-provisioning es inviable.

La lectura de Google: si una arquitectura no cumple las tres a la vez, "no es realmente agéntica".

## Cómo lo resolvieron

La arquitectura combina tres capas de infraestructura que Google ya tiene corriendo a escala:

- **Colossus** como storage distribuido: I/O directo sub-milisegundo, sin cache intermedia que "falle" y sin tier de object storage frío.
- **Jupiter** como red: 13 petabits por segundo de bisection bandwidth, para que los nodos de agentes se agenden en cualquier parte sin cuellos de botella.
- **Compute serverless con microVMs:** cada nodo de agente es una instancia completa de PostgreSQL en un microVM aislado, con acceso read-only al estado up-to-the-second de producción.

La frase que resume todo: **"Share the data. Share nothing else."** Los agentes leen datos frescos de producción vía MCP, pero nunca comparten un solo componente físico con el clúster principal.

## Los números que muestran

En benchmarks internos, escalar de 1 a 1.000 nodos de agente produjo:

- **Cero degradación** del clúster primario.
- **773x de throughput**, llegando a **3 millones de QPS** y más de 8 millones de IOPS.
- Escaneos completos agregados por sobre **1 terabit por segundo**.

Y compararon contra un servicio comercial de arquitectura "object storage + block servers": al agregar réplicas de lectura, el throughput apenas creció <2x y el primario **cayó más de 75%**.

## Por qué esto importa

Hasta ahora, darle a los agentes acceso directo a datos operacionales en vivo significaba arriesgar la estabilidad del sistema que sostiene el negocio. La apuesta de AlloyDB es romper ese trade-off: **agentes razonando sobre la verdad empresarial en tiempo real, sin exponer producción**.

Es una señal clara de hacia dónde va la infraestructura de datos: no basta con servir una API o un vector store. El "sistema de registro" mismo tiene que volverse agéntico.

**Fuente:** Google Cloud Blog — "Announcing PostgreSQL for agents in AlloyDB" y "AlloyDB's agentic database architecture".
