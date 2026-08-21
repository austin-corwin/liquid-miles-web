import { clerkClient } from '@clerk/nextjs/server'
import {
  PurchasedTicket,
  TicketCheckoutMetadata,
  TicketTypeId,
  toConfirmationCode,
} from './types'

const isTicketTypeId = (value: unknown): value is TicketTypeId =>
  value === 'half' || value === 'full'

export const parseCheckoutMetadata = (
  metadata: Record<string, string> | null | undefined
): TicketCheckoutMetadata | null => {
  if (!metadata?.ticketType || !isTicketTypeId(metadata.ticketType)) {
    return null
  }

  return {
    ticketType: metadata.ticketType,
    ticketLabel: metadata.ticketLabel || metadata.ticketType,
    wantsHoodie: metadata.wantsHoodie === 'true' ? 'true' : 'false',
    shirtSize: metadata.shirtSize || undefined,
    name: metadata.name || undefined,
    email: metadata.email || undefined,
  }
}

export const recordTicketPurchase = async ({
  userId,
  sessionId,
  metadata,
  amountTotal,
  currency,
}: {
  userId: string
  sessionId: string
  metadata: TicketCheckoutMetadata
  amountTotal?: number | null
  currency?: string | null
}) => {
  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  const existing =
    (user.publicMetadata?.tickets as PurchasedTicket[] | undefined) ?? []

  if (existing.some((ticket) => ticket.sessionId === sessionId)) {
    return existing
  }

  const purchase: PurchasedTicket = {
    sessionId,
    ticketType: metadata.ticketType,
    ticketLabel: metadata.ticketLabel,
    wantsHoodie: metadata.wantsHoodie === 'true',
    shirtSize: metadata.shirtSize,
    name: metadata.name,
    email: metadata.email,
    purchasedAt: new Date().toISOString(),
    amountTotal: amountTotal ?? null,
    currency: currency ?? null,
    confirmationCode: toConfirmationCode(sessionId),
  }

  const tickets = [...existing, purchase]

  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      ...user.publicMetadata,
      tickets,
    },
  })

  return tickets
}
