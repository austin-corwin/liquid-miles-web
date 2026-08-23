import { EmailTemplates } from '@/features/emails/types/EmailTemplates'
import { sendEmail } from '@/features/emails/utils/sendEmail'
import { createModerateToken } from './approveToken'
import { getAppBaseUrl } from './pendingClaims'
import { formatUsdFromCents } from './ticketPricing'
import { PendingTicketClaim } from './types'

const getAdminEmails = () => {
  const fromEnv = process.env.TICKET_ADMIN_EMAILS
  if (fromEnv) {
    return fromEnv
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean)
  }
  return ['liquidmilesrace@gmail.com']
}

const getAdminCc = () => {
  const fromEnv = process.env.TICKET_ADMIN_CC
  if (fromEnv) {
    return fromEnv
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean)
  }
  return ['austincorwin5@gmail.com']
}

export const sendAdminTicketApprovalEmail = async ({
  userId,
  claim,
}: {
  userId: string
  claim: PendingTicketClaim
}) => {
  const baseUrl = getAppBaseUrl()
  const approveToken = createModerateToken({
    userId,
    claimId: claim.claimId,
    action: 'approve',
  })
  const rejectToken = createModerateToken({
    userId,
    claimId: claim.claimId,
    action: 'reject',
  })
  const approveUrl = `${baseUrl}/api/tickets/moderate?token=${encodeURIComponent(approveToken)}`
  const rejectUrl = `${baseUrl}/api/tickets/moderate?token=${encodeURIComponent(rejectToken)}`
  const amount = formatUsdFromCents(claim.amountCents)
  const merch = claim.wantsHoodie ? 'Hoodie' : 'Event tee'
  const size = claim.shirtSize ? ` · size ${claim.shirtSize}` : ''

  return sendEmail({
    to: getAdminEmails(),
    cc: getAdminCc(),
    from: 'tickets',
    replyTo: claim.email || undefined,
    subject: `Venmo ticket · ${claim.name || 'Racer'} · ${amount}`,
    template: EmailTemplates.Notice,
    messageData: {
      title: 'Confirm Venmo payment',
      message: [
        `${claim.name || 'Someone'} says they paid via Venmo.`,
        ``,
        `Name: ${claim.name || 'n/a'}`,
        `Amount: ${amount}`,
        `Ticket: ${claim.ticketLabel}`,
        `Merch: ${merch}${size}`,
        `Email: ${claim.email || 'n/a'}`,
        ``,
        `1) Open Venmo and match by name + amount.`,
        `2) Tap Approve below to unlock their ticket.`,
        ``,
        `Reject (if no matching payment): ${rejectUrl}`,
      ].join('\n'),
      cta: {
        href: approveUrl,
        'aria-label': 'Approve ticket',
        children: 'Approve ticket',
      },
    },
  })
}

export const sendBuyerTicketConfirmedEmail = async (claim: PendingTicketClaim) => {
  if (!claim.email) return null

  const baseUrl = getAppBaseUrl()
  return sendEmail({
    to: [claim.email],
    from: 'tickets',
    subject: `You're in! Liquid Miles ${claim.ticketLabel} confirmed`,
    template: EmailTemplates.Notice,
    messageData: {
      title: 'Ticket confirmed',
      recipientName: claim.name,
      message: `Your Venmo payment was confirmed. Your ${claim.ticketLabel} ticket is ready — show it at check-in.`,
      cta: {
        href: `${baseUrl}/tickets`,
        'aria-label': 'View my ticket',
        children: 'View my ticket',
      },
    },
  })
}
