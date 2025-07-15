"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "@/components/ui/external-link"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, DollarSign, CheckCircle, AlertTriangle, Copy, Globe, Lock, Settings } from "lucide-react"
import Link from "next/link"

interface PaymentProvider {
  name: string
  logo: string
  fees: string
  setupTime: string
  difficulty: "Facile" | "Moyen"
  pros: string[]
  cons: string[]
  signupUrl: string
  requirements: string[]
}

export function PaymentSetupGuide() {
  const [selectedProvider, setSelectedProvider] = useState<string>("stripe")
  const [userInfo, setUserInfo] = useState({
    email: "celine.valente94118@gmail.com",
    phone: "+33 6 XX XX XX XX",
    address: "Votre adresse complète",
    siret: "Votre SIRET (si entreprise)",
  })
  const [stripePublicKey, setStripePublicKey] = useState("")
  const [stripeSecretKey, setStripeSecretKey] = useState("")
  const [clientId, setClientId] = useState(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "")
  const [paypalSecret, setPaypalSecret] = useState("") // PayPal Secret is sensitive, not public
  const [sandboxMode, setSandboxMode] = useState(process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_MODE === "true")
  const [resendApiKey, setResendApiKey] = useState("") // Resend API key is sensitive, not public
  const { toast } = useToast()

  const paymentProviders: PaymentProvider[] = [
    {
      name: "Stripe",
      logo: "💳",
      fees: "2.9% + 0.25€ par transaction",
      setupTime: "15 minutes",
      difficulty: "Facile",
      pros: [
        "Intégration très simple",
        "Paiements instantanés",
        "Interface moderne",
        "Support excellent",
        "Accepte toutes les cartes",
      ],
      cons: ["Frais un peu élevés", "Vérification d'identité requise"],
      signupUrl: "https://stripe.com/fr",
      requirements: ["Pièce d'identité", "RIB/IBAN", "Justificatif de domicile", "SIRET (si entreprise)"],
    },
    {
      name: "PayPal",
      logo: "🅿️",
      fees: "3.4% + 0.35€ par transaction",
      setupTime: "10 minutes",
      difficulty: "Facile",
      pros: [
        "Très connu des clients",
        "Setup ultra rapide",
        "Pas de vérification complexe",
        "Protection acheteur/vendeur",
      ],
      cons: ["Frais plus élevés", "Peut bloquer les comptes", "Interface moins moderne"],
      signupUrl: "https://www.paypal.com/fr/business",
      requirements: ["Email valide", "RIB/IBAN", "Vérification téléphone"],
    },
    {
      name: "Sumup",
      logo: "📱",
      fees: "1.95% par transaction",
      setupTime: "20 minutes",
      difficulty: "Moyen",
      pros: ["Frais les plus bas", "Solution française", "Pas de frais fixes", "Terminal physique inclus"],
      cons: ["Moins connu", "Intégration plus complexe", "Support limité"],
      signupUrl: "https://sumup.fr",
      requirements: ["Pièce d'identité", "RIB français", "Justificatif activité", "SIRET obligatoire"],
    },
  ]

  const selectedProviderData = paymentProviders.find((p) => p.name.toLowerCase() === selectedProvider)

  const copyInfo = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleSave = () => {
    // In a real application, you would save these to a database or secure configuration
    // For this example, we'll just show a toast.
    console.log("Stripe Public Key:", stripePublicKey)
    console.log("Stripe Secret Key:", stripeSecretKey)
    console.log("PayPal Client ID:", clientId)
    console.log("PayPal Secret (first 5 chars):", paypalSecret.substring(0, 5) + "...")
    console.log("Sandbox Mode:", sandboxMode)
    console.log("Resend API Key (first 5 chars):", resendApiKey.substring(0, 5) + "...")
    toast({
      title: "Configuration de paiement sauvegardée",
      description: "Les paramètres ont été mis à jour (localement pour cet exemple).",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm border-blue-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              CONFIGURATION DES PAIEMENTS RÉELS
            </CardTitle>
            <p className="text-blue-300 text-lg">
              Configurez votre système de paiement pour recevoir l'argent directement sur votre compte !
            </p>
          </CardHeader>
        </Card>

        {/* Alerte importante */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-yellow-300 font-bold text-xl mb-2">⚠️ ÉTAPE OBLIGATOIRE</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    • <strong>Without payment configuration = NO MONEY received</strong>
                  </p>
                  <p>
                    • <strong>You must create an account on a payment platform</strong>
                  </p>
                  <p>
                    • <strong>Money goes directly to your bank account</strong>
                  </p>
                  <p>
                    • <strong>Configure once, then everything is automatic</strong>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sélecteur de plateforme */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white">1️⃣ Choose Your Payment Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {paymentProviders.map((provider) => (
                <Card
                  key={provider.name.toLowerCase()}
                  className={`cursor-pointer transition-all ${
                    selectedProvider === provider.name.toLowerCase()
                      ? "bg-blue-600/20 border-blue-500/30 ring-2 ring-blue-400/50"
                      : "bg-black/20 border-gray-600 hover:bg-black/30"
                  }`}
                  onClick={() => setSelectedProvider(provider.name.toLowerCase())}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-3">{provider.logo}</div>
                    <h3 className="text-white font-bold text-lg mb-2">{provider.name}</h3>
                    <div className="space-y-2 mb-4">
                      {provider.name === "Stripe" && (
                        <div className="bg-green-600/20 p-3 rounded border border-green-500/30">
                          <p className="text-green-300 font-bold">Stripe Configuration</p>
                          <p className="text-gray-300">
                            1. Rendez-vous sur le{" "}
                            <a
                              href="https://dashboard.stripe.com/apikeys"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline inline-flex items-center gap-1"
                            >
                              Tableau de bord des développeurs Stripe <ExternalLink className="w-4 h-4" />
                            </a>
                            .
                          </p>
                          <p>2. Copiez votre "Publishable key" et votre "Secret key".</p>
                          <div className="space-y-2">
                            <Label htmlFor="stripe-public-key">Stripe Publishable Key</Label>
                            <Input
                              id="stripe-public-key"
                              type="text"
                              placeholder="Entrez votre clé publique Stripe"
                              value={stripePublicKey}
                              onChange={(e) => setStripePublicKey(e.target.value)}
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="stripe-secret-key">Stripe Secret Key</Label>
                            <Input
                              id="stripe-secret-key"
                              type="password"
                              placeholder="Entrez votre clé secrète Stripe"
                              value={stripeSecretKey}
                              onChange={(e) => setStripeSecretKey(e.target.value)}
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>
                        </div>
                      )}
                      {provider.name === "PayPal" && (
                        <div className="bg-purple-600/20 p-3 rounded border border-purple-500/30">
                          <p className="text-purple-300 font-bold">PayPal Configuration</p>
                          <p className="text-gray-300">
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
                          <p>2. Copiez votre "Client ID" et votre "Secret" pour l'environnement "Live" ou "Sandbox".</p>
                          <div className="space-y-2">
                            <Label htmlFor="paypal-client-id">PayPal Client ID</Label>
                            <Input
                              id="paypal-client-id"
                              type="text"
                              placeholder="Entrez votre Client ID PayPal"
                              value={clientId}
                              onChange={(e) => setClientId(e.target.value)}
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="paypal-secret">PayPal Secret</Label>
                            <Input
                              id="paypal-secret"
                              type="password"
                              placeholder="Entrez votre Secret PayPal"
                              value={paypalSecret}
                              onChange={(e) => setPaypalSecret(e.target.value)}
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="sandbox-mode"
                          checked={sandboxMode}
                          onCheckedChange={(checked) => setSandboxMode(!!checked)}
                          className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                        />
                        <Label htmlFor="sandbox-mode">Activer le mode Sandbox (pour les tests)</Label>
                      </div>
                    </div>
                    <Button
                      className={`w-full ${
                        selectedProvider === provider.name.toLowerCase()
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}
                    >
                      {selectedProvider === provider.name.toLowerCase() ? "Selected" : "Choose"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Détails de la plateforme sélectionnée */}
        {selectedProviderData && (
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="text-3xl">{selectedProviderData.logo}</span>
                Configuration {selectedProviderData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-green-400 font-bold mb-2">✅ Advantages</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {selectedProviderData.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-red-400 font-bold mb-2">⚠️ Disadvantages</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {selectedProviderData.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-bold mb-2">📋 Required Documents</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {selectedProviderData.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-purple-400 font-bold mb-2">💰 Costs</h4>
                    <div className="text-gray-300 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Transaction fees :</span>
                        <span className="text-white font-bold">{selectedProviderData.fees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Setup time :</span>
                        <span className="text-green-400">{selectedProviderData.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly fees :</span>
                        <span className="text-green-400">0€</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => window.open(selectedProviderData.signupUrl, "_blank")}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Create my {selectedProviderData.name} account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Vos informations */}
        <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">2️⃣ Your Information for Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-white font-medium mb-2 block">Email</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.email)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">Phone</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.phone)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">Full address</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.address}
                    onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.address)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">SIRET (if company)</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.siret}
                    onChange={(e) => setUserInfo({ ...userInfo, siret: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.siret)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-blue-600/20 p-4 rounded-lg border border-blue-500/30">
              <h4 className="text-blue-300 font-bold mb-2">💡 Tip :</h4>
              <p className="text-gray-300 text-sm">
                Fill in your real information above, then copy it when registering on the payment platform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Processus de paiement */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white">3️⃣ How You Receive Money</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">1. Customer Buys</h4>
                <p className="text-gray-300 text-sm">On your automated site</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">2. Payment</h4>
                <p className="text-gray-300 text-sm">Stripe/PayPal processes</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">3. Security</h4>
                <p className="text-gray-300 text-sm">Money secured for 7 days</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">4. Transfer</h4>
                <p className="text-gray-300 text-sm">To your LCL account</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">5. Received !</h4>
                <p className="text-gray-300 text-sm">Money in your account</p>
              </div>
            </div>

            <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30 text-center">
              <h3 className="text-green-300 font-bold text-xl mb-2">💰 RECEIPT DELAY</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">Stripe</div>
                  <div className="text-gray-400">2-7 business days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">PayPal</div>
                  <div className="text-gray-400">1-3 business days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">SumUp</div>
                  <div className="text-gray-400">1-2 business days</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exemple concret */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <h3 className="text-yellow-300 font-bold text-xl mb-4">💡 CONCRETE EXAMPLE</h3>
            <div className="bg-black/20 p-4 rounded-lg">
              <p className="text-gray-300 mb-4">
                <strong>Monday 10am :</strong> A customer buys your "Online Money Guide" for 29€
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Monday 10:01am :</strong> Stripe processes the payment and takes its commission (29€ - 1.09€ =
                27.91€)
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Monday 10:02am :</strong> The customer automatically receives the PDF by email
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Friday :</strong> Stripe transfers 27.91€ to your LCL account
              </p>
              <div className="bg-green-600/20 p-3 rounded border border-green-500/30">
                <p className="text-green-300 font-bold">
                  ✅ You receive 27.91€ net in your bank account without doing anything!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guide de Configuration des Paiements */}
        <Card className="bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-400" />
              Payment Configuration Guide
            </CardTitle>
            <CardDescription className="text-gray-400">
              Follow these steps to configure your payment system and start earning.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">1. Configure your PayPal account</h3>
                <p className="text-gray-300">
                  This is the crucial first step. You will need a PayPal Business account and your API credentials.
                </p>
                <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/setup-paypal">Go to PayPal Configuration</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">2. Create your digital products</h3>
                <p className="text-gray-300">
                  Define the products you want to sell, their prices, and the files to deliver.
                </p>
                <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/create-product">Create a Product</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">3. Test the payment process</h3>
                <p className="text-gray-300">
                  Make sure everything works correctly by performing a test purchase in Sandbox mode.
                </p>
                <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/payment-reality">Test Payment</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">4. Launch your marketing campaigns</h3>
                <p className="text-gray-300">Use automation tools to promote your products and attract customers.</p>
                <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/marketing-automation">Manage Marketing</Link>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 text-white">
              Sauvegarder la Configuration
            </Button>
          </CardFooter>
        </Card>

        {/* PayPal Setup */}
        <Card className="bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl">1. Configuration PayPal</CardTitle>
            <CardDescription className="text-gray-400">
              Connectez votre compte PayPal pour recevoir les paiements.
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
            <p>
              3. Dans la section "REST API apps", cliquez sur "Create App" ou sélectionnez une application existante.
            </p>
            <p>
              4. Copiez votre "Client ID" pour l'environnement "Live" (pour les paiements réels) ou "Sandbox" (pour les
              tests).
            </p>
            <div className="space-y-2">
              <Label htmlFor="paypal-client-id" className="text-lg">
                Votre Client ID PayPal (NEXT_PUBLIC_PAYPAL_CLIENT_ID)
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
                id="paypal-sandbox-mode"
                checked={sandboxMode}
                onCheckedChange={(checked) => setSandboxMode(!!checked)}
                className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
              />
              <Label htmlFor="paypal-sandbox-mode" className="text-lg">
                Activer le mode Sandbox (pour les tests) (NEXT_PUBLIC_PAYPAL_SANDBOX_MODE)
              </Label>
            </div>
            <p className="text-gray-400 text-sm">
              N'oubliez pas d'ajouter votre `PAYPAL_CLIENT_SECRET` dans les variables d'environnement Vercel (non
              public).
            </p>
          </CardContent>
        </Card>

        {/* Resend Setup */}
        <Card className="bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl">2. Configuration Resend (Emails)</CardTitle>
            <CardDescription className="text-gray-400">
              Configurez Resend pour envoyer des emails de confirmation de produit.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              1. Créez un compte sur{" "}
              <a
                href="https://resend.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                Resend.com <ExternalLink className="w-4 h-4" />
              </a>
              .
            </p>
            <p>2. Vérifiez votre domaine d'envoi (par exemple, `votre-domaine.com`).</p>
            <p>3. Créez une clé API et copiez-la.</p>
            <div className="space-y-2">
              <Label htmlFor="resend-api-key" className="text-lg">
                Votre Clé API Resend (RESEND_API_KEY)
              </Label>
              <Input
                id="resend-api-key"
                type="password"
                placeholder="Entrez votre Clé API Resend ici"
                value={resendApiKey}
                onChange={(e) => setResendApiKey(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Cette clé doit être ajoutée comme variable d'environnement `RESEND_API_KEY` sur Vercel.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
