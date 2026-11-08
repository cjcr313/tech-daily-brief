---
title: "Grafana 13.3: variables compartidas entre dashboards, Notebooks para investigaciones y el mayor refresh visual desde Grafana 7"
author: Carlos
pubDatetime: 2026-11-08T21:05:00Z
slug: grafana-13-3-variables-notebooks-ui-refresh
featured: false
draft: false
tags:
  - Observabilidad
  - DevOps
description: "Grafana Labs soltó la 13.3: cross-dashboard variables, Notebooks para documentar investigaciones, rediseño visual completo y Grafana Assistant que planifica dashboards antes de generarlos."
---

![Ilustración editorial tech de paneles de monitoreo interconectados con tarjetas de variables flotantes y un cuaderno de notas digital luminoso, paleta naranja y azul oscuro de Grafana, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/grafana-13-3-variables-notebooks-ui-refresh.jpg)

Grafana Labs no se quiso quedar fuera de la semana previa a KubeCon y soltó **Grafana 13.3**, una versión que apunta directo a dos dolores clásicos del que administra observabilidad a escala: la configuración duplicada entre dashboards y las investigaciones que se pierden entre tabs, screenshots y hilos de chat.

## Variables que se definen una vez y se usan en todas partes

La funcionalidad estrella son las **cross-dashboard variables** (public preview en todas las ediciones). Si diez dashboards usan el mismo selector de ambiente, región o clúster, hoy toca mantenerlo duplicado diez veces — y tarde o temprano algo se desincroniza. Ahora se define la variable una vez desde **Dashboards > Variables**, con dos alcances:

- **Global**: disponible para todos los dashboards de la organización
- **Folder**: restringida a los dashboards de una carpeta específica

Los viewers siguen pudiendo cambiar el valor, pero la configuración queda administrada centralmente. Para self-managed, se habilita con el feature toggle `grafana.dashboardGlobalVariables`.

## Notebooks: la investigación deja de morir en screenshots

La segunda novedad grande son los **Notebooks**: documentos editables que combinan paneles de dashboards, queries de Explore, hallazgos de Grafana Assistant y tus propias observaciones en un solo lugar. El caso de uso es obvio para cualquiera que haya hecho un postmortem: documentar la investigación paso a paso, preparar el incident review con los paneles ya embebidos, y que el próximo que llegue no empiece de cero. Se pueden guardar, buscar, editar, compartir y exportar — incluso crearlos con ayuda del Assistant.

## El mayor rediseño visual desde Grafana 7

La 13.3 también trae la primera fase del refresh visual más grande desde Grafana 7: temas oscuro y claro rediseñados, tipografía revisada, bordes más suaves, esquinas redondeadas y nuevos botones, menús e inputs. Cambio cosmético, sí, pero es el tipo de cambio que uno nota todos los días.

## Assistant con planificación y alerting más portátil

- **Grafana Assistant ahora planifica antes de crear**: en vez de generar un dashboard de un prompt sin derecho a apelación, primero propone la estructura (paneles, tipos de visualización, variables, layout), muestras un preview read-only, pides cambios y apruebas. Además, el **undo de cambios del Assistant ya es GA**.
- **Alerting**: public preview para importar configuraciones existentes de Prometheus o Mimir Alertmanager directamente en Grafana Alerting, incluyendo rutas de notificación. Menos re-trabajo manual en migraciones.
- **Visualizaciones**: thresholds con variables de dashboard, Sort by con múltiples campos, cross-filtering extendido a Histogram/State timeline/Status History, y settings de tiempo por panel ya GA.
- **Enterprise/Cloud**: headers y footers custom para reportes PDF ya GA.

Detalle para admins: hay un cambio de comportamiento en role management — los role managers autorizados ahora pueden revocar permisos que ellos mismos no tienen. Revisen antes de actualizar.

La nota completa está en el [blog de Grafana](https://grafana.com/blog/grafana-13-3-release-all-the-latest-features/) y el detalle por feature en la [documentación de 13.3](https://grafana.com/docs/grafana/latest/whatsnew/whats-new-in-v13/whats-new-in-v13-3/).

**Lectura rápida**: nada revolucionario, pero un montón de calidad de vida bien apuntada. Las variables compartidas solas justifican la actualización para cualquiera con más de cinco dashboards que se pisan.
