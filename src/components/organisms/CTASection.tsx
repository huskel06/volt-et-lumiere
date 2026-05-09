"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";

export default function CTASection() {
    return (
        <section className="bg-primary py-section-sm md:py-section">
            <div className="section-padding text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading text-3xl md:text-5xl text-surface font-light"
                >
                    Un projet à réaliser ?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 text-sm text-surface/50 max-w-md mx-auto font-body"
                >
                    Devis sur visite uniquement. Déplacement offert à Paris et Hauts-de-Seine.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8"
                >
                    <a href="/contact">
                        <Button variant="primary" size="lg">
                            Demander un devis
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}