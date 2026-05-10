"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import GalleryGrid from "@/components/molecules/GalleryGrid";
import PageShell from "@/components/templates/PageShell";
import { staggerContainer, staggerItem } from "@/lib/animations";

const galleryItems = [
    { src: "/assets/generated/realisations-01.webp", alt: "Villa contemporaine — éclairage intégral KNX", span: "large" as const },
    { src: "/assets/generated/realisations-02.webp", alt: "Appartement haussmannien — domotique complète", span: "tall" as const },
    { src: "/assets/generated/realisations-03.webp", alt: "Loft industriel — éclairage d'ambiance", span: "default" as const },
    { src: "/assets/generated/realisations-04.webp", alt: "Jardin paysager — mise en lumière extérieure", span: "wide" as const },
    { src: "/assets/generated/realisations-05.webp", alt: "Salle de bain — éclairage chromothérapie", span: "default" as const },
    { src: "/assets/generated/realisations-06.webp", alt: "Cuisine — plan de travail lumineux", span: "default" as const },
    { src: "/assets/generated/realisations-07.webp", alt: "Tableau électrique KNX sur mesure", span: "default" as const },
    { src: "/assets/generated/realisations-08.webp", alt: "Chambre parentale — scénario nuit", span: "wide" as const },
    { src: "/assets/generated/realisations-09.webp", alt: "Terrasse — éclairage paysager", span: "tall" as const },
];

const projects = [
    {
        title: "Villa Monceau",
        location: "Paris 16e",
        type: "Domotique complète KNX + Lutron",
        year: "2025",
    },
    {
        title: "Loft Bastille",
        location: "Paris 11e",
        type: "Éclairage d'architecture + Hue Pro",
        year: "2024",
    },
    {
        title: "Appartement Passy",
        location: "Paris 16e",
        type: "Rénovation électrique premium",
        year: "2024",
    },
];

export default function RealisationsClient() {
    return (
        <PageShell>
            {/* Hero */}
            <section className="bg-primary min-h-[50vh] md:min-h-[60vh] flex items-end pb-16 md:pb-20">
                <div className="section-padding w-full pt-28">
                    <SectionTitle
                        label="Réalisations"
                        title="Ce que la\nlumière révèle"
                        subtitle="Neuf projets. Neuf écritures de la lumière. De Passy à Neuilly."
                        light
                    />
                </div>
            </section>

            {/* Galerie */}
            <section className="section-padding py-section-sm md:py-section">
                <GalleryGrid items={galleryItems} />
            </section>

            {/* Projets sélectionnés */}
            <section className="bg-primary py-section-sm md:py-section">
                <div className="section-padding">
                    <SectionTitle
                        label="Projets sélectionnés"
                        title="Trois projets,\ntrois écritures"
                        light
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="mt-12 space-y-6"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.title}
                                variants={staggerItem}
                                className="group border border-accent/10 p-8 hover:border-accent/30 transition-all duration-700 cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-accent/50">
                                            {project.year}
                                        </span>
                                        <h3 className="mt-2 font-heading text-2xl md:text-3xl text-surface font-light group-hover:text-accent transition-colors duration-500">
                                            {project.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-surface/40 font-body">
                                            {project.location}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] uppercase tracking-[0.15em] text-surface/30">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageShell>
    );
}