import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Inicio",
    posts: "Artículos",
    tags: "Etiquetas",
    about: "Acerca de",
    archives: "Archivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Compartir artículo:",
    sharePostOn: "Compartir en {{platform}}",
    sharePostViaEmail: "Compartir por email",
    tagLabel: "Etiquetas",
    backToTop: "Volver arriba",
    goBack: "Volver",
    editPage: "Editar página",
    previousPost: "Artículo anterior",
    nextPost: "Artículo siguiente",
  },
  pagination: {
    prev: "Ant",
    next: "Sig",
    page: "Página",
  },
  home: {
    socialLinks: "Redes sociales",
    featured: "Destacados",
    recentPosts: "Artículos recientes",
    allPosts: "Todos los artículos",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derechos reservados.",
  },
  pages: {
    tagTitle: "Etiqueta",
    tagDesc: "Todos los artículos con la etiqueta",

    tagsTitle: "Etiquetas",
    tagsDesc: "Todas las etiquetas.",

    postsTitle: "Artículos",
    postsDesc: "Todos los artículos.",

    archivesTitle: "Archivo",
    archivesDesc: "Todos los artículos archivados.",

    searchTitle: "Buscar",
    searchDesc: "Buscar algún artículo...",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    searchPlaceholder: "Buscar...",
    noResults: "Sin resultados",
    goToPreviousPage: "Página anterior",
    goToNextPage: "Página siguiente",
  },
  notFound: {
    title: "404 No encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;
