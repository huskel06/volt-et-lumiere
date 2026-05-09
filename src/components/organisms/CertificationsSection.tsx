"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import Badge from "@/components/atoms/Badge";

export default function CertificationsSection() {
    return (
        <section className="bg-primary py-section-sm md:py-section">
            <div className="section-padding text-center">
                <SectionTitle
                    label="Reconnaissances"
                    title="Des protocoles,\npas des décorations"
                    align="center"
                    light
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-10 flex flex-wrap justify-center gap-3"
                >
                    <Badge label="Certifié KNX Partner" variant="gold" />
                    <Badge label="Partenaire Lutron" variant="gold" />
                    <Badge label="Philips Hue Pro Installer" variant="gold" />
                    <Badge label="Qualification RGE" variant="gold" />
                    <Badge label="Assurance décennale" variant="gold" />
                </motion.div>
            </div>
        </section>
    );
}