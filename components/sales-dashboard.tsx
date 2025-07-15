"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, ShoppingCart } from "lucide-react"
import { useState } from "react"

export function SalesDashboard() {
  const [salesData, setSalesData] = useState([
    { date: "2024-07-08", amount: 120.0, product: "Guide Argent Ligne" },
    { date: "2024-07-09", amount: 150.0, product: "Formation Affiliation" },
    { date: "2024-07-10", amount: 130.0, product: "Templates Pack" },
    { date: "2024-07-11", amount: 180.0, product: "Stratégies Trafic" },
    { date: "2024-07-12", amount: 200.0, product: "Business Automatisé" },
    { date: "2024-07-13", amount: 190.0, product: "Guide Argent Ligne" },
    { date: "2024-07-14", amount: 220.0, product: "Formation Affiliation" },
  ])

  const totalRevenue = salesData.reduce((sum, sale) => sum + sale.amount, 0).toFixed(2)
  const totalSalesCount = salesData.length
  const averageSaleValue = totalSalesCount > 0 ? (Number.parseFloat(totalRevenue) / totalSalesCount).toFixed(2) : "0.00"

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenus Totaux</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalRevenue} €</div>
          <p className="text-xs text-muted-foreground">+20.1% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Nombre de Ventes</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSalesCount}</div>
          <p className="text-xs text-muted-foreground">+15% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Valeur Moyenne par Vente</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageSaleValue} €</div>
          <p className="text-xs text-muted-foreground">+3.1% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Dernières Ventes</CardTitle>
          <CardDescription>Historique des transactions récentes.</CardDescription>
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
                {salesData.map((sale, index) => (
                  <tr key={index} className="border-b border-gray-700 last:border-b-0">
                    <td className="py-2 px-4">{sale.date}</td>
                    <td className="py-2 px-4">{sale.product}</td>
                    <td className="py-2 px-4 text-right">{sale.amount.toFixed(2)} €</td>
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
