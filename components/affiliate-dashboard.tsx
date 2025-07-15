"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, TrendingUp, LinkIcon } from "lucide-react"
import { useState } from "react"

export function AffiliateDashboard() {
  const [commissionData, setCommissionData] = useState([
    { date: "2024-07-08", amount: 15.0, product: "E-book X" },
    { date: "2024-07-09", amount: 25.0, product: "Formation Y" },
    { date: "2024-07-10", amount: 10.0, product: "Template Z" },
    { date: "2024-07-11", amount: 30.0, product: "E-book X" },
    { date: "2024-07-12", amount: 40.0, product: "Formation Y" },
  ])

  const totalCommissions = commissionData.reduce((sum, item) => sum + item.amount, 0).toFixed(2)
  const totalSales = commissionData.length
  const averageCommission = totalSales > 0 ? (Number.parseFloat(totalCommissions) / totalSales).toFixed(2) : "0.00"

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Commissions Totales</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalCommissions} €</div>
          <p className="text-xs text-muted-foreground">+12.5% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ventes Réalisées</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSales}</div>
          <p className="text-xs text-muted-foreground">+8% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Commission Moyenne</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageCommission} €</div>
          <p className="text-xs text-muted-foreground">-1.2% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Vos Liens d'Affiliation</CardTitle>
          <CardDescription>Copiez et partagez vos liens pour générer des ventes.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-5 w-5 text-blue-400" />
            <span className="font-mono text-sm bg-gray-700 p-2 rounded-md flex-1 truncate">
              https://votre-site.com/produit-1?ref=votreID
            </span>
            <Button size="sm" variant="secondary" className="bg-gray-600 hover:bg-gray-500 text-white">
              Copier
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-5 w-5 text-blue-400" />
            <span className="font-mono text-sm bg-gray-700 p-2 rounded-md flex-1 truncate">
              https://votre-site.com/produit-2?ref=votreID
            </span>
            <Button size="sm" variant="secondary" className="bg-gray-600 hover:bg-gray-500 text-white">
              Copier
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Historique des Commissions</CardTitle>
          <CardDescription>Détail de vos commissions récentes.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-2 px-4 text-gray-400">Date</th>
                  <th className="py-2 px-4 text-gray-400">Produit</th>
                  <th className="py-2 px-4 text-gray-400 text-right">Montant</th>
                </tr>
              </thead>
              <tbody>
                {commissionData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700 last:border-b-0">
                    <td className="py-2 px-4">{item.date}</td>
                    <td className="py-2 px-4">{item.product}</td>
                    <td className="py-2 px-4 text-right">{item.amount.toFixed(2)} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-full flex justify-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Actualiser les Données</Button>
      </div>
    </div>
  )
}
