---
title: "Anthropic sube la vara con Claude Fable 5 y Mythos 5 para workflows agentic"
author: Carlos
pubDatetime: 2026-07-14T00:00:00Z
slug: anthropic-claude-fable-mythos-5
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Llegó la nueva generación de Anthropic: Claude Fable 5 y Mythos 5, modelos diseñados para razonamiento complejo y trabajos autónomos pesados con ventanas de 1M tokens."
---

Anthropic no baja el ritmo y acaba de sacudir el ecosistema anunciando su nueva línea de modelos: **Claude Fable 5** y **Claude Mythos 5**. 

Si Opus ya nos había volado la cabeza hace un tiempo, Anthropic ahora se está posicionando directamente para dominar el trabajo "agentic" de largo aliento.

## Lo que sabemos de los nuevos modelos

- **Fable 5:** Lo definen como el modelo "más capaz lanzado ampliamente por Anthropic", diseñado específicamente para razonamiento exigente, tareas autónomas (agentes) y programación dura.
- **Specs de locos:** Estamos hablando de una **ventana de contexto de 1.000.000 tokens** y un límite de output de 128.000 tokens. Básicamente, puedes pasarle repositorios de código completos o bibliotecas enteras para que trabaje autónomamente sobre ellos.
- **Precio (vía OpenRouter):** Fable 5 se asienta en los \$10 por millón de tokens de input y \$50 por millón de output. Un precio premium, pero esperado para la categoría "Mythos-class" que busca destronar al tope de línea de OpenAI y Google.

Adicionalmente, se supo que Anthropic extendió el acceso incluido a Fable 5 para sus usuarios de planes de pago hasta mediados de julio, para que puedan probar la potencia de este nuevo monstruo de razonamiento.

## El impacto en DevOps y Cloud

Para los que estamos armando infra, esto significa que el ecosistema de **agentes autónomos** (como los que hacen CI/CD automáticos, revisan PRs complejos o auditan arquitecturas enteras leyendo documentación en la nube) está a punto de recibir una inyección de inteligencia brutal. Las limitaciones de contexto quedaron en el pasado; el desafío ahora es cómo orquestamos y costeamos estas operaciones masivas.