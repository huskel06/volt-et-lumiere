import { cn } from "@/lib/utils";

export type IconName =
    | "arrow-right"
    | "arrow-up-right"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "close"
    | "menu"
    | "phone"
    | "mail"
    | "map-pin"
    | "instagram"
    | "linkedin"
    | "certificate"
    | "sparkle"
    | "lightbulb"
    | "home"
    | "building"
    | "star";

interface IconProps {
    name: IconName;
    size?: number;
    className?: string;
}

const paths: Record<IconName, string> = {
    "arrow-right": "M5 12h14m-7-7 7 7-7 7",
    "arrow-up-right": "M7 17L17 7m0 0H7m10 0v10",
    "chevron-down": "m6 9 6 6 6-6",
    "chevron-left": "m15 18-6-6 6-6",
    "chevron-right": "m9 18 6-6-6-6",
    close: "M18 6 6 18M6 6l12 12",
    menu: "M4 6h16M4 12h16M4 18h16",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 4-8 5-8-5",
    "map-pin": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    instagram: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm-5 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5-8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    certificate: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    sparkle: "M12 2l.5 4.5L17 4l-2.5 4.5L20 12l-5.5 1.5L17 18l-4.5-2.5L12 20l-1.5-4.5L6 18l2.5-4.5L3 12l5.5-1.5L6 6l4.5 1.5L12 2z",
    lightbulb: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.272 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    building: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
};

export default function Icon({ name, size = 20, className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("shrink-0", className)}
            aria-hidden="true"
        >
            <path d={paths[name]} />
        </svg>
    );
}
