---
title: "Linus Torvalds publicó una rama del kernel de Linux co-escrita con Claude Code: casi triplica las lecturas del page cache"
author: Carlos
pubDatetime: 2026-10-13T15:05:00Z
slug: linus-torvalds-claude-code-page-cache-linux
featured: false
draft: false
tags:
  - DevOps
  - IA
description: "La rama noref-filemap-read-with-llm elimina el conteo de referencias de folios en lecturas pequeñas: de 10M a 33M lecturas por segundo. Torvalds acreditó a Claude Code el código, los tests y hasta el borrador de la carta."
---

![Ilustración editorial del pingüino de Linux estilizado trabajando junto a un asistente de IA luminoso sobre el código fuente del kernel, con un page cache representado como bloques de memoria brillantes acelerando, paleta azul y naranja sobre fondo oscuro, estilo ilustración tech profesional, sin texto](../../assets/images/2026-10-13-linus-torvalds-claude-code-page-cache-linux.jpg)

Si alguien todavía discute si los agentes de código sirven para algo serio, este fin de semana llegó el contraejemplo definitivo: **Linus Torvalds publicó una rama del kernel de Linux cuya serie de parches fue co-escrita con Claude Code** — sí, el agente de línea de comandos de Anthropic — y los números de performance son cualquier cosa de modestos: **casi 3x de throughput en lecturas pequeñas del page cache**.

## Qué es la rama

Se llama **`noref-filemap-read-with-llm`** y apareció en el árbol principal de Torvalds el 10 de octubre, montada sobre **7.3-rc6**. Es una serie de **8 parches** que ataca un cuello de botella clásico de escalabilidad en el page cache de Linux: cuando varios hilos leen el mismo archivo en trozos pequeños, el **conteo de referencias de los folios** provoca un brutal *cache line bouncing* entre cores. La solución: **leer del page cache sin tomar referencias de folio** en ese path.

Todavía no está mergeada — es rama experimental, no mainline — pero el hecho de que venga del maintainer supremo, en su propio repo, le da otro estatus.

## El detalle que hizo ruido: los créditos

En la carta de presentación de la serie, Torvalds escribió algo que nadie esperaba del tipo con última palabra sobre cada línea de Linux:

> El código, los programas de prueba, la revisión detrás de su lista de problemas abiertos y el primer borrador de esta misma carta vinieron de Claude Code.

Agregó que el trabajo fue hecho "bajo mi dirección" y que las mediciones corrieron "en mi máquina". O sea: el agente escribió, Torvalds dirigió, revisó y validó. El flujo de trabajo que todos los platform teams discuten hace un año, aplicado al proyecto de software más cargado de historia del planeta.

## Los números

En su laptop de 8 hilos, el benchmark de lecturas pequeñas mostró:

- **Throughput: de ~10M a ~33M lecturas por segundo** — casi el triple.
- **Ciclos de kernel por lectura: de ~2.950 a 725** — cuatro veces menos trabajo por operación.
- El win escala con concurrencia sobre el mismo archivo: justo el escenario donde el refcounting mataba la escalabilidad.

## Por qué importa más allá del lore

- **Es Linux, no un side project**: una mejora del 3x en el path de lectura del page cache toca literalmente cada workload que lee archivos — bases de datos, contenedores, serving estático, builds.
- **Valida el patrón "agente + revisor senior"**: el aporte no es reemplazar ingenieros, es que un ingeniero extremadamente senior produzca en un fin de semana lo que antes tomaba semanas de micro-optimización.
- **Precedente cultural**: si Torvalds — históricamente escéptico del hype — publica en su árbol una rama `-with-llm`, la discusión sobre "si la IA puede escribir código de kernel" quedó oficialmente desactualizada.

Lo que sigue es el proceso normal: revisión de la comunidad de mm (memory management), ajustes, y a ver si sobrevive al escrutinio. Pero el punto ya quedó registrado: la frontera de qué código es "demasiado crítico para IA" se movió bastante esta semana.

### Update: 15 de octubre, 2026

La revisión de la comunidad llegó y no decepcionó: **los reviewers encontraron una race condition**, tal como manda el manual en memory management. Lo que siguió es una lección de cómo funciona Linux de verdad:

- **La serie creció a 10 parches** (`rcu-free-v3`): la versión original copiaba datos sin retener la referencia del folio y validaba después, dejando carreras con la reclamación y el reemplazo de páginas. La nueva usa un flag `PG_rcu_free` y **reclamación retardada por RCU** para proteger el folio durante toda la copia a userspace.
- **Los números en el Threadripper de 64 hilos son de otro planeta**: de 13,3M a **304 millones de lecturas por segundo** (23x) bajo contención alta, con ciclos por lectura cayendo de ~20.000 a 735. Eso sí, Torvalds mismo advirtió que las ganancias reales en workloads normales serán bastante menores.
- **La race**: Kiryl Shutsemau identificó una condición en `filemap_read_rcu_batch()` donde un reemplazo de folio seguido de una extensión de `i_size` podía exponer datos que nunca se escribieron. Torvalds recomendó adelantar la lectura del tamaño de archivo.
- **Debate de diseño**: Matthew Wilcox (el que detectó el cuello de botella en 2024) cuestionó el flag `PG_rcu_free` y propuso usar un page type; Torvalds rechazó ambas alternativas argumentando que el flag debe fijarse mientras el folio aún puede estar mapeado en userspace, y que reclamar desde la lista inactiva no cubre truncate ni hole-punch. Shutsemau propuso restringir el flag a sistemas 64-bit, con apoyo de David Hildenbrand (Arm).
- **Costos del enfoque**: en la primera implementación, encolar más de 1.024 páginas por CPU forzaba un grace period acelerado, y una lectura single-thread de 16 bytes subía de ~4.150 a ~6.550 ciclos. Queda por ver si ese regression sobrevive en `rcu-free-v3`.
- **El dato spicy**: Torvalds admitió que había pasado **18 meses corriendo su propia versión del fix... con un bug**. En su laptop de 8 hilos, la contabilidad de referencias explicaba el 99,92% de los HITMs cross-core. Y el propio Torvalds, que antes criticó a developers que dicen que la IA escribe el 99% de su código, terminó acreditando a Claude Code la implementación, los tests y el primer borrador de la carta.
- **Nuevo dueño del tema**: Torvalds le traspasó el desarrollo posterior de la serie a **Kiryl Shutsemau**, que ya había trabajado este mismo cuello de botella.

O sea: el agente aceleró el borrador, pero fue la revisión humana —esa que algunos dan por obsoleta— la que encontró la carrera. El proceso funcionó exactamente como debe.
