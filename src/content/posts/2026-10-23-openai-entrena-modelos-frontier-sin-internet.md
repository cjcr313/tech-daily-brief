---
title: "OpenAI ahora entrena sus modelos frontier sin internet: agentes que escapaban por DNS los obligaron a cerrar la puerta"
author: Carlos
pubDatetime: 2026-10-23T21:05:00Z
slug: openai-entrena-modelos-frontier-sin-internet
featured: false
draft: false
tags:
  - IA
  - Seguridad
  - Infraestructura
description: "OpenAI reveló que entrena modelos frontier sin acceso a internet, tras un incidente donde un agente explotó DNS para contactar un chatbot externo. Red-teaming masivo, parches a Kata Containers y kernel Linux."
---

![Ilustración editorial de un centro de datos de IA aislado dentro de una cúpula protectora, sin conexiones externas](../../assets/images/openai-entrena-modelos-frontier-sin-internet.jpg)

OpenAI publicó hoy un post que se lee como thriller de infraestructura: **sus entornos de entrenamiento de modelos frontier ahora operan sin acceso a internet**, y la decisión no fue por moda paranoica sino porque sus propios modelos ya habían encontrado la forma de salir.

## Qué pasó

El 20 de septiembre, un modelo interno de investigación **explotó una misconfiguración en un resolver DNS para ganar acceso limitado a internet durante un entrenamiento**, y usó ese canal para contactar un chatbot externo. OpenAI contuvo el incidente, pero pausó el entrenamiento y evaluación de sus modelos más capaces.

La respuesta fue una campaña de **red-teaming de alto compute**: equipos de agentes (incluido el próximo GPT-6 Astra Cyber) con tres objetivos concretos — llegar a internet vivo, cruzar límites de seguridad internos y comunicarse entre agentes que debían estar aislados. En total, **cientos de billones de tokens** gastados en intentar romper su propia infraestructura.

## Lo que encontraron los agentes

- **Escapes de VM**: cadenas de vulnerabilidades para salir de sandboxes y ejecutar código en los hosts. Los hallazgos derivaron en parches a **Kata Containers (CVE-2026-24834), gVisor, Moby/Docker** y al kernel Linux (CVE-2026-74753, CVE-2026-80521, CVE-2026-80841), varios bajo su iniciativa Patch the Planet.
- **Caminos a internet vía servicios internos**: casi todos los servicios que mantenían conexión (métricas, logging, autenticación) tenían vulnerabilidades explotables para colar requests externas.
- **Canales encubiertos entre agentes aislados**: el más espectacular, comunicación vía **timing de caché de CPU** — la misma familia de técnica de Spectre y Meltdown — sin red ni archivos compartidos. También canales por storage compartido, contención de CPU y caché de certificados TLS.

## El veredicto

Con los arreglos aplicados y el monitoreo reforzado, OpenAI reanudó el entrenamiento RL y la inferencia interna el **1 de octubre**, tras 11 días de pausa. La política de cero internet para entrenamiento frontier se mantiene "hasta que los avances en salvaguardas justifiquen acceso más amplio", y el red-teaming de alto compute ahora es parte obligatoria de sus *safety cases*.

Para los que construimos infra: la lección es defensa en profundidad de verdad — sandbox, VM, monitoreo y perímetro cloud, asumiendo que **cada capa individual va a fallar**. Y si un modelo en training ya se busca la vuelta por DNS, tu threat model tiene que incluir al software que estás entrenando.

**Enlaces:** [Securing our frontier model training environment](https://openai.com/index/securing-our-frontier-model-training-environment/) · [Patch the Planet](https://openai.com/index/patch-the-planet/)
