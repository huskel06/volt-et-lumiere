"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import { Input, Textarea } from "@/components/atoms/Input";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simuler un envoi
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
            >
                <span className="text-4xl block mb-4">✧</span>
                <h3 className="font-heading text-2xl text-primary mb-2">
                    Message reçu
                </h3>
                <p className="text-sm text-primary/50 font-body">
                    Nous vous répondons sous 24h ouvrées. Karim Benali prendra connaissance de votre demande.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                    id="name"
                    label="Nom"
                    placeholder="Prénom, Nom"
                    required
                />
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="adresse@email.com"
                    required
                />
            </div>
            <Input
                id="phone"
                label="Téléphone"
                type="tel"
                placeholder="06 12 34 56 78"
            />
            <Input
                id="subject"
                label="Sujet"
                placeholder="Devis, rendez-vous, conseil..."
            />
            <Textarea
                id="message"
                label="Message"
                placeholder="Adresse du projet, type d'intervention, attentes..."
                required
            />
            <Button type="submit" variant="primary" size="lg" loading={loading}>
                Envoyer la demande
            </Button>
        </motion.form>
    );
}