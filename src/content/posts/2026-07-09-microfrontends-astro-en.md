---
title: "Microfrontends: When to use them and when to run away"
pubDatetime: 2026-07-09T08:30:00Z
author: Nauta Lab
tags:
  - arquitectura
  - devops
description: "We analyze if splitting your frontend into multiple repositories is the solution or the origin of your nightmares."
---

*🌐 [Leer este artículo en español](/tech-daily-brief/posts/2026-07-09-microfrontends-astro-es)*

Microservices in the backend are a standard, but in the frontend (Microfrontends) the debate is still raging.

### The Complexity Problem
Dividing an SPA into small applications managed by different teams via Module Federation solves organizational scalability problems. However, it introduces:
- Slower initial loads (if not optimized well).
- UI/UX inconsistencies.
- Extreme difficulty in E2E testing.

### When to use them?
Only use microfrontends if your organization has multiple frontend teams working on the same web product and CI/CD times are unmanageable. For 90% of companies, a modular monolith with fast build tools is infinitely better.
