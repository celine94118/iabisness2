"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lightbulb, ShoppingBag, Cloud, Users } from "lucide-react"
import Link from "next/link"

export function AutomatedBusinessSelector() {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null)

  const businessOptions = [
    {
      id: "digital-products",
      name: "Vente de Produits Numériques",
      description: "Créez et vendez des e-books, formations, logiciels, etc.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      link: "/digital-platform",
    },
    {
      id: "dropshipping",
      name: "Boutique de Dropshipping",
      description: "Vendez des produits physiques sans gérer de stock.",
      icon: <ShoppingBag className="w-8 h-8 text-blue-400" />,
      link: "/dropshipping-platform", // Placeholder for a future page
    },
    {
      id: "saas",
      name: "SaaS (Software as a Service)",
      description: "Développez et proposez un logiciel par abonnement.",
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      link: "/saas-platform", // Placeholder for a future page
    },
    {
      id: "community",
      name: "Communauté Premium",
      description: "Créez un espace exclusif avec du contenu payant.",
      icon: <Users className="w-8 h-8 text-green-400" />,
      link: "/community-platform", // Placeholder for a future page
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {businessOptions.map((option) => (
          <Card
            key={option.id}
            className={`bg-gray-800 text-white border-gray-700 cursor-pointer transition-all duration-200
              ${selectedBusiness === option.id ? "border-purple-500 ring-2 ring-purple-500" : "hover:border-gray-500"}`}
            onClick={() => setSelectedBusiness(option.id)}
          >
            <CardHeader className="flex flex-col items-center text-center">
              <div className="mb-2">{option.icon}</div>
              <CardTitle className="text-xl">{option.name}</CardTitle>
              <CardDescription className="text-gray-400">{option.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              {selectedBusiness === option.id && <CheckCircle className="w-6 h-6 text-green-500" />}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedBusiness && (
        <div className="text-center">
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6">
            <Link href={businessOptions.find((b) => b.id === selectedBusiness)?.link || "#"}>
              Démarrer avec {businessOptions.find((b) => b.id === selectedBusiness)?.name}
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
