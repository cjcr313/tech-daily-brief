import type { ImageMetadata } from "astro";
import type { CollectionEntry } from "astro:content";

const localImageModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{webp,jpg,jpeg,png,gif,avif,svg}",
  { eager: true }
);

export interface ResolvedCover {
  image?: ImageMetadata;
  url?: string;
  isSvg?: boolean;
}

function normalizeAssetKey(src: string): string {
  const stripped = src
    .replace(/^@\/assets\//, "assets/")
    .replace(/^(\.\.\/)+/, "")
    .replace(/^\.\//, "");
  return stripped.startsWith("/")
    ? stripped
    : "/src/" + stripped.replace(/^src\//, "");
}

function resolveCoverSrc(src: string): ResolvedCover | undefined {
  if (/^https?:\/\//.test(src)) {
    return { url: src, isSvg: /\.svg(\?|$)/i.test(src) };
  }

  const key = normalizeAssetKey(src);
  const direct = localImageModules[key]?.default;
  if (direct) {
    return {
      image: direct,
      url: direct.src,
      isSvg: key.toLowerCase().endsWith(".svg"),
    };
  }

  // Fallback: if a post still references .jpg/.png after WebP conversion
  const webpKey = key.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const webpMod = localImageModules[webpKey]?.default;
  if (webpMod) {
    return { image: webpMod, url: webpMod.src, isSvg: false };
  }

  return undefined;
}

function firstMarkdownImage(body: string): string | undefined {
  return body.match(/!\[[^\]]*\]\(\s*([^)\s]+)(?:\s+["'][^"']*["'])?\s*\)/)?.[1];
}

function firstHtmlImage(body: string): string | undefined {
  return body.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
}

/**
 * Resolves a post's cover image as Astro ImageMetadata (for optimized <Image />
 * rendering with zero CLS and no duplicate raw assets) or remote URL.
 */
export function getPostCover(
  post: CollectionEntry<"posts">
): ResolvedCover | undefined {
  const og = post.data.ogImage;
  if (og && typeof og !== "string") {
    return { image: og, url: og.src, isSvg: og.format === "svg" };
  }
  if (typeof og === "string") {
    const resolved = resolveCoverSrc(og);
    if (resolved) return resolved;
  }

  const body = post.body ?? "";
  const mdImg = firstMarkdownImage(body);
  if (mdImg) {
    const resolved = resolveCoverSrc(mdImg);
    if (resolved) return resolved;
  }

  const htmlImg = firstHtmlImage(body);
  if (htmlImg) {
    const resolved = resolveCoverSrc(htmlImg);
    if (resolved) return resolved;
  }

  return undefined;
}
