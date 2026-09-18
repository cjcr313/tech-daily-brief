---
title: "Ubuntu 26.10 completa su 'rustificación': cp, mv y rm se pasan a Rust"
author: Carlos
pubDatetime: 2026-09-18T03:00:00Z
slug: ubuntu-26-10-rust-coreutils
featured: false
draft: false
tags:
  - Infraestructura
  - DevOps
  - Linux
  - Open Source
description: "Ubuntu movió los últimos tres comandos GNU —cp, mv y rm— a la implementación en Rust de uutils, cerrando la migración completa de sus coreutils."
---

![Ilustración editorial tech: engranajes y bloques de terminal Linux transformándose de un material metálico oscuro a un metal naranja óxido, con el cangrejo de Rust como figura abstracta en el fondo, tonos naranja oxidado y gris acero sobre fondo oscuro, concepto de migración de herramientas a Rust](../../assets/images/2026-09-18-ubuntu-26-10-rust-coreutils.jpg)

Canonical dio el paso que venía cocinando hace rato: **Ubuntu 26.10 "Stonking Stingray" ya no usa GNU Core Utilities en su stack base**. Los últimos tres comandos que seguían en su versión GNU —`cp`, `mv` y `rm`— se movieron a la implementación de **uutils coreutils**, escrita en Rust. Con eso, la "rustificación" del sistema base queda completa.

## Por qué se quedaron atrás estos tres

La migración no fue de un día para otro. Ubuntu llevaba varias versiones reemplazando utilidades GNU por sus contrapartes en Rust, pero `cp`, `mv` y `rm` se mantuvieron congelados en GNU durante el ciclo de **Ubuntu 26.04 LTS** por un lote de vulnerabilidades del tipo **TOCTOU** (time-of-check to time-of-use), esas clásicas carreras donde un atacante cambia un archivo entre que se verifica y se usa.

El equipo esperó a que la implementación de uutils cerrara esas brechas. Ahora, con el lanzamiento de **Rust Coreutils 0.12**, los tres comandos migran con la confianza de que el comportamiento y la seguridad están a la altura de lo que un LTS necesita.

## Qué trae 26.10

Además del hito de Rust, la versión que llega en beta este mes y con **lanzamiento estable el 15 de octubre de 2026** viene con un stack actualizado:

- Kernel **Linux 7.2**.
- Escritorio **GNOME 51**, que entre otras cosas incorpora login con passkeys y deja de depender de interfaces legacy de drivers NVIDIA.
- Gráficos con **Mesa 26.2**.

El combo apunta a un sistema base más moderno, con una superficie de ataque más chica en las herramientas de manejo de archivos y un mejor alineamiento con el estándar gráfico actual.

## Por qué importa más allá de Ubuntu

Esto es un voto de confianza grande hacia **Rust en la infraestructura de sistemas**. Que una distro mainstream como Ubuntu apueste a eliminar por completo las GNU coreutils de su stack default es una señal fuerte de que las reescrituras memory-safe ya no son experimento: son producción. Para el mundo DevOps e infra, suma presión a la tendencia de mover componentes críticos —desde el kernel y los containers hasta las herramientas de línea de comandos— hacia lenguajes que eliminen clases enteras de bugs de memoria.
