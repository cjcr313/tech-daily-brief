---
title: "OpenAI rumbo al IPO: US$2 mil millones al mes de ingresos y una pérdida proyectada de US$14 mil millones"
author: Carlos
pubDatetime: 2026-08-18T04:10:00Z
slug: openai-ipo-ingresos-40b-perdida-14-mil-millones
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Los números que van saliendo del filing de OpenAI contrastan con la fiesta de Anthropic: ARR enterprise de US$40 mil millones y creciendo, pero US$14 mil millones de pérdida proyectada para 2026 y una valorización objetivo sobre el billón de dólares."
---

![Ilustración editorial de un gráfico bursátil ascendente hecho de nodos de red neuronal dorados, junto a una balanza que pesa monedas de oro contra una llama de billetes ardiendo, fondo azul marino profundo con luces ámbar](../../assets/images/2026-08-18-openai-ipo-ingresos-40b-perdida-14-mil-millones.jpg)

Mientras [Anthropic celebra su primer trimestre con utilidad operativa](/posts/anthropic-ipo-2-billones-octubre-record/), los números que van apareciendo del lado de OpenAI pintan un cuadro bien distinto: gigantesco, sí, pero con una fila de gastos todavía más gigante.

## Los números del filing

OpenAI presentó confidencialmente su paperwork ante la SEC en junio, y según los reportes que han ido filtrando detalles del documento (FT, TheStreet, TechTimes):

- **Ingresos**: del orden de **US$2 mil millones al mes**, es decir, en torno a US$24 mil millones anualizados
- **ARR enterprise**: cruzó los **US$40 mil millones en julio de 2026** — el doble que ocho meses atrás
- **Pérdida proyectada para 2026**: **US$14 mil millones**
- **Valorización objetivo**: **US$1 billón (trillion) o más**, con debut estimado entre fines de 2026 y 2027

Dato clave de la CFO Sarah Friar: por primera vez, **el negocio enterprise superó al consumer**. Para una empresa que quiere que el mercado la valore como software corporativo —y no como app de consumo con churn—, ese es exactamente el relato que el street quiere escuchar. Multiplicadores de enterprise software > multiplicadores de app viral.

## El contraste con Anthropic es la noticia

Acá está lo interesante del momento bursátil:

| | **Anthropic** | **OpenAI** |
|---|---|---|
| Ingresos Q2 2026 | US$11.500M (14x YoY) | ~US$6.000M/mes de ritmo anualizado mayor |
| Rentabilidad | Primera utilidad operativa ajustada | Pérdida proyectada de US$14.000M en 2026 |
| IPO | Octubre 2026 | Fines 2026 / 2027 |
| Target | US$2 billones | US$1 billón+ |

*(Ojo con comparar peras con manzanas: ARR enterprise, ingresos GAAP y run-rate son métricas distintas, y además hay partidas contables —warrants asociados a Microsoft— que recortan los ingresos GAAP que reporta OpenAI.)*

Dos empresas que venden esencialmente lo mismo —tokens de frontier models— con estructuras de pérdida radicalmente distintas. El market va a tener que decidir si premia el crecimiento puro de OpenAI o la disciplina de márgenes de Anthropic. Apuesta segura: probablemente premie a ambos, porque esto sigue siendo un mercado de FOMO.

## Por qué pierde tanta plata teniendo esos ingresos

- **Compute**: la construcción de datacenters es la mayor capex tecnológica de la historia, y OpenAI paga el peaje en múltiplos
- **Guerra de precios**: los modelos chinos open-weight (GLM, DeepSeek, Qwen) comprimen márgenes desde abajo y obligan a mover el precio
- **Carrera de talento e infraestructura**: nada de esto es barato, y parar es morir

## Qué significa para los que operamos infra

1. **Dos mega-IPOs en camino** = los dos vendors dominantes de IA enterprise van a responder ante accionistas. Traducción: presión por márgenes que históricamente termina en ajustes de pricing de API. Si tu plataforma depende de una de estas APIs, hedging multi-vendor deja de ser paranoia.
2. **El gasto enterprise de IA sigue consolidándose**: US$40 mil millones de ARR no salen de experimentos, salen de contratos serios que ya están en producción.
3. **La ironía se mantiene**: modelos que se escapan de sandboxes, [equipos de seguridad disueltos](/posts/openai-disuelve-equipo-preparedness-safety/) camino a la bolsa… y el mercado aplaudiendo igual. Crece primero, gobierna después.

## Enlaces

- [TheStreet — OpenAI enterprise revenue passes consumer](https://www.thestreet.com/investing/openai-enterprise-revenue-passes-consumer-friar-ipo)
- [TechTimes — OpenAI reaches $40B revenue](https://www.techtimes.com/articles/324713/20260817/openai-reaches-40b-revenue-safety-leaders-exit-models-break-containment.htm)
- [Financial Times — OpenAI upheaval mounts as Altman readies IPO push](https://www.ft.com/content/53082739-7714-4aae-9816-e55ab423cbee)

### Update: 19-20 de agosto — WSJ confirma lo que el filing insinuaba: Anthropic superó a OpenAI en ingresos por primera vez

El WSJ filtró los números de Q2 y la comparativa hay que actualizarla con datos duros:

- **OpenAI Q2**: ingresos de **US$6.700M**, creciendo solo 18% respecto a Q1 — clara desaceleración, con pérdidas profundizándose. La causa según el reporte: ChatGPT frenando su crecimiento.
- **Anthropic Q2**: **US$11.600M** — más del doble secuencial, **14x respecto a los US$787M del mismo trimestre de 2025** — y con **utilidad operativa positiva**. El motor: Claude Code y la adopción enterprise para coding.
- **El quiebre histórico**: primera vez que Anthropic supera a OpenAI en ventas. El underdog dejó de serlo.
- **El matiz de OpenAI**: asegura a inversores que el crecimiento re-aceleró en el trimestre actual tras los lanzamientos de julio. Según CoinDesk, además, la pausa de entrenamiento frontier (agentes que saltaron controles en tests de ciberseguridad, ver Astra) también pesa en el timing.
- **Adopción enterprise (Cryptopolitan)**: Anthropic llega a **43,5%** de las empresas estadounidenses con suscripciones de IA (+1,1 pts); OpenAI queda en 39,7% (+0,23 pts); xAI escala a 4%.

La lectura para el IPO: Anthropic sale en octubre con viento de cola y prueba de rentabilidad; OpenAI va a tener que vender la historia del "crecimiento re-acelerado" contra números que hoy muestran lo contrario. El mercado del coding enterprise —donde antes se asumía dominio de OpenAI— ya tiene otro dueño de categoría.

**Fuentes del update:** [WSJ vía PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-beats-openai-in-revenue-for-first-time/), [CoinDesk](https://www.coindesk.com/markets/2026/08/19/openai-trails-anthropic-as-losses-deepen-and-altman-pauses-frontier-ai-training), Cryptopolitan
