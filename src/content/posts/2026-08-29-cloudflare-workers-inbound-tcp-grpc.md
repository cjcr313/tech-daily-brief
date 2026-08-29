---
title: "Cloudflare Workers ahora aceptan TCP entrante: gRPC es el primer protocolo encima"
author: Carlos
pubDatetime: 2026-08-29T10:00:00Z
slug: cloudflare-workers-inbound-tcp-grpc
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
  - DevOps
description: "Cloudflare levantó una restricción de 8 años: los Workers ya no solo sirven HTTP, ahora aceptan conexiones TCP entrantes vía un handler connect(socket), con gRPC como primer protocolo soportado (beta privada)."
---

![Ilustración editorial de nodos de borde de red con flujos de datos bidireccionales brillantes conectando contenedores, simbolizando protocolo gRPC sobre TCP, paleta azul y naranja, estilo tech minimalista](../../assets/images/2026-08-29-cloudflare-workers-inbound-tcp-grpc.jpg)

Ocho años después, se cayó una de las restricciones más viejas de Cloudflare Workers. Desde 2017, un Worker podía **abrir sockets salientes** hacia una base de datos o un servicio, pero como servidor solo entendía **HTTP**. Eso cambió: un nuevo handler `connect(socket)` deja que los Workers **acepten conexiones TCP entrantes**, y **gRPC es lo primero que se construye encima**.

## Lo que se lanzó (son tres cosas, con techos distintos)

**1. El handler `connect(socket)`.** Acepta un socket entrante crudo, enrutado al Worker a través de **Spectrum** (el proxy de ingreso de Cloudflare para tráfico no-HTTP). El Worker puede leer y escribir el socket directamente, pasárselo a otro Worker o entregárselo a un **Durable Object**.

**2. El camino full-duplex termina en Containers.** Desde un Durable Object, el socket puede seguir hacia un **Container** mediante `getTcpPort()`. Ahí está la gracia gorda: comunicación full-duplex entre cliente y servidor corriendo **cualquier programa, en cualquier lenguaje, para cualquier protocolo TCP**. Los ejemplos de Cloudflare incluyen un echo server gRPC en Go y un `socketserver` en Python, ambos corriendo **sin modificar**.

**3. Los Workers reciben menos.** Pueden servir gRPC unario y server-streaming, y llamar servidores gRPC externos sin container, pero **no** streaming bidireccional. El mecanismo es traducción, no soporte nativo: el código del developer usa gRPC-web, y Cloudflare convierte el gRPC entrante a gRPC-web (y el saliente de vuelta a gRPC).

## Por qué ese límite

HTTP/2 divide los requests en frames con stream IDs, y gRPC depende de ese control a nivel de stream para streaming, cancelación, flow control y trailers. Las APIs de plataforma web tipo `fetch()` **no lo exponen**. Los navegadores tienen el mismo problema (por eso existe gRPC-web), y Cloudflare viene convirtiendo gRPC a HTTP/1.1 dentro de su reverse proxy **desde 2020** para que el WAF y Bot Management puedan inspeccionar los mensajes.

## Lo práctico

Los clientes existentes **no cambian nada**: un Worker puede servir apps móviles con `grpc-swift-2` o `grpc-kotlin`, o ponerse delante de un backend gRPC tal como hoy se ponen delante de REST. Del lado servidor son pocas líneas con `@connectrpc/connect` open-source.

## La parte más honesta del anuncio

Que sea **beta privada** tiene una razón de fondo poco común de ver escrita: Cloudflare **no usa gRPC internamente**. Usan Cap'n Proto, Cap'n Web y el sistema RPC nativo de Workers, y su política es "cuando lanzamos algo, apuntamos a usarlo nosotros mismos". Al no comerse su propio dogfood con gRPC, prefieren validarlo antes de marcarlo GA.

Queda un tema abierto que la comunidad ya levantó (Sebastian Buzdugan en X): si los Workers exponen suficiente control de **backpressure** para streams gRPC, que es justo donde se define si una implementación aguanta en producción. El post oficial no lo aborda.

Fuente: [Cloudflare blog](https://blog.cloudflare.com/grpc-workers/) vía InfoQ (28-08-2026).
