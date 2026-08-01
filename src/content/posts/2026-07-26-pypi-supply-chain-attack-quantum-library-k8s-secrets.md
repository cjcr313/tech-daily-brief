---
title: "Supply chain attack en PyPI: librería cuántica robaba credenciales de SSH, cloud secrets y configs de Kubernetes"
author: Carlos
pubDatetime: 2026-07-26T16:03:00Z
slug: pypi-supply-chain-attack-quantum-library-k8s-secrets
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
description: "Un paquete PyPI secuestrado inyectó un credential stealer en una librería cuántica que busca SSH keys, secrets de cloud y configs de K8s al hacer import. Anthropic responde con Claude Security plugin."
---

![Placeholder](../../assets/images/placeholder.jpg)


La supply chain de Python volvió a dar sustos. Esta semana se detectó que **un paquete hijackeado en PyPI envenenó una librería de computing cuántico** con un credential stealer que se ejecuta al momento del `import`. Sí, ni siquiera necesitas llamar una función — con solo importar el paquete, ya estás comprometido.

## Qué hace el malware

El credential stealer busca activamente:

- **SSH keys** (`~/.ssh/id_rsa`, `id_ed25519`, etc.)
- **Cloud secrets** (credenciales de AWS, GCP, Azure)
- **Kubernetes configs** (`~/.kube/config`, service account tokens)
- Variables de entorno con tokens sensibles

Todo esto se exfiltra en silencio cuando el paquete se carga. El vector es clásico supply chain: un mantenedor perdió acceso, un atacante tomó control del nombre del paquete, y publicó una versión maliciua que parece idéntica a la legítima.

## El contexto más amplio

Esto no es un incidente aislado. La misma semana vimos:

- **Packagist (PHP):** Versiones comprometidas de desarrolladores abusando de GitHub Actions Runners para escaneo y credential theft contra cPanel/WHM, via CVE-2026-41940
- **SharePoint deserialization bug:** Un exploit público pasó de proof-of-concept a robo de machine keys en horas. Parchear no limpia el acceso ya obtenido.
- **Anthropic Claude Security plugin:** Lanzado como respuesta al momento, pone un equipo de agents a cazar bugs en tu propio codebase

## Cómo protegerse

- **Pinning de dependencias:** Usa lockfiles (`requirements.txt` con hashes, `poetry.lock`, `pip-tools`). Nunca `pip install` sin versionado estricto.
- **Scanning de imports:** Tools como `pip-audit`, `safety`, o `socket.dev` pueden detectar paquetes comprometidos antes de que entren
- **Secrets scanning en repos:** Pre-commit hooks con `gitleaks` o `trufflehog`
- **K8s:** No guardar creds en `~/.kube/config` en máquinas de desarrollo. Usar OIDC o tokens efímeros

La supply chain de open source es el blando de 2026. Cada paquete que agregas es una superficie de ataque nueva.

---

*Fuentes: Ajit Singh Dev Weekly, IT-Boltwise, Anthropic, BleepingComputer*
