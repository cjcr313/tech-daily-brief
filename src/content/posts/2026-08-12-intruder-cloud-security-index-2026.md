---
title: "AWS vs Azure vs Google Cloud: el índice 2026 de Intruder muestra que las misconfigurations no se parecen en nada"
author: Carlos
pubDatetime: 2026-08-12T10:00:00Z
slug: intruder-cloud-security-index-2026
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "Intruder analizó 3.000 organizaciones y descubrió que los riesgos de seguridad cloud son completamente distintos según el provider. AWS lidera en misconfigurations."
---

![Ilustración editorial de tres columnas de nubes representando AWS, Azure y Google Cloud con distintos indicadores de alerta de seguridad](../../assets/images/2026-08-12-intruder-cloud-security-index-2026.jpg)

**Intruder** publicó su **2026 Cloud Security Index** ayer, y los resultados son bastante claros: si estás corriendo multi-cloud, tus riesgos de seguridad son completamente diferentes según el provider.

El estudio usó datos anónimos de **3.000 organizaciones** y evaluó seis categorías de misconfiguration: IAM débil, logging/alerting faltante, servicios mal configurados, firewalls permisivos, servicios expuestos y encriptación débil.

## AWS: el que más misconfigurations tiene

AWS tuvo la tasa más alta de misconfigurations en **5 de las 6 categorías**. Los números duelen:

- **87%** de las cuentas tienen buckets S3 sin forzar HTTPS
- **84%** tienen puertos sensibles abiertos con ingress permisivo
- **83%** tienen IAM policies que permiten privilege escalation
- **76%** tienen servicios públicamente expuestos (vs 64% Azure, 8% Google Cloud)
- **83%** con firewalls permisivos (vs 45% Azure, 34% Google Cloud)

La explicación del reporte: AWS tiene un catálogo de servicios mucho más amplio y opciones de configuración más granulares, lo que **aumenta la superficie para error humano**.

## Azure: problemas en storage y identidad

Azure tiene sus propios focos de problema. El top 3 de misconfigurations viene todos del área de **storage accounts** (61%-67% de cuentas afectadas). Además, **55%** de cuentas de Azure tienen usuarios Entra sin MFA.

## Google Cloud: el mejor comportado (con matices)

Google Cloud tuvo las tasas más bajas en 4 de 6 categorías. La exposición pública de servicios es notablemente menor (solo **8%** vs 76% de AWS). Pero el punto débil es identidad: **75%** de cuentas no tienen controles de OS Login.

## El verdadero problema: multi-cloud

Más de **dos tercios** de las organizaciones operan en multi-cloud. Y acá viene el insight clave del reporte: **las misconfigurations más comunes casi no se superponen entre providers**.

Esto significa que una política de seguridad estandarizada a nivel governance no sirve para el trabajo del día a día. Los equipos necesitan **conocimiento específico por provider** para storage rules, firewall policies, access controls y protecciones de cuenta.

## El squeeze del midmarket

Un dato interesante: las empresas medianas (1.000-5.000 empleados) tardan **35 días en promedio** en remediar issues de seguridad cloud — más de **3x** lo que tardan empresas más chicas (8-16 días) o más grandes (10 días).

Las empresas grandes tienen equipos de seguridad dedicados y automatización. Las chicas tienen menos superficie. Las medianas cargan con la complejidad del enterprise sin los recursos del enterprise. El patrón es clásico pero los números lo confirman.

## La lección

Identity y access management es el único tema que **atraviesa los tres providers** (87%-97% de cuentas con debilidades IAM). Todo lo demás requiere mirar configs específicas de cada plataforma.

Si tu equipo está haciendo cloud security con el mismo lens para AWS, Azure y GCP, están dejando huecos. Cada provider necesita su propio runbook.
