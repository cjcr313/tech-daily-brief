---
title: "Azure Container Apps Express llega a GA: Microsoft salta al carro de los sandboxes para agentes"
author: Carlos
pubDatetime: 2026-10-01T09:18:00Z
slug: azure-container-apps-express-sandboxes-ga
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "Express elimina el provisioning de entornos y se apoya en Sandboxes, la capa de microVMs aisladas con arranque sub-segundo y suspend/resume que ya GA en Azure."
---

![Ilustración editorial de sandboxes de computo aislados como cápsulas de microVM levantándose desde una piscina de recursos pre-calentados en la nube, estilo tech profesional, sin texto](../../assets/images/2026-10-01-azure-container-apps-express-sandboxes-ga.jpg)

Microsoft puso en GA dos piezas que van de la mano: **Azure Container Apps Express**, un modelo de deployment sin provisioning de entornos, y **Azure Container Apps Sandboxes**, la capa de cómputo aislada sobre la que corre. Sí: la misma forma que Google ya había shipped en GKE este año.

## Express: deploy en tres datos

Le das una imagen de contenedor, una región y la config de la app. Express se encarga del resto: compute, ingress y scaling. Corre en consumo de CPU con **billing por segundo**, escala a cero cuando está ocioso y **no cobra fee de provisioning** de entorno. Microsoft lo describe como developer-first y — atención — **agent-first**, con la frase explícita: "los flujos asistidos por IA crean y actualizan apps más rápido de lo que cualquiera configura infraestructura a mano".

## Sandboxes: la primitiva de abajo

La velocidad viene de la capa inferior. Sandboxes provisiona desde **pools pre-calentados** para arranque sub-segundo, aísla cada workload en su propio boundary de **microVM hardware-isolated**, permite bursts de miles de sandboxes concurrentes, y soporta **suspend/resume con snapshot completo de estado** (memoria y disco incluidos) con restore en menos de un segundo.

Se puede usar directo (vía el recurso ARM `Microsoft.App/SandboxGroups`), y Microsoft lo posiciona para **plataformas de agentes y servicios de ejecución segura de código**. En Reddit ya contaban que esta primitiva subyace a servicios core de Azure, incluyendo Foundry Hosted Agents.

## Lo que Express NO tiene

Para no venderte humo: Express no soporta custom domains, zone redundancy, Key Vault secrets, Easy Auth, **OpenTelemetry**, Dapr, jobs, perfiles de workload, GPU, revisions con traffic splitting ni managed identities de sistema. Sin service discovery: las apps se hablan por URL pública, ingress HTTP solamente. Es la capa opinionated para lo simple; si necesitas más, Container Apps completo.

## La misma carrera

Google emparejó **Pod Snapshots** con **GKE Agent Sandbox** (y ya lo cubrimos acá). Ahora Microsoft empareja microVMs con suspend/resume. Todos responden la misma pregunta: cómo darle a un agente un entorno aislado que no cueste nada en reposo y vuelva en menos de un segundo. Cloudflare, mientras, rearchitecturó sus Containers para el mismo fin.

2026 está quedando como el año en que "el computador del agente" se volvió categoría de infraestructura.

**Fuente:** [InfoQ](https://www.infoq.com/news/2026/10/container-apps-express-sandboxes/)
