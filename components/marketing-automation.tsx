import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ListChecks } from "@/components/ui/list-checks"
import { Megaphone, Share2, Mail, TrendingUp } from "lucide-react"

export function MarketingAutomation() {
  const features = [
    {
      icon: <Megaphone className="w-6 h-6 text-yellow-400" />,
      title: "Génération de Contenu IA",
      description: "Créez rapidement des articles de blog, des descriptions de produits, des scripts vidéo.",
      points: [
        "Rédaction d'articles optimisés pour le SEO.",
        "Génération de titres et de slogans accrocheurs.",
        "Adaptation du contenu à différentes plateformes.",
      ],
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-400" />,
      title: "Auto-Poster Réseaux Sociaux",
      description: "Planifiez et publiez automatiquement sur vos plateformes sociales préférées.",
      points: [
        "Intégration avec Facebook, Twitter, Instagram, LinkedIn.",
        "Programmation de posts pour une présence constante.",
        "Analyse des performances des publications.",
      ],
    },
    {
      icon: <Mail className="w-6 h-6 text-green-400" />,
      title: "Email Marketing Automatisé",
      description: "Construisez des listes d'emails et envoyez des campagnes ciblées.",
      points: [
        "Création de séquences d'emails de bienvenue.",
        "Segmentation de l'audience pour des messages personnalisés.",
        "Suivi des ouvertures, clics et conversions.",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: "Optimisation des Campagnes",
      description: "Analysez et améliorez vos campagnes marketing pour un meilleur ROI.",
      points: [
        "Tableau de bord des performances marketing.",
        "Tests A/B pour les titres, descriptions et appels à l'action.",
        "Recommandations basées sur l'IA pour l'optimisation.",
      ],
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {features.map((feature, index) => (
        <Card key={index} className="bg-gray-800 text-white border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            {feature.icon}
            <CardTitle className="text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <CardDescription className="text-gray-400">{feature.description}</CardDescription>
            <ListChecks items={feature.points} className="text-sm" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
