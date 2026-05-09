"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Icon from "@/components/atoms/Icon";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/savoir-faire", label: "Savoir-faire" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-header transition-all duration-700 ease-out-expo",
                scrolled
                    ? "bg-primary/80 backdrop-blur-xl border-b border-accent/10"
                    : "bg-transparent"
            )}
        >
            <div className="section-padding flex items-center justify-between h-20 md:h-24">
                <Link href="/" className="relative z-10">
                    <span className="font-heading text-xl md:text-2xl text-surface tracking-tight">
                        Volt<span className="gold-text">&</span>Lumière
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-[11px] uppercase tracking-[0.2em] text-surface/70 hover:text-accent transition-colors duration-500 group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="relative z-10 md:hidden text-surface"
                    aria-label="Menu"
                >
                    <Icon name={menuOpen ? "close" : "menu"} size={22} />
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-overlay bg-primary/98 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-heading text-3xl text-surface hover:text-accent transition-colors duration-500"
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}