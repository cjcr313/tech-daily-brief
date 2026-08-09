---
title: "Alerta de Seguridad: Gusanos 'ChainDrop' y 'keyv' infectan cientos de paquetes en npm"
author: Carlos
pubDatetime: 2026-08-05T04:00:00Z
slug: npm-chaindrop-keyv-worm-supply-chain
featured: false
draft: false
tags:
  - DevOps
  - Cloud
description: "Un ataque masivo a la cadena de suministro de npm compromete más de 1.300 paquetes usando gusanos autorreplicantes."
---
![Ataque npm Supply Chain](../../assets/images/2026-08-05-npm-worm-keyv-chaindrop.jpg)

Tremendo dolor de cabeza para la comunidad DevOps y Node.js. Un ataque masivo de supply-chain ha golpeado el registro npm con dos variantes principales de malware.

Por un lado, un malware autorreplicante bautizado como **'ChainDrop'** ha comprometido más de 1.300 paquetes que suman unos 2 billones de descargas mensuales. Por otro, un gusano roba-credenciales que apareció originalmente en `keyv@6.0.0` se ha propagado más allá de sus namespaces originales, plantando hooks maliciosos orientados a Claude Code y VS Code.

Es un buen momento para auditar dependencias y asegurar los pipelines de CI/CD. La seguridad en la cadena de suministro sigue siendo uno de los eslabones más débiles del ecosistema.

### Update: 9 de agosto — Provenance attestations usadas como camuflaje

The New Stack publicó un análisis más profundo del ataque que revela un detalle aún más preocupante: **los atacantes generaron provenance attestations válidas para los paquetes maliciosos**.

Las provenance attestations eran hasta ahora una de las medidas de confianza más sólidas de npm — firmas criptográficas que verifican que un paquete viene de una fuente legítima y no ha sido alterado. Pero en este ataque, los malicious actors lograron explotar vulnerabilidades en el proceso de build y publicación para generar attestaciones válidas.

**Resultado:** los desarrolladores que verificaban la provenance de sus dependencias vieron una señal de confianza que era falsa. Las herramientas de seguridad que confían en estas firmas también fueron engañadas.

Esto cambia la conversación: las provenance attestations no son una solución definitiva, son **una capa más** que puede ser manipulada. Para equipos DevOps, esto refuerza la necesidad de:
- Análisis de comportamiento de paquetes (no solo firma)
- Verificación multicapa de integridad
- Monitoreo continuo de dependencias más allá del SCA tradicional
- Políticas estrictas de fuentes y versiones permitidas

La escala final del ataque: **444 paquetes, 2.212 versiones, más de una docena de organizaciones afectadas**, todo en menos de 4 horas.