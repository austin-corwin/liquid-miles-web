import { verifyModerateToken } from '@/features/Tickets/approveToken'
import {
  getAppBaseUrl,
  getPendingClaimForUser,
  updatePendingClaimStatus,
} from '@/features/Tickets/pendingClaims'
import { recordTicketPurchase } from '@/features/Tickets/recordTicketPurchase'
import { sendBuyerTicketConfirmedEmail } from '@/features/Tickets/ticketEmails'

const htmlPage = (title: string, body: string) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 36rem; margin: 3rem auto; padding: 0 1.25rem; line-height: 1.5; color: #123; }
    a { color: #1c606d; }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <p>${body}</p>
  <p><a href="${getAppBaseUrl()}/tickets">Open tickets page</a></p>
</body>
</html>`

export async function GET(req: Request) {
  const url = new URL(req.url)
  const token = url.searchParams.get('token')
  if (!token) {
    return new Response(htmlPage('Invalid link', 'Missing approval token.'), {
      status: 400,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  const payload = verifyModerateToken(token)
  if (!payload) {
    return new Response(
      htmlPage(
        'Link expired or invalid',
        'This approve/reject link is invalid or expired. Ask the buyer to tap “I’ve paid” again for a fresh email.'
      ),
      {
        status: 400,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    )
  }

  const claim = await getPendingClaimForUser(payload.userId, payload.claimId)
  if (!claim) {
    return new Response(
      htmlPage(
        'Already handled',
        'This claim is gone — it was likely already approved or removed.'
      ),
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    )
  }

  if (payload.action === 'reject') {
    await updatePendingClaimStatus({
      userId: payload.userId,
      claimId: payload.claimId,
      status: 'rejected',
    })
    return new Response(
      htmlPage(
        'Claim rejected',
        `Rejected payment from ${claim.name || 'buyer'}. They can start over from the tickets page if needed.`
      ),
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    )
  }

  if (claim.status === 'rejected') {
    return new Response(
      htmlPage('Already rejected', 'This claim was previously rejected.'),
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    )
  }

  await recordTicketPurchase({
    userId: payload.userId,
    sessionId: `venmo_${claim.claimId}`,
    metadata: {
      ticketType: claim.ticketType,
      ticketLabel: claim.ticketLabel,
      wantsHoodie: claim.wantsHoodie ? 'true' : 'false',
      shirtSize: claim.shirtSize,
      name: claim.name,
      email: claim.email,
    },
    amountTotal: claim.amountCents,
    currency: 'usd',
    paymentMethod: 'venmo',
    clearPendingClaimId: claim.claimId,
  })

  await sendBuyerTicketConfirmedEmail(claim)

  return new Response(
    htmlPage(
      'Ticket approved',
      `Approved ticket for ${claim.name || 'buyer'}. They got a confirmation email and can view their ticket on /tickets.`
    ),
    {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    }
  )
}
