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
  const params: Array<[string, string]> = [
    ['txn', 'pay'],
    ['audience', 'private'],
    ['recipients', username],
    ['amount', amountDollars.toFixed(2)],
  ]
  if (note?.trim()) {
    params.push(['note', note.trim()])
  }

  // Venmo (especially QR scans) treats `+` as a literal plus, not a space.
  // encodeURIComponent uses %20 so the note stays readable.
  const query = params
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')
  return `https://venmo.com/?${query}`
}

export const buildVenmoQrImageUrl = (payUrl: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(payUrl)}`

/** Soft note for Venmo — ticket type only; admin matches payer name in Venmo */
export const buildVenmoNote = (ticketLabel: string) =>
  `Liquid Miles ${ticketLabel}`
