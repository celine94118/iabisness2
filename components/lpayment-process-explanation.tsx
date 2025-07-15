"use client" // Nécessaire si tu utilises des hooks ou des interactions

export function PaymentProcessExplanation() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Étape 1 */}
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-bold text-lg text-purple-300">1. Achat</h3>
          <p className="mt-2 text-gray-300">
            Le client paie via PayPal, Stripe ou carte bancaire.
          </p>
        </div>

        {/* Étape 2 */}
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-bold text-lg text-blue-300">2. Validation</h3>
          <p className="mt-2 text-gray-300">
            Le paiement est vérifié et approuvé automatiquement.
          </p>
        </div>

        {/* Étape 3 */}
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="font-bold text-lg text-green-300">3. Livraison</h3>
          <p className="mt-2 text-gray-300">
            Le produit digital est envoyé immédiatement par email.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-300">Délais de Paiement</h3>
        <p className="mt-2 text-gray-300">
          Les fonds sont disponibles sous 2-5 jours ouvrés selon la méthode de paiement.
        </p>
      </div>
    </div>
  )
}
