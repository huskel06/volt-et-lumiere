import type { Metadata } from "next";
import MentionsLegalesClient from "./MentionsLegalesClient";

export const metadata: Metadata = {
    title: "Mentions légales",
    description:
        "Mentions légales — Volt & Lumière, électricien premium Paris 16e. Informations juridiques, protection des données, crédits du site.",
    alternates: {
        canonical: "https://volt-lumiere-paris.fr/mentions-legales",
    },
    robots: {
        index: false,
        follow: true,
    },
    openGraph: {
        title: "Mentions légales | Volt & Lumière",
        description:
            "Mentions légales — Volt & Lumière, électricien premium Paris 16e.",
    },
};

export default function MentionsLegalesPage() {
    return <MentionsLegalesClient />;
}