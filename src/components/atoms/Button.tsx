"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-accent text-primary border border-accent hover:bg-accent/90",
    secondary:
        "bg-primary text-surface border border-primary hover:bg-primary/90",
    outline:
        "bg-transparent text-accent border border-accent/40 hover:border-accent hover:bg-accent/5",
    ghost:
        "bg-transparent text-accent border border-transparent hover:border-accent/20",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-5 py-2 text-xs tracking-[0.15em]",
    md: "px-8 py-3 text-sm tracking-[0.12em]",
    lg: "px-12 py-4 text-base tracking-[0.15em]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", loading, children, disabled, ...props }, ref) => {
        return (
            <motion.div
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex"
            >
                <button
                    ref={ref}
                    className={cn(
                        "relative inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.12em] transition-all duration-500 ease-out-expo",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                        "disabled:opacity-40 disabled:cursor-not-allowed",
                        variantStyles[variant],
                        sizeStyles[size],
                        className
                    )}
                    disabled={disabled || loading}
                    {...props}
                >
                    {loading && (
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        </span>
                    )}
                    <span className={cn(loading && "opacity-0")}>{children}</span>
                </button>
            </motion.div>
        );
    }
);

Button.displayName = "Button";

export default Button;
