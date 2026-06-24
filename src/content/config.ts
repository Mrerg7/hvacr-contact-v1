import { z, defineCollection } from 'astro:content';

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    domain: z.string(),
    price: z.string(),
    email: z.string(),
    heroImage: z.string(),
    disclaimer: z.string(),
    trustPoints: z.array(z.string()),
    valueCards: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      body: z.string(),
    })),
    buyerTypes: z.array(z.string()),
    acquisitionTerms: z.array(z.object({
      label: z.string(),
      detail: z.string(),
    })),
    footerLinks: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })),
  }),
});

export const collections = {
  site: siteCollection,
};
