"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { CardDescription } from "@/components/ui/card"

import { CardContent } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useEffect } from "react"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { ListChecks } from "@/components/ui/list-checks"
import {
  ShoppingCart,
  CreditCard,
  Mail,
  Download,
  TrendingUp,
  Users,
  Bell,
  Zap,
  CheckCircle,
  DollarSign,
  Globe,
  Truck,
  Settings,
  BarChart,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Sale {
  id: string
  product: string
  customer: string
  amount: number
  timestamp: string
  status: "completed" | "processing" | "delivered"
}

interface AutomationMetric {
  title: string
  value: string
  change: string
  icon: any
  color: string
}

export default function SalesAutomationSystem() {
  const [recentSales, setRecentSales] = useState<Sale[]>([
    {
      id: "1",
      product: "Complete Guide : Earn Money Online",
      customer: "marie.dupont@email.com",
      amount: 29,
      timestamp: "5 min ago",
      status: "delivered",
    },
    {
      id: "2",
      product: "Instagram Stories Templates",
      customer: "jean.martin@email.com",
      amount: 19,
      timestamp: "12 min ago",
      status: "completed",
    },
    {
      id: "3",
      product: "Ultimate Productivity Checklist",
      customer: "sophie.bernard@email.com",
      amount: 9,
      timestamp: "23 min ago",
      status: "delivered",
    },
  ])

  const [automationMetrics, setAutomationMetrics] = useState<AutomationMetric[]>([
    {
      title: "Automated Sales",
      value: "47",
      change: "+12% today",
      icon: ShoppingCart,
      color: "text-green-400",
    },
    {
      title: "Revenue Generated",
      value: "1,247€",
      change: "+8% this week",
      icon: DollarSign,
      color: "text-blue-400",
    },
    {
      title: "Instant Deliveries",
      value: "100%",
      change: "0s average delay",
      icon: Download,
      color: "text-purple-400",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5% this month",
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ])

  const [systemStatus, setSystemStatus] = useState({
    paymentGateway: "active",
    emailDelivery: "active",
    analytics: "active",
    customerSupport: "active",
  })

  const [automationEnabled, setAutomationEnabled] = useState(false)
  const { toast } = useToast()

  const toggleAutomation = () => {
    setAutomationEnabled(!automationEnabled)
    toast({
      title: automationEnabled ? "Automatisation désactivée" : "Automatisation activée",
      description: automationEnabled
        ? "Le système de vente automatisé est maintenant en pause."
        : "Le système de vente automatisé est maintenant actif et gère vos ventes.",
      variant: automationEnabled ? "destructive" : "default",
    })
  }

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Automatisation des Ventes",
      description: "Gérez les commandes et les livraisons de produits numériques sans intervention manuelle.",
      points: [
        "Traitement automatique des paiements via PayPal.",
        "Livraison instantanée des produits après achat.",
        "Gestion des accès et des licences (si applicable).",
      ],
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Emails Automatisés",
      description: "Envoyez des confirmations d'achat, des liens de téléchargement et des suivis clients.",
      points: [
        "Emails de confirmation personnalisables.",
        "Envoi automatique des liens de téléchargement sécurisés.",
        "Séquences d'emails de bienvenue ou de suivi.",
      ],
    },
    {
      icon: <BarChart className="w-6 h-6 text-green-400" />,
      title: "Suivi des Performances",
      description: "Obtenez des statistiques claires sur vos ventes et votre trafic.",
      points: [
        "Tableau de bord des ventes en temps réel.",
        "Analyse du taux de conversion et des sources de trafic.",
        "Rapports personnalisables pour une meilleure prise de décision.",
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Gestion des Affiliés (Optionnel)",
      description: "Mettez en place un programme d'affiliation pour vos propres produits.",
      points: [
        "Suivi des commissions d'affiliation.",
        "Portail pour vos affiliés avec leurs statistiques.",
        "Paiement automatisé des commissions.",
      ],
    },
  ]

  // Simulate new sales
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const products = [
          "Complete Guide : Earn Money Online",
          "Instagram Stories Templates",
          "Ultimate Productivity Checklist",
          "Video Training : Ultimate Productivity",
        ]
        const customers = [
          "alex.durand@email.com",
          "claire.moreau@email.com",
          "pierre.leroy@email.com",
          "emma.rousseau@email.com",
        ]
        const prices = [29, 19, 9, 49]

        const randomProduct = products[Math.floor(Math.random() * products.length)]
        const randomCustomer = customers[Math.floor(Math.random() * customers.length)]
        const randomPrice = prices[Math.floor(Math.random() * prices.length)]

        const newSale: Sale = {
          id: Date.now().toString(),
          product: randomProduct,
          customer: randomCustomer,
          amount: randomPrice,
          timestamp: "Just now",
          status: "completed",
        }

        setRecentSales((prev) => [newSale, ...prev.slice(0, 9)])
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              <Zap className="w-10 h-10 text-green-400" />
              Automated Sales & Delivery System
            </CardTitle>
            <p className="text-green-300 text-lg">
              Sell your digital products 24/7 without any manual intervention. 🚀
            </p>
          </CardHeader>
        </Card>

        {/* New Features Card */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 text-white border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                <ListChecks items={feature.points} className="text-sm" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Métriques d'automatisation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {automationMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-4 text-center">
                  <IconComponent className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.title}</div>
                  <div className="text-green-400 text-xs mt-1">{metric.change}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Ventes en temps réel */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-green-400" />
                Real-time Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="bg-black/20 p-4 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{sale.product}</h4>
                        <p className="text-gray-400 text-xs">{sale.customer}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{sale.amount}€</div>
                        <Badge
                          className={
                            sale.status === "delivered"
                              ? "bg-green-600"
                              : sale.status === "completed"
                                ? "bg-blue-600"
                                : "bg-orange-600"
                          }
                        >
                          {sale.status === "delivered"
                            ? "Delivered"
                            : sale.status === "completed"
                              ? "Paid"
                              : "In progress"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{sale.timestamp}</span>
                      <div className="flex items-center gap-1 text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        <span>Automated</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statut du système */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-green-400" />
                      Payment Gateway
                    </h4>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>✅ Stripe configured and functional</li>
                    <li>✅ PayPal integrated</li>
                    <li>✅ Secure SSL payments</li>
                    <li>✅ Automated invoicing</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-400" />
                      Automated Delivery
                    </h4>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>✅ Instant confirmation email</li>
                    <li>✅ Secure download link</li>
                    <li>✅ Time-limited access</li>
                    <li>✅ Download tracking</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      Customer Support
                    </h4>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>✅ Automated chatbot 24/7</li>
                    <li>✅ Integrated FAQ</li>
                    <li>✅ Automated refunds</li>
                    <li>✅ Support tickets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Processus automatisé */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-blue-400" />
                Automated Sales Process
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>**Generated Sales Page** : Each product has its own optimized sales page, ready to convert.</li>
                <li>
                  **Secure Payment** : Direct integration with PayPal (and Stripe optionally) for fluid and secure
                  transactions.
                </li>
                <li>
                  **Instant Confirmation** : The customer receives an immediate order confirmation after purchase.
                </li>
                <li>**Return Management** : Simplified process for refunds if necessary.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Truck className="w-6 h-6 text-purple-400" />
                Automated Product Delivery
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>**Payment Detection** : The system automatically detects each successful payment.</li>
                <li>
                  **Instant Email Sending** : The digital product (PDF, ZIP, link) is sent by email to the customer
                  seconds after purchase.
                </li>
                <li>**Secure Access** : Download links are secure and unique for each purchase.</li>
                <li>**Automated Support** : Automated responses to frequently asked questions about delivery.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Revenus projetés */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">💰 PROJECTED AUTOMATED REVENUE</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">5 sales/day</div>
                <div className="text-gray-400">= 150 sales/month</div>
                <div className="text-white font-bold">≈ 3,000€/month</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">10 sales/day</div>
                <div className="text-gray-400">= 300 sales/month</div>
                <div className="text-white font-bold">≈ 6,000€/month</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">20 sales/day</div>
                <div className="text-gray-400">= 600 sales/month</div>
                <div className="text-white font-bold">≈ 12,000€/month</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-400">50 sales/day</div>
                <div className="text-gray-400">= 1,500 sales/month</div>
                <div className="text-white font-bold">≈ 30,000€/month</div>
              </div>
            </div>
            <p className="text-yellow-300 font-bold">
              🎯 Realistic goal to start : 5-10 sales/day with targeted marketing
            </p>
          </CardContent>
        </Card>

        {/* Votre Rôle */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-yellow-300 font-bold text-xl mb-4 flex items-center justify-center gap-2">
              <DollarSign className="w-6 h-6" />
              Your Role : Zero Intervention !
            </h3>
            <p className="text-gray-300 text-lg">
              Once configured, this system manages everything : from payment reception to product delivery. You can
              focus on creating new products and marketing.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-green-400 font-bold">
                <CheckCircle className="w-5 h-5" /> Automated Payments
              </div>
              <div className="flex items-center gap-2 text-green-400 font-bold">
                <CheckCircle className="w-5 h-5" /> Instant Delivery
              </div>
              <div className="flex items-center gap-2 text-green-400 font-bold">
                <CheckCircle className="w-5 h-5" /> Basic Customer Support
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works Card */}
        <Card className="bg-gray-800 text-white border-gray-700 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-400">Comment ça Marche ?</CardTitle>
            <CardDescription className="text-gray-400 mt-2">Un aperçu du flux de travail automatisé.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <p>
              Notre système utilise l'IA pour créer du contenu pertinent, puis le diffuse sur vos canaux de marketing.
              Il suit les interactions et les conversions pour vous fournir des données exploitables.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>**Contenu IA :** Génération d'articles de blog, de scripts vidéo, de posts sociaux.</li>
              <li>**Diffusion :** Planification et publication automatique sur vos plateformes.</li>
              <li>**Engagement :** Envoi d'emails personnalisés basés sur le comportement de l'utilisateur.</li>
              <li>**Analyse :** Rapports détaillés sur les clics, les conversions et les revenus.</li>
            </ul>
            <Button asChild className="mt-4 bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/admin">
                <Settings className="mr-2 h-5 w-5" />
                Configurer l'Automatisation
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
