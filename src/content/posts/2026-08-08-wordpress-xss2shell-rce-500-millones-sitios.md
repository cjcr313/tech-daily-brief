---
title: "XSS2Shell: WordPress tuvo la vulnerabilidad más crítica en años y casi nadie se dio cuenta"
author: Carlos
pubDatetime: 2026-08-08T10:00:00Z
slug: wordpress-xss2shell-rce-500-millones-sitios
featured: false
draft: false
tags:
  - Seguridad
  - Web
description: "CVE-2026-64638: un XSS en la pantalla de login de WordPress encadenado a RCE. 500M+ sitios vulnerables. Patched en WP 7.0.3."
---

![XSS2Shell vulnerability in WordPress](../../assets/images/placeholder.jpg)

Si tienes un sitio en WordPress, deja lo que estás haciendo y actualiza. En serio.

## Qué pasó

La gente de **pwn.ai** descubrió y reportó una cadena de vulnerabilidades bautizada **XSS2Shell** (CVE-2026-64638, CVSS 8.9) que afecta a **todas las versiones de WordPress Core**. Estamos hablando de un XSS reflejado en la pantalla de login (`wp-login.php`) — sin autenticación requerida — que puede encadenarse hasta llegar a **ejecución remota de código (RCE)** en el servidor.

Para los que no hablan CVE: un atacante puede convertir **un simple intento de login fallido** en control total del servidor. Con un solo click del admin víctima en una página maliciosa, game over.

## Los detalles técnicos (versión corta)

El bug empieza en cómo WordPress maneja el username de un login fallido. Pasa por `sanitize_user()` y `wp_strip_all_tags()`, que dependen de `strip_tags()` de PHP. Resulta que un string con whitespace después del `<` sobrevive ese parser como texto. Pero después, `wp_kses_post()` usa un parser distinto que **sí** lo interpreta como HTML. Clásico desajuste de parsers = DOM controlado por el atacante.

De ahí, el JavaScript nativo de WordPress (`user-profile.js`) se carga en la página de login porque maneja password resets. Algunos elementos del DOM que el script espera no existen ahí, se resuelven a `undefined`, y un `ajaxurl` que se puede sobrescribir con un elemento inyectado termina dirigiendo requests a un endpoint controlado por el atacante.

El resultado: **JavaScript ejecutándose en el origen del sitio**, con capacidad de instalar plugins o subir ZIPs arbitrarios.

## La escala

- **500+ millones de sitios** eran vulnerables hasta hace dos días
- WordPress alimenta el **43%+ de los sitios web del mundo**
- El parche salió el **6 de agosto en WordPress 7.0.3**, con backports hasta la rama 4.7
- Versiones anteriores a 4.7 siguen vulnerables (sin backport)

## El contexto interesante

pwn.ai dijo que su sistema autónomo descubrió y reprodujo la vulnerabilidad **en cuatro días** usando modelos open-source y un workflow multi-agente. Partió de un research paper de 2022 sobre Same Origin Method Execution (SOME) de Paulos Yibelo. La IA encontró el bug, lo explotó y lo reportó.

Esto es relevante no solo por el bug en sí, sino por **cómo se encontró**: un sistema de IA automatizado descubrió una vulnerabilidad crítica en el CMS más usado del planeta en menos de una semana.

## Qué hacer

1. **Actualiza a WordPress 7.0.3 ya** (o la versión backport correspondiente)
2. Si tienes auto-updates activados, probablemente ya estás parchado
3. Si usas una versión anterior a 4.7... es hora de migrar de todas formas
4. Revisa logs de acceso en busca de intentos sospechosos en `wp-login.php`

## Referencias

- [pwn.ai - XSS2Shell](https://pwn.ai/blog/xss2shell)
- [The Hacker News](https://thehackernews.com/2026/08/new-wordpress-pre-auth-xss-could-lead.html)
- [WordPress 7.0.3 Release](https://wordpress.org/news/2026/08/wordpress-7-0-3-release/)
