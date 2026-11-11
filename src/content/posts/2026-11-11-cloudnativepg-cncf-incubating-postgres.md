---
title: "CloudNativePG sube a Incubating en la CNCF: Postgres en Kubernetes con sello de madurez"
author: Carlos
pubDatetime: 2026-11-11T21:25:00Z
slug: cloudnativepg-cncf-incubating-postgres
featured: false
draft: false
tags:
  - Kubernetes
  - Cloud
  - Open Source
description: "CloudNativePG, el operator de Postgres más usado en Kubernetes, se convirtió en proyecto Incubating de la CNCF. EDB además donó Klio para backups con pérdida de datos casi nula."
---

![Ilustración editorial de un elefante de base de datos operando contenedores dentro de un plano técnico de cluster Kubernetes](../../assets/images/cloudnativepg-cncf-incubating-postgres.jpg)

 Noticias para los que corren Postgres en Kubernetes: **CloudNativePG (CNPG), el operator más adoptado para gestionar el ciclo de vida completo de clusters Postgres, es oficialmente un proyecto Incubating de la CNCF**. El anuncio lo hizo EDB durante KubeCon North America 2026, menos de una semana después de cerrar la compra de Altinity, la empresa detrás del operator líder de ClickHouse para Kubernetes.

## Por qué importa el ascenso

CNPG nació en 2019 (open source desde 2022) y se convirtió en el estándar de facto para Postgres en Kubernetes: el mismo manifest declarativo corre en cualquier cloud u on-premise, con self-healing, failover automatizado, rolling updates y backup continuo con point-in-time recovery. El sello Incubating de la CNCF no es cosmético: valida adopción real, gobernanza sana y madurez del proyecto. Con EDB como maintainer principal, pero con la fundación como casa, el mensaje a empresas escépticas es "esto no va a desaparecer porque a un vendor le deje de convenir".

Los números de producción ya existían: Intesa Sanpaolo, el banco más grande de Italia, maneja **más de 500 instancias Postgres sobre CNPG**, y hasta la documentación oficial de Azure Kubernetes Service lo recomienda.

## El bonus: Klio y el plugin enterprise

EDB aprovechó el momento para anunciar tres cosas más:

- **Donación de Klio a la comunidad CNPG**: backup y recovery con pérdida de datos casi nula (near-zero data loss) para Postgres open source en Kubernetes. Antes era feature comercial, ahora entra al proyecto.
- **EDB distribution of Klio** (preview): imágenes certificadas, soporte y releases de largo plazo para quien quiera la versión enterprise.
- **EDB Postgres AI Plugin para CloudNativePG** (preview): permite adoptar capacidades enterprise como encriptación transparente de datos (TDE) sobre CNPG open source **sin cambiar de operator**. Nada de migrations traumáticas.

## El contexto que lo hace interesante

La jugada completa — CNPG incubating + Altinity/ClickHouse + Klio — apunta a un mercado específico: empresas (banca y finanzas sobre todo) que quieren datos soberanos sobre infraestructura que controlan, con Kubernetes de base. Con la inversión creciente en agentes de AI que necesitan estado persistente y confiable, tener las dos bases de datos open source más importantes corriendo bien en K8s no es un detalle menor. Como dijo el CTO de EDB: "el futuro abierto y soberano corre sobre Kubernetes".
