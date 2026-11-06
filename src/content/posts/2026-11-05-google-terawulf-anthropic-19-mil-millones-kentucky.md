---
title: "Google respalda la renta de Anthropic: avala US$19.000 millones en arriendos del data center de TeraWulf en Kentucky — con una cláusula TPU reveladora"
author: Carlos
pubDatetime: 2026-11-05T21:05:00Z
slug: google-terawulf-anthropic-19-mil-millones-kentucky
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "Google firmó como aval de los US$19.000 millones que Anthropic debe pagarle a TeraWulf por 401 MW en Hawesville, Kentucky, durante 20 años. El detalle fino: durante seis años Google solo puede echarse atrás si los pods de TPU no pueden consumir al menos la mitad de la potencia del edificio."
---

![Ilustración editorial tech de un enorme campus de data center junto a un río en campo abierto, conectado por un arco de garantía luminoso que une dos torres corporativas, con líneas de energía fluyendo hacia racks de cómputo, paleta azul y verde sobre fondo oscuro, estilo ilustración tecnológica profesional limpia, sin texto](../../assets/images/placeholder.jpg)

El 4 de noviembre TeraWulf anunció algo inédito en la carrera de la infraestructura de IA: **Google LLC firmó tres acuerdos de soporte de crédito que respaldan las obligaciones de Anthropic** bajo los arriendos del *Justified Data Campus* en Hawesville, Kentucky. Hablamos de **~401 MW de carga crítica de TI, 20 años de contrato y unos US$19.000 millones de renta comprometida** en su término inicial. Google —el mayor inversionista y proveedor de cómputo de Anthropic— ahora también es su garante financiero. La era de la "infraestructura de crédito" ya no es teoría.

## Por qué importa un aval

El mecanismo es puro project finance: Anthropic **no tiene rating de grado de inversión**, pero Alphabet (AA+/Aa2 en S&P y Moody's) sí. Con Google parado detrás de la renta, TeraWulf puede pedir deuda para construir contra una obligación que los bancos tratan como casi grado de inversión. El mismo día, TeraWulf ejecutó el contrato EPC definitivo con **Fluor** (precio máximo garantizado) para los tres edificios del campus.

Los plazos: la renta de Anthropic comienza a medida que se entregan los data halls, en fases que TeraWulf espera entre **fines de 2027 y el segundo trimestre de 2028**. Eso sí, el aval **no cubre los años de construcción**: cada acuerdo recién entra en vigencia cuando arranca el último data hall del arriendo correspondiente. Por eso, pese al anuncio, la acción de TeraWulf cayó ~4% (y el sector bitcoin-miner-turned-AI se apretó: Cipher -18%, IREN -9%).

## La cláusula TPU: el detalle que lo dice todo

La disposición más jugosa del 8-K presentado ante la SEC: durante los **primeros seis años**, Google no puede ejercer su opción de rechazo (la de terminar pagando una tarifa tope) a menos que ocurra un *Equipment Capacity Trigger*. ¿Y qué define ese gatillo? Que **los pods de TPU instalados en el edificio sean capaces de consumir menos del 50% de la potencia crítica del arriendatario**.

Dicho de otro modo: Google está garantizando un edificio pensado para correr **sus propios TPUs**. Si la sala está llena de racks de la competencia o simplemente no calzan los pods de TPU, Google se reserva la puerta de salida con costo acotado. El hardware quedó escrito dentro del contrato de crédito. Sí, exactamente lo que estás pensando: el negocio de la IA frontera ya se negocia a este nivel de detalle.

## Si Anthropic no paga, ¿qué pasa?

El mecanismo ante un default es un menú de tres platos, con 30 días para elegir:

- **Asumir el arriendo**: Google paga la renta y reemplaza a Anthropic como arrendatario.
- **Pagar una tarifa de término** (en ciertos casos, con opción de quedarse con una participación en Raylan Data, la subsidiaria dueña del campus, proporcional a la tarifa sobre el costo total de desarrollo).
- **Diferir la decisión**, pagando la renta impaga mientras dura la deferencia.

Si no responde en 30 días, se considera rechazo — salvo durante los primeros seis años, donde se presume asunción. Y ojo con el detalle: Anthropic debe reembolsar a Google cualquier cura de renta **más un 5% de cargo administrativo**, con interés por mora si tarda más de 30 días.

El acuerdo además está diseñado para extinguirse solo: **termina cuando Anthropic (o su sucesora) mantenga rating de grado de inversión por al menos tres meses** y garantice las obligaciones del arriendo. Google, en esencia, le está prestando su balance de AAA mientras Anthropic construye el suyo.

## La lectura práctica

Para quienes siguen la infraestructura de la IA, esta noticia confirma tres tendencias: los hiperscalers están dispuestos a **apalancar su propio balance para asegurar capacidad** donde sus modelos (y los de sus aliados) van a entrenar; los *landlords* de data centers ya no pueden financiar solo con promesas de startups de IA — necesitan avales de este calibre; y las cláusulas de hardware (¿TPU? ¿GPU?) van a ser cada vez más determinantes en quién construye qué y para quién. El contrato de arriendo se convirtió en un documento de estrategia tecnológica.

**Fuentes:** [TeraWulf (press release)](https://investors.terawulf.com/news-events/press-releases/detail/148/terawulf-secures-google-credit-backstop-for-project-financing-in-support-of-19-billion-anthropic-lease-executes-definitive-fluor-epc-agreement) · [DataStudios (análisis del 8-K)](https://www.datastudios.org/post/google-backstops-anthropic-19-billion-data-center-lease-kentucky-terawulf) · [24/7 Wall St](https://247wallst.com/investing/2026/11/04/terawulf-falls-4-despite-google-backstop-for-19-billion-anthropic-leases-cipher-digital-plunges-18-iren-tumbles-9/)
