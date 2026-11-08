import type { MetadataRoute } from "next";
import { services } from "@/data/services";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://softek-labs-website-xi.vercel.app";
  return [
    "",
    ...services.map((s) => `/services/${s.slug}`),
    "/case-studies/multi-warehouse-inventory",
    "/submit-requirement",
    "/privacy-policy",
    "/terms-conditions",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
