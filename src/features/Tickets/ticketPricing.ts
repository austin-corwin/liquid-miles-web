import { TicketTypeId } from './types'

const parseDollarAmount = (value: string | undefined, fallback: number) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

/** Ticket prices in USD (whole dollars). Override via env. */
export const TICKET_AMOUNTS_USD = {
  half: parseDollarAmount(process.env.NEXT_PUBLIC_TICKET_HALF_AMOUNT, 50),
  full: parseDollarAmount(process.env.NEXT_PUBLIC_TICKET_FULL_AMOUNT, 50),
} as const

export const HOODIE_AMOUNT_USD = parseDollarAmount(
  process.env.NEXT_PUBLIC_HOODIE_AMOUNT,
  5
)

export const getTicketAmountCents = (
  ticketType: TicketTypeId,
  wantsHoodie: boolean
) => {
  const ticketDollars = TICKET_AMOUNTS_USD[ticketType]
  const hoodieDollars = wantsHoodie ? HOODIE_AMOUNT_USD : 0
  return Math.round((ticketDollars + hoodieDollars) * 100)
}

export const formatUsdFromCents = (amountCents: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amountCents / 100)
