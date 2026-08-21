import { TicketTypeId } from './types'

export const TICKET_TYPES = {
  half: {
    id: 'half' as const,
    label: 'Half Pint',
    priceId: process.env.NEXT_PUBLIC_HALFPINT ?? '',
  },
  full: {
    id: 'full' as const,
    label: 'Full Pint',
    priceId: process.env.NEXT_PUBLIC_FULLPINT ?? '',
  },
} as const

export const HOODIE_PRICE_ID = process.env.NEXT_PUBLIC_HOODIE ?? ''

export const isTicketTypeId = (value: string | null): value is TicketTypeId =>
  value === 'half' || value === 'full'

export const getTicketTypeFromPriceId = (
  priceId: string
): TicketTypeId | null => {
  if (priceId && priceId === TICKET_TYPES.half.priceId) return 'half'
  if (priceId && priceId === TICKET_TYPES.full.priceId) return 'full'
  return null
}
