---
title: "Cloudflare testeó su propio WAF con modelos de IA frontier: esto fue lo que encontraron"
author: Carlos
pubDatetime: 2026-09-29T15:05:00Z
slug: cloudflare-waf-testing-modelos-ia
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Cloudflare construyó un tester adaptativo con LLMs que muta ataques en tiempo real contra su propio WAF. 1.107 intentos, 6 categorías de ataque y hallazgos que ya se convirtieron en reglas nuevas."
---

![Ilustración editorial de un escudo de seguridad digital siendo sometido a pruebas por una inteligencia artificial que lanza ataques mutantes, estilo tech editorial](../../assets/images/2026-09-29-cloudflare-waf-testing-modelos-ia.jpg)

La pregunta que les llegaba seguido de los clientes: **"¿Está tu WAF listo para modelos de IA frontier?"** En vez de responder con slides, Cloudflare hizo lo más sano: lo puso a prueba. Construyeron un tester donde el LLM actúa como hacker —sin ver código fuente, sin conocer las reglas del WAF, solo con respuestas HTTP seleccionadas— y lo soltaron contra un entorno de staging autorizado protegido por su propio WAF.

## Cómo funciona el loop adaptativo

La gracia está en la iteración. El sistema arranca desde un exploit conocido que el WAF ya bloquea, y de ahí el modelo propone variaciones: distinta codificación, distinta parte del request, el mismo destino escrito de otra forma. El loop corre el modelo dos veces por paso: una **proposal call** (sugiere la siguiente variación) y una **review call** (recibe status, headers y body de la respuesta, y decide el siguiente movimiento).

Con guardrails serios, por si acaso: allowlist de hostnames, redirects desactivados, límite duro de intentos, y las respuestas del servidor se tratan como input no confiable. Ni el proposal ni el review ven expresiones de reglas, IDs ni el Attack Score. Todo en Python propio, sin envolver herramientas de pentesting existentes.

## Los números

- **45 escenarios**, 44 de ellos cubriendo seis categorías: XSS, SQLi, command injection, SSRF, path traversal/LFI y Log4j (más uno de log injection reportado aparte).
- **1.107 intentos** registrados. Tras el triaje humano: **49 hallazgos relevantes, 48 de ellos en CMDi y SSRF**.
- XSS, LFI, SQLi y Log4j terminaron con **cobertura casi total**.

El ejemplo más ilustrativo es de SSRF: el tester mandó la misma dirección de metadata cloud en distintas formas —entera, octal, con trailing-dot— y en distintos puntos del request. El WAF bloqueó todas menos una: en el intento 18, manteniendo la estructura del request anterior pero cambiando a la forma con punto final, el cliente recibió un redirect en vez de un bloqueo. Ese tipo de gap es exactamente el que un test fijo nunca encuentra.

## De hallazgo a regla de producción

Esto no quedó en paper. El ejercicio produjo **tres cambios en el Managed Ruleset de Cloudflare**: detecciones nuevas de **SSRF - Obfuscated Host** y **SSRF - Restricted Protocol** (release del 21 de julio), y mejora de la regla **SSRF - Cloud** (4 de agosto). La detección de hosts ofuscados salió directamente de requests que codificaban direcciones internas en formas numéricas no estándar.

## Lecciones para llevarse

- Corrieron los mismos escenarios con dos versiones de la misma familia de modelos: las variaciones diferían, pero **los mismos problemas subyacentes aparecieron en ambas**. El modelo es herramienta, no oracle.
- **Más escenarios de partida > más intentos en un solo escenario**: varias secuencias empezaban a repetir ideas cerca del límite de 25 intentos.
- El triaje humano es insustituible: de 1.107 intentos a 49 hallazgos válidos hubo que descartar malformed, benignos, duplicados y fuera de alcance.
- Y el recordatorio de siempre: un payload que bypassa el WAF igual necesita una aplicación explotable. **Parchear el software sigue siendo la defensa más fuerte.**

Cloudflare adelanta que viene un próximo post con enfoque white-box, donde el modelo sí conoce las vulnerabilidades de la app y las reglas del WAF. Seguridad ofensiva con IA en producción, pero con método.

**Fuente:** [Cloudflare Blog](https://blog.cloudflare.com/adaptive-ai-waf-testing/)
