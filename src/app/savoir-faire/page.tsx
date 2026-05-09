import type { Metadata } from "next";
import SavoirFaireClient from "./SavoirFaireClient";

export const metadata: Metadata = {
    title: "Savoir-faire",
    description:
        "Découvrez l'expertise Volt & Lumière : éclairage d'architecture, domotique KNX, installations premium, éclairage paysager, Philips Hue Pro, audit-conseil. Certifié KNX Partner Paris.",
    alternates: {
        canonical: "https://volt-lumiere-paris.fr/savoir-faire",
    },
    openGraph: {
        title: "Savoir-faire | Volt & Lumière — Électricien Premium Paris",
        description:
            "Découvrez l'expertise Volt & Lumière : éclairage d'architecture, domotique KNX, installations premium, éclairage paysager, Philips Hue Pro, audit-conseil.",
    },
};

export default function SavoirFairePage() {
    return <SavoirFaireClient />;
}