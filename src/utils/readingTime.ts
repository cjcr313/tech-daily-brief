import type { CollectionEntry } from "astro:content";

/**
 * Estimates Spanish reading time in minutes (~220 words per minute).
 */
export function getReadingTimeMinutes(body?: string): number {
  if (!body) return 2;
  const plain = body
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`~|-]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/**
 * Picks up to `limit` related articles based on shared tags and recency.
 */
export function getRelatedPosts(
  current: CollectionEntry<"posts">,
  candidates: CollectionEntry<"posts">[],
  limit = 3
): CollectionEntry<"posts">[] {
  const currentTags = new Set(
    (current.data.tags ?? []).map(t => t.toLowerCase())
  );
  const currentTime = new Date(
    current.data.modDatetime ?? current.data.pubDatetime
  ).getTime();

  return candidates
    .filter(p => p.id !== current.id)
    .map(post => {
      const postTags = (post.data.tags ?? []).map(t => t.toLowerCase());
      let shared = 0;
      for (const t of postTags) {
        if (currentTags.has(t)) shared++;
      }
      // Bonus if primary tag matches
      const primaryMatch =
        postTags[0] &&
        current.data.tags?.[0] &&
        postTags[0] === current.data.tags[0].toLowerCase()
          ? 1.5
          : 0;
      const postTime = new Date(
        post.data.modDatetime ?? post.data.pubDatetime
      ).getTime();
      const daysDiff = Math.abs(currentTime - postTime) / (1000 * 60 * 60 * 24);
      const recencyBonus = Math.max(0, 1 - daysDiff / 90);
      return { post, score: shared * 2 + primaryMatch + recencyBonus };
    })
    .filter(item => item.score > 0.5)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}
