"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "@/components/ui/external-link"
import { useToast } from "@/hooks/use-toast"

export function PaypalSetupGuide() {
  const [clientId, setClientId] = useState(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "")
  const [sandboxMode, setSandboxMode] = useState(process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_MODE === "true")
  const { toast } = useToast()

  const handleSave = () => {
    // In a real application, you would save these to a database or secure configuration
    // For this example, we'll just show a toast.
    console.log("PayPal Client ID:", clientId)
    console.log("Sandbox Mode:", sandboxMode)
    toast({
      title: "Configuration PayPal sauvegardée",
      description: "Les paramètres ont été mis à jour (localement pour cet exemple).",
    })
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl">Étape 1: Obtenez vos identifiants PayPal</CardTitle>
        <CardDescription className="text-gray-400">
          Vous aurez besoin d'un compte développeur PayPal pour obtenir votre Client ID.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          1. Rendez-vous sur le{" "}
          <a
            href="https://developer.paypal.com/dashboard/applications/live"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            Tableau de bord des développeurs PayPal <ExternalLink className="w-4 h-4" />
          </a>
          .
        </p>
        <p>2. Connectez-vous avec votre compte PayPal ou créez-en un.</p>
        <p>3. Dans la section "REST API apps", cliquez sur "Create App" ou sélectionnez une application existante.</p>
        <p>
          4. Copiez votre "Client ID" pour l'environnement "Live" (pour les paiements réels) ou "Sandbox" (pour les
          tests).
        </p>
        <div className="space-y-2">
          <Label htmlFor="paypal-client-id" className="text-lg">
            Votre Client ID PayPal
          </Label>
          <Input
            id="paypal-client-id"
            type="text"
            placeholder="Entrez votre Client ID PayPal ici"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="sandbox-mode"
            checked={sandboxMode}
            onCheckedChange={(checked) => setSandboxMode(!!checked)}
            className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
          />
          <Label htmlFor="sandbox-mode" className="text-lg">
            Activer le mode Sandbox (pour les tests)
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 text-white">
          Sauvegarder la Configuration
        </Button>
      </CardFooter>
    </Card>
  )
}
