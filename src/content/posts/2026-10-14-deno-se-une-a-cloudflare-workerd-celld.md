---
title: "Deno se une a Cloudflare: el equipo de Ryan Dahl se muda para fusionar workerd y celld"
author: Carlos
pubDatetime: 2026-10-14T09:15:00Z
slug: deno-se-une-a-cloudflare-workerd-celld
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "Todo el equipo de Deno pasa a Cloudflare para hacer de Workers y Durable Objects un estándar autoalojable: celld y workerd se fusionan, Deno Deploy cierra en 6 meses, el runtime Deno tendrá un año más de soporte y JSR migra su infraestructura."
---

![Ilustración editorial tech de un dinosaurio estilizado (deno) caminando hacia una nube naranja brillante sobre un paisaje de servidores distribuidos conectados por líneas luminosas formando una malla de nodos, símbolo de runtimes uniéndose, paleta azul profundo con acentos naranjas, estilo ilustración tech editorial, sin texto](../../assets/images/2026-10-14-deno-se-une-a-cloudflare.jpg)

Notición para el mundo JavaScript/serverless: **el equipo completo de Deno se une a Cloudflare**, y Ryan Dahl y Kenton Varda lo contaron en posts cruzados. El objetivo declarado: fusionar **celld** (el runtime distribuido que Dahl lanzó en agosto) con **workerd**, para que el modelo de programación de Workers y Durable Objects se pueda correr **de forma autoalojada como ciudadano de primera clase**, no solo dentro de la red de Cloudflare.

## La historia detrás

Dahl (creador de Node.js y de Deno) cuenta que lo que siempre buscó desde aquel demo de IRC en una bodega de Berlín era un modelo donde **el escalamiento entre máquinas sea parte del diseño desde el principio**. Dice que la pieza que lo hizo "clic" fueron los **Durable Objects** de Cloudflare: singletons distribuidos con SQLite, single-thread, con WebSocket y storage relacional sincrónico. Con eso, sharding de datos y conexiones casi gratis.

Su problema era que ese modelo **no existía fuera de Cloudflare**: workerd es open source, pero su soporte de Durable Objects es de una sola instancia, útil para tests locales y nada más. Por eso creó **celld**: un solo binario escrito en Rust, con un bucket de object storage como única dependencia externa. Sin múltiples nubes ni bases de datos entrelazadas, la lección amarga que le dejó operar Deno Deploy.

## El mea culpa (agradable) de Cloudflare

Varda reconoce algo que poca gente sabía: **workerd siempre fue open source** (el mismo código que corre en producción), y que la implementación distribuida de Durable Objects que usan internamente es "una bestia" con dependencias sobre servicios operados por un equipo de SREs — nada que alguien quiera autoalojar. Tenían TODOs sin resolver desde el release original. Cuando Deno soltó celld en agosto, en Cloudflare se alegraron: **era justo lo que llevaban años queriendo construir y nunca encontraron el tiempo**.

La línea que resume la filosofía: *"ser open source y darle a la gente una puerta de escape es buen negocio"*.

## ¿Qué pasa con Deno, Deno Deploy y JSR?

Esto es lo que importa si tienes cosas corriendo en el ecosistema Deno:

- **Deno (el runtime):** un año más de soporte con releases mensuales de bugfixes y seguridad. Después, terminan su desarrollo. Queda open source y la comunidad puede continuarla.
- **Deno Deploy:** sigue operando **6 meses más y luego cierra**. Los clientes que pagan reciben soporte de migración a Cloudflare Workers.
- **JSR:** sigue funcionando; su infraestructura se muda a Cloudflare.
- **rusty_v8:** siguen soportándolo y trabajarán para integrarlo en workerd.

Dahl y Bert Belder liderarán el esfuerzo para que **workerd autoalojado sea una forma soportada de construir y correr apps** con el modelo Workers, fusionando código e ideas de celld. Varda hasta dice que lo usará para tener una instancia de Cloudflare OS en su casa. Si no puedes esperar, ya puedes autoalojar celld o workerd hoy.

## El ángulo IA

Dahl cierra con la señal de los tiempos: los Durable Objects reúnen ejecución serverless barata, estado persistente, WebSockets y una interfaz JS de alto nivel — **el harness perfecto para agentes**. Tanto que dejó su correo personal de Cloudflare para quien esté construyendo agentes a escala y quiera correrlos en su propia infra.

**Mi lectura:** consolida al modelo Workers/DO como el estándar de facto para apps distribuidas, y le pone fecha de funeral a un runtime que marcó una época. El ecosistema JS sigue consolidándose a pasos agigantados — y el que sale ganando a la larga es el desarrollador que quiere menos infraestructura que armar.
