export type TicketTypeId = 'half' | 'full'

export interface PurchasedTicket {
  sessionId: string
  ticketType: TicketTypeId
  ticketLabel: string
  wantsHoodie: boolean
  shirtSize?: string
  name?: string
  email?: string
  purchasedAt: string
  amountTotal?: number | null
  currency?: string | null
  /** Short code for day-of verification */
  confirmationCode: string
}

export interface TicketCheckoutMetadata {
  ticketType: TicketTypeId
  ticketLabel: string
  wantsHoodie: string
  shirtSize?: string
  name?: string
  email?: string
}

export const toConfirmationCode = (sessionId: string) =>
  sessionId
    .replace(/[^a-zA-Z0-9]/g, '')
    .slice(-8)
    .toUpperCase()
