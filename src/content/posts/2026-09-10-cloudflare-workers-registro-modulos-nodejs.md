---
title: "Cloudflare reescribe el registro de módulos de Workers para compatibilidad total con Node.js"
author: Carlos
pubDatetime: 2026-09-10T21:00:00Z
slug: cloudflare-workers-registro-modulos-nodejs
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "Cloudflare reescribió el registro de módulos de workerd para acercarse a Node.js: compat habilitada por defecto y apps de hasta 64 MiB."
---

![Ilustración de módulos de Node.js ejecutándose sobre el runtime de Cloudflare Workers](../../assets/images/2026-09-10-cloudflare-workers-registro-modulos-nodejs.jpg)

Cloudflare reescribió el **registro de módulos de workerd**, el componente open source que corre bajo el runtime de Workers, con un objetivo claro: que sea más rápido, más apegado a los estándares y, sobre todo, más parecido al registro de módulos de Node.js.

## Compatibilidad con Node.js por defecto

Durante los últimos años Cloudflare venía agregando soporte para las APIs de Node.js a cuentagotas. Ahora la jugada es distinta:

- **Todas las APIs estables de Node.js** que tienen sentido en un contexto serverless ya están soportadas.
- La compatibilidad con Node.js quedó **habilitada por defecto**.
- El límite de tamaño de las apps subió a **64 MiB en todos los planes** (antes el límite de compresión era un dolor de cabeza real).

## Qué cambió en el registro de módulos

El nuevo registro trae varias mejoras concretas:

- **`import.meta`** y compilación perezosa para arrancar más rápido.
- **Cachés de código compartidas** entre instancias, para no recompilar lo mismo una y otra vez.
- **Errores más claros**, algo que los que han debugueado dependencias en Workers van a agradecer.

## Por qué importa para DevOps

El mensaje de fondo es que el ecosistema de Node.js ya no se siente "ajeno" en Workers. Equipos que hoy corren funciones serverless en AWS Lambda o GCP Cloud Functions pueden portar código Node.js a Workers sin andar peleando con incompatibilidades de módulos. Menos fricción al migrar, menos código de adaptación y un runtime edge que se comporta cada vez más como el Node.js que ya conoces.

Es otro ejemplo de cómo los proveedores cloud compiten por reducir la fricción de adopción en lugar de solo pelear por precio.
