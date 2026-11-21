---
title: "Dynatrace: la ambición de IA en observabilidad corre más rápido que la ejecución"
author: Carlos
pubDatetime: 2026-11-11T13:05:00Z
slug: dynatrace-state-observability-2026-brecha-ia
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "State of Observability 2026 de Dynatrace: 87% ya usa agentes de IA en operaciones, pero solo 27% tiene visibilidad de cómo deciden. La brecha entre ambición y ejecución."
---

![Dynatrace: la ambición de IA en observabilidad corre más rápido que la ejecución](../../assets/images/dynatrace-state-observability-2026-brecha-ia.webp)

Dynatrace publicó su informe **State of Observability 2026** — encuesta a 1.202 líderes tecnológicos de empresas en 12 países, levantada en agosto — y el hallazgo central confirma una tensión que se venía barruntando: **las organizaciones están delegando operaciones en agentes de IA más rápido de lo que pueden verificarlos**.

## Los números que importan

- **87% ya usa agentes de IA** para observabilidad y operaciones IT
- **44% apunta a operaciones totalmente autónomas en cinco años**; hoy solo **12%** declara haber llegado a ese nivel
- Pero ojo: los humanos **verifican en promedio el 66% de las decisiones** tomadas por IA
- Y solo **27% tiene visibilidad real de cómo los agentes deciden y actúan**, aunque 43% considera esa visibilidad importante
- En nueve capacidades de observabilidad de IA medidas, **la ejecución queda en promedio 14 puntos por debajo de la importancia percibida**

## Plata y complejidad

La IA no solo promete ordenar el desorden: también lo está causando. El informe muestra que **43% cita la expansión de cargas IA/LLM/agénticas como fuente principal de complejidad** tecnológica, y el impacto financiero ya se siente:

- 78% espera que los presupuestos de observabilidad suban; en 96% de esos casos la adopción de IA es al menos un driver moderado
- 81% reporta mayor gasto en cómputo e infraestructura por cargas de IA
- 77% necesita más visibilidad para asignar costos correctamente

## OTel y seguridad, en vilo

- **OpenTelemetry**: 77% ya lo pasó de la fase de evaluación, pero solo **20% lo declaró estándar estratégico**. Adopción amplia, estandarización tímida
- 55% de los responsables de seguridad sufrió un incidente zero-day en el último año
- Solo 45% monitorea runtime de forma continua para vulnerabilidades realmente explotables — la diferencia entre "podría ser vulnerable" y "lo es, y afecta esto"

## El punto

Dynatrace resume la disyuntiva con dos conceptos que vale la pena memorizar: **observability of AI** (evidencia sobre el comportamiento de la IA) versus **AI-powered observability** (usar IA para operar mejor el stack). Las dos se necesitan; hoy el mercado tiene mucha de la segunda y poca de la primera.

La pregunta incómoda queda flotando: si tu agente toma una decisión operacional esta noche, ¿cómo sabes mañana qué hizo y por qué? Mientras esa respuesta siga siendo "no sé", la autonomía total sigue siendo presentación de ventas, no realidad operacional.

### Update: 2026-11-21

Dynatrace publicó la pieza estratégica que acompaña al reporte: **"State of Observability 2026: How to build an observability strategy for reliable AI"**. El corazón es un playbook de **seis acciones** para cerrar la brecha de ejecución que el reporte ya mostraba:

1. **Definir los outcomes que la IA debe entregar** — conectar disponibilidad, comportamiento, costo y resultado de negocio en una sola línea.
2. **Crear contexto operativo compartido** — unir IA, cloud, aplicaciones, seguridad y servicios de negocio (recordatorio: 62% opera en 3+ clouds y 56% usa 6+ herramientas de observabilidad).
3. **Instrumentar y evaluar continuamente** — la ejecución de observabilidad de IA va 14 puntos porcentuales detrás de su importancia percibida; hay que instrumentar desde desarrollo, no solo en producción.
4. **Aumentar la autoridad de la IA progresivamente** — más autonomía solo cuando se demuestren fiabilidad, explicabilidad y gobernanza.
5. **Aplicar evidencia continua a seguridad** — solo 45% prioriza vulnerabilidades por explotabilidad runtime real; conectar testing pre-producción con exposición real.
6. **Gestionar la telemetría como ciclo de vida** — estandarizar, filtrar, enriquecer, enrutar y optimizar; OpenTelemetry más allá de la evaluación (20% ya lo hizo estratégico).

La tesis de fondo no cambió desde nuestro post original: se necesita **observability of AI** y **AI-powered observability** a la vez, y el mercado tiene mucha de la segunda y poca de la primera. Lo nuevo es el cómo: un marco accionable para dejar de improvisar.

**Fuente:** [Dynatrace Blog](https://www.dynatrace.com/news/blog/state-of-observability-2026-how-to-build-an-observability-strategy-for-reliable-ai/)
