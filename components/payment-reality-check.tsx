"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ListChecks } from "@/components/ui/list-checks"
import { AlertTriangle, Calendar, DollarSign, TrendingUp, Clock, Users, Info, CheckCircle } from "lucide-react"
import { useState } from "react"
import { PaypalIntegration } from "./paypal-integration"
import Link from "next/link"

interface ProductForTest {
  id: string
  name: string
  price: number
  currency: string
}

const TEST_PRODUCT: ProductForTest = {
  id: "test_prod_001",
  name: "Produit Test",
  price: 1.0, // Small amount for testing
  currency: "EUR",
}

const paymentConditions = [
  {
    platform: "Systeme.io",
    commission: "60€",
    paymentSchedule: "Mensuel (le 15)",
    minimumPayout: "50€",
    paymentDelay: "30 jours après la vente",
    conditions: ["Client doit rester abonné 30 jours", "Pas de remboursement"],
    reality: "Vous recevez 60€ SEULEMENT si quelqu'un achète via votre lien ET reste abonné",
  },
  {
    platform: "Shopify",
    commission: "58€",
    paymentSchedule: "Bi-mensuel",
    minimumPayout: "25€",
    paymentDelay: "60 jours après la vente",
    conditions: ["Client doit rester abonné 2 mois", "Validation manuelle"],
    reality: "Commission versée uniquement après 2 mois d'abonnement client confirmé",
  },
  {
    platform: "ClickFunnels",
    commission: "38€",
    paymentSchedule: "Mensuel (le 1er)",
    minimumPayout: "100€",
    paymentDelay: "45 jours après la vente",
    conditions: ["Seuil minimum 100€", "Client actif 30 jours"],
    reality: "Il faut au moins 3 ventes pour atteindre le seuil de paiement",
  },
]

const realitySteps = [
  {
    step: "1. Quelqu'un clique sur votre lien",
    probability: "Dépend de votre audience",
    icon: Users,
    color: "text-blue-400",
  },
  {
    step: "2. Cette personne achète le produit",
    probability: "1-5% en moyenne",
    icon: DollarSign,
    color: "text-green-400",
  },
  {
    step: "3. Elle reste abonnée (pas de remboursement)",
    probability: "70-80% selon le produit",
    icon: TrendingUp,
    color: "text-purple-400",
  },
  {
    step: "4. Vous atteignez le seuil minimum",
    probability: "Selon vos performances",
    icon: Calendar,
    color: "text-orange-400",
  },
  {
    step: "5. La plateforme vous paie",
    probability: "30-60 jours après",
    icon: Clock,
    color: "text-red-400",
  },
]

export default function PaymentRealityCheck() {
  const [testCompleted, setTestCompleted] = useState(false)
  const points = [
    "Les revenus ne sont pas instantanés : L'affiliation demande du temps et des efforts pour générer des ventes.",
    "La concurrence est forte : Il faut se démarquer par la qualité de son contenu et de sa promotion.",
    "Nécessite un travail continu : Optimisation, création de contenu, et analyse sont essentiels.",
    "Les commissions varient : Elles dépendent du produit, de la plateforme et de la niche.",
    "Les paiements peuvent prendre du temps : Les plateformes ont souvent des seuils et des délais de paiement.",
    "La qualité prime sur la quantité : Promouvoir des produits pertinents pour votre audience est plus efficace.",
  ]

  const handleTestCompletion = () => {
    setTestCompleted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Alerte principale */}
        <Card className="bg-red-600/20 backdrop-blur-sm border-red-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              REALITY OF AFFILIATE PAYMENTS
            </CardTitle>
            <p className="text-red-300 text-lg">Payments are NOT automatic - here's the truth</p>
          </CardHeader>
        </Card>

        {/* Nouvelles informations */}
        <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30 text-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Info className="w-6 h-6" />
              The Reality of Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Il est crucial de comprendre comment les paiements fonctionnent réellement pour éviter toute déception.
              Même avec un système automatisé, il y a des étapes et des délais.
            </p>
            <ListChecks items={points} />
            <p className="text-gray-300 mt-4">
              La clé du succès réside dans la construction d'une audience fidèle et la promotion de produits de valeur.
            </p>
          </CardContent>
        </Card>

        {/* Processus réel */}
        <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-white">🔍 HOW IT REALLY WORKS :</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {realitySteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex items-center gap-4 bg-black/20 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <IconComponent className={`w-6 h-6 ${step.color}`} />
                    <div className="flex-1">
                      <h4 className="text-white font-bold">{step.step}</h4>
                      <p className="text-gray-300 text-sm">{step.probability}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Conditions réelles par plateforme */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">💰 REAL PAYMENT CONDITIONS</h2>
          {paymentConditions.map((platform, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white">{platform.platform}</h3>
                  <Badge className="bg-green-600">{platform.commission} commission</Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-bold mb-2">📅 Payment schedule</h4>
                    <p className="text-white">{platform.paymentSchedule}</p>
                    <p className="text-gray-400 text-sm">Delay : {platform.paymentDelay}</p>
                    <p className="text-gray-400 text-sm">Minimum : {platform.minimumPayout}</p>
                  </div>

                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-orange-400 font-bold mb-2">⚠️ Conditions</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {platform.conditions.map((condition, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-400">•</span>
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-red-600/20 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 font-bold mb-2">🎯 REALITY :</h4>
                  <p className="text-gray-300">{platform.reality}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline réaliste */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardHeader>
            <CardTitle className="text-white">📅 REALISTIC TIMELINE FOR FIRST PAYMENTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-bold mb-2">Month 1-2 : Construction</h4>
                <p className="text-gray-300">
                  The robot generates content, but it takes time to build an audience and generate traffic.
                  <strong> Revenue : 0€</strong>
                </p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-bold mb-2">Month 3-4 : First conversions</h4>
                <p className="text-gray-300">
                  If you have traffic, first sales possible. But payment in 30-60 days.
                  <strong> Revenue : 0-200€</strong>
                </p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-bold mb-2">Month 5-6 : First payments</h4>
                <p className="text-gray-300">
                  Receipt of first commissions from sales in months 3-4.
                  <strong> Revenue : 100-500€</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ce qui dépend de vous */}
        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white">🎯 WHAT DEPENDS ON YOU</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-green-400 font-bold mb-2">✅ The robot does automatically :</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Content generation</li>
                  <li>• Social media publishing</li>
                  <li>• Email sending</li>
                  <li>• Link tracking</li>
                </ul>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">❌ You must provide :</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• An audience (followers, subscribers)</li>
                  <li>• Traffic to your content</li>
                  <li>• Credibility/trust</li>
                  <li>• Patience (3-6 months)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test de Paiement */}
        <Card className="bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              Payment Reality Check
            </CardTitle>
            <CardDescription className="text-gray-400">
              Perform a test payment to ensure everything is working correctly before launching.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!testCompleted ? (
              <>
                <p className="text-gray-300">
                  We will simulate a purchase of a test product. Make sure your PayPal account is configured in Sandbox
                  mode if you don't want to use real money.
                </p>
                <PaypalIntegration
                  productId={TEST_PRODUCT.id}
                  productName={TEST_PRODUCT.name}
                  price={TEST_PRODUCT.price}
                  currency={TEST_PRODUCT.currency}
                />
                <Button onClick={handleTestCompletion} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Mark test as complete (after a successful payment)
                </Button>
              </>
            ) : (
              <div className="text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-green-400">Payment Test Successful!</h3>
                <p className="text-gray-300">
                  Congratulations! Your payment system seems to be working correctly. You are ready to sell.
                </p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/dashboard">Back to Dashboard</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border-red-500/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 HONEST CONCLUSION</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>The robot automates the work,</strong> but does NOT guarantee automatic income.
              </p>
              <p>
                <strong>Payments depend</strong> on real sales to real customers.
              </p>
              <p>
                <strong>It's a powerful tool</strong> that can earn you money, but with work and patience.
              </p>
            </div>
            <div className="mt-6 p-4 bg-black/20 rounded-lg">
              <p className="text-yellow-300 font-bold">
                ⚠️ No system can guarantee automatic income without real effort.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
