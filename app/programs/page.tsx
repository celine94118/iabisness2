import { AffiliateProgramsList } from "@/components/affiliate-programs-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ListChecks } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Programmes d'Affiliation Recommandés</h1>
        <p className="text-gray-300 mt-2">Découvrez les meilleures plateformes pour démarrer votre affiliation.</p>
      </header>
      <main className="flex-1 container mx-auto">
        <Card className="w-full bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ListChecks className="w-6 h-6 text-blue-400" />
              Notre Sélection de Programmes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AffiliateProgramsList />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
