import { NextResponse } from "next/server"
import { createOrder } from "@/lib/paypal-config"

export async function POST(request: Request) {
  try {
    const { productId, productName, price, currency } = await request.json()

    // In a real application, you would validate productId, productName, price, currency
    // against your database to ensure they are valid and prevent tampering.
    // For this example, we trust the client-side data.

    const order = await createOrder(price.toFixed(2), currency)
    return NextResponse.json(order)
  } catch (error) {
    console.error("Failed to create PayPal payment:", error)
    return NextResponse.json({ error: "Failed to create PayPal payment" }, { status: 500 })
  }
}
