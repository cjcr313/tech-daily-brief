---
title: "Azure mata Deployment Environments y Dev Box: los retiros que hay que anotar en la agenda"
author: Carlos
pubDatetime: 2026-10-10T09:05:00Z
slug: azure-deployment-environments-retiro-devbox
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "Microsoft confirma el retiro de Azure Deployment Environments para febrero 2027 sin reemplazo directo, y Dev Box se va en 2028 reemplazado por Windows 365. La ruta oficial: Bicep/Terraform + pipelines."
---

![Ilustración editorial tech de una grúa retirando módulos de servicios de una nube modular tipo datacenter, mientras pipelines de integración continua redirigen flujos hacia planos de infraestructura como código, paleta azul profundo con acentos naranjas, estilo ilustración editorial profesional, sin texto](../../assets/images/2026-10-10-azure-deployment-environments-retiro-devbox.jpg)

El Azure Weekly Update de esta semana trajo una seguidilla de retiros que van a mover agendas en más de un equipo de plataforma. La más incómoda: **Azure Deployment Environments se retira el 22 de febrero de 2027, y no hay servicio de reemplazo directo**.

## Deployment Environments: muerte sin heredero

ADE era la apuesta de Microsoft para que los equipos de desarrollo auto-sirvieran entornos de app (dev, test, staging) a partir de catálogos de plantillas centralizadas. La idea nunca terminó de despegar, y la recomendación oficial ahora es armar el capability a mano:

- **Infraestructura como código**: Bicep con Azure Verified Modules, o Terraform.
- **Un pipeline que la despliegue**: GitHub Actions o Azure DevOps Pipelines para provisionar y gestionar los entornos.

Traducción: Microsoft reconoce que el patrón ganador acá es IaC clásico + CI/CD, no un servicio administrado de entornos efímeros. Si tu equipo tenía ADE en la arquitectura, toca planificar la migración con casi año y medio de plazo.

## Los otros retiros de la tanda

- **Azure Dev Box**: fuera el **18 de septiembre de 2028**, reemplazado por **Windows 365**. Las workstations en la nube sobreviven, pero bajo otra marca y otro modelo.
- **App Service retira Java 8, 11 y 17** a partir de **septiembre de 2027**: las apps en esas versiones deben subir a **Java 25 o superior** antes de la fecha.
- **Always Encrypted con enclaves de Intel SGX** en SQL Server: retiro a fines de **octubre de 2027**.

## Lo nuevo que sí llega

No todo es demolición: el mismo update trae **AKS bare metal sobre Ubuntu en preview**, **AKS Any Scale en GA con integración de Ray**, NAT Gateway standard v2 como default, App Gateway con IPv6 en preview, y PostgreSQL elastic clusters ganando upgrades de versión mayor in-place (preview).

## Por qué importa

Los retiros sin reemplazo directo son la señal más honesta que da un cloud provider: ADE compitió contra la combinación Terraform/Bicep + pipelines y perdió. Para los equipos de platform engineering el mensaje es claro — la capa de "entornos como servicio" se construye sobre primitivas, no se compra empaquetada. Anota las fechas, revisa qué tienes corriendo en ADE o Dev Box, y empieza el plan de migración antes de que se transforme en emergencia de calendario.

**Fuentes:** [Azure Weekly Update (John Savill)](https://www.youtube.com/watch?v=65a5WX2SGEU) · [daily.dev](https://daily.dev/posts/azure-weekly-update---9th-october-2026-hib0vmnoy)
