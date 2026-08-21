import { PurchasedTicket } from './types'

export const getTicketsFromPublicMetadata = (
  publicMetadata: UserPublicMetadata | undefined
): PurchasedTicket[] => {
  const tickets = publicMetadata?.tickets
  return Array.isArray(tickets) ? tickets : []
}
