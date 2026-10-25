---
title: "PingCAP confirma brecha: FulcrumSec reclama 10,6 TB del control plane de TiDB Cloud, incluyendo API keys de clientes"
author: Carlos
pubDatetime: 2026-10-25T13:10:00Z
slug: pingcap-tidb-cloud-brecha-fulcrumsec
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "El grupo de extorsión FulcrumSec asegura haber robado 10,6 TB de PingCAP: código fuente, 115K API keys de consola y credenciales root de bases de datos de clientes. PingCAP confirmó exposición de datos y pide rotar keys ya."
---

![Ilustración editorial de una base de datos en la nube con un candado roto y cables de datos filtrándose hacia afuera](../../assets/images/2026-10-25-pingcap-tidb-cloud-brecha-fulcrumsec.jpg)

Domingo con noticia gruesa: **PingCAP**, la empresa detrás de TiDB (la base SQL distribuida open source compatible con MySQL), confirmó acceso no autorizado a sus sistemas internos y el robo de código fuente y datos relacionados con clientes. El responsable sería **FulcrumSec**, grupo de ciberextorsión que reclama haberse llevado **10,6 TB**: control plane completo de TiDB Cloud, estados de facturación en GCP y AWS, Jira, CRM, analítica, código fuente y **cuatro años de logs de conexión de todos los clientes**, incluyendo las IPs de sus servidores de aplicación.

Si te suena a pesadilla de proveedor cloud, es porque lo es.

## Lo que supuestamente se llevaron

Las cifras que reclama FulcrumSec (aún no verificadas de forma independiente) son escandalosas:

- Una copia completa de `metadb`: **~180.000 organizaciones tenant**, casi **300.000 registros de usuario** (166K nombres reales) y más de **400.000 emails únicos**.
- **115.000 pares de API keys de consola**, de las cuales **más de 40.000 estaban activas** al momento del corte. Las más nuevas fueron creadas horas antes de que el atacante dice haber terminado su acceso.
- **~1.800 endpoints de bases de datos externas** provenientes de jobs de migración de clientes, incluyendo **cuentas root y admin de MySQL y Aurora** de los propios clientes.
- **413 repositorios privados de código fuente**.
- Además, el grupo alega que ingenieros de PingCAP **pegaban credenciales de producción de clientes en tickets de Jira**, con tres logs reprocidos como "prueba".

El primer release del grupo ya está público: cinco archivos tar.gz que totalizan 128,3 GB comprimidos (200 GB descomprimidos) — apenas una fracción de los 10,6 TB reclamados.

## Lo que dice PingCAP

El informe de incidente de PingCAP sostiene que una firma externa de respuesta a incidentes **no encontró evidencia de comandos ejecutados ni acceso persistente** en los sistemas revisados, y que no hay evidencia de que los datos almacenados en TiDB mismo hayan sido impactados. O sea: tu base de datos está bien; el problema es todo lo que hay alrededor.

Lo que sí confirman: los registros exportados incluyen nombres y emails de usuarios, asociaciones de organización y proyecto, y texto y errores del editor SQL, con algunos registros incluyendo identificadores de clúster.

**Recomendación oficial para clientes de TiDB Cloud:** reemplazar las API keys de management activas y estar alerta a phishing dirigido.

## La lección que va más allá de PingCAP

Como resume Kim Barthel de 42Sec, esta brecha **no es una historia de bases de datos — es la historia de una service-account key**. Y el peligro real es el contexto filtrado: quien tenga esos datos sabe quiénes son tus ingenieros, cuánto pagas, cuándo renueva tu contrato y cómo es tu schema. **Eso es todo lo que se necesita para un phishing que sí te vas a creer.**

En Hacker News la comunidad está dura con la respuesta: la denuncia de que el atacante replicó el control plane **durante más de un mes sin disparar ninguna detección** (si es cierta) es el tipo de falla que quema la confianza de una plataforma. Y que ocurra semanas después del anuncio de una auditoría de seguridad independiente por NCC Group... bueno, incómodo para todos.

Nombres grandes aparecen asociados a los registros filtrados (Booking.com, Shopee, Airbnb, Pinterest, Databricks, Atlassian, Fujitsu, SoftBank, Baidu), aunque eso solo indica que tuvieron relación con el servicio — no que hayan sido comprometidos. Bitget, por ejemplo, ya reportó que su investigación no encontró evidencia de exposición de datos de usuarios.

## Checklist si usas TiDB Cloud (o cualquier DBaaS)

1. **Rota ya** las API keys de management de la consola, especialmente las activas.
2. **Revisa endpoints de migración**: si moviste datos desde MySQL/Aurora, asume que esas credenciales viajaron. Rota todo lo root/admin que haya quedado en los jobs.
3. **Advierte a tu equipo** sobre spear phishing con contexto real (nombres de proyectos, schema, montos de factura). El dato que filtra el proveedor convierte al phishing genérico en phishing quirúrgico.
4. Pregúntate en serio: **¿tu proveedor cloud está guardando tus credenciales en tickets de soporte o en logs de diagnóstico?** Esta vez le tocó a PingCAP; el patrón (query histories, tickets, logs) aplica a cualquiera.

La brecha confirma una incomodidad estructural del SaaS: **tu superficie de ataque no termina en tu base de datos — incluye cada lugar donde el proveedor tocó tus datos**. Y eso, hoy, casi nadie lo audita.

**Fuentes:** InfoQ (25 oct 2026), informe de seguridad de PingCAP, anuncio de FulcrumSec, Hacker News.
