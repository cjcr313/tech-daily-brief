---
title: "Cloudflare hace a Python ciudadano de primera en Workers (GA) y elimina el 'pegamento' JavaScript"
author: Carlos
pubDatetime: 2026-09-21T15:00:00Z
slug: cloudflare-python-workers-ga
featured: false
draft: false
tags:
  - Cloud
  - DevOps
  - IA
description: "Python Workers sale de beta y queda GA: adiós a la capa de conversión JavaScript, con soporte para Django, Flask y FastAPI vía WSGI/ASGI."
---

![Ilustración editorial tech de una serpiente Python recorriendo un circuito de edge computing en la nube, con nodos distribuidos brillantes, tonos naranjas y azules sobre fondo oscuro](../../assets/images/2026-09-21-cloudflare-python-workers-ga.jpg)

Cloudflare declaró **disponibilidad general (GA)** para **Python Workers**, convirtiendo a Python en un lenguaje totalmente soportado en su plataforma de edge computing. La gran novedad no es poder escribir Workers en Python —eso ya existía en beta desde abril de 2024— sino que **se acabó el "pegamento" JavaScript** que ensuciaba la experiencia.

## Adiós a la capa de conversión

Durante la beta, podías escribir tu Worker en Python, pero cada interacción con los servicios de Cloudflare seguía exponiendo la maquinaria JavaScript por debajo. Mandar un diccionario de Python a una Queue, por ejemplo, exigía una conversión explícita a objeto JavaScript en el borde del runtime.

Ahora Cloudflare **absorbe esa conversión dentro del runtime y del SDK de Python**. Tu código puede llamar directo a los bindings de R2 (object storage), D1 (bases de datos), Workers AI, Durable Objects, Queues, Workflows e Hyperdrive **sin ningún adaptador JavaScript intermedio**.

## Frameworks que "simplemente funcionan"

Otro cambio grande: soporte de conectores **WSGI y ASGI** para **Django, Flask y FastAPI**. Workers toma el rol que normalmente cumple un servidor web como Uvicorn o Gunicorn, traduciendo requests a las estructuras que esos frameworks esperan. En la práctica, podés mantener tu estructura de aplicación Python sin levantar ni configurar un proceso de servidor aparte.

## Por qué el timing importa

Python es el idioma por defecto del ecosistema de IA: APIs de modelos, librerías de orquestación y tooling de datos. Cloudflare confirma que Python Workers ya puede correr paquetes como la **librería de OpenAI, LangChain y el paquete Python de Model Context Protocol (MCP)**. Para lograrlo, parchearon los clientes HTTP asíncronos de Python para enrutar las requests por el Workers Fetch API.

El pitch es la consolidación: una app Python puede recibir un request por FastAPI, llamar una librería de orquestación, mandar inferencia a Workers AI, encolar trabajo en una Queue y guardar output en R2 —todo sin meter un servicio JavaScript entre medio.

## Los límites que siguen

El GA no significa que todo paquete Python corra. **Solo funcionan paquetes pure-Python**, o distribuidos para la plataforma PyEmscripten o ya incluidos en Pyodide. Los paquetes con extensiones nativas en C, C++ o Rust necesitan builds compatibles con WebAssembly. Además, el filesystem es efímero en memoria: los datos desaparecen al destruirse el isolate, así que lo persistente va a R2, KV o Durable Objects.

## La foto completa

El GA se armó con una serie de updates de septiembre, no un switch único: soporte WSGI/ASGI el 2 de septiembre, cambio del límite de bundle (de 3/10 MB comprimido a **64 MiB descomprimido** en todos los planes) el 4, Python 3.14 como default el 8, y soporte de Hyperdrive para PostgreSQL/MySQL el 16.

En resumen: Cloudflare apuesta a que los devs de Python adopten un runtime WebAssembly cuando se comporta lo suficiente como el entorno que ya usan. Para APIs, agentes, orquestación y workloads event-driven, es una jugada fuerte.

**Fuente:** Cloudflare Blog / RuntimeWire — anuncio de GA de Python Workers.
