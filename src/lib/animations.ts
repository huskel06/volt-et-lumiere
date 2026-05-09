import type { Variants, Transition } from "framer-motion";

/* ─── Transitions ─── */

export const smoothTransition: Transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
};

export const springTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 30,
    mass: 0.8,
};

export const slowTransition: Transition = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
};

/* ─── Scroll Reveal Variants ─── */

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
};

export const fadeInDown: Variants = {
    hidden: {
        opacity: 0,
        y: -60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
};

export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: smoothTransition,
    },
};

export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: smoothTransition,
    },
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: smoothTransition,
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

/* ─── Page Transition ─── */

export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

/* ─── Gold Reveal ─── */

export const goldReveal: Variants = {
    hidden: {
        width: "0%",
    },
    visible: {
        width: "100%",
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
        },
    },
};

/* ─── Counter ─── */

export const counterVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.1,
        },
    }),
};

/* ─── Image Reveal ─── */

export const imageReveal: Variants = {
    hidden: {
        clipPath: "inset(0 0 100% 0)",
    },
    visible: {
        clipPath: "inset(0 0 0% 0)",
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

/* ─── Hover ─── */

export const hoverScale = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
};