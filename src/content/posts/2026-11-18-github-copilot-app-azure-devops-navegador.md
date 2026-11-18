---
title: "La app de GitHub Copilot ahora trabaja con Azure DevOps, tu navegador y GitHub Enterprise Server"
author: Carlos
pubDatetime: 2026-11-18T13:00:00Z
slug: github-copilot-app-azure-devops-navegador
featured: false
draft: false
tags:
  - DevOps
  - IA
description: "Anunciado en Ignite: la app de Copilot clona repos de Azure DevOps, deja que agentes abran y completen PRs solos, opera tu navegador vía extensión y llega como GA a GitHub Enterprise Server."
---

![Ilustración editorial tech: un robot copilot amigable en una cabina futurista controlando varias pantallas con ramas de código, pull requests y una ventana de navegador web, paleta naranja cálido y azul marino, estilo vector plano moderno](../../assets/images/2026-11-18-github-copilot-app-azure-devops-navegador.jpg)

"Copilot es más útil cuando puede trabajar donde tú trabajas". Con esa frase GitHub aprovechó Microsoft Ignite para anunciar que la **app standalone de GitHub Copilot** ahora soporta tus repos de **Azure DevOps**, tu instancia de **GitHub Enterprise Server** y hasta **el navegador donde ya estás firmado**.

## Azure DevOps dentro de Copilot (preview)

La integración que muchos equipos híbridos esperaban: clonas un repo de Azure DevOps, le pides a un agente que cree una rama, haga cambios de código y abra un pull request, **y lo ves completo sin salir de la app**.

- Sigues el estado del agente en la barra lateral
- Botón **Fix** en comentarios de review para que un agente los resuelva
- **Agent merge**: el agente arregla fallas de CI y completa el PR cuando tus checks y políticas de Azure DevOps pasan

Para activarla: Settings > Experimental > Azure DevOps integration, y luego Accounts > Add account con tu cuenta de Microsoft. Eso sí, por ahora sin cloud sessions para repos de AzDO.

## Copilot en tu navegador (preview)

Con la extensión de GitHub Copilot para Chrome, el agente puede **llenar formularios, extraer información de páginas y probar o debuguear la web app que estás construyendo**, directo en el navegador donde ya tienes sesión. Funciona en navegadores Chromium (Chrome y Edge), corre en un grupo de pestañas aislado, se combina con computer use, y también está disponible en Copilot CLI, VS Code y JetBrains.

Viene apagado por defecto: Settings > Computer Use > Enable Computer Use + Enable Browser Use.

## GHES llega a General Availability

Las cuentas de GitHub Enterprise Server ahora se pueden agregar a la app para trabajar con repos remotos, issues y pull requests. Lo que antes era preview opt-in ya es GA: la puerta está abierta para las empresas que viven on-premise.

## El punto de fondo

La pregunta ya no es si los agentes de código programan bien. Es si les entregas el **botón de merge**. Con agentes que completan PRs en Azure DevOps respetando políticas, Copilot apuesta a ser el cockpit completo del ciclo de desarrollo — y la discusión de confianza y control se corre al pipeline, justo donde más duele cuando falla.
