import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getMainSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

const RSS_ITEM_LIMIT = 50;

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getMainSortedPosts(posts).slice(0, RSS_ITEM_LIMIT);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    customData: "<language>es</language>",
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, config.site.lang),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      categories: data.tags,
    })),
  });
}
