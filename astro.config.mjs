import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solid from '@astrojs/solid-js'; 
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';


// https://astro.build/config
export default defineConfig({
  site: "https://movetofuns.dev/",
  integrations: [solid(), tailwind(), mdx({
    remarkPlugins: [[remarkToc, { heading: "contents"} ]],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior:"append"}]],
  })]
});