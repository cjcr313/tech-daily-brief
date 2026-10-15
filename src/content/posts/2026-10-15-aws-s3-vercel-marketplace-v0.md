---
title: "AWS mete S3, S3 Tables y S3 Vectors al Vercel Marketplace y v0: storage serio sin salir del flujo de frontend"
author: Carlos
pubDatetime: 2026-10-15T09:15:00Z
slug: aws-s3-vercel-marketplace-v0
featured: false
draft: false
tags:
  - Cloud
  - DevOps
description: "Amazon S3, incluidas S3 Tables (Iceberg gestionado) y S3 Vectors, ya se provisionan directo desde el Vercel Marketplace y v0: sin consola de AWS, sin credenciales estáticas y todo en una sola cuenta con una sola boleta."
---

![Ilustración editorial isométrica de una plataforma de nube conectada por un puente luminoso a un entorno de desarrollo web modular, con buckets de almacenamiento, tablas analíticas y vectores de IA fluyendo entre ambos, paleta azul y violeta sobre fondo oscuro, estilo ilustración tech editorial profesional, sin texto](../../assets/images/2026-10-15-aws-s3-vercel-marketplace-v0.jpg)

Durante años, el developer que construye en Vercel tenía una relación incómoda con AWS: la app vivía en un lado y el storage en otro, con credenciales copiadas a mano y una consola de por medio. Eso se acabó: **Amazon S3 —incluyendo S3 Tables y S3 Vectors— ya está disponible de forma nativa en el Vercel Marketplace y en v0**, cubriendo tres workloads distintos: storage cotidiano, analítica e IA.

## Qué se integra exactamente

- **Buckets de propósito general de S3**: los de siempre, prácticamente ilimitados, con las clásicas 11 nueves de durabilidad y 99,99% de disponibilidad por defecto. Archivos, imágenes, videos, documentos, data lakes.
- **S3 Tables**: Apache Iceberg completamente gestionado, con mantenimiento y compaction automáticos, pensado para analítica. Consultable desde cualquier engine compatible con el REST Catalog de Iceberg —incluido DuckDB corriendo dentro de una Vercel Function—.
- **S3 Vectors**: storage vectorial purpose-built para RAG y búsqueda semántica, con hasta **90% menos costo** para subir, guardar y consultar vectores.

Con esto, S3 se suma a las integraciones que ya existían de **Aurora, DynamoDB y OpenSearch Serverless**. La promesa es una stack completa dentro de Vercel —de la base de datos al almacenamiento de objetos, vectores y tablas abiertas—, todo en tu cuenta AWS y con una sola boleta.

## Cómo funciona en la práctica

Desde el dashboard de Vercel: pestaña **Storage → Create → AWS**, eliges el tipo de bucket S3, la región, y listo — el provisioning tarda segundos. Al conectar el bucket a un proyecto, la CLI hace el resto:

```bash
vercel link
vercel env pull .env.local
```

La integración inyecta `AWS_REGION`, `AWS_ROLE_ARN`, `AWS_RESOURCE_ARN` y el nombre del bucket (`S3_BUCKET_NAME`, `S3_TABLE_BUCKET_NAME` o `S3_VECTOR_BUCKET_NAME`).

## El detalle que sí importa: cero credenciales estáticas

Aquí está lo bueno para los que cuidan seguridad: en runtime, el `awsCredentialsProvider` de `@vercel/functions/oidc` **intercambia un token OIDC de corta vida con AWS STS por credenciales temporales acotadas al recurso**. No hay llaves estáticas guardadas en ningún lado. Es el patrón OIDC/STS que los equipos de plataforma llevan años predicando, ahora integrado por defecto en el flujo de Vercel.

Un ejemplo de ruta de Next.js que sube un archivo al bucket:

```javascript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { awsCredentialsProvider } from "@vercel/functions/oidc";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: awsCredentialsProvider({
    roleArn: process.env.AWS_ROLE_ARN,
  }),
});

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");
  await s3.send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file.name,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: file.type,
  }));
  return Response.json({ success: true });
}
```

## Por qué esto es una señal, no un feature más

- **AWS reconociendo dónde vive el developer**: millones de apps web y de IA se construyen en Vercel. Para AWS es mejor estar dentro de ese flujo (y facturar el storage de atrás) que pelear por la consola.
- **v0 generando apps que ya nacen conectadas a AWS**: pedirle a v0 una app con RAG y que el vector store de S3 aparezca provisionado en el mismo flujo cambia el estándar de lo que un equipo chico puede despachar en una tarde.
- **Iceberg y DuckDB en el path del frontend**: S3 Tables consultable desde una Function con DuckDB significa analítica ligera sin cluster de Spark de por medio.

La página de AWS en el Vercel Marketplace parte con **US$100 de créditos gratis** para arrancar. Si tu equipo vive en Vercel y el storage terminaba siempre siendo el pariente lejano en la cuenta AWS, esto lo deja de pariente a socio.

**Fuentes:** [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-s3-vercel-marketplace-v0/), [Vercel Marketplace – AWS](https://vercel.com/marketplace/aws)
