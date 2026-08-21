import { auth } from '@clerk/nextjs/server'
import {
  HOODIE_PRICE_ID,
  isTicketTypeId,
  TICKET_TYPES,
} from '@/features/Tickets/ticketOptions'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
})

interface CheckoutBody {
  priceId?: string
  ticketType?: string
  includeHoodie?: boolean
  shirtSize?: string
  name?: string
  email?: string
}

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: CheckoutBody
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { priceId, ticketType, includeHoodie, shirtSize, name, email } = body

  if (!priceId) {
    return Response.json({ error: 'Missing priceId' }, { status: 400 })
  }

  if (!ticketType || !isTicketTypeId(ticketType)) {
    return Response.json({ error: 'Missing or invalid ticketType' }, {
      status: 400,
    })
  }

  const ticket = TICKET_TYPES[ticketType]
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    { price: priceId, quantity: 1 },
  ]

  if (includeHoodie) {
    if (!HOODIE_PRICE_ID) {
      return Response.json(
        { error: 'Missing NEXT_PUBLIC_HOODIE price ID' },
        { status: 400 }
      )
    }
    line_items.push({ price: HOODIE_PRICE_ID, quantity: 1 })
  }

  const host = req.headers.get('host')
  const protocol = host?.includes('localhost') ? 'http' : 'https'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    client_reference_id: userId,
    customer_email: email || undefined,
    success_url: `${protocol}://${host}/tickets/success`,
    cancel_url: `${protocol}://${host}/tickets`,
    metadata: {
      ticketType,
      ticketLabel: ticket.label,
      wantsHoodie: includeHoodie ? 'true' : 'false',
      ...(shirtSize ? { shirtSize } : {}),
      ...(name ? { name } : {}),
      ...(email ? { email } : {}),
    },
  })

  return Response.json({ sessionId: session.id })
}
