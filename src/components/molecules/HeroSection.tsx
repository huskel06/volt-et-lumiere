"use client";

import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import Icon from "@/components/atoms/Icon";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaLabel?: string;
    ctaHref?: string;
    variant?: "default" | "dark" | "minimal";
    badges?: string[];
}

export default function HeroSection({
    title,
    subtitle,
    ctaLabel = "Demander un devis",
    ctaHref = "/contact",
    variant = "default",
    badges,
}: HeroSectionProps) {
    const isDark = variant === "dark";

    return (
        <section
            className={`relative min-h-screen flex items-center ${isDark ? "bg-primary" : "bg-surface"
                } overflow-hidden`}
        >
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/3 blur-[120px]" />
                <div className="absolute bottom-1/4 -left-20 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-accent/2 blur-[100px]" />
            </div>

            <div className="section-padding w-full pt-24 md:pt-28">
                <div className="max-w-4xl">
                    {badges && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {badges.map((badge) => (
                                <Badge key={badge} label={badge} variant="gold" />
                            ))}
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight text-balance ${isDark ? "text-surface" : "text-primary"
                            }`}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className={`mt-8 text-base md:text-lg max-w-xl leading-relaxed font-body font-light ${isDark ? "text-surface/50" : "text-primary/50"
                            }`}
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a href={ctaHref}>
                            <Button variant="primary" size="lg">{ctaLabel}</Button>
                        </a>
                        <a href="/savoir-faire">
                            <Button variant="outline" size="lg">Découvrir</Button>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[8px] uppercase tracking-[0.3em] text-accent/40">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Icon name="chevron-down" size={14} className="text-accent/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}