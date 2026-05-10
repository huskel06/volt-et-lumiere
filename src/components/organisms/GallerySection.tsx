"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import GalleryGrid from "@/components/molecules/GalleryGrid";
import Button from "@/components/atoms/Button";

const galleryItems = [
    { src: "/images/home-gallery-01.webp", alt: "Éclairage d'ambiance salon contemporain", span: "large" as const },
    { src: "/images/home-gallery-02.webp", alt: "Domotique cuisine intelligente", span: "tall" as const },
    { src: "/images/home-gallery-03.webp", alt: "Éclairage extérieur jardin", span: "default" as const },
    { src: "/images/home-gallery-04.webp", alt: "Tableau électrique KNX", span: "wide" as const },
    { src: "/images/home-gallery-05.webp", alt: "Ambiance lumineuse chambre", span: "default" as const },
    { src: "/images/home-gallery-06.webp", alt: "Éclairage salle de bain", span: "default" as const },
];

export default function GallerySection() {
    return (
        <section className="bg-primary py-section-sm md:py-section">
            <div className="section-padding">
                <SectionTitle
                    label="Réalisations"
                    title="Des projets\nqui illuminent"
                    subtitle="Six projets. Six manières de travailler la matière électrique. De l'appartement haussmannien au loft d'architecte."
                    light
                />

                <div className="mt-12 md:mt-16">
                    <GalleryGrid items={galleryItems} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <a href="/realisations">
                        <Button variant="outline" size="lg">
                            Voir toutes nos réalisations
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}