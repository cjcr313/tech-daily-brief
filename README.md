# Ping Diario (Tech Daily Brief)

**Ping Diario** es un resumen diario de noticias, herramientas y novedades del mundo de la tecnología, programación e innovación.

Este repositorio (`tech-daily-brief`) contiene el código fuente y el contenido del sitio web/blog de Ping Diario.

## ¿Por qué dice "Astro" en el código?

El sitio está construido utilizando **Astro**, un framework web muy moderno y rápido. Específicamente, este proyecto se inició usando una plantilla llamada *AstroPaper*, que es ideal para blogs porque carga a la velocidad de la luz, está muy bien optimizada para SEO y permite escribir los artículos en formato Markdown de manera muy sencilla.

Por eso vas a ver archivos y configuraciones relacionadas con Astro en el proyecto. Es el "motor" que hace funcionar a Ping Diario por detrás.

## Estructura del proyecto

- `src/content/posts/`: Aquí es donde viven los artículos del blog en formato Markdown.
- `src/pages/`: Las páginas estáticas del sitio.
- `src/components/`: Componentes de interfaz (UI).
- `public/`: Imágenes y recursos públicos.

## Desarrollo local

Si quieres correr el proyecto en tu máquina:

```bash
# Instalar dependencias
npm install  # o pnpm install

# Levantar el servidor de desarrollo local
npm run dev  # o pnpm dev
```