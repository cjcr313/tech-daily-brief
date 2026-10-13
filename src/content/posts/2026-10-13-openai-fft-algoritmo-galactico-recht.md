---
title: "Ben Recht desarma el 'FFT más rápido' de OpenAI: un algoritmo galáctico que jamás correrá en un computador real"
author: Carlos
pubDatetime: 2026-10-13T21:15:00Z
slug: openai-fft-algoritmo-galactico-recht
featured: false
draft: false
tags:
  - IA
  - Arquitectura
description: "El ensayista de UC Berkeley revisó el paper de OpenAI que prometía una transformada de Fourier más rápida: las constantes ocultas son del orden de 10^100 y asume aritmética exacta que ningún hardware tiene."
---

![Ilustración editorial abstracta de ondas sinusoidales descomponiéndose en un espectro de frecuencias luminoso en tonos azul-violeta, con una lupa escéptica examinando nodos matemáticos brillantes sobre fondo oscuro, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-13-openai-fft-algoritmo-galactico-recht.jpg)

La semana pasada OpenAI soltó un dump masivo de papers matemáticos generados con IA, y entre ellos apareció una afirmación jugosa: una transformada de Fourier "más rápida" que el FFT clásico. Ben Recht, profesor de UC Berkeley y autor del blog *arg min*, se sentó a revisarla. Su veredicto, publicado el 12 de octubre, es demoledor: no es un avance, es un **algoritmo galáctico** — uno que teóricamente funciona, pero solo en un universo donde las constantes son absurdas y los computadores no existen.

## El truco del big-O

El FFT de Cooley-Tukey (1965) calcula una transformada de largo *n* en unas **5·n·log₂(n)** operaciones. Es una de las joyas de la ingeniería: cuando *n* es un millón, la ganancia sobre el método ingenuo es de 10.000x. Desde entonces, la pregunta abierta es si se puede bajar ese factor logarítmico.

El paper de OpenAI dice esencialmente "sí, O(n · algo un poquito más chico que log n)". El problema, explica Recht, es que **la notación big-O permite esconder cualquier constante**: un algoritmo "lineal" puede perfectamente requerir 10⁸⁰·n operaciones. En el caso del paper, las constantes que surgen del análisis son del orden de **10¹⁰⁰ para tamaños prácticamente computables**. Galáctico en toda regla.

## El supuesto que rompe todo

Peor aún: la construcción **asume aritmética compleja exacta con precisión arbitraria**. Los números que hay que multiplicar crecen superpolinómicamente con *n*, así que almacenarlos como bits costaría memoria **exponencial**. O sea, el "FFT más rápido" presupone un computador que multiplica números infinitamente precisos en un solo paso. Ese computador no existe.

Y no es que nadie hubiera avisado: **Morgenstern probó en 1973** que con coeficientes de magnitud acotada no puedes bajar de ½·n·log n, y Nir Ailton mostró hace una década que romper esa barrera implica inestabilidad numérica severa. La comunidad teórica decidió que esas restricciones eran "muy restrictivas". OpenAI explotó exactamente esa puerta abierta.

## "Una explotación maliciosa de las tradiciones matemáticas"

La frase de Recht en X resume su postura: el resultado es *"menos un avance matemático y más una explotación maliciosa de las tradiciones matemáticas"*. Y no es el único caso del dump: otro paper promete multiplicar matrices en **O(n^2.25)**, pero la construcción ni siquiera permite estimar la constante escondida — "podría ser infinita, computable solo con la música divina de las esferas", escribe con sorna.

Su crítica de fondo apunta a una cultura de la teoría de la computación que **premia papers que jamás corren un algoritmo en un computador**, y a la IA como amplificador de esa mala costumbre: "la IA es muy buena automatizando nuestras peores tendencias".

## La lección para el equipo técnico

Si eres de los que evalúa papers de IA generados por máquinas (o por humanos con asistentes de IA), el checklist de Recht es útil: pide **las constantes explícitas**, verifica el **modelo de computación** que asume el paper, y desconfía de cualquier "mejora asintótica" sin experimentos. Un O() más lindo no te sirve de nada si la constante es 10¹⁰⁰.

**Fuentes:** [Ben Recht — arg min](https://www.argmin.net/p/faster-fourier-transforms) · [AI Weekly](https://aiweekly.co/ai-news-today) · [daily.dev](https://daily.dev/posts/a-look-at-the-math-that-openai-claims-computes-faster-fourier-transforms-kvjbtnmil)
