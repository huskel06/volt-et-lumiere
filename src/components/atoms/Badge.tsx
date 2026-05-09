import { cn } from "@/lib/utils";

interface BadgeProps {
    label: string;
    variant?: "gold" | "dark" | "outline";
    className?: string;
}

const variantStyles = {
    gold: "gold-gradient text-primary",
    dark: "bg-primary text-surface",
    outline: "border border-accent/30 text-accent bg-transparent",
};

export default function Badge({ label, variant = "gold", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-medium",
                variantStyles[variant],
                className
            )}
        >
            {label}
        </span>
    );
}
