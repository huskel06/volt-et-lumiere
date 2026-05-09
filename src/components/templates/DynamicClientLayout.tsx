"use client";

import { type ReactNode } from "react";
import dynamic from "next/dynamic";

const ClientLayout = dynamic(
    () => import("@/components/templates/ClientLayout"),
    { ssr: false }
);

export default function DynamicClientLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <ClientLayout>{children}</ClientLayout>;
}