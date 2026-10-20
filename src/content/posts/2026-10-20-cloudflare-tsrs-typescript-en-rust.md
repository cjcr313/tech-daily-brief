---
title: "Cloudflare y VoidZero presentan tsrs: el compilador de TypeScript portado a Rust, hasta 8x más rápido"
author: Carlos
pubDatetime: 2026-10-20T21:10:00Z
slug: cloudflare-tsrs-typescript-en-rust
featured: false
draft: false
tags:
  - DevOps
  - Infraestructura
description: "Cloudflare, VoidZero y Max Schwenk publicaron tsrs, un port del compilador de TypeScript a Rust: hasta 8x más rápido y 70% menos memoria que TypeScript 7.0, incubado dentro del proyecto Oxc y sin forkear el lenguaje. Se instala con npm."
---

![Ilustración editorial tech de un cangrejo mecánico de metal naranja que reescribe bloques de código azul luminoso transformándolos en engranajes de acero brillante dentro de una forja futurista, chispas de luz, siluetas de desarrolladores observando de espaldas, paleta azul profundo con acentos naranja oxidado, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/cloudflare-tsrs-typescript-en-rust.jpg)

Después del port de TypeScript a Go (el TypeScript nativo 7.x que ya lo hacía 10x más rápido), uno pensaría que el tema estaba cerrado. No lo está: **Cloudflare y VoidZero están colaborando con Max Schwenk (de Owner.com) en `tsrs`, un port del compilador de TypeScript a Rust** — y los números prometen: **hasta 8x más rápido y ~70% menos memoria que TypeScript 7.0**, usando la misma cantidad de workers de type-check.

## No es un fork (y eso es la mitad del punto)

Cloudflare lo deja claro de entrada: **no están forkeando TypeScript**. El equipo de Microsoft mantiene control total del diseño y dirección del lenguaje — el port tiene que seguir fielmente las decisiones del compilador original o "eventualmente se rompe y se vuelve incompatible". tsrs se incuba dentro del **proyecto Oxc**, el toolchain de compiladores JavaScript en Rust.

Detalle curioso: parte de las optimizaciones de tsrs ya se upstreamearon, y el **TypeScript 7.1 beta ya es hasta 2.5x más rápido que 7.0**. El pastel completo crece.

## Se puede probar hoy

Experimental, pero instalable:

```bash
npm install tsrs
npx tsrs
```

## ¿Por qué Rust, si Go ya era rápido?

La respuesta es **WebAssembly**. Cuando compilas Go a Wasm, te llevas el garbage collector puesto; el modelo de memoria de Rust permite interacción directa entre el guest Wasm y el host. Traducción práctica: **el toolchain completo puede correr en el navegador, en un dispositivo embebido o en un entorno sandboxeado** con huella de memoria mínima. Combinado con Workers de Cloudflare (que hace semanas soporta Rust nativo), la apuesta es que puedas correr entornos de desarrollo encapsulados — build incluido — en cualquier lado, incluso dentro de loops de agentes.

## El detalle 2026: la IA escribió gran parte del port

El contexto de por qué *ahora* es puro espíritu de la época: según el post, los modelos de IA frontier pueden hacer ports a esta escala "casi de forma independiente en cuestión de días". Ya se vieron slopforks, ports fieles y re-arquitecturas completas de TypeScript en Rust y C++. La demanda por un TypeScript aún más rápido existe — y ahora había mano de obra sintética para intentarlo en serio.

Además, tsrs se va a fusionar con **tsc-rs** (el port de Theo Browne) en un solo paquete que soporte todas las features del lenguaje, incluido LSP.

**La lectura**: la cadena de tooling de JavaScript/TypeScript se está reescribiendo a velocidad de IA — y esta vez con bendición explícita del equipo dueño del lenguaje. Para equipos con CI/CD que sufren el type-check en cada PR, esto es más relevante de lo que parece.

Fuentes: Cloudflare Blog, GitHub (oxc-project/tsrs).
