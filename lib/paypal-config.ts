// lib/paypal-config.ts
// Configuration pour l'API PayPal.

export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID"
export const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "YOUR_PAYPAL_CLIENT_SECRET"
export const PAYPAL_SANDBOX_MODE = process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_MODE === "true"

export function getPaypalApiBaseUrl(): string {
  const isSandbox = process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_MODE === "true"
  return isSandbox ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com"
}

export async function generateAccessToken() {
  try {
    const PAYPAL_CLIENT_ID_SERVER = process.env.PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID" // Use non-public for server-side
    const PAYPAL_CLIENT_SECRET_SERVER = process.env.PAYPAL_CLIENT_SECRET || "YOUR_PAYPAL_CLIENT_SECRET" // Use non-public for server-side
    if (!PAYPAL_CLIENT_ID_SERVER || !PAYPAL_CLIENT_SECRET_SERVER) {
      throw new Error("MISSING_API_CREDENTIALS")
    }
    const auth = Buffer.from(PAYPAL_CLIENT_ID_SERVER + ":" + PAYPAL_CLIENT_SECRET_SERVER).toString("base64")
    const base = getPaypalApiBaseUrl()
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error("Failed to generate Access Token:", error)
    throw error
  }
}

export async function createOrder(amount: string, currency = "EUR") {
  const accessToken = await generateAccessToken()
  const base = getPaypalApiBaseUrl()
  const url = `${base}/v2/checkout/orders`
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: currency,
          value: amount,
        },
      },
    ],
    application_context: {
      return_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/paypal-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/paypal-cancel`,
      brand_name: "Votre Business Digital",
      locale: "fr-FR",
      landing_page: "BILLING",
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
    },
  }

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  })

  return handleResponse(response)
}

export async function captureOrder(orderId: string) {
  const accessToken = await generateAccessToken()
  const base = getPaypalApiBaseUrl()
  const url = `${base}/v2/checkout/orders/${orderId}/capture`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return handleResponse(response)
}

export const getPaypalCheckoutScriptUrl = () => {
  return `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR`
}

async function handleResponse(response: Response) {
  if (response.status === 200 || response.status === 201) {
    return response.json()
  }

  const errorMessage = await response.text()
  throw new Error(errorMessage)
}
