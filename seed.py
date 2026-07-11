import os

POSTS_DIR = "/Users/walle/.openclaw/workspace/projects/tech-daily-brief/src/content/posts"

data = [
    {
        "slug": "2026-06-22-opentelemetry-profiling",
        "date": "2026-06-22T10:00:00Z",
        "tags": ["observabilidad", "devops", "arquitectura"],
        "title_es": "OpenTelemetry y el impacto del Continuous Profiling",
        "desc_es": "Cómo el soporte oficial para profiling está consolidando a OpenTelemetry como el rey de la observabilidad.",
        "body_es": "La observabilidad ha evolucionado. Ya no basta con saber *cuándo* falla algo (Métricas), *dónde* falla (Trazas) o *qué* falló (Logs). Ahora necesitamos saber exactamente *qué línea de código* causó el cuello de botella de CPU o Memoria.\n\n### La llegada del Profiling\nCon la estabilización del Continuous Profiling en OpenTelemetry, los equipos pueden correlacionar un *spike* de CPU directamente con una traza específica. Esto elimina la necesidad de tener herramientas de profiling separadas.\n\n### Impacto en la Arquitectura\nEsto permite a los arquitectos consolidar agentes. Un solo agente de OTel puede recolectar todas las señales. ¡Menos consumo de recursos y menos complejidad operativa!",
        "title_en": "OpenTelemetry and the Impact of Continuous Profiling",
        "desc_en": "How official profiling support is consolidating OpenTelemetry as the king of observability.",
        "body_en": "Observability has evolved. It's no longer enough to know *when* something fails (Metrics), *where* it fails (Traces), or *what* failed (Logs). Now we need to know exactly *which line of code* caused the CPU or Memory bottleneck.\n\n### The Arrival of Profiling\nWith the stabilization of Continuous Profiling in OpenTelemetry, teams can correlate a CPU spike directly to a specific trace. This eliminates the need for standalone profiling tools.\n\n### Impact on Architecture\nThis allows architects to consolidate agents. A single OTel agent can collect all signals. Less resource consumption and lower operational complexity!"
    },
    {
        "slug": "2026-06-25-zero-trust-ebpf",
        "date": "2026-06-25T14:30:00Z",
        "tags": ["seguridad", "infraestructura", "kubernetes"],
        "title_es": "Zero Trust Security en Kubernetes usando eBPF",
        "desc_es": "Implementando políticas de red a nivel del kernel para proteger cargas de trabajo en clústeres modernos.",
        "body_es": "El modelo de seguridad perimetral tradicional está obsoleto. En arquitecturas modernas, asumimos que la red interna ya está comprometida. Aquí es donde entra Zero Trust.\n\n### eBPF al rescate\nHerramientas como Cilium utilizan **eBPF (Extended Berkeley Packet Filter)** para inyectar lógica de seguridad directamente en el kernel de Linux. Esto significa que podemos filtrar tráfico L3/L4 y L7 (HTTP/gRPC) sin proxies sidecar que consuman recursos excesivos.\n\n### Beneficios\n1. **Rendimiento:** Al ejecutarse en el kernel, la latencia de red se reduce drásticamente.\n2. **Visibilidad:** eBPF ve todo. Cada llamada al sistema, cada paquete de red.\n3. **Seguridad Nativa:** Las políticas de red operan a nivel de identidad de Pod, no de IPs efímeras.",
        "title_en": "Zero Trust Security in Kubernetes using eBPF",
        "desc_en": "Implementing network policies at the kernel level to protect workloads in modern clusters.",
        "body_en": "The traditional perimeter security model is obsolete. In modern architectures, we assume the internal network is already compromised. This is where Zero Trust comes in.\n\n### eBPF to the Rescue\nTools like Cilium use **eBPF (Extended Berkeley Packet Filter)** to inject security logic directly into the Linux kernel. This means we can filter L3/L4 and L7 (HTTP/gRPC) traffic without resource-heavy sidecar proxies.\n\n### Benefits\n1. **Performance:** By running in the kernel, network latency is drastically reduced.\n2. **Visibility:** eBPF sees everything. Every syscall, every network packet.\n3. **Native Security:** Network policies operate at the Pod identity level, not ephemeral IPs."
    },
    {
        "slug": "2026-06-28-aws-graviton4",
        "date": "2026-06-28T08:15:00Z",
        "tags": ["cloud", "infraestructura", "arquitectura"],
        "title_es": "AWS Graviton4: ¿Vale la pena migrar tus cargas de trabajo?",
        "desc_es": "Análisis de rendimiento y costos de la nueva generación de procesadores ARM de Amazon Web Services.",
        "body_es": "AWS continúa su apuesta agresiva por los procesadores ARM. Con el lanzamiento global de Graviton4, prometen hasta un 30% mejor rendimiento computacional respecto a Graviton3.\n\n### ¿Qué hay de nuevo?\n- Más núcleos por instancia.\n- Mayor ancho de banda de memoria.\n- Mejoras en el cifrado por hardware.\n\n### ¿Deberías migrar?\nSi tus aplicaciones ya están contenerizadas y corren en lenguajes interpretados o compilables a ARM (Node.js, Python, Go, Rust, Java), la migración es casi trivial. Solo necesitas actualizar tus pipelines de CI/CD para compilar imágenes multiplataforma (multi-arch docker builds).\n\nEl ahorro en la factura a fin de mes compensa con creces el esfuerzo inicial de migración.",
        "title_en": "AWS Graviton4: Is it worth migrating your workloads?",
        "desc_en": "Performance and cost analysis of Amazon Web Services' new generation of ARM processors.",
        "body_en": "AWS continues its aggressive push for ARM processors. With the global launch of Graviton4, they promise up to 30% better compute performance compared to Graviton3.\n\n### What's New?\n- More cores per instance.\n- Higher memory bandwidth.\n- Hardware-level encryption improvements.\n\n### Should You Migrate?\nIf your applications are containerized and run interpreted or ARM-compilable languages (Node.js, Python, Go, Rust, Java), migration is almost trivial. You just need to update your CI/CD pipelines to build multi-arch images.\n\nThe savings on your monthly bill more than make up for the initial migration effort."
    },
    {
        "slug": "2026-07-02-opentofu-vs-terraform",
        "date": "2026-07-02T11:45:00Z",
        "tags": ["infraestructura", "devops", "cloud"],
        "title_es": "OpenTofu vs Terraform: Estado del arte en 2026",
        "desc_es": "Años después del cambio de licencia de HashiCorp, evaluamos cómo ha evolucionado el ecosistema de IaC.",
        "body_es": "El cisma de la Infraestructura como Código (IaC) nos dejó con dos caminos: Terraform bajo su licencia BSL y OpenTofu como el fork open-source respaldado por la Linux Foundation.\n\n### El ecosistema hoy\nPara el 2026, OpenTofu ha logrado paridad de características y ha introducido mejoras solicitadas por la comunidad durante años, como la encriptación nativa de *state files* y un sistema robusto de módulos dinámicos.\n\n### Conclusión\nPara nuevos proyectos empresariales, OpenTofu se ha convertido en el estándar de facto, mientras que Terraform sigue siendo fuerte en entornos legados muy acoplados a Terraform Cloud. Migrar entre ambos es todavía un proceso compatible, pero la divergencia es cada vez más notable.",
        "title_en": "OpenTofu vs Terraform: State of the Art in 2026",
        "desc_en": "Years after HashiCorp's license change, we evaluate how the IaC ecosystem has evolved.",
        "body_en": "The Infrastructure as Code (IaC) schism left us with two paths: Terraform under its BSL license and OpenTofu as the open-source fork backed by the Linux Foundation.\n\n### The Ecosystem Today\nBy 2026, OpenTofu has achieved feature parity and introduced long-requested community enhancements, such as native *state file* encryption and a robust dynamic modules system.\n\n### Conclusion\nFor new enterprise projects, OpenTofu has become the de facto standard, while Terraform remains strong in legacy environments tightly coupled with Terraform Cloud. Migrating between the two is still largely compatible, but divergence is increasingly noticeable."
    },
    {
        "slug": "2026-07-05-ai-agents-devops",
        "date": "2026-07-05T09:20:00Z",
        "tags": ["ia", "devops", "arquitectura"],
        "title_es": "Agentes de IA en DevOps: De asistentes a operadores",
        "desc_es": "Cómo los LLMs autónomos están empezando a resolver incidentes de producción de Nivel 1 sin intervención humana.",
        "body_es": "Ya pasamos la fase donde la IA solo autocompletaba código. Hoy estamos viendo la adopción de **Agentes de IA** en los flujos de trabajo de DevOps.\n\n### AIOps 2.0\nHerramientas integradas en Slack o Teams ahora pueden recibir alertas de PagerDuty, consultar logs en Datadog, leer el código en GitHub, identificar un *memory leak*, proponer el fix y abrir un Pull Request.\n\n### El rol humano\nEl humano pasa de ser el operador que apaga el fuego a ser el **aprobador** de las acciones del Agente. El SRE (Site Reliability Engineer) del futuro se enfoca en afinar los *prompts* del sistema y las barreras de seguridad (guardrails) para que la IA actúe de forma predecible y segura.",
        "title_en": "AI Agents in DevOps: From Assistants to Operators",
        "desc_en": "How autonomous LLMs are starting to resolve Tier 1 production incidents without human intervention.",
        "body_en": "We are past the phase where AI only autocompleted code. Today we are seeing the adoption of **AI Agents** in DevOps workflows.\n\n### AIOps 2.0\nTools integrated into Slack or Teams can now receive PagerDuty alerts, query Datadog logs, read GitHub code, identify a memory leak, propose the fix, and open a Pull Request.\n\n### The Human Role\nThe human goes from being the operator putting out fires to being the **approver** of the Agent's actions. The SRE (Site Reliability Engineer) of the future focuses on tuning system *prompts* and safety guardrails so the AI acts predictably and securely."
    },
    {
        "slug": "2026-07-07-platform-engineering",
        "date": "2026-07-07T16:00:00Z",
        "tags": ["devops", "infraestructura", "arquitectura"],
        "title_es": "Platform Engineering es el nuevo DevOps",
        "desc_es": "Por qué construir Plataformas Internas para Desarrolladores (IDP) resuelve la fatiga cognitiva de los equipos ágiles.",
        "body_es": "DevOps prometía 'You build it, you run it'. Pero la realidad es que pedirle a un desarrollador frontend que sea experto en React, Kubernetes, Terraform, Helm y Datadog generó una fatiga cognitiva insostenible.\n\n### Nace el Platform Engineering\nEn lugar de exigir que todos sepan todo, los equipos de Plataforma construyen productos internos. Proveen portales de desarrollador (como Backstage) donde desplegar una base de datos o un nuevo microservicio requiere un clic, no 500 líneas de YAML.\n\n### Golden Paths\nLa clave del éxito son los *Golden Paths*: rutas estandarizadas y soportadas oficialmente que hacen lo correcto por defecto. Si te sales del camino, eres libre, pero pierdes el soporte del equipo de Plataforma.",
        "title_en": "Platform Engineering is the new DevOps",
        "desc_en": "Why building Internal Developer Platforms (IDP) solves the cognitive fatigue of agile teams.",
        "body_en": "DevOps promised 'You build it, you run it'. But the reality is that asking a frontend developer to be an expert in React, Kubernetes, Terraform, Helm, and Datadog generated unsustainable cognitive fatigue.\n\n### Platform Engineering is Born\nInstead of demanding everyone know everything, Platform teams build internal products. They provide developer portals (like Backstage) where deploying a database or a new microservice takes a single click, not 500 lines of YAML.\n\n### Golden Paths\nThe key to success are *Golden Paths*: standardized, officially supported routes that do the right thing by default. If you stray from the path, you are free to do so, but you lose Platform team support."
    },
    {
        "slug": "2026-07-09-microfrontends-astro",
        "date": "2026-07-09T08:30:00Z",
        "tags": ["arquitectura", "devops"],
        "title_es": "Microfrontends: Cuándo sí y cuándo huir",
        "desc_es": "Analizamos si separar tu frontend en múltiples repositorios es la solución o el origen de tus pesadillas.",
        "body_es": "Los microservicios en el backend son un estándar, pero en el frontend (Microfrontends) el debate sigue ardiendo.\n\n### El problema de la complejidad\nDividir una SPA en aplicaciones pequeñas manejadas por distintos equipos a través de Module Federation resuelve problemas de escalabilidad organizacional. Sin embargo, introduce:\n- Cargas iniciales más lentas (si no se optimiza bien).\n- Inconsistencias de UI/UX.\n- Dificultad extrema en el testing E2E.\n\n### ¿Cuándo usarlos?\nSolo usa microfrontends si tu organización tiene múltiples equipos de frontend trabajando en el mismo producto web y el tiempo de CI/CD es inmanejable. Para el 90% de las empresas, un monolito modular con herramientas de build rápidas es infinitamente mejor.",
        "title_en": "Microfrontends: When to use them and when to run away",
        "desc_en": "We analyze if splitting your frontend into multiple repositories is the solution or the origin of your nightmares.",
        "body_en": "Microservices in the backend are a standard, but in the frontend (Microfrontends) the debate is still raging.\n\n### The Complexity Problem\nDividing an SPA into small applications managed by different teams via Module Federation solves organizational scalability problems. However, it introduces:\n- Slower initial loads (if not optimized well).\n- UI/UX inconsistencies.\n- Extreme difficulty in E2E testing.\n\n### When to use them?\nOnly use microfrontends if your organization has multiple frontend teams working on the same web product and CI/CD times are unmanageable. For 90% of companies, a modular monolith with fast build tools is infinitely better."
    }
]

for p in data:
    tags_yaml = "\n  - ".join(p['tags'])
    
    es_content = f"""---
title: "{p['title_es']}"
pubDatetime: {p['date']}
author: Nauta Lab
tags:
  - {tags_yaml}
description: "{p['desc_es']}"
---

*🌐 [Read this article in English](/tech-daily-brief/posts/{p['slug']}-en)*

{p['body_es']}
"""
    with open(f"{POSTS_DIR}/{p['slug']}-es.md", "w") as f:
        f.write(es_content.strip() + "\n")

    en_content = f"""---
title: "{p['title_en']}"
pubDatetime: {p['date']}
author: Nauta Lab
tags:
  - {tags_yaml}
description: "{p['desc_en']}"
---

*🌐 [Leer este artículo en español](/tech-daily-brief/posts/{p['slug']}-es)*

{p['body_en']}
"""
    with open(f"{POSTS_DIR}/{p['slug']}-en.md", "w") as f:
        f.write(en_content.strip() + "\n")

print(f"Generated {len(data) * 2} posts.")
