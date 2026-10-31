---
title: "eMudhra: Cloudflare muestra cómo se están explotando las claves débiles y cuánta Internet sigue expuesta"
author: Carlos
pubDatetime: 2026-10-31T21:05:00Z
slug: cloudflare-emudhra-claves-debiles-seguimiento
featured: false
draft: false
tags:
  - Seguridad
  - Cloud
description: "El seguimiento del incidente eMudhra: ~22.000 handshakes con claves débiles, certificados falsificados en menos de una hora y más de la mitad del tráfico que aún acepta la cadena comprometida."
---

![Ilustración editorial de un candado digital destruido con una llave gigante marcada con el número 4, sobre un fondo de conexiones de red en azul oscuro](../../assets/images/2026-10-31-cloudflare-emudhra-claves-debiles-seguimiento.jpg)

Si el otro día te perdiste el capítulo inicial: una autoridad certificadora india, eMudhra, tenía ocho claves privadas intermedias ridiculamente débiles. Donde debía haber un número aleatorio de 115 dígitos, apareció el número **4**. Las otras siete tampoco eran gran cosa: 56, 66, 115, 155, 156, 230 y 237. Cualquiera podía recuperar esas claves desde los certificados públicos y fabricar certificados válidos para cualquier dominio. Ahora Cloudflare publicó el seguimiento, y los números son para tomarse el asunto en serio.

## Lo que vio Cloudflare en su red

- **~22.000 intentos de handshake** con las claves débiles en la primera semana de monitoreo (vía Pingora, su proxy de salida). Dos tercios eran tests contra sitios de verificación; casi todo el resto eran orígenes que instalaron certificados firmados con el intermedio débil.
- **Cerca de 160 handshakes llamaron la atención**: certificados con SANs de dominios ajenos, incluyendo dominios de dispositivos IoT de consumo. Uno fue emitido el **20 de octubre a las 18:19 UTC, menos de una hora** después de que el bug de Mozilla se hiciera público. O sea: hubo falsificación casi inmediata.
- Eso sí: **no hay evidencia de intercepción activa** contra las conexiones de Cloudflare. Los certificados sospechosos parecían certificados por defecto de los propios servidores (fallaban igual la verificación de hostname). Pero, como reconocen los autores, la intercepción quirúrgica y dirigida no se descarta con esto.

## Mientras tanto, Cloudflare se parcheó en horas

Los sistemas de alta prioridad quedaron parcheados el mismo 19 de octubre, y usaron **análisis de código asistido por IA** para encontrar todo lo que confiaba en esas claves: análisis completo en cuatro horas, ticket por sistema, parche inmediato para lo crítico.

## La parte incómoda: cuánta gente sigue expuesta

Para medirlo sin romper conexiones, Cloudflare metió sondas en sus challenge pages (un certificado firmado por eMudhra vs. uno legítimo). Resultado: **más de la mitad de las sondas en redes grandes todavía acepta la cadena comprometida**. Hubo algo de parcheo el fin de semana, pero la tendencia después quedó plana. Y aunque el tráfico está sesgado por bots, como bien dicen: los bots también son software que necesita actualizarse de seguridad.

## Qué hacer y qué viene

- **Parchear, punto.** Hay una guía colaborativa en emudhra.we-have-a-problem.com, con instrucciones específicas para macOS. Clientes de Cloudflare: revisar la guía de productos como WARP y Tunnel.
- eMudhra anunció que **abandona el negocio de CA pública**, culpando a un "error en un script de generación de claves" que hasta ahora no han compartido. Quedan preguntas abiertas sobre auditors y cross-signers.
- A futuro, Cloudflare aposta por proyectos como **upki** (de rustls): el trust store no puede ser una lista estática de CAs raíz, necesita actualizarse rápido con revocación y llaves de Certificate Transparency.

La lección de fondo: el modelo de confianza de TLS sigue asumiendo ventanas de parcheo de días, cuando la evidencia muestra que la explotación llega en horas. La fuente original está en el [blog de Cloudflare](https://blog.cloudflare.com/emudhra-patching/).
