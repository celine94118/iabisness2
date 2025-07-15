// lib/products.ts
// Définition des produits numériques pré-créés.

export interface DigitalProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  imageUrl: string
  downloadUrl: string // URL du fichier à télécharger après paiement
}

export const digitalProducts: DigitalProduct[] = [
  {
    id: "guide-argent-ligne",
    name: "Guide Ultime pour Gagner de l'Argent en Ligne",
    description:
      "Découvrez les stratégies éprouvées pour générer des revenus passifs et actifs sur internet. Ce guide couvre l'affiliation, le dropshipping, la création de contenu et bien plus encore.",
    price: 29.99,
    currency: "EUR",
    imageUrl: "/placeholder.svg?height=200&width=300", // Placeholder image
    downloadUrl: "/downloads/guide-argent-ligne.pdf", // Example download path
  },
  {
    id: "formation-affiliation-pro",
    name: "Formation Complète en Marketing d'Affiliation",
    description:
      "Maîtrisez l'art du marketing d'affiliation de A à Z. Apprenez à choisir les bonnes niches, à trouver des produits rentables et à optimiser vos campagnes pour un maximum de conversions.",
    price: 99.0,
    currency: "EUR",
    imageUrl: "/placeholder.svg?height=200&width=300", // Placeholder image
    downloadUrl: "/downloads/formation-affiliation.pdf", // Example download path
  },
  {
    id: "pack-templates-reseaux",
    name: "Pack de 100 Templates pour Réseaux Sociaux",
    description:
      "Boostez votre présence sur les réseaux sociaux avec 100 templates professionnels et personnalisables pour Instagram, Facebook, et Pinterest. Gagnez du temps et attirez plus d'audience.",
    price: 19.5,
    currency: "EUR",
    imageUrl: "/placeholder.svg?height=200&width=300", // Placeholder image
    downloadUrl: "/downloads/templates-pack.zip", // Example download path
  },
  {
    id: "strategie-trafic-illimite",
    name: "Stratégie de Trafic Illimité pour Votre Site",
    description:
      "Apprenez à générer un flux constant de visiteurs qualifiés vers votre site web ou vos offres. Ce guide révèle des techniques SEO avancées, des stratégies de publicité payante et des hacks de croissance organique.",
    price: 49.99,
    currency: "EUR",
    imageUrl: "/placeholder.svg?height=200&width=300", // Placeholder image
    downloadUrl: "/downloads/strategie-trafic.pdf", // Example download path
  },
  {
    id: "kit-business-automatise",
    name: "Kit de Démarrage Business Automatisé",
    description:
      "Lancez votre propre business en ligne entièrement automatisé avec ce kit complet. Inclut des outils, des checklists et des stratégies pour minimiser votre intervention quotidienne.",
    price: 149.0,
    currency: "EUR",
    imageUrl: "/placeholder.svg?height=200&width=300", // Placeholder image
    downloadUrl: "/downloads/business-automatise.pdf", // Example download path
  },
]
