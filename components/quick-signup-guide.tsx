"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "@/components/ui/external-link"
import Link from "next/link"
import { CheckCircle, Clock, Copy, UserPlus, ArrowRight } from "lucide-react"
import { ListChecks } from "@/components/ui/list-checks"

interface SignupStep {
  platform: string
  url: string
  commission: string
  estimatedTime: string
  difficulty: "Facile" | "Moyen"
  steps: string[]
  completed: boolean
}

export default function QuickSignupGuide() {
  const [signupSteps, setSignupSteps] = useState<SignupStep[]>([
    {
      platform: "Systeme.io",
      url: "https://systeme.io/affiliation",
      commission: "60€",
      estimatedTime: "3 min",
      difficulty: "Facile",
      steps: [
        "Cliquer sur 'Devenir Affilié'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Valider l'email",
        "Copier votre lien d'affiliation",
      ],
      completed: false,
    },
    {
      platform: "Shopify",
      url: "https://www.shopify.com/partners",
      commission: "58€",
      estimatedTime: "4 min",
      difficulty: "Facile",
      steps: [
        "Cliquer sur 'Become a Partner'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Choisir 'Affiliate'",
        "Récupérer votre lien dans le dashboard",
      ],
      completed: false,
    },
    {
      platform: "ClickFunnels",
      url: "https://www.clickfunnels.com/affiliates",
      commission: "38€",
      estimatedTime: "3 min",
      difficulty: "Facile",
      steps: [
        "Cliquer sur 'Join Now'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Compléter le profil",
        "Aller dans 'Links' pour récupérer votre lien",
      ],
      completed: false,
    },
    {
      platform: "Learnybox",
      url: "https://learnybox.com/affiliation",
      commission: "50€",
      estimatedTime: "4 min",
      difficulty: "Moyen",
      steps: [
        "Cliquer sur 'Devenir Affilié'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Remplir le formulaire de candidature",
        "Attendre validation (24-48h)",
        "Récupérer le lien une fois approuvé",
      ],
      completed: false,
    },
    {
      platform: "PayPal Business",
      url: "https://www.paypal.com/fr/business",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte PayPal Business", "Nécessaire pour recevoir les paiements de vos ventes."],
      completed: false,
    },
    {
      platform: "Resend",
      url: "https://resend.com/",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte Resend", "Pour l'envoi automatique des emails de livraison de produits."],
      completed: false,
    },
    {
      platform: "GitHub",
      url: "https://github.com/join",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte GitHub", "Pour héberger votre code et le déployer facilement sur Vercel."],
      completed: false,
    },
    {
      platform: "Vercel",
      url: "https://vercel.com/signup",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte Vercel", "La plateforme de déploiement gratuite et rapide pour votre site."],
      completed: false,
    },
  ])

  const toggleCompleted = (index: number) => {
    setSignupSteps((prev) => prev.map((step, i) => (i === index ? { ...step, completed: !step.completed } : step)))
  }

  const copyCredentials = () => {
    navigator.clipboard.writeText("Email: celine.valente94118@gmail.com\nMot de passe: celine1994$")
  }

  const totalTime = signupSteps.reduce((sum, step) => sum + Number.parseInt(step.estimatedTime), 0)
  const completedCount = signupSteps.filter((step) => step.completed).length

  const steps = [
    "Choisissez une plateforme d'affiliation (ex: ClickBank, Digistore24, 1TPE).",
    "Créez un compte gratuit sur la plateforme choisie.",
    "Explorez les produits disponibles et sélectionnez ceux qui vous intéressent.",
    "Générez vos liens d'affiliation uniques pour chaque produit.",
    "Intégrez ces liens dans votre contenu (site web, réseaux sociaux, emails).",
    "Suivez vos performances via le tableau de bord de la plateforme.",
  ]

  const signupPlatforms = [
    {
      name: "Systeme.io",
      description: "Plateforme tout-en-un pour créer des tunnels de vente, emails, et sites membres.",
      link: "https://systeme.io/?sa=SA0000000000000000000000000000000000000000", // Replace with your actual affiliate link
      icon: "/placeholder.svg?height=24&width=24", // Placeholder for Systeme.io logo
    },
    {
      name: "ClickFunnels",
      description: "Leader des tunnels de vente pour les entrepreneurs et marketeurs.",
      link: "https://www.clickfunnels.com/?cf_affiliate_id=YOUR_AFFILIATE_ID", // Replace with your actual affiliate link
      icon: "/placeholder.svg?height=24&width=24", // Placeholder for ClickFunnels logo
    },
    {
      name: "Shopify",
      description: "Créez votre boutique en ligne et vendez des produits physiques ou numériques.",
      link: "https://www.shopify.com/?ref=YOUR_AFFILIATE_ID", // Replace with your actual affiliate link
      icon: "/placeholder.svg?height=24&width=24", // Placeholder for Shopify logo
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <UserPlus className="w-8 h-8 text-green-400" />
              QUICK ACCOUNT CREATION
            </CardTitle>
            <p className="text-green-300">Create all your affiliate accounts in {totalTime} minutes!</p>
          </CardHeader>
        </Card>

        {/* Progression */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">Progress</span>
              <span className="text-gray-300">
                {completedCount}/{signupSteps.length} accounts created
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-green-600 to-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / signupSteps.length) * 100}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Identifiants */}
        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-6">
            <h3 className="text-blue-300 font-bold text-xl mb-4">🔑 YOUR CREDENTIALS (to use everywhere) :</h3>
            <div className="bg-black/20 p-4 rounded-lg flex justify-between items-center">
              <div className="space-y-2">
                <div className="text-white">
                  <strong>Email :</strong> celine.valente94118@gmail.com
                </div>
                <div className="text-white">
                  <strong>Password :</strong> celine1994$
                </div>
              </div>
              <Button onClick={copyCredentials} variant="outline" className="border-white/20 text-white bg-transparent">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Guide étape par étape */}
        <div className="space-y-4">
          {signupSteps.map((step, index) => (
            <Card
              key={index}
              className={`backdrop-blur-sm transition-all ${
                step.completed ? "bg-green-600/20 border-green-500/30" : "bg-white/5 border-white/10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Button
                    onClick={() => toggleCompleted(index)}
                    variant="outline"
                    size="sm"
                    className={`mt-1 ${
                      step.completed
                        ? "bg-green-600 border-green-500 text-white"
                        : "border-white/20 text-white bg-transparent"
                    }`}
                  >
                    {step.completed ? <CheckCircle className="w-4 h-4" /> : <div className="w-4 h-4 border rounded" />}
                  </Button>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{step.platform}</h3>
                      <Badge className="bg-green-600">{step.commission} commission</Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.estimatedTime}
                      </Badge>
                      <Badge className={step.difficulty === "Facile" ? "bg-blue-600" : "bg-orange-600"}>
                        {step.difficulty}
                      </Badge>
                    </div>

                    <div className="bg-black/20 p-4 rounded-lg mb-4">
                      <h4 className="text-white font-bold mb-2">📋 Steps to follow :</h4>
                      <ol className="space-y-1 text-gray-300 text-sm">
                        {step.steps.map((stepItem, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">{stepIndex + 1}.</span>
                            <span>{stepItem}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <Button onClick={() => window.open(step.url, "_blank")} className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Create {step.platform} account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Résumé final */}
        {completedCount === signupSteps.length && (
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">🎉 ALL YOUR ACCOUNTS ARE CREATED !</h2>
              <p className="text-green-300 text-xl mb-4">
                You can now retrieve your affiliate links and configure them in your robot!
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {signupSteps.reduce((sum, step) => sum + Number.parseFloat(step.commission), 0)}€
                  </div>
                  <div className="text-gray-400">Total possible commission</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{signupSteps.length}</div>
                  <div className="text-gray-400">Active programs</div>
                </div>
              </div>
              <Button
                onClick={() => window.open("/admin", "_blank")}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
              >
                🔧 Configure my links in the robot
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Conseils */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <h3 className="text-yellow-300 font-bold text-xl mb-4">💡 TIPS FOR SUCCESS :</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                ✅ <strong>Always use the same credentials</strong> to simplify management
              </p>
              <p>
                ✅ <strong>Check your emails</strong> to validate accounts
              </p>
              <p>
                ✅ <strong>Write down your affiliate links</strong> somewhere safe
              </p>
              <p>
                ✅ <strong>Some programs require manual validation</strong> (24-48h)
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Once registered, don't forget to retrieve the necessary API keys for configuration.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* New Guide */}
        <Card className="bg-gray-800 text-white border-gray-700 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-400 flex items-center justify-center gap-2">
              <CheckCircle className="w-8 h-8" />
              Guide de Démarrage Rapide
            </CardTitle>
            <CardDescription className="text-gray-400 mt-2">
              Suivez ces étapes simples pour lancer votre système automatisé en un rien de temps.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ListChecks items={steps} className="text-lg text-gray-300" />
            <div className="text-center mt-8">
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-full shadow-md"
              >
                <Link href="/setup-paypal">
                  Commencer la Configuration PayPal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Platforms */}
        <Card className="bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <UserPlus className="w-6 h-6 text-green-400" />
              Guide d'Inscription Rapide
            </CardTitle>
            <CardDescription className="text-gray-400">
              Inscrivez-vous sur les plateformes d'affiliation clés pour commencer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-300">
              Pour maximiser vos revenus, il est essentiel de vous inscrire sur les plateformes d'affiliation les plus
              pertinentes. Voici quelques-unes des meilleures options :
            </p>

            <div className="grid gap-4">
              {signupPlatforms.map((platform, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
                  {platform.icon && (
                    <img
                      src={platform.icon || "/placeholder.svg"}
                      alt={`${platform.name} logo`}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{platform.name}</h3>
                    <p className="text-gray-400 text-sm">{platform.description}</p>
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      S'inscrire <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30 text-green-100 flex items-start gap-3">
              <CheckCircle className="w-6 h-6 mt-1" />
              <p>
                **Conseil :** Assurez-vous d'utiliser vos liens d'affiliation uniques lors de la promotion des produits
                de ces plateformes. C'est ainsi que vos ventes seront suivies et que vous recevrez vos commissions.
              </p>
            </div>

            <div className="text-center mt-6">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/programs">Voir plus de programmes d'affiliation</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Signup Guide */}
        <Card className="bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl">Guide Rapide d'Inscription aux Plateformes d'Affiliation</CardTitle>
            <CardDescription className="text-gray-400">
              Commencez votre parcours d'affiliation en quelques étapes simples.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ListChecks items={steps} />
            <p className="text-gray-300 mt-4">
              Pour plus de détails et des liens directs, consultez notre section{" "}
              <a href="/programs" className="text-blue-400 hover:underline inline-flex items-center gap-1">
                Programmes d'Affiliation <ExternalLink className="w-4 h-4" />
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
