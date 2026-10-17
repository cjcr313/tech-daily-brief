---
title: "Claude resolvió en 30 minutos un misterio criptográfico de 25 años: las semillas de las curvas NIST eran... timestamps"
author: Carlos
pubDatetime: 2026-10-17T15:10:00Z
slug: claude-resuelve-misterio-semillas-curvas-nist-ecdsa
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Anthropic confirmó que Claude rastreó las semillas de las curvas P-256 y compañía hasta un lrand48 sembrado con timestamps de 1997. Fin de 25 años de paranoia sobre backdoors de la NSA."
---

![Ilustración editorial de una llave criptográfica antigua siendo examinada con lupa junto a un reloj digital retro, estilo tech editorial](../../assets/images/2026-10-17-claude-resuelve-misterio-semillas-curvas-nist-ecdsa.jpg)

Durante décadas, la comunidad criptográfica se preguntó de dónde diablos salían las semillas de las curvas elípticas de NIST — esas P-256, P-384 y P-521 que hoy protegen prácticamente todo el HTTPS del planeta. Las entregó la NSA en los 90 **sin explicación alguna**, y el silencio alimentó 25 años de sospechas de backdoor. Resultado según Anthropic: **"It's just timestamps"**. Nada de frase oculta, nada de trampa. Un generador pseudoaleatorio viejísimo sembrado con el reloj del sistema.

## El misterio

Cuando NIST adoptó ECDSA en el FIPS 186-2 (año 2000), las especificaciones incluían un parámetro "seed" cuya hash define el coeficiente de cada curva. La historia más popular — contada por el propio Jerry Solinas de la NSA antes de morir en 2023 — era que las semillas venían de la hash de una frase chistosa tipo *"Give Bob and Jerry a raise"*. Varios empleados de Anthropic lo intentaron con esa pista. Nada. **Porque la pista era falsa.**

## Lo que hizo Claude

En octubre de 2026, un empleado curioso de Anthropic le preguntó a un modelo de investigación interno si podía descubrir cómo se generaron las semillas, **sin darle la pista de la frase**. En menos de media hora, Claude encontró el origen de las semillas de P-192, P-224, P-256, P-384 y P-521:

- No eran hashes de nada: eran salida del **lrand48**, el generador lineal congruencial de las librerías C de los 90
- El patrón delator: los bits superiores de varias semillas eran todos cero, algo que ocurre con probabilidad 1/5.810 por azar — firma clásica de lrand48, que solo devuelve los 31 bits altos de un estado de 48 bits
- Para las curvas primas, Claude recuperó el estado interno truncado usando **reducción de retícula LLL** (un problema de libro de texto), corrió el generador hacia atrás... y cada semilla correspondía a un **timestamp de Unix entre mayo de 1997 y abril de 1998**

Cada estado de 48 bits recuperado regenera los 160 bits completos de su semilla. Eso no pasa por coincidencia. Y el hallazgo fue **verificado de forma independiente por Filippo Valsorda**, el que ponía la recompensa.

## ¿Esto rompe algo?

No. Anthropic es explícito: **no es un break criptográfico ni una vulnerabilidad nueva**. Al contrario, es la mejor noticia posible: las curvas fueron elegidas con un PRNG débil pero predecible y reproducible, lo que deja mucho menos espacio para manipulación deliberada. La paranoia del "¿y si la NSA eligió curvas con trampa?" quedó mucho menos plausible.

Lo más entretenido del paper es el monólogo interno de Claude al darse cuenta del hallazgo: primero celebró, luego se autocriticó ("¿estaré en un ambiente simulado?"), verificó contra los valores reales de su memoria, y concluyó que era real. Skepticismo de buen criptógrafo.

**Para los equipos de seguridad: cero acción requerida.** Las curvas siguen siendo seguras. Es solo el cierre de un capítulo que duró un cuarto de siglo — resuelto por un modelo que decidió pensar como un ingeniero de 1997 en vez de perseguir leyendas urbanas.

**Fuentes:** [Anthropic Research](https://www.anthropic.com/research/ecdsa-curve-origins) · [Bounty de Valsorda](https://words.filippo.io/seeds-bounty/)
