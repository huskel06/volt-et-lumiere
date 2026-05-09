"use client";

import AboutHeroSection from "@/components/organisms/AboutHeroSection";
import HistorySection from "@/components/organisms/HistorySection";
import ValuesSection from "@/components/organisms/ValuesSection";
import TeamSection from "@/components/organisms/TeamSection";
import CertificationsSection from "@/components/organisms/CertificationsSection";
import PageShell from "@/components/templates/PageShell";

export default function AProposClient() {
    return (
        <PageShell>
            <AboutHeroSection />
            <HistorySection />
            <ValuesSection />
            <TeamSection />
            <CertificationsSection />
        </PageShell>
    );
}