'use client'

import { StandardCard } from '@/components/molecules/StandardCard'
import Wave from '@/components/Wave'
import { getPendingTicketsFromPublicMetadata } from '@/features/Tickets/getPendingTicketsFromPublicMetadata'
import { getTicketsFromPublicMetadata } from '@/features/Tickets/getTicketsFromPublicMetadata'
import { OwnedTicketsSection } from '@/features/Tickets/OwnedTicketsSection'
import { PendingTicketsSection } from '@/features/Tickets/PendingTicketsSection'
import { TICKET_TYPES } from '@/features/Tickets/ticketOptions'
import { Button, Heading, Icon, Spinner } from '@chakra-ui/react'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

import fullPint from '../../../public/images/fullpint.png'
import halfPint from '../../../public/images/halfpint.png'

const Tickets = () => {
  const { user, isLoaded } = useUser()
  const tickets = getTicketsFromPublicMetadata(user?.publicMetadata)
  const pendingClaims = getPendingTicketsFromPublicMetadata(
    user?.publicMetadata
  )
  const hasTicket = isLoaded && tickets.length > 0
  const hasPending = isLoaded && pendingClaims.length > 0
  const holderName =
    user?.fullName ||
    [user?.firstName, user?.lastName].filter(Boolean).join(' ') ||
    user?.primaryEmailAddress?.emailAddress

  const isClosed = false

  const TicketContent = () => (
    <div className='h-full flex p-4 flex-col items-center gap-12 lg:gap-16 mt-8'>
      <div className='lg:h-[43rem] h-full w-full flex flex-col items-center lg:flex-row lg:items-stretch gap-2 lg:gap-16'>
        <StandardCard
          header={
            <div className='flex flex-col items-center'>
              <p className='text-white  lg:text-[2.5rem] font-bold'>
                Half Pint
              </p>
              <div className='w-32 h-32 lg:w-60 lg:h-60 relative'>
                <Image fill src={halfPint} alt='Half pint' />
              </div>
            </div>
          }
          subheader='5 Beers - 5 Miles'
          body={`For those of you who aren't quite prepared enough to do the full pint, we've come up with a non-competitive alternative so that you can still participate and get a t-shirt. You'll be expected to do 5 1-mile laps and drink 5 crispy boys in under 5 hours. Since this is non-competitive, feel free to go at your own pace. Think of it like a Sunday stroll, but with beer.`}
          footer={
            <Button
              as={Link}
              href={`/tickets/info?ticket=${TICKET_TYPES.half.id}`}
              colorScheme='teal'
              className='flex items-center gap-2'
            >
              Buy Tickets
              <Icon className='flex items-center text-2xl' boxSize={4}>
                <HiArrowRight />
              </Icon>
            </Button>
          }
          variant='pintCard'
        />
        <div className='flex self-stretch items-center justify-center shrink-0'>
          <Heading className='text-secondary'>or</Heading>
        </div>
        <StandardCard
          header={
            <div className='flex flex-col items-center'>
              <p className='text-white font-bold lg:text-[2.5rem]'>Full Pint</p>
              <div className='w-32 h-32 lg:w-60 lg:h-60 relative'>
                <Image fill src={fullPint} alt='Full pint' />
              </div>
            </div>
          }
          subheader='10 Miles - 10 Beers'
          body={`The big cheese. Are you ready for it? We are. You'll be running a total of 10 1-mile laps around downtown Fort Collins, CO and consuming consuming 10 crispy boys in the process. All of this must be completed within 10 hours or you will not rank on the leaderboards or potentially be crowned King or Queen for this years race. Hope you've been training.`}
          footer={
            <Button
              as={Link}
              href={`/tickets/info?ticket=${TICKET_TYPES.full.id}`}
              colorScheme='teal'
              className='flex items-center gap-2'
            >
              Buy Tickets
              <Icon className='flex items-center text-2xl' boxSize={4}>
                <HiArrowRight />
              </Icon>
            </Button>
          }
          variant='pintCard'
        />
      </div>
    </div>
  )

  return (
    <div className='relative'>
      <div className='flex w-full flex-col min-h-screen gap-4 bg-tertiary pt-8 px-4 lg:px-8'>
        <h1 className='w-full text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-secondary border-b-4 border-secondary lg:leading-[5rem] pb-3'>
          Tickets
        </h1>
        <div className='relative bg-tertiary pb-48'>
          <div className='w-full bg-tertiary flex flex-col items-center z-10 pb-48'>
            {!isLoaded ? (
              <div className='mt-16'>
                <Spinner color='teal.600' size='lg' />
              </div>
            ) : hasTicket ? (
              <OwnedTicketsSection tickets={tickets} holderName={holderName} />
            ) : hasPending ? (
              <PendingTicketsSection claims={pendingClaims} />
            ) : !isClosed ? (
              <TicketContent />
            ) : (
              <div className='font-primary mt-8'>
                Ticket sales for 2026 have closed, stay tuned for more
                information for next year!
              </div>
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

export default Tickets
