import { createHmac, timingSafeEqual } from 'crypto'

export type TicketModerateAction = 'approve' | 'reject'

export interface TicketModeratePayload {
  userId: string
  claimId: string
  action: TicketModerateAction
  /** Unix seconds */
  exp: number
}

const getSecret = () =>
  process.env.TICKET_APPROVE_SECRET ||
  process.env.CLERK_SECRET_KEY ||
  'dev-insecure-ticket-approve-secret'

const toBase64Url = (value: string) =>
  Buffer.from(value, 'utf8').toString('base64url')

const fromBase64Url = (value: string) =>
  Buffer.from(value, 'base64url').toString('utf8')

const sign = (payloadPart: string) =>
  createHmac('sha256', getSecret()).update(payloadPart).digest('base64url')

export const createModerateToken = (
  payload: Omit<TicketModeratePayload, 'exp'>,
  ttlSeconds = 60 * 60 * 24 * 7
) => {
  const full: TicketModeratePayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  }
  const payloadPart = toBase64Url(JSON.stringify(full))
  return `${payloadPart}.${sign(payloadPart)}`
}

export const verifyModerateToken = (
  token: string
): TicketModeratePayload | null => {
  const [payloadPart, signature] = token.split('.')
  if (!payloadPart || !signature) return null

  const expected = sign(payloadPart)
  const a = Buffer.from(signature)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return null
  }

  try {
    const payload = JSON.parse(
      fromBase64Url(payloadPart)
    ) as TicketModeratePayload
    if (
      !payload?.userId ||
      !payload?.claimId ||
      (payload.action !== 'approve' && payload.action !== 'reject') ||
      typeof payload.exp !== 'number'
    ) {
      return null
    }
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null
    }
    return payload
  } catch {
    return null
  }
}
