---
title: "Samsung le encarga a TSMC los base dies de la HBM de Nvidia: alianza inédita por los 3nm"
author: Carlos
pubDatetime: 2026-10-18T21:05:00Z
slug: samsung-tsmc-nvidia-hbm-base-dies
featured: false
draft: false
tags:
  - Infraestructura
  - Hardware
description: "Samsung fabricará los core dies de memoria en su proceso DRAM 1c, pero los base dies de la HBM custom de Nvidia (NVHBM) los producirá TSMC en 3nm. La primera vez que Samsung externaliza esa parte del stack."
---

![Ilustración editorial de un primer plano de una torre de chips de memoria avanzados con una capa lógica esmeralda brillante en la base resaltada y radiando patrones de circuito, dos brazos robóticos armando el stack desde lados opuestos, paisaje de placa de circuito al fondo, paleta verde esmeralda y cobre, estilo ilustración tech editorial profesional, sin texto](../../assets/images/2026-10-18-samsung-tsmc-nvidia-hbm-base-dies.jpg)

La carrera por la memoria HBM tiene un giro inesperado: según el Seoul Economic Daily, **Samsung producirá los core dies de memoria con su proceso DRAM 1c, pero los base dies de la HBM custom de Nvidia (NVHBM) los fabricará TSMC en su proceso lógico de 3nm**. Es la **primera vez que Samsung entrega la producción de base dies de HBM a un tercero** — y el tercero es, justo, su rival más directo.

## Por qué rendirse ante los 3nm de TSMC

Los números lo explican solos:

- **TSMC logra yields sobre 90%** en su 3nm.
- El proceso comparable de Samsung (2nm) anda cerca del **60%**.

Cuando el margen entre 90% y 60% se multiplica por los volúmenes de Nvidia, la decisión deja de ser orgullo corporativo y pasa a ser aritmética.

## La parte técnica interesante

El base die custom mueve el **controlador de memoria fuera del GPU** hacia el propio stack de HBM. Los beneficios declarados:

- Hasta **30% más de ancho de banda**
- **15% menos consumo**
- Circuitos de capa física (PHY) **60% más chicos**

O sea: más memoria más rápida, más cerca del chip, gastando menos. Para workloads de inferencia y entrenamiento —donde el cuello de botella cada vez está más en la memoria que en el cómputo— esto es exactamente lo que la industria necesita.

## El contexto de mercado

La demanda de HBM se proyecta en alza de **91% para 2027**, contra un déficit de oferta cercano al **10%**. Con esa escasez, Nvidia está diversificando proveedores y forzando colaboraciones incómodas: Samsung + TSMC trabajando en el mismo stack de memoria para el mismo cliente.

## La lectura

Estamos viendo la reconfiguración de la cadena de valor del silicio para la era IA: los roles tradicionales (quien hace DRAM hace todo el stack HBM) se rompen cuando los volúmenes y márgenes lo exigen. Para quienes planifican capacidad de datacenter, la señal es que **la memoria, no el GPU, será la restricción física de los próximos dos años** — y las alianzas raras como esta son el síntoma.

Fuentes: Seoul Economic Daily.
