import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ListChecks } from "@/components/ui/list-checks"
import { DollarSign, CheckCircle, Send } from "lucide-react"

export function PaymentProcessExplanation() {
  const steps = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      title: "1. Le Client effectue un achat",
      description: "Un client clique sur votre lien de produit et procède au paiement via PayPal.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: "2. PayPal traite la transaction",
      description: "PayPal vérifie le paiement et confirme la transaction. Notre système reçoit une notification.",
    },
    {
      icon: <Send className="w-6 h-6 text-purple-400" />,
      title: "3. Envoi automatique du produit et de l'email",
      description:
        "Dès la confirmation, le produit numérique est livré au client, et un email de confirmation est envoyé.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
      title: "4. Suivi des ventes et commissions",
      description: "La vente est enregistrée dans votre tableau de bord, et votre commission est attribuée.",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {steps.map((step, index) => (
        <Card key={index} className="bg-gray-800 text-white border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            {step.icon}
            <CardTitle className="text-xl">{step.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{step.description}</p>
          </CardContent>
        </Card>
      ))}
      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl">Pourquoi ce processus est-il efficace ?</CardTitle>
        </CardHeader>
        <CardContent>
          <ListChecks
            items={[
              "Automatisation complète : Pas d'intervention manuelle nécessaire après la vente.",
              "Sécurité des paiements : PayPal gère toutes les transactions de manière sécurisée.",
              "Livraison instantanée : Les clients reçoivent leur produit immédiatement après l'achat.",
              "Suivi transparent : Toutes les ventes sont enregistrées pour un suivi facile.",
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
