'use client'

import Wave from '@/components/Wave'
import { PageHeader } from '@/features/Pages/components/PageHeader'
import { PageLayout } from '@/features/Pages/components/PageLayout'
import { Button, Divider, Icon, VStack } from '@chakra-ui/react'
// import { TicketSuccessForm } from '@/features/contactForms/components/forms/TicketSuccessForm'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

export default function Success() {
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
              confirmation email with the details. If you have questions, you
              can always check our FAQs or reach out via the contact form.
            </p>

            {/* <Divider
              borderTopColor='secondary'
              borderTopWidth={2}
              opacity={1}
            /> */}

            {/* <div className='w-full bg-white rounded-xl p-6 text-black'>
              <TicketSuccessForm />
            </div> */}

            <div className='flex flex-wrap gap-3 z-50'>
              <Button
                as={Link}
                href='/faqs'
                // variant='outline'
                colorScheme='teal'
              >
                View FAQs
              </Button>
              <Button as={Link} href='/' colorScheme='teal'>
                Go back home
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
