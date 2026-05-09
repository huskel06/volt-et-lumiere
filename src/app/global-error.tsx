"use client";

export const dynamic = "force-dynamic";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body style={{ margin: 0, backgroundColor: "#0A0A14" }}>
                <div
                    style={{
                        display: "flex",
                        minHeight: "100vh",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <h1 style={{ color: "#D4AF37", fontSize: "3rem", margin: 0 }}>
                        Erreur
                    </h1>
                    <p style={{ color: "#F5F5F5", marginTop: "1rem" }}>
                        Une erreur inattendue s'est produite.
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{
                            marginTop: "2rem",
                            padding: "0.75rem 2rem",
                            border: "1px solid #D4AF37",
                            background: "transparent",
                            color: "#D4AF37",
                            cursor: "pointer",
                            fontSize: "0.875rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Réessayer
                    </button>
                </div>
            </body>
        </html>
    );
}