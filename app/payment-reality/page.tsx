import { PaymentRealityCheck } from "@/components/payment-reality-check"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

export default function PaymentRealityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">La Réalité des Paiements</h1>
        <p className="text-gray-300 mt-2">Comprendre ce qu'il faut pour générer des revenus réels.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <DollarSign className="w-6 h-6 text-yellow-400" />
              Attentes Réalistes en Affiliation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentRealityCheck />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
