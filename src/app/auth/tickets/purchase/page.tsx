'use client'
import getStripe from '@/utils/getStripe'

export default function Home() {
  const stripePromise = getStripe()
  const handleCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch('/api/checkout', {
      method: 'GET',
    })
    const data = await response.json()
    console.log('session is', data)
    if (data && data.sessionId) {
      console.log('redirect to checkout', data)
      await stripe.redirectToCheckout({ sessionId: data.sessionId })
    }
  }
  return (
    <div>
      <h1>Stripe Checkout Example</h1>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}
