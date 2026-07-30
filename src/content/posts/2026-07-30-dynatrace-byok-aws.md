---
title: "Dynatrace lanza Bring Your Own Key (BYOK) para AWS"
author: Carlos
pubDatetime: 2026-07-30T10:00:00Z
slug: dynatrace-byok-aws-observabilidad
featured: false
draft: false
tags:
  - Observabilidad
  - Cloud
  - Seguridad
description: "Dynatrace ahora permite a sus clientes SaaS en AWS gestionar sus propias claves de encriptación (KMS) para proteger datos en reposo."
---

El tema de la soberanía de los datos y la seguridad en la nube sigue siendo un dolor de cabeza, especialmente para la banca y el sector salud. Para apañar con esto, **Dynatrace acaba de anunciar la disponibilidad general de Bring Your Own Key (BYOK)** para todos sus clientes SaaS que corren sobre AWS.

En simple: en vez de depender de las llaves de encriptación que maneja por defecto la plataforma, ahora puedes integrarlo directo con tu propio AWS Key Management Service (KMS). Tú tienes el control total de las llaves.

**¿Por qué importa esto?**
- **Soberanía y control:** Si necesitas cortar por lo sano ante un incidente, puedes revocar el acceso a tus datos directamente desde AWS KMS. Si le cortas la llave, Dynatrace pierde el acceso a tu data en reposo de inmediato (incluyendo Grail, Dashboards o Notebooks).
- **Compliance sin fricciones:** Le facilita bastante la vida a los equipos a la hora de enfrentar auditorías en industrias altamente reguladas.
- **Rotación nativa:** Puedes usar la rotación automática de llaves que ya te ofrece AWS.

Ojo con un detalle de implementación: esto aplica para la data que ingrese *después* de activar la nueva llave. La data vieja sigue encriptada con la key anterior, así que no vayas a borrar tus llaves antiguas de un plumazo o perderás acceso a tu histórico.