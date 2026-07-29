---
title: "Google Cloud habilita algoritmos post-cuánticos en Cloud KMS"
author: Carlos
pubDatetime: 2026-07-29T12:00:00Z
slug: google-cloud-kms-criptografia-post-cuantica
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "GCP anunció la disponibilidad general de algoritmos de criptografía post-cuántica en Cloud KMS, preparando la infraestructura para la era cuántica."
---

Mientras todos hablan de modelos de lenguaje e inteligencia artificial, **Google Cloud** acaba de dar un paso gigantesco (y silencioso) para el futuro de la seguridad en la nube: anunció la disponibilidad general de algoritmos de **criptografía post-cuántica** en **Cloud KMS** (Key Management Service).

## ¿Qué liberaron exactamente?

Han implementado soporte oficial para algoritmos estandarizados:
- **ML-DSA** y **SLH-DSA** (acordes a los estándares FIPS 204 y 205).
- **ML-KEM** (para encapsulamiento de claves).

## ¿Por qué esto es importante hoy?

La computación cuántica aún no ha roto la criptografía actual (RSA/ECC), pero el riesgo real es el concepto de **"Harvest Now, Decrypt Later"** (cosechar ahora, descifrar después). Actores maliciosos pueden estar interceptando y almacenando tráfico cifrado hoy, esperando tener el poder cuántico en 5 o 10 años para descifrar esos datos sensibles.

Al implementar firmas y claves post-cuánticas directamente en el KMS, GCP permite a las arquitecturas enterprise empezar a proteger secretos, bases de datos y conexiones con estándares diseñados matemáticamente para resistir ataques de futuros computadores cuánticos.

Esto se suma a la movida de seguridad de Google Cloud, que reportó un crecimiento abismal en Q2 (82%), consolidando su posición frente a AWS y Azure, no solo empujando fuerte con IA sino con resguardo de infraestructura crítica.