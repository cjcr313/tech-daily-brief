---
title: "El WAF de Cloudflare ahora también lee las respuestas: detección de transacciones completas, hasta en el plan Free"
author: Carlos
pubDatetime: 2026-10-22T21:15:00Z
slug: cloudflare-waf-deteccion-transacciones
featured: false
draft: false
tags:
  - Observabilidad
  - Seguridad
description: "Cloudflare sumó detección de transacciones completas a su WAF: correlaciona cada request con su response para confirmar exploits exitosos y exposición de datos. Disponible para todos los planes, incluido Free."
---

![Ilustración editorial tech de un firewall web inspeccionando tanto la petición como la respuesta HTTP para detectar exploits exitosos](../../assets/images/cloudflare-waf-deteccion-transacciones.jpg)

El WAF de Cloudflare llevaba años mirando solo la mitad de la película: el request. Ahora puede **correlacionar cada petición con su respuesta** para responder dos preguntas a la vez: "¿este request se ve malicioso?" y — la clave — **"¿qué pasó cuando la aplicación lo procesó?"**. Y la capacidad viene con dos piezas: detección de transacciones completas y **response rules** que pueden bloquear la respuesta del origen antes de que llegue al atacante.

## Por qué el request-only ya no alcanza

El ejemplo del propio blog lo deja clarito. Un path traversal:

```
GET /download?file=../../config/database.ini
```

Inspección de request detecta el intento y lo bloquea. Pero si el request llega al origen, solo la respuesta te dice si el exploit *funcionó*: un `200 OK` con `username=app_service` y un password en texto plano cuenta una historia muy distinta a un error de rechazo. Tratar todo request sospechoso como exploit confirmado te ahoga en falsos positivos; ser conservador deja pasar tráfico ambiguo. **La respuesta es la evidencia que faltaba.**

## Detección y mitigación, separadas por diseño

La detección analiza el tráfico y adjunta metadata; las reglas deciden qué hacer con eso. Nuevos campos para usar en response custom rules:

- `cf.waf.signature.response.confidence`
- `cf.waf.signature.response.categories`
- `cf.waf.signature.response.ref`

Todo visible en Security Analytics para investigar antes de bloquear — el patrón "observa primero, actúa después" que a los equipos de seguridad les quita el susto del botón rojo.

## Conexión php2shell (y con la era de los agentes)

El timing no es casual: las primeras protecciones managed con esta capacidad apuntan a **php2shell**, las CVEs críticas de PHP que [cubrimos hoy](/posts/php-php2shell-cves-criticas-rce). Cloudflare desplegó reglas usando señales de request y respuesta *antes* de la divulgación pública. Y el blog es explícito: los modelos de frontera están destapando vulnerabilidades a escala, y los agentes atacantes son persistentes — iteran payloads con feedback y encadenan vulnerabilidades. La respuesta de la app les dice si van bien. Ahora también te lo dice a ti.

## Lo mejor: para todos

General availability **incluido el plan Free**. Detecciones always-on, sin configuración, con resultado en analytics.

Para los equipos de observabilidad, esto refuerza una tesis que ya es tendencia: **la seguridad cada vez se parece más a observabilidad con consecuencias** — correlacionar señales end-to-end para separar el intento del incidente. Menos ruido, más certeza.
