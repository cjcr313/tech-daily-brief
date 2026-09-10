---
title: "1.1.1.1 de Cloudflare ya valida DNSSEC con criptografía post-cuántica (ML-DSA-44)"
author: Carlos
pubDatetime: 2026-09-10T21:00:00Z
slug: cloudflare-1111-dnssec-post-cuantico
featured: false
draft: false
tags:
  - Infraestructura
  - Seguridad
description: "El resolver DNS 1.1.1.1 ahora valida firmas DNSSEC con ML-DSA-44, el algoritmo post-cuántico estandarizado por el NIST."
---

![Ilustración de criptografía post-cuántica protegiendo consultas DNS](../../assets/images/2026-09-10-cloudflare-1111-dnssec-post-cuantico.jpg)

El resolver DNS público **1.1.1.1 de Cloudflare** ahora valida firmas DNSSEC generadas con **ML-DSA-44**, el algoritmo de firma post-cuántica estandarizado por el NIST. Es un paso concreto para blindar DNSSEC contra un futuro donde los algoritmos de firma actuales dejen de ser seguros.

## El desafío: firmas de 2.420 bytes

Lo interesante del asunto no es solo "activar" el algoritmo, sino lidiar con las consecuencias prácticas. Las firmas de ML-DSA-44 son gigantes: **2.420 bytes** por firma. Eso obliga a Cloudflare a:

- Probar a escala de Internet si esas respuestas más grandes viajan de forma confiable.
- Manejar el riesgo de **downgrade**, evitando que los resolvers caigan de vuelta a la firma clásica cuando algo falla.

## El plan hacia 2029

Cloudflare ya tenía una hoja de ruta clara: lograr **seguridad post-cuántica completa para 2029**. Hasta ahora la mayor parte del trabajo estaba enfocado en TLS (experimentaron con key agreement post-cuántico desde 2019 y lo habilitaron para todos los clientes en 2022). Pero la criptografía de llave pública también vive en DNSSEC, y este lanzamiento cierra esa brecha.

## Por qué importa

DNSSEC es una de esas piezas invisibles de la infraestructura que nadie nota hasta que falla. Que un resolver tan masivo como 1.1.1.1 empiece a validar firmas post-cuánticas a escala es una señal de que la migración post-cuántica está pasando de la teoría a la operación real.

Para los que administran zonas DNS, el recordatorio es claro: la transición post-cuántica no es solo tema de TLS. Vale la pena empezar a revisar cómo tus firmas DNSSEC van a sobrevivir al salto.
