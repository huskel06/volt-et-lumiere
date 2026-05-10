import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { jsonLdData } from "@/lib/jsonLdData";

export const metadata: Metadata = {
    metadataBase: new URL("https://volt-lumiere-paris.fr"),
    title: {
        default: "Volt & Lumière — Électricien Premium Paris 16e",
        template: "%s | Volt & Lumière — Électricien Premium Paris",
    },
    description:
        "Volt & Lumière — Électricien premium Paris 16e. Domotique KNX, éclairage d'architecture, installations haut de gamme. Certifié KNX, partenaire Lutron & Philips Hue Pro. Devis sur visite.",
    keywords: [
        "électricien Paris 16e",
        "domotique KNX Paris",
        "éclairage d'architecture",
        "électricien premium Paris",
        "installation électrique haut de gamme",
        "Lutron Paris",
        "Philips Hue Pro Paris",
        "électricien domotique",
        "électricien Neuilly",
        "électricien Hauts-de-Seine",
    ],
    authors: [{ name: "Karim Benali", url: "https://volt-lumiere-paris.fr" }],
    creator: "Volt & Lumière",
    publisher: "Volt & Lumière",
    formatDetection: {
        telephone: true,
        address: true,
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: "Volt & Lumière",
        title: "Volt & Lumière — Électricien Premium Paris 16e",
        description:
            "Domotique KNX, éclairage d'architecture et installations premium. Certifié KNX, partenaire Lutron & Philips Hue Pro. Paris 16e & Hauts-de-Seine.",
        url: "https://volt-lumiere-paris.fr",
        images: [
            {
                url: "/assets/generated/hero-1.svg",
                width: 1200,
                height: 630,
                alt: "Volt & Lumière — Électricien premium Paris",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Volt & Lumière — Électricien Premium Paris 16e",
        description:
            "Domotique KNX, éclairage d'architecture et installations premium. Certifié KNX, partenaire Lutron & Philips Hue Pro.",
        images: ["/assets/generated/hero-1.svg"],
        creator: "@volt-lumiere",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://volt-lumiere-paris.fr",
    },
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
