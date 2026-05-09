"use client";

import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { useLenis } from "@/lib/lenis";
import { pageTransition } from "@/lib/animations";

export default function PageShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    useLenis();

    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
}