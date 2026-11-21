---
title: "Paquete oficial de Microsoft secuestrado en PyPI: agent-framework robaba credenciales de Azure y CI"
author: Carlos
pubDatetime: 2026-11-18T13:00:00Z
slug: microsoft-agent-framework-pypi-roba-credenciales
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "Las versiones 1.26.1 y 1.26.2 del agent-framework de Microsoft eran un roba-credenciales que se ejecutaba cada vez que partía Python, sin importar nada. OX Security da la alarma: revisa tus lockfiles ya."
---

![Paquete oficial de Microsoft secuestrado en PyPI: agent-framework robaba credenciales de Azure y CI](../../assets/images/2026-11-18-microsoft-agent-framework-pypi-roba-credenciales.webp)

Ataque a la cadena de suministro otra vez, pero con un giro incómodo: esta vez el paquete comprometido era **oficial de Microsoft**. OX Security detectó que las versiones **1.26.1 y 1.26.2 de agent-framework**, el Agent Framework para Python de Microsoft (con **192.534 descargas mensuales** en PyPI), fueron secuestradas para convertir el paquete en un roba-credenciales.

## La parte fea: se ejecuta solo

El truco más picante del ataque es el mecanismo de ejecución: un archivo **.pth con una línea de import** que Python ejecuta **cada vez que arranca el intérprete**. No necesitas importar el paquete; con que esté instalado, el payload corre en cada proceso Python de la máquina.

Para que nadie sospeche, el paquete arrastra el **agent-framework-core 1.26.0 genuino como dependencia**, así que el framework sigue funcionando normalmente. El `__init__.py` es una copia del archivo legítimo de Microsoft con un bloque extra al final que lanza la telemetría maliciosa en un proceso hijo desacoplado, tragándose cualquier error en silencio.

## Qué se robaba

El objetivo principal: **agentes de build de Azure y Azure DevOps**. La lista de botín incluye:

- Variables de entorno que contengan TOKEN, SECRET, PASSWORD, KEY, AZURE, AWS, GITHUB, HF_, OPENAI, CI_ y similares
- Hasta **60 archivos por host**: ~/.azure/*.json, pip.conf, .npmrc, .netrc, .git-credentials, .docker/config.json, tokens de Hugging Face, config de Foundry y las credenciales del agente de Azure DevOps
- **Tokens OIDC de pipeline, managed identity tokens y credenciales de agentes** de CI

Todo sale comprimido con zlib y codificado en base64 hacia un webhook en webhook.site, disfrazado con el User-Agent "af-runtime-diagnostics/1".

## Qué hacer ahora mismo

- Buscar **agent-framework==1.26.1 o 1.26.2** en lockfiles, imágenes de CI y todos los entornos, y eliminarlo
- Cazar **site-packages/agent_framework_meta.pth** y **agent_framework_meta/_telemetry.py** en hosts y build agents
- Volver a la **1.26.0 verificada**, instalando con hash checking y pin de versión
- Si el paquete corrió en algún lado: **trata cada secreto alcanzable como comprometido** — rota service principals de Azure, PATs, tokens de GitHub, npm, PyPI, NuGet, Docker, Hugging Face y OpenAI
- Revisar los logs de sign-in y actividad de Azure buscando managed identities y federated credentials desde agentes afectados
- Bloquear el tráfico salido a webhook.site desde la infraestructura de build

## La ironía del asunto

El framework oficial para **construir agentes de IA** era el que te robaba las credenciales de tus agentes. Si esto no te convence de que pin de versiones + verificación de hashes + rotación periódica de secretos son higiene básica y no paranoia, nada lo hará.
