"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    label: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    className?: string;
    light?: boolean;
}

export default function SectionTitle({
    label,
    title,
    subtitle,
    align = "left",
    className,
    light = false,
}: SectionTitleProps) {
    return (
        <div className={cn("max-w-xl", align === "center" && "mx-auto text-center", align === "right" && "ml-auto text-right", className)}>
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "block text-[10px] uppercase tracking-[0.25em] mb-4",
                    light ? "text-accent/60" : "text-accent"
                )}
            >
                {label}
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className={cn(
                    "font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight",
                    light ? "text-surface" : "text-primary"
                )}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className={cn(
                        "mt-6 text-sm md:text-base leading-relaxed font-body font-light",
                        light ? "text-surface/60" : "text-primary/60"
                    )}
                >
                    {subtitle}
                </motion.p>
            )}

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className={cn(
                    "h-px w-16 mt-6 origin-left",
                    align === "center" && "mx-auto origin-center",
                    align === "right" && "ml-auto origin-right",
                    light ? "bg-accent/40" : "bg-accent"
                )}
            />
        </div>
    );
}
