import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/"],
        },
        sitemap: "https://volt-lumiere-paris.fr/sitemap.xml",
    };
}