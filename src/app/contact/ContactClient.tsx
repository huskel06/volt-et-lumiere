"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContactForm from "@/components/molecules/ContactForm";
import Icon from "@/components/atoms/Icon";
import PageShell from "@/components/templates/PageShell";

const contactInfo = [
    {
        icon: "phone" as const,
        label: "Téléphone",
        value: "01 23 45 67 89",
        href: "tel:+33123456789",
    },
    {
        icon: "mail" as const,
        label: "Email",
        value: "contact@volt-lumiere-paris.fr",
        href: "mailto:contact@volt-lumiere-paris.fr",
    },
    {
        icon: "map-pin" as const,
        label: "Adresse",
        value: "Paris 16e — Interventions dans tout Paris et Hauts-de-Seine",
        href: null,
    },
];

export default function ContactClient() {
    return (
        <PageShell>
            {/* Hero */}
            <section className="bg-primary min-h-[50vh] md:min-h-[60vh] flex items-end pb-16 md:pb-20">
                <div className="section-padding w-full pt-28">
                    <SectionTitle
                        label="Contact"
                        title="Une adresse\nsuffit"
                        subtitle="Devis sur visite uniquement. C'est la seule manière de comprendre un espace."
                        light
                    />
                </div>
            </section>

            {/* Contact */}
            <section className="section-padding py-section-sm md:py-section">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-20">
                    {/* Infos */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-2 space-y-10"
                    >
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                                Nos coordonnées
                            </span>
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl text-primary font-light leading-[1.1]">
                                Prenez rendez-vous
                            </h2>
                            <p className="mt-4 text-sm text-primary/50 font-body leading-relaxed">
                                Déplacement offert à Paris et Hauts-de-Seine. Une visite, un diagnostic, un devis. Dans cet ordre.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-start gap-4">
                                    <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-accent/20 rounded-full">
                                        <Icon name={info.icon} size={16} className="text-accent" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-[0.15em] text-primary/40">
                                            {info.label}
                                        </span>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="mt-1 block text-sm text-primary hover:text-accent transition-colors duration-500 font-body"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="mt-1 block text-sm text-primary font-body">
                                                {info.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-primary/10 pt-8">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-primary/40">
                                Horaires
                            </span>
                            <div className="mt-3 space-y-1 text-sm text-primary/60 font-body">
                                <p>Lun — Ven : 8h30 — 18h30</p>
                                <p>Sam : sur rendez-vous</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="md:col-span-3"
                    >
                        <div className="border border-primary/5 p-8 md:p-12">
                            <h3 className="font-heading text-2xl text-primary font-light mb-8">
                                Envoyez-nous un message
                            </h3>
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Carte */}
            <section className="h-[300px] md:h-[400px] bg-primary/5 flex items-center justify-center">
                <div className="text-center">
                    <Icon name="map-pin" size={32} className="text-accent/30 mx-auto" />
                    <p className="mt-4 text-sm text-primary/30 font-body">
                        Paris 16e — Interventions dans tout Paris et Hauts-de-Seine
                    </p>
                </div>
            </section>
        </PageShell>
    );
}