"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"
import { PaypalPaymentButton } from "@/components/paypal-payment-button"

interface Product {
  id: string
  name: string
  description: string
  price: number
  downloadLink: string
}

export function ReadyMadeProducts() {
  const products: Product[] = [
    {
      id: "guide-argent-ligne",
      name: "Guide Ultime pour Gagner de l'Argent en Ligne",
      description: "Un guide complet pour démarrer et développer votre business en ligne.",
      price: 19.99,
      downloadLink: "/downloads/guide-argent-ligne.pdf",
    },
    {
      id: "formation-affiliation",
      name: "Formation Complète en Marketing d'Affiliation",
      description: "Apprenez toutes les stratégies pour réussir en affiliation, de A à Z.",
      price: 49.99,
      downloadLink: "/downloads/formation-affiliation.pdf",
    },
    {
      id: "templates-pack",
      name: "Pack de Templates Marketing Prêts à l'Emploi",
      description: "Des templates pour emails, pages de vente, et posts sociaux pour booster vos campagnes.",
      price: 29.99,
      downloadLink: "/downloads/templates-pack.zip",
    },
    {
      id: "strategie-trafic",
      name: "Stratégies Avancées de Génération de Trafic",
      description: "Découvrez des méthodes éprouvées pour attirer un trafic qualifié vers vos offres.",
      price: 39.99,
      downloadLink: "/downloads/strategie-trafic.pdf",
    },
    {
      id: "business-automatise",
      name: "Le Business Automatisé : Guide de Mise en Place",
      description: "Apprenez à créer un système qui génère des revenus passifs 24/7.",
      price: 59.99,
      downloadLink: "/downloads/business-automatise.pdf",
    },
  ]

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="bg-gray-800 text-white border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl">{product.name}</CardTitle>
              <CardDescription className="text-gray-400">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-green-400">{product.price.toFixed(2)} €</div>
              <Button
                onClick={() => setSelectedProduct(product)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Acheter Maintenant
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProduct && (
        <Card className="w-full max-w-md mx-auto bg-gray-700 text-white border-gray-600 p-6">
          <CardTitle className="text-2xl mb-4 text-center">Paiement pour {selectedProduct.name}</CardTitle>
          <PaypalPaymentButton
            productId={selectedProduct.id}
            productName={selectedProduct.name}
            price={selectedProduct.price}
          />
          <p className="text-center text-gray-400 text-sm mt-4">
            Après le paiement, le lien de téléchargement sera envoyé à votre email.
          </p>
        </Card>
      )}
    </div>
  )
}
