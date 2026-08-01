---
title: "La Casa Blanca acusa a Moonshot de destilar Fable 5 para crear Kimi K3 — Treasury amenaza sanciones"
author: Carlos
pubDatetime: 2026-07-26T04:05:00Z
slug: white-house-moonshot-distillation-fable5-sanciones
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Michael Kratsios acusó directamente a Moonshot AI de destilar el modelo Fable de Anthropic a escala industrial. El Treasury amenaza con sanciones y Entity List."
---

![Placeholder](../../assets/images/placeholder.jpg)


La guerra de modelos entre EE.UU. y China acaba de escalar a un nivel que no se veía antes. **Michael Kratsios**, director de la Oficina de Ciencia y Tecnología de la Casa Blanca, publicó en X una acusación directa y sin matices:

> *"We have information that Moonshot AI distilled Anthropic's Fable for the development of its K3 model. To do this they developed a sophisticated internal platform to conduct large scale distillation against U.S. models."*

O sea: la Casa Blanca está diciendo que Kimi K3 —el modelo que sacó de madre a la industria entera— no es original, sino que se construyó chupando los outputs de Fable 5 de Anthropic a escala industrial.

## La acusación en detalle

Kratsios no se quedó en la distillation. También acusó a Moonshot de:

- **Adquirir servidores Nvidia GB300** (generación Blackwell, prohibidos para empresas chinas)
- **Acceder a GB300s en Tailandia**, posiblemente para evadir controles de exportación
- Usar una **plataforma interna sofisticada** para switches entre múltiples métodos de extracción de outputs, diseñados para evitar detección

El punto de los GB300 es clave: esos servidores están en la lista de exportaciones prohibidas a China. Si se confirma, es una violación directa de los export controls.

## Treasury dobla la apuesta

**Scott Bessent**, Secretario del Treasury, remató la jugada horas después:

> *"Open source is not open season on American IP. When Chinese firms conduct covert, industrial-scale distillation attacks that cross the line into IP theft, sanctions and Entity List designations will be on the table."*

La amenaza es concreta: sanciones económicas y possible inclusión de Moonshot en la Entity List (la lista negra de empresas con las que compañías estadounidenses no pueden hacer negocios).

## ¿Pero la timeline cuadra?

Aquí hay un problema. **Fable 5 de Anthropic lleva disponible públicamente desde el 1 de julio**. Kimi K3 se lanzó el **16 de julio**. Expertos cuestionan que en 15 días se pueda destilar un modelo de 2.8 trillones de parámetros desde cero.

La distillation es una técnica legítima y ampliamente usada — OpenAI mismo la ofrece como feature en su API. Pero el argumento de la Casa Blanca no es que sea ilegal per se, sino que Moonshot lo hizo de forma **encubierta, a escala industrial, y violando términos de servicio**.

## El debate de fondo: ¿prohibir los modelos chinos open-weight?

El episodio aviva un debate que ya venía cocinándose en Washington. **Dean Ball**, ex asesor de IA de la Casa Blanca y ahora Head of Strategic Futures en OpenAI, ha argumentado que EE.UU. debería **restringir o efectivamente prohibir** el uso de modelos open-weight chinos para preservar la ventaja tecnológica estadounidense.

La ironía: mientras Washington habla de prohibir, los desarrolladores están votando con sus wallets. Kimi K3, DeepSeek V4 y otros modelos chinos open-weight ya dominan los rankings de uso en plataformas como OpenRouter.

## El contexto amplio

Esto no ocurre en el vacío. Es parte de una ofensiva más grande:

- **Jensen Huang** (Nvidia) envió una carta abierta a Washington pidiendo no restringir los modelos open-weight
- **Tobi Knaup** (cofundador de Databricks/Mesosphere) publicó un ensayo el 25 de julio argumentando que *"open-weight AI está teniendo su momento Kubernetes"*, y que EE.UU. debiera competir, no aislarse
- **Kimi K3 libera sus pesos abiertos mañana 27 de julio** — lo que hace que cualquier intento de prohibición sea prácticamente imposible de ejecutar técnicamente

La tensión entre innovación abierta, seguridad nacional y propiedad intelectual recién está empezando. Y lo que pase con Moonshot va a sentar precedente para toda la industria.
