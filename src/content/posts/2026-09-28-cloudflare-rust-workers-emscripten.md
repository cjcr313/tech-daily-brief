---
title: "Cloudflare mete Rust nativo a Workers con el target Emscripten de wasm-bindgen"
author: Carlos
pubDatetime: 2026-09-28T21:00:00Z
slug: cloudflare-rust-workers-emscripten
featured: false
draft: false
tags:
  - DevOps
  - Cloud
  - Arquitectura
description: "Cloudflare lanzó el primer preview experimental del target Emscripten para Rust en Workers, desbloqueando librerías y apps que antes no corrían, con Tokio en el horizonte."
---

![Ilustración editorial de un engranaje de Rust fusionándose con hexágonos de WebAssembly y sockets de red](../../assets/images/2026-09-28-cloudflare-rust-workers-emscripten.jpg)

Cloudflare lanzó el primer preview experimental de soporte de primera clase para el target `wasm32-unknown-emscripten` de Rust en su toolchain **wasm-bindgen** y en Rust Workers. Traducido: ahora se pueden compilar y desplegar librerías y aplicaciones Rust que antes no corrían en Workers, incluyendo — próximamente — el runtime async **Tokio**.

## Por qué importa

wasm-bindgen es el toolchain que hace correr las apps WebAssembly en Rust sobre el runtime V8 de Workers. Habilitar el target Emscripten fue un esfuerzo iniciado por Google hace más de un año y retomado por los ingenieros de Cloudflare que mantienen wasm-bindgen.

## Qué desbloquea

Emscripten virtualiza features nativos como timers, filesystem y sockets. Como Workers soporta Web Platform APIs y compatibilidad con Node.js, el equipo pudo virtualizar esas features sobre las APIs Node existentes.

La prueba más vistosa: lograron correr **Pumpkin, un servidor de Minecraft escrito en Rust**, dentro de un Durable Object con ingress TCP y sockets reales vía Tokio. Hay ejemplos para probar ya en el repo `cloudflare/workers-rs`: Workers Emscripten, Tokio en un Worker, y TCP sockets con Emscripten + Tokio.

Fuente: [Cloudflare blog](https://blog.cloudflare.com/rust-workers-emscripten-target/).
