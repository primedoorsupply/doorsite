import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.primedoorpro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Sitio de una sola página: solo la raíz.
  return [{ url: `${base}/`, lastModified: now }];
}
