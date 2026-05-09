"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "@/components/atoms/Icon";

const footerLinks = [
    { href: "/savoir-faire", label: "Savoir-faire" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/mentions-legales", label: "Mentions légales" },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-surface">
            <div className="section-padding py-20 md:py-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/" className="font-heading text-2xl text-surface tracking-tight">
                            Volt<span className="gold-text">&</span>Lumière
                        </Link>
                        <p className="mt-4 text-xs text-surface/40 leading-relaxed max-w-xs font-body">
                            Électricien premium — domotique, éclairage d'architecture, résidentiel haut de gamme.
                            Paris 16e & Hauts-de-Seine.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <h4 className="text-[10px] uppercase tracking-[0.25em] text-accent/60 mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-surface/50 hover:text-accent transition-colors duration-500"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <h4 className="text-[10px] uppercase tracking-[0.25em] text-accent/60 mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+33123456789"
                                    className="flex items-center gap-3 text-sm text-surface/50 hover:text-accent transition-colors duration-500"
                                >
                                    <Icon name="phone" size={14} className="text-accent/40" />
                                    01 23 45 67 89
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@volt-lumiere-paris.fr"
                                    className="flex items-center gap-3 text-sm text-surface/50 hover:text-accent transition-colors duration-500"
                                >
                                    <Icon name="mail" size={14} className="text-accent/40" />
                                    contact@volt-lumiere-paris.fr
                                </a>
                            </li>
                            <li>
                                <span className="flex items-center gap-3 text-sm text-surface/50">
                                    <Icon name="map-pin" size={14} className="text-accent/40" />
                                    Paris 16e
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 pt-8 border-t border-surface/10 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-[10px] uppercase tracking-[0.15em] text-surface/30">
                        © {new Date().getFullYear()} Volt & Lumière — Tous droits réservés
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-surface/20">
                        Certifié KNX — Partenaire Lutron & Philips Hue Pro
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}