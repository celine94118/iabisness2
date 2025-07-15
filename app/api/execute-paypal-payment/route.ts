import { NextResponse } from "next/server"
import { captureOrder } from "@/lib/paypal-config"

export async function POST(request: Request) {
  try {
    const { orderID } = await request.json()
    const capture = await captureOrder(orderID)
    return NextResponse.json(capture)
  } catch (error) {
    console.error("Failed to capture PayPal payment:", error)
    return NextResponse.json({ error: "Failed to capture PayPal payment" }, { status: 500 })
  }
}
