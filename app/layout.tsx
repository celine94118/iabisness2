import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { PAYPAL_CLIENT_ID, PAYPAL_SANDBOX_MODE } from "@/lib/paypal-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lince2 - Système d'Affiliation Automatisé",
  description:
    "Votre plateforme complète pour vendre des produits numériques et automatiser votre business d'affiliation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const paypalOptions = {
    clientId: PAYPAL_CLIENT_ID,
    currency: "EUR",
    intent: "capture",
    "data-sdk-integration-source": "integrationbuilder_sc",
    // @ts-ignore
    "enable-funding": "paylater,card", // Enable Pay Later and Card options
    "disable-funding": "credit,venmo", // Disable specific funding sources if needed
    "data-client-token": "YOUR_CLIENT_TOKEN", // Optional: if you have a client token
    "data-namespace": "paypal", // Optional: if you want to use a custom namespace
    "data-page-type": "product-details", // Optional: for analytics
    "data-order-id": "ORDER_ID", // Optional: if you have an existing order ID
    "data-buyer-country": "FR", // Optional: for country-specific rendering
    "data-locale": "fr_FR", // Optional: for locale-specific rendering
    "data-debug": PAYPAL_SANDBOX_MODE ? "true" : "false", // Enable debug mode for sandbox
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PayPalScriptProvider options={paypalOptions}>{children}</PayPalScriptProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
