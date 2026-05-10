export const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://volt-lumiere-paris.fr/#business",
    name: "Volt & Lumière",
    alternateName: "Volt et Lumière",
    description:
        "Électricien premium spécialisé en domotique KNX, éclairage d'architecture et installations résidentielles haut de gamme à Paris 16e et Hauts-de-Seine.",
    url: "https://volt-lumiere-paris.fr",
    telephone: "+33123456789",
    email: "contact@volt-lumiere-paris.fr",
    founder: {
        "@type": "Person",
        name: "Karim Benali",
    },
    foundingDate: "2011",
    priceRange: "€€€",
    image: "https://volt-lumiere-paris.fr/assets/generated/hero-1.svg",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
        postalCode: "75016",
        streetAddress: "Paris 16e",
    },
    geo: {
        "@type": "GeoCircle",
        geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 48.8635,
            longitude: 2.2768,
        },
        geoRadius: "15000",
    },
    areaServed: [
        {
            "@type": "City",
            name: "Paris",
            sameAs: "https://fr.wikipedia.org/wiki/Paris",
        },
        {
            "@type": "AdministrativeArea",
            name: "Hauts-de-Seine",
            sameAs: "https://fr.wikipedia.org/wiki/Hauts-de-Seine",
        },
    ],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "18:30",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "17:00",
            description: "Sur rendez-vous uniquement",
        },
    ],
    sameAs: [
        "https://volt-lumiere-paris.fr",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services d'électricité premium",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Domotique KNX",
                    description:
                        "Automatisation intelligente du foyer : éclairage, volets, chauffage, sécurité. Protocole KNX certifié.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Éclairage d'architecture",
                    description:
                        "Scénographies lumineuses sur mesure. Conception, installation et programmation d'éclairage architectural.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Installation électrique premium",
                    description:
                        "Tableaux électriques sur mesure, câblage structuré, systèmes Lutron. Installations résidentielles haut de gamme.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Éclairage paysager",
                    description:
                        "Mise en lumière des espaces extérieurs : façades, terrasses, allées, jardins.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Solutions Philips Hue Pro",
                    description:
                        "Installation et configuration Philips Hue Professional. Partenaire agréé.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Audit & Conseil",
                    description:
                        "Diagnostic complet de l'installation électrique. Conseils personnalisés pour optimiser consommation et moderniser les équipements.",
                },
            },
        ],
    },
    knowsAbout: [
        {
            "@type": "Thing",
            name: "KNX",
            description: "Protocole international ouvert pour la domotique et l'automatisation des bâtiments.",
        },
        {
            "@type": "Thing",
            name: "Lutron",
            description: "Système de contrôle lumineux et d'ombrage haut de gamme.",
        },
        {
            "@type": "Thing",
            name: "Philips Hue",
            description: "Éclairage connecté professionnel.",
        },
    ],
    identifier: {
        "@type": "PropertyValue",
        propertyID: "SIRET",
        value: "78945612300028",
    },
    vatID: "FR87789456123",
    award: [
        "Certifié KNX Partner",
        "Partenaire Lutron",
        "Philips Hue Pro Installer",
        "Qualification RGE",
    ],
    numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 3,
        maxValue: 5,
    },
    review: [
        {
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: 4.9,
                bestRating: 5,
            },
            author: {
                "@type": "Person",
                name: "Clients Volt & Lumière",
            },
        },
    ],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        bestRating: 5,
        ratingCount: 50,
    },
};