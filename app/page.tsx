import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, Rocket, Settings } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="py-8 text-center">
        <h1 className="text-5xl font-bold text-purple-400">Lince2</h1>
        <p className="mt-4 text-xl text-gray-300">
          Votre système automatisé d'affiliation et de vente de produits numériques.
        </p>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Settings className="w-6 h-6 text-blue-400" />
                Configuration PayPal
              </CardTitle>
              <CardDescription className="text-gray-400">
                Connectez votre compte PayPal pour recevoir les paiements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                C'est la première étape cruciale pour commencer à vendre. Suivez notre guide simple pour lier votre
                compte PayPal.
              </p>
              <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/setup-paypal">Configurer PayPal</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Rocket className="w-6 h-6 text-green-400" />
                Voir les Produits Numériques
              </CardTitle>
              <CardDescription className="text-gray-400">
                Découvrez les produits numériques pré-créés et prêts à être vendus.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Explorez notre catalogue de produits numériques prêts à l'emploi pour votre business.
              </p>
              <Button asChild className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">
                <Link href="/products">Voir les Produits</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <DollarSign className="w-6 h-6 text-yellow-400" />
                Tableau de Bord des Ventes
              </CardTitle>
              <CardDescription className="text-gray-400">
                Suivez vos performances et vos revenus en temps réel.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Accédez à une vue d'ensemble de vos ventes, des transactions et des statistiques clés.
              </p>
              <Button asChild className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                <Link href="/sales-dashboard">Voir le Tableau de Bord</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle className="w-6 h-6 text-purple-400" />
                Guide de Déploiement Final
              </CardTitle>
              <CardDescription className="text-gray-400">
                Assurez un lancement parfait de votre système.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Des dernières vérifications aux conseils de mise en ligne, tout pour réussir votre déploiement.
              </p>
              <Button asChild className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/deploy">Guide de Déploiement</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Lince2. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
