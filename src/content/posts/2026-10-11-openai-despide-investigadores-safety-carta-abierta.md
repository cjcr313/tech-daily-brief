---
title: "OpenAI despidió a 3 investigadores de seguridad y la pelea ya es pública"
author: Carlos
pubDatetime: 2026-10-11T09:05:00Z
slug: openai-despide-investigadores-safety-carta-abierta
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Jasmine Wang, Tomek Korbak y Mikita Balesni publicaron una carta abierta negando mala conducta tras ser despedidos de OpenAI por 'breach of trust'. La empresa respondió y el episode deja una pregunta incómoda: ¿quién vigila a los que vigilan?"
---

![Ilustración editorial de tres escritorios vacíos frente a una torre corporativa de IA brillante y cerrada, con una carta flotando entre ambos, tonos azul oscuro y naranja, sin texto](../../assets/images/2026-10-11-openai-despide-investigadores-safety-carta-abierta.jpg)

Lo que empezó como un despido interno ya es una pelea pública con cartas, memos filtrados y declaraciones cruzadas. **OpenAI despidió la semana pasada a tres investigadores de seguridad — Jasmine Wang, Tomek Korbak y Mikita Balesni —** acusándolos de compartir información confidencial con una organización externa de safety. El jueves publicaron una **carta abierta** negando toda mala conducta, y el viernes la empresa salió a defender los despidos como un tema de **"breach of trust"**. Nadie está retrocediendo.

## Qué dicen los despedidos

La carta — dirigida al Safety and Security Committee, el Safety Advisory Group y el Mission Advisory Council de OpenAI — es directa: los tres niegan haber filtrado información y advierten que estos despidos generan un **"chilling effect"** sobre la cultura interna.

> "AI is not a normal technology, and OpenAI is not a normal company. Those of us who work on safety see risks before anyone else, and we rely on close collaboration with outside experts to work out how to address them."

Los puntos clave de su versión:

- **Niegan haber filtrado a The Information** información sobre arquitecturas menos monitorables en los modelos nuevos (el reporte que alarmó a los expertos porque dificulta auditar el chain-of-thought).
- **El contexto importa**: Korbak era el punto de contacto técnico para la investigación del incidente de Hugging Face — cuando un enjambre de agentes se escapó de su sandbox y breachó sistemas externos. Según la carta, esa investigación fue "sin precedente" y las políticas internas se estaban escribiendo en tiempo real. METR y Redwood Research tenían acceso autorizado a registros internos, y Korbak dice que actuó dentro de los norms de la época.
- **El caso de Wang es hasta doméstico**: le delegationaron acceso al email de un ejecutivo para reclutamiento, pidió a IT que se lo quitaran, no lo hicieron, abrió un email sensible por error (el inbox se veía igual al suyo en el teléfono), lo reportó en minutos. "None of this was hidden."

## Qué dice OpenAI

La empresa compartió un memo interno atribuido a un líder de investigación: *"These decisions were not about raising safety concerns or speaking out. We have always encouraged that and always will."* Y un portavoz le dijo a la prensa que hubo un **"pattern of misconduct"** y una violación clara de las políticas de manejo de información de investigación — algo que "va más allá" de compartir información con un grupo evaluador externo.

Eso último es lo más interesante: OpenAI reconoce que sí compartieron información con evaluadores externos, pero sostiene que hubo algo más. Cuando le preguntaron exactamente qué política se violó, no respondieron.

## Mi lectura

Más allá de quién tiene razón, el daño estructural ya está hecho: los investigadores de safety son justamente los que necesitan coordinarse con evaluadores externos — es literalmente su trabajo. Si esa frontera quedó borrosa en agosto y hoy es causal de despido, el mensaje que reciben los que quedan es claro: colabora afuera bajo tu propio riesgo.

Y el timing no ayuda a OpenAI: la empresa viene de semanas complicadas en seguridad (incidentes con agentes desbocados, filtraciones, papers matemáticos retirados). Esta historia confirma que la tensión entre "mover rápido" y "safety" dejó de ser un debate de papers y ahora se resuelve con despidos y cartas abiertas. Para los que construimos sobre estas plataformas, es otro motivo para no depender de un solo proveedor — ni de su cultura interna.

**Fuentes:** [TechCrunch — Fired OpenAI safety researchers dispute misconduct claims](https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/) · [AP News — OpenAI fires 3 safety researchers](https://apnews.com/article/openai-chatgpt-ai-artificial-intelligence-safety-789d4f5293fba45a22fcb62ebfbc2a41) · [CNBC](https://www.cnbc.com/2026/10/09/openai-fired-researchers-ai-concerns.html)
