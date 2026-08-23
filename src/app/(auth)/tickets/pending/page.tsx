'use client'

import Wave from '@/components/Wave'
import { PageHeader } from '@/features/Pages/components/PageHeader'
import { PageLayout } from '@/features/Pages/components/PageLayout'
import { Button, Divider, Icon, VStack } from '@chakra-ui/react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useEffect } from 'react'
import { HiArrowRight } from 'react-icons/hi2'

export default function PendingPayment() {
  const { user, isLoaded } = useUser()

  useEffect(() => {
    if (!isLoaded || !user) return
    void user.reload()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user?.id])

  return (
    <div className='relative'>
      <PageLayout minHeight='calc(100vh - 4rem)' bg='secondary'>
        <PageHeader title='Thanks — we’re confirming payment' color='white' pb={2}>
          <Divider borderTopColor='secondary' borderTopWidth={2} opacity={1} />
        </PageHeader>

        <div className='container text-white mb-48 flex w-full'>
          <VStack alignItems='start' gap={6} w='full'>
            <p className='text-xl'>
              We’ve got your Venmo claim. Once we match the payment in Venmo,
              your ticket unlocks automatically and we’ll email you. You can
              check status anytime on the Tickets page.
            </p>

            <div className='flex flex-wrap gap-3 z-50'>
              <Button as={Link} href='/tickets' colorScheme='teal'>
                Back to tickets
                <Icon className='ml-2 text-2xl' boxSize={4}>
                  <HiArrowRight />
                </Icon>
              </Button>
            </div>
          </VStack>
        </div>
      </PageLayout>
      <div className='absolute bottom-0 left-0 right-0'>
        <Wave fill='#ffc800' />
      </div>
    </div>
  )
}
