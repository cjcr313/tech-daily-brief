---
title: "Azure Arc Certificate Management llega a GA: cert-manager y trust-manager como servicio gestionado"
author: Carlos
pubDatetime: 2026-09-05T22:00:00Z
slug: azure-arc-certificate-management-ga
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - DevOps
description: "Microsoft llevó a disponibilidad general el manejo de certificados en Azure Arc-enabled Kubernetes, empaquetando cert-manager y trust-manager (ambos graduados CNCF) como una extensión gestionada para flotas edge."
---

![Ilustración editorial de una flota de clústeres de Kubernetes en el edge conectados a un panel de gestión central, con certificados X.509 y cadenas de confianza flotando, paleta azul acero con acentos cian](../../assets/images/2026-09-05-azure-arc-certificate-management-ga.jpg)

El **1 de septiembre** Microsoft movió a **disponibilidad general** (GA) el manejo de certificados en **Azure Arc-enabled Kubernetes**, y la jugada es más interesante de lo que parece a primera vista: en lugar de inventar algo propio, empaquetaron dos proyectos **graduados de la CNCF** — **cert-manager** y **trust-manager** — como una sola extensión **gestionada por Microsoft**.

## Qué hace

La extensión resuelve el ciclo de vida completo de los certificados en tus clusters conectados vía Arc, especialmente pensado para **flotas de clusters en el edge**:

- **Emisión y renovación automática** de certificados (lo que ya hace cert-manager, pero ahora con el respaldo operativo de Microsoft).
- **Distribución de confianza** a los workloads mediante trust-manager, que arma y mantiene los *trust bundles*.
- **Gestión centralizada** desde Azure, sin tener que instalar y mantener cada pieza por tu cuenta en cada cluster.

En la práctica, es la respuesta de Microsoft al dolor de operar TLS/mTLS a escala en edge: muchos clusters, poca gente, y cero ganas de andar pegando Helm charts a mano en cada uno.

## Por qué importa

- **Adiós al pegamento casero**: quien ya usaba cert-manager por su cuenta ahora tiene una ruta soportada y gestionada, con el estado visible desde el panel de Azure.
- **Confianza distribuida sin dramas**: trust-manager era la pieza que faltaba para que los workloads confíen en las CAs correctas, y ahora viene incluida.
- **Edge-friendly**: el foco explícito en edge fleets dice dónde apunta Microsoft — despliegues distribuidos donde el costo de mantener TLS a mano se multiplica.

No es un feature que cambie el mundo, pero sí es el tipo de cosa que le quita fricción real a los equipos de platform engineering que ya viven en el ecosistema Azure + Kubernetes. La tendencia es clara: los hyperscalers están absorbiendo los proyectos CNCF maduros y convirtiéndolos en servicios gestionados, y acá cert-manager/trust-manager se suman a esa lista.

**Fuente:** anuncio de Microsoft (Azure Arc-enabled Kubernetes, 01-09-2026), vía Beyond Cloud with Chriz.
