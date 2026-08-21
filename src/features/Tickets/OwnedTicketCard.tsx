'use client'

import { PurchasedTicket } from '@/features/Tickets/types'
import Image from 'next/image'

import fullPint from '../../../public/images/fullpint.png'
import halfPint from '../../../public/images/halfpint.png'

const formatPurchaseDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      dateStyle: 'medium',
    })
  } catch {
    return iso
  }
}

interface OwnedTicketCardProps {
  ticket: PurchasedTicket
  holderName?: string
}

const OwnedTicketCard = ({ ticket, holderName }: OwnedTicketCardProps) => {
  const isHalf = ticket.ticketType === 'half'
  const pintImage = isHalf ? halfPint : fullPint
  const distanceLabel = isHalf ? '5 Beers · 5 Miles' : '10 Beers · 10 Miles'
  const displayName = ticket.name || holderName || 'Racer'

  return (
    <article className='w-full max-w-[500px] bg-secondary text-white border-2 border-secondary rounded-xl p-5 lg:p-6 flex flex-col gap-5 shadow-lg'>
      <header className='flex items-center justify-between gap-3 border-b border-white/25 pb-4'>
        <div className='flex items-center gap-3'>
          <div className='relative h-14 w-14 shrink-0'>
            <Image
              fill
              src='/logos/lm-logo.png'
              alt='Liquid Miles logo'
              className='object-contain'
              sizes='56px'
            />
          </div>
          <div>
            <p className='font-primary uppercase font-extrabold text-lg lg:text-xl leading-none'>
              Liquid Miles
            </p>
            <p className='text-sm text-white/80 mt-1'>Fort Collins, CO · 2026</p>
          </div>
        </div>
        <span className='rounded-md border border-primary bg-primary px-2 py-1 font-primary uppercase text-xs font-bold tracking-wide text-secondary'>
          Admit one
        </span>
      </header>

      <div className='flex flex-col items-center text-center gap-2'>
        <p className='font-primary uppercase font-extrabold text-3xl lg:text-[2.5rem] leading-none'>
          {ticket.ticketLabel}
        </p>
        <p className='font-bold text-white/90'>{distanceLabel}</p>
        <div className='relative w-36 h-36 lg:w-48 lg:h-48 my-2'>
          <Image
            fill
            src={pintImage}
            alt={ticket.ticketLabel}
            className='object-contain'
            sizes='(max-width: 768px) 9rem, 12rem'
          />
        </div>
      </div>

      <div className='border-t border-dashed border-white/35 pt-4 grid gap-3'>
        <div>
          <p className='text-xs uppercase tracking-widest text-white/70'>
            Participant
          </p>
          <p className='font-primary font-extrabold text-xl lg:text-2xl uppercase'>
            {displayName}
          </p>
        </div>

        <div>
          <p className='text-xs uppercase tracking-widest text-white/70'>
            Confirmation
          </p>
          <p className='font-mono text-2xl lg:text-3xl tracking-[0.2em] font-bold text-primary'>
            {ticket.confirmationCode}
          </p>
        </div>

        <div className='grid grid-cols-2 gap-3 text-sm'>
          <div>
            <p className='text-xs uppercase tracking-widest text-white/70'>
              Event
            </p>
            <p className='font-semibold'>Liquid Miles 2026</p>
          </div>
          <div>
            <p className='text-xs uppercase tracking-widest text-white/70'>
              Purchased
            </p>
            <p className='font-semibold'>
              {formatPurchaseDate(ticket.purchasedAt)}
            </p>
          </div>
          {ticket.shirtSize && (
            <div>
              <p className='text-xs uppercase tracking-widest text-white/70'>
                Size
              </p>
              <p className='font-semibold'>{ticket.shirtSize}</p>
            </div>
          )}
          <div>
            <p className='text-xs uppercase tracking-widest text-white/70'>
              Merch
            </p>
            <p className='font-semibold'>
              {ticket.wantsHoodie ? 'Hoodie' : 'Event tee'}
            </p>
          </div>
        </div>
      </div>

      <footer className='border-t border-white/25 pt-3 text-center text-sm text-white/80'>
        Show this ticket at check-in for verification. Prost!
      </footer>
    </article>
  )
}

export { OwnedTicketCard }
