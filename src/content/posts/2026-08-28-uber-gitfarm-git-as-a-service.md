---
title: "Uber presenta GitFarm: Git como servicio para monorepos gigantes"
author: Carlos
pubDatetime: 2026-08-28T16:10:00Z
slug: uber-gitfarm-git-as-a-service
featured: false
draft: false
tags:
  - DevOps
  - Infraestructura
  - Arquitectura
description: "Uber abrió GitFarm, una plataforma que ejecuta operaciones Git como servicio centralizado y elimina los clones locales: checkouts en menos de 500 ms y hasta 80% menos consumo de recursos."
---

![Ilustración editorial de una granja centralizada de repositorios Git sirviendo operaciones a múltiples servicios a través de una API, estilo tech editorial, sin texto](../../assets/images/2026-08-28-uber-gitfarm-git-as-a-service.jpg)

Uber publicó **GitFarm**, una plataforma de *Git como servicio* para ejecutar operaciones Git a través de sus monorepos de gran escala. La idea central: mover las operaciones de repositorio a un servicio compartido y **eliminar los clones locales**, bajando el consumo de recursos en más del 80%.

## El problema: clonar ya era el cuello de botella

Los sistemas de automatización de Uber invocan Git **millones de veces al día** en monorepos de Go, Java, Python, Web, Android e iOS. Hasta ahora, cada servicio mantenía un checkout completo del repositorio, incluso para operaciones tan simples como leer un archivo, validar un cambio o calcular un merge base.

Y clonar no es gratis: clonar el monorepo de Go de Uber toma **~15 minutos** y exige unas **6 cores, 32 GB de RAM y más de 40 GB de disco**. Multiplica eso por miles de servicios y tienes un cuello de botella de infraestructura en toda regla.

## Qué es (y qué no es) GitFarm

GitFarm **no es un sistema de control de versiones**. Es un **cliente Git centralizado** que ejecuta comandos Git estándar en nombre de otros servicios, expuesto vía una **API gRPC de alto rendimiento**. Un Gateway autentica y autoriza los requests antes de ruteo a clusters backend, donde los comandos corren en **sandboxes efímeros aislados**.

El backend mantiene clones *bare* de los repos y los sincroniza con upstream mediante updates push-based y fetches periódicos. También mantiene pools de checkouts y contenedores-sandbox listos: cuando llega un request, monta un **checkout pre-calentado** en un sandbox disponible en vez de clonar desde cero. Resultado: checkouts completos en **menos de 500 ms** y se eliminan los cold starts de 10-15 minutos a nivel de host.

Soporta flujos multi-comando mediante **sesiones gRPC de streaming bidireccional**, así comandos como traer una rama, calcular un merge base y pushear una referencia derivada corren secuencialmente contra el mismo checkout, sin reinicializar estado a cada rato.

## Los números del impacto

- Un servicio de *code ownership* eliminó checkouts locales en seis hosts: CPU bajó de **70+ cores a 16**, memoria de **400 GB a 32 GB**, y el startup de **15-20 min a menos de 1 minuto**.
- Un servicio de auditoría de compliance que procesa 10.000-20.000 eventos/hora sobre 9.000 repos bajó la latencia mediana de **110-160 segundos (con Buildkite) a 20-30 segundos**, eliminando overhead de scheduling, inicialización de workspace y sync de repositorio.

De yapa, la arquitectura también podría servir para **workloads de agentes de coding**: en vez de que cada agente haga su propio clone, consume Git como servicio.

## El detalle fino

Uber lo describe como un *Git client as a service*, no un SCM. Los clientes que toleran cierta staleness pueden usar el estado sincronizado del backend; los que necesitan el último upstream ejecutan `git fetch` explícito. La gracia es que elimina el costo fijo de "clonar y mantener un repo" para servicios que solo necesitan *algunas* operaciones de vez en cuando.

Fuente: [Uber Builds GitFarm to Run Git Operations as a Service](https://www.infoq.com/news/2026/08/uber-gitfarm-git-as-a-service/) (InfoQ) y [GitFarm: Git as a Service for Large-Scale Monorepos](https://www.uber.com/us/en/blog/gitfarm-as-a-service/) (Uber Blog).
