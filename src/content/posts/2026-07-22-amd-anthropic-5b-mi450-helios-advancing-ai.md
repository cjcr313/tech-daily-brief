---
title: "AMD le mete US$5 mil millones a Anthropic y le declara la guerra a NVIDIA con la era Helios"
author: Carlos
pubDatetime: 2026-07-22T12:00:00Z
slug: amd-anthropic-5b-mi450-helios-advancing-ai
featured: false
draft: false
tags:
  - IA
  - Infraestructura
  - Cloud
description: "En su evento Advancing AI 2026, AMD anunció inversión de US$5B en Anthropic, deal de 2 GW con MI450, Zen 6 Venice en TSMC 2nm, y el rack Helios con 72 GPUs. NVIDIA tiene competencia real."
---

El evento **Advancing AI 2026** de AMD arrancó hoy en Moscone West, San Francisco, y vieron todos los fierros. En medio del lanzamiento de Zen 6 "Venice", los nuevos Instinct MI450, y el sistema rack-scale Helios, AMD tiró la bomba: **inversión estratégica de hasta US$5 mil millones en Anthropic**.

## El deal AMD-Anthropic

Los términos son simples y monumentales:

- Anthropic desplegará **hasta 2 gigawatts de AMD Instinct MI450 Series** en soluciones rack-scale Helios
- AMD hará una **inversión de capital de hasta US$5B** en Anthropic
- Los chips se empiezan a instalar desde **H1 2027**
- Anthropic puede complementar con compute rentado de otros providers

Para ponerlo en perspectiva: **2 GW es aproximadamente el consumo eléctrico de una ciudad pequeña**. Esto no es un deal de "compramos algunas GPUs para probar". Es un compromiso de infraestructura a escala continental.

Y el mensaje para NVIDIA es directo: **Anthropic, uno de los tres labs de IA más importantes del mundo, va a correr su infraestructura de inferencia y training en AMD**.

## Zen 6 "Venice" — primer x86 en TSMC 2nm

El protagonista de hardware es **EPYC Venice**, y lo importante no es solo el core count, sino cómo lo logra:

- **Primer server processor x86 del mundo** en producción con **TSMC N2** (2 nanómetros)
- Usa transistores **GAA nanosheet** (Gate-All-Around), reemplazando los FinFET que usábamos desde 2011
- **~15% más performance** a igual potencia, o **~30% menos consumo** a igual performance vs. N3E (generación anterior)
- **256 cores** por socket (8 CCDs × 32 cores Zen 6c cada uno)
- **16 canales DDR5** → 1.6 TB/s de ancho de banda de memoria por socket
- **PCIe Gen 6** → 128 GB/s por lane por dirección

**Socket nuevo (SP7)**: incompatible físicamente con SP5 (Turin). Esto significa **upgrade de plataforma completo**, no swap de CPU.

La implicancia práctica: Venice está diseñado para **alimentar GPUs de IA**. El doble de ancho de banda host-to-accelerator vs. Turin significa que las GPUs no se quedan esperando datos del CPU.

## Instinct MI450 Series y Helios

Tres chips en la línea **CDNA 5**:

| Chip | Target clave | Memoria |
|------|-------------|---------|
| **MI455X** | Helios rack, AI training/inference masivo | 432 GB HBM4, 19.6 TB/s |
| **MI450X** | Training e inference a gran escala | — |
| **MI430X** | HPC y "sovereign AI" (FP64) | — |

**Helios** arma **72 MI455X por rack** — cada una con 432 GB de HBM4 a través de 16 stacks, con un ancho de banda de 19.6 TB/s por chip. El interposer es de **2,048 bits** (el doble que HBM3e).

Y ojo: las tarjetas MI455X **no son compatibles con infraestructura NVIDIA**. Helios es una decisión de plataforma completa, no un componente que metes en un server existente.

## El contexto competitivo

AMD ahora tiene:
- **Meta, Microsoft, Oracle y OpenAI** con compromisos de despliegue
- **Anthropic** con un deal de US$5B + 2 GW
- Un stack completo: CPU (Venice) + GPU (MI450) + Rack (Helios) + Software (ROCm)
- **Ventana de 12+ meses** sin competencia real de Intel en P-core (Diamond Rapids no llega hasta mediados de 2027)

Lisa Su da el keynote mañana **23 de julio a las 9:30 AM PT**. Se espera roadmap MI500-series para 2027 y más detalles de ROCm.

## La lectura

NVIDIA sigue dominando el mercado de AI GPUs, pero AMD ya no es "la alternativa". Con Anthropic comprometido, Microsoft desplegando en Azure, y un stack que va del transistor (GAA en 2nm) hasta el rack completo, **la pregunta para cualquier equipo de infraestructura de IA hoy es: ¿necesitas realmente esperar a NVIDIA o hay una opción viable ya?**

La respuesta de AMD: **la opción existe, se llama Helios, y arranca el próximo año.**

**Fuentes:** [AMD IR](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus), [CNBC](https://www.cnbc.com/2026/07/22/amd-anthropic-ai-chip-investment.html), [TechTimes](https://www.techtimes.com/articles/321257/20260722/amd-advancing-ai-2026-opens-zen-6-venice-helios-open-ai-rack-bet.htm)
