import Stripe from 'stripe'
import {
  parseCheckoutMetadata,
  recordTicketPurchase,
} from '@/features/Tickets/recordTicketPurchase'

export const runtime = 'nodejs'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
})

export async function POST(req: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('Missing STRIPE_WEBHOOK_SECRET')
    return Response.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    )
  }

  const signature = req.headers.get('stripe-signature')
  if (!signature) {
    return Response.json({ error: 'Missing stripe-signature' }, { status: 400 })
  }

  const body = await req.text()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error('Stripe webhook signature verification failed', error)
    return Response.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.client_reference_id
    const metadata = parseCheckoutMetadata(session.metadata)

    if (!userId) {
      console.error('Checkout session missing client_reference_id', session.id)
      return Response.json({ error: 'Missing user id' }, { status: 400 })
    }

    if (!metadata) {
      console.error('Checkout session missing ticket metadata', session.id)
      return Response.json(
        { error: 'Missing ticket metadata' },
        { status: 400 }
      )
    }

    try {
      await recordTicketPurchase({
        userId,
        sessionId: session.id,
        metadata,
        amountTotal: session.amount_total,
        currency: session.currency,
      })
    } catch (error) {
      console.error('Failed to record ticket purchase in Clerk', error)
      return Response.json(
        { error: 'Failed to record purchase' },
        { status: 500 }
      )
    }
  }

  return Response.json({ received: true })
}
