'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { Heading, Stack } from '@chakra-ui/react'
import { useClerk } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const AccountSignOut: React.FC = ({}) => {
  const { signOut } = useClerk()
  React.useEffect(() => {
    ;(async () => {
      setTimeout(async () => {
        await signOut()
        redirect('/')
      }, 500)
    })()
  }, [])
  return (
    <Stack alignItems='center' flexDirection={{ base: 'column', md: 'row' }}>
      <Heading w='full' display='flex' gap={2} {...headingRecipes.H3} as='h1'>
        <div>See ya later!</div>
        <div className='text-3xl animate-wave'>👋</div>
      </Heading>
    </Stack>
  )
}

export { AccountSignOut }
