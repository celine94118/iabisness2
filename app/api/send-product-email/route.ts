import { NextResponse } from "next/server"
import { Resend } from "resend"
import { digitalProducts } from "@/lib/products"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { to, subject, productName, transactionId } = await req.json()

    // Find the product to get its download URL
    const product = digitalProducts.find((p) => p.name === productName)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const emailContent = `
      <h1>Merci pour votre achat !</h1>
      <p>Bonjour,</p>
      <p>Nous vous remercions d'avoir acheté "${productName}" sur Lince2.</p>
      <p>Votre transaction ID est : <strong>${transactionId}</strong></p>
      <p>Vous pouvez télécharger votre produit ici : <a href="${process.env.NEXT_PUBLIC_VERCEL_URL}${product.downloadUrl}">${product.name}</a></p>
      <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
      <p>Cordialement,</p>
      <p>L'équipe Lince2</p>
    `

    await resend.emails.send({
      from: "Lince2 <onboarding@resend.dev>", // Replace with your verified Resend domain
      to: [to],
      subject: subject,
      html: emailContent,
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Failed to send product email:", error)
    return NextResponse.json({ error: "Failed to send product email" }, { status: 500 })
  }
}
