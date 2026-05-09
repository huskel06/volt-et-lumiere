import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Volt & Lumière — Électricien Premium Paris 16e",
    description:
        "Volt & Lumière — Électricien premium Paris 16e. Domotique KNX, éclairage d'architecture, installations haut de gamme. Certifié KNX, partenaire Lutron & Philips Hue Pro. Devis sur visite.",
    alternates: {
        canonical: "https://volt-lumiere-paris.fr",
    },
    openGraph: {
        title: "Volt & Lumière — Électricien Premium Paris 16e",
        description:
            "Domotique KNX, éclairage d'architecture et installations premium. Certifié KNX, partenaire Lutron & Philips Hue Pro. Paris 16e & Hauts-de-Seine.",
    },
};

export default function HomePage() {
    return <HomeClient />;
}