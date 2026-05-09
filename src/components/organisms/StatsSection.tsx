"use client";

import { motion } from "framer-motion";

const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "200+", label: "Projets réalisés" },
    { number: "100%", label: "Clients satisfaits" },
    { number: "3", label: "Certifications premium" },
];

export default function StatsSection() {
    return (
        <section className="section-padding py-section-sm md:py-section">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                    >
                        <span className="block font-heading text-4xl md:text-5xl gold-text font-light">
                            {stat.number}
                        </span>
                        <span className="block mt-2 text-[10px] uppercase tracking-[0.2em] text-primary/40">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}