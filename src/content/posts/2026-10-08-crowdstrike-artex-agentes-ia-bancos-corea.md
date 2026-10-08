---
title: "CrowdStrike atribuye los hackeos a bancos coreanos a ARTEX: pentesting agéntico open source chino con DeepSeek y GLM de motor"
author: Carlos
pubDatetime: 2026-10-08T15:07:00Z
slug: crowdstrike-artex-agentes-ia-bancos-corea
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "CrowdStrike Intelligence ligó ataques con exfiltración de datos a financieras surcoreanas a un actor de habla china que operaba ARTEX, una herramienta de pentest agéntica open source, encadenando DeepSeek v4.1-flash, GLM-5.3 y Grok 4.6."
---

![Ilustración editorial de una silueta de operador frente a múltiples terminales con chats de IA dirigiendo ataques hacia un edificio bancario iluminado, neón verde sobre fondo oscuro, estilo ilustración de ciberseguridad profesional, sin texto](../../assets/images/2026-10-08-crowdstrike-artex-agentes-ia-bancos-corea.jpg)

CrowdStrike Intelligence publicó un reporte que marca un antes y un después en cómo miramos a los atacantes con IA: una campaña contra **organizaciones financieras de Corea del Sur** — activa de **fines de septiembre a principios de octubre de 2026** y con **exfiltración de datos confirmada** — fue ejecutada con **ARTEX, una herramienta de pentesting agéntica open source desarrollada en China**.

## Cómo funcionó

Lo jugoso es la telemetría que dejó tirada el operador. CrowdStrike encontró **directorios abiertos** con historiales de sesión de **Claude Code**, archivos de configuración de ARTEX y archivos de memoria de Claude. Ahí se revela la arquitectura completa:

- **Dos servidores**: una IP en Hong Kong como infraestructura primaria y la **38.244.50[.]120** hospedando la instancia ARTEX con la que se habrían ejecutado los ataques a Corea.
- El backend LLM principal de ARTEX era **DeepSeek v4.1-flash** (accedido vía el proxy/reseller xcai[.]pro), complementado con **GLM-5.3 de Zhipu AI** y **Grok 4.6** en sesiones adicionales de Claude Code.
- El `CLAUDE.md` del atacante contenía un **prompt de pentesting en chino** con instrucciones operativas para el LLM.

Entre los blancos reportados: un **servicio de consulta de avance de créditos** usado por corredores financieros y un **sistema móvil de soporte para empleados** de bancos. El actor incluso le preguntó a Claude **dónde se vende este tipo de datos robados y cómo encontrar grupos de Telegram** para eso. Cero sutileza.

## ¿Quién es el atacante?

Con confianza moderada, CrowdStrike perfila a un **hispanohablante de chino, financieramente motivado**. En una sesión pidió armar un CV de "security researcher" con los resultados de la campaña — incluyendo nombre, teléfono, Telegram **@YY520CN**, 26 años, Universidad Tecnológica del Sur de China y ubicación en **Maoming, Guangdong**. Puede ser real o puede ser señuelo, pero los IOC (una decena de IPs proxy) ya están públicos.

## Por qué importa

Esto no es "la IA escribe mejor malware": es **agentic AI operando ofensivamente de punta a punta**, multiplicando el tempo operativo de un solo actor. Y nota cultural para la industria: los motores fueron modelos **chinos y accesibles vía API barata**, no necesariamente un frontier model exclusivo. CrowdStrike anticipa que los adversarios seguirán experimentando con tooling agéntico — y que la defensa tiene que empezar a monitorear la salida, no solo la entrada.
