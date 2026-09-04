import type { CollectionEntry } from "astro:content";

const localCovers = import.meta.glob(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,gif,avif,svg}",
  { eager: true, query: "url", import: "default" }
) as Record<string, string>;

/** Resuelve una ruta (remota o relativa a src/assets) a una URL servible. */
function resolveSrc(src: string): string | undefined {
  if (/^https?:\/\//.test(src)) return src;

  // Rutas relativas desde el post (../../assets/images/…) → /src/assets/images/…
  const stripped = src.replace(/^(\.\.\/)+/, "").replace(/^\.\//, "");
  const normalized = stripped.startsWith("/")
    ? stripped
    : "/src/" + stripped.replace(/^src\//, "");

  return localCovers[normalized];
}

/** Primera imagen markdown del cuerpo: ![alt](url) o ![alt](url "title") */
function firstMarkdownImage(body: string): string | undefined {
  return body.match(/!\[[^\]]*\]\(\s*([^)\s]+)(?:\s+["'][^"']*["'])?\s*\)/)?.[1];
}

/** Primera imagen HTML del cuerpo: <img src="…"> */
function firstHtmlImage(body: string): string | undefined {
  return body.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
}

/**
 * Resuelve la portada de un post a una URL usable en <img>.
 * Orden de prioridad: `ogImage` del frontmatter → primera imagen del
 * cuerpo del post → `undefined` (la card usa un degradado de color).
 */
export function getPostCover(
  post: CollectionEntry<"posts">
): string | undefined {
  const og = post.data.ogImage;
  const ogSrc = typeof og === "string" ? og : og?.src;
  if (ogSrc) {
    const resolved = resolveSrc(ogSrc);
    if (resolved) return resolved;
  }

  const body = post.body ?? "";
  const mdImg = firstMarkdownImage(body);
  if (mdImg) {
    const resolved = resolveSrc(mdImg);
    if (resolved) return resolved;
  }

  const htmlImg = firstHtmlImage(body);
  if (htmlImg) {
    const resolved = resolveSrc(htmlImg);
    if (resolved) return resolved;
  }

  return undefined;
}
