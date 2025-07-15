import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ListChecks } from "@/components/ui/list-checks"
import { CreditCard, CheckCircle, DollarSign } from "lucide-react"

export function PaypalStepByStep() {
  const steps = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-400" />,
      title: "1. Obtenez vos identifiants PayPal",
      description: "Créez un compte développeur PayPal et récupérez votre Client ID et Client Secret.",
      details: [
        "Visitez developer.paypal.com/dashboard.",
        "Créez une application REST API (mode Sandbox pour les tests, Live pour la production).",
        "Copiez le Client ID et le Client Secret.",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: "2. Configurez les variables d'environnement",
      description: "Ajoutez vos identifiants PayPal aux variables d'environnement de votre projet Vercel.",
      details: [
        "NEXT_PUBLIC_PAYPAL_CLIENT_ID (pour le client)",
        "PAYPAL_CLIENT_SECRET (pour le serveur)",
        "NEXT_PUBLIC_PAYPAL_SANDBOX_MODE (true/false)",
        "RESEND_API_KEY (pour l'envoi d'emails)",
        "NEXT_PUBLIC_VERCEL_URL (l'URL de votre déploiement)",
      ],
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
      title: "3. Testez les paiements",
      description: "Utilisez le mode Sandbox pour simuler des transactions sans argent réel.",
      details: [
        "Créez des comptes PayPal Sandbox (acheteur et vendeur).",
        "Effectuez un achat test sur votre plateforme.",
        "Vérifiez que la transaction apparaît dans votre tableau de bord PayPal Sandbox.",
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
