"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Icon from "@/components/atoms/Icon";
import type { IconName } from "@/components/atoms/Icon";

interface ServiceCardProps {
    icon: IconName;
    title: string;
    description: string;
    index?: number;
    className?: string;
}

export default function ServiceCard({
    icon,
    title,
    description,
    index = 0,
    className,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
            }}
            className={cn(
                "group relative p-8 md:p-10 border border-primary/5 hover:border-accent/20 transition-all duration-700",
                className
            )}
        >
            {/* Ligne décorative */}
            <div className="absolute top-0 left-0 w-12 h-px bg-accent/40" />

            <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-accent/20 rounded-full">
                    <Icon name={icon} size={20} className="text-accent" />
                </div>
                <div>
                    <h3 className="font-heading text-xl md:text-2xl text-primary mb-3 font-light">
                        {title}
                    </h3>
                    <p className="text-sm text-primary/50 leading-relaxed font-body font-light">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}