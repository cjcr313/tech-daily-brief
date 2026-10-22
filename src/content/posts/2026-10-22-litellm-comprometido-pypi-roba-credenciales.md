---
title: "LiteLLM comprometido en PyPI: versión maliciosa con 49.000 descargas robaba credenciales de AWS, navegadores y herramientas de IA"
author: Carlos
pubDatetime: 2026-10-22T13:15:00Z
slug: litellm-comprometido-pypi-roba-credenciales
featured: false
draft: false
tags:
  - Seguridad
  - IA
description: "Wiz reveló que una versión troyanizada de LiteLLM (1.107.0) coló un stealer de credenciales en 49.000 descargas de PyPI e imágenes Docker. El ataque partió por tokens OAuth de GitHub CLI filtrados en logs vía Claude Code."
---

![Ilustración editorial tech de una cadena de suministro digital rota, eslabones de cadena geométricos descendiendo en cascada donde uno central está fracturado y emite un resplandor rojo, líneas de datos goteando hacia un contenedor oscuro, fondo azul profundo con alertas luminosas, estilo ilustración tecnológica profesional dramática, sin texto](../../assets/images/2026-10-22-litellm-comprometido-pypi-roba-credenciales.jpg)

Uno para preocuparse de verdad. El martes 21 de octubre a las 11:39 UTC, una **versión maliciosa de LiteLLM (1.107.0)** apareció en PyPI con un stealer de credenciales embebido. Recibió cerca de **49.000 descargas** antes de que PyPI la pusiera en cuarentena a las 13:20 UTC. Las imágenes Docker en GHCR y Docker Hub (tags `v1.107.0`, `latest`, `main-latest`, `main-stable`) también venían troyanizadas y fueron retiradas ~13:53 UTC. Lo reveló Wiz Research en un post que siguió actualizando durante todo el día — y que ayer sumó las cifras oficiales de descargas.

## Qué hacía el payload

Al instalarse, el paquete dejaba caer tres archivos en la raíz de `site-packages`: `cook.pth`, `cook.py` y `sitecustomize.py`, diseñados para ejecutarse **cada vez que arranca un intérprete de Python**. El stealer —bautizado internamente `privcollect`— recolecta secretos en **16 módulos**: navegadores, proveedores cloud, credenciales de developer y herramientas de IA. Todo cifrado y exfiltrado a `www.litellm.dev/healthcheck`, un dominio controlado por el atacante que imitaba la infraestructura real de LiteLLM.

El análisis de Wiz tiene un detalle escalofriante y a la vez absurdo: el código tiene **marcas claras de haber sido escrito con ayuda de LLMs** — nombres de variables verbosos (`encrypted_private_key_output`), manejo de errores genérico, rutas que fallan silenciosamente en Windows (`/tmp/` no existe ahí) y un módulo muerto que se define pero nunca se llama. Funcional en el happy path, quebradizo en los bordes. Como todo lo generado con prompts apurados.

La técnica dual —usar `.pth` y `sitecustomize.py` simultáneamente— sería **el primer caso documentado en la naturaleza**.

## ¿Cómo entraron? Tokens OAuth de GitHub CLI

Según el propio desarrollador de LiteLLM (BerriAI), los atacantes comprometieron **tres cuentas de ingenieros vía tokens OAuth de GitHub CLI robados**. Con una cuenta dispararon el workflow `project-releaser` y con otra lo aprobaron. Todos los tokens involucrados ya fueron revocados.

¿Y de dónde salieron los tokens? Acá viene lo incómodo para el ecosistema agentic: LiteLLM identificó que **Claude Code, en ciertas situaciones, incrusta el token OAuth de GitHub CLI del usuario en el cuerpo de una respuesta** — y cuando esos response bodies se loguean, los tokens quedan expuestos en los logs. Los atacantes accedieron a un deployment interno de LiteLLM expuesto a internet público (posiblemente por una vulnerabilidad parchada recientemente), sacaron los tokens de los logs, y de ahí comprometieron el pipeline de release.

Y no quedó en robo pasivo: Wiz observó actividad post-explotación donde el atacante **validó credenciales de rol IAM de AWS** obtenidas de CI runners y nodos de Kubernetes comprometidos, unas 4,5 horas después de la exfiltración.

## Qué hacer ahora

- Si usas LiteLLM: verifica que no tengas la **1.107.0**. La última versión segura es la **v1.106.2**
- Revisa la presencia de `cook.pth`, `cook.py` y `sitecustomize.py` en tus entornos Python
- Rota credenciales de AWS, navegadores y herramientas de IA si la versión maliciosa llegó a correr
- Revisa los IOCs publicados por Wiz

La lección doble: las cadenas de suministro de paquetes siguen siendo el blanco perfecto, y **la era de los agentes de coding con acceso a credenciales creó una superficie de ataque nueva** — los logs que antes eran aburridos ahora pueden contener tus tokens más valiosos.

Fuentes: Wiz Research (blog), LiteLLM (docs.litellm.ai), GitHub (issue #47826).
