/** Public Venmo handle without @ */
export const getVenmoUsername = () =>
  (process.env.NEXT_PUBLIC_VENMO_USERNAME || '').replace(/^@/, '').trim()

/**
 * Cross-platform Venmo pay URL with amount (+ optional note) prefilled.
 * Opens the Venmo app on mobile when installed; web checkout otherwise.
 */
export const buildVenmoPayUrl = ({
  username,
  amountDollars,
  note,
}: {
  username: string
  amountDollars: number
  note?: string
}) => {
  const params = new URLSearchParams({
    txn: 'pay',
    audience: 'private',
    recipients: username,
    amount: amountDollars.toFixed(2),
  })
  if (note?.trim()) {
    params.set('note', note.trim())
  }
  return `https://venmo.com/?${params.toString()}`
}

export const buildVenmoQrImageUrl = (payUrl: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(payUrl)}`

/** Soft note for Venmo — ticket type only; admin matches payer name in Venmo */
export const buildVenmoNote = (ticketLabel: string) =>
  `Liquid Miles - ${ticketLabel}`
