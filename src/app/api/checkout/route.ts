import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-04-30.basil',
})

export async function GET(req: Request) {
  const url = new URL(req.url)
  const priceId = url.searchParams.get('priceId')
  const includeHoodie = url.searchParams.get('hoodie') === '1'
  const hoodiePriceId = process.env.NEXT_PUBLIC_HOODIE

  if (!priceId) {
    return new Response(JSON.stringify({ error: 'Missing priceId' }), {
      status: 400,
    })
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    {
      price: priceId,
      quantity: 1,
    },
  ]

  if (includeHoodie) {
    if (!hoodiePriceId) {
      return new Response(
        JSON.stringify({ error: 'Missing NEXT_PUBLIC_HOODIE price ID' }),
        { status: 400 }
      )
    }
    line_items.push({
      price: hoodiePriceId,
      quantity: 1,
    })
  }

  const host = req.headers.get('host')
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `http://${host}/tickets/success`,
    cancel_url: `http://${host}/tickets`,
  })
  return Response.json({ sessionId: session.id })
}
