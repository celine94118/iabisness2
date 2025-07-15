"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface PaypalPaymentButtonProps {
  productId: string
  productName: string
  price: number
  currency?: string
  onPaymentSuccess?: (orderId: string) => void
  onPaymentError?: (error: any) => void
}

export function PaypalPaymentButton({
  productId,
  productName,
  price,
  currency = "EUR",
  onPaymentSuccess,
  onPaymentError,
}: PaypalPaymentButtonProps) {
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
        title: "Payment Error",
        description: `Could not create PayPal order: ${error instanceof Error ? error.message : String(error)}`,
        variant: "destructive",
      })
      onPaymentError?.(error)
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
          title: "Payment Successful!",
          description: `Your purchase of "${productName}" has been confirmed.`,
        })
        onPaymentSuccess?.(data.orderID as string)

        // Trigger product email sending
        await fetch("/api/send-product-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "celine.valente94118@gmail.com", // Replace with actual customer email from your auth system
            productName: productName,
            downloadLink: "https://your-product-download-link.com/product.pdf", // Replace with actual download link
          }),
        })
      } else {
        toast({
          title: "Payment Not Completed",
          description: `Payment status: ${details.status}`,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error capturing PayPal payment:", error)
      toast({
        title: "Payment Error",
        description: `Could not finalize payment: ${error instanceof Error ? error.message : String(error)}`,
        variant: "destructive",
      })
      onPaymentError?.(error)
    } finally {
      setLoading(false)
    }
  }

  const onError = (err: Record<string, unknown>) => {
    console.error("PayPal Buttons Error:", err)
    toast({
      title: "PayPal Error",
      description: "An error occurred with PayPal buttons. Please try again.",
      variant: "destructive",
    })
    onPaymentError?.(err)
    setLoading(false)
  }

  const onCancel = (data: Record<string, unknown>) => {
    console.log("PayPal payment cancelled:", data)
    toast({
      title: "Payment Cancelled",
      description: "You cancelled the PayPal transaction.",
    })
    setLoading(false)
  }

  return (
    <Card className="w-full max-w-md bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-400" />
          Acheter {productName}
        </CardTitle>
        <CardDescription className="text-gray-400">
          Prix: {price.toFixed(2)} {currency}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PayPalButtons
          style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          onCancel={onCancel}
          disabled={loading}
        />
        {loading && <p className="text-center text-gray-400">Loading PayPal button...</p>}
      </CardContent>
    </Card>
  )
}
