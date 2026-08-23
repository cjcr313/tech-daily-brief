---
title: "Google abre HEIR: inferencia de IA sobre datos encriptados a un clic de distancia"
author: Carlos
pubDatetime: 2026-08-23T22:05:00Z
slug: google-heir-ia-privada-encriptacion-homomorfica
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Google lanzó HEIR, un toolchain open source que compila modelos pre-entrenados para operar sobre datos cifrados. Spam filtering y detección de fraude sin exponer la data del usuario."
---

![Ilustración editorial de un candado digital protegiendo un cerebro de circuitos, con flujo de datos cifrado en tonos azules, estilo tech editorial](../../assets/images/2026-08-23-google-heir-ia-privada-encriptacion-homomorfica.jpg)

Google anda serio con el tema de **IA privada** y esta vez no es un paper académico: lanzó **HEIR (Homomorphic Encryption Intermediate Representation)**, un compilador y toolchain open source que permite tomar modelos de IA **pre-entrenados** —pensados para datos en claro— y compilarlos para que operen directamente sobre **datos encriptados**.

## ¿Qué cambia acá?

La encriptación homomórfica (FHE) no es nueva: la idea de procesar ciphertexts sin descifrarlos lleva años dando vueltas. El problema siempre fue el mismo: es un dolor de implementar y el overhead es brutal.

Lo que hace HEIR es abstraer esa complejidad. El flujo:

1. Escribís tu programa en Python
2. Anotás qué tipos de datos deben ir encriptados
3. HEIR compila todo para ejecución homomórfica usando una representación intermedia (MLIR) que escala across dialectos

Google ya lo usó internamente para casos concretos: **recomendaciones de contenido sin exponer datos del usuario, detección de fraude con tarjetas protegiendo la info financiera, detección de intrusiones de red sin revelar el contenido de los paquetes y detección de hotwords de audio sin compartir grabaciones**.

## El elefante en la sala: el rendimiento

Los lectores de Hacker News sacaron la calculadora rápido, y los números duelen: según comentarios citados por InfoQ, una operación de igualdad de 64 bits toma ~80ms, suma y resta ~100ms, y una división puede llegar a **8 segundos**. Con overheads de ~1000x, la viabilidad comercial no es obvia.

Pero hay un matiz interesante para LLMs: los modelos de lenguaje viven de sumas y multiplicaciones —justo lo que FHE maneja mejor— y casi no usan branching, que es donde esta técnica más sufre. O sea, el caso de uso "consulta privada a un LLM" podría ser de los primeros en volverse práctico.

## Por qué importa para infra

Para los que operan servicios en cloud multi-tenant o plataformas con datos sensibles (salud, banca, gobierno), esto apunta a un futuro donde **el proveedor procesa sin ver**: ideal para servicios on-device, mitigación de exposición de modelos propietarios y cumplimiento regulators estricto.

Todavía no es "un clic" real —el proceso requiere pasos manuales partiendo por exportar el modelo PyTorch a MLIR— y Google no publicó benchmarks de velocidad sobre LLMs. Pero la dirección es clara: la privacidad en IA está dejando de ser trade-off binario entre "todo en mi hardware" y "todo en el datacenter de otro".

Fuentes: InfoQ, Google Security Blog, GitHub (google/heir).
