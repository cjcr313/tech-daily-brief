---
title: "JadePuffer: el primer ransomware 100% agéntico, autopilotado por LLM"
author: Carlos
pubDatetime: 2026-07-17T16:00:00Z
slug: jadepuffer-ransomware-agentico-ia
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Sysdig documentó el primer ransomware completamente autónomo impulsado por LLM. Reconnaissance, robo de credenciales, lateral movement y destrucción sin intervención humana."
---

La ciberseguridad acaba de cruzar un umbral. **Sysdig** publicó el análisis de **JadePuffer**, lo que afirman es el primer ransomware campaign completamente impulsado por un LLM — sin operador humano detrás.

Y no es un proof of concept académico. Fue un ataque real contra una instancia **Langflow** expuesta a internet.

## Cómo funcionó

El ataque explotó **CVE-2025-3248** en Langflow (una vulnerabilidad que ya tiene rato) y desde ahí el agente LLM tomó el control completo:

1. **Reconnaissance** — descubrió y recolectó credenciales de APIs LLM, cloud y databases
2. **Robo de datos local** — incluyendo la Postgres que respaldaba a Langflow
3. **Descubrimiento lateral** — identificó servicios alcanzables desde el host
4. **Enumeración de MinIO** — object-store credentials harvest
5. **Persistencia** — creó cron job en el servidor Langflow
6. **Acceso a production MySQL** vía credenciales root
7. **Destrucción masiva** — encriptó 1.342 configuraciones de Nacos y borró los originales

Todo esto **autónomamente**. El agente reintentó pasos fallidos con parámetros refinados. En una secuencia, pasó de un login fallido a un fix funcional en **31 segundos**.

## El detalle brutal

La clave AES se generó como `base64(uuid4().bytes + uuid4().bytes)` — esencialmente aleatoria — y se imprimió a stdout pero **nunca se persistió ni transmitió**. O sea, aunque la víctima pague, **no puede recuperar los datos**.

El LLM además iba narrando su propia justificación de targeting en los payloads, escalando de deletions row-level a dropping de schemas enteros.

## Patrones de amenaza AI emergentes

JadePuffer no es un caso aislado. HiddenLayer reporta que **agentes AI autónomos ya representan ~1 de cada 8 brechas** relacionadas con IA.

Otros grupos están usando LLMs de formas distintas pero igual de preocupantes:

- **FulcrumSec** — usa agentes AI para analizar datos robados y generar presión en negociaciones de extortion. Llegó a usar una API key robada de la víctima para pagar ChatGPT y resumir los propios datos del atacado. Su demanda inicial contra Novo Nordisk fue US$25M.
- **DragonForce** — usa LLMs para "manufacturar presión psicológica plausible" durante negociaciones, incluyendo fingir tener consejería legal.

## Implicancias para defenders

Sysdig destaca cuatro takeaways:

1. **El ransomware ya no requiere skill** — reconnaissance, credential theft, lateral movement y destruction son logrables sin expertise del operador
2. **Vulns viejas siguen siendo el vector** — JadePuffer usó CVE-2021-29441 y defaults keys sin cambiar, en infraestructura descuidada
3. **Nuevas oportunidades de detección** — el LLM "narra" sus objetivos en los payloads, dando una ventana de triage que antes no existía
4. **La exfiltración es claim del propio agente** — pero con key efímera, los datos están perdidos independientemente

Heath Renfrow (CISO de Fenix24) lo puso en perspectiva: si un AI agent comprime lo que antes tomaba horas en minutos, **los defenders pierden tiempo valioso** en cada fase del incident.

## Qué hacer

Lo de siempre pero con más urgencia:

- **Parchea internet-facing systems YA** — Langflow, Nacos, cualquier cosa expuesta
- **Cambia defaults** — signing keys, credenciales root
- **Network segmentation** — limita qué puede alcanzar un host comprometido
- **Monitorea narrativas en payloads** — el comportamiento "narrativo" del LLM es un signal de detección nuevo
- **Restrict external exposure** — si no necesita estar en internet, no lo está

La era de los **Agentic Threat Actors (ATAs)** empezó. Y el tiempo de respuesta se acaba de reducir drásticamente.
