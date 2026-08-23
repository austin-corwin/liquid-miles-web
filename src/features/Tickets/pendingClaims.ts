import { clerkClient } from '@clerk/nextjs/server'
import { randomUUID } from 'crypto'
import { TICKET_TYPES } from './ticketOptions'
import { getTicketAmountCents } from './ticketPricing'
import {
  PendingTicketClaim,
  PurchasedTicket,
  TicketTypeId,
  toPaymentCode,
} from './types'

export const getAppBaseUrl = () => {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '')
  if (explicit) return explicit
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:3000'
}

export const createPendingTicketClaim = async ({
  userId,
  ticketType,
  wantsHoodie,
  shirtSize,
  name,
  email,
}: {
  userId: string
  ticketType: TicketTypeId
  wantsHoodie: boolean
  shirtSize?: string
  name?: string
  email?: string
}): Promise<PendingTicketClaim> => {
  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  const existingTickets =
    (user.publicMetadata?.tickets as PurchasedTicket[] | undefined) ?? []
  if (existingTickets.length > 0) {
    throw new Error('User already has a confirmed ticket')
  }

  const existingPending =
    (user.publicMetadata?.pendingTickets as PendingTicketClaim[] | undefined) ??
    []

  // Replace any prior unfinished claims so the user only has one active path
  const claimId = randomUUID()
  const claim: PendingTicketClaim = {
    claimId,
    paymentCode: toPaymentCode(claimId),
    ticketType,
    ticketLabel: TICKET_TYPES[ticketType].label,
    wantsHoodie,
    shirtSize,
    name,
    email,
    amountCents: getTicketAmountCents(ticketType, wantsHoodie),
    status: 'awaiting_payment',
    createdAt: new Date().toISOString(),
  }

  const pendingTickets = [
    ...existingPending.filter(
      (item) =>
        item.status !== 'awaiting_payment' &&
        item.status !== 'awaiting_approval'
    ),
    claim,
  ]

  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      ...user.publicMetadata,
      pendingTickets,
    },
  })

  return claim
}

export const getPendingClaimForUser = async (
  userId: string,
  claimId: string
): Promise<PendingTicketClaim | null> => {
  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  const pending =
    (user.publicMetadata?.pendingTickets as PendingTicketClaim[] | undefined) ??
    []
  return pending.find((item) => item.claimId === claimId) ?? null
}

export const updatePendingClaimStatus = async ({
  userId,
  claimId,
  status,
  paidClaimedAt,
}: {
  userId: string
  claimId: string
  status: PendingTicketClaim['status']
  paidClaimedAt?: string
}): Promise<PendingTicketClaim | null> => {
  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  const pending =
    (user.publicMetadata?.pendingTickets as PendingTicketClaim[] | undefined) ??
    []
  const index = pending.findIndex((item) => item.claimId === claimId)
  if (index < 0) return null

  const updated: PendingTicketClaim = {
    ...pending[index],
    status,
    ...(paidClaimedAt ? { paidClaimedAt } : {}),
  }
  const pendingTickets = [...pending]
  pendingTickets[index] = updated

  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      ...user.publicMetadata,
      pendingTickets,
    },
  })

  return updated
}
