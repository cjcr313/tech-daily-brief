---
title: "Grafana 13.3: variables entre dashboards, Notebooks para investigaciones y el mayor refresco visual desde Grafana 7"
author: Carlos
pubDatetime: 2026-10-30T13:10:00Z
slug: grafana-13-3-variables-notebooks-ui
featured: false
draft: false
tags:
  - Observabilidad
description: "Grafana 13.3 trae cross-dashboard variables, Notebooks para documentar investigaciones y un rediseño de UI: menos copy-paste entre dashboards y hallazgos que dejan de morir en screenshots."
---

![Ilustración editorial tech de paneles de dashboards analíticos flotando junto a un cuaderno digital, paleta cálida naranja y azul marino, estilo minimalista profesional](../../assets/images/2026-10-30-grafana-13-3-variables-notebooks-ui.jpg)

Grafana 13.3 salió ayer y apunta directo a dos dolores clásicos de quien opera dashboards a diario: la configuración repetida hasta el cansancio y las investigaciones que se pierden entre tabs, screenshots y hilos de chat.

## Variables entre dashboards: chao copy-paste

Hasta ahora, si diez dashboards usaban el mismo selector (entorno, región, cluster), lo configurabas diez veces. Con el tiempo, eso deriva en configuraciones que no calzan entre sí justo cuando más las necesitas.

Las nuevas **cross-dashboard variables** se definen una vez y se reutilizan en toda la organización:

- Se administran desde **Dashboards > Variables**, con alcance **global** (toda la org) o **por carpeta**.
- Quienes solo ven el dashboard siguen cambiando el valor del selector; la configuración queda gestionada centralizadamente.
- Está en **public preview en todas las ediciones**. En self-managed se activa con el feature toggle `grafana.dashboardGlobalVariables`.

Simple, pero de esas cosas que hacen preguntarse por qué tardó tanto.

## Notebooks: la investigación deja de morir en screenshots

Una investigación típica salta entre un panel del dashboard, Explore para correr una query y el Assistant para preguntar qué está pasando. La evidencia y el razonamiento terminan regados en partes iguales.

Los nuevos **Notebooks** (public preview en todas las ediciones) permiten capturar hallazgos de todo Grafana en un solo documento editable:

- Agregar paneles desde dashboards o Explore, traer findings de Grafana Assistant y escribir observaciones al lado de los datos.
- Casos de uso claros: explorar una pregunta de datos, documentar una investigación para que el siguiente no parta de cero, o preparar un post-incident review con los paneles ya en su lugar.
- Se pueden crear manualmente o con el Assistant, y la nueva página Notebooks trae búsqueda, filtros y export.

Rollout gradual en Grafana Cloud; en self-managed, toggle `dashboard.notebooks`.

## El refresco visual más grande desde Grafana 7

La UI también se renueva: el rediseño más grande desde Grafana 7 está en public preview, junto con nuevas formas de guiar y refinar los dashboards construidos con Grafana Assistant.

## Por qué importa

Las variables compartidas atacan el drift de configuración entre dashboards, y los Notebooks convierten la investigación —históricamente el activo más perecible del on-call— en un artefacto compartible y buscable. Menos contexto perdido cuando alguien entra a un incidente a mitad de camino.

Los detalles completos están en el [anuncio oficial](https://grafana.com/blog/grafana-13-3-release-all-the-latest-features/), el [changelog](https://github.com/grafana/grafana/blob/main/CHANGELOG.md) y la doc de [What's new in 13.3](https://grafana.com/docs/grafana/latest/whatsnew/whats-new-in-v13/whats-new-in-v13-3/).
