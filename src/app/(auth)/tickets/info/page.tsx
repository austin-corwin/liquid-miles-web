'use client'

import TicketInfo from '@/features/Tickets/TicketInfo'
import { Suspense } from 'react'

export default function TicketInfoPage() {
  return (
    <Suspense>
      <TicketInfo />
    </Suspense>
  )
}
