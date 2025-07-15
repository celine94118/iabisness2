"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, DollarSign, Users, TrendingUp, CheckCircle, Copy, ArrowRight, Star, Info } from "lucide-react"
import Link from "next/link"
import { programs } from "@/data/affiliate-programs"

interface AffiliateProgram {
  id: string
  name: string
  logo: string
  category: string
  description: string
  commission: string
  commissionType: string
  signupUrl: string
  requirements: string[]
  paymentSchedule: string
  cookieDuration: string
  averageEarnings: string
  difficulty: "Facile" | "Moyen" | "Difficile"
  popularity: number
  whyChoose: string[]
  isRecommended?: boolean
  payoutFrequency?: string
  notes?: string
  link?: string
  niche?: string
}

export default function AffiliateProgramsList() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [filter, setFilter] = useState("all") // 'all', 'recommended', 'high-commission', 'digital', 'physical', 'saas'

  const totalCommission = programs.reduce((sum, program) => sum + Number.parseFloat(program.commission), 0)

  const filteredPrograms = programs.filter((program) => {
    if (filter === "all") return true
    if (filter === "recommended") {
      return program.isRecommended
    }
    if (filter === "high-commission") {
      return Number.parseFloat(program.commission) >= 50
    }
    return program.category === filter
  })

  const copyEmail = () => {
    navigator.clipboard.writeText("celine.valente94118@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              <DollarSign className="w-10 h-10 text-green-400" />
              YOUR ROBOT'S AFFILIATE PROGRAMS
            </CardTitle>
            <p className="text-blue-300 text-lg">
              Here are the {programs.length} programs your robot works on automatically
            </p>
          </CardHeader>
        </Card>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
          >
            Tous les Programmes
          </Button>
          <Button
            variant={filter === "recommended" ? "default" : "outline"}
            onClick={() => setFilter("recommended")}
            className="bg-green-600 hover:bg-green-700 text-white border-green-600"
          >
            <Star className="mr-2 h-4 w-4" />
            Recommandés
          </Button>
          <Button
            variant={filter === "high-commission" ? "default" : "outline"}
            onClick={() => setFilter("high-commission")}
            className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600"
          >
            <Badge className="mr-2 bg-white text-orange-600">€</Badge>
            Grosses Commissions
          </Button>
          <Button
            variant={filter === "digital" ? "default" : "outline"}
            onClick={() => setFilter("digital")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Produits Numériques
          </Button>
          <Button
            variant={filter === "physical" ? "default" : "outline"}
            onClick={() => setFilter("physical")}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Produits Physiques
          </Button>
          <Button
            variant={filter === "saas" ? "default" : "outline"}
            onClick={() => setFilter("saas")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            SaaS
          </Button>
        </div>

        {/* Résumé global */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{totalCommission}€</div>
              <div className="text-green-300 text-sm">Total Commission</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{programs.length}</div>
              <div className="text-blue-300 text-sm">Active Programs</div>
            </CardContent>
          </Card>

          <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {Math.round(programs.reduce((sum, p) => sum + p.popularity, 0) / programs.length)}%
              </div>
              <div className="text-purple-300 text-sm">Average Popularity</div>
            </CardContent>
          </Card>

          <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {programs.filter((p) => p.difficulty === "Facile").length}
              </div>
              <div className="text-orange-300 text-sm">Easy Programs</div>
            </CardContent>
          </Card>
        </div>

        {/* Vos identifiants */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <h3 className="text-yellow-300 font-bold text-xl mb-4">🔑 YOUR CREDENTIALS FOR ALL ACCOUNTS :</h3>
            <div className="bg-black/20 p-4 rounded-lg flex justify-between items-center">
              <div className="space-y-2">
                <div className="text-white text-lg">
                  <strong>Email :</strong> celine.valente94118@gmail.com
                </div>
                <div className="text-white text-lg">
                  <strong>Password :</strong> celine1994$
                </div>
              </div>
              <Button
                onClick={copyEmail}
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/10"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copiedEmail ? "Copied !" : "Copy Email"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Liste détaillée des programmes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, index) => (
            <Card
              key={program.id}
              className="bg-gray-800 text-white border-gray-700 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  {program.name}
                  {program.isRecommended && <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />}
                </CardTitle>
                <CardDescription className="text-gray-400">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    {program.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    {program.commission}%
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    {program.payoutFrequency}
                  </Badge>
                </div>
                <p className="text-gray-300 text-sm">{program.notes}</p>
                <div className="flex justify-between items-center mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-900 hover:text-white bg-transparent"
                  >
                    <a href={program.signupUrl} target="_blank" rel="noopener noreferrer">
                      Visiter le Programme <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href={`/signup-now?program=${encodeURIComponent(program.name)}`}>
                      S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredPrograms.length === 0 && (
          <p className="text-center text-gray-400 text-lg">Aucun programme trouvé avec les filtres sélectionnés.</p>
        )}

        {/* Programmes d'affiliation recommandés */}
        {/* This section is now handled by the filter logic above */}

        {/* Instructions finales */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white text-2xl">🚀 NEXT STEPS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h4 className="text-white font-bold mb-2">Create accounts</h4>
                <p className="text-gray-300 text-sm">Use the buttons above to create your {programs.length} accounts</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">2️⃣</div>
                <h4 className="text-white font-bold mb-2">Retrieve links</h4>
                <p className="text-gray-300 text-sm">Copy your personalized affiliate links</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">3️⃣</div>
                <h4 className="text-white font-bold mb-2">Configure the robot</h4>
                <p className="text-gray-300 text-sm">Go to /admin to put your real links</p>
              </div>
            </div>

            <div className="text-center bg-green-600/20 p-4 rounded-lg border border-green-500/30">
              <p className="text-green-300 text-lg">
                <strong>Estimated total time :</strong> 25-30 minutes to create all accounts
              </p>
              <p className="text-white">
                <strong>Potential revenue :</strong> {totalCommission}€ total commission per sales cycle
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Conseil */}
        <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-500/30 text-blue-100 flex items-start gap-3">
          <Info className="w-6 h-6 mt-1" />
          <p>
            **Conseil :** Choisissez des programmes qui correspondent à votre niche et à votre audience. La pertinence
            est la clé du succès en affiliation.
          </p>
        </div>

        {/* Updated Programs List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {programs.map((program) => (
            <Card key={program.id} className="bg-gray-800 text-white border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="text-gray-400">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-300">
                  <span className="font-semibold">Niche:</span> {program.niche}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Commission:</span> {program.commission}
                </p>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:underline"
                >
                  Visiter le site <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
