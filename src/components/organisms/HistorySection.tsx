"use client";

import { motion } from "framer-motion";

export default function HistorySection() {
    return (
        <section className="section-padding py-section-sm md:py-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                        Notre histoire
                    </span>
                    <h2 className="mt-4 font-heading text-3xl md:text-4xl text-primary font-light leading-[1.1]">
                        Karim Benali n'a pas fondé Volt & Lumière pour faire de l'électricité. Il l'a fondée pour ne plus en faire comme les autres.
                    </h2>
                    <div className="mt-6 space-y-4 text-sm text-primary/50 font-body leading-relaxed">
                        <p>
                            15 ans à intervenir sur les plus belles résidences parisiennes. 15 ans à constater le même vide : aucun électricien ne traitait l'installation comme un matériau d'architecture à part entière.
                        </p>
                        <p>
                            Volt & Lumière est né de cette absence. Une offre premium où la technologie sert l'esthétique, où l'installation se fait discrète pour laisser la lumière s'exprimer.
                        </p>
                        <p>
                            Basé Paris 16e, nous intervenons dans tout Paris intramuros et les Hauts-de-Seine. Architectes d'intérieur, promoteurs prestige, particuliers exigeants : même exigence, même silence.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="aspect-[4/5] bg-primary/5 overflow-hidden"
                >
                    <img
                        src="/images/hero-portrait.webp"
                        alt="Atelier Volt & Lumière"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
}