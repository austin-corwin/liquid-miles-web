import { PendingTicketClaim } from './types'

export const getPendingTicketsFromPublicMetadata = (
  publicMetadata: UserPublicMetadata | undefined
): PendingTicketClaim[] => {
  const pending = publicMetadata?.pendingTickets
  if (!Array.isArray(pending)) return []
  return pending.filter(
    (item) =>
      item?.status === 'awaiting_payment' ||
      item?.status === 'awaiting_approval'
  )
}
