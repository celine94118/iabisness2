import { DirectSignupLinks } from "@/components/direct-signup-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkIcon } from "lucide-react"

export default function SignupNowPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Inscrivez-vous Maintenant !</h1>
        <p className="text-gray-300 mt-2">Accédez directement aux plateformes d'affiliation les plus performantes.</p>
      </header>
      <main className="flex-1 container mx-auto">
        <Card className="w-full bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <LinkIcon className="w-6 h-6 text-green-400" />
              Liens d'Inscription Directs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DirectSignupLinks />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
