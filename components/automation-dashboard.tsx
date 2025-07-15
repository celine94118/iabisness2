"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Clock, Activity } from "lucide-react"
import { useState, useEffect } from "react"
import type { AutomationTask, AutomationLog } from "@/types/automation"
import { getAutomationStatus, getAutomationLogs } from "@/lib/automation-engine" // Assuming these functions exist

export function AutomationDashboard() {
  const [tasks, setTasks] = useState<AutomationTask[]>([])
  const [logs, setLogs] = useState<AutomationLog[]>([])

  useEffect(() => {
    // In a real app, you'd fetch this from an API route
    setTasks(getAutomationStatus())
    setLogs(getAutomationLogs())
  }, [])

  const handleRefresh = () => {
    setTasks(getAutomationStatus())
    setLogs(getAutomationLogs())
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tâches Actives</CardTitle>
          <Zap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{tasks.filter((t) => t.status === "active").length}</div>
          <p className="text-xs text-muted-foreground">sur {tasks.length} tâches configurées</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Dernière Exécution</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {logs.length > 0 ? new Date(logs[0].timestamp).toLocaleTimeString() : "N/A"}
          </div>
          <p className="text-xs text-muted-foreground">
            {logs.length > 0 ? new Date(logs[0].timestamp).toLocaleDateString() : "Aucune exécution récente"}
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Erreurs Récentes</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{logs.filter((l) => l.level === "error").length}</div>
          <p className="text-xs text-muted-foreground">depuis la dernière actualisation</p>
        </CardContent>
      </Card>

      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Statut des Tâches d'Automatisation</CardTitle>
          <CardDescription>Aperçu de vos tâches automatisées.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-2 px-4 text-gray-400">Tâche</th>
                  <th className="py-2 px-4 text-gray-400">Statut</th>
                  <th className="py-2 px-4 text-gray-400">Dernière Exécution</th>
                  <th className="py-2 px-4 text-gray-400">Prochaine Exécution</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-700 last:border-b-0">
                    <td className="py-2 px-4">{task.name}</td>
                    <td className="py-2 px-4 capitalize">{task.status}</td>
                    <td className="py-2 px-4">{new Date(task.lastRun).toLocaleString()}</td>
                    <td className="py-2 px-4">{task.nextRun ? new Date(task.nextRun).toLocaleString() : "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Journaux d'Activité</CardTitle>
          <CardDescription>Historique des événements d'automatisation.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-y-auto h-64 bg-gray-700 p-4 rounded-md text-sm font-mono">
            {logs.map((log, index) => (
              <p
                key={index}
                className={
                  log.level === "error" ? "text-red-400" : log.level === "warn" ? "text-yellow-400" : "text-gray-300"
                }
              >
                [{new Date(log.timestamp).toLocaleTimeString()}] [{log.level.toUpperCase()}] {log.message}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="col-span-full flex justify-center">
        <Button onClick={handleRefresh} className="bg-purple-600 hover:bg-purple-700 text-white">
          Actualiser le Tableau de Bord
        </Button>
      </div>
    </div>
  )
}
