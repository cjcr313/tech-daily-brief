---
title: "NadMesh: el botnet industrial-grade que masca servidores de IA y MCP"
author: Carlos
pubDatetime: 2026-07-17T16:00:00Z
slug: nadmesh-botnet-ia-mcp-servers
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
  - IA
description: "Botnet escrito en Go con 20+ vectores RCE que targets específicamente endpoints de IA/MCP, Kubernetes y Docker. Detectado a principios de julio 2026."
---

Si creías que los botnets eran cosa del pasado con Mirai y compañia, piénsalo de nuevo. **NadMesh** es un nuevo botnet descubierto a principios de julio 2026 que viene con un enfoque bien específico: **servidores de IA y el ecosistema MCP (Model Context Protocol)**.

## Qué es NadMesh

NadMesh se autoidentifica en su código como `n4d mesh controller` y no es un worm más de turno. Es una **plataforma de ataque productizada**, escrita en Go, que integra escaneo, explotación, robo de credenciales y recolección de inteligencia de servicios IA/MCP en una sola infraestructura mesh.

La investigación vino del equipo de **QianXin (XLab)**, y la conclusión es clara: este botnet tiene mentalidad comercial. Trackea métricas como tasas de conversión de exploits, deployments exitosos y evita honeypots automáticamente. No es vandalismo oportunista — es ROI puro.

## Los targets: tu stack de IA expuesto

El set de escaneo cubre **30 puertos** asociados a servicios web, Kubernetes, Docker, bases de datos, monitoreo y endpoints de IA/MCP:

- **8188** — ComfyUI
- **11434** — Ollama
- **5678** — n8n
- **7860** — Gradio

Todos tratados como **targets prioritarios**. Si tienes alguno de estos expuesto a internet sin auth, estás en la mira.

## 20+ vectores de explotación

Acá es donde se pone serio. NadMesh trae más de 20 paths de RCE, incluyendo:

- **MCP JSON-RPC tools** con `execute_command`
- **Abuso de Kubernetes API** vía pods con `hostPath` mounts
- **Docker API misuse** para lanzar contenedores con host networking
- **Redis CONFIG SET** clásico para persistencia vía cron
- Vectores adicionales para Elasticsearch, SSH/Telnet, Jenkins script consoles, Spring Cloud Gateway, code-server, Airflow, Superset, XXL-Job y WebLogic deserialization

Todo orquestado mediante una abstracción de **"chains"** en el controller que modela rutas de exploit multi-paso.

## Inteligencia de amenaza adaptativa

Lo más impresionante (y preocupante): NadMesh tiene un script auxiliar `ai_harvest.py` que **consulta Shodan** para encontrar instancias de ComfyUI, Ollama, n8n, Open WebUI, Langflow y Gradio, y las convierte en tareas de escaneo de alta prioridad.

Además, tiene un feedback loop: los hosts productivos se escanean repetidamente hasta que se explotan o se clasifican como honeypots. Los hosts que aceptan deployments pero no generan resultados se marcan como sospechosos y se bloquean automáticamente.

## IOCs conocidos

| Tipo | Indicator | Contexto |
|------|-----------|----------|
| C2 IP | `209.99.186[.]235` | Controller principal de NadMesh |
| C2 Domain | `cdnorigin[.]net` | Host de distribución de binarios |

## Qué hacer

La recomendación es la de siempre pero más urgente que nunca:

1. **No expongas servicios de IA a internet sin auth** — Ollama, ComfyUI, Gradio, n8n detrás de VPN o auth
2. **Asegura Kubernetes API y Docker API** — sin acceso anónimo, sin pods con hostPath sin restricciones
3. **Monitorea tráfico hacia los IOCs** conocidos
4. **Mantén todo parcheado** — los vectores aprovechan vulns viejas y conocidas

La era de "botnets que solo atacaban cámaras IoT" quedó atrás. Ahora el objetivo es tu GPU.
