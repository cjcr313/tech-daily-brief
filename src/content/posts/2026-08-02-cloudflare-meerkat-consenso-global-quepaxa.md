---
title: "Cloudflare presenta Meerkat: consenso global sin líder basado en QuePaxa"
author: Carlos
pubDatetime: 2026-08-02T16:00:00Z
slug: cloudflare-meerkat-consenso-global-quepaxa
featured: false
draft: false
tags:
  - Arquitectura
  - Infraestructura
description: "Cloudflare construye Meerkat, un servicio de consenso globalmente consistente basado en el algoritmo QuePaxa. Adiós Raft, hola writes sin líder."
---

![Cloudflare presenta Meerkat: consenso global sin líder basado en QuePaxa](../../assets/images/2026-08-02-cloudflare-meerkat.jpg)

Cloudflare dejó caer una bomba arquitectónica esta semana: **Meerkat**, un servicio interno de control-plane globamente consistente basado en el algoritmo **QuePaxa**. Y sí, es la primera implementación productiva de QuePaxa a escala global.

## El problema con Raft

Si has trabajado con sistemas distribuidos, probablemente conoces Raft. Es el algoritmo de consenso de facto: elegante, entendible, ampliamente adoptado. Pero tiene un talón de Aquiles en redes de área amplia (WAN): **depende de líderes y timeouts**.

El líder es el único réplica que puede aceptar writes. Si el líder cae —por crash o degradación de red— el sistema queda indisponible hasta que otro réplica hace timeout y se elige uno nuevo. En una red global como la de Cloudflare, donde los nods están esparcidos por todo el planeta, eso es un problema real.

## Qué hace diferente a Meerkat

Meerkat usa **QuePaxa**, un algoritmo de consenso **asíncrono** que permite que **todos los réplicas acepten writes** sin depender de un líder ni de timeouts. Las ventajas:

- **No hay indisponibilidad por elección de líder:** si un réplica cae, las demás siguen aceptando writes
- **Progreso bajo degradación de red:** a diferencia de Paxos/Raft (que son parcialmente síncronos), QuePaxa hace progreso incluso con latencia errática
- **Consistencia fuerte garantizada:** todos los réplicas acuerdan el orden y valores de las operaciones comprometidas (linearizabilidad)

El modelo mental: Meerkat mantiene un **log de slots**. Cada slot puede contener un evento o no. Si dos réplicas deciden un valor para un slot, ese valor es el mismo. Simple pero poderoso.

## Trade-offs: no es plata de la ley

El equipo de Cloudflare (James Larisch, Bob Halley y João Pedro Leite) fue claro: Meerkat **no es un reemplazo general para bases de datos**. El costo principal de cualquier algoritmo de consenso son los **round-trips**, y QuePaxa toma entre **1 y 3 round-trips** (a veces más) entre el proposer y la mayoría de réplicas para decidir una propuesta.

En Hacker News, la discusión fue intensa. Un comentarista destacó:

> *"Lo interesante es que sería la primera implementación productiva de un algoritmo de consenso asíncrono (QuePaxa). Paxos, Raft, etc. son todos parcialmente síncronos —dependen de timeouts y solo progresan si el delay de mensajes es suficientemente bajo comparado con el timeout. QuePaxa no depende de timeouts y progresa incluso bajo fluctuaciones salvajes de latencia."*

La pregunta abierta de la comunidad: ¿el rendimiento en el caso normal es competitivo? Consensus overhead típicamente añade **40-60% de latencia** en deployments multi-región de Paxos. Si Meerkat logra reducir eso, es un win significativo.

## Estado actual

Meerkat **aún no está en producción**, pero Cloudflare ya completó **múltiples proofs of concept con hasta 50 réplicas distribuidas mundialmente**. Soporta un key-value store transaccional y un sistema de leasing.

La comunidad ya está pidiendo que Cloudflare **open-sourcee la especificación** formal que usaron para diseñar y verificar Meerkat. Verificación formal en sistemas distribuidos no es trivial, y si liberan el modelo, sería un aporte enorme al ecosistema.

## Por qué importa

1. **Para arquitectos de sistemas distribuidos:** si Cloudflare logra demostrar que QuePaxa es viable en producción a escala global, podría cambiar el default de "usar Raft" a "evaluar alternativas asíncronas" para sistemas WAN.
2. **Para equipos de plataforma:** el patrón de separar el consensus log del data plane (Meerkat como fundación para KV transaccional y leasing) es un blueprint replicable.
3. **Investigación aplicada:** esto es paper-to-production en tiempo récord. QuePaxa es un trabajo académico de Brian Ford (MIT/Cornell), y verlo en producción global es un win para la investigación en sistemas distribuidos.

Cloudflare sigue demostrando que no son solo un CDN — son uno de los labs más interesantes de distributed systems a escala, compitiendo directamente con Google (Spanner, Chubby) y Meta (Paxos).

---

**Fuentes:** [Cloudflare Blog](https://blog.cloudflare.com/meerkat-introduction/), [InfoQ](https://www.infoq.com/news/2026/08/cloudflare-meerkat-consensus/), [Hacker News](https://news.ycombinator.com/item?id=48831565), [QuePaxa paper (PDF)](https://bford.info/pub/os/quepaxa/quepaxa.pdf)
