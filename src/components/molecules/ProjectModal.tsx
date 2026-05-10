"use client";

import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/atoms/Icon";

interface Project {
    title: string;
    location: string;
    type: string;
    year: string;
    image: string;
    description: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-3xl w-full bg-primary border border-accent/20"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 text-accent/50 hover:text-accent transition-colors"
                            aria-label="Fermer"
                        >
                            <Icon name="close" size={20} />
                        </button>

                        <div className="grid md:grid-cols-2">
                            <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-accent/50">
                                    {project.year}
                                </span>
                                <h3 className="mt-3 font-heading text-3xl text-surface font-light">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-sm text-surface/40 font-body">
                                    {project.location}
                                </p>
                                <div className="mt-6 border-t border-accent/10 pt-6">
                                    <span className="text-[10px] uppercase tracking-[0.15em] text-accent/30">
                                        Prestations
                                    </span>
                                    <p className="mt-2 text-sm text-surface/60 font-body leading-relaxed">
                                        {project.type}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <span className="text-[10px] uppercase tracking-[0.15em] text-accent/30">
                                        Description
                                    </span>
                                    <p className="mt-2 text-sm text-surface/50 font-body leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}