"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const baseStyles =
    "w-full bg-transparent border-b border-primary/20 px-0 py-3 text-sm font-body text-primary placeholder:text-primary/30 focus:outline-none focus:border-accent transition-colors duration-500 ease-out-expo";

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className="relative">
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-[10px] uppercase tracking-[0.2em] text-primary/50 mb-2"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={id}
                    className={cn(baseStyles, error && "border-red-500/50", className)}
                    {...props}
                />
                {error && (
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-red-500/70">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className="relative">
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-[10px] uppercase tracking-[0.2em] text-primary/50 mb-2"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={id}
                    className={cn(baseStyles, "min-h-[120px] resize-none", error && "border-red-500/50", className)}
                    {...props}
                />
                {error && (
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-red-500/70">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
