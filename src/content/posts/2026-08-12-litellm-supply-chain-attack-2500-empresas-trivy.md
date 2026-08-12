---
title: "LiteLLM: el mayor supply chain breach de IA de 2026 expone a 2.500+ empresas y 434.000 pipelines de CI/CD"
author: Carlos
pubDatetime: 2026-08-12T16:00:00Z
slug: litellm-supply-chain-attack-2500-empresas-trivy
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
  - Cloud Native
description: "Dos versiones maliciosas de LiteLLM en PyPI robaron credenciales de cloud, SSH, Kubernetes y API keys de OpenAI/Anthropic. El ataque encadenó Trivy → LiteLLM → 2.500 organizaciones."
---

Si usas LiteLLM —el gateway open source que conecta apps con múltiples LLMs— en algún pipeline de CI/CD, esto te interesa directamente. Y si no, igual deberías prestar atención, porque es probablemente el **supply chain breach más grande del ecosistema IA en 2026**.

## Qué pasó

En marzo, dos versiones maliciosas de LiteLLM (1.82.7 y 1.82.8) estuvieron vivas en PyPI por apenas **40 minutos**. El problema es que esos 40 minutos alcanzaron y sobraron.

La inteligencia de amenazas CloudSEK acaba de publicar un análisis que dimensiona el desastre: **434.000 archivos exfiltrados** que mapean potencial exposición a más de **2.500 organizaciones**, incluyendo nombres pesados como NVIDIA, Cisco, Deloitte, Volkswagen, FedEx, Siemens y X Corp.

## La cadena del ataque

El ataque es una obra de arte de la cadena de suministro, en el peor sentido posible:

1. **Paso 1 — Trivy**: Los atacantes (bautizados como **TeamPCP**, trackeados por Google como UNC6780) comprometieron el release process del scanner Trivy. Force-pushearon commits maliciosos a 76 de 77 tags de `trivy-action` en GitHub.
2. **Paso 2 — LiteLLM build**: El pipeline de CI de LiteLLM instalaba Trivy sin pinning de versión. El Trivy envenenado entró al build automáticamente.
3. **Paso 3 — PyPI**: Con un token de PyPI robado en el proceso, los atacantes subieron las versiones 1.82.7 y 1.82.8 directamente al registry.

Un token sin revocar. Tres herramientas de profundidad. Así es como un credential leak chico se convierte en exposición a nivel ecosistema.

## Qué robaban

El payload era agresivo. Cada vez que se iniciaba un proceso Python en el entorno afectado (no necesitaba que importaras LiteLLM explícitamente, gracias a un archivo `litellm_init.pth`):

- **Environment variables** completas
- **SSH keys**
- **Cloud credentials** (AWS, Azure, GCP)
- **Kubernetes tokens**
- **Database passwords**
- **API keys de OpenAI y Anthropic** (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`)

Todo cifrado y enviado a `models.litellm[.]cloud`, un dominio controlado por los atacantes.

## El detalle que nadie quiere escuchar

El advisory de LiteLLM aclara algo brutal: **no necesitas usar LiteLLM directamente para estar expuesto**. Una dependencia transitiva sin pinning —por ejemplo, un framework de agentes o herramienta de orquestación que la traiga— puede instalarla sin que nadie la eligiera.

O sea que tu pipeline de CI/CD podría haber ejecutado código malicioso sin que LiteLLM aparezca en tu `requirements.txt`.

## Qué hacer ahora

- **Si tenías pipelines activos entre el 24 de marzo de 2026 (10:39 UTC – 16:00 UTC)**: asume exposición y rota todo. Tokens de PyPI, credenciales de cloud, keys de SSH, secrets de Kubernetes.
- **Mueve todo a tokens temporales** (OIDC, tokens efímeros). Un secret estático robado en marzo sigue siendo válido hoy si no se rotó.
- El **FBI emitió el advisory FLASH-20260702-01** en julio advirtiendo que los actores van a seguir weaponizando credenciales robadas en esta campaña.
- El ataque está trackeado como **CVE-2026-33634** y está en el catálogo de KEV de CISA desde marzo.

## La lección (que ya deberíamos saber)

**Pinning de versiones, rotación de tokens y eliminación de secrets de larga duración.** Tres prácticas que suenan aburridas hasta que 2.500 empresas aparecen en un dataset público de exposición.

El ecosistema IA sigue siendo particularmente vulnerable porque las herramientas son nuevas, se actualizan rápido y la cadena de dependencias es profunda. LiteLLM es solo el ejemplo más reciente de algo que va a seguir pasando.
