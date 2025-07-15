import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, BarChart, Package, Users } from "lucide-react"
import Link from "next/link"

export function AdminPanel() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-400" />
            Contrôle d'Automatisation
          </CardTitle>
          <CardDescription className="text-gray-400">
            Activez ou désactivez les modules d'automatisation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/admin">Gérer l'Automatisation</Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BarChart className="w-6 h-6 text-green-400" />
            Tableau de Bord des Ventes
          </CardTitle>
          <CardDescription className="text-gray-400">Suivez vos revenus, ventes et performances.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
            <Link href="/sales-dashboard">Voir les Ventes</Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Package className="w-6 h-6 text-yellow-400" />
            Gestion des Produits
          </CardTitle>
          <CardDescription className="text-gray-400">
            Ajoutez, modifiez ou supprimez vos produits numériques.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
            <Link href="/create-product">Gérer les Produits</Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-400" />
            Gestion des Affiliés
          </CardTitle>
          <CardDescription className="text-gray-400">
            (Bientôt disponible) Gérez vos affiliés et leurs commissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button disabled className="w-full bg-gray-600 text-gray-400 cursor-not-allowed">
            Fonctionnalité à venir
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
