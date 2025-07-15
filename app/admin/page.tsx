import { AutomationControl } from "@/components/automation-control"
import { AutomationDashboard } from "@/components/automation-dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Panneau d'Administration</h1>
        <p className="text-gray-300 mt-2">Gérez et surveillez votre système automatisé.</p>
      </header>
      <main className="flex-1 container mx-auto grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <AutomationControl />
        </div>
        <div className="lg:col-span-2">
          <Card className="w-full bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Settings className="w-6 h-6 text-yellow-400" />
                Tableau de Bord d'Automatisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AutomationDashboard />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
