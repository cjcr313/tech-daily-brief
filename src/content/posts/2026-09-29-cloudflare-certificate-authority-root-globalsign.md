---
title: "Cloudflare será autoridad certificadora: le compra un root a GlobalSign y apunta al mundo post-cuántico"
author: Carlos
pubDatetime: 2026-09-29T15:05:00Z
slug: cloudflare-certificate-authority-root-globalsign
featured: false
draft: false
tags:
  - Seguridad
  - Infraestructura
  - Cloudflare
description: "Doce años después de Universal SSL, Cloudflare aplicó a los root programs de Chrome, Apple, Microsoft y Mozilla, comprará un root de GlobalSign y planea emitir certificados post-cuánticos con Merkle Tree Certificates."
---

![Ilustración editorial de un certificado digital con candado y raíces de confianza conectando nodos y servidores del mundo, estilo tech editorial](../../assets/images/2026-09-29-cloudflare-certificate-authority-root-globalsign.jpg)

Hace doce años, en la Birthday Week de 2014, Cloudflare prendió Universal SSL y prácticamente duplicó de la noche a la mañana los sitios cifrados de la web. Hoy, en la Birthday Week 2026, dio el siguiente paso: **Cloudflare anunció su intención de convertirse en autoridad certificadora (CA) pública**. Y no es un anuncio tibio: ya aplicaron a los root programs de **Chrome, Apple, Microsoft y Mozilla**, y firmaron un acuerdo definitivo para **adquirir un root establecido de GlobalSign**.

## Dos caminos hacia la confianza

La jugada tiene una lógica clara. Un root recién nacido tarda años en ser útil: hay que propagarlo a sistemas operativos, navegadores y dispositivos, y nunca llega a esa cola larga de equipos viejos que ya no reciben updates (y que igual generan una parte brutal del tráfico mundial). Por eso compran el root de GlobalSign, confiado desde 2012: **cobertura total de clientes antiguos desde el día uno**. En paralelo, presentarán roots nuevos pensados para las políticas del futuro, incluyendo los programas que empiezan a limitar la antigüedad máxima de un root.

## La motivación: no depender de un solo jugador

El post es directo respecto al elefante en la pieza: **Let's Encrypt emite del orden de 10 millones de certificados al día, sirve a más de 500 millones de sitios y pasó los 4 mil millones de certificados activos en 2025**. Es de lo mejor que le pasó a Internet en 20 años, dicen (siendo uno de sus mayores usuarios), pero concentra demasiado riesgo sistémico: si esa CA tiene una mala semana, la web no tiene una alternativa gratuita y automatizada comparable lista para absorber la carga.

Cloudflare está frente a más del 20% del tráfico de Internet y termina TLS para millones de dominios, así que conoce el ecosistema WebPKI desde el lado del consumidor — y de la forma difícil: rate limits, latencia de revocación, churn de CAs. Con la validez máxima de certificados bajando en los próximos años, más actividad agéntica y los certs post-cuánticos al horizonte, el volumen de certificados solo va a subir.

## ACME-first y "fail small"

Lo interesante para quienes operan infraestructura:

- **ACME-first**: emisión y renovación vía ACME, el estándar abierto. Migrar desde otra CA gratuita será cambiar una directory URL, sin tooling nuevo.
- **ARI obligatorio**: solo emitirán a clientes que soporten ACME Renewal Information (RFC 9773). La automatización de renovación será condición de emisión. Si no tienes automatización, esta CA no será para ti.
- **Transparencia radical**: prometen builds reproducibles del software que firma certificados, atestación de los HSM donde viven las llaves, y un dashboard público de salud de emisión e incidentes. Su punto: las auditorías son una foto puntual, no muestran cómo opera una CA un martes cualquiera.

## Post-cuántico: Merkle Tree Certificates en 2027

El trozo más forward-looking: planean ser **una de las primeras CAs en emitir Merkle Tree Certificates (MTCs) en producción, con los primeros certificados en Q1 2027**. Las firmas post-cuánticas son grandes, y las cadenas tradicionales crecerían tanto como para estrangular los handshakes TLS y los logs de transparencia. Los MTCs —que Cloudflare lleva impulsando en el IETF y que Chrome ya nombró como camino preferido para la autenticación cuántico-resistente— ofrecen una alternativa compacta y auditable.

La idea es un solo servicio que haga ambas cosas: certificados clásicos y MTCs bajo una misma CA, para que nadie tenga que correr dos sistemas ni apostar por un lado de una migración de décadas.

## El punto

Aún no emiten nada; esto es un compromiso público con hitos en el camino. Pero para el ecosistema —y para cualquiera que opere TLS a escala— tener a Cloudflare entrando a la fiesta de las CAs, con foco en redundancia, automatización obligatoria y post-cuántico, es noticia gruesa. La capa de confianza de la web encrypted acaba de conseguir un competidor serio.

**Fuente:** [Cloudflare Blog](https://blog.cloudflare.com/cloudflare-certificate-authority/)
