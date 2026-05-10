"use client";

import HeroSection from "@/components/molecules/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import GallerySection from "@/components/organisms/GallerySection";
import StatsSection from "@/components/organisms/StatsSection";
import CTASection from "@/components/organisms/CTASection";
import PageShell from "@/components/templates/PageShell";

export default function HomeClient() {
    return (
        <PageShell>
            <HeroSection
                title="L'électricité\ncomme matière"
                subtitle="Domotique, éclairage d'architecture et installations premium. Paris 16e & Hauts-de-Seine. Certifié KNX, partenaire Lutron et Philips Hue Pro."
                badges={["Certifié KNX", "Partenaire Lutron", "Philips Hue Pro"]}
                bgImage="/images/hero-bg.webp"
                portraitImage="/images/hero-portrait.webp"
            />

            <ServicesSection />
            <GallerySection />
            <StatsSection />
            <CTASection />
        </PageShell>
    );
}