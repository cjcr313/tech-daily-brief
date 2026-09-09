---
title: "Slim Spider: el actor que se metió por Azure DevOps a robar secretos cripto en Brasil"
author: Carlos
pubDatetime: 2026-09-09T15:00:00Z
slug: slim-spider-cripto-custodia-brasil
featured: false
draft: false
tags:
  - Seguridad
  - Cloud
  - DevOps
description: "CrowdStrike destapa a Slim Spider, un actor brasileño que robó secretos de custodia cripto escalando por pipelines de Azure DevOps y un clúster de Kubernetes."
---

![Ilustración editorial de un ciberataque a infraestructura cloud bancaria con pipelines comprometidos](../../assets/images/2026-09-09-slim-spider-cripto-custodia-brasil.jpg)

CrowdStrike destapó a **Slim Spider**, un actor de amenaza financieramente motivado que viene atacando instituciones financieras brasileñas al menos desde **marzo de 2026**. El caso es un manual de cómo se combina ingeniería social con abuso de infraestructura cloud nativa —y de paso, un recordatorio incómodo para cualquiera que corra pipelines de CI/CD.

## El objetivo: cripto y Pix

El grupo demostró "conocimiento operacional profundo de la infraestructura financiera brasileña", incluyendo el servicio de pagos instantáneos **Pix**, plataformas de activos digitales y los entornos cloud de las entidades. En una intrusión multi-etapa contra una institución financiera, apuntó directo a los **activos de criptomonedas y las cuentas de pago instantáneo**.

## Cómo lo hicieron

La cadena de ataque es de libro, pero ejecutada con elegancia operacional:

- **Scripts Bash custom** que consultan los metadatos de la instancia cloud para robar credenciales temporales por conexiones socket.
- Enumeración de **todos los secretos** del gestor de credenciales cloud, usando `sed` para clonar y modificar scripts extractores.
- Uso de **`cast`** (del toolkit Foundry de Ethereum) para derivar la dirección de wallet asociada a una clave privada robada.
- Firma criptográfica **directa con OpenSSL** dentro de los Bash scripts, evitando librerías de terceros que podrían levantar detección.

## El giro DevOps que duele

Después de exfiltrar los secretos de custodia, Slim Spider pivotó a **Azure DevOps** —probablemente con credenciales comprometidas— para ejecutar pipelines maliciosos que desplegaron más implantes sobre un **clúster de Kubernetes administrado**. Uno de los implantes se llamaba `spi`, intentando hacerse pasar por el SPI (Sistema de Pagamentos Instantâneos), la infraestructura central que procesa los pagos Pix.

## Qué se lleva uno de esto

El patrón es claro: el actor no necesitó romper el clúster directamente. Le bastó con **comprometer el pipeline de CI/CD** para que la infraestructura legítima hiciera el trabajo sucio por él. La lección para equipos de DevOps y seguridad es la de siempre, pero acá está bien documentada: si tus credenciales de pipeline están expuestas, tu Kubernetes y tu gestor de secretos son el siguiente eslabón, no el primero.
