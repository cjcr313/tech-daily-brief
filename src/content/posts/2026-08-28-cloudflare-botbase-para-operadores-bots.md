---
title: "Cloudflare abre BotBase a los operadores de bots: seguimiento, edición y modelo de comportamiento"
author: Carlos
pubDatetime: 2026-08-28T21:00:00Z
slug: cloudflare-botbase-para-operadores-bots
featured: false
draft: false
tags:
  - Cloud
  - IA
description: "Cloudflare lanzó BotBase for Operators: los dueños de bots ahora pueden seguir el estado de sus envíos, editarlos y declarar cómo usan el contenido, dejando atrás la caja negra del submit."
---

![Ilustración editorial de un panel de control para operadores de bots, con un directorio de bots y agentes IA representados como tarjetas de estado](../../assets/images/2026-08-28-cloudflare-botbase-para-operadores-bots.jpg)

El mes pasado, en su segundo "Content Independence Day", Cloudflare lanzó **BotBase**: un directorio buscable de bots y agentes conocidos, pensado para que los dueños de sitios pudieran ver (y decidir) qué tráfico automatizado entra. El problema es que el ecosistema va en ambas direcciones, y hasta ahora **la experiencia de los operadores de bots terminaba en el botón de submit**. Después de mandar el formulario, no había forma de saber si lo aceptaron, por qué lo rechazaron, ni cómo actualizar la entrada.

Hoy Cloudflare sale a cerrar esa brecha con **BotBase for Operators**.

## Adiós a la caja negra del submit

El feedback de los operadores era unánime: *mandar un bot se siente como lanzarlo a un agujero negro*. Llenas el formulario, aprietas enviar y a rezar. Ahora el tab **Submission history** muestra cada bot enviado desde tu cuenta con un estado claro:

- **Waiting for review** — lo recibimos y está en la cola.
- **Accepted** — lo revisamos y tu bot ya está en el directorio.
- **Rejected** — falta algo, con detalle de por qué.

A eso se suma la posibilidad de **editar una entrada existente**, para que la info no quede congelada en el tiempo, y un **modelo de comportamiento** con el que los operadores declaran con precisión cómo sus bots usan el contenido.

## Un hogar nuevo en el dashboard

Antes el formulario vivía escondido bajo *Manage Account → Configurations*. Ahora tiene casa propia junto al resto de las herramientas de bots y confianza: **Protect & Connect → Application Security → BotBase**. Ahí quedó separado por caso de uso:

- **Bots directory** — el catálogo de bots que Cloudflare ya trackea (el mismo que se puede explorar en Cloudflare Radar).
- **Submission form** — para mandar un bot nuevo.
- **Submission history** — el historial de todo lo que enviaste.

## Por qué importa

Esto va más allá de un cambio de UI. BotBase funciona de verdad solo si participan **ambos lados**: los dueños de sitios que deciden qué permiten, y los operadores que se identifican y explican qué hacen sus bots. El ecosistema de bots es gigante, y darle a los operadores una vía clara para declararse (en vez de que sus crawlers aparezcan como "unknown bot" en los logs de todo el mundo) es la diferencia entre gobernanza y whack-a-mole.

En la práctica: si operas un bot o agente que rastrea contenido, ahora tienes un camino con transparencia para entrar al directorio — y eso, en un internet donde cada vez más sitios bloquean por defecto a lo que no conocen, es reputación barata y bien invertida.

Fuente: [blog.cloudflare.com](https://blog.cloudflare.com/botbase-for-operators/) (28-08-2026).
