'use client'
import { loadStripe } from '@stripe/stripe-js'
// import { loadStripe } from '@stripe/stripe-js'

// const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Home() {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  )
  const handleCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch('/api/checkout', {
      method: 'POST',
    })
    const session = await response.json()
    await stripe.redirectToCheckout({ sessionId: session.id })
  }
  return (
    <div>
      <h1>Stripe Checkout Example</h1>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}
