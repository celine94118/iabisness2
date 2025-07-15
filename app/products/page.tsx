import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { digitalProducts } from "@/lib/products"
import { PaypalIntegration } from "@/components/paypal-integration"
import Image from "next/image"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-green-400">Nos Produits Numériques</h1>
        <p className="text-gray-300 mt-2">Découvrez notre sélection de produits numériques prêts à être vendus.</p>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {digitalProducts.map((product) => (
          <Card key={product.id} className="bg-gray-700 text-white border-gray-600 flex flex-col">
            <CardHeader className="flex-grow">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <CardTitle className="text-2xl text-green-300">{product.name}</CardTitle>
              <CardDescription className="text-gray-400 mt-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold text-yellow-300 mb-4">
                {product.price.toFixed(2)} {product.currency}
              </div>
              <PaypalIntegration
                productId={product.id}
                productName={product.name}
                price={product.price}
                currency={product.currency}
              />
            </CardContent>
          </Card>
        ))}
      </main>
      <footer className="py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Lince2. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
