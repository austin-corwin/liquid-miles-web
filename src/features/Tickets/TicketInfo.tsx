'use client'

import Wave from '@/components/Wave'
import { TicketSuccessForm } from '@/features/contactForms/components/forms/TicketSuccessForm'
import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { isTicketTypeId, TICKET_TYPES } from './ticketOptions'

const TicketInfo = () => {
  const searchParams = useSearchParams()
  const ticketParam = searchParams.get('ticket')
  const ticket = isTicketTypeId(ticketParam) ? TICKET_TYPES[ticketParam] : null

  return (
    <div className='relative'>
      <div className='flex w-full flex-col min-h-screen gap-4 bg-tertiary pt-8 px-4 lg:px-8'>
        <h1 className='w-full text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-secondary border-b-4 border-secondary lg:leading-[5rem] pb-3'>
          Shirt Info
        </h1>
        <div className='relative bg-tertiary pb-48'>
          <div className='w-full max-w-3xl mx-auto flex flex-col items-center z-10 pb-48 gap-8'>
            {!ticket ? (
              <div className='flex flex-col items-center gap-4 text-center pt-8'>
                <p className='font-primary'>
                  Choose a Half Pint or Full Pint ticket first.
                </p>
                <Button as={Link} href='/tickets' colorScheme='teal'>
                  Back to tickets
                </Button>
              </div>
            ) : (
              <>
                <p className='text-secondary font-primary uppercase font-extrabold text-xl lg:text-3xl text-center mt-8'>
                  {ticket.label} includes a 2026 event t-shirt
                </p>
                <div className='relative w-full aspect-square max-h-[28rem]'>
                  <Image
                    fill
                    src='/images/t-shirt-mockups.png'
                    alt='Liquid Miles 2026 event t-shirt, front and back'
                    className='object-contain'
                    sizes='(max-width: 768px) 100vw, 48rem'
                    priority
                  />
                </div>
                <p className='text-center max-w-xl'>
                  Tell us your name, email, and shirt size so we can order the
                  right shirt. After you submit, you’ll continue to payment for
                  your {ticket.label} ticket. (Yes we know that the mockup above
                  says &apos;September&apos;, we assure you the real merch will
                  say &apos;October&apos;)
                </p>
                <div className='w-full bg-white rounded-xl p-6 text-black'>
                  <TicketSuccessForm ticketType={ticket.id} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='z-0 absolute bottom-0 left-0 right-0'>
        <Wave fill='#1C606D' />
      </div>
    </div>
  )
}

export default TicketInfo
