---
title: "Cloudflare usa IA para mapear toda su criptografía: así avanza su migración post-cuántica hacia 2029"
author: Carlos
pubDatetime: 2026-09-30T03:10:00Z
slug: cloudflare-cryptolabe-ia-migracion-post-cuantica
featured: false
draft: false
tags:
  - IA
  - Infraestructura
description: "Cloudflare presentó CryptoLabe, una herramienta interna con IA que descubre criptografía escondida en todo su codebase para avanzar en su migración post-cuántica total hacia 2029. La lección aplica a cualquier organización grande."
---

![Ilustración editorial de un astrolabio de bronce antiguo fusionado con un circuito y un candado, partículas cuánticas flotando, tonos verde azulado y dorado](../../assets/images/2026-09-30-cloudflare-cryptolabe-ia-migracion-post-cuantica.jpg)

Cloudflare se puso plazo propio: **migración post-cuántica completa hacia 2029**, con la consigna "PQ everything". Ya movieron varios productos a cifrado post-cuántico sobre TLS 1.3, pero queda la parte difícil: encontrar *toda* la criptografía clásica que vive escondida en una plataforma del tamaño de la suya. Su respuesta: **CryptoLabe**, una herramienta interna con IA cuyo nombre viene del astrolabio de los navegantes portugueses — porque ayuda a saber dónde estás y trazar el rumbo.

## Por qué grep no alcanza

El problema es más tramposo de lo que suena. La criptografía casi nunca se anuncia en el código:

- Vive en **librerías compartidas** que un repo importa pero puede que ni use
- En **defaults de protocolos**: un listener TLS 1.3 negociando X25519 clásico en vez de X25519MLKEM768
- En **configs que seleccionan algoritmos en archivos YAML de otro repositorio**
- En rutas muertas, de test o en camino a deprecación

Y el detalle clave: buscar "RSA" o "X25519" a palo seco **sobre-cuenta** (encuentra código sin uso) y **sub-cuenta** (se pierde defaults y usos indirectos). Peor aún: no te dice *cómo* se usa. Una firma ECDSA puede estar en un JWT, en IPsec, en TLS o en SSH, y cada una tiene un camino de migración completamente distinto.

## Qué hace CryptoLabe

La herramienta usa IA para **descubrir criptografía a lo largo del codebase, mapear dependencias y clasificar cómo se usa cada pieza**, con tres objetivos declarados:

1. Que los equipos de producto entiendan qué criptografía usan y cómo actualizarla
2. **Métricas de progreso**: conteo por repositorio y por producto de cripto clásica vs. post-cuántica
3. **Adelantar prerrequisitos**: detectar dependencias de protocolos que todavía no tienen plan PQ (porque no existe estándar, no hay consenso o las librerías no dan soporte) para empujar a tiempo a standards bodies y ecosistemas

Importante: CryptoLabe es **muy específica a los sistemas internos de Cloudflare y no será producto**. Lo publican para compartir aprendizajes, en la misma línea de su roadmap post-cuántico público.

## En la misma tanda

La Birthday Week post-cuántica siguió con un **[verificador público para saber si un dominio ya negocia cifrado post-cuántico](https://blog.cloudflare.com/post-quantum-visibility/)** y un deep-dive sobre cómo **[prevenir downgrade attacks cuánticos contra IPsec](https://blog.cloudflare.com/ipsec-downgrade-protection/)**.

**El punto:** la migración PQ no es un problema de algoritmos (esos ya existen), es un problema de *inventario* a escala. Y el inventario a escala es exactamente el tipo de tarea donde la IA está resultando ser la palanca. Toma nota si tu organización todavía no sabe dónde está su criptografía.

**Fuente:** [Cloudflare Blog](https://blog.cloudflare.com/ai-driven-cryptography-discovery/)
