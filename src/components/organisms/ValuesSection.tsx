"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import { staggerContainer, staggerItem } from "@/lib/animations";

const values = [
    {
        number: "01",
        title: "Exigence",
        desc: "Chaque câble, chaque connexion, chaque programmation. Rien n'est laissé au hasard quand l'installation doit durer 20 ans.",
    },
    {
        number: "02",
        title: "Esthétique",
        desc: "L'électricité ne se cache plus. Elle s'expose, se met en scène, devient élément architectural. Le câble apparent comme le vide en peinture.",
    },
    {
        number: "03",
        title: "Innovation",
        desc: "Les technologies les plus avancées, oui. Mais seulement quand elles apportent une différence sensible. La nouveauté pour la nouveauté ne nous intéresse pas.",
    },
    {
        number: "04",
        title: "Confiance",
        desc: "Transparence, écoute, conseil désintéressé. Un projet réussi, c'est d'abord une relation construite dans la durée.",
    },
];

export default function ValuesSection() {
    return (
        <section className="bg-primary py-section-sm md:py-section">
            <div className="section-padding">
                <SectionTitle
                    label="Nos valeurs"
                    title="Ce qui nous\ndistingue"
                    light
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {values.map((v) => (
                        <motion.div
                            key={v.number}
                            variants={staggerItem}
                            className="border border-accent/10 p-8 hover:border-accent/30 transition-all duration-700"
                        >
                            <span className="font-heading text-5xl text-accent/20 font-light">
                                {v.number}
                            </span>
                            <h3 className="mt-4 font-heading text-xl text-surface font-light">
                                {v.title}
                            </h3>
                            <p className="mt-3 text-sm text-surface/50 font-body leading-relaxed">
                                {v.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}