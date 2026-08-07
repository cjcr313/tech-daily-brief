---
title: "Kubernetes + HashiCorp Vault: nuevo plugin oficial KMS simplifica el manejo de secretos"
author: Carlos
pubDatetime: 2026-08-07T16:00:00Z
slug: hashicorp-vault-kms-plugin-kubernetes
featured: false
draft: false
tags:
  - Kubernetes
  - Seguridad
  - Infraestructura
description: "IBM HashiCorp lanzó un plugin oficial que permite usar Vault Enterprise como KMS externo para Kubernetes, eliminando wrappers de terceros y reduciendo overhead de encriptación."
---

![HashiCorp Vault KMS Kubernetes](../../assets/images/2026-08-07-vault-kms-k8s.jpg)

Si has trabajado con secretos en Kubernetes, sabes el dolor: los Secrets nativos van en base64 (que no es encriptación), y conectar un KMS externo siempre requirió wrappers caseros o módulos de terceros. Ese partido acaba de terminar.

## Qué lanzaron

**IBM HashiCorp** liberó un **plugin oficial de KMS** que permite a clusters de Kubernetes usar **Vault Enterprise** como servicio externo de manejo de llaves. Esto significa:

- **No más contraseñas sin encriptar** almacenadas en etcd
- **El API server de K8s no se sobrecarga** con tareas de crypto
- **Separación clara de responsabilidades**: Kubernetes maneja la data, Vault maneja las llaves maestras

## Cómo funciona (la versión corta)

Con **KMSv2** (disponible desde K8s 1.29), el modelo cambió para ser más eficiente:

1. El API server genera un **Data Encryption Key (DEK)** local
2. Encripta la data en memoria
3. Envía el DEK a Vault para que lo **envuelva con un Key Encryption Key (KEK)** maestro
4. Guarda el DEK envuelto junto a la data encriptada en etcd
5. **Borra el DEK en texto plano** de su memoria

Antes, cada vez que necesitabas desencriptar un secret, K8s llamaba al vault. Si reiniciabas un cluster con miles de secrets, el pobre servidor de llaves recibía miles de peticiones simultáneas. Ahora con KMSv2, el API server pide a Vault que **desenvuelva el DEK una sola vez** y lo cachea localmente.

## Por qué es relevante

- **Auditoría real:** Los security teams ahora tienen un lugar centralizado (Vault) donde gobernar, rotar y auditar las llaves maestras. No es "confía en el cluster", es "confía en Vault y verifica".
- **Menos overhead:** Los nodos de K8s ya no hacen trabajo crypto pesado. Vault Enterprise maneja la carga.
- **Fin de los wrappers caseros:** Antes del plugin oficial, los equipos armaban soluciones con módulos de terceros (que podían dejar de recibir mantenimiento cuando quisieran). Ahora hay un camino soportado oficialmente.

Si tu organización ya usa Vault (y gran parte del enterprise lo hace), esto es básicamente conectar dos cosas que ya tenías con un cable oficial en vez de adaptadores caseros. No es revolucionario, pero sí es el tipo de thing que simplifica la vida de los equipos de platform engineering.

---

**Fuente:** [Cloud Native Now](https://cloudnativenow.com/features/kubernetes-key-management-streamlined-by-hashicorp-vault-plug-in/)
