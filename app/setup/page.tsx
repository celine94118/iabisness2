import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, CreditCard, Package, Megaphone } from "lucide-react"
import Link from "next/link"

export default function SetupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Configuration Initiale</h1>
        <p className="text-gray-300 mt-2">Préparez votre système pour le succès.</p>
      </header>
      <main className="flex-1 container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CreditCard className="w-6 h-6 text-blue-400" />
              Configurer les Paiements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Connectez votre compte PayPal pour commencer à recevoir des paiements pour vos produits.
            </p>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/setup-paypal">Démarrer la Configuration</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Package className="w-6 h-6 text-green-400" />
              Créer vos Produits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Mettez en ligne vos produits numériques (e-books, formations, logiciels) pour les vendre.
            </p>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Link href="/create-product">Ajouter un Produit</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Megaphone className="w-6 h-6 text-yellow-400" />
              Automatisation Marketing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Configurez l'IA pour la génération de contenu et l'auto-publication sur les réseaux sociaux.
            </p>
            <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
              <Link href="/marketing-automation">Configurer le Marketing</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-purple-400" />
              Panneau d'Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Accédez au panneau de contrôle pour gérer toutes les automatisations et les statistiques.
            </p>
            <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/admin">Accéder à l'Admin</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
