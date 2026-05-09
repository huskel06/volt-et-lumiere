"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryItem {
    src: string;
    alt: string;
    span?: "wide" | "tall" | "large" | "default";
}

interface GalleryGridProps {
    items: GalleryItem[];
    className?: string;
}

const spanStyles = {
    default: "col-span-1 row-span-1",
    wide: "col-span-1 md:col-span-2 row-span-1",
    tall: "col-span-1 row-span-1 md:row-span-2",
    large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
};

export default function GalleryGrid({ items, className }: GalleryGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4",
                className
            )}
        >
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                        delay: i * 0.1,
                    }}
                    className={cn(
                        "relative overflow-hidden group cursor-pointer",
                        spanStyles[item.span ?? "default"]
                    )}
                >
                    <div className="aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden bg-primary/5">
                        <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500">
                        <span className="text-xs text-surface/80 font-body tracking-wide">
                            {item.alt}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}