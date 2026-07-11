import type { CollectionEntry } from "astro:content";
import config from "@/config";

export function postFilter({ data }: CollectionEntry<"posts">) {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - config.posts.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
}

export function mainPostFilter(post: CollectionEntry<"posts">) {
  return postFilter(post) && !post.id.endsWith("-en.md") && !post.id.endsWith("-en.mdx");
}
