import { auth } from '@clerk/nextjs/server'
import {
  getPendingClaimForUser,
  updatePendingClaimStatus,
} from '@/features/Tickets/pendingClaims'
import { sendAdminTicketApprovalEmail } from '@/features/Tickets/ticketEmails'

export async function POST(
  _req: Request,
  context: { params: Promise<{ claimId: string }> }
) {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { claimId } = await context.params
  const claim = await getPendingClaimForUser(userId, claimId)
  if (!claim) {
    return Response.json({ error: 'Claim not found' }, { status: 404 })
  }

  if (claim.status === 'awaiting_approval') {
    return Response.json({ ok: true, status: claim.status })
  }

  if (claim.status !== 'awaiting_payment') {
    return Response.json(
      { error: `Claim cannot be marked paid from status ${claim.status}` },
      { status: 400 }
    )
  }

  const updated = await updatePendingClaimStatus({
    userId,
    claimId,
    status: 'awaiting_approval',
    paidClaimedAt: new Date().toISOString(),
  })

  if (!updated) {
    return Response.json({ error: 'Failed to update claim' }, { status: 500 })
  }

  await sendAdminTicketApprovalEmail({ userId, claim: updated })

  return Response.json({ ok: true, status: updated.status })
}
