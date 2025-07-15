import { SalesDashboard } from "@/components/sales-dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "lucide-react"

export default function SalesDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Tableau de Bord des Ventes</h1>
        <p className="text-gray-300 mt-2">Suivez vos revenus et performances en temps réel.</p>
      </header>
      <main className="flex-1 container mx-auto">
        <Card className="w-full bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart className="w-6 h-6 text-yellow-400" />
              Aperçu des Ventes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SalesDashboard />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
