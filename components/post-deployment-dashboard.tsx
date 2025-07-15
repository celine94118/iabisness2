"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, BarChart, DollarSign, Users, TrendingUp } from "lucide-react"
import { useState } from "react"

export function PostDeploymentDashboard() {
  const [salesData, setSalesData] = useState([120, 150, 130, 180, 200, 190, 220]) // Dummy data
  const [trafficData, setTrafficData] = useState([500, 600, 550, 700, 750, 720, 800]) // Dummy data

  const totalSales = salesData.reduce((sum, val) => sum + val, 0)
  const totalTraffic = trafficData.reduce((sum, val) => sum + val, 0)
  const conversionRate = totalTraffic > 0 ? ((totalSales / 10 / totalTraffic) * 100).toFixed(2) : "0.00" // Assuming average sale value of 10 units

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenus Totaux</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSales} €</div>
          <p className="text-xs text-muted-foreground">+20.1% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Visiteurs Uniques</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTraffic}</div>
          <p className="text-xs text-muted-foreground">+180.1% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Taux de Conversion</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{conversionRate}%</div>
          <p className="text-xs text-muted-foreground">+3.1% par rapport au mois dernier</p>
        </CardContent>
      </Card>

      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Ventes par Jour</CardTitle>
          <CardDescription>Aperçu des ventes sur la dernière semaine.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder for a chart component */}
          <div className="h-[200px] flex items-center justify-center bg-gray-700 rounded-md">
            <LineChart className="w-16 h-16 text-gray-500" />
            <span className="ml-2 text-gray-500">Graphique des ventes (données fictives)</span>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Trafic par Source</CardTitle>
          <CardDescription>Distribution du trafic sur votre site.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder for a chart component */}
          <div className="h-[200px] flex items-center justify-center bg-gray-700 rounded-md">
            <BarChart className="w-16 h-16 text-gray-500" />
            <span className="ml-2 text-gray-500">Graphique du trafic (données fictives)</span>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-full flex justify-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Actualiser les Données</Button>
      </div>
    </div>
  )
}
