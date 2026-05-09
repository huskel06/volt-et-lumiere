"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import { staggerContainer, staggerItem } from "@/lib/animations";

const team = [
    {
        name: "Karim Benali",
        role: "Fondateur & Électricien premium",
        desc: "15 ans d'électricité haut de gamme. Certifié KNX Partner, formé aux systèmes Lutron et Philips Hue Pro. Il signe chaque installation.",
    },
    {
        name: "Sophie Moreau",
        role: "Chef de projet domotique",
        desc: "Architecte de formation. Elle conçoit les scénarios d'automatisation et coordonne chaque intervention avec la précision d'une chef d'orchestre.",
    },
    {
        name: "Thomas Lefèvre",
        role: "Technicien éclairagiste",
        desc: "Spécialiste en conception lumière. Il transforme les plans en ambiances, les spécifications en émotions lumineuses.",
    },
];

export default function TeamSection() {
    return (
        <section className="section-padding py-section-sm md:py-section">
            <SectionTitle
                label="L'équipe"
                title="Trois regards,\nune exigence"
                subtitle="Une équipe réduite. Chacun son domaine, chacun sa signature."
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {team.map((member) => (
                    <motion.div
                        key={member.name}
                        variants={staggerItem}
                        className="border border-primary/5 p-8 hover:border-accent/20 transition-all duration-700"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/5 mb-6 flex items-center justify-center">
                            <span className="font-heading text-xl text-accent/60">
                                {member.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                        </div>
                        <h3 className="font-heading text-xl text-primary font-light">
                            {member.name}
                        </h3>
                        <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-accent/60">
                            {member.role}
                        </span>
                        <p className="mt-4 text-sm text-primary/50 font-body leading-relaxed">
                            {member.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}