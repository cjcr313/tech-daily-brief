---
title: "Microsoft Patch Tuesday Julio 2026: 570 vulnerabilidades y 3 zero-days, un récord histórico"
author: Carlos
pubDatetime: 2026-07-15T10:00:00Z
slug: microsoft-patch-tuesday-julio-2026-570-flaws
featured: false
draft: false
tags:
  - Infraestructura
  - Cloud
description: "Microsoft batió su propio récord con 570 vulnerabilidades parcheadas en julio 2026, incluyendo 3 zero-days. La IA ahora descubre más flaws que los atacantes."
---

Microsoft tiró la casa por la ventana este Patch Tuesday de julio: **570 vulnerabilidades parcheadas**, batiendo todos los records anteriores. Y de esas, **3 son zero-days**, dos de ellas ya explotadas activamente en ataques.

## Los números

- **570 vulnerabilidades totales** (sin contar Edge/Chromium ni fixes previos del mes)
- **59 críticas** (48 RCE, 9 escalada de privilegios, 1 security bypass, 1 spoofing)
- **3 zero-days:**
  - 2 explotadas activamente en ataques
  - 1 públicamente divulgada

Para contexto: este mes también se excluyeron **468 flaws de Microsoft Edge/Chromium** que Google fixeó y que después se portaron a Edge. Si los contarán, el total superaría las 1.000 vulnerabilidades.

## Los 3 zero-days

### 1. Active Directory Federation Services (AD FS) — Explotado activamente
- **Tipo:** Escalada de privilegios local
- **Impacto:** Un atacante autorizado puede obtener privilegios administrativos
- **Descubierto por:** Jeremy Kingston y Scott Clark del equipo DART de Microsoft (Detection and Response Team), probablemente durante una investigación de incidente activo
- Microsoft no dio detalles de cómo se explotó

### 2. Microsoft SharePoint Server — Explotado activamente
- **Tipo:** Escalada de privilegios vía red
- **Impacto:** Un atacante remoto no autenticado puede ganar privilegios elevados
- **Mitigación temporal:** Habilitar AMSI en el servidor y setear Request Body Scan mode a Full
- **Descubierto por:** Jayson Frost (Mandiant IR), Genwei Jiang (Google Cloud), FLARE OTF, y un investigador anónimo
- Que Mandiant y Google Cloud estén involucrados sugiere que esto se usó en ataques dirigidos

### 3. Windows BitLocker — Públicamente divulgado
- **Tipo:** Bypass de BitLocker Device Encryption
- **Impacto:** Un atacante con **acceso físico** puede acceder a datos encriptados
- O sea, el BitLocker que se supone protege tus discos si te roban el laptop... tiene un hueco
- Descubierto por un investigador anónimo

## ¿Por qué tantos flaws ahora?

La semana pasada Microsoft ya advirtió que habría un **aumento en el volumen de patches**. La razón: comenzaron a usar un **sistema de descubrimiento de vulnerabilidades potenciado por IA** que identifica flaws en el codebase de Windows antes de que los atacantes las exploten.

Paradójico: la misma IA que algunos culpan por nuevos riesgos de seguridad es la que ahora encuentra y ayuda a cerrar vulnerabilities a escala sin precedentes.

## Lo que tienes que hacer

1. **Patchear ya**, especialmente si usas AD FS o SharePoint Server on-premise
2. **Revisar logs** de AD FS y SharePoint en busca de actividad sospechosa de los últimos 30 días
3. **Habilitar AMSI** en SharePoint Server si no lo tienes activo
4. Para BitLocker: el fix physical access es importante si manejas devices sensibles

**Fuentes:** BleepingComputer, Microsoft Security Response Center
