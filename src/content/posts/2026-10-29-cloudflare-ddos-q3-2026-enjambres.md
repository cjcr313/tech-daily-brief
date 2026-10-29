---
title: "Cloudflare DDoS Q3 2026: más enjambres y menos gigantes — 8.200 ataques por hora"
author: Carlos
pubDatetime: 2026-10-29T21:10:00Z
slug: cloudflare-ddos-q3-2026-enjambres
featured: false
draft: false
tags:
  - Cloud
  - Seguridad
description: "El nuevo informe de Cloudflare muestra 18,2 millones de ataques DDoS mitigados en Q3: ráfagas cortas +208%, CLDAP se desplomó y los ataques hiper-volumétricos cayeron tras el desmantelamiento de botnets IoT."
---

![Ilustración editorial tech de un enjambre abstracto de puntos luminosos convergiendo en oleadas cortas contra un escudo de malla hexagonal que protege un servidor, con algunas oleadas gigantes desvaneciéndose al fondo, paleta azul profundo con acentos naranjas, estilo ilustración tecnológica profesional, sin texto](../../assets/images/2026-10-29-cloudflare-ddos-q3-2026-enjambres.jpg)

Cloudflare publicó hoy la edición 26 de su DDoS Threat Report, ahora de vuelta en cadencia trimestral, y el resumen cabe en una frase: **más enjambres, menos gigantes**. Durante julio, agosto y septiembre la red mitigó **18,2 millones de ataques DDoS de capa de red** y **14,4 billones (trillions) de requests HTTP** — o sea, unos **8.226 ataques por hora**: uno cada 0,44 segundos. Todo un ritmo.

## Ráfagas cortas: la firma de los booters

El cambio de forma más notorio es el auge de los ataques tipo "swarm": cortos, medianos y en grandes cantidades, la firma operativa de los servicios DDoS-for-hire. Comparado con Q3 2025:

- Los ataques de ráfaga corta (**menos de 10 minutos** y bajo 1 Gbps) subieron **+208%**
- **96%** de los ataques terminó en menos de 10 minutos
- **98%** se mantuvo bajo 1 Gbps — que igual sobra para tumbar un servidor o sitio chico sin protección

Los sectores más golpeados por esta categoría: software, gambling/casinos y TI.

## Los gigantes se retiraron (por ahora)

En el extremo opuesto, los ataques hiper-volumétricos de más de 1 Tbps **cayeron casi 69%**: de 805 en Q2 a **251 en Q3**. La causa probable: las acciones policiales de principios de año que desmantelaron **cuatro de las mayores botnets IoT** (Aisuru, KimWolf, JackSkid y Mossad).

Pero no cantemos victoria: el ecosistema sigue churneando variantes nuevas como **Dysphoria** (200 mil dispositivos) y **Evooo1Bot**. Las mitigaciones clasificadas como Mirai pegaron un pico en agosto de **57,23 PB** — el 46,5% de todos los bytes mitigados en la capa de red del trimestre — incluyendo cuatro días que superaron los 3 PB cada uno. El ataque Mirai sostenido más largo duró **49,7 horas** (19–21 de agosto).

## CLDAP colapsó, UDP tomó el trono

El giro de vectores más dramático fue a la baja: **CLDAP, que había explotado +580% en el primer semestre, se desplomó 99,5%** y quedó en apenas 0,05% de los ataques. ¿El reemplazo? Otros protocolos connectionless:

- **Amplificación DNS**: +215%, llegando a 3,43% de los ataques
- **UDP floods genéricos**: de 14,06% a **31,31%** de los ataques de capa de red

## Geografía: EE.UU. vuelve al primer puesto

Estados Unidos recuperó el lugar de país más atacado (intercambiándose con China, que quedó #2), e **Indonesia entró al top 3**. Los saltos: **Canadá subió del #16 al #6** (retail, telecom y carriers en la mira, en plena disputa comercial con EE.UU.) e **Israel subió 7 puestos al #10** tras actividad sostenida a mediados de septiembre.

En industrias, Media siguió #1 pero su participación cayó a un cuarto del nivel de Q2, y el foco se repartió: Internet entró al #6, Consumer Services al #8 y entretenimiento adulto al #9.

## La moraleja

La red de Cloudflare (330+ ciudades, 500 Tbps de capacidad) mitiga esto de forma autónoma, sin intervención humana — y tiene que ser así: **la mayoría de los ataques termina antes de que un analista humano alcance a ver la alerta**. Para proveedores, el DDoS Botnet Threat Feed gratuito ya tiene más de 800 redes suscritas.

La lectura práctica para equipos de infraestructura: los ataques masivos type "record" son noticia, pero el riesgo cotidiano son las ráfagas cortas y chicas que bypassan umbrales mal calibrados. Si tu mitigación depende de que alguien despierte el pager, ya llegaste tarde.

**Fuente:** [Cloudflare Blog — DDoS Threat Report 2026 Q3](https://blog.cloudflare.com/ddos-threat-report-2026-q3/)
