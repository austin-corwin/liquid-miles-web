'use client'

import { OwnedTicketCard } from '@/features/Tickets/OwnedTicketCard'
import { PurchasedTicket } from '@/features/Tickets/types'

interface OwnedTicketsSectionProps {
  tickets: PurchasedTicket[]
  holderName?: string
}

/** Purchased ticket(s) for the signed-in user, shown on /tickets */
const OwnedTicketsSection = ({
  tickets,
  holderName,
}: OwnedTicketsSectionProps) => {
  if (tickets.length === 0) return null

  return (
    <section className='w-full flex flex-col items-center gap-6 mt-8 px-4'>
      <div className='text-center max-w-xl'>
        <h2 className='text-secondary font-primary uppercase font-extrabold text-xl lg:text-3xl'>
          Your ticket
        </h2>
        <p className='mt-2 text-secondary/90'>
          You’re locked in. Bring this confirmation to the event for check-in.
        </p>
      </div>
      <div className='flex w-full flex-col lg:flex-row flex-wrap justify-center items-stretch gap-6'>
        {tickets.map((ticket) => (
          <OwnedTicketCard
            key={ticket.sessionId}
            ticket={ticket}
            holderName={holderName}
          />
        ))}
      </div>
    </section>
  )
}

export { OwnedTicketsSection }
