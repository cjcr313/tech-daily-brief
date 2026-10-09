---
title: "Troyanizan un provider de Terraform: el malware se ejecuta cuando Terraform carga el plugin (y ya saben a quién echarle la culpa)"
author: Carlos
pubDatetime: 2026-10-09T15:20:00Z
slug: tradertraitor-troyaniza-provider-terraform-flatroof
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
description: "Zscaler destapó un provider de Terraform troyanizado (terraform-provider-awsbeta) que carga un backdoor Rust llamado FLATROOF mientras Terraform lo inicializa como plugin normal. Atribución sospechosa: TraderTraitor, el grupo norcoreano detrás de las falsas pruebas técnicas de Terraform."
---

![Ilustración editorial de un caballo de Troya construido con bloques de código e íconos de infraestructura siendo arrastrado dentro de un pipeline de integración continua, acentos rojos y naranjos sobre fondo azul oscuro con circuitos sutiles, estilo ilustración tech editorial dramática, sin texto](../../assets/images/2026-10-09-tradertraitor-troyaniza-provider-terraform-flatroof.jpg)

Ayer el worm Shai-Hulud en npm; hoy el provider de Terraform troyanizado. La cadena de suministro de infraestructura está de moda entre los atacantes, y esta vez [Zscaler ThreatLabz](https://www.zscaler.com/blogs/security-research/suspected-tradertraitor-group-uses-trojanized-terraform-provider-deliver) destapó una campaña que abusa de algo que los DevOps hacen decenas de veces al día: **`terraform init`**.

## El señuelo: un provider AWS que "funciona"

El archivo maldito se llama **`terraform-provider-awsbeta_v1.0.0`**, está escrito en Go y se hace pasar por un provider de AWS para Terraform. Lo perverso del diseño: **contiene una estructura de provider funcional y legítima**, así que ante los ojos de un desarrollador apurado se ve normal. Pero empotrado dentro viene un paquete malicioso que **se ejecuta apenas Terraform carga el provider como plugin**.

¿El objetivo? Cloud engineers, equipos DevOps y developers crypto/Web3: justamente los que tienen en sus estaciones de trabajo y runners de CI/CD **acceso a código fuente, credenciales de nube, API keys, permisos de despliegue y sesiones guardadas en el navegador**.

## La cadena de infección, paso a paso

1. El provider falso revisa si existe un archivo **`session.lock`** en el directorio temporal. Si no está, descarga un **Bash loader llamado `safari_updater`**, lo corre en background y crea el lock para no ejecutarse dos veces.
2. El loader detecta sistema operativo y arquitectura, y descarga payloads **disfrazados de fuentes web `.woff`**: contenido de fuente real + un marcador `@@ENDFONT@@` + un ejecutable cifrado. Base64 + **AES-256-CBC**, usando Python, Node.js, Perl u OpenSSL según lo que encuentre instalado en la víctima.
3. En **macOS**, el malware le quita el atributo de cuarentena y le pone una firma ad hoc para ejecutarse **sin que Gatekeeper se inmute**.

## FLATROOF y ROOFDECK: los inquilinos

El payload principal es **FLATROOF, un backdoor escrito en Rust** para macOS, Linux y Windows, con persistencia vía servicio de Linux, configuración de logout de macOS o Run key del registro de Windows. Recolecta información del sistema, lista procesos, maneja archivos, ejecuta comandos, descarga payloads adicionales, exfiltra datos y hasta se autodestruye cuando conviene.

Sus stealers en Python van directo a lo jugoso:

- **Chromium y Firefox**: credenciales guardadas, cookies, historial, autofill, historial de shell
- **macOS**: datos de Safari y el `login.keychain-db` completo
- **Windows**: Chrome, Edge, Brave, Credential Manager, y extensiones de wallet **MetaMask, Phantom, Trust Wallet y Rabby**

Y de yapa, **ROOFDECK**, un backdoor con control remoto más completo (comandos de shell, transferencia de archivos, clipboard, auto-actualización y limpieza de rastros), cuyo hallazgo de C2 es creativo: usa un archivo de configuración local, **un registro en Pastebin criptográficamente firmado** o metadatos de perfiles en **Nostr** para localizar su servidor activo.

## ¿Quién? La firma norcoreana de siempre

Zscaler detectó la campaña en julio de 2026 y la vincula —con confianza moderada, eso sí— a **TraderTraitor**, el grupo norcoreano también conocido como Jade Sleet, UNC4899, Pressure Chollima o Slow Pisces. Es el mismo ecosistema que ya usaba **falsas pruebas técnicas de Terraform** ("este bug requiere un entorno especial, corre este repo") para comprometer desarrolladores. El modus operandi calza: infraestructura confiable de mentira, desarrolladores con credenciales gordas y wallets crypto en la mira.

## Qué hacer hoy mismo

- **Restringe providers no aprobados**: revisa el bloque `required_providers` de tus módulos y bloquea fuentes fuera del registry oficial
- **Valida checksums en `.terraform.lock.hcl`** y revisa direcciones de source de cada provider (los dominios lookalike son la puerta de entrada)
- En detección: **procesos de Terraform lanzando shells**, archivos inesperados en `/tmp`, descargas `.woff` sospechosas y ejecutables corriendo desde el perfil de usuario
- CI/CD con revisión de código, control de dependencias y escaneo automático antes de desplegar cambios de infraestructura

El IoC principal por si quieres auditar: el provider troyanizado tiene hash SHA-1 `9d78ece09457907b730d139e4e0c64dd`. La lección de fondo no cambia: en Terraform, un provider no es una dependencia más — **es un binario que corre con tus credenciales puestas**. Trátalo como tal.
