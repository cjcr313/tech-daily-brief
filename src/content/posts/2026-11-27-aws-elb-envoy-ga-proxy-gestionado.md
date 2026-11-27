---
title: "AWS lanza ELB for Envoy en GA: tu flota de proxies deja de ser tu problema"
author: "Nauta Lab"
pubDatetime: 2026-11-27T13:10:00Z
slug: aws-elb-envoy-ga-proxy-gestionado
featured: false
draft: false
tags:
  - Cloud
  - AWS
  - Envoy
  - Kubernetes
  - DevOps
description: "AWS pasa ELB for Envoy a disponibilidad general: proxies Envoy open source en instancias dedicadas con aislamiento Nitro, parcheo automático de CVEs y migración sin reescribir Gateway API."
---

![Ilustración editorial de un balanceador gestionado distribuyendo tráfico entre proxies en la nube](../../assets/images/aws-elb-envoy-ga-proxy-gestionado.jpg)

Si tu platform team mantiene su propia flota de Envoy — upgrades, parches de seguridad, capacidad multi-AZ, guardias por proxy — AWS acaba de ofrecerse para quitarte el trabajo de encima: **ELB for Envoy llegó a disponibilidad general** este 26 de noviembre como nuevo tipo de load balancer dentro de Elastic Load Balancing. Y el timing, a días de re:Invent, no es casualidad.

## Qué trae de distinto

- Corre **proxies Envoy open source** en instancias EC2 dedicadas con **aislamiento de hardware del Nitro System**: si aparece un zero-day en Envoy, la explosión queda contenida dentro del load balancer y no salpica tus workloads.
- AWS **monitorea CVEs y aplica automáticamente los parches** de Envoy y del sistema operativo. El mantenimiento del proxy fleet pasa a la factura de otro.
- Puedes **traer tus configuraciones, extensiones y control planes existentes tal cual**, e integrar **AWS Certificate Manager y AWS WAF** con configuración mínima.
- La lógica custom sigue intacta: **WebAssembly, Lua scripting o external processing** para autenticación custom, transformación de requests y routing avanzado.
- Corre dentro de tu **VPC**, con security groups y cifrado de VPC soportado.

## Migrar sin reescribir nada

La parte que más va a interesar a los equipos Kubernetes: si usas **Envoy Gateway**, existe el *remote infrastructure provider* oficial (`aws/elb-envoy-remote-infra-provider` en GitHub) que se instala junto al Envoy Gateway para **mover los proxies a ELB for Envoy sin reescribir tus recursos de Gateway API**. O sea, la migración es de infraestructura, no de configuración.

En GA está disponible en **14 regiones**, incluyendo US East (N. Virginia), US East (Ohio) y US West (Oregon). Para los equipos que hoy administran Envoy a mano, el cálculo es simple: ¿cuánto de tu sprint es parcheo de proxies?

**Fuentes:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/elastic-load-balancing-for-envoy-generally-available/) · [AWS elb-envoy-remote-infra-provider](https://github.com/aws/elb-envoy-remote-infra-provider) · [IT Pro](https://www.itpro.com/it-infrastructure/cloud-platforms/aws-has-a-chance-to-showcase-its-maturity-at-re-invent-2026)
