---
title: "Z.ai abre beta cerrada de GLM-Legal: agente legal de 320B parámetros que anota 19,2% en Harvey LAB"
author: Carlos
pubDatetime: 2026-10-12T21:15:00Z
slug: zai-glm-legal-agente-legal-320b-beta
featured: false
draft: false
tags:
  - IA
  - Observabilidad
description: "El nuevo modelo de dominio legal de Z.ai, construido sobre GLM-5.3-Flash con 320B parámetros y contexto de 1M tokens, mejora 12,5 puntos a su modelo base en el benchmark Harvey LAB y se accede solo por postulación."
---

![Ilustración editorial de una balanza de justicia dorada fusionada con circuitos y nodos de datos brillantes sobre un escritorio futurista, paleta oscura con acentos dorados y azules, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-12-zai-glm-legal-agente-legal-320b-beta.jpg)

La escalera china sigue subiendo peldaños rápidos: **Z.ai anunció hoy GLM-Legal**, un modelo agéntico de dominio legal construido sobre su base **GLM-5.3-Flash** — una MoE de **320B parámetros totales con 18B activos** y contexto de **1M de tokens**. El acceso es por **beta cerrada**, vía formulario de postulación para design partners y la app de escritorio AutoClaw.

## El número del anuncio: 19,2% en Harvey LAB

El headline es un **19,2% de all-pass rate en Harvey LAB**, el benchmark de la legal-AI vendor Harvey que evalúa workflows reales de estudios jurídicos a lo largo de **24 áreas de práctica**. Eso representa **+12,5 puntos sobre el modelo base** (GLM-5.3-Flash), que es la señal más interesante: el fine-tune de dominio no afiló apenas, prácticamente duplicó el rendimiento en la tarea.

Matices honestos: AlphaSignal señala que tests independientes de **Vals AI** ubican al modelo más tibio en preguntas legales acotadas, y que el resultado de Harvey **expone que los workflows multi-paso siguen siendo el punto débil del modelo base**. O sea, brillante en benchmark agéntico de law firm, no necesariamente un abogado generalista.

## Por qué importa esta tendencia

- **Modelos de dominio sobre bases MoE**: la receta "base flash barata + especialización agresiva" es la misma que están siguiendo otros labs chinos, y GLM-Legal la lleva a un vertical high-value.
- **Contexto de 1M tokens**: contratos completos, discovery y corpora legales enteros caben en una sola pasada.
- **La duda obvia**: las discusiones en la comunidad (daily.dev) ya señalan el elefante en la sala — el escepticismo de **rutear datos legales sensibles por un modelo hospedado en China**. Para estudios fuera de ese ecosistema, ese será el filtro real de adopción.

Después de GLM-5.3 open-weight en agosto, Z.ai está jugando en serio la carta de la especialización vertical. El siguiente paso lógico: ver si abren los pesos como con su modelo general.

**Fuentes:** [Unite.AI](https://www.unite.ai/z-ai-unveils-glm-legal-an-agentic-model-for-legal-workflows/) · [AI Weekly](https://aiweekly.co/alerts/zai-launches-glm-legal-scores-192-on-harvey-lab-test) · [AlphaSignal](https://alphasignal.ai/news/z-ai-opens-gated-access-to-glm-legal-its-320b-legal-ai) · [Orcarouter](https://www.orcarouter.ai/blog/glm-legal-beta-release)
