import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "@/components/ui/external-link"
import { programs } from "@/data/affiliate-programs"
import Link from "next/link"

export function DirectSignupLinks() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Link href={program.link} target="_blank" rel="noopener noreferrer">
                S'inscrire maintenant <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
