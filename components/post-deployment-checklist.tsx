import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ListChecks } from "@/components/ui/list-checks"
import { CheckCircle } from "lucide-react"

export function PostDeploymentChecklist() {
  const checklistItems = [
    "Vérifier les logs de déploiement sur Vercel pour toute erreur.",
    "Confirmer que toutes les variables d'environnement sont correctement configurées.",
    "Effectuer un paiement test complet via PayPal en mode Sandbox.",
    "Vérifier la réception de l'email de confirmation de produit via Resend.",
    "Tester l'accès aux produits numériques après un achat simulé.",
    "Vérifier que les données de vente apparaissent dans le tableau de bord.",
    "S'assurer que les liens d'affiliation sont fonctionnels.",
    "Planifier votre stratégie de trafic et de contenu initiale.",
    "Surveiller les performances du site et des ventes régulièrement.",
  ]

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" />
          Checklist Post-Déploiement
        </CardTitle>
        <CardDescription className="text-gray-400">
          Assurez-vous que tout est opérationnel après le déploiement.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ListChecks items={checklistItems} />
        <p className="text-gray-300 mt-4">
          Une fois toutes ces étapes vérifiées, votre système est prêt à générer des revenus réels !
        </p>
      </CardContent>
    </Card>
  )
}
