import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://cjcr313.github.io",
    title: "Tech Daily Brief",
    description: "Un resumen diario de lo más relevante en tecnología, Kubernetes, Nube y Seguridad.",
    author: "Carlos",
    profile: "https://github.com/cjcr313",
    ogImage: "default-og.jpg",
    lang: "es",
    timezone: "America/Santiago",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/cjcr313" },
    { name: "x",        url: "https://x.com" },
    { name: "linkedin", url: "https://www.linkedin.com/in/" },
    { name: "mail",     url: "mailto:carlos.carrasco@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "linkedin", url: "https://www.linkedin.com/shareArticle?mini=true&url=" },
    { name: "mail",     url: "mailto:?subject=Mira%20este%20post&body=" },
  ],
});
