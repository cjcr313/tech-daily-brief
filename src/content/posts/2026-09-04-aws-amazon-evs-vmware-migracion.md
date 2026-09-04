---
title: "AWS expande Amazon EVS a 22 regiones para destrabar la migración VMware"
author: Carlos
pubDatetime: 2026-09-04T10:00:00Z
slug: aws-amazon-evs-vmware-migracion
featured: false
draft: false
tags:
  - Cloud
  - Infraestructura
description: "A un año de su GA, Amazon Elastic VMware Service llega a 22 regiones con soporte para VCF 9.0/9.1 y se posiciona como la ruta rápida para salir del data center."
---

![Ilustración editorial de un centro de datos migrando cargas VMware hacia la nube](../../assets/images/2026-09-04-aws-amazon-evs-vmware-migracion.jpg)

A un año de su disponibilidad general, AWS le metió combustible a **Amazon Elastic VMware Service (EVS)**. En pleno **VMware Explore 2026**, la compañía anunció que el servicio ya corre en **22 regiones** y soporta **VMware Cloud Foundation (VCF) 9.0 y 9.1** sobre infraestructura bare-metal de EC2.

### El caso de uso estrella: evacuar el data center

Andy Reedy, senior manager de producto de EC2, fue directo: el caso número uno que escuchan es el **"data center evacuation"**. "Casi todas las semanas recibimos un llamado: 'mi contrato del data center vence en seis meses, necesito salir de ahí'", contó. Según Reedy, el modelo **lift-and-shift VCF-a-VCF** es el camino más rápido para salir del on-prem y caer en la nube.

Los motores detrás de la adopción son claros: salida de data centers, requisitos de disaster recovery y el acceso limitado a hardware nuevo on-premise.

### Autogestionado, no fully-managed

La diferencia clave con **VMware Cloud on AWS**: EVS es una solución **self-managed**. El cliente "literalmente entra y controla el entorno VCF", lo despliega igual que lo haría en su data center físico, pero corriendo sobre infraestructura AWS. Traducción: se conservan las skills, los procesos y las herramientas VMware que el equipo ya conoce.

Eso lo convierte en una alternativa atractiva justo cuando **Broadcom** aprieta la tuerca de VCF y hay empresas que no quieren (o no pueden) reinventar todo su stack de virtualización.

### Un menú por aplicación

Reedy insiste en que no es todo-o-nada: EVS permite decidir **aplicación por aplicación** si una carga se queda igual, se mueve a la nube o pasa por una modernización más profunda. "Es un menú de opciones", resumió.

La jugada tiene lógica de mercado: con la relación VMware/Broadcom generando fricción en el mundo enterprise, AWS quiere ser el puerto seguro para quienes necesitan salir del data center sin reescribir toda su operación. El pitch es simple: misma VCF, mismo equipo, pero con la escala de EC2 debajo.
