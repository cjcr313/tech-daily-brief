---
title: "Prompt injection en Gemini CLI le dio a unos investigadores acceso de Editor a un proyecto interno de Google Cloud"
author: Carlos
pubDatetime: 2026-08-31T10:00:00Z
slug: gemini-cli-prompt-injection-gcp-editor
featured: false
draft: false
tags:
  - Seguridad
  - IA
  - DevOps
description: "Investigadores de Pillar Security usaron un prompt injection escondido en un GitHub issue para ganar acceso nivel Editor a un proyecto interno de Google Cloud vía Gemini CLI."
---

![Prompt injection en Gemini CLI](../../assets/images/2026-08-31-gemini-cli-prompt-injection-gcp.jpg)

La seguridad de los coding agents sigue dando material. Esta vez la firma **Pillar Security** reveló cómo un **prompt injection** escondido en un GitHub issue les permitió ganar acceso de nivel **Editor** a un proyecto interno de **Google Cloud**, usando una falla en el **Gemini CLI**.

## Cómo fue el golpe

El punto de entrada fue el código de setup del **Gemini CLI** que Google usa internamente para leer y clasificar los bug reports que llegan a su GitHub público. Pillar Security mandó un "bug report" con instrucciones ocultas, y cada vez que el agente de IA triajeaba issues, caía en el prompt injection.

¿El resultado? La emisión de un archivo de credenciales legítimo vía el framework **Workload Identity Federation (WIF)**. La mayoría de esas credenciales eran de bajo privilegio, pero **una** permitía impersonar una cuenta mucho más poderosa, y con eso los investigadores obtuvieron control de **Editor** sobre un proyecto interno de Google que corría en un sandbox dedicado.

Google ya remedió la falla. Lo llamativo, según Dan Lisichkin de Pillar Security, es que es un caso raro donde **herramientas open source se usaron para vulnerar un entorno cloud propietario**.

## Por qué esto no es "un incidente más"

Lisichkin lo plantea crudo: esto demuestra lo trivial que se está volviendo comprometer una **software supply chain** en la era del código generado por IA. Un prompt malicioso puede insertarse en casi cualquier web o email que el coding agent acceda. Una vez dentro, esas instrucciones se replican a través de cada tarea sucesiva. En teoría, una supply chain completa podría comprometerse **a velocidad de máquina**.

La diferencia con los ataques clásicos a la supply chain es brutal: **ya no hace falta un breach**. Basta con dirigir al agente para que cree una pieza de malware y la agregue al codebase.

## Segundo aviso de Pillar contra Google este mes

Hace poco Pillar ya había documentado lo que describen como la primera instancia de **un agente IA usado para hackear a otro agente IA**. En esa ocasión, un prompt injection en el repo `google/adk-python` (el SDK para construir agentes) les permitió disparar un workflow agéntico con permisos elevados reservados para maintainers — un fallo de *privilege boundary* que podía terminar en remote code execution y exfiltración de credenciales. Google endureció el repo y confirmó los fixes.

## La lección para DevSecOps

Revisa **qué fuentes de datos** están accediendo tus coding agents. Y prepárate para, a veces, **frenar el ritmo** de desarrollo para verificar que un prompt malicioso no se coló en tu pipeline. Porque si los agentes no se detienen a pensar, el costo lo paga el que está despierto a las 3 AM con una alerta de producción.

---

**Fuente:** [DevOps.com — Cybersecurity Researchers Uncover Flaw in Google AI Coding Tool](https://devops.com/cybersecurity-researchers-uncover-flaw-in-google-ai-coding-tool/) · [Pillar Security](https://www.pillar.security/blog/a-wif-of-fresh-access-how-a-github-issue-on-gemini-cli-led-to-gcp-project-compromise)
