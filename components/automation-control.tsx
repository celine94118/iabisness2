"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Play, Pause, Settings } from "lucide-react"
import { scheduleAutomationTask, stopAutomationTask } from "@/lib/automation-engine" // Assuming these functions exist

export function AutomationControl() {
  const { toast } = useToast()
  const [isContentGenActive, setIsContentGenActive] = useState(false)
  const [isSocialPosterActive, setIsSocialPosterActive] = useState(false)
  const [isEmailAutomationActive, setIsEmailAutomationActive] = useState(false)

  const handleToggle = (automationType: string, isActive: boolean) => {
    if (automationType === "content-gen") {
      setIsContentGenActive(isActive)
      if (isActive) {
        // Example: schedule a dummy task for content generation
        // In a real app, this would trigger actual content generation logic
        scheduleAutomationTask({
          taskId: "content-generator",
          interval: 3600000, // every hour
          action: async () => console.log("Generating content..."),
        })
        toast({ title: "Génération de Contenu", description: "L'automatisation de contenu est activée." })
      } else {
        stopAutomationTask("content-generator")
        toast({ title: "Génération de Contenu", description: "L'automatisation de contenu est désactivée." })
      }
    } else if (automationType === "social-poster") {
      setIsSocialPosterActive(isActive)
      if (isActive) {
        scheduleAutomationTask({
          taskId: "social-poster",
          interval: 7200000, // every 2 hours
          action: async () => console.log("Posting to social media..."),
        })
        toast({ title: "Auto-Poster Réseaux Sociaux", description: "L'auto-poster est activé." })
      } else {
        stopAutomationTask("social-poster")
        toast({ title: "Auto-Poster Réseaux Sociaux", description: "L'auto-poster est désactivé." })
      }
    } else if (automationType === "email-automation") {
      setIsEmailAutomationActive(isActive)
      if (isActive) {
        scheduleAutomationTask({
          taskId: "email-automation",
          interval: 86400000, // every 24 hours
          action: async () => console.log("Sending automated emails..."),
        })
        toast({ title: "Email Marketing", description: "L'automatisation email est activée." })
      } else {
        stopAutomationTask("email-automation")
        toast({ title: "Email Marketing", description: "L'automatisation email est désactivée." })
      }
    }
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Settings className="w-6 h-6 text-blue-400" />
          Contrôle de l'Automatisation
        </CardTitle>
        <CardDescription className="text-gray-400">
          Activez ou désactivez les différents modules d'automatisation.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="content-gen" className="text-lg">
            Générateur de Contenu IA
          </Label>
          <Switch
            id="content-gen"
            checked={isContentGenActive}
            onCheckedChange={(checked) => handleToggle("content-gen", checked)}
            className="data-[state=checked]:bg-green-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="social-poster" className="text-lg">
            Auto-Poster Réseaux Sociaux
          </Label>
          <Switch
            id="social-poster"
            checked={isSocialPosterActive}
            onCheckedChange={(checked) => handleToggle("social-poster", checked)}
            className="data-[state=checked]:bg-green-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="email-automation" className="text-lg">
            Email Marketing Automatisé
          </Label>
          <Switch
            id="email-automation"
            checked={isEmailAutomationActive}
            onCheckedChange={(checked) => handleToggle("email-automation", checked)}
            className="data-[state=checked]:bg-green-500"
          />
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button
            onClick={() => {
              setIsContentGenActive(true)
              setIsSocialPosterActive(true)
              setIsEmailAutomationActive(true)
              scheduleAutomationTask({
                taskId: "content-generator",
                interval: 3600000,
                action: async () => console.log("Generating content..."),
              })
              scheduleAutomationTask({
                taskId: "social-poster",
                interval: 7200000,
                action: async () => console.log("Posting to social media..."),
              })
              scheduleAutomationTask({
                taskId: "email-automation",
                interval: 86400000,
                action: async () => console.log("Sending automated emails..."),
              })
              toast({
                title: "Toutes les Automatisations",
                description: "Toutes les automatisations ont été activées.",
              })
            }}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Play className="w-5 h-5 mr-2" />
            Activer Tout
          </Button>
          <Button
            onClick={() => {
              setIsContentGenActive(false)
              setIsSocialPosterActive(false)
              setIsEmailAutomationActive(false)
              stopAutomationTask("content-generator")
              stopAutomationTask("social-poster")
              stopAutomationTask("email-automation")
              toast({
                title: "Toutes les Automatisations",
                description: "Toutes les automatisations ont été désactivées.",
              })
            }}
            variant="destructive"
          >
            <Pause className="w-5 h-5 mr-2" />
            Désactiver Tout
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
