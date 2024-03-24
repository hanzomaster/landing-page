import { type ContactConfig, type SiteConfig } from "@/types";

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

export const siteConfig: SiteConfig = {
  name: "hChip",
  author: "Thinh Tran & Manh Nguyen",
  description: "This is a landing page for hChip, a foods delivery service.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "hChip",
    "Food",
    "Landing Page",
  ],
};

export const contactConfig: ContactConfig = {
  email: "thinhrom11@gmail.com",
};
export const config = {
  name: "Store",
  handle: "@accretence",
  url: "https://admin.accretence.com",
  ogImage:
    "https://og-image.vercel.app/Store.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg",
  description:
    "Beautifully designed E-Commerce Admin Panel built with Radix UI and Tailwind CSS.",
  links: {
    twitter: "https://twitter.com/accretence",
    github: "https://github.com/accretence",
  },
};
