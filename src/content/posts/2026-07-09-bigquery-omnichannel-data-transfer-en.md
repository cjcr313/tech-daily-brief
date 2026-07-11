---
title: "BigQuery Breaks Barriers: Native Data Transfer from Oracle, AWS, and Azure to Iceberg"
pubDatetime: 2026-07-09T08:30:00Z
author: Nauta Lab
tags:
  - cloud
  - arquitectura
  - ia
description: "Google Cloud updates the BigQuery Data Transfer Service, opening doors to true multi-cloud architectures based on open formats."
---

*🌐 [Leer este artículo en español](/tech-daily-brief/posts/2026-07-09-bigquery-omnichannel-data-transfer-es)*

The data wars are shifting towards openness. In its latest release notes, **Google Cloud** announced massive improvements to the BigQuery ecosystem, proving that the future of data analytics is not about locking information within a single provider.

### What's Changing in BigQuery?
1. **Direct Multi-Cloud Ingestion:** The *BigQuery Data Transfer Service* now allows users to transfer data directly from competitor blob storage sources (Amazon S3 and Azure Blob Storage) seamlessly into **BigLake Iceberg** tables within BigQuery (currently in *Preview*).
2. **Native Oracle Connection:** Data transfer from Oracle to BigQuery is now *Generally Available (GA)*, making it significantly easier for traditional corporations to migrate to cloud analytics.
3. **AI Agents and BigQuery:** In a cutting-edge move, Google launched the *BigQuery remote MCP server* in *Preview*, designed to enable autonomous AI agents to perform a wide range of data-related tasks directly against the BigQuery engine.

### The Era of Apache Iceberg
The adoption of Iceberg tables confirms that the industry has surrendered to open table formats. Data architectures no longer have to copy and transform terabytes of information in proprietary ways, drastically reducing ETL (Extract, Transform, Load) costs.

---
**Sources / References:**
- [BigQuery Release Notes (Google Cloud Documentation)](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [What's New in Google Cloud (Google Cloud Blog)](https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud)
