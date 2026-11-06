---
title: "OpenShell llega a Kubernetes: NVIDIA y la CNCF publican la guía para correr agentes de IA sin entregarles las llaves del castillo"
author: Carlos
pubDatetime: 2026-11-05T21:05:00Z
slug: openshell-kubernetes-agentes-nvidia-cncf
featured: false
draft: false
tags:
  - Kubernetes
  - DevOps
description: "La CNCF publicó la guía definitiva de OpenShell en Kubernetes: el runtime iniciado por NVIDIA que corre cada agente de IA en un sandbox con controles de filesystem, proceso, red y credenciales declarados en YAML. Y lo compara cara a cara con Agent Substrate de Google."
---

![Ilustración editorial tech de un contenedor de carga aislado y blindado flotando sobre un clúster de Kubernetes, con un guardián luminoso controlando puertas de red y credenciales hacia el exterior, paleta azul y naranja sobre fondo oscuro, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/placeholder.jpg)

Los agentes de IA ya no solo llaman APIs: corren shells, instalan paquetes, leen archivos y abren conexiones de red. Y muchas veces actúan sobre texto que bajaron de internet hace un minuto. Traducción cruel pero exacta: **cada agente es código no confiado sosteniendo credenciales reales**. Para eso la CNCF publicó ayer la guía *[OpenShell on Kubernetes: a guide for platform engineers](https://www.cncf.io/blog/2026/11/04/openshell-on-kubernetes-a-guide-for-platform-engineers/)*, escrita por Jim Bugwadia de Nirmata, que explica cómo montar **OpenShell** — el runtime de agentes iniciado por NVIDIA y hoy proyecto Sandbox de la CNCF — en un cluster de verdad.

## La idea en una frase

Cada agente corre en su propio sandbox, y un **supervisor confiado fuera del sandbox** decide qué puede tocar el agente. Los controles se declaran en YAML, en cuatro dimensiones:

- **Filesystem**: Landlock limita qué rutas puede leer o escribir el agente. En el demo, `/usr` y `/etc` quedan read-only y solo `/sandbox`, `/tmp` y `/dev/null` son escribibles.
- **Proceso**: antes de partir, el runtime baja el agente a un usuario non-root sin capacidades y aplica seccomp.
- **Red**: el tráfico de salida se niega por defecto. Las reglas permiten tráfico por binario, host, puerto y hasta método HTTP.
- **Credenciales**: el agente solo ve un placeholder de cada API key. El supervisor intercambia la key real, y únicamente hacia los endpoints permitidos.

## Lo que Kubernetes solo no puede ver

Para los que administran clusters, el punto clave es que **OpenShell no trae su propio scheduler**: su backend Kubernetes usa **Agent Sandbox** de SIG Apps (el recurso `agents.x-k8s.io/Sandbox`). Los agentes aparecen como Pods, Services, PVCs, Secrets y NetworkPolicies — objetos que ya sabes operar con kubectl, RBAC y Kyverno.

Lo que OpenShell agrega es la capa que Kubernetes no ve: **qué agente está llamando, qué binario hizo la request y si un POST específico puede salir del cluster**. Como resume la guía: una NetworkPolicy puede decir "este Pod puede reaching `api.github.com` en el 443", pero no puede decir "`curl` puede *leer* issues pero no *crearlos*". OpenShell sí, y puede cambiar esa regla en un sandbox corriendo, sin reinicio.

## El flujo, en corto

- El **gateway** de OpenShell crea los objetos; Agent Sandbox crea el Pod del agente, que **no tiene salida a red por sí mismo**: toda request del agente vuelve por la única conexión que abre el supervisor, donde se chequea la política.
- El Pod se audita tras el admission: UID/GID non-root, sin capacidades, seccomp RuntimeDefault, sin ServiceAccount token. Si un webhook cambió algo de eso, la creación falla.
- `openshell policy update` carga una nueva versión de política y espera confirmación del sandbox sin reiniciarlo. En el demo, `curl` parte bloqueado, luego puede leer de `api.github.com`, pero un POST a `/issues` devuelve `policy_denied`.
- El demo completo corre en un kind de dos nodos con Kubernetes 1.35, Cilium 1.20, Agent Sandbox v1.0.5, OpenShell 0.1.3 y Kyverno 1.18.2.

Ojo con las limitaciones actuales, que la propia guía no esconde: hoy los sandbox solo se crean vía la Gateway API (aún no hay CRD de Kubernetes, hay issue abierto para un operador), y un **Pod supervisor por agente** da aislamiento fuerte pero puede no escalar en ambientes grandes — el roadmap incluye opciones de despliegue flexible.

## OpenShell vs. Agent Substrate: el cara a cara del momento

La guía incluye una comparación que vale oro, porque resume la bifurcación del ecosistema: **OpenShell** (NVIDIA, aceptado en CNCF Sandbox el 26 de septiembre) responde "¿qué puede hacer este agente?", mientras **Agent Substrate** (Google, aceptado el 28 de septiembre) responde "¿cómo corremos miles de agentes mayormente inactivos sin que queme la plata?".

| | OpenShell | Agent Substrate |
|---|---|---|
| Origen | NVIDIA | Google |
| Problema | Qué puede hacer el agente (política fina) | Densidad y costo de agentes ociosos a escala |
| Bloque Kubernetes | Agent Sandbox (SIG Apps) | Su propio WorkerPool CRD y scheduler |
| Credenciales | Supervisor intercambia placeholders | Egress gateway intercambia `ate-secret://` |
| Estado | PVC `/sandbox` que sobrevive stop/start | Snapshots en object storage, resume < 1 segundo |
| Madurez | v0.1.x | Pre-1.0 |

No son competidores directos: Substrate requiere una capa de orquestación encima, y a futuro OpenShell podría ser justamente esa capa. "Sandboxear tu agente es necesario, pero no suficiente", resume el post de Lin Sun que la guía cita.

## La lectura práctica

Si tu equipo está llevando agentes de IA a producción, esto te importa doble: primero, porque la pregunta "¿y esto quién lo controla?" ya tiene respuesta estandarizada en YAML, con auditoría por request. Y segundo, porque con KubeCon NA 2026 arrancando la próxima semana en Salt Lake City, los runtimes de agentes seguros van a ser *el* tema del año — conviene llegar con la tarea hecha.

**Fuentes:** [CNCF Blog](https://www.cncf.io/blog/2026/11/04/openshell-on-kubernetes-a-guide-for-platform-engineers/) · [GitHub NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) · [SiliconANGLE](https://siliconangle.com/2026/11/05/container-orchestration-kubecon-thecube-ai-kubeconna/)
