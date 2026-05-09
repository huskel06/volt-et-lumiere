import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contactez Volt & Lumière — Électricien premium Paris 16e. Devis sur visite uniquement. Déplacement offert à Paris et Hauts-de-Seine. Tél. 01 23 45 67 89.",
    alternates: {
        canonical: "https://volt-lumiere-paris.fr/contact",
    },
    openGraph: {
        title: "Contact | Volt & Lumière — Électricien Premium Paris",
        description:
            "Contactez Volt & Lumière — Électricien premium Paris 16e. Devis sur visite uniquement. Déplacement offert à Paris et Hauts-de-Seine.",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}