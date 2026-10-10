---
title: "GhostAction vuelve con todo: 772 repositorios saqueados en GitHub y ahora también escarba en tu historial de git"
author: Carlos
pubDatetime: 2026-10-10T21:15:00Z
slug: ghostaction-github-actions-nueva-ola-credenciales
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
description: "La campaña de robo de secretos vía GitHub Actions que nació en 2025 pegó de nuevo: 772 repos atacados entre agosto y septiembre, y el 8 de octubre una ráfaga de 346 repos más en minutos — incluyendo uno con 18 mil estrellas. Ahora revisa el working tree y el historial completo de git."
---

![Ilustración editorial de una cadena de suministro de software con tuberías CI/CD y una sombra roja extrayendo llaves y credenciales](../../assets/images/2026-10-10-ghostaction-github-actions-nueva-ola-credenciales.jpg)

Si creías que el robo de secretos vía GitHub Actions era cosa del pasado, malas noticias: **GhostAction está de vuelta, más grande y con mejor gusto para elegir víctimas**. GitGuardian, que bautizó la campaña original en septiembre de 2025, confirmó que la nueva ola golpeó **772 repositorios entre el 31 de agosto y el 30 de septiembre de este año** — y que el 8 de octubre hubo una ráfaga extra que cambia la escala del problema.

## La receta, que no cambia porque funciona

El modus operandi es calculado al original de 2025 (817 repos comprometidos, 327 usuarios, más de 3.325 secretos robados):

1. Comprometen una cuenta de maintainer con credenciales filtradas.
2. Inyectan un workflow malicioso — `github_actions_security.yml`, con commit message "Add Github Actions Security workflow" — que suena a mantenimiento de seguridad, todo lo contrario.
3. El workflow **escanea los workflows legítimos del repo** buscando referencias `${{ secrets.NOMBRE }}`, arma su propia lista con esos nombres y hace un `curl POST` con los valores a un servidor del atacante. Esta vez a una IP pelada (`193.32.204.199`), por HTTP plano, sin dominio de cortesía.

Desde el 7 de septiembre hay además una variante (`security-check.yml`) que reporta a una API con un ID único por inyección — el atacante ahora lleva contabilidad de qué secreto salió de cada repo.

## Lo nuevo de octubre: ráfaga, historia de git y exfiltración confirmada

El update del 9 de octubre de GitGuardian, basado en análisis de Socket, es lo que más preocupa:

- El **8 de octubre** dos cuentas de maintainers comprometidas (`kitao` y `henrywoo`) inyectaron el workflow `security-audit.yml` en **346 repositorios en cuestión de minutos**, en dos barridos automatizados.
- Entre las víctimas: **kitao/pyxel (18.420 estrellas)** y **uber/athenadriver**. Ya no son repositos de PRs de prueba; hay proyectos serios en la lista.
- Esta variante **barre el working tree y el historial completo de git buscando credenciales de nube** — no solo los secrets de GitHub Actions. Todo lo que haya quedado commiteado alguna vez está en el menú.
- A diferencia de la ola de septiembre, donde la mayoría de los runs quedaron esperando aprobación, **estos runs se ejecutaron y Socket confirma exfiltración exitosa**.

## La lección incómoda: rotar secretos no basta

GitGuardian cruzó las víctimas de GhostAction con otra actividad maliciosa y encontró **13 repositorios que además fueron usados para cryptomining** por al menos cuatro campañas distintas, con wallets y pools diferentes. Traducción: las credenciales comprometidas circulan y se revenden entre varios actores. Un caso emblemático: la misma cuenta comprometida que usó GhostAction también sirvió para colar un minero de Monero disfrazado de health check en DevOpsGPT.

Conclusión práctica para cualquier equipo: si te roban secretos vía un workflow inyectado, **rotar los secretos exfiltrados no es suficiente** — hay que encontrar y revocar también la credencial de GitHub que permitió la inyección, o el próximo actor la va a usar de nuevo la semana siguiente.

## Checklist rápido

- Busca en tus repos workflows llamados `github_actions_security.yml`, `security-check.yml` o `security-audit.yml` que nadie del equipo recuerde haber creado.
- Revisa commits con mensajes tipo "Add ... Security workflow" de cuentas de maintainers.
- Exige aprobación manual para runs de workflows de forks/colaboradores externos.
- Asume que cualquier credencial commiteada alguna vez en el historial ya está comprometida — barrido de git history y rotación completa.
- Y revoca el token/PAT de GitHub, no solo los secrets del repo.

La técnica ya fue reutilizada por las campañas Shai-Hulud y la familia Mini Shai-Hulud, así que esto no va a parar mañana. El mes pasado cubrimos el worm en tensorlake de npm; el patrón es el mismo, cambia el vector. La cadena de suministro sigue siendo el blanco favorito.

**Fuentes:** [GitGuardian — GhostAction Returns: 772 Repos Hit in New GitHub Actions Wave](https://blog.gitguardian.com/ghostaction-github-actions-supply-chain-attack-returns/) · [Socket — New GhostAction Wave Expanding Beyond CI/CD Secrets to Cloud Credentials](https://socket.dev/blog/ghostaction-cloud-credentials)
