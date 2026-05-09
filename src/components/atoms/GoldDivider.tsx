"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GoldDividerProps {
    className?: string;
    width?: string;
}

export default function GoldDivider({ className, width = "w-24" }: GoldDividerProps) {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={cn("h-px gold-gradient origin-left", width, className)}
        />
    );
}
