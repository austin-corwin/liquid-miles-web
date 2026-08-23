import { TicketTypeId } from './types'

export const TICKET_TYPES = {
  half: {
    id: 'half' as const,
    label: 'Half Pint',
  },
  full: {
    id: 'full' as const,
    label: 'Full Pint',
  },
} as const

export type { TicketTypeId }

export const isTicketTypeId = (value: string | null): value is TicketTypeId =>
  value === 'half' || value === 'full'
