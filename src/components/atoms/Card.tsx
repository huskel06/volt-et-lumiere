"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverScale } from "@/lib/animations";

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: "glass" | "glass-light" | "bordered" | "minimal";
    hoverable?: boolean;
}

const variantStyles = {
    glass: "glass-panel",
    "glass-light": "glass-panel-light",
    bordered: "border border-primary/10 bg-transparent",
    minimal: "bg-transparent",
};

export default function Card({
    children,
    className,
    variant = "glass",
    hoverable = false,
}: CardProps) {
    const hoverTransition = {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
    };

    if (hoverable) {
        return (
            <motion.div
                whileHover={{ y: -4 }}
                transition={hoverTransition}
                className={cn(
                    "rounded-lg p-8",
                    variantStyles[variant],
                    "cursor-pointer transition-shadow duration-500 hover:shadow-xl",
                    className
                )}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div
            className={cn(
                "rounded-lg p-8",
                variantStyles[variant],
                className
            )}
        >
            {children}
        </div>
    );
}
