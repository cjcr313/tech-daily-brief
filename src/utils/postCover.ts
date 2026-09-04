import type { CollectionEntry } from "astro:content";

const localCovers = import.meta.glob(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,gif,avif}",
  { eager: true, query: "url", import: "default" }
) as Record<string, string>;

/**
 * Resuelve la portada de un post (`ogImage`) a una URL usable en <img>.
 * Soporta URLs absolutas (http/https) y rutas relativas a `src/assets/`.
 * Devuelve `undefined` si el post no tiene portada.
 */
export function getPostCover(
  post: CollectionEntry<"posts">
): string | undefined {
  const og = post.data.ogImage;
  const src = typeof og === "string" ? og : og?.src;
  if (!src) return undefined;

  if (/^https?:\/\//.test(src)) return src;

  // Rutas relativas desde el post (../../assets/images/…) → /src/assets/images/…
  const stripped = src.replace(/^(\.\.\/)+/, "");
  const normalized = stripped.startsWith("/")
    ? stripped
    : "/src/" + stripped.replace(/^src\//, "");

  return localCovers[normalized];
}
