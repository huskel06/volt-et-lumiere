"use client";

import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/lib/animations";

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={pathname}
                variants={pageTransition}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}