'use client'

import Wave from '@/components/Wave'
import { PageHeader } from '@/features/Pages/components/PageHeader'
import { PageLayout } from '@/features/Pages/components/PageLayout'
import { Button, Divider, Icon, VStack } from '@chakra-ui/react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useEffect } from 'react'
import { HiArrowRight } from 'react-icons/hi2'

export default function Success() {
  const { user, isLoaded } = useUser()

  // Refresh Clerk metadata so /tickets sees the webhook-recorded ticket
  useEffect(() => {
    if (!isLoaded || !user) return
    void user.reload()
    // Intentionally run once after the signed-in user is available
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user?.id])

  return (
    <div className='relative'>
      <PageLayout minHeight='calc(100vh - 4rem)' bg='secondary'>
        <PageHeader title='Payment successful 🎉' color='white' pb={2}>
          <Divider borderTopColor='secondary' borderTopWidth={2} opacity={1} />
        </PageHeader>

        <div className='container text-white mb-48 flex w-full'>
          <VStack alignItems='start' gap={6} w='full'>
            <p className='text-xl'>
              Thanks for your purchase! Your spot is confirmed. We’ve sent a
              confirmation email with the details. You can view your ticket
              anytime on the Tickets page.
            </p>

            <div className='flex flex-wrap gap-3 z-50'>
              <Button as={Link} href='/tickets' colorScheme='teal'>
                View my ticket
                <Icon className='ml-2 text-2xl' boxSize={4}>
                  <HiArrowRight />
                </Icon>
              </Button>
              <Button
                as={Link}
                href='/faqs'
                colorScheme='teal'
                variant='outline'
              >
                View FAQs
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
