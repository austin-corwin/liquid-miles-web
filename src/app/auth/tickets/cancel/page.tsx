'use client'
// import { loadStripe } from '@stripe/stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import { useRouter } from 'next/router'

// const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Cancel() {
  //   const stripePromise = loadStripe(
  //     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  //   )
  //   const handleCheckout = async () => {
  //     const stripe = await stripePromise
  //     const response = await fetch('/api/checkout-sessions/create', {
  //       method: 'POST',
  //     })
  //     const session = await response.json()
  //     await stripe.redirectToCheckout({ sessionId: session.id })
  //   }
  //   const router = useRouter()
  //   const { session_id } = router.query
  return (
    <div>
      <h1>Cancel payment screen</h1>
      {/* <p>Session ID: {session_id}</p> */}
      {/* <button onClick={handleCheckout}>Checkout</button> */}
    </div>
  )
}
