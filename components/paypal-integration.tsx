"use client"

import { PayPalButtons } from "@paypal/react-paypal-js"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface PaypalIntegrationProps {
  productId: string
  productName: string
  price: number
  currency: string
}

export function PaypalIntegration({ productId, productName, price, currency }: PaypalIntegrationProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const createOrder = async (data: Record<string, unknown>, actions: any) => {
    setLoading(true)
    try {
      const response = await fetch("/api/create-paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          productName,
          price,
          currency,
        }),
      })

      const order = await response.json()
      if (order.id) {
        return order.id
      } else {
        throw new Error(order.error || "Failed to create PayPal order")
      }
    } catch (error) {
      console.error("Error creating PayPal order:", error)
      toast({
        title: "Erreur de paiement",
        description: `Impossible de créer la commande PayPal: ${error instanceof Error ? error.message : String(error)}`,
        variant: "destructive",
      })
      setLoading(false)
      return "" // Return empty string to prevent PayPal from proceeding
    }
  }

  const onApprove = async (data: Record<string, unknown>, actions: any) => {
    setLoading(true)
    try {
      const response = await fetch("/api/execute-paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      })

      const details = await response.json()

      if (details.status === "COMPLETED") {
        toast({
          title: "Paiement réussi !",
          description: `Transaction ID: ${details.id}. Produit: ${productName}.`,
        })

        // Send product email
        await fetch("/api/send-product-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "customer@example.com", // Replace with actual customer email
            subject: `Votre produit: ${productName}`,
            productName: productName,
            transactionId: details.id,
          }),
        })
      } else {
        toast({
          title: "Paiement non complété",
          description: `Statut: ${details.status}`,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error executing PayPal payment:", error)
      toast({
        title: "Erreur de paiement",
        description: `Impossible d'exécuter le paiement PayPal: ${error instanceof Error ? error.message : String(error)}`,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const onError = (err: Record<string, unknown>) => {
    console.error("PayPal error:", err)
    toast({
      title: "Erreur PayPal",
      description: `Un problème est survenu lors du paiement: ${err.message || "Veuillez réessayer."}`,
      variant: "destructive",
    })
    setLoading(false)
  }

  const onCancel = (data: Record<string, unknown>) => {
    console.log("PayPal payment cancelled:", data)
    toast({
      title: "Paiement annulé",
      description: "Vous avez annulé la transaction PayPal.",
    })
    setLoading(false)
  }

  return (
    <div className="w-full">
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        onCancel={onCancel}
        disabled={loading}
      />
      {loading && <p className="text-center text-gray-400">Traitement du paiement...</p>}
    </div>
  )
}
