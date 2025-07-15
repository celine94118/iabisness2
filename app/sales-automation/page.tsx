import { SalesAutomationSystem } from "@/components/sales-automation-system"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from "lucide-react"

export default function SalesAutomationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Système d'Automatisation des Ventes</h1>
        <p className="text-gray-300 mt-2">Optimisez vos ventes et livraisons de produits numériques.</p>
      </header>
      <main className="flex-1 container mx-auto">
        <Card className="w-full bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Zap className="w-6 h-6 text-yellow-400" />
              Fonctionnalités Clés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SalesAutomationSystem />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
