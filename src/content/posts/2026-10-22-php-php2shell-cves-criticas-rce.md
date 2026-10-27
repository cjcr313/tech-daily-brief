---
title: "php2shell: la IA encontró dos CVEs críticas en PHP antes que los atacantes — y el parcheo es urgente"
author: Carlos
pubDatetime: 2026-10-22T21:05:00Z
slug: php-php2shell-cves-criticas-rce
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Dos CVEs críticas (CVSS 9.2) en el core de PHP permiten RCE sin autenticar. Las descubrieron GPT-5.6 Sol y Gemini 4 Argon antes que los atacantes, con divulgación coordinada global. Si corres PHP 5.4 a 8.5.11: a actualizar ahora."
---

![Ilustración editorial tech de una vulnerabilidad crítica en el núcleo de PHP descubierta por inteligencia artificial antes que los atacantes](../../assets/images/php-php2shell-cves-criticas-rce.jpg)

La historia de seguridad de la semana (y candidata a la del año): el core de PHP tiene dos vulnerabilidades críticas bautizadas **php2shell**, con divulgación coordinada este 21 de octubre. Lo revolucionario no son solo los bugs — es **quién los encontró y cómo**: modelos de IA de frontera los descubrieron *antes* que los atacantes, abriendo lo que OpenAI llama la "ventana del defensor".

## Los bugs, en criollo

- **CVE-2026-109618**: el manejo de out-of-memory puede interrumpir PHP con datos de request parcialmente inicializados, y la limpieza posterior trata esa basura como válida.
- **CVE-2026-109619**: estado interno de un request sobrevive después de liberar su memoria (use-after-free clásico). El siguiente request del mismo worker puede usar ese estado viejo.

Resultado: **RCE sin autenticar y filtración de memoria**, con CVSS 9.2. Afecta a **todas las versiones de PHP desde 5.4 hasta 8.5.11**. Sí, esa que todavía corre en producción con justificaciones creativas.

- Parcheado en: **8.5.12, 8.4.27, 8.3.36 y 8.2.35**
- PHP 8.1 y anteriores (EOL): **sin fix**. Migra o sufrí.

## El ángulo IA: los defensores llegaron primero

Acá está lo histórico. OpenAI detectó la falla con **GPT-5.6 Sol** dentro de su iniciativa [Patch the Planet](https://patchtheplanet.org/), mientras **Wiz** la descubría en paralelo usando **Gemini 4 Argon** — que según Google Cloud aportó en la búsqueda, el desarrollo del exploit, la detección de ataques y la validación del parche. O sea: dos laboratorios rivales, dos modelos distintos, mismo hallazgo.

Frontier AI encontró estos bugs antes que los atacantes. La misma capacidad que sirve para defender sirve para atacar — por eso la coordinación fue clave.

## Coordinación a escala planeta

OpenAI lideró una coalición de maintainers, Wiz, Cloudflare y agencias del gobierno de EE.UU. (CISA, ONCD, hasta la "Super Intelligence Force" de la Casa Blanca — sí, eso existe ahora). Cloudflare desplegó reglas WAF *antes* de la divulgación pública. OpenAI comprometió **US$1.000 millones en acceso subsidiado a Daybreak** para defensores con pocos recursos, publicó un [framework de respuesta a vulnerabilidades para la era de la IA](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/), y soltó un [checker de versión PHP como skill de Codex](https://github.com/openai/php2shell-checker).

## Qué hacer ahora

1. **Actualizar PHP** a 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35 y **redesplegar** (GKE, Cloud Run, containers propios: reconstruir la imagen).
2. En Google Cloud, las plataformas serverless con base images automáticas ya se parchean solas; el resto es tarea tuya.
3. Mitigación interina vía WAF (Cloud Armor, Cloudflare) mientras actualizas.
4. Priorizar según la guía de CISA (BOD 26-04) y hacer triage forense si sospechas compromiso.

## El takeaway

php2shell es la primera gran demostración práctica de que **la caza de vulnerabilidades con IA cambió el juego para ambos lados**. OpenAI espera que este tipo de hallazgos "aumente bruscamente en los próximos meses". El software que pensabas que estaba estable hace 20 años ahora tiene fecha de revisión. Parchea.

### Update: 25 de octubre, 2026

[InfoQ recapituló](https://www.infoq.com/news/2026/10/php-critical-rce-patches/) el estado de la parcheada y hay un dato que cambia el color de la historia: **Amazon registró un intento de explotación en la wild cuatro días antes de que los parches salieran**. O sea, los atacantes ya estaban tanteando el objetivo antes de la divulgación coordinada — la "ventana del defensor" existe, pero es más angosta de lo que parecía.

El otro aprendizaje fue operacional: buena parte de la industria pasó el día respondiendo preguntas básicas — ¿corremos PHP siquiera?, ¿de dónde saco el paquete?, ¿cómo confirmo que el parche quedó instalado?. Si tu runbook de incidentes no responde eso en minutos para tu stack completo, este fin de semana te dejó la tarea.

### Update: 27 de octubre, 2026

Cloudflare le puso precio a la pregunta "¿aguanta tu WAF?": lanzó un [**PHP Capture the Flag**](https://blog.cloudflare.com/php-ctf/) integrado a su Bug Bounty de HackerOne. La mecánica: una instalación PHP deliberadamente vulnerable (PHP 8.5.11 stock con Apache 2 vía mod_php, en un Cloudflare Container) corriendo **detrás de su WAF con las reglas por defecto** para las CVEs de php2shell (CVE-2026-109618 y CVE-2026-109619). La misión de los investigadores: bypassear el WAF, explotar el sandbox y leer el archivo `/flag` — que se resetea cada pocos minutos junto con todo el entorno.

El contexto de la semana fue intenso: ocho certificados intermedios de eMudhra comprometidos y el propio php2shell llevaron a Cloudflare a shipped mitigaciones continuas y una nueva feature de *full transaction detection*, disponible en todos los planes (incluido Free). El argumento del CTF: con la IA permitiendo a los atacantes descubrir vectores a velocidad inédita, necesitan data real de bypass para fortalecer sus defensas. Si encuentran un bypass elegible, hay bounty. Un experimento interesante de "WAF as a honeypot" — y una forma elegante de que la comunidad audite gratis lo que normalmente se descubre en producción.
