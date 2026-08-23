import { auth } from '@clerk/nextjs/server'
import { getPendingClaimForUser } from '@/features/Tickets/pendingClaims'

export async function GET(
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

  return Response.json({ claim })
}
