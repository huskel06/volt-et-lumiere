"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import ServiceCard from "@/components/molecules/ServiceCard";
import Badge from "@/components/atoms/Badge";
import PageShell from "@/components/templates/PageShell";
import { staggerContainer, staggerItem } from "@/lib/animations";

const expertises = [
    {
        icon: "lightbulb" as const,
        title: "Éclairage d'architecture",
        description:
            "La lumière comme matériau de construction. Conception et installation de systèmes où chaque source dialogue avec l'espace — du rai de lumière au lavis d'ambiance. Pilotage KNX.",
    },
    {
        icon: "home" as const,
        title: "Domotique KNX",
        description:
            "L'automatisation qui s'efface derrière l'usage. Gestion centralisée de l'éclairage, des volets, du chauffage, de la sécurité. Protocole KNX certifié : interopérabilité, pérennité, silence.",
    },
    {
        icon: "building" as const,
        title: "Installation électrique premium",
        description:
            "L'infrastructure comme signature. Tableaux électriques sur mesure, câblage structuré, systèmes Lutron. Chaque détail compte quand rien ne doit se voir.",
    },
    {
        icon: "sparkle" as const,
        title: "Éclairage paysager",
        description:
            "Prolonger l'architecture dans le jardin. Mise en lumière des espaces extérieurs — façades, terrasses, allées. La nuit comme une nouvelle pièce à vivre.",
    },
    {
        icon: "star" as const,
        title: "Solutions Philips Hue Pro",
        description:
            "L'éclairage connecté sans compromis. Installation et configuration Philips Hue Professional. Partenaire agréé : personnalisation totale, fiabilité professionnelle.",
    },
    {
        icon: "certificate" as const,
        title: "Audit & Conseil",
        description:
            "Un regard neuf sur votre installation. Diagnostic complet, conseils personnalisés pour optimiser votre consommation et moderniser vos équipements. Sans engagement.",
    },
];

const certifications = [
    "Certifié KNX Partner",
    "Partenaire Lutron",
    "Philips Hue Pro Installer",
    "Qualification RGE",
    "Assurance décennale",
];

export default function SavoirFaireClient() {
    return (
        <PageShell>
            {/* Hero */}
            <section className="bg-primary min-h-[60vh] md:min-h-[70vh] flex items-end pb-16 md:pb-20">
                <div className="section-padding w-full pt-28">
                    <SectionTitle
                        label="Notre savoir-faire"
                        title="La technique\ncomme langage\ndu beau"
                        subtitle="15 ans d'électricité premium et de domotique haut de gamme à Paris. Chaque geste technique est un choix esthétique."
                        light
                    />
                </div>
            </section>

            {/* Expertises */}
            <section className="section-padding py-section-sm md:py-section">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {expertises.map((exp, i) => (
                        <motion.div key={exp.title} variants={staggerItem}>
                            <ServiceCard {...exp} index={i} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Certifications */}
            <section className="bg-primary py-section-sm md:py-section">
                <div className="section-padding">
                    <SectionTitle
                        label="Certifications"
                        title="Des labels\nd'excellence"
                        subtitle="Des protocoles qui engagent. Pas de décorations, des standards."
                        light
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12 flex flex-wrap gap-3"
                    >
                        {certifications.map((cert) => (
                            <Badge key={cert} label={cert} variant="gold" />
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "KNX",
                                desc: "Protocole international ouvert. L'assurance d'un système qui dialogue, évolue, dure.",
                            },
                            {
                                title: "Lutron",
                                desc: "Référence mondiale du contrôle lumineux. La précision américaine au service de l'élégance française.",
                            },
                            {
                                title: "Philips Hue Pro",
                                desc: "L'éclairage connecté professionnel. Infiniment flexible, résolument fiable.",
                            },
                        ].map((cert) => (
                            <div key={cert.title} className="border border-accent/10 p-8">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-accent/60">
                                    Partenaire
                                </span>
                                <h3 className="mt-3 font-heading text-2xl text-surface font-light">
                                    {cert.title}
                                </h3>
                                <p className="mt-3 text-sm text-surface/50 font-body font-light leading-relaxed">
                                    {cert.desc}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageShell>
    );
}