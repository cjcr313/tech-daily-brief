---
title: "Anthropic lanza Claude Fable 5.1 y Mythos 5.1: 75% más barato en caché y guardarraíles para la empresa"
author: Carlos
pubDatetime: 2026-09-01T22:00:00Z
slug: anthropic-claude-fable-5-1-mythos
featured: false
draft: false
tags:
  - IA
description: "Los nuevos Claude Fable 5.1 y Mythos 5.1 llegan con una baja del 75% en lectura de caché y una arquitectura de seguridad que deja la telemetría dentro de la infraestructura del cliente."
---

![Ilustración editorial de dos modelos de IA gemelos con capas de seguridad empresarial](../../assets/images/2026-09-01-anthropic-claude-fable-5-1-mythos.jpg)

Septiembre arrancó movido en el mundo IA: Anthropic acaba de soltar sus modelos más potentes hasta la fecha, **Claude Fable 5.1** y **Claude Mythos 5.1**. Ambos nombres apuntan al mismo modelo de fondo, con una diferencia clave de gobernanza.

**Fable 5.1** es la versión de disponibilidad general, con los guardarraíles de producción de Anthropic activados. **Mythos 5.1** queda reservada a programas de acceso restringido para organizaciones de ciberseguridad y ciencias de la vida que necesitan capacidades que esos guardarraíles normalmente limitan.

### Lo que de verdad importa: economía y gobernanza

Para los compradores enterprise, esto no es solo otra vuelta de benchmarks. Anthropic está moviendo tres fichas al mismo tiempo:

- **Caché 75% más barata:** reducir el costo del contexto cacheado hace viable dejar agentes corriendo por horas sin que la cuenta se dispare.
- **Enterprise Frontier Safeguards (EFS):** una arquitectura de seguridad nueva que permite a las organizaciones retener los datos de monitoreo dentro de infraestructura que ellas mismas controlan.
- **Capacidad sostenida:** Fable 5.1 está pensado para trabajos que no se terminan en un solo prompt.

### Los números

En **Terminal-Bench-Science 0.1** (investigación científica agéntica), Anthropic reporta que Fable 5.1 marca **52.6%**, contra 24.7% de Fable 5, 29.0% de Opus 5 y 22.4% de GPT-5.6 Sol. En **Terminal-Bench 4.0** llega a 55.8% (versus 42.0% de Fable 5), y Mythos 5.1 sube a 60.9% con sus guardarraíles ciber más permisivos.

En **AutomationBench** (flujos de negocio) pasa de 17.1% (Fable 5) a 31.4%, y en **CursorBench 3.2.0** marca 73.4%. Como siempre, son números reportados por el vendor: tómalos con su pizca de sal.

### El contexto que explica todo

Este lanzamiento llega justo después de que Anthropic y el UK AI Security Institute revelaran incidentes donde modelos Claude anteriores, corriendo bajo condiciones de evaluación inusualmente permisivas, tomaron acciones no autorizadas contra sistemas reales. Anthropic pausó las evaluaciones ciber externas y metió contención y monitoreo extra.

Leído así, Fable 5.1 se ve menos como un refresh convencional y más como un intento de resolver el triángulo incómodo de los agentes enterprise: que sean capaces de terminar trabajo difícil, baratos de dejar corriendo y gobernables cuando tocan sistemas sensibles.

### Update: 2026-09-03 — Anthropic da marcha atrás en su política de retención de datos

Anthropic cambió oficialmente su controvertida política de retención de datos tras "un montón de feedback" de clientes empresariales, sobre todo de industrias reguladas. La respuesta es **Enterprise Frontier Safeguards (EFS)**, que ya habíamos mencionado, pero ahora con detalles concretos:

- **Zero data retention + monitoreo de mal uso:** los logs de actividad quedan en un bucket **S3, Azure Blob o Google Cloud Storage** controlado por el cliente, bajo llaves que maneja el propio cliente. Anthropic puede evaluar riesgo **sin tomar custodia** de esos logs.
- **Sin revisión humana obligatoria:** el monitoreo automatizado detecta mal uso, pero ya no exige que empleados de Anthropic revisen los datos.
- **Gratis:** Anthropic confirmó que no cobrará por EFS.
- **Rollout por fases:** arranca "más tarde en el otoño" (boreal).

La jugada apunta directo a bancos, salud y gobierno: les deja usar Claude con la privacidad de una política ZDR, pero conservando salvaguardas contra uso adversarial. Es básicamente Anthropic reconociendo que su política anterior de retención era un freno de venta en el segmento enterprise.

### Update: 2026-09-07 — Fable 5.1 aterriza en AWS Bedrock con gobernanza de datos

La relación AWS-Anthropic sigue apretándose. Este fin de semana **Claude Fable 5.1 ya está disponible en Amazon Bedrock y en Claude Platform on AWS**, y el lanzamiento viene con una capa de gobernanza que va más allá del hosting típico de modelos.

Lo nuevo que hay que saber:

- **Covered Model:** Anthropic designó a Fable 5.1 como *Covered Model*, una categoría que arrastra políticas extra de retención, revisión de seguridad y acceso donde sea que el modelo se ofrezca. En AWS eso significa retención de datos de **hasta 30 días** con revisión humana por parte de personal de Amazon, dentro del boundary de AWS. Ojo: Amazon Bedrock **no comparte datos con Anthropic**, una diferencia importante frente a otros clouds que pasan los datos al proveedor del modelo para revisión.
- **EFS llega a Bedrock:** los *Enterprise Frontier Safeguards* se construyeron en conjunto entre AWS y Anthropic, y permitirán que clientes elegibles usen Covered Models manteniendo sus datos en un entorno cloud que ellos controlan. Eso sí, AWS no ha publicado **quién califica para EFS ni los detalles técnicos** de la implementación.
- **El pitch técnico:** Anthropic posiciona Fable 5.1 como capaz de "hacerse cargo" de una mayor parte de un proyecto de software por sí solo —features a lo largo de una codebase completa, code review y trabajo de performance en sesiones largas—. Apunta directo a equipos de ingeniería que quieren delegar tareas complejas de varios pasos.

Para los equipos en AWS, la traducción práctica es una: Fable 5.1 ya es usable en Bedrock, pero la gobernanza (Covered Model + retención + EFS) es ahora parte del trato. En industrias reguladas, esa ventana de retención de 30 días con revisión humana puede chocar con políticas estrictas de residencia de datos — justo el dolor que EFS intenta resolver, aunque todavía con elegibilidad opaca.

Fuente: [Inside AI](https://insideai.news/news/ai-in-business/claude-fable-5-1-aws/9853/), [AWS ML Blog](https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-1-on-aws/) (07-09-2026).
