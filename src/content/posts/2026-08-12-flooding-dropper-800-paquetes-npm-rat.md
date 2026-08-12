---
title: "Flooding Dropper: casi 800 paquetes npm maliciosos entregan RAT multiplataforma"
author: Carlos
pubDatetime: 2026-08-12T04:00:00Z
slug: flooding-dropper-800-paquetes-npm-rat
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
description: "Nueva campaña con ~800 paquetes npm maliciosos usa DNS TXT records para entregar un RAT que evade los lifecycle hooks tradicionales del registry."
---

![Flooding Dropper npm](../../assets/images/2026-08-12-flooding-dropper-npm.svg)

Si pensabas que ChainDrop era lo peor que le podía pasar a npm esta semana, hay más. Sonatype descubrió una campaña nueva bautizada **Flooding Dropper**: casi 800 paquetes maliciosos que entregan un RAT (Remote Access Trojan) cross-platform capaz de correr en Windows, macOS y Linux.

Y la parte interesante —y aterradora— es cómo funciona.

## La novedad: evaden los lifecycle hooks

La mayoría de los ataques a npm usan `preinstall` o `postinstall` para ejecutarse. Las herramientas de seguridad se han vuelto bastante buenas detectando esos patrones.

Flooding Dropper hace algo distinto: los paquetes vienen con un README que **instruye a los desarrolladores a cargar el paquete usando `require()`** directamente. Como el código malicioso está dentro de la lógica del módulo mismo (no en hooks), pasa más fácilmente los filtros automáticos.

## WEL1DROPPER: el payload

El paquete ejecuta un downloader llamado **WEL1DROPPER** que:

1. Detecta el OS y arquitectura del procesador
2. Descarga un payload compatible desde Cloudflare Workers (tres dominios distintos)
3. Si HTTPS falla, cambia a **DNS TXT records** del dominio `wel1.ru` — pide registros TXT numerados, los concatena, hace Base64 decode y obtiene un binario

Ese truco de DNS TXT es notable. Permite descargar malware a través de canales que la mayoría de los firewalls de aplicación no inspeccionan.

## Qué hace una vez instalado

Dependiendo del OS:

- **Windows:** parchea ETW y AMSI (para evitar detección), busca sandboxes/VMs, establece persistencia vía Registry Run key + scheduled task, y descarga un payload cifrado adicional
- **macOS:** chequea debuggers y artifacts de análisis, descarga un beacon, usa LaunchAgent para persistencia
- **Linux:** binario ELF empaquetado con UPX que descarga payloads de un Cloudflare Worker y termina instalando **Sliver** (framework C2 open-source)

Además, algunos paquetes incluyen `lib/telemetry.js` — un SDK de telemetría falso que esconde el mismo downloader. Y no se importa desde el entry point, así que el análisis estático superficial no lo pilla.

## El contexto mayor

Esto es una campaña **completamente distinta** al ChainDrop que cubrimos la semana pasada. ChainDrop era un gusano que robaba credenciales de maintainers y se autorreplicaba. Flooding Dropper es más bien un ataque de typo-squatting y AI-slop a escala industrial: cientos de paquetes con nombres generados aleatoriamente para maximizar la probabilidad de que alguien los instale por error.

Entre ambos, npm está teniendo una semana para el olvido en términos de seguridad. Si tu equipo usa Node.js:

- **Allowlisting estricto** de dependencias
- **No instalar paquetes sugeridos por IA** sin verificación manual (varios de estos paquetes fueron diseñados para aparecer en sugerencias de Copilot/Claude)
- Monitorear tráfico DNS saliente desde entornos de desarrollo
- Rotar credenciales si hay sospecha

*Fuentes: [The Hacker News](https://thehackernews.com/2026/08/nearly-800-malicious-npm-packages.html), [Sonatype](https://www.sonatype.com/blog/flooding-dropper-hits-npm-with-850-malicious-packages), [OpenSourceMalware](https://opensourcemalware.com/blog/russian-ai-slopsquatting-npm-campaign)*
