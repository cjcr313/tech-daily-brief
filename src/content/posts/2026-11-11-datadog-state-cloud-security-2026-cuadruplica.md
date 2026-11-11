---
title: "Datadog: las vulnerabilidades críticas en la nube se cuadruplicaron en seis meses"
author: Carlos
pubDatetime: 2026-11-11T13:35:00Z
slug: datadog-state-cloud-security-2026-cuadruplica
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
  - Observabilidad
description: "State of Cloud Security 2026 de Datadog: la mediana de vulnerabilidades high/critical por workload pasó de 4 a 16 entre mayo y noviembre. La IA aceleró el desarrollo… y la superficie de ataque."
---

![Ilustración editorial de un muro creciente de alertas rojas y escudos de vulnerabilidad sobre torres de servidores en la nube](../../assets/images/datadog-state-cloud-security-2026-cuadruplica.jpg)

Datadog publicó su **State of Cloud Security 2026** (10 de noviembre), con análisis de la postura de seguridad de miles de organizaciones clientes. El dato que grita: **la mediana de vulnerabilidades high/critical por workload en la nube pasó de 4 en mayo a 16 en noviembre**. Cuatro veces más en menos de un año.

## La curva, en detalle

- 4 (mayo) → 14 (junio) → 16 (noviembre): vulnerabilidades high/critical medianas por workload
- El salto arranca justo con el release de modelos frontera de IA generativa, y Datadog lo atribuye directamente a su impacto: más código generado, más dependencias, más CVEs aterrizando en aplicaciones reales
- No es riesgo teórico: los datos vienen del análisis SCA de Code Security sobre librerías de terceros usadas por apps corriendo en producción

## Supply chain a velocidad máquina

- **60% de las organizaciones corre versiones de dependencias con menos de 24 horas de publicadas**, presentes en 21% de las aplicaciones cloud
- Un workload promedio arrastra **149 dependencias** de software; una organización promedio, 568
- Los ataques de supply chain cada vez corren de forma autónoma y a velocidad de máquina, con dependencias hijackeadas como ruta favorita

La recomendación de Datadog es directa: **dependency cooldowns**. Esperar unas horas antes de adoptar versiones recién liberadas, porque la comunidad suele identificar y contener librerías comprometidas en ese mismo plazo. La paciencia como control de seguridad.

## Credenciales eternas, el otro pecado

- Casi la mitad de las organizaciones que usan Gemini accede con **API keys de larga vida**
- Cerca del **30% de los usuarios de AWS IAM y Google Cloud Service Account tiene access keys de más de tres años**
- Los atacantes autónomos enumeran credenciales long-lived primero: son el premio de mayor valor y mayor duración del entorno (Pacu y TruffleHog lo hacen a escala, y están disponibles para cualquiera)

El consejo: acceder a servicios de inferencia de IA con **identidades de corta duración** (IAM role, managed identity, service account federado) en vez de API keys estáticas.

## La conclusión incómoda

La velocidad que la IA le regaló al desarrollo también se la regaló a la superficie de ataque. Código más rápido + dependencias fresquitas sin vetting + credenciales que no caducan nunca = un cóctel que ningún equipo de seguridad quiere servir. La buena noticia: los fixes son conocidos. La mala: la mediana dice que casi nadie los está aplicando.
