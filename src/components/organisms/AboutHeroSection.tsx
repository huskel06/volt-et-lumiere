"use client";

import SectionTitle from "@/components/atoms/SectionTitle";

export default function AboutHeroSection() {
    return (
        <section className="bg-primary min-h-[50vh] md:min-h-[60vh] flex items-end pb-16 md:pb-20">
            <div className="section-padding w-full pt-28">
                <SectionTitle
                    label="À propos"
                    title="L'électricité\ncomme langage"
                    subtitle="Volt & Lumière est né d'une conviction : l'installation électrique mérite le même soin que la plus belle des architectures."
                    light
                />
            </div>
        </section>
    );
}