import { type ContentSection, type HeroHeader } from "@/types/contents";

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Welcome to hChip`,
  subheader: `hChip is a food delivery service that delivers food to your doorstep.`,
  image: `/hero-img.webp`,
};

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `What makes hChip possible`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`,
      icon: "nextjs",
    },
    {
      text: `shadcn/ui`,
      subtext: `Beautifully designed components`,
      icon: "shadcnUi",
    },
    {
      text: `Mr. Manh`,
      subtext: `Develop. Preview. Ship.`,
      icon: "vercel",
    },
  ],
};

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      icon: "fileSearch",
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      icon: "barChart",
    },
    {
      text: `Easy Customizable`,
      subtext: `Change your content and layout with little effort`,
      icon: "settings",
    },
  ],
};
