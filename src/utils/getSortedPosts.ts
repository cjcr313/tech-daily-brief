import type { CollectionEntry } from "astro:content";
import { postFilter, mainPostFilter } from "./postFilter";

export function getSortedPosts(posts: CollectionEntry<"posts">[]) {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
}

export function getMainSortedPosts(posts: CollectionEntry<"posts">[]) {
  return posts
    .filter(mainPostFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
}
