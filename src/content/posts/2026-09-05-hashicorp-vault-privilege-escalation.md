---
title: "HashiCorp Vault corrige un bypass de privilegios usando nombres de política con mayúsculas"
author: Carlos
pubDatetime: 2026-09-05T22:00:00Z
slug: hashicorp-vault-privilege-escalation
featured: false
draft: false
tags:
  - Seguridad
  - DevOps
  - Infraestructura
description: "HashiCorp parchó una escalada de privilegios en Vault: una restricción denied_parameters sobre el campo policies se podía saltar con nombres de política en mayúsculas/minúsculas mezcladas. Ahora Vault normaliza a minúsculas."
---

![Ilustración editorial de una bóveda de secretos (Vault) con un candado que se normaliza, cadenas de permisos convergiendo a minúsculas, paleta morada y ámbar sobre fondo oscuro](../../assets/images/2026-09-05-hashicorp-vault-privilege-escalation.jpg)

HashiCorp publicó un parche de seguridad en **Vault** que vale la pena tener en el radar, sobre todo si usas políticas con restricciones finas (los *sentinel constraints* del enterprise). La falla permitía una **escalada de privilegios** sutil: una restricción **`denied_parameters`** aplicada sobre el campo **`policies`** se podía **saltar usando nombres de política con mayúsculas y minúsculas mezcladas**.

## El problema, en simple

La idea detrás de `denied_parameters` es impedir que una identidad, al crear o modificar otra, le asigne políticas que no debería. El bypass ocurría porque la validación era **case-sensitive**: si tú bloqueabas `"admin"` con minúsculas, un atacante podía referirse a la misma política como `"Admin"` o `"ADMIN"` y la restricción no la pescaba, dejando pasar una asignación de privilegios que debía estar bloqueada.

El fix: **Vault ahora normaliza los nombres de política a minúsculas** antes de aplicar la restricción, cerrando la ventana de una vez.

## Por qué importa

- Es el clásico bug de **comparación de strings** en un punto de control de seguridad: pequeño, fácil de pasar por alto, pero con impacto directo en el modelo de privilegios.
- Quien depende de `denied_parameters` para gobernar qué puede asignar cada identidad tiene que actualizar para que la barrera realmente se cumpla.
- No se trata de una falla con exploit público masivo, pero es justo el tipo de detalle que un atacante paciente con acceso parcial puede explotar para moverse lateralmente.

La recomendación de siempre: revisar qué versión de Vault tienes corriendo y actualizar al último parche. En herramientas que son la raíz de confianza de tus secretos, quedarse una versión atrás en un fix de escalada de privilegios es mala idea.

**Fuente:** notas de release de HashiCorp Vault (septiembre 2026), vía releases.sh.
