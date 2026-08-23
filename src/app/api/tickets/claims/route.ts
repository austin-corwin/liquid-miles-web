import { auth } from '@clerk/nextjs/server'
import { createPendingTicketClaim } from '@/features/Tickets/pendingClaims'
import { isTicketTypeId } from '@/features/Tickets/ticketOptions'

interface CreateClaimBody {
  ticketType?: string
  includeHoodie?: boolean
  shirtSize?: string
  name?: string
  email?: string
}

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: CreateClaimBody
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { ticketType, includeHoodie, shirtSize, name, email } = body
  if (!ticketType || !isTicketTypeId(ticketType)) {
    return Response.json({ error: 'Invalid ticketType' }, { status: 400 })
  }

  try {
    const claim = await createPendingTicketClaim({
      userId,
      ticketType,
      wantsHoodie: Boolean(includeHoodie),
      shirtSize,
      name,
      email,
    })
    return Response.json({ claimId: claim.claimId, paymentCode: claim.paymentCode })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to create claim'
    const status = message.includes('already has') ? 409 : 500
    return Response.json({ error: message }, { status })
  }
}
