---
title: "Cloudflare: el tráfico automatizado ya superó al humano, y los fundadores proyectan 1.000x en cinco años"
author: Carlos
pubDatetime: 2026-09-27T21:00:00Z
slug: cloudflare-carta-fundadores-2026-trafico-agentes
featured: false
draft: false
tags:
  - Cloud
  - IA
  - Infraestructura
description: "En su carta anual de fundadores, Cloudflare revela que el tráfico de agentes y crawlers pasó al humano en mayo de 2026, dos años antes de lo previsto, y que la brecha se multiplicará por mil."
---

![Ilustración editorial: una autopista digital dividida entre tráfico de agentes de IA y usuarios humanos, con nubes de Cloudflare al fondo](../../assets/images/2026-09-27-cloudflare-carta-fundadores-2026-trafico-agentes.jpg)

Cloudflare cumplió 16 años y, como corresponde a un adolescente, se puso a mirar el mundo que lo rodea con una mezcla de susto y optimismo. La excusa: la **Annual Founders' Letter 2026**, firmada por Matthew Prince y Michelle Zatlyn, que trae un dato que reordena el tablero de internet.

## El tráfico automatizado llegó antes de lo previsto

El número estrella de la carta: Cloudflare pronosticaba originalmente que el tráfico automatizado (agentes, crawlers, bots) superaría al humano **en la segunda mitad de 2027**. El auge de los agentes de IA y los crawlers **adelantó esa fecha a mayo de 2026**.

Y la proyección hacia adelante es agresiva: si las tendencias se mantienen —y los autores dicen que, si acaso, se están quedando cortos— el tráfico automatizado será **1.000 veces el tráfico humano en cinco años**. No porque los humanos vayan a navegar menos, sino porque el tráfico de agentes está explotando.

## El boom de la web y los "vibe coders"

La carta también describe un cambio en quién construye internet. Desde 2012 hasta 2025 la web se estancó (e incluso se encogió por algunas métricas). Eso cambió a mediados de 2025 con una explosión de sitios nuevos. La narrativa popular dice que fue "slop" de IA, pero Cloudflare sostiene que no es la mayoría de lo que ven.

Lo que ven, en cambio, es una **nueva camada de creadores**: gente con ideas pero sin conocimientos de programación que, con herramientas de "vibe coding", está sacando productos reales. El dato que respalda la tesis: **más de 7 millones de desarrolladores** construyen hoy sobre la plataforma de Cloudflare, que se posiciona como el destino de deploy favorito de estas herramientas.

## La tragedia de los comunes, versión agentes

Acá es donde los fundadores meten el dedo en la llaga. El "legwork" de los agentes no es gratis. Si le pides a tu agente que te recomiende dónde almorzar, puede escanear **1.000 menús de restaurantes** para sugerirte uno. Ese restaurante se lleva tu negocio; los otros 999 tuvieron que **bancar la carga de servir al agente sin recibir nada a cambio**.

El riesgo es un problema clásico de **tragedia de los comunes**: quienes se benefician de los agentes no pagan el costo de la carga que le meten al sistema, así que no tienen incentivo para moderarse.

## Consolidación y el riesgo para los nuevos

La segunda alerta es sobre el futuro del comercio. Hoy un negocio chico gana clientes por cercanía o conveniencia: la persona del local que se acuerda de tu nombre, o la tienda que te queda de camino a casa.

Un agente **no se acuerda de tu nombre ni pasa por tu barrio**. Va con lo que más información tiene, y eso suele ser el que lleva más tiempo en el mapa. El riesgo: a medida que los agentes manejen más transacciones, se les hará más difícil entrar a los nuevos actores, lo que empuja hacia **consolidación y una web menos robusta**.

## El balance

Pese a todo, el tono de la carta es optimista: reconocen que el cambio trae disrupción, pero creen que la tecnología, bien encaminada, deja que más gente exprese su creatividad. El llamado de fondo es a construir una web **justa y sostenible** para esta nueva era de agentes.

Para cualquiera que opere infraestructura, el mensaje es claro: prepárense para un internet donde el tráfico mayoritario no es humano, y donde el costo de servir a los agentes es un problema de diseño que hay que resolver ahora, no después.

*Fuente: [Cloudflare Blog — Annual Founders' Letter 2026](https://blog.cloudflare.com/cloudflares-2026-annual-founders-letter/)*

### Update: 30 de septiembre de 2026

Tres días después de la carta, llegó la respuesta concreta a esa "tragedia de los comunes": en el marco de su Birthday Week, Cloudflare lanzó las herramientas para que los sitios **vean quién los visita, decidan quién pasa y cobren por el acceso**:

- **Monetization Gateway (beta cerrada)**: permite a los dueños de dominio cobrar a los agentes por acceso a sitios, APIs, herramientas MCP o datasets, con precio por uso (per request, per query, per token). Usa el código HTTP **402 Payment Required** con el pago embebido en la propia request — sin redirect a checkout — y hoy corre sobre **stablecoins** como rail de pagos, que es lo único que calza con las características de un comprador agente: barato, rápido y sin intervención humana. Ya hay casos en producción (Ceramic.ai, Stocktwits) y los sellers con base en EE.UU. pueden postular desde el dashboard.
- **Pay Per Use**: para contenido de alto valor que se crawlea una vez y se usa mil veces — el dueño cobra por cada uso reportado, con una red de compradores verificados.
- **"The Internet has a second audience"**: el post que ordena todo esto confirma que **más de la mitad del tráfico** que llega a sitios en Cloudflare ya es automatizado, con los agentes de IA como su segmento de mayor crecimiento.

La tesis de la carta pasó de diagnóstico a producto en 72 horas. La web donde el agente paga por lo que consume dejó de ser una idea: tiene API, código de estado y beta.

*Fuentes: [Monetization Gateway beta](https://blog.cloudflare.com/monetization-gateway-beta/) · [Pay Per Use](https://blog.cloudflare.com/pay-per-use/) · [The Internet has a second audience](https://blog.cloudflare.com/agentic-web/)*
