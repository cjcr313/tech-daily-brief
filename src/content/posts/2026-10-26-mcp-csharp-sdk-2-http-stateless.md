---
title: "MCP C# SDK 2.0: Microsoft mata las sesiones y convierte los servidores MCP en servicios stateless"
author: Carlos
pubDatetime: 2026-10-26T13:15:00Z
slug: mcp-csharp-sdk-2-http-stateless
featured: false
draft: false
tags:
  - Arquitectura
  - DevOps
  - IA
description: "La versión 2.0 del SDK oficial de C# para MCP implementa la revisión 2026-07-28 del protocolo: HTTP stateless por defecto, headers estandarizados para que los gateways enruten sin leer el body, y Multi Round-Trip Requests para tools interactivas."
---

![Ilustración editorial tech isométrica de una capa de protocolo central conectando clientes y nodos de servidor mediante rutas luminosas estandarizadas, paquetes de datos fluyendo horizontalmente sin anclajes de sesión, paleta índigo y cian con acentos ámbar, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/2026-10-26-mcp-csharp-sdk-2-http-stateless.jpg)

Microsoft anunció la versión **estable 2.0 del SDK oficial de C# para MCP** (Model Context Protocol), implementando la revisión **2026-07-28** de la especificación — que el propio equipo describe como la más grande desde el lanzamiento del protocolo, porque **repensa cómo MCP funciona sobre HTTP**. Y el cambio de fondo es uno que cualquier persona de infraestructura va a agradecer: adiós a las sesiones.

## Stateless por defecto: el handshake desaparece

El handshake de `initialize` y el header `Mcp-Session-Id` **se eliminan**. La versión del protocolo y las capacidades ahora viajan en cada request, así que **cualquier instancia de servidor puede atender cualquier request** — sin sticky routing ni stores de sesión compartidos. `HttpServerTransportOptions.Stateless` queda en `true` por defecto; los que necesitan sesiones lo ponen en `false` (con warnings MCP9006/MCP9004 si insisten con lo legacy).

Traducción para los que operan esto: los servidores MCP dejan de ser sesiones pegadas a una instancia y se vuelven **servicios cloud-native que escalan horizontal detrás de cualquier load balancer**.

## Headers estandarizados: routing sin abrir el body

Un `tools/call` ahora lleva headers `Mcp-Method` y `Mcp-Name`, y el atributo `[McpHeader]` promueve un parámetro de tool a un header `Mcp-Param-*`. Los load balancers y gateways pueden enrutar tráfico MCP **leyendo headers, sin parsear el cuerpo**. El body sigue siendo autoritativo: si un header no calza, el servidor responde `HeaderMismatch`.

## MRTR: tools que preguntan de vuelta

El statelessness mataba el canal que usaban los servidores para pedir input al cliente a mitad de llamada. Lo reemplaza **Multi Round-Trip Requests**: la tool lanza `InputRequiredException` con requests de input (elicitation, sampling o roots list) más un `requestState` opaco; el cliente junta las respuestas y re-emite el llamado. `McpClient` lo hace automático si registrás los handlers. En conexiones stateless con clientes viejos, simplemente falla como `McpException`.

## Lo fino que importa en producción

- **OAuth más estricto**: validación de issuer RFC 9207, PKCE S256 obligatorio, tipo de aplicación inferido en registro dinámico
- **2.1 a 2.3** (agosto-octubre): handler de subscriptions/listen, `HttpServerSessionMode` para compartir un endpoint entre revisiones del protocolo, y `McpClient.ServerInfo` ahora nullable — el release notes advierte **no usar identidad auto-reportada para decisiones de seguridad**, detalle fino pero importante
- Las respuestas HTTP ahora esperan el primer mensaje de protocolo antes de mandar headers: un handler silencioso de larga duración puede necesitar output de progreso o un timeout más generoso
- Un lector preguntó si el protocolo protege `requestState` contra manipulación o reuso entre sesiones; **nadie del equipo respondió**
- Targets: .NET 8, 9 y 10, más .NET Standard 2.0, en NuGet

## La lectura

MCP se está endureciendo para producción de la forma aburrida y correcta: stateless, enrutable por infraestructura estándar, OAuth serio. El ecosistema de agentes creció montando servidores MCP por todos lados — esta revisión es la que decide si eso escala detrás de un gateway o se convierte en mil sesiones pegadas que nadie puede operar. Los equipos .NET que ya exponen tools MCP deberían planificar la migración ya, que las APIs 1.x estables se mantienen.

*Fuente: [InfoQ](https://www.infoq.com/news/2026/10/MCP-CSharp-SDK-Stateless/) · [Microsoft DevBlogs](https://devblogs.microsoft.com/dotnet/announcing-v20-of-the-official-mcp-csharp-sdk/)*
