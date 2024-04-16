import * as z from "zod";

export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
};

export type ContactConfig = {
  email: string;
};

export type Settings = {
  themeToggleEnabled: boolean;
};

export type Layout = {
  heroHeader: string;
  featureCards: string;
  headers: {
    featureCards: string;
    features: string;
  };
};

export const ApiResponseSchema = z.object({
  result: z.object({
    data: z.array(z.any()),
    count: z.number(),
    totalCount: z.number(),
    page: z.number(),
    size: z.number(),
    totalPage: z.number(),
  }),
});

export type ApiResponse = z.infer<typeof ApiResponseSchema>;
