import { ProductCreationWizard } from "@/components/product-creation-wizard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"

export default function CreateProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Créer un Nouveau Produit</h1>
        <p className="text-gray-300 mt-2">Lancez votre produit numérique en quelques étapes.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <PlusCircle className="w-6 h-6 text-green-400" />
              Assistant de Création
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProductCreationWizard />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
