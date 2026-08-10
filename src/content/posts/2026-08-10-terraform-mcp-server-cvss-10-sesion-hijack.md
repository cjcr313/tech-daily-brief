---
title: "CVE con CVSS 10.0 en Terraform MCP Server de HashiCorp: el token de tu compañero es el tuyo"
author: Carlos
pubDatetime: 2026-08-10T04:00:00Z
slug: terraform-mcp-server-cvss-10-sesion-hijack
featured: false
draft: false
tags:
  - DevOps
  - Infraestructura
description: "HashiCorp parchó tres vulnerabilidades críticas en terraform-mcp-server, incluyendo un CVSS 10.0 que permite robar tokens de Terraform entre usuarios en deployments compartidos."
---

![Ilustración editorial de un candado roto sobre código de infraestructura con conexiones de red en rojo](../../assets/images/2026-08-10-terraform-mcp-server-cvss-10-sesion-hijack.jpg)

Si tienes un Terraform MCP Server compartido en tu equipo, **actualiza ahora mismo**. HashiCorp parchó tres vulnerabilidades críticas la semana pasada, y la peor tiene **CVSS 10.0 perfecto**.

## El bug principal: CVE-2026-16498 (CVSS 10.0)

El problema está en el modo HTTP stateless del `terraform-mcp-server`. La librería MCP subyacente **nunca asigna identificadores de sesión únicos**. El cache de credenciales que se monta encima no puede distinguir un usuario de otro.

Resultado: **el token de Terraform de una persona puede terminar sirviendo la petición de otra**. En palabras simples, el compañero de al lado podría estar modificando tu infraestructura con tus credenciales sin siquiera saberlo.

## Los otros dos bugs

**CVE-2026-16496** golpea el modo stateful — justamente el que HashiCorp recomienda para deployments centrales compartidos. Si alguien obtiene el session ID de otro usuario, puede acceder a sus organizaciones y workspaces de Terraform.

**CVE-2026-14869** (encontrado por Juan Pablo Martinez Kuhn de Coinspect) permite a un cliente no autenticado **redirigir el bearer token del servidor** a una URL arbitraria mediante un parámetro de query que no se validaba.

## Contexto: por qué esto importa

El Terraform MCP Server salió como GA en junio de 2026, y HashiCorp lo promocionó exactamente para uso compartido entre equipos — el escenario más vulnerable. O sea, la configuración que más gente tiene en producción es justamente la afectada.

Los fixes están en la versión **1.1.0** (lanzada el 14 de julio) con un hardening adicional en **1.2.0** (4 de agosto). Los deployments locales en modo stdio single-user nunca estuvieron expuestos.

## La lección

Los MCP servers son la nueva superficie de ataque en DevOps. Cada vez más herramientas de IaC exponen APIs que manejan credenciales privilegiadas, y el estándar MCP aún está madurando. Tres bugs de session management en un producto GA de HashiCorp es una señal de que **el protocolo MCP necesita hardening serio antes de desplegarlo en multi-tenant**.

Lista de verificación rápida:
- ¿Tu terraform-mcp-server corre en modo HTTP compartido? → **Actualiza a 1.2.0 YA**
- ¿Rotaste los tokens de Terraform después del upgrade? → Hazlo igual
- ¿Tienes otros MCP servers en producción? → Revisa su manejo de sesiones

---

**Fuentes:** [Aardwolf Security](https://aardwolfsecurity.com/critical-vulnerability-patching/), [HashiCorp Security Advisory HCSEC-2026-23](https://support.hashicorp.com/)
