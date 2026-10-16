---
title: "GhostAction: 1.900 cuentas de GitHub secuestradas y más de 30.000 repositorios en la mira"
author: Carlos
pubDatetime: 2026-10-16T15:05:00Z
slug: ghostaction-github-1900-cuentas-30000-repos
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
  - Cloud
description: "La campaña de supply chain GhostAction comprometió unas 1.900 cuentas de GitHub e inyectó workflows maliciosos en más de 30.000 repos, con 3.177 intentos de extracción de secretos desde CI."
---

![Ilustración editorial tech de un ataque de supply chain sobre repositorios y pipelines CI/CD](../../assets/images/ghostaction-github-1900-cuentas-30000-repos.jpg)

Si trabajas con GitHub Actions, esta noticia es para revisarla con calma. Según el reporte de **GitGuardian** difundido esta semana, la campaña de supply chain conocida como **GhostAction** escaló feo: comprometió la cuenta de unos **1.900 usuarios de GitHub** e inyectó workflows maliciosos en **más de 30.000 repositorios** de unas 3.000 organizaciones, con **3.174 intentos de extracción de secretos** desde la CI de repos públicos.

## ¿Cómo funciona?

Nada sofisticado a primera vista, pero brutalmente efectivo: los atacantes obtienen **acceso de escritura** a repos usando Personal Access Tokens (PAT) robados o credenciales filtradas en logs de infostealers. Con la cuenta del mantenedor secuestrada, suben un archivo de workflow disfrazado con nombres inofensivos como `security-audit.yml` o `github_actions_security.yml`. Puro ingeniería social en el nombre del archivo.

El objetivo final es el robo masivo de:

- Secretos de CI/CD
- Credenciales de cloud
- Tokens de registries de paquetes (npm, PyPI, DockerHub)
- **API keys de proveedores de IA**

O sea, todo lo que vive en los secrets de tus Actions.

## Cronología del golpe

GhostAction no es nueva: fue descubierta en septiembre de 2025. Pero desde el **31 de agosto de 2026** arrancó una nueva ola, más experimental y manual, con un payload que fue evolucionando en **tres versiones**: la primera agregó escaneo de secretos en el historial de git; la segunda captura contexto alrededor de cada AWS key ID para aparejarlo con su secret access key; la tercera mejora la recuperación de ese contexto durante el escaneo.

El pico llegó el **8 y 9 de octubre**: el payload se desplegó primero a 160 víctimas conocidas y, 20 minutos después, a **28.000 repositorios nuevos**. Las olas del 10 y 12 de octubre usaron el mismo payload, pero GitHub empezó a bloquear la ejecución del workflow malicioso desde el 9 de octubre, así que esas no lograron extraer nada.

## El dato incómodo

Un subconjunto de las víctimas de este estallido **ya había sido comprometido en las olas de septiembre 2025 y agosto 2026**. Traducción: hay equipos que no rotaron sus secretos después del primer incidente, y los atacantes están apostando justamente a eso.

## Qué hacer si esto te preocupa (debería)

- **Rota credenciales** expuestas, sobre todo PATs antiguos y tokens de registry. Si fue filtrado alguna vez, asume que está en la lista.
- **Audita workflows extraños** en tus repos: archivos con nombres "de seguridad" que no instalaste nadie.
- Revisa la política de ejecución de Actions en tu organización y **restringe quién puede modificar workflows**.
- Bloquear indicadores específicos ayuda, pero como bien apuntan los investigadores: bloquear el workflow no asegura tus secretos. La rotación es lo que importa.

La lección de siempre, pero a escala industrial: la cadena de suministro de software es tan fuerte como el token más viejo que nunca rotaste.
