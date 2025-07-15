import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Code, GraduationCap, PlusCircle } from "lucide-react"
import Link from "next/link"

export function DigitalProductsPlatform() {
  const productTypes = [
    {
      name: "E-books & Guides",
      description: "Créez et vendez des livres numériques, des rapports, des checklists.",
      icon: <Book className="w-8 h-8 text-blue-400" />,
    },
    {
      name: "Formations en Ligne",
      description: "Proposez des cours vidéo, des tutoriels, des ateliers interactifs.",
      icon: <GraduationCap className="w-8 h-8 text-green-400" />,
    },
    {
      name: "Logiciels & Templates",
      description: "Vendez des plugins, des scripts, des modèles de design ou de documents.",
      icon: <Code className="w-8 h-8 text-purple-400" />,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {productTypes.map((type, index) => (
          <Card key={index} className="bg-gray-800 text-white border-gray-700">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="mb-2">{type.icon}</div>
              <CardTitle className="text-xl">{type.name}</CardTitle>
              <CardDescription className="text-gray-400">{type.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl">Prêt à créer votre premier produit ?</CardTitle>
          <CardDescription className="text-gray-400">
            Lancez-vous et mettez en ligne votre création numérique.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6">
            <Link href="/create-product">
              <PlusCircle className="w-6 h-6 mr-2" />
              Créer un Nouveau Produit
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
