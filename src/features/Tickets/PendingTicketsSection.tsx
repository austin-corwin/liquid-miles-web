'use client'

import { formatUsdFromCents } from '@/features/Tickets/ticketPricing'
import { PendingTicketClaim } from '@/features/Tickets/types'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

interface PendingTicketsSectionProps {
  claims: PendingTicketClaim[]
}

const PendingTicketsSection = ({ claims }: PendingTicketsSectionProps) => {
  if (claims.length === 0) return null

  return (
    <section className='w-full flex flex-col items-center gap-6 mt-8 px-4'>
      <div className='text-center max-w-xl'>
        <h2 className='text-secondary font-primary uppercase font-extrabold text-xl lg:text-3xl'>
          Payment in progress
        </h2>
        <p className='mt-2 text-secondary/90'>
          Finish Venmo payment or wait for us to confirm it. You’ll get an email
          when your ticket is unlocked.
        </p>
      </div>
      <div className='flex w-full flex-col gap-4 max-w-lg'>
        {claims.map((claim) => {
          const awaitingApproval = claim.status === 'awaiting_approval'
          return (
            <article
              key={claim.claimId}
              className='w-full bg-white border-2 border-secondary rounded-xl p-5 text-secondary flex flex-col gap-3'
            >
              <p className='font-primary uppercase font-extrabold text-xl'>
                {claim.ticketLabel}
              </p>
              <p>
                Total: <strong>{formatUsdFromCents(claim.amountCents)}</strong>
              </p>
              {claim.name && (
                <p>
                  Name: <strong>{claim.name}</strong>
                </p>
              )}
              <p className='text-sm'>
                Status:{' '}
                <strong>
                  {awaitingApproval
                    ? 'Waiting for Liquid Miles to confirm payment'
                    : 'Waiting for your Venmo payment'}
                </strong>
              </p>
              {!awaitingApproval && (
                <Button
                  as={Link}
                  href={`/tickets/pay?claim=${claim.claimId}`}
                  colorScheme='teal'
                  alignSelf='start'
                >
                  Continue to Venmo payment
                </Button>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export { PendingTicketsSection }
