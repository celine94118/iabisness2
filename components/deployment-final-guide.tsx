import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ListChecks } from "@/components/ui/list-checks"
import { CheckCircle, Rocket, Settings } from "lucide-react"

export function DeploymentFinalGuide() {
  const steps = [
    {
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      title: "1. Vérifiez vos variables d'environnement",
      description: "Assurez-vous que toutes les clés API (PayPal, Resend) sont correctement configurées sur Vercel.",
      details: [
        "NEXT_PUBLIC_PAYPAL_CLIENT_ID",
        "PAYPAL_CLIENT_SECRET",
        "NEXT_PUBLIC_PAYPAL_SANDBOX_MODE",
        "RESEND_API_KEY",
        "NEXT_PUBLIC_VERCEL_URL",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: "2. Effectuez un test de bout en bout",
      description: "Simulez un achat complet pour vérifier le processus de paiement et l'envoi d'emails.",
      details: [
        "Utilisez un produit test et des identifiants PayPal Sandbox.",
        "Vérifiez que le paiement est bien enregistré.",
        "Confirmez la réception de l'email de confirmation de produit.",
      ],
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: "3. Lancez votre système en production",
      description: "Passez votre système en mode réel et commencez à générer des revenus.",
      details: [
        "Désactivez le mode Sandbox pour PayPal.",
        "Promouvez vos produits sur vos canaux marketing.",
        "Surveillez votre tableau de bord des ventes.",
      ],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      {steps.map((step, index) => (
        <Card key={index} className="bg-gray-800 text-white border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            {step.icon}
            <CardTitle className="text-xl">{step.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <CardDescription className="text-gray-400">{step.description}</CardDescription>
            <ListChecks items={step.details} className="text-sm" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
