---
title: "Anthropic hace acquihire de Opaque Systems para meter confidential computing en Claude"
author: Carlos
pubDatetime: 2026-10-15T15:05:00Z
slug: anthropic-opaque-confidential-ai-acquihire
featured: false
draft: false
tags:
  - IA
  - Cloud
description: "Anthropic licenció la tecnología de confidential AI de Opaque Systems y contrató a su CEO y CTO. La jugada apunta a que Claude procese datos sensibles cifrados durante el cómputo, clave para bancos, salud y gobierno."
---

![Ilustración editorial tech de un cerebro digital de IA protegido dentro de una bóveda de cristal translúcida con escudos de cifrado brillantes alrededor, sobre un fondo de nubes corporativas estilizadas, paleta azul profundo con acentos violetas, estilo ilustración tech editorial, sin texto](../../assets/images/anthropic-opaque-confidential-ai-acquihire.jpg)

Anthropic sigue comprando talento con puntería: la compañía **licenció la tecnología de confidential AI de Opaque Systems y contrató a parte de su equipo, incluyendo al CEO Aaron Fulkerson y al CTO Rishabh Poddar**. Es un deal estilo acquihire — no una compra outright — y Opaque seguirá existiendo como compañía independiente, aunque el destino de sus productos actuales queda en el aire.

## Qué es Opaque y por qué importa

- Nació hace ~10 años como proyecto de investigación en el **RISELab de UC Berkeley**, con la misión de procesar y analizar los datasets más sensibles manteniéndolos cifrados **incluso durante el cómputo** (confidential computing sobre enclaves/TEE).
- Levantó una **Serie B de US$24 millones a ~US$300 millones de valuación** en febrero de 2026.
- Su foco reciente: permitir que **agentes de IA trabajen sobre datos confidenciales** sin exponerlos al proveedor del modelo.

## Por qué Anthropic lo quiere

La encriptación clásica protege datos en disco y en tránsito, pero cuando un modelo los procesa, están en claro en la memoria del servidor. Para **bancos, salud, seguros y gobierno** — justo los clientes enterprise que Anthropic persigue — eso es un muro: no pueden mandar datos regulados a un LLM en la nube sin cadenas contractuales.

Confidential AI promete derribar ese muro: Claude corriendo en enclaves verificados donde ni siquiera Anthropic puede ver los datos. Es la misma tendencia que toda la industria de cloud ya abrazó con TEEs, y que ahora baja a la capa de modelos.

## El patrón se repite

Este es el **segundo acquihire reciente de Anthropic** (viene de absorber otro equipo antes) y confirma una estrategia: comprar expertise específico en vez de empresas completas. La vicepresidenta de Berkeley y cofundadora Raluca Ada Popa confirmó la noticia, aunque ni Anthropic ni Opaque han detallado cuánta gente se muda ni qué pasa con los clientes actuales de la plataforma de Opaque.

Si tu organización tiene datos regulados y estaba esperando una señal para adoptar LLMs: esta es la dirección. Los próximos meses deberían traer confidential computing como feature de primera clase en las plataformas de inferencia.

**Fuentes:** The New Stack, Constellation Research, The Information.
