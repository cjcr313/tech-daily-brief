---
title: "OpenAI actualiza su Model Spec: ahora todo gira alrededor de cinco valores"
author: Carlos
pubDatetime: 2026-10-29T21:10:00Z
slug: openai-model-spec-cinco-valores
featured: false
draft: false
tags:
  - IA
description: "OpenAI reorganizó su Model Spec alrededor de cinco valores (fidelidad a la intención humana, minimización de daño, honestidad, agencia humana y cuidado), jubiló la guía de estilo detallada y renombró 'the assistant' a GPT."
---

![Ilustración editorial tech de un documento estructural flotante hecho de capas geométricas concéntricas que emanan de un núcleo luminoso, rodeado de cinco prismas de colores ordenando la luz en haces, sobre fondo azul profundo minimalista, estilo ilustración tecnológica profesional, sin texto](../../assets/images/2026-10-29-openai-model-spec-cinco-valores.jpg)

Mientras los modelos de OpenAI toman acciones cada vez más consequenciales en el mundo, la empresa actualizó hoy su **Model Spec** — el documento público que describe cómo quiere que se comporten sus modelos. Y el cambio estructural es claro: toda la guía se reorganizó alrededor de **cinco valores fundamentales**.

## Los cinco valores

1. **Fidelidad a la intención humana** (*faithfulness to human intent*) — el fundamento: entender lo que la gente realmente valora y quiere lograr, no solo seguir instrucciones al pie de la letra
2. **Minimización de daño** — límites de seguridad firmes y consecuencias previsibles de las acciones
3. **Honestidad y transparencia** — decir la verdad sobre lo que el modelo sabe, hace y no sabe
4. **Agencia humana** — fortalecer la capacidad de la gente de entender, elegir y actuar por sí misma
5. **Cuidado** (*care*) — atender las circunstancias de los afectados y seguir normas sociales y profesionales

La idea de fondo es de *value alignment*: que los modelos apliquen valores humanos en situaciones que sus instrucciones no cubren explícitamente, sin pisotear la intención ni el oversight de las personas. Ejemplo del propio Spec: al comparar ofertas de trabajo, el modelo puede usar prioridades que el usuario compartió antes (horarios predecibles, por ejemplo), pero haciendo esas suposiciones **visibles y corregibles** — nunca steerando en silencio.

## Qué se agrega y qué se jubila

- **Nueva guía sobre contexto, oversight y agencia**, con defaults de comportamiento ajustados
- **Chain of command actualizado**: OpenAI escribe el Spec y pone los límites, los developers dirigen las aplicaciones dentro de esos límites, y los usuarios dirigen el trabajo sujeto a esas restricciones
- **Se retira la mayoría de la guía detallada de estilo**: el estilo debe adaptarse a las preferencias de la gente (agregadas, por idioma/cultura e individuales), no dictaminarse desde el Spec. Quedan defaults fuertes como abordar preguntas con perspectiva objetiva
- Cambio simbólico pero elocuente: el modelo ahora se llama **"GPT"** en el Spec, no "the assistant" — reflejando la amplitud de casos de uso y despliegue

Además, OpenAI dice estar explorando **nuevos métodos de entrenamiento** para que los modelos aprendan estos valores y entiendan *por qué* importan los principios — "hacer lo correcto por las razones correctas" — con resultados que compartirán en futuras actualizaciones.

## Honestidad incluida

Punto refrescante: el propio post admite que "los modelos aún no reflejan completamente este Spec". Es una declaración de dirección, no un claim de llegada. Y hay sitio de feedback abierto para discutir el balance y lo que falte.

Dato extra del día: OpenAI también publicó hoy **"How we detect frontier model misalignment"**, sobre cómo detectan desalineación en modelos frontier — señal de que la fiesta de seguridad/alignment de la semana está en pleno desarrollo.

Para quien construye sobre modelos de OpenAI, el Spec actualizado es lectura obligada: define defaults que developers y usuarios pueden overridear, y aclara dónde están los límites firmes que no.

**Fuente:** [OpenAI — An updated Model Spec for more capable and beneficial AI](https://openai.com/index/updated-model-spec/) · [Model Spec 2026-10-29](https://model-spec.openai.com/2026-10-29.html)
