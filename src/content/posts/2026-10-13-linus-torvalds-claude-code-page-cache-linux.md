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
