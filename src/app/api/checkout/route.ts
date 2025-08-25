import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-04-30.basil',
})
export async function GET(req: Request) {
  const url = new URL(req.url)
  // const priceIdFromQuery = url.searchParams.get('priceId')
  const priceId = url.searchParams.get('priceId')

  if (!priceId) {
    return new Response(JSON.stringify({ error: 'Missing priceId' }), {
      status: 400,
    })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://${req.headers.get('host')}/tickets/success`,
    cancel_url: `http://${req.headers.get('host')}/tickets`,
  })
  return Response.json({ sessionId: session.id })
}
