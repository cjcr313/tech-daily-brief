import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://pingdiario.com",
    title: "Ping Diario",
    description:
      "El pulso diario de Cloud Native, IA, Kubernetes, Seguridad e Infraestructura empresarial.",
    author: "Nauta Lab",
    profile: "https://pingdiario.com/about/",
    ogImage: "default-og.jpg",
    lang: "es",
    timezone: "America/Santiago",
    dir: "ltr",
  },
  posts: {
    perPage: 12,
    perIndex: 12,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "instagram",
      url: "https://www.instagram.com/pingdiario/",
      linkTitle: "Ping Diario en Instagram (@pingdiario)",
    },
  ],
  shareLinks: [
    {
      name: "whatsapp",
      url: "https://wa.me/?text=",
      linkTitle: "Compartir por WhatsApp",
    },
    {
      name: "x",
      url: "https://x.com/intent/post?url=",
      linkTitle: "Compartir en X",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/shareArticle?mini=true&url=",
      linkTitle: "Compartir en LinkedIn",
    },
    {
      name: "mail",
      url: "mailto:?subject=Ping%20Diario&body=",
      linkTitle: "Compartir por correo",
    },
  ],
});
