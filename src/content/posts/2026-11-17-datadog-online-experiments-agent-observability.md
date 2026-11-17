---
title: "Datadog lleva la experimentación en producción a la observabilidad de agentes IA"
author: Carlos
pubDatetime: 2026-11-17T13:05:00Z
slug: datadog-online-experiments-agent-observability
featured: false
draft: false
tags:
  - Observabilidad
  - IA
description: "Datadog integra Online Experiments con Agent Observability para comparar versiones de agentes IA con tráfico real: calidad, costo, tokens y errores en un mismo panel."
---

![Ilustración editorial tech: dos versiones de un agente IA como caminos de luz que se dividen frente a un dashboard de monitoreo con métricas y trazas distribuidas, paleta azul profundo y naranja, estilo flat moderno](../../assets/images/2026-11-17-datadog-online-experiments-agent-observability.jpg)

¿Cuántas veces un cambio de modelo o de prompt que brillaba en los tests se cayó feo cuando llegó el usuario real? Datadog apuntó directo a ese problema: extendió su plataforma **Agent Observability** con **Online Experiments**, que permite comparar versiones de agentes IA contra **tráfico real de producción** en vez de depender solo de datasets de evaluación predefinidos.

## La idea central

Las evaluaciones offline siguen siendo necesarias, pero son tan representativas como el dataset detrás de ellas. El tráfico real es otra liga: peticiones inesperadas, workflows nuevos y respuestas de tools que cambian sin aviso. Online Experiments ataca eso con el clásico patrón de experimentación: una versión **control** y una **variante**, con el tráfico de producción repartido aleatoriamente entre ambas vía **feature flags**, así puedes exponer el cambio a un porcentaje chico de usuarios antes de largarlo a todos.

Lo interesante es que combina dos mundos que usualmente viven separados:

- **Scores de evaluación**: calidad, precisión y completitud de las respuestas (con evaluadores tipo LLM).
- **Métricas operacionales**: duración de ejecución, consumo de tokens, costo estimado y errores de workflow.

Y todo conectado a las **trazas individuales del agente**: llamadas a tools, argumentos y resultados, para entender *por qué* una variante se comportó distinto.

## El ejemplo que cuenta la historia

En su propio caso, Datadog comparó **GPT-5.6 Luna contra GPT-6 Luna** repartiendo el tráfico 50/50, con un evaluador LLM que puntuó la calidad de investigación de 1 a 5. Resultados:

- **Costo estimado: -44,3%** con el modelo nuevo. La felicidad.
- **Calidad: 3,84 vs 3,86**. Prácticamente empate.

Pero la letra chica operacional mostró lo que el score no decía: el modelo nuevo tenía **mayor duración de ejecución y más errores de workflow** (aunque con intervalos de confianza amplios), y al inspeccionar trazas apareció que **mandaba parámetros inválidos a las tools con más frecuencia**, recuperándose por lo general con retries. Ese comportamiento era invisible en el puntaje general. Con ese hallazgo mejoraron el manejo de tools antes de migrar, y las llamadas fallidas terminaron convertidas en casos de regresión para los tests offline. Un círculo virtuoso bastante elegante.

## No está solo en esto

Datadog no tiene el patio para sí solo: **LangSmith** y **Langfuse** ya ofrecen trazas y evaluación de agentes, y plataformas de experimentación como **LaunchDarkly** manejan el lado feature flags. Lo que diferencia la jugada de Datadog es tener la experimentación, la telemetría de producción y las trazas de ejecución en el mismo lugar, sin armar un Frankenstein de tres herramientas.

**El takeaway**: si tu equipo está metido en agentes IA, la evaluación offline sola no alcanza. Medir contra tráfico real, con costo y errores en la misma vista, dejó de ser lujo y pasó a ser requisito. Eso, o descubrir el problema cuando los usuarios ya lo tuitearon.
