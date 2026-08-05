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