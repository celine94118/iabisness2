import type { AffiliateProgram } from "@/types/affiliate"

export const programs: AffiliateProgram[] = [
  {
    id: "clickbank",
    name: "ClickBank",
    description: "Une vaste marketplace de produits numériques dans diverses niches.",
    niche: "Multi-niche (Santé, Finance, E-business, etc.)",
    commission: "Jusqu'à 75%",
    link: "https://www.clickbank.com",
  },
  {
    id: "digistore24",
    name: "Digistore24",
    description: "Plateforme européenne pour les produits numériques et physiques.",
    niche: "Multi-niche (Logiciels, Formations, Fitness, etc.)",
    commission: "Jusqu'à 70%",
    link: "https://www.digistore24.com",
  },
  {
    id: "1tpe",
    name: "1TPE",
    description: "Plateforme d'affiliation francophone spécialisée dans les produits numériques.",
    niche: "Multi-niche (Développement personnel, Marketing, Santé)",
    commission: "Variable, souvent élevée",
    link: "https://www.1tpe.com",
  },
  {
    id: "systemeio",
    name: "Systeme.io",
    description: "Logiciel tout-en-un avec un programme d'affiliation généreux.",
    niche: "Marketing Digital, Business en Ligne",
    commission: "40% de commissions récurrentes",
    link: "https://systeme.io",
  },
  {
    id: "amazon-associates",
    name: "Amazon Partenaires",
    description: "Le programme d'affiliation du géant du e-commerce.",
    niche: "Multi-niche (Produits physiques)",
    commission: "Jusqu'à 10% (selon la catégorie)",
    link: "https://affiliate-program.amazon.fr",
  },
]
