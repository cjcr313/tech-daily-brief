---
title: "CNCF: el problema de los límites en la IA agéntica es un problema de plataforma"
author: Carlos
pubDatetime: 2026-10-29T21:10:00Z
slug: cncf-agentic-ia-fronteras-plataforma
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - IA
description: "Nuevo post en el blog de CNCF: la autoridad de los agentes se acumula de forma invisible y ningún prompt la contiene. La solución no es más gobernanza, es una plataforma con privilegios mínimos — un agente es un workload."
---

![Ilustración editorial tech de anillos concéntricos de malla geométrica protegiendo un núcleo luminoso central, con un pequeño robot autónomo operando dentro del anillo interior y varias herramientas flotando fuera de los anillos exteriores, paleta azul profundo con acentos cian, estilo ilustración tecnológica profesional, sin texto](../../assets/images/2026-10-29-cncf-agentic-ia-fronteras-plataforma.jpg)

El blog de CNCF publicó hoy una pieza que va directo al grano de un problema que toda equipo con agentes en producción conoce en carne propia: **"The boundary problem in agentic AI is a platform problem"**, de William Rizzo (Kairos) y Francesco Beltramini. La tesis: un agente autónomo hace exactamente lo que sus herramientas le permiten — y ese conjunto de capacidades casi nunca fue decidido deliberadamente por nadie. **Se acumuló**.

## La erosión invisible

El patrón que describen es dolorosamente familiar: una herramienta agregada para un workflow queda disponible para todos los workflows. Una credencial scoping para una demo sobrevive hasta producción. Una delegación para desbloquear un deploy de viernes se vuelve un edge permanente en el grafo. Nadie decidió darle ese alcance al agente — **nunca hubo un momento donde el alcance se decidiera**.

Para cuando alguien pregunta "¿espera, puede hacer *eso*?", la respuesta honesta suele ser: "podía hace semanas, recién nos dimos cuenta".

## Por qué el agente no puede contener su propio límite

La tentación es escribir los límites en las instrucciones del agente. Los autores explican por qué eso falla estructuralmente:

- La salida de un agente es una **distribución de probabilidad** sobre acciones, no una garantía. Un límite que aguanta 99 veces y cede a la 100 no es un límite — es una sugerencia fuerte con tasa de falla
- Peor aún: un agente perfectamente obediente igual tiene toda la autoridad que le otorgan sus **herramientas y credenciales**. La instrucción es intención; el tool binding es capacidad. **Cuando difieren, gana la capacidad**, porque es la que ejecuta
- Un agente instruido de no mover dinero pero con una herramienta que mueve dinero está a un prompt clever o un razonamiento confundido de distancia de moverlo

Conclusión: el límite tiene que vivir donde vive la capacidad — **en la infraestructura**. La autonomía acotada no es propiedad del agente; es propiedad de la plataforma donde corre.

## Un agente es un workload

Aquí viene el giro elegante: la industria lleva 15 años aprendiendo a acotar lo que un workload puede hacer — identidad, acceso de red, permisos. La machinery completa aplica directamente:

1. **Identidad** (el núcleo): cada agente y tool server con credenciales de corta duración y attestadas — el estándar de workload identity
2. **Reach**: mesh que declara qué puede conectar
3. **Capability**: policy-as-code en admission, autorización por llamada en el límite de cada tool
4. **Data**: el data plane decide qué filas/palabras son del negocio del agente, autorizando contra la misma identidad verificada

Y la regla que sostiene todo — la piedra angular: **la identidad del agente no puede modificar los objetos que definen su propia autoridad**. Puede actuar dentro de sus límites; no puede reescribirlos. Cambiar lo que un agente puede hacer pasa solo por configuración versionada, revisada, aplicada por humano o pipeline — nunca por el agente en runtime.

## Columna determinista, ejecución probabilística

El frame final: una **columna determinista** (workflow engines, estado, approvals, auditoría — software que falla igual todas las veces y deja rastro) con la ejecución no determinista del agente colgando de ella. En un proceso regulado tipo originación de créditos: el agente lee, pesa, recomienda con su razonamiento adjunto — pero no aprueba, no fija precio fuera de política, no mueve fondos. El agente emite un **pull request contra el estado deseado**; un humano revisa; un pipeline aplica. La aprobación deja de ser un paso que el agente puede intentar talkear y pasa a ser una propiedad del sistema.

La auditoría sale gratis: no reconstruyes lo que el agente podía hacer — **la plataforma lo grabó**.

## El punto para la comunidad cloud native

No hay que inventar un paradigma de seguridad nuevo: hace falta **integración y rigor**, con proyectos que ya están production-grade (workload identity, mesh, policy-as-code, autorización per-tool en los nuevos protocolos agente-tool). Lo genuinamente nuevo es chico y específico: expresar identidad y capacidades del agente como objetos declarativos first-class.

Si vas a KubeCon + CloudNativeCon NA 2026 en Salt Lake City, Rizzo y Kasper Nissen llevan esto de arquitectura a implementación en "[Verticalizing Platform Intelligence for Regulated Domains](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/program/schedule/?id=1238630)".

**Fuente:** [CNCF Blog — The boundary problem in agentic AI is a platform problem](https://www.cncf.io/blog/2026/10/29/the-boundary-problem-in-agentic-ai-is-a-platform-problem/)
