---
title: "Cloudflare AI Search llega a GA con búsqueda multimodal: ahora entiende imágenes y PDFs escaneados"
author: Carlos
pubDatetime: 2026-10-01T15:14:00Z
slug: cloudflare-ai-search-ga-multimodal
featured: false
draft: false
tags:
  - Cloud
  - IA
description: "AI Search pasó a general available con embeddings de imagen nativos (Qwen3-VL-Embedding), OCR para PDFs escaneados y archivos de 10 MiB. El billing parte el 1 de noviembre, con free tier incluido."
---

![Ilustración editorial de una lupa gigante examinando documentos, imágenes y gráficos conectados por nodos de datos flotantes, paleta naranja Cloudflare y gris azulado](../../assets/images/2026-10-01-cloudflare-ai-search-ga-multimodal.jpg)

Sigue la Birthday Week de Cloudflare y hoy le tocó a **AI Search, que pasó a general available** con mejoradas serias en búsqueda multimodal. Para quien no lo seguía: AI Search combina **Workers AI, Vectorize, R2 y Browser Render** en un pipeline manejado de indexación y retrieval — el mismo motor que alimenta la búsqueda del blog y la documentación de Cloudflare.

## Lo nuevo: embeddings de imagen nativos

Hasta ahora, buscar imágenes era un truco: detección de objetos → caption en texto → embedding del texto. Funcionaba, pero todo lo que el caption no capturaba se perdía.

**Ahora AI Search embebe los píxeles directamente**, con el modelo **Qwen3-VL-Embedding**, manteniendo los captions como señal complementaria. Usan Matryoshka Representation Learning (MRL) para que embeddings más chicos sigan siendo útiles, sin inflar el storage. El resultado: búsquedas visuales del tipo "un pájaro con marcas similares a este" o "el gráfico con barras azules de la presentación de agosto".

Si tu modelo de embedding es text-only, igual puedes consultar con imagen: AI Search la convierte a texto con ToMarkdown y busca con el caption resultante.

## PDFs escaneados y archivos más grandes

- **OCR nativo para PDFs**: muchos PDFs son imágenes escaneadas sin texto extraíble. Ahora se activa OCR y AI Search lee el texto de cada página antes de trocear y embeber. Disponible para todas las cuentas.
- **Archivos hasta 10 MiB** (antes 4 MiB), para texto (Markdown, HTML, CSV, JSON) y PDFs.

## Pricing: simple y con fecha de inicio

El billing parte el **1 de noviembre de 2026**, con reminder por email antes de activarse. Pagas tres cosas: **ingesta, storage y queries** — todo lo intermedio (parsing, chunking, embedding, reranking) va incluido. Sin horas de instancia ni mínimos mensuales.

- Ingesta base: **$0.75 por millón de tokens**, con **5M tokens gratis al mes** en todos los planes Workers.
- Free tier de queries: **1.000 semánticas + 1.000 full-text** al mes.
- El OCR se cobra como tokens de procesamiento de imagen.

Para equipos que hoy arman su stack de búsqueda interna (docs, KB, sitios) pegando piezas sueltas, esto es una alternativa llave en llave que se puede estimar antes de indexar el primer archivo.

Fuentes: [Cloudflare Blog — AI Search GA](https://blog.cloudflare.com/ai-search-ga/).
