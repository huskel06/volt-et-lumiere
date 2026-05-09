"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import ServiceCard from "@/components/molecules/ServiceCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
    {
        icon: "lightbulb" as const,
        title: "Éclairage d'architecture",
        description:
            "La lumière comme cinquième mur. Scénographies sur mesure où chaque source devient outil architectural — du trait franc au lavis d'ambiance. Conception, installation, programmation.",
    },
    {
        icon: "home" as const,
        title: "Domotique intelligente",
        description:
            "L'intelligence silencieuse du foyer. Automatisation KNX qui anticipe, s'adapte, disparaît. Volets, chauffage, sécurité, éclairage : tout dialogue, rien ne s'impose.",
    },
    {
        icon: "building" as const,
        title: "Résidentiel haut de gamme",
        description:
            "L'installation comme signature. Tableaux électriques pensés comme des pièces d'orfèvrerie, câblages invisibles, partenaires Lutron et Philips Hue Pro pour des systèmes qui traversent les décennies.",
    },
];

export default function ServicesSection() {
    return (
        <section className="section-padding py-section-sm md:py-section">
            <SectionTitle
                label="Notre expertise"
                title="Un savoir-faire\nd'exception"
                subtitle="Chaque projet est unique. Nous concevons des solutions électriques sur mesure qui allient technologie de pointe et esthétique raffinée."
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {services.map((service, i) => (
                    <motion.div key={service.title} variants={staggerItem}>
                        <ServiceCard {...service} index={i} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}