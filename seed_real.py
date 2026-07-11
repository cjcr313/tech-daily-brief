import os
from datetime import datetime

POSTS_DIR = "/Users/walle/.openclaw/workspace/projects/tech-daily-brief/src/content/posts"

data = [
    {
        "slug": "2026-07-11-uk-treasury-critical-third-parties",
        "date": "2026-07-11T10:00:00Z",
        "tags": ["cloud", "seguridad", "infraestructura"],
        "title_es": "Regulación Financiera 2026: AWS, Azure y Google Cloud designados como 'Terceros Críticos' en el Reino Unido",
        "desc_es": "A partir de mediados de julio, el Tesoro del Reino Unido exige nuevas normas de resiliencia a los gigantes del Cloud que operan en el sector financiero.",
        "body_es": "La dependencia de la nube ha dejado de ser solo una cuestión de TI para convertirse en un tema de seguridad nacional y estabilidad financiera. En un movimiento sin precedentes, **el Tesoro del Reino Unido ha designado oficialmente a Microsoft Azure, Google Cloud, Amazon Web Services (AWS) y Oracle como 'Terceros Críticos' (Critical Third Parties)** para el sector financiero británico.\n\n### ¿Qué significa esta designación?\nA partir del 13 de julio de 2026, los servicios críticos suministrados por estas entidades entrarán en un nuevo régimen de supervisión. El objetivo de los reguladores financieros británicos es garantizar que una interrupción en los servicios de AWS o Azure no provoque un efecto dominó que tumbe a los bancos, aseguradoras o pasarelas de pago del país.\n\n### Impacto en la Arquitectura y Cumplimiento\nPara los arquitectos de soluciones y equipos de DevOps en el sector *FinTech*, esto refuerza la necesidad de:\n- **Estrategias Multi-Cloud:** Evitar el *vendor lock-in* total para servicios core financieros.\n- **Planes de Recuperación ante Desastres (DRP) probados:** No bastará con decir que la base de datos está replicada; los reguladores exigirán pruebas de resiliencia operativa.\n- **Mayor transparencia en SLA:** Las nubes públicas tendrán que proporcionar datos más granulares sobre incidentes y tiempos de recuperación a sus clientes regulados.\n\nEste es un recordatorio de que la nube es, al final del día, el computador de otra persona, y las entidades reguladoras ya no aceptan la 'nube' como una caja negra inauditable.\n\n---\n**Fuentes / Referencias:**\n- [Designación del Tesoro del Reino Unido - Regulación a Terceros Críticos (UK Treasury)](https://windowsforum.com/threads/uk-critical-third-party-rules-start-july-13-2026-for-azure-aws.436873/)",
        "title_en": "Financial Regulation 2026: AWS, Azure, and Google Cloud Designated as 'Critical Third Parties' in the UK",
        "desc_en": "Starting mid-July, the UK Treasury mandates new resilience rules for Cloud giants operating in the financial sector.",
        "body_en": "Cloud dependency is no longer just an IT issue; it has become a matter of national security and financial stability. In an unprecedented move, **the UK Treasury has officially designated Microsoft Azure, Google Cloud, Amazon Web Services (AWS), and Oracle as 'Critical Third Parties'** to the British financial sector.\n\n### What Does This Designation Mean?\nStarting July 13, 2026, specified critical services supplied by these entities will enter a new supervisory regime. The goal of British financial regulators is to ensure that an outage in AWS or Azure does not trigger a domino effect that takes down the country's banks, insurers, or payment gateways.\n\n### Impact on Architecture and Compliance\nFor solution architects and DevOps teams in the *FinTech* sector, this reinforces the need for:\n- **Multi-Cloud Strategies:** Avoiding complete *vendor lock-in* for core financial services.\n- **Tested Disaster Recovery Plans (DRP):** It will not be enough to say the database is replicated; regulators will demand proof of operational resilience.\n- **Greater Transparency in SLAs:** Public clouds will have to provide more granular data on incidents and recovery times to their regulated clients.\n\nThis serves as a reminder that the cloud is, at the end of the day, someone else's computer, and regulatory bodies no longer accept the 'cloud' as an unauditable black box.\n\n---\n**Sources / References:**\n- [UK Treasury Designation - Critical Third Party Rules (UK Treasury)](https://windowsforum.com/threads/uk-critical-third-party-rules-start-july-13-2026-for-azure-aws.436873/)"
    },
    {
        "slug": "2026-07-10-cncf-sre-autonomous-operations",
        "date": "2026-07-10T14:15:00Z",
        "tags": ["devops", "observabilidad", "kubernetes", "arquitectura"],
        "title_es": "El 'Problema de los 4 Cuerpos' en SRE: El desafío de las operaciones autónomas",
        "desc_es": "La CNCF advierte por qué la automatización pura sin contexto en Site Reliability Engineering está fallando y cómo solucionarlo.",
        "body_es": "La automatización de operaciones es el Santo Grial de DevOps y SRE (Site Reliability Engineering). Sin embargo, un reciente artículo de la Cloud Native Computing Foundation (CNCF) plantea un desafío fundamental en los sistemas distribuidos modernos al que han llamado el **'Problema de los 4 cuerpos de SRE'**.\n\n### El Caos sin Contexto\nLa premisa es sencilla pero caótica: Imagina que un *commit* cambia el código de un microservicio, Terraform despliega nueva infraestructura, Kubernetes realiza un *rollout* de la nueva versión, y simultáneamente OpenTelemetry empieza a reportar un aumento drástico en la latencia, quemando tu presupuesto de errores (SLO).\n\n¿Cuál fue la causa raíz? Si las herramientas operan de forma aislada (cada una automatizando su parcela), la recuperación automática (auto-remediation) suele tomar decisiones equivocadas, como escalar pods de Kubernetes de manera infinita por un problema que realmente introdujo un cambio de Terraform en la base de datos.\n\n### La Solución: Operaciones basadas en Contexto\nLa CNCF establece que las operaciones autónomas no pueden depender de métricas aisladas. El futuro de la observabilidad y el SRE requiere unificar:\n1. **Eventos de Cambio:** (GitOps, CI/CD).\n2. **Topología de Infraestructura:** (El estado real de Kubernetes y Cloud).\n3. **Telemetría:** (Métricas, Logs, Trazas de OpenTelemetry).\n4. **Impacto de Negocio:** (SLOs en Prometheus).\n\nSolo cuando las herramientas de automatización pueden ingerir el **contexto completo** (los 4 cuerpos interactuando simultáneamente), podremos tener sistemas autónomos que no rompan producción al intentar 'arreglarla'.\n\n---\n**Fuentes / Referencias:**\n- [The 4-body problem of SRE: Why autonomous operations depend on context (Blog oficial CNCF)](https://www.cncf.io/blog/2026/07/06/the-4-body-problem-of-sre-why-autonomous-operations-depend-on-context/)",
        "title_en": "The '4-Body Problem' in SRE: The Challenge of Autonomous Operations",
        "desc_en": "The CNCF warns why pure automation without context in Site Reliability Engineering is failing and how to fix it.",
        "body_en": "Operations automation is the Holy Grail of DevOps and SRE (Site Reliability Engineering). However, a recent article by the Cloud Native Computing Foundation (CNCF) outlines a fundamental challenge in modern distributed systems, coined the **'4-body problem of SRE'**.\n\n### Chaos Without Context\nThe premise is simple yet chaotic: Imagine a commit changes the code of a microservice, Terraform provisions new infrastructure, Kubernetes rolls out the deployment, and simultaneously OpenTelemetry traces begin showing increased latency, burning your error budget (SLO).\n\nWhat was the root cause? If tools operate in isolation (each automating its own silo), auto-remediation often makes the wrong decisions, such as infinitely scaling Kubernetes pods for an issue actually introduced by a Terraform database change.\n\n### The Solution: Context-Driven Operations\nThe CNCF states that autonomous operations cannot rely on isolated metrics. The future of observability and SRE requires unifying:\n1. **Change Events:** (GitOps, CI/CD).\n2. **Infrastructure Topology:** (The actual state of Kubernetes and Cloud).\n3. **Telemetry:** (Metrics, Logs, Traces from OpenTelemetry).\n4. **Business Impact:** (SLOs in Prometheus).\n\nOnly when automation tools can ingest the **complete context** (the 4 bodies interacting simultaneously) will we be able to achieve autonomous systems that don't break production while trying to 'fix' it.\n\n---\n**Sources / References:**\n- [The 4-body problem of SRE: Why autonomous operations depend on context (Official CNCF Blog)](https://www.cncf.io/blog/2026/07/06/the-4-body-problem-of-sre-why-autonomous-operations-depend-on-context/)"
    },
    {
        "slug": "2026-07-09-bigquery-omnichannel-data-transfer",
        "date": "2026-07-09T08:30:00Z",
        "tags": ["cloud", "arquitectura", "ia"],
        "title_es": "BigQuery elimina barreras: Transferencia nativa desde Oracle, AWS y Azure hacia Iceberg",
        "desc_es": "Google Cloud actualiza el BigQuery Data Transfer Service abriendo las puertas a arquitecturas multi-cloud reales basadas en formatos abiertos.",
        "body_es": "La guerra de los datos está migrando hacia la apertura. En las últimas notas de lanzamiento, **Google Cloud** ha anunciado mejoras masivas en el ecosistema de BigQuery, demostrando que el futuro del análisis de datos no está en tener la información encerrada en un solo proveedor.\n\n### ¿Qué cambia en BigQuery?\n1. **Ingesta Multi-Cloud directa:** El *BigQuery Data Transfer Service* ahora permite transferir datos directamente desde fuentes de almacenamiento de la competencia (Amazon S3 y Azure Blob Storage), moviéndolos sin fricción hacia tablas **BigLake Iceberg** dentro de BigQuery (actualmente en *Preview*).\n2. **Conexión nativa con Oracle:** La transferencia de datos desde Oracle hacia BigQuery ha pasado a estado *Generalmente Disponible (GA)*, facilitando a las corporaciones tradicionales su migración a la analítica en la nube.\n3. **Agentes de IA y BigQuery:** En una jugada de vanguardia, Google ha lanzado en *Preview* el servidor remoto *BigQuery MCP*, diseñado para permitir que agentes autónomos de IA realicen un amplio rango de tareas relacionadas con los datos directamente sobre el motor de BigQuery.\n\n### La Era de Apache Iceberg\nLa adopción de tablas Iceberg confirma que la industria se ha rendido ante los formatos de tabla abiertos. Las arquitecturas de datos ya no tienen que copiar y transformar terabytes de información de manera propietaria, reduciendo drásticamente los costos de ETL (Extract, Transform, Load).\n\n---\n**Fuentes / Referencias:**\n- [BigQuery Release Notes (Google Cloud Documentation)](https://docs.cloud.google.com/bigquery/docs/release-notes)\n- [Novedades en Google Cloud (Google Cloud Blog)](https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud)",
        "title_en": "BigQuery Breaks Barriers: Native Data Transfer from Oracle, AWS, and Azure to Iceberg",
        "desc_en": "Google Cloud updates the BigQuery Data Transfer Service, opening doors to true multi-cloud architectures based on open formats.",
        "body_en": "The data wars are shifting towards openness. In its latest release notes, **Google Cloud** announced massive improvements to the BigQuery ecosystem, proving that the future of data analytics is not about locking information within a single provider.\n\n### What's Changing in BigQuery?\n1. **Direct Multi-Cloud Ingestion:** The *BigQuery Data Transfer Service* now allows users to transfer data directly from competitor blob storage sources (Amazon S3 and Azure Blob Storage) seamlessly into **BigLake Iceberg** tables within BigQuery (currently in *Preview*).\n2. **Native Oracle Connection:** Data transfer from Oracle to BigQuery is now *Generally Available (GA)*, making it significantly easier for traditional corporations to migrate to cloud analytics.\n3. **AI Agents and BigQuery:** In a cutting-edge move, Google launched the *BigQuery remote MCP server* in *Preview*, designed to enable autonomous AI agents to perform a wide range of data-related tasks directly against the BigQuery engine.\n\n### The Era of Apache Iceberg\nThe adoption of Iceberg tables confirms that the industry has surrendered to open table formats. Data architectures no longer have to copy and transform terabytes of information in proprietary ways, drastically reducing ETL (Extract, Transform, Load) costs.\n\n---\n**Sources / References:**\n- [BigQuery Release Notes (Google Cloud Documentation)](https://docs.cloud.google.com/bigquery/docs/release-notes)\n- [What's New in Google Cloud (Google Cloud Blog)](https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud)"
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

print(f"Generated {len(data)} real posts in ES/EN.")
