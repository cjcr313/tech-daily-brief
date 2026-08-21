---
title: "GitHub confiesa: la caída del 17 de agosto fue pura falta de capacidad — los commits se duplicaron a 2.900 millones al mes y la plataforma no dio abasto"
author: Carlos
pubDatetime: 2026-08-21T04:15:00Z
slug: github-confiesa-falla-capacidad-commits-duplicados
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "El postmortem oficial del outage de 7h47m confirma que no fue un cambio de código ni config: fue la demanda. Desde abril los commits mensuales pasaron de 1.400 a 2.900 millones, Azure ya carga el 58% de la plataforma y vienen arquitecturas de lectura ilimitada."
---

![Ilustración editorial de un rack de servidores desbordado por una ola de commits, medidores de capacidad en rojo y un reloj marcando casi 8 horas](../../assets/images/2026-08-21-github-confiesa-falla-capacidad-commits-duplicados.svg)

GitHub publicó el postmortem del outage del **17 de agosto** — ese que duró **7 horas y 47 minutos** y se tiró abajo github.com, la autenticación, Actions, las APIs, PRs, issues y Copilot de un solo plumazo. Y la confesión es de las que duelen: **no fue un cambio de código ni de configuración. Fue capacidad, pura y simple**. "Fallamos en escalar componentes críticos antes de que la demanda superara su capacidad", admite Vladimir Fedorov en el GitHub Blog.

## Qué pasó exactamente

- El tráfico alcanzó un **nuevo peak** y un componente crítico de infraestructura en su datacenter de **Central US** no escaló a tiempo.
- La presión de capacidad se propagó en cadena por los sistemas, generando **fallas de autenticación** que tumbaron múltiples servicios.
- La recuperación requirió rerutear tráfico, aislar la infra afectada y restaurar por etapas. La mayoría de los servicios volvió ese mismo día, pero **Copilot se demoró más**: sus errores dispararon un **retry loop del lado del cliente** que aumentó el tráfico justo durante la recuperación. Tuvieron que mitigar eso antes de restaurar el tráfico completo.

Lo de los retries es un clásico de manual: el mismo mecanismo que supuestamente te salva (reintentar cuando algo falla) se convierte en un DDoS interno cuando todos reintentan a la vez. Por eso uno de los cambios inmediatos announceados es aplicar **retry limits, retry budgets y timeouts variables consistentes** entre servicios, para evitar retry storms y carga en cascada. Si tu plataforma tiene retries sin budget, la lección aplica en casa.

## El número que lo explica todo: 2.900 millones de commits al mes

Acá está el dato brutal del postmortem: **desde abril, los commits mensuales crecieron de 1.400 millones a 2.900 millones**. Se duplicaron en cuatro meses. Y no es que la humanidad haya descubierto la programación de repente — son los **agentes de IA** metiendo commits a diestra y siniestra.

Para calibrar: el COO Kyle Daigle contaba en abril que GitHub procesó **1.000 millones de commits durante todo 2025** y manejaba ~275 millones semanales. Y según The Information, los PRs abiertos por agentes de IA pasaron de ~4 millones en septiembre 2025 a **17 millones en marzo de este año** — cuadruplicándose en seis meses.

La ironía es perfecta: **la IA que se supone nos hace más productivos está comiendo la infraestructura sobre la que se construye**. Copilot y los agentes generan la carga que tumba a Copilot y a todo lo demás. El outage del 6 de agosto (falla de Actions) fue el mismo patrón: fallas de capacidad en el núcleo.

## Qué está haciendo GitHub al respecto

- **Capacidad bruta**: más de **3 millones de cores de CPU**, **120 petabytes de storage de alta velocidad** y bastante capacidad de red adicionadas. Instalaron todo el hardware que la potencia eléctrica de sus datacenters permitía.
- **Migración acelerada a Azure**: Azure ya sirve **~58% de la carga de la plataforma y la mitad de las operaciones Git**, contra un 12% en mayo. La migración de Microsoft de GitHub a su propia nube va en serio y rápido.
- **Arquitectura de lectura ilimitada**: el próximo hito es una arquitectura donde la capacidad de lectura escale linealmente con el número de readers — "operaciones de lectura ilimitadas" — con rollout gradual empezando por los monorepos más grandes.
- **Aislamiento de sistemas críticos**: removiendo dependencias compartidas entre componentes para que un fallo no se propague.
- **Operaciones**: equipos redirigidos a disponibilidad, testing más fuerte, rollouts más seguros, mejor observabilidad y alertas más efectivas. Además, están revisando alertas de CPU/memoria de "baja prioridad" para detectar componentes que podrían fallar en spikes súbitos.

## Por qué importa

1. **Capacity planning ya no es historia anual**. Si tu carga puede duplicarse en cuatro meses (por agentes, crecimiento o ambos), el headroom tradicional queda chico. Planifica por picos de comportamiento automatizado, no por crecimiento orgánico.
2. **Retry budgets dejan de ser opcional**. El mecanismo exacto que prolongó este outage existe en casi cualquier sistema distribuido medianamente complejo.
3. **La concentración sigue pagando el precio**: ya lo vimos con Cloudflare y sus 13 incidentes en 8 días. Todo el ecosistema developer viviendo en una plataforma tiene consecuencias sistémicas cuando esa plataforma no escala al ritmo de la IA. Y mientras tanto, Cursor recién lanzó Origin como alternativa…
4. **La migración a Azure es la historia de fondo**: GitHub operándose mayoritariamente sobre infra de Microsoft cambia la conversación de "qué pasa si Azure falla" para una cantidad enorme de equipos.

## Enlaces

- [GitHub Blog — The August 17 outage, and the work ahead](https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/)
- [The New Stack — GitHub now sees 2.9 billion commits a month](https://thenewstack.io/github-2-9b-monthly-commits/)
- [Engadget — GitHub says commits have doubled in the last four months](https://www.engadget.com/2241272/github-says-commits-have-doubled-in-the-last-four-months/)
- [Root cause analysis completo en GitHub Status](https://www.githubstatus.com/incidents/zkxwbgr0cnmx)
