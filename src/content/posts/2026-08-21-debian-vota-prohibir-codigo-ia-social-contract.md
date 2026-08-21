---
title: "Debian vota prohibir el código generado por IA: 8 opciones en papeleta y el destino del Social Contract en juego"
author: Carlos
pubDatetime: 2026-08-21T04:20:00Z
slug: debian-vota-prohibir-codigo-ia-social-contract
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "Los desarrolladores de Debian están votando una resolución general sobre el uso de LLMs en el proyecto: desde prohibir contribuciones asistidas por IA vía Social Contract hasta aceptarlas con resguardos. Dos semanas de papeleta abierta y la matemática sugiere que la prohibición total es improbable."
---

![Ilustración editorial de una urna de votación que recibe papeletas con un engranaje y un circuito neuronal, con swirls rojos al fondo](../../assets/images/2026-08-21-debian-vota-prohibir-codigo-ia-social-contract.svg)

Mientras la industria completa corre a meter agentes de IA en todo lo que se mueve, Debian — una de las distribuciones que sostiene media internet — está haciendo exactamente lo contrario: **poniéndolo a votación**. Los desarrolladores de Debian están votando una **Resolución General (GR)** sobre el uso de LLMs y herramientas de IA generativa en el proyecto, con la papeleta abierta por dos semanas y **ocho opciones** en la tabla.

## La propuesta original: prohibir

Todo partió con la propuesta del desarrollador **Matthias Geiger**, que busca modificar nada menos que el **Debian Social Contract** — la constitución moral del proyecto desde 1997. El texto propuesto es directo:

> "No permitiremos contribuciones directas a Debian escritas con el uso o asistencia de modelos de lenguaje grandes (LLMs) u otras herramientas de IA generativa".

Es decir: nada de código, packaging, documentación ni traducciones hechas con IA para trabajo directo del proyecto. La propuesta apunta al **output mismo** — restringir que el texto generado por máquinas entre a Debian (salvo indirectamente, desde upstream).

## Pero la papeleta tiene ocho opciones

Acá está lo interesante: la contraparte no se quedó callada. Sobre la papeleta compiten **siete contrapropuestas** además de la original, que van desde:

- **Prohibición total** vía Social Contract (la de Geiger)
- **Permitir contribuciones asistidas por IA con condiciones** (disclosure, verificación humana)
- **Rechazar LLMs "hasta donde sea práctico"**, actualizando el Code of Conduct
- Opciones intermedias de aceptación condicional o plena

Y ojo con la matemática: como señala TechTimes, con **ocho opciones compitiendo en el sistema de votación por preferencia de Debian (Condorcet), una prohibición total es estadísticamente improbable** — necesita ganar como preferencia mayoritaria contra siete alternativas que en conjunto reparten el voto "pragmático".

## El argumento de fondo

¿Por qué alguien querría prohibir la IA en 2026? Los argumentos que sostienen la propuesta:

1. **Licencias y procedencia**: los LLMs fueron entrenados sobre código de licencias incompatibles, y el output puede reproducir material con copyright sin que nadie lo note. Para un proyecto fanático de la libertad del software, es un problema serio.
2. **Calidad y confianza**: Debian se sostiene sobre mantenimiento humano cuidadoso. Los mantenedores ya reportan un aumento de bugs "con confianza de más" — patches que suenan bien pero están mal.
3. **Carga de revisión**: la IA barata de usar genera volumen de contribuciones que alguien humano tiene que revisar. El costo se transfiere a los mantenedores.

Del otro lado: prohibir el uso de herramientas que ya usa (silenciosamente) buena parte de los contribuyentes puede ser **inaplicable en la práctica**, y el código generado por IA que llega vía upstream (Kernel, bibliotecas) entra igual — la prohibición solo cubriría el trabajo directo.

## Por qué importa (incluso si no usas Debian)

- **Precedente open source**: si el proyecto más institucional de Linux llega a prohibir, otros lo mirarán. Es la primera gran votación de gobernanza sobre IA generativa en una comunidad de infraestructura crítica.
- **La pregunta de procedencia no tiene respuesta**: ¿de dónde salió este código? Con agentes generando el 30% del código nuevo en algunos ecosistemas, la trazabilidad de licencias se vuelve problema de compliance real para cualquier empresa que consuma open source (o sea, todas).
- **Es un termómetro del cansancio**: después de un año de "IA en todo", la reacción de una de las comunidades más técnicas del planeta es organizar una votación formal para ponerle límites. Dice algo.

Los resultados deberían estar en las próximas semanas. Si gana alguna variante de prohibición, será la primera distro importante en ponerle un candado constitucional a la IA. Si gana la aceptación con resguardos, el Social Contract se actualizará para la era de los agentes. Cualquiera de las dos es historia.

## Enlaces

- [Debian — General Resolution: LLM usage in Debian](https://www.debian.org/vote/2026/vote_002)
- [The New Stack — Debian just proposed banning AI code](https://thenewstack.io/debian-ai-contribution-ban-debate/)
- [TechTimes — Debian Votes on Eight AI Proposals](https://www.techtimes.com/articles/325094/20260820/debian-votes-eight-ai-proposals-ballot-math-makes-outright-ban-unlikely.htm)
- [Phoronix — Debian Developers Begin Voting Over LLM Usage](https://www.phoronix.com/news/Debian-Votes-On-LLM-Usage)
