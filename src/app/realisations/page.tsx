import type { Metadata } from "next";
import RealisationsClient from "./RealisationsClient";

export const metadata: Metadata = {
    title: "Réalisations",
    description:
        "Galerie de projets — Volt & Lumière. Villas, lofts, appartements haussmanniens à Paris et Hauts-de-Seine. Domotique KNX, éclairage d'architecture, solutions Lutron.",
    alternates: {
        canonical: "https://volt-lumiere-paris.fr/realisations",
    },
    openGraph: {
        title: "Réalisations | Volt & Lumière — Électricien Premium Paris",
        description:
            "Galerie de projets — Volt & Lumière. Villas, lofts, appartements haussmanniens à Paris et Hauts-de-Seine.",
    },
};

export default function RealisationsPage() {
    return <RealisationsClient />;
}