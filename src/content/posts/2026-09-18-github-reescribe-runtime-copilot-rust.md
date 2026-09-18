---
title: "GitHub reescribió el runtime de Copilot en Rust usando los agentes del propio Copilot"
author: Carlos
pubDatetime: 2026-09-18T09:00:00Z
slug: github-reescribe-runtime-copilot-rust
featured: false
draft: false
tags:
  - DevOps
  - IA
  - Infraestructura
  - Open Source
description: "GitHub migró el runtime de Copilot de TypeScript a más de 800 mil líneas de Rust en 14,5 semanas, con los agentes de Copilot escribiendo la mayor parte del código."
---

![Ilustración editorial tech: una grúa de carga trasladando bloques de código desde una pila de TypeScript (colores azul y amarillo) hacia una estructura de acero oxidado que representa Rust, con un brazo robótico de IA moviendo las piezas, tonos naranja óxido y gris sobre fondo oscuro, concepto de migración de runtime asistida por agentes](../../assets/images/2026-09-18-github-reescribe-runtime-copilot-rust.jpg)

GitHub acaba de contar una de esas historias que marcan un antes y un después para la ingeniería de software. La compañía **reescribió por completo el runtime de Copilot** —antes en TypeScript corriendo sobre Node.js y V8— y lo pasó a **más de 800.000 líneas de Rust de producción**. La parte que rompe la cabeza: **la mayor parte del código la escribieron los agentes del propio Copilot**.

## La operación, en números

El trabajo no fue un big-bang. Se dividió en **128 pull requests** que se fueron mergeando de forma incremental durante **unas 14,5 semanas**, lo que permitió al equipo cazar regresiones sobre la marcha sin frenar el *shipping* de features nuevas. Usaron tanto la app de Copilot como el Copilot CLI para generar y revisar el código a lo largo de toda la migración.

## Por qué Rust y por qué ahora

El argumento de fondo es el de siempre con este tipo de *rewrites*: un runtime en Rust les da **performance y uso de memoria** más predecibles, y elimina una capa de indirección que pesa cuando estás sirviendo millones de peticiones de agentes. Pero el titular real es económico: un refactor de este tamaño **simplemente no era viable de pagar con equipos humanos** al ritmo que se hizo. Los agentes cambiaron la ecuación de costo.

## El patrón que se está repitiendo

GitHub no está solo en esto. Anthropic hizo una movida parecida semanas atrás con sus propios agentes, y la conversación en la industria ya no es "¿los agentes pueden escribir código?" sino **"¿qué tan grandes pueden ser los proyectos que les entregamos?"**. La diferencia entre los *playbooks* de GitHub y Anthropic es tema aparte: cada uno está publicando cómo estructura, revisa y gobierna el trabajo de sus agentes, y ese material vale oro para cualquier equipo de plataforma.

## La otra cara de la moneda

Mientras GitHub celebra su rewrite, el ecosistema se pregunta si el modelo de *pull request* como lo conocemos tiene los días contados. La narrativa del momento —"todos están en una carrera por reemplazar a GitHub"— se alimenta de que los agentes hacen que el flujo review-merge de siempre se sienta lento. Por ahora, GitHub contesta con data: 128 PRs incrementales que llegaron a main sin romper nada. El Rust no solo los hizo más rápidos; les regaló una historia técnica contundente para contar.
