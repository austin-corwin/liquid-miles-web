import getStripe from '@/utils/getStripe'
import { TicketTypeId } from './types'

export interface StartTicketCheckoutOptions {
  priceId: string
  ticketType: TicketTypeId
  includeHoodie?: boolean
  shirtSize?: string
  name?: string
  email?: string
}

export const startTicketCheckout = async ({
  priceId,
  ticketType,
  includeHoodie = false,
  shirtSize,
  name,
  email,
}: StartTicketCheckoutOptions) => {
  if (!priceId) {
    console.error(
      'Missing Stripe priceId. Set NEXT_PUBLIC_HALFPINT and NEXT_PUBLIC_FULLPINT in .env.local.'
    )
    return false
  }

  const stripe = await getStripe()
  if (!stripe) {
    console.error(
      'Stripe failed to load. Check NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.'
    )
    return false
  }

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      priceId,
      ticketType,
      includeHoodie,
      shirtSize,
      name,
      email,
    }),
  })
  const data = await response.json()
  if (!data?.sessionId) {
    console.error('Checkout session was not created', data)
    return false
  }

  await stripe.redirectToCheckout({ sessionId: data.sessionId })
  return true
}
