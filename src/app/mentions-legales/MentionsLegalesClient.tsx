"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import PageShell from "@/components/templates/PageShell";

export default function MentionsLegalesClient() {
    return (
        <PageShell>
            {/* Hero */}
            <section className="bg-primary min-h-[40vh] flex items-end pb-16 md:pb-20">
                <div className="section-padding w-full pt-28">
                    <SectionTitle
                        label="Mentions légales"
                        title="Informations\nlégales"
                        light
                    />
                </div>
            </section>

            {/* Contenu */}
            <section className="section-padding py-section-sm md:py-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mx-auto space-y-12"
                >
                    <div>
                        <h2 className="font-heading text-2xl text-primary font-light mb-4">
                            1. Édition du site
                        </h2>
                        <div className="space-y-2 text-sm text-primary/50 font-body leading-relaxed">
                            <p>
                                <strong className="text-primary/70">Raison sociale :</strong> Volt & Lumière
                            </p>
                            <p>
                                <strong className="text-primary/70">Responsable :</strong> Karim Benali
                            </p>
                            <p>
                                <strong className="text-primary/70">Adresse :</strong> Paris 16e, France
                            </p>
                            <p>
                                <strong className="text-primary/70">SIRET :</strong> 789 456 123 00028
                            </p>
                            <p>
                                <strong className="text-primary/70">Téléphone :</strong> 01 23 45 67 89
                            </p>
                            <p>
                                <strong className="text-primary/70">Email :</strong> contact@volt-lumiere-paris.fr
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-primary font-light mb-4">
                            2. Hébergement
                        </h2>
                        <div className="space-y-2 text-sm text-primary/50 font-body leading-relaxed">
                            <p>
                                <strong className="text-primary/70">Hébergeur :</strong> Vercel Inc.
                            </p>
                            <p>
                                <strong className="text-primary/70">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                            </p>
                            <p>
                                <strong className="text-primary/70">Site :</strong> vercel.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-primary font-light mb-4">
                            3. Propriété intellectuelle
                        </h2>
                        <p className="text-sm text-primary/50 font-body leading-relaxed">
                            L'ensemble du contenu du site volt-lumiere-paris.fr (textes, images,
                            vidéos, logos, etc.) est la propriété exclusive de Volt & Lumière, sauf
                            mention contraire. Toute reproduction, distribution, modification ou
                            utilisation de ces contenus sans autorisation préalable est strictement
                            interdite.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-primary font-light mb-4">
                            4. Protection des données
                        </h2>
                        <p className="text-sm text-primary/50 font-body leading-relaxed">
                            Les informations collectées via le formulaire de contact sont destinées
                            exclusivement à Volt & Lumière pour le traitement de votre demande.
                            Conformément au RGPD, vous disposez d'un droit d'accès, de
                            rectification et de suppression de vos données. Pour exercer ce droit,
                            contactez-nous à contact@volt-lumiere-paris.fr.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-primary font-light mb-4">
                            5. Cookies
                        </h2>
                        <p className="text-sm text-primary/50 font-body leading-relaxed">
                            Ce site n'utilise pas de cookies tiers. Seuls des cookies techniques
                            strictement nécessaires au fonctionnement du site peuvent être déposés.
                            Aucun suivi publicitaire ou analytique n'est mis en œuvre sans votre
                            consentement explicite.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl text-primary font-light mb-4">
                            6. Responsabilité
                        </h2>
                        <p className="text-sm text-primary/50 font-body leading-relaxed">
                            Volt & Lumière s'efforce d'assurer l'exactitude des
                            informations présentées sur ce site. Nous ne saurions être tenus
                            responsables des erreurs, omissions ou des résultats obtenus suite à
                            l'utilisation de ces informations.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-primary/10">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-primary/30">
                            Dernière mise à jour : Mai 2026
                        </p>
                    </div>
                </motion.div>
            </section>
        </PageShell>
    );
}