export type TicketTypeId = 'half' | 'full'

export type PendingTicketStatus =
  | 'awaiting_payment'
  | 'awaiting_approval'
  | 'rejected'

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
  paymentMethod?: 'venmo'
}

export interface PendingTicketClaim {
  claimId: string
  /** Short code buyers put in the Venmo note */
  paymentCode: string
  ticketType: TicketTypeId
  ticketLabel: string
  wantsHoodie: boolean
  shirtSize?: string
  name?: string
  email?: string
  /** Total due in USD cents */
  amountCents: number
  status: PendingTicketStatus
  createdAt: string
  paidClaimedAt?: string
}

export interface TicketCheckoutMetadata {
  ticketType: TicketTypeId
  ticketLabel: string
  wantsHoodie: string
  shirtSize?: string
  name?: string
  email?: string
}

export const toConfirmationCode = (sessionId: string) => {
  const suffix = sessionId
    .replace(/[^a-zA-Z0-9]/g, '')
    .slice(-6)
    .toUpperCase()
  return `LM-${suffix}`
}
export const toPaymentCode = (claimId: string) => {
  const compact = claimId.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
  return `LM-${compact.slice(0, 6)}`
}
