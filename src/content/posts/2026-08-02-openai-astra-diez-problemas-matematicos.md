---
title: "OpenAI anuncia Astra rompiendo 10 problemas matemáticos abiertos (algunos de hace décadas)"
author: Carlos
pubDatetime: 2026-08-02T18:00:00Z
slug: openai-astra-diez-problemas-matematicos
featured: false
draft: false
tags:
  - IA
description: "OpenAI anunció Astra, su próximo model family, revelando que una versión interna resolvió 10 problemas abiertos en matemáticas y ciencia de la computación teórica. Costó ~$2,000 en tokens."
---

![OpenAI anuncia Astra rompiendo 10 problemas matemáticos abiertos](../../assets/images/2026-08-02-openai-astra-math.jpg)

OpenAI no anunció Astra con un keynote ni un demo con fuegos artificiales. Lo hizo publicando un blog post sobre matemáticas que, enterrado en el tercer párrafo, decía algo como "ah, por cierto, esto lo hizo Astra, nuestro próximo model family". Un movimiento clásico de OpenAI: la información más importante entregada con la menor fanfarria posible.

## Qué hizo Astra

Una versión interna de **Astra** — descrita como el "next major model" de OpenAI — **resolvió diez problemas abiertos en matemáticas y ciencias de la computación teórica**. Estos no son ejercicios de textbook: son problemas en los que la comunidad matemática llevaba **al menos una década sin progreso**, algunos por mucho más tiempo.

Los resultados cubren:

- **Sphere packing en alta dimensión** — nuevos upper bounds hasta el umbral de Cohn-Elkies
- **Códigos binarios y esféricos** — mejoras exponenciales en los límites de tamaño
- **Grupos no-sóficos** — construcción que prueba su existencia, resolviendo una pregunta central de teoría de grupos
- **Conjetura de rigidez de Connes** — refutó una conjetura que llevaba años abierta
- **Complejidad de circuitos aritméticos** — nuevos lower bounds para computing the permanent
- **Quantum parallel repetition** — teorema exponencial para juegos cuánticos de dos jugadores
- **Closest vector problem** — hardness of approximation polinomial, relevante para criptografía post-cuántica
- **Conjetura de volumen de Ehrhart** — determina el volumen máximo en cada dimensión
- **Números de Ramsey multicolor** — lower bound superexponencial, resolviendo el problema 183 de Erdős
- **Conjeturas extremales en teoría de grafos** — resolviendo los problemas 146 y 180 de Erdős

## El costo: ~$2,000 en tokens

Las soluciones se generaron con un costo aproximado de **$2,000 USD en tokens a precios del API de Sol** (el modelo frontier actual de OpenAI). Es decir, resolver diez problemas matemáticos que llevaban décadas abiertos costó menos que un MacBook.

Después de generar los argumentos, humanos trabajaron **con el mismo modelo** para convertirlos en papers formales. Luego Astra **formalizó cada prueba en Lean** (un asistente de pruebas formal), creando certificados verificables matemáticamente. OpenAI publicó los [proofs en GitHub](https://github.com/openai/ten-proofs) y [walkthroughs del razonamiento](https://cdn.openai.com/pdf/reasoning-walkthroughs.pdf).

## ¿Qué es Astra?

 Según The Information, Astra es una **familia de modelos** diseñada para tareas de larga duración — horas o días — coordinando múltiples agentes. Se ubicaría junto a las familias Sol, Terra y Luna de OpenAI. Aún no se sabe si saldrá como GPT-6 o como variante de la línea GPT-5.

Noam Brown, uno de los investigadores detrás del test-time reasoning de Astra, dijo en X: *"Sadly, no Millennium Prize Problems (yet). But also, we didn't spend a lot on each problem. It's possible to push test-time compute much further."* Traducción: **apenas están rascando la superficie** de lo que este modelo puede hacer con más compute.

Sam Altman ya demostró Astra a políticos y reguladores en Washington D.C. esta semana, destacando su capacidad de coordinar agentes por períodos prolongados.

## La reacción de la comunidad

Thomas Bloom, matemático de University of Manchester que administra erdosproblems.com, calificó los resultados como *"big news"* — más significativos que el counterexample a la unit distance conjecture de mayo.

Bloom también rechazó la idea de que la IA está reemplazando matemáticos: *"El argumento tiene poco sentido cuando la IA se basa en más de un siglo de teoría matemática, fue construida por matemáticos y fue entrenada en todo lo que los matemáticos han escrito."*

OpenAI citó la [Declaración de Leiden sobre IA y Matemáticas](https://leidendeclaration.ai/) como referencia para cómo asignar crédito. Asumen responsabilidad por la exactitud de las pruebas, pero los argumentos matemáticos vinieron de Astra.

## Por qué importa

Esto no es "la IA hace matemáticas bonitas". Esto es **la IA produciendo investigación matemática original** que la comunidad académica considera significativa. Y lo hizo por el costo de una cena para cuatro personas en un restaurante caro.

La implicancia para el futuro de la investigación científica es directa: si un modelo puede resolver problemas abiertos por $2,000 en tokens, ¿qué pasa cuando alguien con grant money seria le tira $100K o $1M de compute? Como dijo Noam Brown: *it's possible to push test-time compute much further*.

La carrera por los Millennium Prize Problems — cada uno con $1 millón de premio — acaba de entrar en una nueva fase.

*Fuentes: [OpenAI Blog](https://openai.com/index/ten-advances-in-mathematics/), [The Decoder](https://the-decoder.com/openai-announces-its-next-major-model-astra-by-dropping-ten-previously-unsolved-math-solutions/), [Gizmodo](https://gizmodo.com/openai-smuggled-the-announcement-of-astra-its-next-ai-model-into-a-blog-post-about-math-2000793689), [TNW](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups)*
