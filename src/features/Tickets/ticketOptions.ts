export const TICKET_TYPES = {
  half: {
    id: 'half',
    label: 'Half Pint',
    priceId: process.env.NEXT_PUBLIC_HALFPINT ?? '',
  },
  full: {
    id: 'full',
    label: 'Full Pint',
    priceId: process.env.NEXT_PUBLIC_FULLPINT ?? '',
  },
} as const

export type TicketTypeId = keyof typeof TICKET_TYPES

export const isTicketTypeId = (value: string | null): value is TicketTypeId =>
  value === 'half' || value === 'full'
