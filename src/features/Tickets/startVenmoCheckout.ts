import { TicketTypeId } from './types'

export interface StartVenmoCheckoutOptions {
  ticketType: TicketTypeId
  includeHoodie?: boolean
  shirtSize?: string
  name?: string
  email?: string
}

/** Creates a pending Venmo claim and returns the pay page path */
export const startVenmoCheckout = async ({
  ticketType,
  includeHoodie = false,
  shirtSize,
  name,
  email,
}: StartVenmoCheckoutOptions): Promise<string | null> => {
  const response = await fetch('/api/tickets/claims', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ticketType,
      includeHoodie,
      shirtSize,
      name,
      email,
    }),
  })
  const data = await response.json()
  if (!response.ok || !data?.claimId) {
    console.error('Venmo claim was not created', data)
    return null
  }

  return `/tickets/pay?claim=${encodeURIComponent(data.claimId)}`
}
