---
title: "VoidZero en Cloudflare: 80 releases y una toolchain de JavaScript hasta 10x más rápida"
author: Carlos
pubDatetime: 2026-09-29T03:00:00Z
slug: voidzero-cloudflare-toolchain-javascript
featured: false
draft: false
tags:
  - DevOps
  - Arquitectura
description: "A cuatro meses de unirse a Cloudflare, VoidZero reporta 80+ releases y mejoras de rendimiento brutales en Vite, Vitest, Oxc y Rolldown."
---

![Ilustración editorial de una toolchain de JavaScript acelerada: engranajes y piezas de código compilándose a gran velocidad sobre un fondo de nube](../../assets/images/2026-09-29-voidzero-cloudflare-toolchain-javascript.jpg)

Cuando VoidZero —Evan You y equipo, los creadores de Vite— se sumó a Cloudflare hace cuatro meses, prometieron mantener todo open source, vendor-agnóstico y manejado por la comunidad. Ahora, en plena Birthday Week de Cloudflare, hicieron un check-in de cómo va ese compromiso. Y los números son contundentes.

## Más de 80 releases en 4 meses

En cuatro meses despacharon más de **80 releases**, cerraron **1.200+ issues** y aterrizaron mejoras de rendimiento serias:

- **Oxc React Compiler** (agosto): compila apps React.js **10x más rápido**.
- **Vitest 5** (septiembre): hasta **50% más rápido** que Vitest 4.
- **tsgolint** ya es estable: hasta **18x más rápido** que ESLint en codebases grandes.
- **Oxfmt** con formatters de JSON, CSS, SCSS, Less, GraphQL y YAML reescritos en Rust: **7x más rápido** que Prettier.

## Vite+ 1.0 y la apuesta por los agentes

Además, **Vite+ 1.0** —la capa que unifica toda la toolchain con defaults sensatos— ya está en 1.0, y avanzan hacia el **"Bundled Dev"** (antes Full Bundle Mode), un modo de desarrollo moldeado por clientes con apps enormes, incluido el propio dashboard de Cloudflare.

La tesis de fondo: en 2026, "hacer más productivo al developer" también significa **hacer más rápidos a los agentes de código**. Una toolchain que compila, lintea y testea más rápido acorta el feedback loop tanto para humanos como para los agentes que hoy escriben código.

### Update: 16 de octubre de 2026

La promesa tomó forma: Cloudflare publicó **"Deploy with Void"** (15 de octubre) y **Void quedó 100% open source bajo licencia MIT**. Lo más interesante es el cambio de rumbo — lo que iba a ser un producto comercial terminó como **plataforma open source que cualquier empresa puede auto-alojar**.

Void ahora es tres cosas:

- **SDK**: full-stack apps con Vite y Hono, zero-config
- **CLI**: deploy directo a Cloudflare Workers
- **Platform**: un entorno de deployment compartido en tu propia cuenta de Cloudflare, con **access controls, límites de recursos y reportes de uso**

La tesis es explícita: los empleados van a seguir vibe-codeando apps internas con o sin permiso de IT; mejor darles una plataforma donde eso corra con gobernanza en vez de perseguir sombras en SharePoint. El código vive en `github.com/voidzero-dev/void`.
