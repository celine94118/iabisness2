"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle, Upload } from "lucide-react"

export function ProductCreationWizard() {
  const [step, setStep] = useState(1)
  const [productName, setProductName] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productFile, setProductFile] = useState<File | null>(null)
  const { toast } = useToast()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProductFile(event.target.files[0])
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (step === 1) {
      if (!productName || !productDescription) {
        toast({
          title: "Champs manquants",
          description: "Veuillez remplir tous les champs du produit.",
          variant: "destructive",
        })
        return
      }
      setStep(2)
    } else if (step === 2) {
      if (!productPrice || isNaN(Number.parseFloat(productPrice)) || Number.parseFloat(productPrice) <= 0) {
        toast({
          title: "Prix invalide",
          description: "Veuillez entrer un prix valide pour votre produit.",
          variant: "destructive",
        })
        return
      }
      setStep(3)
    } else if (step === 3) {
      if (!productFile) {
        toast({
          title: "Fichier manquant",
          description: "Veuillez télécharger le fichier de votre produit.",
          variant: "destructive",
        })
        return
      }
      // Simulate product creation and upload
      console.log("Product Name:", productName)
      console.log("Product Description:", productDescription)
      console.log("Product Price:", productPrice)
      console.log("Product File:", productFile?.name)

      toast({
        title: "Produit créé avec succès !",
        description: `"${productName}" est maintenant prêt à être vendu.`,
      })
      setStep(4) // Go to success screen
    }
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl">Assistant de Création de Produit Numérique</CardTitle>
        <CardDescription className="text-gray-400">
          Suivez les étapes pour mettre en ligne votre produit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product-name">Nom du Produit</Label>
              <Input
                id="product-name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Ex: Mon Super E-book sur l'Affiliation"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-description">Description du Produit</Label>
              <Textarea
                id="product-description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Décrivez votre produit en détail..."
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Étape Suivante (1/3)
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product-price">Prix du Produit (EUR)</Label>
              <Input
                id="product-price"
                type="number"
                step="0.01"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="Ex: 29.99"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Précédent
              </Button>
              <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                Étape Suivante (2/3)
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product-file">Fichier du Produit (PDF, ZIP, etc.)</Label>
              <Input
                id="product-file"
                type="file"
                onChange={handleFileChange}
                className="bg-gray-700 border-gray-600 text-white file:text-blue-400 file:bg-gray-600 file:border-0 file:rounded-md file:px-3 file:py-1"
              />
              {productFile && <p className="text-sm text-gray-400">Fichier sélectionné : {productFile.name}</p>}
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Précédent
              </Button>
              <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                Télécharger et Finaliser (3/3)
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="text-center space-y-4">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-green-400">Félicitations !</h3>
            <p className="text-lg text-gray-300">Votre produit "{productName}" a été créé et est prêt à être vendu.</p>
            <p className="text-gray-400">Vous pouvez maintenant le promouvoir et commencer à générer des ventes.</p>
            <Button onClick={() => setStep(1)} className="bg-blue-600 hover:bg-blue-700 text-white">
              Créer un autre produit
            </Button>
            <Button
              asChild
              variant="outline"
              className="ml-2 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              <a href="/sales-dashboard">Voir le tableau de bord des ventes</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
