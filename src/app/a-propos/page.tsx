import type { Metadata } from "next";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
    title: "À propos",
    description:
        "Volt & Lumière — Karim Benali, électricien premium Paris 16e. 15 ans d'expérience, certifié KNX, partenaire Lutron & Philips Hue Pro. Une équipe de 3 experts.",
    alternates: {
        canonical: "https://volt-lumiere-paris.fr/a-propos",
    },
    openGraph: {
        title: "À propos | Volt & Lumière — Électricien Premium Paris",
        description:
            "Volt & Lumière — Karim Benali, électricien premium Paris 16e. 15 ans d'expérience, certifié KNX, partenaire Lutron & Philips Hue Pro.",
    },
};

export default function AProposPage() {
    return <AProposClient />;
}