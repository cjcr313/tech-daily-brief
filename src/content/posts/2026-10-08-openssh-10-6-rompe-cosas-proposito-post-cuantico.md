---
title: "OpenSSH 10.6 rompe cosas a propósito: menos compresión, usernames más estrictos y firmas post-cuánticas"
author: Carlos
pubDatetime: 2026-10-08T03:05:00Z
slug: openssh-10-6-rompe-cosas-proposito-post-cuantico
featured: false
draft: false
tags:
  - Infraestructura
  - Seguridad
description: "OpenSSH 10.6 desactiva la compresión LZ77 por un side-channel, rechaza $ y \\ en usernames de línea de comando y habilita firmas híbridas post-cuánticas. Si tenís automatización SSH, esto te toca."
---

![Ilustración editorial tech de un candado digital reforzado sobre un túnel de conexión seguro entre dos servidores, escudo con patrón de malla criptográfica, paleta azul profundo y acentos verdes neón, estilo flat profesional, sin texto](../../assets/images/2026-10-08-openssh-10-6-rompe-cosas-proposito-post-cuantico.jpg)

Salió [OpenSSH 10.6](https://www.helpnetsecurity.com/2026/10/07/openssh-10-6-released/) y el equipo de desarrollo hizo algo poco común en infraestructura: **romper features deliberadamente en nombre de la seguridad**. Dos roturas intencionales, una firma post-cuántica nueva y la promesa de releases más frecuentes. Si tu infraestructura vive de scripts SSH y automatización, dedicale diez minutos a esto.

## Rotura 1: la compresión LZ77 se apaga

OpenSSH 10.6 desactiva el coder de diccionario LZ77 de la compresión SSH para cerrar un **side-channel de compresión recién publicado**: en escenarios donde un atacante puede influir parcialmente en el contenido transmitido, los tamaños comprimidos filtran información sobre el plaintext que viaja en la misma conexión. Es la misma familia de problema conceptual de los ataques tipo CRIME/BREACH de la web, aplicada a SSH.

La contrapartida: si tenías compresión habilitada explícitamente en configs viejas (algo que ya no venía por defecto hace rato), esa opción va a dejar de funcionar como esperabas. En LANs rápidas nadie va a extrañarla.

## Rotura 2: usernames con `$` y `\` rechazados

El cliente `ssh` ahora **rechaza usernames de línea de comando que contengan `$` o `\`**. ¿El motivo? Un riesgo real de **inyección de shell** vía `ProxyCommand` o `Match exec` cuando el username viene de entrada no confiable — un parámetro de un job de CI, un webhook, o un agente de IA que arma comandos ssh con datos externos. Los usernames definidos vía la directiva `User` del archivo de config siguen funcionando normal.

Esto es directamente relevante para quien construye líneas de comando SSH desde código: si tu automatización concatena strings en vez de pasar argumentos seguro, OpenSSH te va a frenar. No es un bug, es un feature — pero igual te va a despertar a las 3 AM si no lo revisai antes.

## Firma post-cuántica por defecto

La versión habilita un **algoritmo de firma híbrido post-cuántico**, el paso siguiente en la migración que empezó con el key exchange ML-KEM. Detalle importante: **las claves experimentales de las versiones previas dejan de ser válidas** — si generaste claves PQ de prueba en versiones anteriores, toca regenerarlas. Las claves clásicas (Ed25519, ECDSA, RSA) siguen operativas.

## Más releases, más seguido

El proyecto anunció que apunta a ciclos de release más cortos, en parte como respuesta a que **herramientas de IA encontraron bugs históricos** que habían pasado desapercibidos. La era de "un release grande al año" para piezas críticas de infraestructura se está terminando.

## Checklist rápido

1. **Actualizá** servidores y imágenes base — esta versión trae una lista larga de fixes de seguridad además de lo anterior.
2. **Auditá tus scripts**: cualquier cosa que arme `ssh usuario@host` con variables de entorno o input externo puede chocar con la nueva validación de usernames.
3. **Regenerá claves PQ experimentales** si las tenís.
4. Revisá configs con `Compression yes` explícito en equipos antiguos.

Cambios que rompen compatibilidad en SSH no pasan seguido. Cuando pasan, es porque el riesgo de no hacerlo era peor. Hazle caso al cambio antes de que te encuentre.
