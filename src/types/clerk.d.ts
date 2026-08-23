import type {
  PendingTicketClaim,
  PurchasedTicket,
} from '@/features/Tickets/types'

export {}

declare global {
  interface UserPublicMetadata {
    tickets?: PurchasedTicket[]
    pendingTickets?: PendingTicketClaim[]
  }
}
