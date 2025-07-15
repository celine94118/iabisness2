import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function RealRevenueWarning() {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-400" />
          Avertissement : Générer de Vrais Revenus
        </CardTitle>
        <CardDescription className="text-gray-400">
          Comprendre les efforts nécessaires au-delà du déploiement.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">
          Votre système automatisé est un outil puissant, mais il ne générera pas de revenus par magie. Le succès
          dépendra de votre capacité à :
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>
            **Générer du trafic qualifié :** Attirer des visiteurs intéressés par vos produits ou offres d'affiliation.
          </li>
          <li>**Créer du contenu de valeur :** Éduquer et engager votre audience pour établir votre autorité.</li>
          <li>
            **Optimiser vos campagnes :** Analyser les données et ajuster vos stratégies pour améliorer les conversions.
          </li>
          <li>
            **Faire preuve de persévérance :** Les résultats prennent du temps et nécessitent des efforts continus.
          </li>
        </ul>
        <p className="text-gray-300 mt-4">
          Ce système automatise les tâches techniques, mais la stratégie marketing et l'engagement sont entre vos mains.
        </p>
      </CardContent>
    </Card>
  )
}
