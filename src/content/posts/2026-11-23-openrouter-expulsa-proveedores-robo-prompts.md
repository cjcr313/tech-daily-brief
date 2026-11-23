---
title: "OpenRouter expulsa a tres proveedores de IA tras descubrir robo masivo de prompts"
author: "Nauta Lab"
pubDatetime: 2026-11-23T13:10:00Z
slug: openrouter-expulsa-proveedores-robo-prompts
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Investigación con credenciales canario pilló atacantes robando prompts dentro de proveedores de inferencia de IA; OpenRouter expulsó a tres y quitó el sello ZDR a 125 endpoints."
---

![Ilustración editorial de seguridad en la cadena de suministro de inferencia de IA](../../assets/images/openrouter-expulsa-proveedores-robo-prompts.jpg)

Si tu estrategia de seguridad con proveedores de IA era "confiar en el flag de Zero Data Retention", tenemos malas noticias. **OpenRouter anunció el 22 de noviembre que desvinculó a tres proveedores de inferencia** de su plataforma y le quitó el estatus ZDR a **125 endpoints**, después de que una investigación de la firma de seguridad Dragos descubrió atacantes copiando prompts de clientes desde adentro de las propias empresas de hosting. La propia OpenRouter aclara que ella no fue vulnerada: el problema estaba en sus proveedores.

## Dos millones de prompts trampa

La historia es de libro. El equipo de Dragos —liderado por HD Moore, el creador de Metasploit— pasó de julio a noviembre enviando **casi dos millones de prompts** a servicios de IA populares, cada uno cargado con URLs únicas y credenciales reales (incluidas llaves AWS atadas a cuentas vacías). Cualquier uso de esos canarios significaba una sola cosa: alguien leyó el prompt.

Los resultados dan frío:

- Encontraron atacantes robando datos **dentro de tres proveedores de hosting distintos**. El primer compromiso data de mediados de julio y ninguno de los tres se había dado cuenta hasta que Dragos les avisó.
- En la ventana más grave, a fines de octubre, los atacantes se llevaron **todo lo que Dragos envió**, incluidas un par de centenas de llaves AWS. Las probaron a las horas y las llaves trampa terminaron en decenas de miles de llamadas a la API.
- El 1 de noviembre el atacante sumó **ARTEX**, una herramienta de pentesting impulsada por IA. Sus user-agents (`artex-agent` y `artex-judge-r121`) no aparecen en ninguna lista pública de indicadores: vale la pena agregarlos a las detecciones.

## El sello "Zero Data Retention" que no significaba nada

Acá viene lo incómodo. Un laboratorio de IA chino que Dragos prefirió no nombrar **leyó los enlaces secretos de más de la mitad de los prompts** enviados a sus modelos entre julio y octubre, incluidos dos tercios de los marcados como ZDR o "sin recolección de datos". Y los proveedores estadounidenses que revenden esos modelos dispararon el mismo scraper.

El caso más película: un enlace canario de un prompt ZDR enviado a un proveedor gringo **apareció 24 días después en un chat de Feishu**, y en dos minutos lo abrieron tres computadores y tres teléfonos en Pekín y Shanghái. La frase de Moore queda para el marco: *"Zero Data Retention se supone que signifique algo"*.

Ars Technica reportó que el correo a clientes de OpenRouter señala a **MiniMax** entre los expuestos, ya sea directo o vía AtlasCloud, Novita o StreamLake. A eso se suman incidentes ya conocidos: Together AI perdió muestras de prompts de MiniMax M3, GLM-5.2 y Kimi K2.6 por una credencial de Hugging Face filtrada, y Phala pidió rotar secretos enviados vía DeepSeek V4 Flash entre el 21 de octubre y el 8 de noviembre.

## Qué hace OpenRouter (y qué deberías hacer tú)

OpenRouter dice que adaptará las pruebas de Dragos para correrlas **de forma continua**, que auditará las rutas de red en busca de reenvíos ocultos a terceros, y que los endpoints castigados solo recuperarán el sello ZDR con garantías y validación. Atlas Cloud, Novita, Phala y Together ya publicaron avisos de seguridad.

La lectura operativa es simple: **en la cadena de suministro de IA, tu prompt es un secreto que viaja**. Si enviaste llaves, tokens o credenciales por rutas afectadas, a rotar todo. Y como resumió Moore: *"Un flag de privacidad no ayuda cuando el atacante ya está adentro"*.

**Fuentes:** [The Hacker News](https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html) · [The Next Web](https://thenextweb.com/news/openrouter-drops-providers-dragos-ai-prompt-theft-canaries) · [Dragos](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens) · [OpenRouter](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) · [Ars Technica](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/)
