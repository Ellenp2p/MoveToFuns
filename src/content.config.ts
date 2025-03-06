import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // 不适用于旧版 API

const move = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/move" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    // description: z.string(),
    author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
    tags: z.array(z.string()),
    index: z.number(),
  }),
});
 
 

export const collections = { move  };