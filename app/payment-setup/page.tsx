import { PaymentProcessExplanation } from "@/components/payment-process-explanation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

export default function PaymentSetupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Comprendre le Processus de Paiement</h1>
        <p className="text-gray-300 mt-2">Comment les paiements sont traités et les produits livrés.</p>
      </header>
      <main className="flex-1 container mx-auto">
        <Card className="w-full bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CreditCard className="w-6 h-6 text-blue-400" />
              Le Flux de Paiement Automatisé
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentProcessExplanation />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
