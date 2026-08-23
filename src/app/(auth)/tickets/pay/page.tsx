import TicketPay from '@/features/Tickets/TicketPay'
import { Suspense } from 'react'

export default function TicketPayPage() {
  return (
    <Suspense>
      <TicketPay />
    </Suspense>
  )
}
