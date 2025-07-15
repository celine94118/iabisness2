import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ListChecks } from "@/components/ui/list-checks"
import { Lightbulb } from "lucide-react"

export function PostDeploymentReality() {
  const points = [
    "Le déploiement n'est que le début : Le succès dépend de votre stratégie marketing et de votre persévérance.",
    "L'optimisation est continue : Analysez vos données et ajustez vos campagnes pour améliorer les performances.",
    "La création de contenu est clé : Continuez à produire du contenu de valeur pour attirer et engager votre audience.",
    "L'engagement de l'audience : Interagissez avec vos prospects et clients pour bâtir une communauté fidèle.",
    "La patience est une vertu : Les résultats significatifs prennent du temps à se manifester.",
    "L'apprentissage constant : Le monde du marketing digital évolue, restez informé des nouvelles tendances.",
  ]

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          La Réalité Post-Déploiement
        </CardTitle>
        <CardDescription className="text-gray-400">
          Ce qui se passe après le lancement de votre système.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">
          Félicitations pour le déploiement de votre système ! C'est une étape majeure, mais le véritable travail
          commence maintenant.
        </p>
        <ListChecks items={points} />
        <p className="text-gray-300 mt-4">
          Votre système est un outil puissant, mais il nécessite votre stratégie et votre attention pour prospérer.
        </p>
      </CardContent>
    </Card>
  )
}
