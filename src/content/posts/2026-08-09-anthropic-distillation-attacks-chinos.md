---
title: "Anthropic acusa a DeepSeek, Moonshot y MiniMax de robar capacidades de Claude con 16 millones de consultas fraudulentas"
author: Carlos
pubDatetime: 2026-08-09T12:00:00Z
slug: anthropic-distillation-attacks-chinos
featured: false
draft: false
tags:
  - IA
  - Seguridad
description: "Anthropic destapó campañas industriales de destilación ilegal: tres labs chinos extrajeron capacidades de Claude mediante 24.000 cuentas fraudulentas."
---

![Ilustración editorial de un escudo de seguridad protegiendo un modelo de IA contra intentos de extracción de datos](../../assets/images/2026-08-09-anthropic-distillation-attacks-chinos.jpg)

Anthropic soltó una bomba esta semana: **tres laboratorios chinos de IA — DeepSeek, Moonshot AI y MiniMax — ejecutaron campañas industriales de destilación ilícita** para extraer capacidades de Claude y mejorar sus propios modelos.

Los números son escandalosos: **más de 16 millones de intercambios** con Claude a través de aproximadamente **24.000 cuentas fraudulentas**.

## ¿Qué es la destilación y por qué importa?

La destilación es una técnica legítima: entrenar un modelo menos capaz con las salidas de uno más fuerte. Los labs frontier lo hacen todo el tiempo para crear versiones más pequeñas y baratas.

Pero acá el problema es que **competidores extranjeros están usando cuentas falsas para robar capacidades** de Claude en una fracción del tiempo y costo que tomaría desarrollarlas independientemente. Y los modelos resultantes **no incluyen los safeguards** que Anthropic construye (prevención de bioweapons, ciberataques, etc.).

## Lo que encontró Anthropic

### DeepSeek — +150.000 intercambios

- Targeteó razonamiento, tareas de grading (usando a Claude como reward model para RL)
- Pidió a Claude "imaginar y articular el razonamiento interno" detrás de respuestas ya completadas — efectivamente generando **chain-of-thought training data a escala**
- También pidió alternativas "safe for censorship" a consultas políticamente sensibles — probablemente para entrenar a DeepSeek a evadir temas censurados en China
- Tráfico sincronizado entre cuentas, métodos de pago compartidos

### Moonshot AI — +3,4 millones de intercambios

- Targeteó razonamiento agéntico, tool use, coding, computer-use y computer vision
- Cientos de cuentas fraudulentas
- En una fase posterior, intentaron **extraer y reconstruir los reasoning traces** de Claude
- Metadata coincidía con perfiles públicos de staff senior de Moonshot

### MiniMax — +13 millones de intercambios

- El más masivo de los tres
- Focus en agentic coding y tool orchestration
- Anthropic detectó la campaña **mientras estaba activa**, antes de que MiniMax lanzara su modelo
- Cuando Anthropic liberó un modelo nuevo durante la campaña, MiniMax **pivotó en 24 horas** para capturar capacidades del nuevo sistema

## Cómo acceden a Claude

Anthropic no ofrece acceso comercial en China. Para sortear esto, los labs usan **proxy services comerciales** que revenden acceso a Claude y otros modelos frontier a escala.

Estos proxies operan arquitecturas "hydra cluster": redes masivas de cuentas fraudulentas que distribuyen tráfico. Cuando bannean una cuenta, aparece otra. En un caso, **una sola red de proxy manejaba más de 20.000 cuentas simultáneamente**.

## Implicancias de seguridad nacional

Anthropic subraya que los modelos destilados ilegalmente **carecen de safeguards**, lo que significa que capacidades peligrosas pueden proliferar sin protecciones. Estos modelos pueden alimentar sistemas militares, de inteligencia y vigilancia de gobiernos autoritarios.

También refuerza el argumento para **export controls**: el acceso restringido a chips limita tanto el entrenamiento directo como la escala de la destilación ilícita.

---

Esto es bastante grave. No es un bug o una vulnerabilidad técnica — es **espionaje industrial a escala planetaria usando la propia API del adversario**. La pregunta es qué van a hacer los labs estadounidenses más allá de detectar y banear cuentas, porque claramente los atacantes se adaptan en horas.
