import { z, defineCollection, type CollectionKey } from "astro:content";
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      index: z.bigint()
    })
});
export async function getCollection(collection: CollectionKey) {
  return getCollection(collection);
}

export const collections = {
  sui: postsCollection,
};