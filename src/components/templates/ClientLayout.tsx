"use client";

import { type ReactNode } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import { useLenis } from "@/lib/lenis";

const PageTransition = dynamic(
    () => import("@/components/templates/PageTransition"),
    { ssr: false }
);

export default function ClientLayout({ children }: { children: ReactNode }) {
    useLenis();

    return (
        <>
            <Header />
            <PageTransition>{children}</PageTransition>
            <Footer />
        </>
    );
}
