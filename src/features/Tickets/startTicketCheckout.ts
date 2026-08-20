import getStripe from '@/utils/getStripe'

const HOODIE_PRICE_ID = process.env.NEXT_PUBLIC_HOODIE ?? ''

interface StartTicketCheckoutOptions {
  priceId: string
  includeHoodie?: boolean
}

export const startTicketCheckout = async ({
  priceId,
  includeHoodie = false,
}: StartTicketCheckoutOptions) => {
  if (!priceId) {
    console.error(
      'Missing Stripe priceId. Set NEXT_PUBLIC_HALFPINT and NEXT_PUBLIC_FULLPINT in .env.local, then restart the dev server.'
    )
    return false
  }

  if (includeHoodie && !HOODIE_PRICE_ID) {
    console.error(
      'Missing Stripe hoodie priceId. Set NEXT_PUBLIC_HOODIE in .env.local, then restart the dev server.'
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

  const params = new URLSearchParams({ priceId })
  if (includeHoodie) {
    params.set('hoodie', '1')
  }

  const response = await fetch(`/api/checkout?${params.toString()}`, {
    method: 'GET',
  })
  const data = await response.json()
  if (!data?.sessionId) {
    console.error('Checkout session was not created', data)
    return false
  }

  await stripe.redirectToCheckout({ sessionId: data.sessionId })
  return true
}
